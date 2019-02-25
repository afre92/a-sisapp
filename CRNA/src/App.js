// @flow
import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import Walkthrough from "./screens/Walkthrough/";
import Comments from "./screens/Comments/";
import Channel from "./screens/Channel";
import Story from "./screens/Story";
import Home from "./screens/Home/";
import Channels from "./screens/Channels";
import Sidebar from "./screens/Sidebar";
import Overview from "./screens/Overview";
import Calendar from "./screens/Calendar/";
import Timeline from "./screens/Timeline";
import Feedback from "./screens/Feedback/";
import Profile from "./screens/Profile/";
import Settings from "./screens/Settings";
import SetUpStepOne from "./screens/SetUpStepOne";
import SetUpStepTwo from "./screens/SetUpStepTwo";
import SetUpStepThree from "./screens/SetUpStepThree";
import SetUpStepFour from "./screens/SetUpStepFour";
import Alarm from "./screens/Alarm";
import DaysAndTime from "./screens/DaysAndTime";


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Channels: { screen: Channels },
    Overview: { screen: Overview },
    Calendar: { screen: Calendar },
    Timeline: { screen: Timeline },
    Feedback: { screen: Feedback },
    Profile: { screen: Profile },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);

const App = createStackNavigator(
  {
    DaysAndTime: { screen: DaysAndTime },
    Alarm: { screen: Alarm},
    SetUpStepOne: { screen: SetUpStepOne },
    SetUpStepTwo: { screen: SetUpStepTwo },
    SetUpStepThree: { screen: SetUpStepThree },
    SetUpStepFour: { screen: SetUpStepFour },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword },
    Walkthrough: { screen: Walkthrough },
    Story: { screen: Story },
    Comments: { screen: Comments },
    Channel: { screen: Channel },
    Drawer: { screen: Drawer }
  },
  {
    index: 0,
    initialRouteName: "SetUpStepFour",
    headerMode: "none"
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
