
import React, { Component } from "react";
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


class SetUpStepThree extends Component {

  setDate(newDate) {
    this.setState({chosenDate: newDate});
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
        <Content padder style={styles.container}>
          <Button 
            style={styles.backArrowContainer} 
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon active name="arrow-back" />
          </Button>
          <View style={{paddingBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold',fontSize: 20}}> 2 of 3 </Text>
          </View>

          <DaysAndTime />

            <View style={styles.setUpStepThree}>
              <View style={styles.buttonsContainer}>
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
