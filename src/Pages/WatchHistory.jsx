import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WatchHistory() {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Diji Mini 4 Pro</td>
                            <td><a href='https://youtu.be/nbXneZzFh8w?si=RYBGQ1C1Y3qt97AB' target='_blank'>https://youtu.be/nbXneZzFh8w?si=RYBGQ1C1Y3qt97AB</a></td>
                            <td>04-10-2023</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default WatchHistory