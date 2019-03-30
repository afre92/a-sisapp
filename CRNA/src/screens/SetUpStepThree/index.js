
import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
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
  Card,
  CardItem,
  Radio,
  Header
} from "native-base";
import { Field, reduxForm } from "redux-form";
const primary = require("../../theme/variables/commonColor").brandPrimary;
import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import DaysAndTime from "../../components/DaysAndTime"
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';


class SetUpStepThree extends Component {

  constructor(props) {
    super(props)
    this.state = {reminders: 0}
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  addReminder() {
    this.setState({
      reminders: this.state.reminders + 1
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
              <Text style={{fontWeight: 'bold', paddingTop: 5}}> Analytics </Text>
            </Body>
            <Right />
          </Header>
        <Content padder style={styles.container}>
          <View style={{paddingBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold',fontSize: 20}}> 2 of 3 </Text>
          </View>
          { this.state.reminders > 0 ? (
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
                      <Text style={{color: primary, fontWeight: 'bold'}}>MTWTF</Text>
                    </Row>
                  </Col>
                  <Col>
                  </Col>
                </Grid>
              </Card>
            ) : (
            <Text> </Text>
          )}

          <DaysAndTime />

            <View style={styles.setUpStepThree}>
              <View style={styles.buttonsContainer}>
                <Button
                  rounded
                  bordered
                  block
                  onPress={() => this.addReminder()}
                  style={styles.sustBtn}
                >
                 <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Add Additional Reminder</Text>
                </Button>

                <Button
                  rounded
                  bordered
                  block
                  onPress={() => this.props.navigation.navigate("SetUpStepFour")}
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

export default SetUpStepThree;
