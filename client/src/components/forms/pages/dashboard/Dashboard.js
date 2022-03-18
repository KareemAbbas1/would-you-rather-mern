import './dashboard.css';
import PollsList from '../../PollsList';
import { Tab, Tabs, Nav, Col, Row, Container, Button, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Dashboard = () => {

  const { authReducer, questions, users } = useSelector(state => state);

  const answeredPolls = authReducer && Object.keys(questions)
    .filter(id => users[authReducer].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredPolls = authReducer && Object.keys(questions)
    .filter(id => !users[authReducer].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return (
    <Container className='mt-5'>
      <Tab.Container className='p-1' id="right-tabs" defaultActiveKey="second">
        <Row>
          <Col md={9} sm={13} className='m-0 p-0'>
            <section className='tab-content'>
              <Tab.Content>
                <NavDropdown className='tabs-dropdown' title='Menu' id="collasible-nav-dropdown" >
                  <Nav>
                    <NavDropdown.Item className='text-center'>
                      <Nav.Item>
                        <Nav.Link eventKey="first">Surveys</Nav.Link>
                      </Nav.Item>
                    </NavDropdown.Item>
                    <NavDropdown.Item className='text-center'>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Polls</Nav.Link>
                      </Nav.Item>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to='/add-poll' style={{ textDecoration: 'none' }} >
                        <Button className='w-100 text-primary' style={{ background: 'none', border: 'none' }}>
                          Add Poll
                        </Button>
                      </Link>
                    </NavDropdown.Item>
                  </Nav>
                </NavDropdown>

                <Tab.Pane className='tabs' eventKey="first">
                  <Tabs
                    variant='tabs'
                    defaultActiveKey='unanswered'
                    id="surveys-list"
                    className="mb-3 d-flex justify-content-center"
                  >
                    <Tab className='' eventKey="unanswered" title="Unanswered Surveys">
                      <div>
                        Unanswered
                      </div>
                    </Tab>

                    <Tab eventKey="answered" title="Answered Surveys">
                      Answered
                    </Tab>
                  </Tabs>
                </Tab.Pane>

                <Tab.Pane className='tabs' eventKey="second">
                  <Tabs
                    variant='tabs'
                    defaultActiveKey='unanswered'
                    id="polls-list"
                    className="mb-3 d-flex justify-content-center"
                  >
                    <Tab eventKey="unanswered" title="Unanswered Polls">
                      <PollsList polls={unansweredPolls} />
                    </Tab>

                    <Tab eventKey="answered" title="Answered Polls">
                      <PollsList polls={answeredPolls} />
                    </Tab>

                  </Tabs>
                </Tab.Pane>
              </Tab.Content>
            </section>
          </Col>
          <Col sm={3} className='nav-col m-0 p-0'>
            <section className='side-nav'>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className='side-pills'>
                  <Nav.Link eventKey="first">Surveys</Nav.Link>
                </Nav.Item>
                <Nav.Item className='side-pills'>
                  <Nav.Link eventKey="second">Polls</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='/add-poll' style={{ textDecoration: 'none' }} >
                    <Button className='w-100 text-primary' style={{ background: 'none', border: 'none' }}>
                      Add Poll
                    </Button>
                  </Link>
                </Nav.Item>
              </Nav>
            </section>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default Dashboard