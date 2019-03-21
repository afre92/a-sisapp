const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const primary = require("../../theme/variables/commonColor").brandPrimary;
const commonColor = require("../../theme/variables/commonColor");

export default {
  contactUsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  contactUsHeader: {
    alignSelf: "center",
    fontSize: 40,
    padding: 10,
    fontWeight: "bold",
    color: "#FFF",
    marginTop:
      Platform.OS === "android" ? deviceHeight / 4.5 : deviceHeight / 4.5 + 10
  },
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: primary
  },
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  mainText: {
    color: "#FFF", 
    textAlign: 'center', 
    paddingBottom: 20, 
    fontWeight: '500', 
    fontSize: 23
  },
  contactInfo: {
    color: "#FFF",
    textAlign: 'center',
    paddingBottom: 20,
    fontWeight: '500'
  }
};
