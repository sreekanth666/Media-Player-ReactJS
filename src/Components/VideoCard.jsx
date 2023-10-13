import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { addHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayData, setDeleteVideoStatus, insideCategory}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
        const {caption, embedLink} = displayData
        let today = new Date()
        const timeStamp = new Intl.DateTimeFormat("en-US", {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}).format(today)
        console.log(timeStamp);

        let reqBody = {caption, embedLink, timeStamp}
        await addHistory(reqBody)
    }
    
    const handleDelete = async(id) => {
        const deleteStatus = await deleteVideo(id)
        setDeleteVideoStatus(true)
        console.log(deleteStatus);
    }

    const dragStart = (e, id) => {
        console.log("Drag Started");
        e.dataTransfer.setData("cardId", id)
    }

    return (
        <>
            <Card className='m-2' draggable onDragStart={(e) => dragStart(e, displayData?.id)}>
                <Card.Img onClick={handleShow} variant="top" className='img-fluid' src={`${displayData.url}`} />
                <Card.Body className='p-1'>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        {displayData.caption}
                        {insideCategory ? "" : <Button className='btn-light' onClick={() => handleDelete(displayData?.id)}><i class="fa-solid fa-circle-minus text-danger"></i></Button>}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{displayData.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400px" src={`${displayData.embedLink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard

