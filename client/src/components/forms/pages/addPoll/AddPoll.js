import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { handleAddQuestion } from '../../../../redux/actions/questionActions';
import { Container, Form, Alert, Button } from 'react-bootstrap';



const AddPoll = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState();
    const [optionOne, setOptionOne] = useState();
    const [optionTwo, setOptionTwo] = useState();
    const history = useHistory();


    const redirectToHome = () => {
        history.push('/')
    }


    const handleChange = (e) => {
        if (e.target.placeholder === 'Enter first choice') {
            setOptionOne(e.target.id = e.target.value)
        } else if (e.target.placeholder === 'Enter second choice') {
            setOptionTwo(e.target.id = e.target.value)
        }
    }

    const handleSubmit = (e) => {


        e.preventDefault();

        (
            optionOne && optionTwo !== '' ?
                dispatch(handleAddQuestion(optionOne, optionTwo)) && redirectToHome() :
                setError('Please enter two choices to submit')
        )
    }

    return (
        <Container>
            <h2 className='text-center pt-3'>Add New Poll</h2>
            <hr></hr>
            <Form onSubmit={(e) => handleSubmit(e)} className='p-4'>
                {error && <Alert variant='danger'>{error}</Alert>}

                <h4 className='text-center'>Would you rather</h4>

                <Form.Control
                    type='text'
                    placeholder='Enter first choice'
                    id='optionOne'
                    value={optionOne}
                    onChange={handleChange}
                    className='my-4'
                />

                <h5 className='text-center'>Or</h5>

                <Form.Control
                    type='text'
                    placeholder='Enter second choice'
                    id='optionTwo'
                    value={optionTwo}
                    onChange={handleChange}
                    className='my-4'
                />

                <div className=''>
                    <Button type='submit' variant='dark' className='w-100'>Submit Poll</Button>
                    <Link to='/'>
                        <Button variant='dark' className='mt-2' style={{ float: 'right' }}>Cancel</Button>
                    </Link>
                </div>
            </Form>
        </Container >
    )
}

export default AddPoll