import React, { useState } from 'react'
import { Card,Button,Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideos } from '../services/allApi';




function ViddeoCard({displayData,setDeletevideoStatus,insideCatogary}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
  setShow(true);


  //make api call to http://localhost:4000/history
const {caption,embedlink} = displayData

let today = new Date()

let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric', month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)

let videoDetails={
  caption,embedlink,timeStamp
}
await addToHistory(videoDetails)


  }
  //delete a video

  const removeVideo = async (id)=>{
    const response = await deleteAVideos(id)
    setDeletevideoStatus(true)
  }

const dragStarted = (e,id)=>{
  console.log("drag started "+ id)
  console.log(e)
  e.dataTransfer.setData('videoId',id)
}


  return (
    <>
           <Card className='mt-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img variant="top" onClick={handleShow} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
         { insideCatogary?"":<button className='btn  ' onClick={()=>removeVideo(displayData?.id)}><i class="fa-regular fa-trash-can fa-xl" style={{color:'#c80909'}}></i></button>}
       </Card.Title>
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="315" src= {`${displayData?.embedlink}?autoplay=1`} 
        title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

        </iframe>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ViddeoCard