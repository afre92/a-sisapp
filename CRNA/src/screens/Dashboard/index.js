
import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ImageBackground, StatusBar, Image, Dimensions, DatePickerIOS } from "react-native";
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
          source={require("../../../assets/dashboardBg.png")}
          style={styles.background}
        >

          <Header style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon active name="menu" />
              </Button>
            </Left>
            <Body>
              <Image source={headerLogo} style={styles.imageHeader} />
            </Body>
            <Right />
          </Header>
        <Content padder style={styles.container}>
          <Content >
              <View style={{paddingBottom: 40}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                    Good Morning!
                </Text>
                <Text style={{textAlign: 'center'}}>
                    27/02/2018
                </Text>
              </View>
              <View style={{paddingBottom: 70}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: '22'}}>
                    Some text here asdfasdf asdfasdf asdfasdf dsafasdf
                </Text>
              </View>
          </Content>
            <Card style={{fontColor: 'black', color: 'black', height: 200, marginBottom: 30}}>
              <View style={{textAlign: 'center', justifyContent: 'center'}} >
                <Text style={styles.cardTittle}>My Journey</Text>
              </View>
              <CardItem>
                <Body>
                  <Text style={{fontColor: 'black', color: 'black'}}>
                    Some text here asdfasdf asdfasdf asdfasdf dsafasdf
                  </Text>
                </Body>
              </CardItem>

            </Card>

            <Card style={{fontColor: 'black', color: 'black', height: 200, marginBottom: 30}}>
              <View style={{textAlign: 'center', justifyContent: 'center'}} >
                <Text style={styles.cardTittle}>My Stats </Text>
              </View>
              <CardItem>
                <Body>
                  <Text style={{fontColor: 'black', color: 'black'}}>
                    Some text here asdfasdf asdfasdf asdfasdf dsafasdf
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={{fontColor: 'black', color: 'black', height: 200, marginBottom: 30}}>
              <View style={{textAlign: 'center', justifyContent: 'center'}} >
                <Text style={styles.cardTittle}>Others</Text>
              </View>
              <CardItem>
                <Body>
                  <Text style={{fontColor: 'black', color: 'black'}}>
                    Some text here asdfasdf asdfasdf asdfasdf dsafasdf
                  </Text>
                </Body>
              </CardItem>
            </Card>

        </Content>

        </ImageBackground>
      </Container>
    );
  }
}

export default Dashboard;
