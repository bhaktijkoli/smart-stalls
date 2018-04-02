import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Modal, Alert, Image } from 'react-native';
import { Container, View, Text, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

import request from './../../utils/request';
import styles from './../../utils/styles'

import FingerPrintImg from './../../../assets/fingerprint.png'

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: "Register"
  }
  constructor(props) {
    super(props);
    this.state ={
      process: false,
      modal: false,
      aadhaar:'',
      message:'',
      success:false
    }
  }
  render() {
    var state = this.state;
    if(state.modal) {
      return(
        <Container style={styles.container}>
          <Content style={{flex:1}}>
            <View style={styles.modal}>
              <Image style={{marginTop:'40%'}} source={FingerPrintImg}></Image>
              <Text style={{marginTop:20}}>{state.message}</Text>
              {this.getSuccessButton()}
            </View>
          </Content>
        </Container>
      )
    }
    return (
      <Container style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={state.modal}
          onRequestClose={() => {}}>
          <View style={styles.modal}>
            <Image style={{marginTop:'40%'}} source={FingerPrintImg}></Image>
            <Text style={{marginTop:20}}>{state.message}</Text>
            {this.getSuccessButton()}
          </View>
        </Modal>
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
    var data = {type:'REGISTER', aadhaar:this.state.aadhaar}
    ws.send(JSON.stringify(data));
    ws.onmessage = (e) => {
      var res = JSON.parse(e.data);
      if(res.type == "process") {
        this.setState({message:res.data, modal:true});
      } else if(res.type == "success") {
        this.setState({message:res.data, modal:true, success:true});
      } else if(res.type == 'fail') {
        this.setState({message:'', modal:false});
        setTimeout(function () {
          Alert.alert("Registration failed", res.data, [ {text: 'OK', onPress: () => this.setState({process:false})}])
        }.bind(this), 100);
      }
    }
    ws.onerror = (e) => {
      this.setState({process:false});
      alert(e.message);
    }
  }
  getRegisterText() {
    if(this.state.process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Proceed </Text>
    }
  }
  getSuccessButton() {
    if(this.state.success) {
      return <Button transparent block style={styles.button} onPress={this.goHome.bind(this)}><Text>Next</Text></Button>
    }
    return "";
  }
  goHome() {
    this.setState({message:'', modal:false});
    setTimeout(function () {
      this.props.navigation.goBack();
    }.bind(this), 100);
  }
}
