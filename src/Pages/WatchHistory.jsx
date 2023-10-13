import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allAPI'
import { Button } from 'react-bootstrap'

function WatchHistory() {
    const [history, setHistory] = useState([])
    const fetchHistory = async() => {
        const {data} = await getHistory()
        setHistory(data);
        // console.log(data);
    }
    useEffect(() => {
        fetchHistory()
    }, [])
    console.log(history);

    const handleDeleteHistory = async(id) => {
        const response = await deleteHistory(id)
        fetchHistory()
        console.log(response);
    }
    return (
        <>
            <Container className='d-flex justify-content-between align-items-center mt-4'>
                <h3>Watch History</h3>
                <Link to='/home' style={{textDecoration:'none', color:'black'}}><p>Back to home</p></Link>
            </Container>
            <Container>
                <table className='table mt-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Caption</th>
                            <th>URL</th>
                            <th>Time Stamp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history?.length > 0 ?
                            history.map((items, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{items?.caption}</td>
                                    <td><a href={items?.embedLink} target='_blank'>{items?.embedLink}</a></td>
                                    <td>{items.timeStamp}</td>
                                    <td><Button className='btn-light' onClick={() => handleDeleteHistory(items.id)}><i class="fa-solid fa-circle-minus text-danger"></i></Button></td>
                                </tr>)) : <p>Nothing to display</p>
                            
                        }
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default WatchHistory