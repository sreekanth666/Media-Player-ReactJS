import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoResponse}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video, setVideo] = useState({
        id: "",
        caption: "",
        url: "",
        embedLink: ""
    })
    console.log(video);

    const extractURL = (e) => {
        const {value} = e.target
        if (value) {
            const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
            setVideo({...video, embedLink:embedData})
        } else {
            setVideo("")
        }
    }

    const handleUpload = async() => {
        const{id, caption, url, embedLink} = video

        if(!id || !caption || !url || !embedLink) {
            toast.warning("Please fill the details")
        } else {
            const response = await uploadVideo(video)

            if(response.status >= 200 && response.status < 300){
                toast.success(`"${response.data.caption}" upload successfully`)
                setUploadVideoResponse(response.data)
                setVideo({
                    id: "",
                    caption: "",
                    url: "",
                    embedLink: ""
                })
            } else {
                toast.error("Error encountered, please wait")
            }
            console.log(response);
        }
    }

    
    return (
        <>
            <div className='d-flex align-items-center'>
                <h5>Add new video</h5>
                <Button onClick={handleShow} className='btn text-dark border-0' style={{backgroundColor:"transparent",boxShadow:'none'}}><i class="fa-solid fa-circle-plus fs-3"></i></Button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Upload video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details</p>
                    <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Video ID" onChange={(e) => setVideo({...video, id:e.target.value})} value={video.id} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Video caption" onChange={(e) => setVideo({...video, caption:e.target.value})} value={video.caption} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Video thumbnail URL" onChange={(e) => setVideo({...video, url:e.target.value})} value={video.url} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Video link" onChange={extractURL} value={video.em} />
                    </Form.Group>
                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer 
                position='top-center'
                theme='colored'
                autoClose={2000}
            />
        </>
    )
}

export default Add

