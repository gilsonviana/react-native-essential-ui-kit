import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Buttons from '@screens/Buttons/index'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator initialRouteName="Buttons">
        <Stack.Screen name="Buttons" component={Buttons}/>
    </Stack.Navigator>
)