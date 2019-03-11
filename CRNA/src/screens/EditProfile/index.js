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
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

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

class EditProfileForm extends Component {
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
                ? "John Doe"
                : input.name === "email" 
                  ? "Email" 
                  : input.name === "password"
                    ? "Password" : "Password Confirm"
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
           
            <Text style={{fontWeight: 'bold', paddingTop: 5}}>Edit Profile</Text>
          </Body>
          <Right />
        </Header>
          <Content padder>
            <View style={styles.imageContainer}>
              <Thumbnail
                imageStyle=""
                source={require("../../../assets/Contacts/profile.png")}
                style={{width: 100, height: 100, borderRadius: 50}}
              />

            </View>
            <View style={{ alignSelf: "center", paddingVertical: 10}}>
              <Text style={{fontSize: 15, textDecorationLine: 'underline' }}> Change </Text>
            </View>

            <View style={styles.signupContainer}>
            <Text style={styles.signupHeader}>UPDATE YOUR ACCOUNT DETAILS</Text>
              <Field
                name="username"
                component={this.renderInput}
                type="text"
                validate={[required, alphaNumeric, minLength5]}
              />

              <Field
                name="email"
                component={this.renderInput}
                type="email"
                valie
                validate={[email, required]}
              />
              <Field
                name="password"
                component={this.renderInput}
                type="password"
                validate={[alphaNumeric, minLength8, maxLength15, required]}
              />
              <Field
                name="passwordConfirm"
                component={this.renderInput}
                type="passwordConfirm"
                validate={[alphaNumeric, minLength8, maxLength15, required]}
              />

              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("SetUpStepOne")}
                style={styles.submit}
              >
                <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Save</Text>
              </Button>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const EditProfile = reduxForm({
  form: "editprofile"
})(EditProfileForm);
export default EditProfile;
