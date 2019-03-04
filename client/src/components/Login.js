import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react'

class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }
  
  onSubmit= async(e) => {
    const args = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(args)
    
  }
  render() {
    // const {user} = this.props.auth;
    const  styles = {
      box:{
        "width": "450px",margin:"100px auto",
        border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
      }
    }
    return (
      <div>
        <div  style={styles.box}>
            <h3>Sign in </h3>
            {/* <Form onSubmit={(ev)=>handleSubmit(ev, args)}> */}
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Form.Input type="email" name="email" onChange={this.onChange} placeholder='Email' icon={<Icon name="mail" size="large" />} />
                </Form.Field>
                <Form.Field>
                    <Form.Input name="password" onChange={this.onChange} type="password" placeholder='Password' icon={<Icon name="remove circle" size="large" />} />
                </Form.Field>
                <Button type='submit' primary fluid>Sign in</Button>
            </Form>
        </div>
      </div>
    )
  }
}

export default Login;