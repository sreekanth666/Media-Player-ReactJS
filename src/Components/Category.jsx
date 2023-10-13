import React, { useEffect } from 'react'
import { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { addCategory, deleteCategory, getAllCategory, getVideo, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [allCategory, setAllCategory] = useState([])

    const [category, setCategoryName] = useState("")
    console.log(category);
    const handleCategory = async() => {
        const body = {
            category,
            allVideos : []
        }
        const response = await addCategory(body)
        console.log(response);
        handleGetCategory()
    }

    const handleGetCategory = async() => {
        const {data} = await getAllCategory()
        setAllCategory(data)
    }
console.log(allCategory);
    useEffect(() => {
        handleGetCategory()
    }, [])

    const handleDeleteCategory = async(id) => {
        await deleteCategory(id)
        handleGetCategory()
    }

    const videoDropped = async(e, categoryId) => {
        // console.log("Dropped category: "+categoryId);
        const videoCardId = e.dataTransfer.getData("cardId")
        const {data} = await getVideo(videoCardId)
        // console.log(data);
        const selectedCategory = allCategory.find(item => item.id === categoryId)
        selectedCategory.allVideos.push(data)
        // console.log(selectedCategory);
        const response = await updateCategory(categoryId, selectedCategory)
        handleGetCategory()
    }

    const dragOver = (e) => {
        e.preventDefault()
        console.log("Dragging over");
    }
    return (
        <>
            <div className="d-grid">
                <button className='btn btn-primary' onClick={handleShow}>Add new category <i class="fa-solid fa-folder-plus"></i></button>
                <div>
                    {
                        allCategory.length > 0?allCategory?.map(item => (
                            <>
                                <div className='border rounded-2 d-flex justify-content-between align-items-center p-2 mt-2 mb-2' droppable onDrop={(e) => videoDropped(e, item?.id)} onDragOver={(e) => dragOver(e)}>
                                    <h6 className='m-0'>{item?.category}</h6>
                                    <Button className='btn-light' onClick={()=> handleDeleteCategory(item?.id)}><i class="fa-solid fa-circle-minus text-danger"></i></Button>
                                </div>
                                <div>
                                    {
                                        item?.allVideos && 
                                        <Row>
                                            {
                                                item?.allVideos.map(item => (
                                                    <Col sm={12}>
                                                        {/* <VideoCard displayData={item} insideCategory={true} /> */}
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    }
                                </div>
                            </>
                        )):<p>Nothing to display</p>
                    }
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add new category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Category name" onChange={(e) => {setCategoryName(e.target.value)}} />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleCategory}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Category