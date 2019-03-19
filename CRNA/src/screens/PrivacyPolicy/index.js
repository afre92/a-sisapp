// @flow
import React, { Component } from "react";
import { ImageBackground, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Toast,
  Footer,
  Header,
  Body,
  Left,
  Right
} from "native-base";
import { Field, reduxForm } from "redux-form";
import styles from "./styles";

const required = value => (value ? undefined : "Required");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
type Props = {
  navigation: () => void
};
declare type Any = any;
class PrivacyPolicy extends Component {
  textInput: Any;
  state: {
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      },
      name: ""
    };
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon active name="mail" style={{ color: "#fff" }} />
          <Input
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder="Email"
            {...input}
            ref={c => (this.textInput = c)}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </Item>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  forgotPassword() {
    if (this.props.valid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: "Enter Valid Email",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
                <Header style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
           
            <Text style={{fontWeight: 'bold', paddingTop: 5}}></Text>
          </Body>
          <Right />

   
    
        </Header>
          <Content contentOffset={this.state.offset}>
          <View>
            <Content padder scrollEnabled={false}>
              <Text style={styles.forgotPasswordHeader}>
                PrivacyPolicy
              </Text>
              <View style={{paddingHorizontal: 10}}>
                <Text style={{paddingBottom: 20,fontSize: 21, fontWeight: '500'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </Text>
              </View>
              <View style={styles.forgotPasswordContainer}>

                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.forgotPassword()}
                  style={styles.submit}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>More</Text>
                </Button>
              </View>
            </Content>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}


export default PrivacyPolicy;