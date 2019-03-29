
import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { ImageBackground, StatusBar, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback,Platform, View as RNView } from "react-native";
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
  Body,
  Card,
  CardItem,
  Header
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import CheckboxFormX from 'react-native-checkbox-form';
const mockData = [
    {
        label: 'label1',
        value: 'one'
    },
    {
        label: 'label2',
        value: 'two'
    },
    {
        label: 'label3',
        value: 'three'
    },
        {
        label: 'label1',
        value: 'one'
    },
    {
        label: 'label2',
        value: 'two'
    }

];
const deviceWidth = Dimensions.get("window").width;
var i = 0

class Analytics extends Component {
  constructor(props) {
    super(props)
    this.state = {day1: false, day2: true, day3: false, day4: true, day5: false, day6: false, day7: true, chosenDate: new Date(), day: 1 }
  }

    _onSelect = ( item ) => {
      console.log(item);
    };
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
          <Header style={styles.headerStyle}>
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
          <Content style={styles.container}>
            <View >
            <Text style={{paddingVertical: 20, textAlign: 'center', fontWeight: '600'}}> Current Streak </Text>
              <RNView>
                <View>
                <Grid style={{paddingHorizontal: 40}}>
              {
            
               [1, 2, 3, 4, 5, 6].map((value, index) => {
                
                return (
                  <Row key={index}>
                  {  
                    [1, 2, 3, 4, 5].map((value1, index1) => {
                      i++
                      return (
                        <Col>
                          <Row style={{justifyContent: 'center'}}>
                            {i > 18 ? (
                             <Ionicons size={25} name="ios-play" color="rgba(255, 255, 255, .5)" /> 
                            ) : (
                             <Ionicons size={25} name="ios-checkmark-circle" color="white" /> 
                               
                            )}
                          </Row>
                          <Row>
                            {i > 18 ? (
                             <Text style={styles.disabledWeekDay}>{i}</Text>
                            ) : (
                             <Text style={styles.weekDay}>{i}</Text>
                            )}
                          </Row>
                        </Col>
                      )
                    })
                  }
                  </Row>
                )
               
               })
              }
                </Grid>

                </View>
              </RNView>
            </View>
            <View style={styles.cardsContainer}>
              <Grid>
                <Row>
                  <TouchableWithoutFeedback 
                    onPress={() =>  this.props.navigation.navigate('Login')}
                    >
                    <Card style={styles.card}>
                      <View style={{justifyContent: 'center'}} >
                        <Text style={styles.cardTittle}> 
                          <Ionicons  size={25} name="md-stopwatch" color="grey" /> 
                            Total Time Meditated
                        </Text>
                      </View>
                      <CardItem style={styles.cardBody}>
                        <Text style={{color: 'black'}}>
                          4 hours
                        </Text>
                      </CardItem>
                    </Card>
                  </TouchableWithoutFeedback>
                </Row>
                <Row style={{paddingTop: 10}}>
                  <TouchableWithoutFeedback
                    onPress={() =>  this.props.navigation.navigate('Login')}
                    >
                    <Card style={styles.card}>
                      <View style={{justifyContent: 'center'}} >
                        <Text style={styles.cardTittle}> 
                          <Ionicons  size={25} name="ios-thumbs-up" color="grey" /> Session Completed</Text>
                      </View>
                      <CardItem style={styles.cardBody}>
                        <Text style={{color: 'black'}}>
                          12 Sessions
                        </Text>
                      </CardItem>

                    </Card>
                  </TouchableWithoutFeedback>
                  </Row>
                  <Row style={{display: 'none'}}>
                    <TouchableWithoutFeedback 
                      onPress={() =>  this.props.navigation.navigate('Login')}
                      >
                      <Card style={styles.card}>
                        <View style={{justifyContent: 'center'}} >
                          <Text style={styles.cardTittle}>
                            <Ionicons  size={25} name="ios-stats" color="grey" /> 
                              Current Day Streak
                          </Text>
                        </View>
                        <CardItem style={styles.cardBody}>
                          <Text style={{color: 'black'}}>
                            6 days
                          </Text>
                        </CardItem>
                      </Card>
                    </TouchableWithoutFeedback>
                  </Row>
                </Grid>
              </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Analytics;
