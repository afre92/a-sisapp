const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  profileDetailsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:
      deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 10 
          : deviceHeight / 12 
        : Platform.OS === "android"
          ? deviceHeight / 12 
          : deviceHeight / 35
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  profileContainer: {
    width: '92%',
    marginBottom: deviceHeight / 40,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal: deviceWidth / 8,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  premium: {
    height: 50,
    marginTop: deviceHeight / 12,
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#ddd"
  },
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  userInfoContainer: {
    alignSelf: "center",
    paddingTop: 20
  },
  userName: {
    fontWeight: 'bold', 
    paddingLeft: 10, 
    fontSize: 20, 
    textAlign: 'center'
  },
  userEmail: {
    fontSize: 15, 
    paddingLeft: 10, 
    textAlign: 'center'
  },
  subscriptionContainer: {
    alignSelf: "center", 
    marginTop: 10, 
    borderColor: 'white', 
    borderLeftWidth: 2, 
    borderRightWidth: 2
  },
  subscriptionTitle: {
    fontWeight: 'bold', 
    paddingHorizontal: 20, 
    textAlign: 'center', 
    fontSize: 18
  },
  currentVersion: {
    paddingHorizontal: 20, 
    textAlign: 'center', 
    fontSize: 13
  },
  commingSoonTitle:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  commingSoonText:{
    fontSize: 17,
    textAlign: 'center'
  },
  premiumFeature: {
    flexDirection: 'row',
    paddingVertical: 8
  },
  premiumFeatureText: {
    textAlign: 'center',
    fontWeight: '500'
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 'bold'
  }
};
