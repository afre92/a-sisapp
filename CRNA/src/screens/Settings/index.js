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

class Settings extends Component {

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
            <Content padder scrollEnabled={false}>
              <Text style={styles.settingsHeader}>
                Settings
              </Text>
              <View style={styles.buttonsContainer}>
                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.props.navigation.navigate("Alarms")}
                  style={styles.submit}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Morning Alarm</Text>
                </Button>

                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.props.navigation.navigate("Reminders")}
                  style={styles.submit}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Evening Reminder</Text>
                </Button>

                <Button
                  rounded
                  block
                  bordered
                  style={styles.submit}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Daily Notification</Text>
                </Button>
              </View>
            </Content>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}


export default Settings;