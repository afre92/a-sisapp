// @flow
import React, { Component } from "react";
import { Platform, Dimensions, StatusBar, View, Image } from "react-native";
import { Container, Content, Text, Button, Icon } from "native-base";
import Carousel from "react-native-carousel-view";
import Swiper from 'react-native-swiper';

import styles from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Walkthrough extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Image
            source={require('../../../assets/bg-signup.png')}
            style={styles.imgBackground}
          />
          <Swiper style={styles.wrapper}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={{
              bottom: 70
            }}
            loop={false}>
            <View style={styles.slide}>
              <View style={styles.iconContainer}>
                <Icon name="ios-paper-outline" style={styles.imageIcons} />
              </View>
              <Text
                numberOfLines={2}
                style={styles.iosText}
              >
                Explore the latest news from your mobile device
              </Text>
              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={styles.wBtn}
              >
                <View style={styles.buttonTextContainer}>
                  <Text style={{ color: "#FFF", fontWeight: "600"}}>
                    Create Account
                  </Text>
                </View>
              </Button>

              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.wBtn}
              >
              <View style={styles.buttonTextContainer}>
                <Text style={{ color: "#FFF", fontWeight: "600"}}>
                  Login
                </Text>
              </View>
              </Button>
            </View>
            <View style={styles.slide}>
              <View style={styles.iconContainer}>
                <Icon name="ios-paper-outline" style={styles.imageIcons} />
              </View>
              <Text
                numberOfLines={2}
                style={styles.iosText} 
              >
                Explore the latest news from your mobile device
              </Text>
              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={styles.wBtn}
              >
                <View style={styles.buttonTextContainer}>
                  <Text style={{ color: "#FFF", fontWeight: "600"}}>
                    Create Account
                  </Text>
                </View>
              </Button>

              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.wBtn}
              >
              <View style={styles.buttonTextContainer}>
                <Text style={{ color: "#FFF", fontWeight: "600"}}>
                  Login
                </Text>
              </View>
              </Button>
            </View>
            <View style={styles.slide}>
              <View style={styles.iconContainer}>
                <Icon name="ios-paper-outline" style={styles.imageIcons} />
              </View>
              <Text
                numberOfLines={2}
                style={styles.iosText}
              >
                Explore the latest news from your mobile device
              </Text>
              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={styles.wBtn}
              >
                <View style={styles.buttonTextContainer}>
                  <Text style={{ color: "#FFF", fontWeight: "600"}}>
                    Create Account
                  </Text>
                </View>
              </Button>

              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.wBtn}
              >
              <View style={styles.buttonTextContainer}>
                <Text style={{ color: "#FFF", fontWeight: "600"}}>
                  Login
                </Text>
              </View>
              </Button>
            </View>
          </Swiper>
      </View>
      </Container>
    );
  }
}

export default Walkthrough;
