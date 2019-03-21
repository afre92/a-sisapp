
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
import { Ionicons, Feather } from '@expo/vector-icons';

const deviceWidth = Dimensions.get("window").width;

class Analytics extends Component {
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
              <RNView>
                <View style={styles.slide} >
                  <ImageBackground
                    imageStyle={{ borderRadius: 25 }}
                    style={styles.newsPoster}
                    source={require("../../../assets/NewsIcons/4.jpg")}
                  >
                  <View flex style={styles.mainTextContainer}>
                    <Text style={{fontWeight: 'bold', fontSize: 25, paddingHorizontal: 20}}>This where the main Text is  This where the main Text is </Text>
                  </View>
                  <View style={styles.userInfoContianer}>
                    <Grid style={{height: 50}} >
                      <Col style={{height: 50, width: '80%'}}>
                        <Text style={{ fontWeight: 'bold'}}> John Doe </Text>
                        <Text> San Francisco, CA </Text>
                      </Col>
                      <Col style={{height: 50, width: '20%'}}>
                        <Feather style={styles.shareIcon} name="share" color="white" size={30}/>
                      </Col>
                    </Grid>
                  </View>
              
                  </ImageBackground>
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
                <Row>
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
                  <Row>
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
