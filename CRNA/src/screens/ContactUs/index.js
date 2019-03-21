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

class BecomeASubscriber extends Component {
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
              <Text style={styles.headerText}> Support</Text>
            </Body>
            <Right />
          </Header>
          <Content>
            <View>
              <Content padder scrollEnabled={false}>
                <Text style={styles.contactUsHeader}>
                  Contact Us
                </Text>
                <View style={styles.contactUsContainer}>
                  <Text style={styles.mainText}>We’re friendly so please let us know what you need.</Text>
                  <Text style={styles.contactInfo}>Email us support@asis.com</Text>
                </View>
              </Content>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}


export default BecomeASubscriber;
