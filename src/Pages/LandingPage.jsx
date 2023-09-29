import React from 'react'
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap'
import music from '../music.gif'

function LandingPage() {
    return (
        <div>
        <div style={{backgroundColor: '#f6f6f6'}}>
            <Container>
                <Row className='pt-5 pb-5 align-items-center'>
                    <Col>
                        <h3>Welcome to MediaPoint</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium error expedita ullam quia perferendis quisquam fugit, hic provident minus accusamus libero dolor iste assumenda, nulla sit ducimus laborum, voluptas nam!</p>
                        <Button variant="primary">Primary</Button>
                    </Col>
                    <Col>
                        <Image src={music} rounded className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </div>

        <Container className='mt-5 mb-5'>
            <h3 className='text-center'>Features</h3>
            <div className='d-flex align-items-center justify-content-evenly'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img height={`200px`} variant="top" src="https://i.pinimg.com/originals/cf/6f/cf/cf6fcf14be2cd01dd4923b36445ca632.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
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
    )
}

export default LandingPage