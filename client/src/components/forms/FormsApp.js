import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Leaderboard from './pages/leaderboard/Leaderboard';
import PollPage from './pages/PollPage';
import Login from './pages/login/Login';
import AddPoll from '../forms/pages/addPoll/AddPoll';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleInitialData } from '../../redux/actions/index';

const FormsApp = () => {

    const dispatch = useDispatch();
    const { authReducer } = useSelector(state => state);

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch])

    // if (!authReducer) {
    //     return (
    //         <Router>
    //             <Route path='/' component={Login} />
    //         </Router>
    //     )
    // }

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/questions/:id' component={PollPage} />
                    <Route path='/add-poll' component={AddPoll} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default FormsApp