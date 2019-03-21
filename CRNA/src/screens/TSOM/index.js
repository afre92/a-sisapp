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


import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");

class TSOM extends Component {
  render() {
      return (
        <Container>
        <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Header style={styles.header}>
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

          <View>
            <View>
              <View style={styles.mainContainer}>
                <Text style={styles.title}>
                  The Science of Meditation
                </Text>
                <View>
                  <Text style={styles.subtitle}>
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
                        style={styles.meditationPoster}
                        imageStyle={{ borderRadius: 25 }}
                        source={require("../../../assets/NewsIcons/1.jpg")}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.meditationPosterHeader}
                          >
                            Asis is a style of interface design emphasizing
                            minimal use of stylistic elements.
                          </Text>
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
                        style={styles.meditationPoster}
                        source={require("../../../assets/NewsIcons/3.jpg")}
                        imageStyle={{ borderRadius: 25 }}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.meditationPosterHeader}
                          >
                            So that the applications are able to load faster and
                            resize easily.
                          </Text>
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
                        style={styles.meditationPoster}
                        source={require("../../../assets/NewsIcons/4.jpg")}
                        imageStyle={{ borderRadius: 25 }}
                      >
                        <View style={styles.swiperTextContent}>
                          <Text
                            numberOfLines={2}
                            style={styles.meditationPosterHeader}
                          >
                            But still look sharp on high-definition screens.
                          </Text>

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

export default TSOM
