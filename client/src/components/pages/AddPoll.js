import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { handleAddQuestion } from '../../redux/actions/questionActions';


class AddPoll extends Component {

    state = {
        error: '',
        optionOne: '',
        optionTwo: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    };

    redirectToHome = () => {
        const { history } = this.props;
        history.push('/')
    };

    handleSubmit = (e) => {
        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props;

        e.preventDefault();

        (optionOne && optionTwo !== '' ?
            dispatch(handleAddQuestion(optionOne, optionTwo)) && this.redirectToHome() :
            this.setState({ error: 'Please enter two choices to submit' })
        );
    };

    render() {

        const { error } = this.state;
        const { optionOne, optionTwo } = this.state

        return (
            <Container>
                <h2 className='text-center pt-3'>Add New Poll</h2>
                <hr></hr>
                <Form onSubmit={this.handleSubmit} className='p-4'>
                    {error && <Alert variant='danger'>{error}</Alert>}

                    <h4 className='text-center'>Would you rather</h4>

                    <Form.Control
                        type='text'
                        placeholder='Enter first choice'
                        id='optionOne'
                        value={optionOne}
                        onChange={this.handleChange}
                        className='my-4'
                    />

                    <h5 className='text-center'>Or</h5>

                    <Form.Control
                        type='text'
                        placeholder='Enter second choice'
                        id='optionTwo'
                        value={optionTwo}
                        onChange={this.handleChange}
                        className='my-4'
                    />

                    <div className=''>
                        <Button type='submit' variant='dark' className='w-100'>Submit Poll</Button>
                        <Link to='/'>
                            <Button variant='dark' className='mt-2' style={{ float: 'right' }}>Cancel</Button>
                        </Link>
                    </div>
                </Form>
            </Container>
        )
    }
}


export default withRouter(connect()(AddPoll));
