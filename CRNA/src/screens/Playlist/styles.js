const React = require("react-native");
const {Dimensions, Platform} = React;

const deviceWidth = Dimensions.get("window").width;

export default {
  trackContent: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  },
  playlistPoster: {
    height: 330,
    width: null,
    flex: 1,
    position: "relative"
  },
  slide: {
    flex: 1,
    width: deviceWidth,
    height: 330,
    backgroundColor: "transparent"
  },
  swiperContentBox: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  text: {
    fontSize: 15,
    color: "#000",
    marginBottom: 10
  },
  header: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: Platform.OS === "ios" ? undefined : -30
  },
  header: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  headerText: {
    fontWeight: 'bold',
    paddingTop: 5
  },
  playIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trackLength: {
    color: 'grey', 
    textAlign: 'right', 
    height: '100%', 
    paddingVertical: 15, 
    fontSize: 15
  },
  trackLengthContainer:{
    flexDirection: 'column'
  }
};
