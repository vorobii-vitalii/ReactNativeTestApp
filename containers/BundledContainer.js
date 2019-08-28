import {createBottomTabNavigator, createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation'

import UserAccess from './UserAccessContainer'
import MainContainer from './MainContainer'

const MainAppNavigator=createSwitchNavigator({
    'UserAccess':{screen:UserAccess},
    'MainContainer':{screen:MainContainer}
},{
    initialRouteName:'UserAccess'
})

const Container = createAppContainer(MainAppNavigator);

export default Container;