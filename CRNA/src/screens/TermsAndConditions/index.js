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

class TermsAndConditions extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
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
              <Text style={styles.headerText}></Text>
            </Body>
            <Right />
          </Header>
          <Content>
            <View>
              <Content padder scrollEnabled={false}>
                <Text style={styles.termsAndConditionsHeader}>
                  Terms & Conditions
                </Text>
                <View style={{paddingHorizontal: 20}}>
                  <Text style={styles.mainText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo
                  </Text>
                </View>
                <View style={styles.termsAndConditionsContainer}>

                  <Button
                    rounded
                    block
                    bordered
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


export default TermsAndConditions;
