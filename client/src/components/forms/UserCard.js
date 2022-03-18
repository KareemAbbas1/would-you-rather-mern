import { useSelector } from "react-redux";
import { Container, Card, Col, Row, Image } from "react-bootstrap";

const UserCard = ({ id }) => {

    const { users } = useSelector(state => state);
    const user = users[id];
    const { name, avatarURL, answers, questions } = user;

    let answersNumber = Object.keys(answers).length;
    let createdPollsNumber = questions.length;
    let score = Object.keys(answers).length + questions.length;

    return (
        <Container>
            <Card className="my-3 bg-light text-dark">
                <Container className='px-0 no-gutters'>
                    <Row className='px-0 gx-0 no-gutters'>
                        <Col lg={2} md={4} sm={12}>
                            <Container className=''>
                                <Card.Body className='d-flex  justify-content-center'>
                                    <Image className='img-fluid' src={avatarURL} roundedCircle />
                                </Card.Body>
                            </Container>
                        </Col>

                        <Col lg={8} md={6} className=''>
                            <Card.Body className='text-left'>
                                <Card.Header className='bg-light px-0'><strong>{name}</strong></Card.Header>
                                <p className='pt-3'>Answered {answersNumber} Polls</p>
                                <hr></hr>
                                <p>Created {createdPollsNumber} Polls</p>
                            </Card.Body>
                        </Col>
                        <Col lg={2} md={2} sm={12}>
                            <Card.Body>
                                <Card.Header className='bg-light text-sm-center'><strong>Score</strong></Card.Header>
                                <Container className='d-flex justify-content-sm-center align-items-center'>
                                    <h3 className='mt-sm-5'>{score}</h3>
                                </Container>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    )
}

export default UserCard