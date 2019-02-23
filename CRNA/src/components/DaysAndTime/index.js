
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

// const logo = require("../../../assets/logo.png");
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";



var radio_props_one = [
  {label: 'CALM', value: 0 },
  {label: 'ENERGIZED', value: 0 },
  {label: 'RELAXED', value: 0 }
];

var radio_props_two = [
  {label: 'HAPPY', value: 0 },
  {label: 'PEACEFUL', value: 0 },
  {label: 'GREATFUL', value: 0 }
];



const deviceWidth = Dimensions.get("window").width;
const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const minLength5 = minLength(5);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

class DaysAndTime extends Component {
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
        <View padder style={styles.container}>
          <Text style={styles.header}> CHOOSE YOUR DAYS </Text>
            <View style={styles.formContainer}>
              <Grid>
                <Col>
                  <Row>
                    <Text style={styles.weekDay}>Mon</Text>
                  </Row>
                  <Row>
                    <CheckBox color="white" style={styles.checkBoxes} checked={this.state.day1} onPress={() => this.setState({ day1: !this.state.day1 })} />
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.weekDay}>Tue</Text>
                  </Row>
                  <Row>
                    <CheckBox color= "white" checked={this.state.day2} onPress={() => this.setState({ day2: !this.state.day2 })} />
                  </Row>
                </Col>
                <Col>
                <Row>
                    <Text style={styles.weekDay}>Wed</Text>
                  </Row>
                  <Row>
                    <CheckBox color= "white" checked={this.state.day3} onPress={() => this.setState({ day3: !this.state.day3 })} />
                  </Row>
                </Col>
                <Col>    
                  <Row>
                    <Text style={styles.weekDay}>Thu</Text>
                  </Row>
                  <Row>
                    <CheckBox color= "white" checked={this.state.day4} onPress={() => this.setState({ day4: !this.state.day4 })} />
                  </Row>
                </Col>
                <Col>    
                  <Row>
                    <Text style={styles.weekDay}>Fri</Text>
                  </Row>
                  <Row>
                    <CheckBox color= "white" checked={this.state.day5} onPress={() => this.setState({ day5: !this.state.day5 })} />
                  </Row>
                </Col>
                <Col>    
                  <Row>
                    <Text style={styles.weekDay}> Sat </Text>
                  </Row>
                  <Row>
                    <CheckBox color= "white" checked={this.state.day6} onPress={() => this.setState({ day6: !this.state.day6 })} />
                  </Row>
                </Col>
                <Col>    
                  <Row>
                    <Text style={styles.weekDay}> Sun </Text>
                  </Row>
                  <Row>
                    <CheckBox color="white" checked={this.state.day7} onPress={() => this.setState({ day7: !this.state.day7 })} />
                  </Row>
                </Col>
              </Grid>
            </View>

            <View style={styles.datePickerContainer}>
              <Text style={styles.subHeader}> What time would you like to wake up ? </Text>
              <DatePickerIOS
                mode='time'
                style={styles.datePicker}
                date={this.state.chosenDate}
              />
              </View>
          </View>
    );
  }
}


export default DaysAndTime;
