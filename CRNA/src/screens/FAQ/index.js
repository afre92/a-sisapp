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

class FAQ extends Component {
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
                <Text style={styles.FAQHeader}>
                  FAQ
                </Text>
                <View style={{paddingHorizontal: 10}}>
                  <Text style={styles.mainText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo
                  </Text>
                   <Text style={styles.mainText}>
                    consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  </Text>
                </View>
                  <View style={styles.forgotPasswordContainer}>
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


export default FAQ;
