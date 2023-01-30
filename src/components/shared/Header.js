import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoCamera, faVideo, faFileVideo } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	marginLeft: '15px',
	position: 'relative',
	opacity: '.85',

}

const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='create' style={linkStyle}>
				Create a Scary Movie
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='scary-movies' style={linkStyle}>
				Spooky Movies
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (

		<Navbar bg='dark' variant='dark' expand='md'>

			<Navbar.Brand className='m-2'>
				<Link to='/' style={linkStyle}>
					<img
						src='favicon.ico'
						width="30"
						height="auto"
						marginTop="0"
						alt={"A bag of popcorn."}
					/>
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
