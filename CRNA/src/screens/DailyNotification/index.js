// @flow
import React, { Component } from "react";
import { ImageBackground, StatusBar } from "react-native";
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
  Footer,
  Header,
  Body,
  Left,
  Right
} from "native-base";
import { Field, reduxForm } from "redux-form";
import Slider from "react-native-slider"
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";
import ToggleSwitch from 'toggle-switch-react-native'

class DailyNotification extends Component {

  state = {
    value: 1
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Header style={styles.header}>
            <Left style={{width: '10%'}}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.headerText}>Notifications</Text>
            </Body>
            <Right style={{width: 10}}/>
          </Header>
          <Content>
            <View style={styles.mainContainer}>
              <Grid>
                <Row>
                  <View style={{paddingHorizontal: 20}}>
                    <Text style={{textAlign: 'center'}} >Get Daily affirmations to keep you mindful during the day</Text>
                  </View>
                </Row>
                <Row>
                  <Col>
                    <View style={{paddingHorizontal: 20}}>
                      <Text>Notifications</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{alignItems: 'center'}}>
                      <ToggleSwitch
                        isOn={false}
                        onColor='white'
                        offColor='rgba(255, 255, 255, .2)'
                        size='small'
                        onToggle={ (isOn) => console.log('changed to : ', isOn) }
                      />;
                    </View>
                  </Col>
                </Row>
                <Row>
                  <View style={{paddingHorizontal: 40, width: '100%'}}>
                    <Text style={{flex: 1, textAlign: 'center'}}> How many reminders would you like a day </Text>
                    <Slider
                      step={1}
                      maximumValue={5}
                      value={this.state.value}
                      minimumTrackTintColor={'#fff'}
                      trackStyle={{'height': 3}}
                      thumbStyle={styles.thumbStyle}
                    />
                  </View>
                </Row>
              </Grid>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}


export default DailyNotification;