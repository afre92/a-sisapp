// @flow

import React, { Component } from "react";
import { ImageBackground, StatusBar, Image, TouchableOpacity } from "react-native";
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
import { Entypo } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

const headerLogo = require("../../../assets/header-logo.png");

class Profile extends Component {

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
              <Text style={styles.headerText}> Profile </Text>
            </Body>
            <Right>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Settings')}
              >
                <Entypo active name="cog" size={30} color="white" />
              </TouchableOpacity>
            </Right>
          </Header>
          <Content padder>
            <View style={styles.profileContainer}>
              <View style={{ alignSelf: "center" }}>
                <Thumbnail
                  source={require("../../../assets/Contacts/profile.png")}
                  style={styles.profilePic}
                />
              </View>
              <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>John Doe </Text>
                <Text style={styles.userEmail}>johndoe@gmail.com </Text>
              </View>

            </View>

            <View style={styles.profileContainer}>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("ProfileDetails")}
                style={styles.profileBtn}
              >
                <Text style={styles.buttonText}>My Account</Text>
              </Button>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("ContactUs")}
                style={styles.profileBtn}
              >
                <Text style={styles.buttonText}>Support</Text>
              </Button>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("TSOM")}
                style={styles.profileBtn}
              >
                <Text style={styles.buttonText}>The Science of Affirmations</Text>
              </Button>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("FAQ")}
                style={styles.profileBtn}
              >
                <Text style={styles.buttonText}>FAQ</Text>
              </Button>

              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.signOut}
              >
                <Text style={styles.buttonText}>Log Out</Text>
              </Button>

            </View>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Left style={{ flex: 2 }}>
              <Button small transparent
                onPress={() => this.props.navigation.navigate("TermsAndConditions")}
              >
                <Text style={styles.helpBtns}>Terms & Conditions</Text>
              </Button>
            </Left>
            <Right style={{ flex: 2 }}>
              <Button
                small
                transparent
                onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
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

export default Profile;
