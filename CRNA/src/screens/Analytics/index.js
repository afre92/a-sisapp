// @flow
import React, { Component } from "react";
import {
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  View as RNView
} from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  View,
  Spinner
} from "native-base";

import { Grid, Col, Row } from "react-native-easy-grid";
import Carousel from "react-native-carousel-view";

import { Ionicons } from '@expo/vector-icons';
import { itemsFetchData } from "../../actions";
import datas from "./data.json";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");
const primary = require("../../theme/variables/commonColor").brandPrimary;

class Analytics extends Component {
  componentDidMount() {
    this.props.fetchData(datas);
  }
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => this.props.navigation.navigate("Story")}
      >
        <View style={styles.newsContent}>
          <Text numberOfLines={2} style={styles.newsHeader}>
            {item.headline}
          </Text>
          <Grid style={styles.swiperContentBox}>
            <Col style={{ flexDirection: "row" }}>
              <Text style={styles.newsLink}>
                {item.link}
              </Text>
              <Icon name="ios-time-outline" style={styles.timeIcon} />
              <Text style={styles.newsLink}>
                {item.time}
              </Text>
            </Col>
            <Col>
              <TouchableOpacity
                style={styles.newsTypeView}
                onPress={() => this.props.navigation.navigate("Channel")}
              >
                <Text style={styles.newsTypeText}>
                  <Icon name="share" />
                </Text>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      return (
        <Container>

          <Content
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: primary, paddingHorizontal: 20 }}
          >
          <Icon name="arrow-back" style={{marginBottom: 40, marginTop: 40}} />
            <View style={{marginBottom: 40}}>
              <View>
                <Carousel
                  width=""
                  height={300}
                  indicatorAtBottom
                  indicatorSize={Platform.OS === "android" ? 15 : 10}
                  indicatorColor="#FFF"
                  indicatorOffset={10}
                  animate={false}
                >
                  <RNView>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.props.navigation.navigate("Story")}
                      style={styles.slide}
                    >
                      <ImageBackground
                        style={styles.newsPoster}
                        source={require("../../../assets/NewsIcons/4.jpg")}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.newsPosterHeader}
                          >
                            A.sis is a style of interface design emphasizing
                            minimal use of stylistic elements.
                          </Text>
                          <Grid style={styles.swiperContentBox}>
                            <Col style={{ flexDirection: "row", width: '80%' }}>
                              
                               <Grid>
                                 <Row>
                                  <Text style={{ fontWeight: 'bold' }}> John Doe </Text>
                                 </Row>
                                  <Row>
                                    <Text  style={{ fontSize: 15 }}> San Francisco, CA </Text>
                                 </Row>
                               </Grid>
                             
                            </Col>
                            <Col style={{ width: '20%' }}>
                              <TouchableOpacity
                                style={styles.newsPosterTypeView}
                              >
                                <Text
                                  style={styles.newsPosterTypeText}
                                  onPress={() =>
                                    this.props.navigation.navigate("Channel")}
                                >
                                   <Ionicons name="md-share" size={32} color="white" />
                                </Text>
                              </TouchableOpacity>
                            </Col>
                          </Grid>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </RNView>

                </Carousel>
              </View>
            </View>
            <View style={{paddingHorizontal: 20, textAlign: "center"}}>
            <Card style={{fontColor: 'black', color: 'black', marginBottom: 20, }}>
              <View style={{textAlign: 'center', justifyContent: 'center', borderBottomColor: primary ,borderBottomWidth: 1}} >
                <Text style={{fontColor: 'black', color:'#e66949', textAlign: 'center', paddingVertical: 5, fontWeight: 'bold'}}> <Ionicons  size={32} name="md-stopwatch" style={styles.timeIcon} />   Total Time Meditated </Text>
              </View>
              <CardItem style={{textAlign: 'center', justifyContent: 'center'}}>
                  <Text style={{ color: '#4d4d4d', fontWeight: '600', fontSize: 17}}>
                    4 Hours
                  </Text>
              </CardItem>
            </Card>

            <Card style={{fontColor: 'black', color: 'black', marginBottom: 20}}>
              <View style={{textAlign: 'center', justifyContent: 'center', borderBottomColor: primary ,borderBottomWidth: 1}} >
                <Text style={{fontColor: 'black', color: '#e66949', textAlign: 'center', paddingVertical: 5, fontWeight: 'bold'}}>  <Ionicons size={32} name="ios-thumbs-up" style={styles.timeIcon} />   Sessions Completed </Text>
              </View>
              <CardItem style={{textAlign: 'center', justifyContent: 'center'}}>
                  <Text style={{ color: '#4d4d4d', fontWeight: '600', fontSize: 17}}>
                    12 Sessions
                  </Text>
              </CardItem>
            </Card>

            <Card style={{fontColor: 'black', color: 'black', marginBottom: 20}}>
              <View style={{textAlign: 'center', justifyContent: 'center', borderBottomColor: primary ,borderBottomWidth: 1}} >
                <Text style={{fontColor: 'black', color: '#e66949', textAlign: 'center', paddingVertical: 5, fontWeight: 'bold'}}> <Ionicons size={32} name="ios-stats" style={styles.timeIcon} />   Current Day Streak</Text>
              </View>
              <CardItem style={{textAlign: 'center', justifyContent: 'center'}}>
                  <Text style={{ color: '#4d4d4d', fontWeight: '600', fontSize: 17}}>
                    6 days
                  </Text>

              </CardItem>
            </Card>
            </View>
          </Content>
        </Container>
      );
    }
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}

const mapStateToProps = state => ({
  items: state.homeReducer.items,
  hasErrored: state.homeReducer.hasErrored,
  isLoading: state.homeReducer.isLoading
});
export default connect(mapStateToProps, bindAction)(Analytics);
