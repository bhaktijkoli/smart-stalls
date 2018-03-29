import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Modal } from 'react-native';
import { Container, View, Text, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

import request from './../../utils/request';
import styles from './../../utils/styles'

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: "Register"
  }
  constructor(props) {
    super(props);
    this.state ={
      process: false,
      aadhaar:''
    }
  }
  render() {
    var state = this.state;
    return (
      <Container style={styles.container}>
        <Content style={{flex:1}}>
          <Form>
            <Item floatingLabel last>
              <Label>Enter 12 digit Aadhaar No</Label>
              <Input value={state.password} onChangeText={value=>this.setState({'aadhaar':value})}/>
            </Item>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)} disabled={this.state.process}>
              {this.getRegisterText()}
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
  onSubmit() {
    this.setState({process:true});
    var data = {aadhaar:this.state.aadhaar}
    request.makePost('/register', data)
    .then((req)=> {
      this.setState({process:false})
      console.log(req);
    })
    .catch((req)=> {
      console.log(req);
      this.setState({process:false});
    })
  }
  getRegisterText() {
    if(this.state.process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Proceed </Text>
    }
  }
}
