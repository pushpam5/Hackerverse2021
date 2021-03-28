import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Card } from 'react-native-paper'

import { SUNSET, AWARENESS, LOVE, MENTALHEALTH, SUCCESS, POSITIVITY, HAPPINESS } from '../../../../assets'

export default function index({ item }) {
    console.log(item)
    const setImage = (image) => {
        if (image === 12) {
            return AWARENESS;
        } else if (image === 13) {
            return LOVE
        }
        else if (image === 15) {
            return SUCCESS
        } else if (image === 17) {
            return HAPPINESS
        } else if (image === 14) {
            return POSITIVITY
        } else if (image === 16) {
            return MENTALHEALTH
        }
    }

    return (
        <Card elevation={2} style={styles.container}>
            <ImageBackground source={setImage(item.image)} style={{ flex: 1, opacity: 0.5 }} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: 130,
        height: 170,
        borderRadius: 3
    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        padding:5
    },
    text: { color: "black", fontWeight: "bold", fontSize: 16 }
})