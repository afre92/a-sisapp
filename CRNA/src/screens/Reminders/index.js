
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
  Radio,
  Header,
  CardItem,
  Card,
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import DaysAndTime from "../../components/DaysAndTime"


import { MaterialCommunityIcons, Feather, FontAwesome, Entypo } from '@expo/vector-icons';

import AnalogClock from 'react-native-clock-analog';


var radio_props_one = [
  {label: 'ENERGIZED', value: 0 },
  {label: ' CALM ', value: 0 },
  {label: 'RELAXED', value: 0 }
];

var radio_props_two = [
  {label: 'PEACEFUL', value: 0 },
  {label: ' HAPPY ', value: 0 },
  {label: 'GREATFUL', value: 0 }
];


const deviceWidth = Dimensions.get("window").width;

class Reminders extends Component {
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
           
            <Text style={{fontWeight: 'bold', paddingTop: 5}}> Reminders </Text>
          </Body>
          <Right />
        </Header>

        <Content padder style={styles.container}>

        <View style={{ alignItems: 'center'}}>
          <View style={styles.reminderIcon}>
            
            <Entypo name="bell"  color="white" size={60}/>
          </View>
        </View>
          <DaysAndTime />

            <View style={styles.signupContainer}>
              <Text style={styles.subHeader}> How would you like to (wake) up ? </Text>
              <View style={styles.moodContainer}>

                <RadioForm
                  radio_props={radio_props_one}
                  buttonColor={'#FFFFFF'}
                  initial={-1}
                  labelHorizontal={false}
                  formHorizontal={true}
                  buttonSize={50}
                  selectedButtonColor={'#FFFFFF'}
                  labelStyle={styles.labelStyle}
                  onPress={(value) => {this.setState({value:value})}}
                />

                <RadioForm
                  radio_props={radio_props_two}
                  buttonColor={'#FFFFFF'}
                  initial={-1}
                  labelHorizontal={false}
                  formHorizontal={true}
                  buttonSize={50}
                  selectedButtonColor={'#FFFFFF'}
                  labelStyle={styles.labelStyle}
                  onPress={(value) => {this.setState({value:value})}}
                />
              </View>

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
                  style={styles.signupBtn}
                >
                 <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Continue</Text>
                </Button>
                </View>
            </View>

            <View style={styles.setUpStepThree}>
                  <Card style={{ height: 90, borderRadius: 30, display: 'none'}}>
                    <View style={{justifyContent: 'center'}} >
                      <Text style={styles.cardTittle}>  Session Completed</Text>
                    </View>
                    <CardItem style={{backgroundColor: 'transparent',textAlign: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'black'}}>
                          12 Sessions
                        </Text>
                    </CardItem>

                  </Card>

            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Reminders;
