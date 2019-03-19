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
  Left,
  Body,
  Right,
  View,
  Spinner
} from "native-base";

import { Grid, Col } from "react-native-easy-grid";
import Carousel from "react-native-carousel-view";

import { itemsFetchData } from "../../actions";
import datas from "./data.json";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");

class Home extends Component {
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
                  {item.category}
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
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Header style={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body>
            </Body>
            <Right />
          </Header>

          <View >
          <View>
            <View style={{ paddingHorizontal: 30, paddingBottom: 40, paddingTop: 10}}>
                <Text style={{ fontWeight: 'bold', fontSize: 35, textAlign: 'left'}}>
                  The Science of Meditation
                </Text>
                  <View>
                  <Text style={{color: 'white', fontSize: 22, textAlign: 'left', paddingTop: 30}}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                </Text>
                            <Text style={{color: 'white', textAlign: 'left', paddingTop: 30}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                </Text>

              </View>
          </View>
                <Carousel
                  width={deviceWidth}
                  height={280}
                  indicatorAtBottom
                  indicatorSize={Platform.OS === "android" ? 15 : 10}
                  indicatorColor="#FFF"
                  indicatorOffset={10}
                  animate={false}
                >
                  <RNView>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles.slide}
                    >
                      <ImageBackground
                        style={styles.newsPoster}
                        imageStyle={{ borderRadius: 25 }}
                        source={require("../../../assets/NewsIcons/1.jpg")}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.newsPosterHeader}
                          >
                            Asis is a style of interface design emphasizing
                            minimal use of stylistic elements.
                          </Text>
                          <Grid style={styles.swiperContentBox}>
                            <Col style={{ flexDirection: "row" }}>
                              <Text style={styles.newsPosterLink}>
                                SPACE.com
                              </Text>
                              <Icon
                                name="ios-time-outline"
                                style={styles.timePosterIcon}
                              />
                              <Text style={styles.newsPosterLink}>20m ago</Text>
                            </Col>
                            <Col>
                              <TouchableOpacity
                                style={styles.newsPosterTypeView}
                              >
                                <Text
                                  style={styles.newsPosterTypeText}
                                >
                                  SCIENCE
                                </Text>
                              </TouchableOpacity>
                            </Col>
                          </Grid>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </RNView>
                  <RNView>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles.slide}
                    >
                      <ImageBackground
                        style={styles.newsPoster}
                        source={require("../../../assets/NewsIcons/3.jpg")}
                        imageStyle={{ borderRadius: 25 }}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.newsPosterHeader}
                          >
                            So that the applications are able to load faster and
                            resize easily.
                          </Text>
                          <Grid style={styles.swiperContentBox}>
                            <Col style={{ flexDirection: "row" }}>
                              <Text style={styles.newsPosterLink}>CDC</Text>
                              <Icon
                                name="ios-time-outline"
                                style={styles.timePosterIcon}
                              />
                              <Text style={styles.newsPosterLink}>2hr ago</Text>
                            </Col>
                            <Col>
                              <TouchableOpacity
                                style={styles.newsPosterTypeView}
                              >
                                <Text
                                  style={styles.newsPosterTypeText}
                                >
                                  ENVIRONMENT
                                </Text>
                              </TouchableOpacity>
                            </Col>
                          </Grid>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </RNView>
                  <RNView>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles.slide}
                    >
                      <ImageBackground
                        style={styles.newsPoster}
                        source={require("../../../assets/NewsIcons/4.jpg")}
                        imageStyle={{ borderRadius: 25 }}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.newsPosterHeader}
                          >
                            But still look sharp on high-definition screens.
                          </Text>
                          <Grid style={styles.swiperContentBox}>
                            <Col style={{ flexDirection: "row" }}>
                              <Text style={styles.newsPosterLink}>SKY.com</Text>
                              <Icon
                                name="ios-time-outline"
                                style={styles.timePosterIcon}
                              />
                              <Text style={styles.newsPosterLink}>
                                1day ago
                              </Text>
                            </Col>
                            <Col>
                              <TouchableOpacity
                                style={styles.newsPosterTypeView}
                              >
                                <Text
                                  style={styles.newsPosterTypeText}
                                >
                                  WORLD
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
          </ImageBackground>
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
export default connect(mapStateToProps, bindAction)(Home);
