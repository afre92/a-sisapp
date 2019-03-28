// @flow
import React, { Component } from "react";
import { Platform, TouchableOpacity, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  Container,
  Content,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  View,
  Text,
  List
} from "native-base";

import datas from "./data";
import styles from "./style";

class TabOne extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "transparent" }}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: "transparent"}}>
            <List
              dataArray={datas}
              renderRow={data =>
                <Card style={styles.card}>
                  <CardItem style={styles.cardHeader} header>
                    <View style={{width: '20%'}}>
                    <Thumbnail
                      small
                      source={data.image}
                      style={styles.profilePic}
                    />
                    </View>
                    <View style={{width: '80%', marginLeft: 10}}>
                      <Text style={styles.commentName}>
                        {data.name}
                      </Text>
                      <Text style={styles.commentText}>
                        {data.comment}
                      </Text>
                      <View style={styles.commentDateView}>
                      <Grid>
                        <Row>
                          <Image source={require("../../../assets/NewsIcons/3.jpg")} style={{width: 50, height: 50, marginLeft: 5}}/>
                          <Image source={require("../../../assets/NewsIcons/4.jpg")} style={{width: 50, height: 50, marginLeft: 5}}/>
                          <Image source={require("../../../assets/NewsIcons/2.jpg")} style={{width: 50, height: 50, marginLeft: 5}}/>
                          <Image source={require("../../../assets/NewsIcons/1.jpg")} style={{width: 50, height: 50, marginLeft: 5}}/>
                        </Row>

                      </Grid>
                      </View>
                    </View>
                  </CardItem>
                </Card>}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default TabOne;
