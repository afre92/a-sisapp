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
  Footer
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
class ForgotPasswordForm extends Component {

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

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Content>
            <Content padder scrollEnabled={false}>
              <Text style={styles.forgotPasswordHeader}>
                Reset Password
              </Text>
              <View style={styles.forgotPasswordContainer}>
                <Field
                  name="email"
                  component={this.renderInput}
                  type="email"
                  validate={[email, required]}
                />

                <Button
                  rounded
                  block
                  bordered
                  style={styles.emailBtn}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Send Email</Text>
                </Button>
              </View>
            </Content>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.helpBtns}>Back To Login</Text>
            </Button>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const ForgotPassword = reduxForm({
  form: "help"
})(ForgotPasswordForm);
export default ForgotPassword;
