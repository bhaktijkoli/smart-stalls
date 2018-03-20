import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

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
          <Content style={{flex:1,marginTop:'10%'}}>
            <Form>
              <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>
                <Text> Register </Text>
              </Button>
              <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>
                <Text> Remove </Text>
              </Button>
              <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    margin:10,
  }
});
