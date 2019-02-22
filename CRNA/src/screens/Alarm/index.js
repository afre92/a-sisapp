
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
  {label: 'param1', value: 0 },
  {label: 'param1', value: 0 },
  {label: 'param1', value: 0 }
];

var radio_props_two = [
  {label: 'param1', value: 0 },
  {label: 'param1', value: 0 },
  {label: 'param1', value: 0 }
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

class AlarmForm extends Component {
  constructor(props) {
    super(props)
    this.state = {day1: false, day2: true, day3: false, day4: true, day5: false, day6: false, day7: true, chosenDate: new Date(), itemSelected: 'calm' }
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={
              input.name === "username"
                ? "person"
                : input.name === "email" ? "mail" : "unlock"
            }
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={
              input.name === "username"
                ? "Username"
                : input.name === "email" ? "Email" : "Password"
            }
            secureTextEntry={input.name === "password" ? true : false}
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </Item>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}>> error here</Text>}
      </View>
    );
  }
  signUp() {
    if (this.props.valid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: "All the fields are compulsory!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  check() {
    if (this.props.valid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: "All the fields are compulsory!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
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
          <Content padder>
            <View style={styles.imageContainer}>
            <Grid>
              <Col>
                <Row>
                  <Text style={styles.weekDay}>Mon</Text>
                </Row>
                <Row>
                  <CheckBox color= "white" checked={this.state.day1} onPress={() => this.setState({ day1: !this.state.day1 })} />
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

            <View style={styles.signupContainer}>


              <DatePickerIOS
                style={styles.datePicker}
                date={this.state.chosenDate}
              />



            <View style={styles.moodContainer}>

              <RadioForm
                radio_props={radio_props_one}
                buttonColor={'#FFFFFF'}
                initial={-1}
                labelHorizontal={false}
                formHorizontal={true}
                buttonSize={40}
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
                buttonSize={40}
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
                style={styles.signupBtn}
              >
                <Text style={{ color: "#FFF" }}>Add Alarm</Text>
              </Button>

              <Button
                rounded
                bordered
                block
                onPress={() => this.signUp()}
                style={styles.signupBtn}
              >
               <Text style={{ color: "#FFF" }}>Continue</Text>
              </Button>
              </View>
            </View>




 
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Left style={{ flex: 2 }}>
              <Button small transparent>
                <Text style={styles.helpBtns}>Terms & Conditions</Text>
              </Button>
            </Left>
            <Right style={{ flex: 1 }}>
              <Button
                small
                transparent
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.helpBtns}>SignIn</Text>
              </Button>
            </Right>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const Alarm = reduxForm({
  form: "alarm"
})(AlarmForm);
export default Alarm;
