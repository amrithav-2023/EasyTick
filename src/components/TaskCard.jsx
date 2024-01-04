import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { deleteTask, getAllTask } from '../services/allAPI';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';import Modal from 'react-bootstrap/Modal';




function TaskCard() {

  const [allTask,setAllTask]=useState([])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to upload task
  const getAlluploadedTask = async ()=>{
    const response = await getAllTask()
    //console.log(response);
    const {data}= response
    //console.log(data);
    setAllTask(data)
  }
  //console.log(allTask);

  //function to delete task
  const removeTask = async (id)=>{
    const response = await deleteTask(id)
    console.log(response);
  }

  //function to edit task
  /* const editTask = async (id)=>{
    const response = await editTask(id)
    console.log(response);

  } */

  useEffect(()=>{
    getAlluploadedTask()
  },[allTask])

  const dragStarted = (e,id)=>{
    console.log(`card ${id} dragging`);
    e.dataTransfer.setData('taskID',id)
  }

  return (
    <div className='p-5'>
      <Row className=''>
        {allTask.length>0?
        allTask?.map((task)=>(
          <Col md={3} lg={3} sm={12} className='mb-3'>
        <Card style={{ width: '18rem', height:"300px"}} draggable onDragStart={(e)=>dragStarted(e,task.id)}>
        <Card.Body className=''>
       <div style={{marginTop:"20px"}} className='bg-danger rounded border text-light w-50 '>
            <Card.Title className='d-flex align-items-center justify-content-center'>
                {task.taskname}
            </Card.Title>
       </div>
        <div style={{marginTop:"50px"}}>
            <Card.Text>
             {task.description}
             </Card.Text>
        </div>
        <div style={{marginTop:"40px"}} className='d-flex justify-content-end'>
             <button className='btn' onClick={()=>removeTask(task.id)}><i class="fa-solid fa-trash"></i></button>
             <button className='btn' onClick={handleShow}><i class="fa-solid fa-share"></i></button>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter the task"
                autoFocus
                /* onChange={(e)=>setTasks({...tasks,taskname:e.target.value})} */
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" rows={3} 
              /* onChange={(e)=>setTasks({...tasks,description:e.target.value})} */
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </Card.Body>
    </Card>
        </Col>
        ))
          :
        <p>Nothing to display</p>
        }
      </Row>

    </div>
  )
}

export default TaskCard