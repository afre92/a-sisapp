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
const primary = require("../../theme/variables/commonColor").brandPrimary;

class Player extends Component {
  componentDidMount() {
    this.props.fetchData(datas);
  }

  state = {
    value: 35
  };

  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      return (
        <Container>
          <Content
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
          >

              <View style={{paddingHorizontal: 20, paddingTop: 30}}>
                <Icon name="arrow-back" style={{color: primary, fontSize: 40}} />
              </View>
                <View style={styles.recordCover}>
                  <Text style={{color: primary, textAlign: 'center', fontWeight: 'bold', paddingBottom: 20}}> Playlist Name</Text>
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
              <Text style={{color: primary, textAlign: 'center', fontWeight: 'bold', fontSize: 20}}> Autor Name</Text>
              <Text style={{color: 'black', textAlign: 'center', color: 'grey', fontSize: 'small'}}> Album Name </Text>
          </View>
          <Slider
            step={1}
            maximumValue={100}
            onValueChange=""
            value={this.state.value}
            minimumTrackTintColor={primary}
            trackStyle={{'height': 3}}
            thumbStyle={{width: 8, height: 8, backgroundColor: primary}}
          />
          <View style={{flexDirection: "row", flex: 1}}>
            <Text style={{color: 'black', alignItems: 'left', flex: 1, fontSize: 'small', fontWeight: 'bold'}}>1:25</Text>
            <Text style={{color: 'black', textAlign: 'right', flex: 1, fontSize: 'small', fontWeight: 'bold'}}>3:30</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Grid>
          <Col style={styles.buttonContainer}>
            <Icon name="heart" type="FontAwesome" style={{color: 'black', fontSize: 25}} />
          </Col>
          <Col style={styles.buttonContainer}>
            <Icon name="step-backward" type="FontAwesome" style={{color: 'black', fontSize: 40}} />
          </Col>
          <Col style={{alignItems: 'center'}}>
            <Icon type="FontAwesome" name="play-circle" style={{color: 'black', fontSize: 80}} />
          </Col>
          <Col style={styles.buttonContainer}>
           <Icon type="FontAwesome" name="step-forward" style={{color: 'black', fontSize: 40}} />
          </Col>
          <Col style={styles.buttonContainer}>
            <Icon name="random" type="FontAwesome" style={{color: 'black', fontSize: 25, }} />
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
