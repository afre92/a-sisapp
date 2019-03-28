
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
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Calendar as MonthCalendar } from "react-native-calendars";

const headerLogo = require("../../../assets/header-logo.png");

const deviceWidth = Dimensions.get("window").width;

class Dashboard extends Component {

  // setDate(newDate) {
  //   this.setState({chosenDate: newDate});
  // }

  state: {
    date: Object,
    selected: string
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      date: new Date(),
      selected: ""
    };
  }

  onDateChange(date: Object) {
    this.setState({ date });
  }
  onDayPress(day: any) {
    this.setState({
      selected: day.dateString
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
          <Header style={styles.headerStyle}>
            <Left />
            <Body>
              <Image source={headerLogo} style={styles.imageHeader} />
            </Body>
            <Right style={{paddingTop: 10, paddingRight: 15}}>
              <TouchableOpacity
                transparent
                onPress={() => this.props.navigation.navigate('Profile')}
              >
                <FontAwesome active name="user-circle" color="white" size={30}/>
              </TouchableOpacity>
            </Right>
          </Header>
          <Content style={styles.container}>
            <View>
              <RNView>
                <View style={styles.slide} >
                  <ImageBackground
                    imageStyle={{ borderRadius: 25 }}
                    style={styles.newsPoster}
                    source={require("../../../assets/NewsIcons/4.jpg")}
                  >
                    <View flex style={styles.mainTextContainer}>
                      <Text style={styles.mainText}> 
                        This where the main Text is  This where the main Text is
                      </Text>
                    </View>
                    <View style={styles.shareIcon}>
                      <View  style={{flexDirection: 'row'}}>
                      <Ionicons style={{paddingRight: 20}} name="ios-color-palette" color="white" size={30}/><Feather name="share" color="white" size={30}/>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </RNView>
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <View style={{display: 'none'}}>
            <MonthCalendar
              onDayPress={e => this.onDayPress(e)}
              disableMonthChange={true}
              markedDates={{ [this.state.selected]: { selected: true } }}
              theme={{
                calendarBackground: "transparent",
                textSectionTitleColor: "#8e2b5f",
                selectedDayBackgroundColor: "#8e2b5f",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#621d42",
                dayTextColor: "#fff",
                textDisabledColor: "#621d42",
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: "#fff",
                monthTextColor: "#fff"
              }}
            />
          </View>
              <Grid>
                <Row>
                <TouchableWithoutFeedback 
                  onPress={() =>  this.props.navigation.navigate('Analytics')}
                >
                  <Card style={styles.statsContainer}>
                    <View style={{justifyContent: 'center'}} >
                      <Text style={styles.cardTittle}>My Stats</Text>
                    </View>
                    <Text style={styles.cardBody}>
                      condimentum massa. Nam volutpat feugiat quam 
                    </Text>
                    <View>

                    </View>
                  </Card>
                </TouchableWithoutFeedback>
                </Row>
                <Row>
                <TouchableWithoutFeedback 
                  onPress={() =>  this.props.navigation.navigate('Playlist')}
                >
                  <Card style={styles.journeyContainer}>
                    <View style={{justifyContent: 'center'}} >
                      <Text style={styles.cardTittle}>My Journey</Text>
                    </View>
                    <Text style={styles.cardBody}>
                      condimentum massa. Nam volutpat feugiat quam id porttitor.
                    </Text>
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

export default Dashboard;
