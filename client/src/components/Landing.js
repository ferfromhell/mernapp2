import React, { Component } from 'react'
import { Grid, Segment, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const  styles = {
  grid:{
      height: '100%',width:'80%', margin:'0 auto'
  },
  box:{
      border:'1px solid #e6',background:'#fff',textAlign:'center',marginBottom:'1em',padding:'1em'
  }
}

 class Landing extends Component {
  render() {
    return (
      <div style={{minHeight:"600px"}}>
        <Grid columns={2} verticalAlign="middle" centered style={styles.grid}>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Image src="https://trustedpartner.azureedge.net/images/library/DiscoveryRG2017/bulletin-board(1).jpg" fluid/>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Link to="/login">
                <Button primary fluid>Sign in</Button>
                </Link>
              </Segment>
              <Segment>
                <Link to="/register">
                <Button primary fluid>Sign up</Button>
                </Link>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Landing