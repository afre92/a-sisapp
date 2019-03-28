// @flow
import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

import {
  Container,
  Header,
  Text,
  Input,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Tabs,
  Tab,
  Content
} from "native-base";

import styles from "./style";

import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

const bg = require("../../../assets/bg-transparent.png");

type Props = {
  navigation: () => void
};
class Comments extends Component {
  state: {
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
  }

  render() {
    return (
      <Container>
                <ImageBackground
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Header style={styles.header}>
            <View style={{width: '10%'}}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon active name="arrow-back" />
              </Button>
            </View>
            <Body style={{width: '80%'}}>
              <Text style={styles.headerText}>Featured artist</Text>
            </Body>
            <View style={{width: '10%'}}></View>
          </Header>
          <Content
            scrollEnabled={false}
            extraScrollHeight={-13}
            contentContainerStyle={styles.commentHeadbg}
          >
            <TabOne />
            <Tabs style={{ backgroundColor: "#fff", display: 'none' }}>
              <Tab heading="Best">
                <TabOne />
              </Tab>
              <Tab heading="Newest">
                <TabTwo />
              </Tab>
              <Tab heading="Oldest">
                <TabThree />
              </Tab>
            </Tabs>

            <View style={styles.commentBox}>
              <Item style={{ alignItems: "center", display: 'none' }}>
                <Icon name="ios-attach" style={styles.attachIcon} />
                <Input
                  placeholder="Write something..."
                  placeholderTextColor="#797979"
                  style={styles.input}
                />
                <Button transparent small style={{ alignSelf: "center" }}>
                  <Text style={{ fontWeight: "600" }}>Send</Text>
                </Button>
              </Item>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Comments;
