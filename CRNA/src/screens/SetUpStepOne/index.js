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
class SetUpStepOne extends Component {
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

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Content contentOffset={this.state.offset}>

            <Content padder scrollEnabled={false}>
            <View style={styles.imageContainer}>
              <Image source={require("../../../assets/logo-horizontal-w-text.png")} style={styles.logo}/>
            </View>
            <View style={styles.welcome}>
              <Text style={styles.welcomeHeader}>
                  WELCOME
              </Text>
              <Text style={styles.welcomeText}>
                Lets Start Your Day With Love and End it with Bliss
              </Text>
            </View>
              <View style={styles.forgotPasswordContainer}>
              </View>
            </Content>

            <Content padder scrollEnabled={false}>
              <View style={styles.forgotPasswordContainer}>
                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.props.navigation.navigate("SignUp")}
                  style={styles.emailBtn}
                >
                  <Text style={{ color: "#FFF" }}>Get Started</Text>
                </Button>
              </View>
            </Content>

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
export default SetUpStepOne;
