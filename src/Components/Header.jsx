import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar className="bg-primary">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/' style={{textDecoration:'none', color:'white'}} className='fs-4'>
                        <i className="fa-solid fa-circle-play fa-shake"></i>{' '}
                        MediaPoint
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header