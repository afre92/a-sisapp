
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
  Header,
  Radio,
  Card,
  CardItem
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import DaysAndTime from "../../components/DaysAndTime"
import ToggleSwitch from 'toggle-switch-react-native'

import { Ionicons, Feather} from '@expo/vector-icons';

import AnalogClock from 'react-native-clock-analog';
const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;

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

class Alarms extends Component {

  constructor(props) {
    super(props)
    this.state = {edit: false, alarms: 0, swichToggle: true}
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  addAlarm() {
    this.toggleEdit()
    this.setState({
      alarms: 1
    });
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
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.headerText}> Alarms </Text>
          </Body>
          <Right>
            <Button
                transparent
                onPress={() => this.toggleEdit()}
            >

            { this.state.edit === false ? (

              <Feather color="white" name="plus" size={30}/>
              
              ) : (
                <Feather color="white" name="x" size={30}/>
              )
            }
            </Button>
            
            
          </Right>
        </Header>
        <Content padder style={styles.container}>
          <View style={{ alignItems: 'center'}}>
            <AnalogClock
              size={150}
              colorClock="rgba(255,255,255,0.1)"
              hour="2"
              minutes={55}
          />
        </View>

          { this.state.edit === false ? (
            <View >
            <Text style={styles.editSubHeader}> Alarm Clock gently wakes you up with mindfulness everyday</Text>
             
              {this.state.alarms > 0 ? (
              <Card style={styles.card}>
                <Grid>
                  <Col style={{}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: primary, fontSize: 18}}>7:00 AM</Text> 
                    </View>
                  </Col>
                  <Col style={{flex: 1, alignItems: 'center'}}>
                    <Row style={{ alignItems: 'center'}}>
                      <Text style={{color: primary, fontWeight: 'bold'}}>Happy</Text>
                    </Row>
                    <Row style={{ alignItems: 'center'}}>
                      <Text style={{color: primary, fontWeight: 'bold'}}>MTWTF</Text>
                    </Row>
                  </Col>
                  <Col >
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <ToggleSwitch
                        isOn={this.state.swichToggle}
                        onColor={primary}
                        offColor='#cccccc'
                        size='small'
                        onToggle={(isOn) => this.setState({ swichToggle: isOn })}
                      />;
                    </View>
                  </Col>
                </Grid>
              </Card>
              ) : (
                <Text style={{textAlign: 'center'}}> Press the  "<Feather color="white" name="plus" size={20} />"  button to add Alarms </Text>
              )
              }
            </View>
            ) : (
                    <View >
          <DaysAndTime />
          <View style={styles.AlarmsContainer}>
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
                onPress={() => this.addAlarm()}
                style={styles.signupBtn}
              >
               <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Save</Text>
              </Button>
            </View>
          </View>

          </View>
          )}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Alarms;
