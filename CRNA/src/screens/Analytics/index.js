
import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ImageBackground, StatusBar, Image, Dimensions, DatePickerIOS, TouchableOpacity, TouchableWithoutFeedback,Platform, View as RNView } from "react-native";
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
import DaysAndTime from "../../components/DaysAndTime"
import Carousel from "react-native-carousel-view";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const headerLogo = require("../../../assets/header-logo.png");

const deviceWidth = Dimensions.get("window").width;

class Dashboard extends Component {

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  textInput: any;

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

        <Header style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
           
            <Text style={{fontWeight: 'bold', paddingTop: 5}}> Analytics </Text>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <View >
            <RNView>
              <View style={styles.slide} >
                <ImageBackground
                  imageStyle={{ borderRadius: 25 }}
                  style={styles.newsPoster}
                  source={require("../../../assets/NewsIcons/4.jpg")}
                >
                <View flex style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 25, paddingHorizontal: 20}}> This where the main Text is  This where the main Text is </Text>
                </View>
                <View style={{height: 70, paddingHorizontal: 20, paddingVertical: 10}}>
                  <Grid style={{height: 50}} >
                    <Col style={{height: 50}}>
                      <Text style={{ fontWeight: 'bold'}}> John Doe </Text>
                      <Text> San Francisco, CA </Text>
                    </Col>
                    <Col style={{height: 50}}>
                    <Feather style={{alignSelf: 'flex-end', paddingHorizontal: 20}}name="share" color="white" size={30}/>
                    </Col>
                  </Grid>
                </View>
            
                </ImageBackground>
              </View>
            </RNView>
          </View>
          <View style={{paddingHorizontal: 40, paddingTop: 10}}>
            <Grid>
              <Row >
              <TouchableWithoutFeedback onPress={() =>  this.props.navigation.navigate('Login')}>
                <Card style={{ height: 90, borderRadius: 30}}>
                  <View style={{justifyContent: 'center'}} >
                    <Text style={styles.cardTittle}> <Ionicons  size={25} name="md-stopwatch" color="grey" /> Total Time Meditated</Text>
                  </View>
                  <CardItem style={{backgroundColor: 'transparent',textAlign: 'center', justifyContent: 'center'}}>
                      <Text style={{color: 'black'}}>
                        4 hours
                      </Text>
                  </CardItem>

                </Card>
              </TouchableWithoutFeedback>
              </Row>
              <Row>
                <TouchableWithoutFeedback onPress={() =>  this.props.navigation.navigate('Login')}>
                  <Card style={{ height: 90, borderRadius: 30}}>
                    <View style={{justifyContent: 'center'}} >
                      <Text style={styles.cardTittle}> <Ionicons  size={25} name="ios-thumbs-up" color="grey" /> Session Completed</Text>
                    </View>
                    <CardItem style={{backgroundColor: 'transparent',textAlign: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'black'}}>
                          12 Sessions
                        </Text>
                    </CardItem>

                  </Card>
                </TouchableWithoutFeedback>
                </Row>
                <Row>
                  <TouchableWithoutFeedback onPress={() =>  this.props.navigation.navigate('Login')}>
                    <Card style={{ height: 90, borderRadius: 30}}>
                      <View style={{justifyContent: 'center'}} >
                        <Text style={styles.cardTittle}> <Ionicons  size={25} name="ios-stats" color="grey" />  Current Day Streak</Text>
                      </View>
                      <CardItem style={{backgroundColor: 'transparent',textAlign: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'black'}}>
                          6 days
                        </Text>
                      </CardItem>

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
