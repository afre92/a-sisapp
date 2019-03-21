// @flow

import React, { Component } from "react";
import { ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
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
  Left,
  Right,
  Footer,
  Thumbnail,
  Header,
  Body
} from "native-base";
import { Field, reduxForm } from "redux-form";

// const logo = require("../../../assets/logo.png");

import { Entypo } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
const headerLogo = require("../../../assets/header-logo.png");

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const minLength5 = minLength(5);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

class Profile extends Component {
  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={
              input.name === "username"
                ? "person"
                : input.name === "email" ? "mail" : "unlock"
            }
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={
              input.name === "username"
                ? "Username"
                : input.name === "email" ? "Email" : "Password"
            }
            secureTextEntry={input.name === "password" ? true : false}
            {...input}
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
          : <Text style={styles.formErrorText2}>> error here</Text>}
      </View>
    );
  }
  signUp() {
    if (this.props.valid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: "All the fields are compulsory!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={commonColor.statusBarColor}
          barStyle="light-content"
        />
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
          <Right>
          <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Settings')}
                  >
                    <Entypo active name="cog" size={30} color="white" />
                  </TouchableOpacity>
          </Right>
          <Body>
           
            <Text style={{fontWeight: 'bold', paddingTop: 5}}> Profile </Text>
          </Body>
          <Right />
        </Header>
          <Content padder>
            <View style={styles.profileContainer}>
              <Grid>
                <Col >
                  <View style={{ alignSelf: "center" }}>
                    <Thumbnail
                      source={require("../../../assets/Contacts/profile.png")}
                      style={styles.profilePic}
                    />
                  </View>
                </Col>
                <Col style={{width: '50%', justifyContent:'center'}}>

                  <Text style={{fontWeight: 'bold', paddingLeft: 10}}>John Doe </Text>
                  <Text style={{fontSize: 15, paddingLeft: 10}}>johndoe@gmail.com </Text>
                </Col>
                <Col style={{width: '20%', justifyContent:'center'}}>
                <View style={{ alignSelf: "center" }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Settings')}
                  >
                    <Entypo active name="cog" size={30} color="white" />
                  </TouchableOpacity>
                  </View>
                </Col>
              </Grid>
             
            </View>

            <View style={styles.signupContainer}>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("ProfileDetails")}
                style={styles.signupBtn}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold'}}>My Account</Text>
              </Button>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("ContactUs")}
                style={styles.signupBtn}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Support</Text>
              </Button>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("TSOM")}
                style={styles.signupBtn}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold' }}>The Science of Affirmations</Text>
              </Button>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("FAQ")}
                style={styles.signupBtn}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold' }}>FAQ</Text>
              </Button>

              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.signOut}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Log Out</Text>
              </Button>

            </View>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Left style={{ flex: 2 }}>
              <Button small transparent
                onPress={() => this.props.navigation.navigate("TermsAndConditions")}
              >
                <Text style={styles.helpBtns}>Terms & Conditions</Text>
              </Button>
            </Left>
            <Right style={{ flex: 1 }}>
              <Button
                small
                transparent
                onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
              >
                <Text style={styles.helpBtns}>Privacy Policy</Text>
              </Button>
            </Right>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;
