import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViddeoCard from './ViddeoCard'
import { getAllVideos } from '../services/allApi'


function View({ uploadVideoServerResponse }) {

   const [allvideos, setAllvideos] = useState([])

   const [deleteVideostatus, setDeletevideoStatus] = useState(false)

   const getAllUploadedVideos = async () => {
      const  {data}  = await getAllVideos()  //aynchrounes function so no .then ,can make use of try and catch also use status property of the response obj
      console.log(data)
      setAllvideos(data)
   }

   useEffect(() => {
      getAllUploadedVideos()
      setDeletevideoStatus(false)
   }, [uploadVideoServerResponse, deleteVideostatus])

   console.log(allvideos)
   return (
      <>
         <Row>

            {allvideos.length > 0 ?

               allvideos.map(videos => (

                  <Col sm={12} md={6} lg={4} xl={3} >
                     <ViddeoCard displayData={videos} deleteVideostatus={deleteVideostatus} setDeletevideoStatus={setDeletevideoStatus} />
                  </Col>

               )) : <p className='fw-bolder0'>nothing to display </p>




            }


         </Row>


      </>
   )
}

export default View