import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Buttons from '@screens/Buttons'
import Cards from '@screens/Cards'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator initialRouteName="Cards">
        <Stack.Screen name="Cards" component={Cards}/>
    </Stack.Navigator>
)