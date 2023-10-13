import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'

function View({uploadVideoResponse}) {
    const [allVideos, setAllVideos] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)
    const fetchData = async() => {
        const {data} = await getAllVideo()
        setAllVideos(data)
        setDeleteVideoStatus(false)
    }

    useEffect(() => {
        fetchData()
    }, [uploadVideoResponse, deleteVideoStatus])

    console.log(allVideos);
    return (
        <>
            <Row>
                {
                    allVideos.length > 0 ?
                    allVideos.map(items => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                        <VideoCard displayData={items} setDeleteVideoStatus={setDeleteVideoStatus} />
                        </Col>
                    )) : 
                    <Col sm={12} md={6} lg={4} xl={3}>
                    Nothing to display
                    </Col>
                }
            </Row>
        </>
    )
}

export default View