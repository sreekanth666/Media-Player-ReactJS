import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'

function Home() {
    const [uploadVideoResponse, setUploadVideoResponse] = useState()
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col lg={8}>
                        <Add setUploadVideoResponse={setUploadVideoResponse}/>
                    </Col>
                    <Col lg={4}>
                        <Link to='/watch-history' style={{textDecoration:'none', color:'black'}}>Watch History <i class="fa-solid fa-clock-rotate-left"></i></Link>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={8}>
                        <h4>All Videos</h4>
                        <View uploadVideoResponse={uploadVideoResponse}/>
                    </Col>
                    <Col>
                        <Category />
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Home

