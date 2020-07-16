import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Buttons from '@navigators/Buttons'
import Cards from '@navigators/Cards'

const Drawer = createDrawerNavigator()

export default () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Buttons">
            <Drawer.Screen name="Buttons" component={Buttons}/>
            <Drawer.Screen name="Cards" component={Cards}/>
        </Drawer.Navigator>
    </NavigationContainer>
)