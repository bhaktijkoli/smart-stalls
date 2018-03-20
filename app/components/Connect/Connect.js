import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

import request from './../../utils/request';

export default class Connect extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state ={
      process: false,
    }
  }
  render() {
    var state = this.state;
    return (
      <Container style={styles.container}>
        <Content style={{flex:1,marginTop:'10%'}}>
          <Form>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>
              {this.getButtonText()}
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
  onSubmit() {
    this.setState({process:true});
    request.makePost('/status', [])
    .then((req)=> {
      console.log(req);
    })
    .catch((req)=> {
      console.log(req);
    })
    return;
    setTimeout(function () {
      this.setState({process:false});
      this.props.navigation.navigate('Home');
    }.bind(this), 3000);
  }
  getButtonText() {
    if(this.state.process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Connect </Text>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    margin:10,
  }
});
