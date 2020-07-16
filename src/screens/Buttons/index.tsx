import * as React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { FullWidth, Rounded, Outline, Circle } from '@components/Buttons'

const Buttons = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FullWidth onPress={() => []} text="Button"/>
            <Rounded onPress={() => []} text="Button"/>
            <Outline onPress={() => []} text="Button"/>
            <Circle onPress={() => []} icon={() => <AntDesign name="arrowright" size={24} color="black" />}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default Buttons