import * as React from 'react'
import { ScrollView, StyleSheet, Image } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import { CardAction, CardSimple, CardAvatarAction } from '@components/Cards'

const Cards = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CardAction 
                title="Title" 
                body="Text" 
                action="Button" 
                onPress={() => []}/>
            <CardSimple 
                title="Title" 
                body="Text"/>
            <CardAvatarAction 
                heading="strengh training" 
                title="Lift Like I Do" 
                body="Hints for a better performance"
                avatar={() => <SimpleLineIcons name="user" size={24} color="black" />}
                avatarName="James"
                avatarTitle="High School"/>
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

export default Cards