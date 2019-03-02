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
import Slider from "react-native-slider"

import { itemsFetchData } from "../../actions";
import datas from "./data.json";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");

class Player extends Component {
  componentDidMount() {
    this.props.fetchData(datas);
  }

  state = {
    value: 35
  };
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
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon active name="menu" />
              </Button>
            </Left>
            <Body>
              <Image source={headerLogo} style={styles.imageHeader} />
            </Body>
            <Right />
          </Header>
          <Content
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
          >
            <View>
              <View style={{marginBottom: 20, marginTop: 40}}>
              <Text style={{color: 'black', textAlign: 'center'}}> Playlist Name</Text>
                <Carousel
                style={{marginVertical: 50}}
                  width={deviceWidth}
                  height={300}
                  indicatorAtBottom
                  indicatorSize={Platform.OS === "android" ? 15 : 10}
                  indicatorColor="#FFF"
                  indicatorOffset={10}
                  animate={false}
                  hideIndicators={true}
                >
                  <RNView>
                    <View
                      style={styles.slide}
                    >
                      <ImageBackground
                        style={styles.newsPoster}
                        source={require("../../../assets/NewsIcons/1.jpg")}
                      >

                      </ImageBackground>
                    </View>
                  </RNView>
                  <RNView>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.props.navigation.navigate("Story")}
                      style={styles.slide}
                    >
                      <ImageBackground
                        style={styles.newsPoster}
                        source={require("../../../assets/NewsIcons/3.jpg")}
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
                                  onPress={() =>
                                    this.props.navigation.navigate("Channel")}
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
                                  onPress={() =>
                                    this.props.navigation.navigate("Channel")}
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

        <View style={{paddingHorizontal: 40}}>
          <View style={{marginVertical: 20}}>
              <Text style={{color: 'black', textAlign: 'center'}}> Playlist Name</Text>
              <Text style={{color: 'black', textAlign: 'center'}}> subtitle </Text>
          </View>
          <Slider
            step={1}
            maximumValue={100}
            onValueChange=""
            value={this.state.value}
            minimumTrackTintColor='red'
            trackStyle={{'height': 3}}
            thumbStyle={{width: 8, height: 8, backgroundColor: 'red'}}
          />
          <View style={{flexDirection: "row", flex: 1}}>
            <Text style={{color: 'black', alignItems: 'left', flex: 1}}>1:25</Text>
            <Text style={{color: 'black', textAlign: 'right', flex: 1}}>3:30</Text>
          </View>

        </View>
        <View style={{paddingHorizontal: 20}}>
          <Grid>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="heart" type="FontAwesome" style={{color: 'black', fontSize: 20}} />
          </Col>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="step-backward" type="FontAwesome" style={{color: 'black', fontSize: 40}} />
          </Col>
          <Col style={{alignItems: 'center'}}>
            
            <Icon type="FontAwesome" name="play-circle" style={{color: 'black', fontSize: 80}} />
          </Col>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
           <Icon type="FontAwesome" name="step-forward" style={{color: 'black', fontSize: 40}} />
          </Col>
          <Col style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="random" type="FontAwesome" style={{color: 'black', fontSize: 20, }} />
          </Col>
          </Grid>

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
export default connect(mapStateToProps, bindAction)(Player);
