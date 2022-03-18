import { Container, Card, Row, Col, Form, Button, Image, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { handleAddAnswer } from '../../../redux/actions/usersActions';


const UnasnweredPoll = ({ id }) => {

  const [error, setError] = useState()
  const dispatch = useDispatch();
  const { questions, users } = useSelector(state => state);
  const question = questions ? questions[id] : null;
  const author = question ? users[question.author] : null;

  const { optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  let answerRef = useRef();

  const handleSubmit = (e, id) => {
    const answer = answerRef.answer.value;
    e.preventDefault();

    (
      answer !== '' ?
        dispatch(handleAddAnswer(id, answer)) :
        setError('Make a choice to submit')
    );
  }

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
                <Form onSubmit={(e) => handleSubmit(e, id)} ref={f => (answerRef = f)}>

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

export default UnasnweredPoll