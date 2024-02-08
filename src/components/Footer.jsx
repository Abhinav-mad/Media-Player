import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <MDBFooter bgColor='dark' className='text-center text-lg-start text-light p-2'>
    

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i class="fa-solid fa-video" >video player</i>
               
                 
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <Link to="/"><a  className='text-reset'>
                  Landing Page
                </a>
                </Link>
                
              </p>
              <p>
               <Link to="/home">
               <a  className='text-reset'>
                  Home Page
                </a></Link>
              </p>
              <p>
              <Link  to="/watchhistory">
              <a  className='text-reset'>
                  Watch history
                </a></Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a  className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  React Bootstrsp
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Bootswatch
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                
                <input type="text"  />
                <button  className="btn btn-warning ms-1">Sunscribe</button>

              </p>
              <p>
              <div >
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Videoplayer.buildwithreact.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer