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

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";


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
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerText}>Edit Profile</Text>
          </Body>
          <Right />
        </Header>
          <Content padder>
            <View style={styles.imageContainer}>
              <Thumbnail
                imageStyle=""
                source={require("../../../assets/Contacts/profile.png")}
                style={styles.userAvatar}
              />
            </View>
            <View style={{ alignSelf: "center", paddingVertical: 10}}>
              <Text style={{fontSize: 15, textDecorationLine: 'underline' }}> Change </Text>
            </View>

            <View style={styles.editProfileContainer}>
            <Text style={styles.editProfileHeader}>UPDATE YOUR ACCOUNT DETAILS</Text>
              <Field
                name="username"
                component={this.renderInput}
                type="text"
              />

              <Field
                name="email"
                component={this.renderInput}
                type="email"
              />
              <Field
                name="password"
                component={this.renderInput}
                type="password"
              />
              <Field
                name="passwordConfirm"
                component={this.renderInput}
                type="passwordConfirm"

              />
              <Button
                rounded
                bordered
                block
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
