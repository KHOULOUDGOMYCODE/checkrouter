import React, { useState } from "react";
import { Button, Modal} from 'react-bootstrap';

function AddNewCard({handleAdd}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPosterUrl, setnewPosterUrl] = useState('');
    const [newRate, setNewRate] = useState();
  
    return (
      <div className='add'>
      <>
        <Button variant="primary"  onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie card</Modal.Title>
          </Modal.Header>
  
  <Modal.Body >
  <input 
  className='title'
type='text'
name='title' 
 placeholder='Movie title'
value={newTitle}
onChange = { (event) => setNewTitle(event.target.value )}/>
<input 
className='desc'
type='text'
name='description' 
 placeholder='Movie Description'
value={newDescription}
onChange = { (event) => setNewDescription(event.target.value )}/>
<input 
className='post'
type='text'
name='title' 
 placeholder='Movie Poster'
value={newPosterUrl}
onChange = { (event) => setnewPosterUrl(event.target.value )}/>
<input 
className='rate'
type='text'
name='title' 
 placeholder='Movie rate'
value={newRate}
onChange = { (event) => setNewRate(event.target.value )}/></Modal.Body>
          <Modal.Footer>
         
            <Button variant="primary" onClick={()=>{handleAdd
      ({title:newTitle, description:newDescription, posterUrl:newPosterUrl,rate:newRate}) ; handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      </div>
    );
  }
  
  export default AddNewCard;