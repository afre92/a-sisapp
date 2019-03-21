
import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ImageBackground, StatusBar, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback,Platform, View as RNView } from "react-native";
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
  CheckBox,
  Body,
  Card,
  CardItem,
  Header
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
const headerLogo = require("../../../assets/header-logo.png");

const deviceWidth = Dimensions.get("window").width;

class Dashboard extends Component {

  setDate(newDate) {
    this.setState({chosenDate: newDate});
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
          <Header style={styles.headerStyle}>
            <Left />
            <Body>
              <Image source={headerLogo} style={styles.imageHeader} />
            </Body>
            <Right style={{paddingTop: 10, paddingRight: 15}}>
              <TouchableOpacity
                transparent
                onPress={() => this.props.navigation.navigate('Profile')}
              >
                <FontAwesome active name="user-circle" color="white" size={30}/>
              </TouchableOpacity>
            </Right>
          </Header>
          <Content style={styles.container}>
            <View>
              <RNView>
                <View style={styles.slide} >
                  <ImageBackground
                    imageStyle={{ borderRadius: 25 }}
                    style={styles.newsPoster}
                    source={require("../../../assets/NewsIcons/4.jpg")}
                  >
                    <View flex style={styles.mainTextContainer}>
                      <Text style={styles.mainText}> 
                        This where the main Text is  This where the main Text is
                      </Text>
                    </View>
                    <View style={styles.shareIcon}>
                      <Feather style={{alignSelf: 'flex-end'}} name="share" color="white" size={30}/>
                    </View>
                  </ImageBackground>
                </View>
              </RNView>
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 10}}>
              <Grid>
                <Row style={{paddingRight: 5}}>
                <TouchableWithoutFeedback 
                  onPress={() =>  this.props.navigation.navigate('Analytics')}
                >
                  <Card style={styles.cardContainer}>
                    <View style={{justifyContent: 'center'}} >
                      <Text style={styles.cardTittle}>My Stats</Text>
                    </View>
                    <Text style={styles.cardBody}>
                      condimentum massa. Nam volutpat feugiat quam id porttitor.
                    </Text>
                    <View>

                    </View>
                  </Card>
                </TouchableWithoutFeedback>
                </Row>
                <Row style={{paddingLeft: 5}}>
                <TouchableWithoutFeedback 
                  onPress={() =>  this.props.navigation.navigate('Playlist')}
                >
                  <Card style={styles.cardContainer}>
                    <View style={{justifyContent: 'center'}} >
                      <Text style={styles.cardTittle}>My Journey</Text>
                    </View>
                    <Text style={styles.cardBody}>
                      condimentum massa. Nam volutpat feugiat quam id porttitor.
                    </Text>
                  </Card>
                </TouchableWithoutFeedback>
                </Row>
              </Grid>
            </View>
          </Content>

        </ImageBackground>
      </Container>
    );
  }
}

export default Dashboard;
