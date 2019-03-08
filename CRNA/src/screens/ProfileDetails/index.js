// @flow

import React, { Component } from "react";
import { ImageBackground, StatusBar, Image } from "react-native";
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

import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
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

class ProfileDetails extends Component {
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
          <Body>
           
            <Text style={{fontWeight: 'bold', paddingTop: 5}}> Profile Details</Text>
          </Body>
          <Right />
        </Header>
          <Content padder>
            <View style={styles.profileContainer}>
              <View style={{ alignSelf: "center" }}>
                <Thumbnail
                  source={require("../../../assets/Contacts/profile.png")}
                  style={styles.profilePic}
                />
              </View>
              <View style={{alignSelf: "center", paddingTop: 20}}>
                <Text style={{fontWeight: 'bold', paddingLeft: 10, fontSize: 20, textAlign: 'center'}}>John Doe   <Feather name="edit-3" color="white" size={20} /></Text>
                <Text style={{fontSize: 15, paddingLeft: 10, textAlign: 'center'}}>johndoe@gmail.com </Text>
              </View>

              <View style={{alignSelf: "center", marginTop: 10, borderColor: 'white', borderLeftWidth: 2, borderRightWidth: 2}}>

                  <Text style={{fontWeight: 'bold', paddingHorizontal: 20, textAlign: 'center', fontSize: 20}}>Subscription</Text>

                  <Text style={{paddingHorizontal: 20, textAlign: 'center', fontSize: 15}}>FREE VERSION</Text>
 
              </View>
            </View>

            <View style={{alignSelf: "center", paddingTop: 5}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}> Unlock A.SIS Premium </Text>
              <Text> Comming Soon</Text>
            </View>

            <View style={styles.signupContainer}>
            <Grid>
              <Row style={{flexDirection: 'row', paddingVertical: 8}}>
                <FontAwesome name="check" color="white" size={20} /><Text style={{textAlign: 'center', fontWeight: '500'}}>Excepteur sint occaecat cupidatat non proident, sunt </Text>
              </Row>
              <Row style={{flexDirection: 'row', paddingVertical: 8}}>
                <FontAwesome name="check" color="white" size={20} /><Text style={{textAlign: 'center', fontWeight: '500'}}>Excepteur sint occaecat cupidatat non proident, sunt </Text>
              </Row>
                <Row style={{flexDirection: 'row', paddingVertical: 8}}>
                <FontAwesome name="check" color="white" size={20} /><Text style={{textAlign: 'center', fontWeight: '500'}}>Excepteur sint occaecat cupidatat non proident, sunt </Text>
              </Row>
                <Row style={{flexDirection: 'row', paddingVertical: 8}}>
                <FontAwesome name="check" color="white" size={20} /><Text style={{textAlign: 'center', fontWeight: '500'}}>Excepteur sint occaecat cupidatat non proident, sunt </Text>
              </Row>


            </Grid>

            </View>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("SetUpStepOne")}
                style={styles.signOut}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold' }}>PREMIUM</Text>
              </Button>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Left style={{ flex: 2 }}>
              <Button small transparent>
                <Text style={styles.helpBtns}>Terms & Conditions</Text>
              </Button>
            </Left>
            <Right style={{ flex: 1 }}>
              <Button
                small
                transparent
                onPress={() => this.props.navigation.navigate("Login")}
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


export default ProfileDetails;
