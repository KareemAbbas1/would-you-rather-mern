import { Navbar, NavDropdown, Nav, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/authAction';
import { Link } from 'react-router-dom';


const Header = () => {

    const dispatch = useDispatch();
    const { users, authReducer } = useSelector((state) => state);
    const user = authReducer && users[authReducer];

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg='black' variant='dark'>
                <Navbar.Brand className='ms-5'>
                    <Link to='/' className='text-light' style={{ textDecoration: 'none' }}>
                        K(<span className='text-primary'>Abbas</span>);
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' className='mx-5' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Container className='w-50'>
                        <Nav className="me-3 d-flex justify-content-between align-items-center">
                            <a href='#' className='text-light' style={{ textDecoration: 'none' }}>Forms</a>
                            <Link to='/' className='text-light' style={{ textDecoration: 'none' }}>Dashboard</Link>
                            <Link to='/leaderboard' className='text-light' style={{ textDecoration: 'none' }}>Leaderboard</Link>
                        </Nav>
                    </Container>
                    <Nav className='me-5'>
                        <Container className='d-flex justify-content-center'>
                            <NavDropdown /*title={user.name}*/ id="collasible-nav-dropdown" >
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Button onClick={handleLogout} className='p-0' variant='white'>Log out</Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header