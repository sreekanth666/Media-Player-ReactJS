import React from 'react'
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap'
import music from '../music.gif'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigateByUrl = useNavigate()
    const navigate = () => {
        navigateByUrl('/home')
    }
    return (
        <div>
            <div style={{backgroundColor: '#f6f6f6', height: '90vh'}}>
                <Container>
                    <Row className='pt-5 pb-5 align-items-center'>
                        <Col>
                            <h3>Welcome to MediaPoint</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium error expedita ullam quia perferendis quisquam fugit, hic provident minus accusamus libero dolor iste assumenda, nulla sit ducimus laborum, voluptas nam!</p>
                            <Button variant="primary" onClick={navigate}>Get Started</Button>
                        </Col>
                        <Col>
                            <Image src={music} rounded className='img-fluid'/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='mt-5 mb-5'>
                <Container>
                    <h3 className='text-center'>Features</h3>
                    <div className='d-flex align-items-center justify-content-evenly'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img height={`200px`} variant="top" src="https://i.pinimg.com/originals/cf/6f/cf/cf6fcf14be2cd01dd4923b36445ca632.gif" />
                            <Card.Body>
                                <Card.Title>Manage Videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
            
                        <Card style={{ width: '18rem' }}>
                            <Card.Img height={`200px`} variant="top" src="https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
            
                        <Card style={{ width: '18rem' }}>
                            <Card.Img height={`200px`} variant="top" src="https://images.squarespace-cdn.com/content/v1/588b0c9115d5dbbd78c854a0/1489418574325-S4EW2T46COVYFOBRM0A7/WAVE-1s.gif?format=2500w" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>

            <div className='mt-5 mb-5'>
                <Container className='border p-4 rounded'>
                    <Row className='align-items-center'>
                        <Col>
                            <h3>Simple, Fast and Powerful</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium error expedita ullam quia perferendis quisquam fugit, hic provident minus accusamus libero dolor iste assumenda, nulla sit ducimus laborum, voluptas nam!</p>
                        </Col>
                        <Col>
                        <iframe max-width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=Exq_icBPPEkxB-el" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded'></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default LandingPage