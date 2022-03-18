import { useSelector } from 'react-redux';
import AnsweredPoll from '../answeredPoll/AnsweredPoll';
import UnansweredPoll from '../unansweredPoll/UnasnweredPoll';
import { useParams } from 'react-router-dom';

const PollPage = () => {

    const { authReducer, users } = useSelector(state => state);
    const { id } = useParams();
    const userAnswers = authReducer && users[authReducer].answers;
    const answered = userAnswers.hasOwnProperty(id) ? true : false;

  return (
    <div>
        {answered ? <AnsweredPoll id={id} /> : <UnansweredPoll id={id} />}
    </div>
  )
}

export default PollPage