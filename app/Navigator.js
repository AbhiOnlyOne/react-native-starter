import React, { Component } from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Login from './components/login'
import Signup from './components/signup'


const DrawerNavigator = createDrawerNavigator({
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
});

class Nav extends Component{
    render(){
       return <DrawerNavigator/>
    }
}

export default Nav