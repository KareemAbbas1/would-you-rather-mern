import React, { Component } from 'react';
import { Container, Card, Row, Col, Image, Button, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../redux/actions/usersAction';
import NotFound from './pages/NotFound';
import { Link } from 'react-router-dom';

class UnansweredPoll extends Component {

    state = {
        error: ''
    };

    handleSubmit = (e, id) => {

        const answer = this.form.answer.value;
        const { dispatch } = this.props;

        e.preventDefault();

        (answer !== '' ?
            dispatch(handleAddAnswer(id, answer)) :
            this.setState({ error: 'Make a choice to submit' })
        );
    };

    render() {

        const { question, author } = this.props;

        if(question === null) {
            return <NotFound />
        };

        const { optionOne, optionTwo, id } = question;
        const { name, avatarURL } = author;
        const { error } = this.state;


        return (
            <Container>
                <h2 className='pt-4 text-center'>Would You Rather</h2>
                <hr className='mb-5'></hr>
                <Card className="my-3 bg-light text-dark">
                    <Container className='px-0 no-gutters'>
                        <Row className='px-0 gx-0 no-gutters'>
                            <Col lg={2} md={4} sm={12}>
                                <Container className=''>
                                    <Card.Header className='text-center text-dark bg-light'>{name} Asks :</Card.Header>
                                    <Card.Body className='d-flex align-items-center justify-content-center'>
                                        <Image className='img-fluid' src={avatarURL} roundedCircle />
                                    </Card.Body>
                                </Container>
                            </Col>

                            <Col lg={10} md={8} className=''>
                                <Card.Header className='bg-light text-dark'>
                                    Would you rather

                                </Card.Header>

                                <Card.Body className=''>
                                    {error && <Alert variant='danger'>{error}</Alert>}
                                    <Form onSubmit={(e) => this.handleSubmit(e, id)} ref={f => (this.form = f)}>

                                        <Form.Check
                                            type="radio"
                                            id="optionOne"
                                            label={<h5>{optionOne.text}</h5>}
                                            value="optionOne"
                                            name="answer"
                                        />
                                        <hr></hr>
                                        <Form.Check
                                            type="radio"
                                            id="optionTwo"
                                            label={<h5>{optionTwo.text}</h5>}
                                            value="optionTwo"
                                            name="answer"
                                        />

                                        <Button type='submit' variant="dark" className='w-100 mt-3'>Submit</Button>
                                    </Form>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Link to='/'>
                    <Button variant='dark' style={{ float: 'right' }}>Cancel</Button>
                </Link>
            </Container>
        )
    }
};

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id];

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null
    }
};


export default connect(mapStateToProps)(UnansweredPoll);