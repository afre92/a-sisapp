const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const primary = require("../../theme/variables/commonColor").brandPrimary;
const contentMarginVertical = deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 6 - 20
          : deviceHeight / 8 - 20
        : Platform.OS === "android"
          ? deviceHeight / 9 - 20
          : deviceHeight / 8 - 20

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
  container: {
    paddingVertical: 20,
    marginVertical: 10,
  },
  backArrowContainer: {
    paddingLeft: 10,
    backgroundColor: 'transparent'
  },
  recapIcons: {
    fontSize: 50,
    textAlign: 'center',
  },
  recapText: {
    fontSize: 17
  },
  recapRow: {
    paddingVertical: deviceHeight / 60,
  },
  title: {
    paddingVertical: deviceHeight / 30,
  },
  imageHeader: {
    marginTop: 5,
    height: 35,
    width: 110,
    resizeMode: "contain"
  },
  cardTittle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5
  },
  newsPoster: {
    height:  deviceHeight / 2.5,
    width: null,
    position: "relative",
    marginHorizontal: 20,
  },
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  mainTextContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 20
  },
  shareIcon: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignSelf: 'flex-end'
  },
  statsContainer: {
    height: deviceHeight / 7, 
    marginBottom: 10,
    borderRadius: 20
  },
  journeyContainer: {
    height: deviceHeight / 4.5, 
    marginBottom: 10,
    borderRadius: 20
  },
  cardBody: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center'
  }
};
