import React, { useState } from 'react'
import Add from "../components/Add"
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'


function Home() {

  const[uploadVideoServerResponse,setUploadVideoServerRespnose] = useState({})
  return (
    <>
      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoServerRespnose={setUploadVideoServerRespnose} />
        </div>
        <Link to={'/watchhistory'} style={{ textDecoration: 'none', fontSize: '20px', color: "darkgoldenrod", letterSpacing: '0.3rem' }}>  Watch History </Link>

      </div>

      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between">
        <div className="all-videos col-lg-9">
          <h3>All videos</h3>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className="catagory col-lg-3">
          <Category />
        </div>



      </div>





    </>



  )

}

export default Home