
import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ImageBackground, StatusBar, Image, Dimensions} from "react-native";
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
  CardItem,
  Card
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import DaysAndTime from "../../components/DaysAndTime"
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

const primary = require("../../theme/variables/commonColor").brandPrimary;

var radio_props_one = [
  {label: 'ENERGIZED', value: 0 },
  {label: ' CALM ', value: 0 },
  {label: 'RELAXED', value: 0 },
];

var radio_props_two = [
  {label: 'PEACEFUL', value: 0 },
  {label: ' HAPPY ', value: 0 },
  {label: 'GREATFUL', value: 0 }
];

const deviceWidth = Dimensions.get("window").width;

class SetUpStepTwo extends Component {

  constructor(props) {
    super(props)
    this.state = {alarms: 0}
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  goToTop(){
     this.scroll.scrollTo({x: 0, y: 0, animated: true});
  }

  addAlarm() {
    this.component._root.scrollToPosition(0, 0)
    this.setState({
      alarms: this.state.alarms + 1
    });
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

        <Content padder style={styles.container} ref={c => (this.component = c)}>
          <View style={{paddingBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold',fontSize: 20}}> 1 of 3 </Text>
          </View>
          { this.state.alarms > 0 ? (
              <Card style={styles.card}>
                      <View style={{justifyContent: 'center', display: 'none'}} >
                        <Text style={styles.cardTittle}> 
                          <Ionicons  size={25} name="md-stopwatch" color="grey" /> 
                            Total Time Meditated
                        </Text>
                      </View>
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
                        <Col>
                        </Col>
                      </Grid>
                    </Card>
            ) : (
            <Text> No ALarm </Text>
          )}
          


          <DaysAndTime />

            <View style={styles.sustContainer}>
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
                  onPress={() => this.addAlarm()}
                  style={styles.sustBtn}
                >
                 <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Add Additional Alarm</Text>
                </Button>

                <Button
                  rounded
                  bordered
                  block
                  onPress={() => this.props.navigation.navigate("SetUpStepThree")}
                  style={styles.sustBtn}
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

export default SetUpStepTwo;
