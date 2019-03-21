// @flow
import React, { Component } from "react";
import {
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
  View as RNView,
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
import Slider from "react-native-slider"
import commonColor from "../../theme/variables/commonColor";
import styles from "./styles";


const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;

class Player extends Component {

  state = {
    value: 35
  };

  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
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
              <Text style={styles.headerText}> Player </Text>
            </Body>
            <Right />
          </Header>
          <Content
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.recordCover}>
              <Text style={styles.playlistName}> Playlist Name</Text>
              <RNView>
                <View style={styles.slide}>
                  <ImageBackground
                    style={styles.newsPoster}
                    source={require("../../../assets/NewsIcons/4.jpg")}
                  >
                  </ImageBackground>
                </View>
              </RNView>
            </View>

            <View style={styles.recordInfo}>
              <View style={styles.recordInfoNames}>
                <Text style={styles.authorName}>Author Name</Text>
                <Text style={styles.albumName}> Album Name </Text>
              </View>
              <Slider
                step={1}
                maximumValue={100}
                value={this.state.value}
                minimumTrackTintColor={'#fff'}
                trackStyle={{'height': 3}}
                thumbStyle={styles.thumbStyle}
              />
              <View style={{flexDirection: "row", flex: 1}}>
                <Text style={styles.currentStep}>1:25</Text>
                <Text style={styles.maxStep}>3:30</Text>
              </View>
            </View>

            <View style={{paddingHorizontal: 20}}>
              <Grid>
                <Col style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <Icon name="heart" type="FontAwesome" style={{ fontSize: 25}} />
                  </TouchableOpacity>
                </Col>
                <Col style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <Icon name="step-backward" type="FontAwesome" style={{ fontSize: 40}} />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity>
                    <Icon type="FontAwesome" name="play-circle" style={{ fontSize: 75}} />
                  </TouchableOpacity>
                </Col>
                <Col style={styles.buttonContainer}>
                  <TouchableOpacity>
                   <Icon type="FontAwesome" name="step-forward" style={{ fontSize: 40}} />
                  </TouchableOpacity>
                </Col>
                <Col style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <Icon name="random" type="FontAwesome" style={{ fontSize: 25, }} />
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          </Content>
          </ImageBackground>
        </Container>
      );
    }
  }
}

export default Player
