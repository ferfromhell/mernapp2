import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';


 class Register extends Component {
  constructor(){
    super();
    this.state={
      firstname:'',
      lastname:'',
      username:'',
      email:'',
      password:''
    }
  }
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/home');
  //   }
  // }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onSubmit= async(e) => {
    const args = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    // console.log(args);
    e.preventDefault();
    axios.post('/api/users/register',args)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }
  
  render() {
    const  styles = {
      box:{
        "width": "450px",margin:"100px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    return (
      <div>
        <div  style={styles.box}>
          <h3>Sign up!</h3>
          <Form onSubmit={this.onSubmit}>
              <Form.Field>
              <Form.Input name="firstname" onChange={this.onChange} placeholder='First name'/>
              </Form.Field>
              <Form.Field>
              <Form.Input name="lastname" onChange={this.onChange} placeholder='Last name' />
              </Form.Field>
              <Form.Field>
              <Form.Input name="username" onChange={this.onChange} placeholder='Username' icon={<Icon name="user" size="small" />} />
              </Form.Field>  
              <Form.Field>
              <Form.Input name="email" onChange={this.onChange} placeholder='email' icon={<Icon name="mail" size="small" />} />
              </Form.Field>
              <Form.Field>
              <Form.Input name="password" type="password" onChange={this.onChange} placeholder='Password'/>
              </Form.Field>
              <Form.Field>
              <Form.Input name="password2" type="password" onChange={this.onChange} placeholder='Confirm password'/>
              </Form.Field>

              <Button type='submit' primary fluid>Sign up</Button>
          </Form>
          </div>
      </div>
    )
  }
}

export default Register