import {createAppContainer,createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import ViewTotalUsers from '../screens/ViewTotalUsers'
import ViewSingleUser from '../screens/ViewSingleUser'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AddUserScreen from '../screens/AddUserScreen'

const usersStackNavigator=createStackNavigator(
    {
        'All users':{
            screen:ViewTotalUsers
        },
        'View single user':{
            screen:ViewSingleUser
        },
        'Add user':{
            screen:AddUserScreen
        }
    }, 
)

const searchStackNavigator=createStackNavigator({
    'Search':{
        screen:SearchScreen
    },
    'View single user':{
        screen:ViewSingleUser
    }

})

const profileStackNavigator=createStackNavigator({
    'Profile':{
        screen:ProfileScreen
    }
})

const mainTabNavigator=createBottomTabNavigator({
    'Users':{
        screen:usersStackNavigator
    },
    'Search':{
        screen:searchStackNavigator
    },
    'Profile':{screen:profileStackNavigator}

})
    
const ViewUsersContainer=createAppContainer(usersStackNavigator);

export default mainTabNavigator