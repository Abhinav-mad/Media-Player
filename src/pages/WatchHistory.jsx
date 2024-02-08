import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allApi'

function WatchHistory() {


  const [history, setHistory] = useState([])

  const handleHistory = async () => {
    const { data } = await getAllHistory()
    setHistory(data)
  }

  useEffect(() => {
    handleHistory()
  }, [])


  const handleDeletehistory = async (id) => {
    //make delete apicall
    await deleteHistory(id)

    handleHistory()
  }


  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h3>Watch history</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', fontSize: '20px', color: 'blueviolet' }}><i class="fa-solid fa-circle-arrow-left fa-beat-fade me-2">Back to home</i></Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {history.length>0 ? history?.map((item, index) => (
            <tr key={item?.id}>
              <td>{index + 1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.embedlink} target='_blank'>{item?.embedlink}</a></td>
              <td>{item?.timeStamp}</td>
              <td><button className='btn' onClick={() => { handleDeletehistory(item?.id) }}><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>

          )) : <p className='fw-bolder text-danger fs-5'>Nothing to display </p>


          }
        </tbody>

      </table>

    </>
  )
}

export default WatchHistory