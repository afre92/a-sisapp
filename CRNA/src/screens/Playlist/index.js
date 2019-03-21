// @flow
import React, { Component } from "react";
import {
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ListItem,
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

import { Grid, Col, Row } from "react-native-easy-grid";
import { itemsFetchData } from "../../actions";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const headerLogo = require("../../../assets/header-logo.png");
const playIcon = require("../../../assets/play-icon.png")

class Playlist extends Component {
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => this.props.navigation.navigate("Player")}
      >
        <View style={styles.trackContent}>
          <Grid style={styles.swiperContentBox}>
            <Col>
              <Row>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Breathing 3
                </Text>
              </Row>
              <Row>
                <Text style={{color: 'grey', fontSize: 18}}>
                  John Doe
                </Text>
              </Row>
            </Col>
            <Col style={styles.trackLengthContainer}>
              <Text style={styles.trackLength}>
                 3:04
              </Text>
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
              <Text style={styles.headerText}> My Journey </Text>
            </Body>
            <Right />
          </Header>
          <Content
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
          >
            <View>
              <RNView>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.props.navigation.navigate("Player")}
                  style={styles.slide}
                >
                  <ImageBackground
                    style={styles.playlistPoster}
                    source={require("../../../assets/NewsIcons/4.jpg")}
                  >
                  <View style={styles.playIconContainer}>
                    <Image style={{height: 150, width: 150}} source={playIcon} /> 
                  </View>
                  </ImageBackground>
                </TouchableOpacity>
              </RNView>
            </View>

            <FlatList
              data={this.props.items}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
            />
          </Content>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  items: state.homeReducer.items,
  hasErrored: state.homeReducer.hasErrored,
  isLoading: state.homeReducer.isLoading
});
export default connect(mapStateToProps)(Playlist)
