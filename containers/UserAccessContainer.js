import {createSwitchNavigator,createAppContainer, createStackNavigator} from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const userAccessSwitchNavigator=createSwitchNavigator({
    'SignUp':{screen:SignUpScreen},
    'Login':{screen:LoginScreen},
});

// const UserAccessContainer=createAppContainer(userAccessSwitchNavigator);

export default userAccessSwitchNavigator;