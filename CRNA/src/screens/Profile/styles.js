const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  profileBtn: {
    height: 50,
    marginTop: 18,
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#ddd"
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF"
  },
  profileContainer: {
    width: '92%',
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 22,
    marginHorizontal: deviceWidth / 8,
    paddingVertical: deviceWidth / 15,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  signOut: {
    height: 50,
    marginTop: 70,
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#ddd"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 'bold'
  },
  userInfoContainer: {
    alignSelf: "center",
    paddingTop: 20
  },
  userName:{
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
  headerText:{
    fontWeight: 'bold',
    paddingTop: 5
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  }
};
