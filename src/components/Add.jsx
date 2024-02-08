import React, { useState } from 'react'

import { Button, Modal, Form, Toast } from 'react-bootstrap';
import { uploadVideos } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerRespnose}) {

  const [video, setVideo] = useState({
    id: "", caption: "", url: "", embedlink: ""
  })

  function getEmbedLink(event) {
    const { value } = event.target
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`

    if (value) {
      setVideo({ ...video, embedlink: link })

    } else {
      setVideo({ ...video, embedlink: "" })

    }
  }
const handleUpload = async()=>{
  const {id,caption,url,embedlink} =video
  if(!id|| !caption || !url || !embedlink ){
    toast.warning("please fill out the fields")
  }else{
   const response =  await uploadVideos(video)
   console.log(response)

   if(response.status>200 && response.status<300){
    toast.success(`${response.data.caption} video uploaded`)
    //set server resonse state
    setUploadVideoServerRespnose(response.data)


    handleClose()

    //reset input field
    setVideo({  id: "", caption: "", url: "", embedlink: ""})

   }else{
    console.log(response);
    toast("something went wrong")
   }
  }

}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <div className="d-flex align-items-center">
        <h5>upload videos</h5>
        <button className='btn  btn-outline-secondary ' onClick={handleShow}><i class="fa-solid fa-plus fa-beat-fade"></i></button>
      </div>



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

          <p>  Fill the folllowing fields </p>
          <Form>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter video id" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter video title" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter video Image url" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter video title" onChange={getEmbedLink} />
            </Form.Group>
          </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
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

export default Add