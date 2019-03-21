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

import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

class ProfileDetails extends Component {
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
            <Text style={styles.headerText}> Profile Details</Text>
          </Body>
          <Right />
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
                <Text style={styles.userName}>
                  John Doe 
                  <Feather 
                    onPress={() => this.props.navigation.navigate("EditProfile")} 
                    name="edit-3" 
                    color="white" 
                    size={20} 
                  />
                </Text>
                <Text style={styles.userEmail}>johndoe@gmail.com </Text>
              </View>

              <View style={styles.subscriptionContainer}>
                <Text style={styles.subscriptionTitle}>Subscription</Text>
                <Text style={styles.currentVersion}>FREE VERSION</Text>
              </View>
            </View>

            <View style={{alignSelf: "center"}}>
              <Text style={styles.commingSoonTitle}> Unlock A.SIS Premium </Text>
              <Text  style={styles.commingSoonText}> Comming Soon</Text>
            </View>

            <View style={styles.profileDetailsContainer}>
            <Grid>
              <Row style={styles.premiumFeature}>
                <FontAwesome 
                  name="check" 
                  color="white" 
                  size={20}
                />
                <Text style={styles.premiumFeatureText}>
                  Excepteur sint occaecat cupidatat non proident, sunt 
                </Text>
              </Row>
              <Row style={styles.premiumFeature}>
                <FontAwesome 
                  name="check" 
                  color="white" 
                  size={20}
                />
                <Text style={styles.premiumFeatureText}>
                  Excepteur sint occaecat cupidatat non proident, sunt 
                </Text>
              </Row>
              <Row style={styles.premiumFeature}>
                <FontAwesome 
                  name="check" 
                  color="white" 
                  size={20}
                />
                <Text style={styles.premiumFeatureText}>
                  Excepteur sint occaecat cupidatat non proident, sunt 
                </Text>
              </Row>
              <Row style={styles.premiumFeature}>
                <FontAwesome 
                  name="check" 
                  color="white" 
                  size={20}
                />
                <Text style={styles.premiumFeatureText}>
                  Excepteur sint occaecat cupidatat non proident, sunt 
                </Text>
              </Row>
            </Grid>

            </View>
              <Button
                rounded
                bordered
                block
                onPress={() => this.props.navigation.navigate("BecomeASubscriber")}
                style={styles.premium}
              >
                <Text style={styles.buttonText}>PREMIUM</Text>
              </Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}


export default ProfileDetails;
