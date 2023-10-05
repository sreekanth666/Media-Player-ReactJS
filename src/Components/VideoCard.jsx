import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react';

function VideoCard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className='m-2'>
                <Card.Img onClick={handleShow} variant="top" className='img-fluid' src="https://i.ytimg.com/vi/1E051WtpyWg/maxresdefault.jpg" />
                <Card.Body className='p-1'>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        Video Caption <i class="fa-solid fa-circle-minus text-danger"></i>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/nq1M_Wc4FIc?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard