import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='create' style={linkStyle}>
				Create a Scary Movie
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item>
			<Link to='scary-movies' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (

		<Navbar bg='dark' variant='dark' expand='md'>

			<Navbar.Brand className='m-2'>
				<Link to='/' style={linkStyle}>
					Scary Movies
				</Link>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto container-fluid d-flex justify-content-between'>
					{user && (
						<span className='mr-2'>Welcome, {user.email}</span>
					)}
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}
				</Nav>
			</Navbar.Collapse>
		</Navbar>

)

export default Header
