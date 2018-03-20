import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state ={
      login_process: false,
      password:'',
    }
  }
  render() {
    var state = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Content style={{flex:1,marginTop:'80%'}}>
          <Form>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} value={state.password} onChangeText={value=>this.setState({'password':value})}/>
            </Item>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>
              {this.getLoginText()}
            </Button>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    );
  }
  onSubmit() {
    this.setState({login_process:true})
    if(this.state.password == "12345") {
      this.props.navigation.navigate('Connect');
    } else {
      Toast.show({text: 'Wrong password!', position: 'bottom', buttonText: 'Ok' })
    }
    setTimeout(function () {
      this.setState({login_process:false})
    }.bind(this), 1000);
  }
  getLoginText() {
    if(this.state.login_process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Login </Text>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    margin:10
  }
});
