import React from 'react';
import { Container, Tabs, Tab } from "react-bootstrap";
import { Component } from "react";
import PollsList from "../PollsList";
import { connect } from 'react-redux';


class Home extends Component {

  render() {

    const { answeredPolls, unansweredPolls } = this.props;

    return (

        <Container className='mt-5 pb-2 bg-light'>
          <Tabs
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
        </Container>
    )
  }
};


function mapStateToProps({ authedUser, questions, users }) {

  const answeredPolls = authedUser && Object.keys(questions)
    .filter(id => users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) =>  questions[a].timestamp - questions[b].timestamp );

  const unansweredPolls = authedUser && Object.keys(questions)
    .filter(id => !users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredPolls,
    unansweredPolls
  };

};

export default connect(mapStateToProps)(Home);
