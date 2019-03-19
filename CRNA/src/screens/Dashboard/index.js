
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
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
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
                <View style={{paddingHorizontal: 25, paddingVertical: 25}}>
                 <Feather style={{alignSelf: 'flex-end'}}name="share" color="white" size={30}/>
                 </View>
                </ImageBackground>
              </View>
            </RNView>
          </View>
          <View style={{paddingHorizontal: 20, paddingTop: 10}}>

          <Grid>
            <Row style={{paddingRight: 5}}>
            <TouchableWithoutFeedback onPress={() =>  this.props.navigation.navigate('Login')}>
              <Card style={{ height: 120, marginBottom: 10, borderRadius: 30}}>
                <View style={{justifyContent: 'center'}} >
                  <Text style={styles.cardTittle}>My Journey</Text>
                </View>
                <View>

                </View>
              </Card>
            </TouchableWithoutFeedback>
            </Row>
            <Row style={{paddingLeft: 5}}>
            <TouchableWithoutFeedback onPress={() =>  this.props.navigation.navigate('Login')}>
              <Card style={{ height: 120, marginBottom: 30, borderRadius: 30}}>
                <View style={{justifyContent: 'center',alignItems: 'center'}} >
                  <Text style={styles.cardTittle}>My Journey</Text>
                </View>
                <Text style={{color: 'black'}}>
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
