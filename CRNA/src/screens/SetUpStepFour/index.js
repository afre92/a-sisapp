
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


const deviceWidth = Dimensions.get("window").width;

class SetUpStepFour extends Component {
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
        <View style={{marginVertical: 20, paddingLeft: 10}}>
          <Icon type="FontAwesome" name="arrow-left" style={styles.backArrow} />
        </View>
        <View>
              <Grid>
                <Col style={styles.currentStep}>
                </Col>
                <Col style={styles.currentStep}>
                </Col>
                <Col style={styles.progressBar}>
                </Col>
              </Grid>
        </View>

          <DaysAndTime />

            <View style={styles.setUpStepFour}>

              <View style={styles.buttonsContainer}>
                <Button
                  rounded
                  bordered
                  block
                  onPress={() => this.signUp()}
                  style={{display: 'none'}}
                >
                  <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Add Another Alarm</Text>
                </Button>

                <Button
                  rounded
                  bordered
                  block
                  onPress={() => this.signUp()}
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

export default SetUpStepFour;
