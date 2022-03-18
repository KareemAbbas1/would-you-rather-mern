import { useSelector } from "react-redux";
import UserCard from "../../UserCard";
import { Container } from "react-bootstrap";

const Leaderboard = () => {

  const { users } = useSelector(state => state);

  const scores = Object.keys(users).sort((a, b) => {
    const scoresA = Object.keys(users[a].answers).length + users[a].questions.length;
    const scoresB = Object.keys(users[b].answers).length + users[b].questions.length;

    return scoresA - scoresB;
    
  }).reverse();
  
  const usersScores = scores;

  return (
    <div>
      <Container>
        <h2 className='text-center pt-4'>Leaderboard</h2>
        <hr></hr>
      </Container>
      {usersScores.map((id) => (
        <UserCard key={id} id={id} />
      ))}
    </div>
  )
}

export default Leaderboard