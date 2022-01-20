import { NotFound } from "http-errors";
import { Component } from "react";
import { Card, Container, Col, Row, Button, Image, ProgressBar } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AnsweredPoll extends Component {
    render() {
        const { question, author, authedUser} = this.props;
        const { name, avatarURL } = author;
        const { optionOne, optionTwo } = question;

        if(question === null) {
            return <NotFound />
        };

        const pollVotes = optionOne.votes.length + optionTwo.votes.length;
		const optionOneVotes = Math.round((optionOne.votes.length / pollVotes) * 100);
		const optionTwoVotes = Math.round((optionTwo.votes.length / pollVotes) * 100);
        const votedForOption1 = optionOne.votes.length;
        const votedForOption2 = optionTwo.votes.length;


        return (
            <Container>
                <h2 className='text-center pt-4'>Would You Rather</h2>
                <hr className='mb-5'></hr>
                <Card className="my-3 bg-light text-dark">
                    <Container className='px-0 no-gutters'>
                        <Row className='px-0 gx-0 no-gutters'>
                            <Col lg={2} md={4} sm={12}>
                                <Container className=''>
                                    <Card.Header className='text-center text-dark bg-light'>{name}</Card.Header>
                                    <Card.Body className='d-flex align-items-center justify-content-center'>
                                        <Image className='img-fluid mt-lg-4' src={avatarURL} roundedCircle />
                                    </Card.Body>
                                </Container>
                            </Col>

                            <Col lg={10} md={8} className=''>
                                <Card.Header className='bg-light text-dark'>Poll's Result :</Card.Header>
                                <Card.Body className=''>
                                    <Card.Title className='mb-2'>{optionOne.text}</Card.Title>
                                    <ProgressBar variant='secondary' now={optionOneVotes} label={`${optionOneVotes}%`} />
                                    <span>{votedForOption1} {votedForOption1 === 1 ? 'person' : 'people'} voted for this</span>
                                    {optionOne.votes.includes(authedUser) && <p style={{float: 'right'}}>Your vote</p>}

                                    <hr></hr>

                                    <Card.Title>{optionTwo.text}</Card.Title>
                                    <ProgressBar variant='secondary' now={optionTwoVotes} label={`${optionTwoVotes}%`} />
                                    <span>{votedForOption2} {votedForOption2 === 1 ? 'person' : 'people'} voted for this</span>
                                    {optionTwo.votes.includes(authedUser) && <p style={{float: 'right'}}>Your vote</p>}
                                    <hr></hr>
                                    <Link to='/'>
                                        <Button variant="dark" className='w-100 mt-3'>Back to Dashboard</Button>
                                    </Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
           </Container>
        );
    }
};

function mapStateToProps ({ questions, users, authedUser }, {id}) {
    const question = questions[id];

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null,
        authedUser
    }
};

export default connect(mapStateToProps)(AnsweredPoll);