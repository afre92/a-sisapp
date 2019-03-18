
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
  Footer,
  CheckBox,
  Body,
  Radio
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import DaysAndTime from "../../components/DaysAndTime"

import AnalogClock from 'react-native-clock-analog';
const deviceWidth = Dimensions.get("window").width;

class Alarms extends Component {
  constructor(props) {
    super(props)
    this.state = {day1: false, day2: true, day3: false, day4: true, day5: false, day6: false, day7: true, chosenDate: new Date(), itemSelected: 'calm' }
  }

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

        <Content padder style={styles.container}>
        <Button style={styles.backArrowContainer} onPress={() => this.props.navigation.goBack()}>
          <Icon type="FontAwesome" name="arrow-left" style={{fontSize: 20}} />


        </Button>
        <View style={{ alignItems: 'center'}}>
          <AnalogClock
            size={150}
            colorClock="rgba(255,255,255,0.1)"
            hour="2"
            minutes={55}
          />
        </View>
          <DaysAndTime />

            <View style={styles.setUpStepThree}>

              <View style={styles.buttonsContainer}>

                <Button
                  rounded
                  bordered
                  block
                  onPress={() => this.props.navigation.navigate("SetUpStepFour")}
                  style={styles.signupBtn}
                >
                 <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Continue</Text>
                </Button>
                </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Alarms;
