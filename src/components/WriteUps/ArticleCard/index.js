import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'
import { Card } from 'react-native-paper'

import { ARTICLE1, ARTICLE2 } from '../../../../assets'

export default function index({ item, setUrl }) {
    const handlePress = () => {
        setUrl(item.url)
    }
    console.log(item)
    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <Card elevation={5} style={styles.container}>
                <View style={styles.content}>
                    <View style={{ flex: 0.3, margin: 5 }}>
                        <Image source={item.image === 10 ? ARTICLE1 : ARTICLE2} style={{ width: 100, height: 100 }} resizeMode="cover" />
                    </View>
                    <View style={{ flex: 0.7, justifyContent: "center" }}>
                        <View>
                            <Text style={styles.heading}>{item.heading}</Text>
                            <Text style={styles.url}>{item.url}</Text>
                        </View>
                    </View>
                </View>
            </Card>
        </TouchableNativeFeedback>

    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    container: {
        margin: 5
    },
    heading: {
        fontSize: 16,
        fontWeight: "bold"
    },
    url: {
        fontSize: 13,
        color: "gray"
    }
})