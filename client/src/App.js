import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import PollPage from './components/pages/PollPage';
import Leaderboard from './components/pages/Leaderboard';
import AddPoll from './components/pages/AddPoll';
import { NotFound } from 'http-errors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleInitialData } from './redux/actions/index';


function App() {

  const dispatch = useDispatch();
  const { authedUser } = useSelector(state => state);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (!authedUser) {
    return (
      <Router>
        <Route path='/' component={Login} />
      </Router>
    )
  }

  return (
    <Router>
      <div className="App">
          <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/addquestion' component={AddPoll} />
          <Route path='/questions/:id' component={PollPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
};

export default App;
