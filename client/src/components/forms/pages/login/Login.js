import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login





// import { Component } from 'react';
// import { Container, Button, Form, Alert } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { login } from '../../../../redux/actions/authAction';
// import { withRouter } from 'react-router-dom';



// class Login extends Component {

//     state = {
//         error: ''
//     };

//     // redirectToHome = () => {
//     //     const { history } = this.props;
//     //     history.push('/');
//     // }

    
//     handleSubmit = (e) => {
//         const userID = this.userID.value;
//         const { dispatch } = this.props;
//         e.preventDefault();
        
//         userID !== '' ? dispatch(login(userID)) : this.setState({ error: 'Choose a user to log in' });
//         // this.redirectToHome();
//     };
    
//     render() {
        
//         const { usersNames } = this.props;
//         const { error } = this.state;
//         return (
            
//             <div>
//                 <Container className='w-50 my-5'>
//                     <h1 className='text-center'>Would You Rather</h1>
//                     <hr></hr>
//                     <p className='text-center'>Udacity's Frontend Nanodegree, advanced track</p>
//                     <h2 className='text-center pt-5 my-5'>Log In</h2>

//                     <Form onSubmit={this.handleSubmit}>
//                         {error && <Alert variant='danger'>{error}</Alert>}

//                         <Form.Control
//                             as='select'
//                             aria-label="Default select example"
//                             ref={(id) => (this.userID = id)}
//                         >
//                             <option value=''>Select a user to log in</option>
//                             {usersNames.map((item) => (
//                                 <option value={item.value} key={item.value}>
//                                     {item.label}
//                                 </option>
//                             ))}
//                         </Form.Control>

//                         <div className='d-flex justify-content-center mt-2'>
//                             <Button variant="dark" type="submit" className='w-100'>
//                                 Login
//                             </Button>
//                         </div>

//                     </Form>
//                 </Container>
//             </div>
//         )
//     }
// }

// function mapStateToProps({ users }) {
//     return {
//         usersNames: Object.keys(users).map((id) => ({
//             value: id,
//             label: users[id].name
//         }))
//     };
// }

// export default withRouter(connect(mapStateToProps)(Login));
