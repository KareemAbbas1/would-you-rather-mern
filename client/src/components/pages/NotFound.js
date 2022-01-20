import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Container className='h-100 d-grid justify-content-center align-items-center'>
                <h1 className='text-center'>
                    404
                    <br></br>
                    Page Not Found
                </h1>
                <Link to='/'>
                    <Button variant='dark' className='w-100'>Back To Home</Button>
                </Link>
            </Container>
        </div>
    )
}

export default NotFound