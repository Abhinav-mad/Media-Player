import React, { useEffect, useState } from 'react'

import {Button,Modal,Form, Row, Col} from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCatogary, deleteCatogary, getAVideo, getAllCatogary, updateCatogary } from '../services/allApi';
import ViddeoCard from './ViddeoCard';

function Category() {

   
  const [show, setShow] = useState(false);

  const[catagoryName,setCatogaryName] = useState("")
  
  const [allCatogary,setAllCatogary]= useState('')
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const handleCatagory = async ()=>{
  if(catagoryName){
    //make api call
let body ={
  catagoryName,allVideos:[]
}
const response = await addToCatogary(body)

   if(response.status>=200 && response.status<300 ){
     handleClose()

     //reset input
    setCatogaryName("")
   }else{
    toast.error("something went wrong")
   }

  }else{
 toast.warning("provide catogary name")
  }
}

const handleDelete  = async (id)=>{
  await deleteCatogary(id)
  getCatagories()
}



const getCatagories = async ()=>{
  const {data} = await getAllCatogary()
  setAllCatogary(data)
}




useEffect(()=>{
  getCatagories()
},[])

const dragOver = (e)=>{
  e.preventDefault()


}


const videoDrop = async (e,catagoryId)=>{
  console.log("video dropped inside catagory id "+catagoryId)
  const videoId = e.dataTransfer.getData('videoId')
  console.log(videoId)

  //get video details
  const {data}= await getAVideo(videoId)
  console.log(data);
  //get cataogry details
  const selectedCatagory = allCatogary?.find(item=>item.id===catagoryId)
  selectedCatagory.allVideos.push(data)
  console.log(selectedCatagory)


  //make api catagory to update catagory
  await updateCatogary(catagoryId,selectedCatagory)
  getCatagories()
}

  return (
    
    <>    
    <div className='d-grid ms-3'>
      <button onClick={handleShow} className='btn btn-info'>Add to catagory</button>
                    
    </div>

    {
      allCatogary?allCatogary?.map(item=>(
        <div className="mt-5 mb=3 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className="d-flex align-items-center justify-content-between">
            <h6>{item?.catagoryName}</h6>
            <button className='btn'  onClick={()=>handleDelete(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
          </div>

        <Row>
          {item?.allVideos && item?.allVideos.map(card=>(

             <Col sm={12}>

             <ViddeoCard displayData={card} insideCatogary={true} />
             
             </Col>
                      
          ))
          
          
          }
        </Row>






        </div>
      )):<p className='fa-bolder text-danger fs-5'>Nothing to display here</p>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
       <Form>

       
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter catogary Name</Form.Label>
         <Form.Control type="text" placeholder="Enter catogary name"  onChange={(e)=>setCatogaryName(e.target.value)}/>
      </Form.Group>
  
     
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCatagory}>Add</Button>
        </Modal.Footer>
      </Modal>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    
    </>

  )
}

export default Category