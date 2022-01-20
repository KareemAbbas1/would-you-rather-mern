import { Component } from 'react';
import { Navbar, NavDropdown, Nav, Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { Link } from 'react-router-dom';

class Header extends Component {


    render() {

        const { user, dispatch } = this.props;
    
        const handleLogout = () => {
            dispatch(logout())
        };

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className='mx-5'>
                        <Link to='/' className='text-light' style={{textDecoration: 'none'}}>
                        WouldYouRather
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-5' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container className='w-50'>
                            <Nav className="me-5 d-flex justify-content-between align-items-center" >
                                <Link to='/' className='text-light' style={{ textDecoration: 'none' }}>Dashboard</Link>
                                <Link to='/addquestion' className='text-light' style={{ textDecoration: 'none' }}>Add New Poll</Link>
                                <Link to='/leaderboard' className='text-light' style={{ textDecoration: 'none' }}>Leaderboard</Link>
                            </Nav>
                        </Container>
                        <Nav>
                            <Container className='d-flex mx-lg-4 justify-content-center'>
                                <NavDropdown title={user.name} id="collasible-nav-dropdown" >
                                    <NavDropdown.Item>
                                        <Button onClick={handleLogout} className='p-0' variant='light'>Log out</Button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: authedUser && users[authedUser]
    };
};

export default connect(mapStateToProps)(Header);