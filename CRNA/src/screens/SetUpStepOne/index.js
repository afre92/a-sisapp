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


class SetUpStepOne extends Component {


  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Content >
            <Content padder scrollEnabled={false}>
              <View style={styles.imageContainer}>
                <Image source={require("../../../assets/logo-horizontal.png")} style={styles.logo}/>
              </View>
              <View style={styles.welcome}>
                <Text style={styles.welcomeHeader}>
                    WELCOME
                </Text>
                <Text style={styles.welcomeText}>
                  Lets Start Your Day With Love and End it with Bliss
                </Text>
              </View>
            </Content>

            <Content padder scrollEnabled={false}>
              <View style={styles.setUpStepOneContainer}>
                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.props.navigation.navigate("SetUpStepTwo")}
                  style={styles.button}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Get Started</Text>
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
