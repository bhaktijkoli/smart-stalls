import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, View, Text, Header, Body, Title, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';
import { NavigationActions } from 'react-navigation';

import styles from './../../utils/styles';
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
  componentDidMount() {
    // this.props.navigation.dispatch(navAction)
    this.setState({process:false})
  }
  render() {
    var state = this.state;
    return (
      <Container style={styles.container}>
        <Content style={{flex:1,marginTop:'30%'}}>
          <Text style={{alignSelf:'center'}}>
            Connect to the stall wifi.
          </Text>
          <Form>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)} disabled={this.state.process}>
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
      this.setState({process:false})
      console.log(req);
      if(req.data = "1") {
        this.props.navigation.navigate('Home');
      }
    })
    .catch((req)=> {
      console.log(req);
      this.setState({process:false});
    })
  }
  getButtonText() {
    if(this.state.process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Connect </Text>
    }
  }
}

const navAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'Connect' })]
})
