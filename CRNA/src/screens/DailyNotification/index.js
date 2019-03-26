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
    value: 1,
    swichToggle: false
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
                <Row style={{marginVertical: 25}}>
                  <View style={{paddingHorizontal: 30}}>
                    <Text style={{textAlign: 'center', fontWeight: '600'}} >Get Daily affirmations to keep you mindful during the day</Text>
                  </View>
                </Row>
                 <Row style={{marginVertical: 25}}>
                  <Col>
                    <View style={{paddingHorizontal: 35}}>
                      <Text style={{fontWeight: '600', textAlign: 'center'}}>Notifications</Text>
                    </View>
                  </Col>
                  <Col>
                    <View style={{alignItems: 'center'}}>
                      <ToggleSwitch
                        isOn={this.state.swichToggle}
                        onColor='rgba(255, 255, 255, .8)'
                        offColor='rgba(255, 255, 255, .2)'
                        size='medium'
                        onToggle={(isOn) => this.setState({ swichToggle: isOn })}
                      />;
                    </View>
                  </Col>
                </Row>
                 <Row style={{marginVertical: 25}}>
                  <View style={{paddingHorizontal: 35, width: '100%'}}>
                    <Text style={{textAlign: 'center',fontWeight: '600'}}> How many reminders would you like a day </Text>
                    <Slider
                      step={1}
                      maximumValue={4}
                      value={this.state.value}
                      minimumTrackTintColor={'#fff'}
                      trackStyle={{'height': 3}}
                      thumbStyle={styles.thumbStyle}
                    />
                    <Grid>
                      <Col>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>1</Text>
                      </Col>
                      <Col>
                        <Text style={{textAlign: 'left', paddingLeft: 10, fontSize: 15, fontWeight: 'bold'}}>2</Text>
                      </Col>
                      <Col>
                        <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>3</Text>
                      </Col>
                      <Col>
                        <Text style={{textAlign: 'right', paddingRight: 10, fontSize: 15, fontWeight: 'bold'}} >4</Text>
                      </Col>
                      <Col>
                        <Text style={{textAlign: 'right',fontSize: 15, fontWeight: 'bold'}}>5</Text>
                      </Col>
                    </Grid>
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