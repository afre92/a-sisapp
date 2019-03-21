
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
               <Icon active name="arrow-back" />
            </Button>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontWeight: 'bold',fontSize: 20}}> 3 of 3 </Text>
            </View>
            <View style={styles.setUpReview}>
              <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row>
                  <Text style={styles.title}> So, To Recap</Text>
                </Row>
                <Row style={styles.recapRow}>
                  <Col style={{width: '30%'}}>
                    <Icon type="FontAwesome" name="check-circle" style={styles.recapIcons} />
                  </Col>
                  <Col style={{width: '70%'}}>
                    <Text style={styles.recapText}>So, To Recap So, To Recap So, To Recap</Text>
                  </Col>
                </Row>
                <Row style={styles.recapRow}>
                  <Col style={{width: '30%'}}>
                    <Icon type="FontAwesome" name="check-circle" style={styles.recapIcons} />
                  </Col>
                  <Col style={{width: '70%'}}>
                    <Text style={styles.recapText}>So, To Recap So, To Recap So, To Recap</Text>
                  </Col>
                </Row>
                <Row style={styles.recapRow}>
                  <Col style={{width: '30%'}}>
                    <Icon type="FontAwesome" name="check-circle" style={styles.recapIcons} />
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
                  onPress={() => this.props.navigation.navigate('Dashboard')}
                  style={styles.susfBtn}
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
