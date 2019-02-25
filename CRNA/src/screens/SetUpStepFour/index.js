
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
  Body
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
          <Button style={styles.backArrowContainer}>
            <Icon type="FontAwesome" name="arrow-left" style={{fontSize: 20}} />
          </Button>
          <View>
            <Grid>
              <Col style={styles.currentStep}>
              </Col>
              <Col style={styles.currentStep}>
              </Col>
              <Col style={styles.currentStep}>
              </Col>
            </Grid>
          </View>
            <View style={styles.setUpReview}>
              <Grid style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <Row>
                  <Text style={styles.title}> So, To Recap</Text>
                </Row>
                <Row style={styles.recapRow}>
                  <Col style={{width: '30%'}}>
                    <Icon type="FontAwesome" name="arrow-left" style={styles.recapIcons} />
                  </Col>
                  <Col style={{width: '70%'}}>
                    <Text style={styles.recapText}>So, To Recap So, To Recap So, To Recap</Text>
                  </Col>
                </Row>
                <Row style={styles.recapRow}>
                  <Col style={{width: '30%'}}>
                    <Icon type="FontAwesome" name="arrow-left" style={styles.recapIcons} />
                  </Col>
                  <Col style={{width: '70%'}}>
                    <Text style={styles.recapText}>So, To Recap So, To Recap So, To Recap</Text>
                  </Col>
                </Row>
                <Row style={styles.recapRow}>
                  <Col style={{width: '30%'}}>
                    <Icon type="FontAwesome" name="arrow-left" style={styles.recapIcons} />
                  </Col>
                  <Col style={{width: '70%'}}>
                    <Text style={styles.recapText}>So, To Recap So, To Recap So, To Recap</Text>
                  </Col>
                </Row>
              </Grid>

            </View>
              <View style={styles.setUpStepFour}>
                <View style={styles.buttonsContainer}>
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
