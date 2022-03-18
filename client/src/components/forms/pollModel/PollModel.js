import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const PollModel = ({id}) => {

    const { questions, users } = useSelector(state => state);
    // console.log(users)
    // console.log(questions)
    const question = questions ? questions[id] : null;
    // console.log(question)
    const author = question ? users[question.author] : null;
    // console.log(author)

    const { name, avatarURL } = author;
    // console.log(name)
    const { optionOne } = question;

    return (
        <div>
            <Card className="me-4 mb-3 bg-white text-dark">
                <Container className='px-0 no-gutters'>
                    <Row className='px-0 gx-0'>
                        <Col lg={3} md={4} sm={12}>
                            <Container>
                                <Card.Header className='text-center text-dark bg-white'>{name} Asks :</Card.Header>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <Image className='img-fluid' src={avatarURL} roundedCircle style={{border: "solid 2px"}} />
                                </Card.Body>
                            </Container>
                        </Col>

                        <Col lg={9} md={8} className=''>
                            <Card.Header className='bg-white text-center text-dark'>Would you rather</Card.Header>
                            <Card.Body className='text-center'>
                                <Card.Title>{optionOne.text}</Card.Title>
                                <h6>Or</h6>
                                <Card.Title>.....</Card.Title>
                                <Link to={`/questions/${id}`}>
                                    <Button variant="primary" className='w-50 mt-3'>View Poll</Button>
                                </Link>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default PollModel