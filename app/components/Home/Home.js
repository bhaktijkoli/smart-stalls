import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, View, Text, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

import styles from './../../utils/styles'

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: "Home"
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
          <Content style={{flex:1}}>
            <Form>
              <Button primary block style={styles.button} onPress={(e)=>this.props.navigation.navigate('Register')}>
                <Text> Register </Text>
              </Button>
              <Button primary block style={styles.button} onPress={(e)=>this.props.navigation.navigate('Register')}>
                <Text> Remove </Text>
              </Button>
              <Button primary block style={styles.button} onPress={(e)=>this.props.navigation.navigate('Register')}>
                <Text> Reset </Text>
              </Button>
            </Form>
          </Content>
        </Container>
    );
  }
  onSubmit() {
    this.setState({process:true});
    setTimeout(function () {
      this.setState({process:false});
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
