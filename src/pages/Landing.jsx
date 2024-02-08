import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landing() {
    const navigateByUrl = useNavigate()
    return (
        <div>
            <Row className='mt-5 align-items-center justify-content-between'>
                <Col></Col>
                <Col lg={5}>
                    <h1>Welcome to <span className='text-warning'>Media Player</span>  </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas labore dicta omnis optio doloribus quis sequi, doloremque necessitatibus autem provident ducimus, nihil dignissimos nostrum, corrupti laboriosam accusamus distinctio fugiat?
                    </p>
                    <button  className='mt-4 btn btn-primary' onClick={()=>navigateByUrl('/home')}>Get started</button>
                </Col>
                <Col lg={5}>
                    <img className='border rounded shadow' src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
                </Col>
                <Col></Col>


            </Row>

            <div className='container mb-5 mt-5 align-items-center justify-content-center flrx-column'>
                <h3>Features</h3>
                <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width={'300px'} height={'300px'} src="https://cdn.dribbble.com/users/422171/screenshots/5353624/video_player.gif" />
                        <Card.Body>
                            <Card.Title>Managing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width={'300px'} height={'300px'} src="https://i.pinimg.com/originals/b8/c3/6b/b8c36b0139cdc415ddf05aa5eb47e83f.gif" />
                        <Card.Body>
                            <Card.Title>Managing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width={'300px'} height={'300px'} src="https://i.pinimg.com/originals/b8/c3/6b/b8c36b0139cdc415ddf05aa5eb47e83f.gif" />
                        <Card.Body>
                            <Card.Title>Managing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>



            </div>

            <div className='container border rounded border-secondary p-5 mt-5 d-flex align-items-center justify-content-between w-100'>
                <div className='col-lg-5'>
                    <h3 className='mb-3 text-warning'>Simple And Powerfull</h3>
                    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, omnis. Perspiciatis maxime iure sapiente vitae nulla
                        velit voluptatum ducimus assumenda dolor nam, fuga, minus recusandae? Ea explicabo laboriosam iste neque!

                    </h6>
                    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Catagorize Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, omnis. Perspiciatis maxime iure sapiente vitae nulla
                        velit voluptatum ducimus assumenda dolor nam, fuga, minus recusandae? Ea explicabo laboriosam iste neque!

                    </h6>
                    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Manage Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, omnis. Perspiciatis maxime iure sapiente vitae nulla
                        velit voluptatum ducimus assumenda dolor nam, fuga, minus recusandae? Ea explicabo laboriosam iste neque!

                    </h6>



                </div>
                <div className='video col-lg-5'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GPhDoRstFho?si=wQBgk0P-UEO4HdXh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                    </iframe>

                </div>
            </div>



        </div>
    )
}

export default Landing