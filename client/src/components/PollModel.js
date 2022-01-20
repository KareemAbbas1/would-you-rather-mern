import { Component } from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class PollModel extends Component {
    render() {

        const { question, author } = this.props;
        const { name, avatarURL } = author;
        const { optionOne, id } = question;

        return (
            <div>
                <Card className="my-3 bg-light text-dark">
                    <Container className='px-0 no-gutters'>
                        <Row className='px-0 gx-0 no-gutters'>
                            <Col lg={2} md={4} sm={12}>
                                <Container>
                                    <Card.Header className='text-center text-dark bg-light'>{name} Asks :</Card.Header>
                                    <Card.Body className='d-flex align-items-center justify-content-center'>
                                        <Image className='img-fluid' src={avatarURL} roundedCircle />
                                    </Card.Body>
                                </Container>
                            </Col>

                            <Col lg={10} md={8} className=''>
                                <Card.Header className='bg-light text-center text-dark'>Would you rather</Card.Header>
                                <Card.Body className='text-center'>
                                    <Card.Title>{optionOne.text}</Card.Title>
                                    <h6>Or</h6>
                                    <Card.Title>.....</Card.Title>
                                    <Link to={`/questions/${id}`}>
                                        <Button variant="dark" className='w-100 mt-3'>View Poll</Button>
                                    </Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </div>
        );
    }
};

function mapStateToProps({ questions, users }, {id}) {
    const question = questions[id];

    return {
        question: question ? question : null,
        author: question ? users[question.author] : null
    };
};

export default connect(mapStateToProps)(PollModel);