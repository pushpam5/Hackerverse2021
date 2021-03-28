import React, { useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper';
import WebView from 'react-native-webview';

import Card from '../../../components/WriteUps/ArticleCard'
import BannerCard from '../../../components/WriteUps/BannerCard'
import { ARTICLE1, ARTICLE2, AWARENESS, LOVE, MENTALHEALTH, SUCCESS, POSITIVITY, HAPPINESS } from '../../../../assets'

const categories = [
    {
        "id": "2",
        "name": "Love",
        "image": LOVE
    },
    {
        "id": "3",
        "name": "Success & Goals",
        "image": SUCCESS
    },
    {
        "id": "4",
        "name": "Positive Thinking",
        "image": POSITIVITY
    },
    {
        "id": "5",
        "name": "Mental Health",
        "image": MENTALHEALTH
    },
    {
        "id": "6",
        "name": "Happiness",
        "image": HAPPINESS
    },
    {
        "id": "1",
        "name": "Awareness",
        "image": AWARENESS
    }
]

const data = [
    {
        "id": 1,
        "image": ARTICLE1,
        "heading": "Quantity v Quality of Life.",
        "url": "https://chewyourfoodcouk.wordpress.com/2017/02/22/quantity-v-quality-of-life/"
    },
    {
        "id": 2,
        "image": ARTICLE2,
        "heading": "Be Ambitious With Goals, Not Deadlines",
        "url": "https://www.scotthyoung.com/blog/2008/05/19/be-ambitious-with-goals-not-deadlines/"
    },
    {
        "id": 3,
        "image": ARTICLE1,
        "heading": "Overcoming the frustration barrier",
        "url": "https://www.scotthyoung.com/blog/2006/02/23/overcoming-the-frustration-barrier/"
    },
    {
        "id": 4,
        "image": ARTICLE2,
        "heading": "How to Discover What You’re Passionate About",
        "url": "https://www.scotthyoung.com/blog/2008/11/12/how-to-discover-what-youre-passionate-about/"
    },
    {
        "id": 5,
        "image": ARTICLE1,
        "heading": "The Motivation To Love Yourself",
        "url": "http://www.goodchoicesgoodlife.org/choice-resources/the-motivation-to-love-yourself/"
    },
    {
        "id": 6,
        "image": ARTICLE2,
        "heading": "Don't imitate others, dare to be yourself",
        "url": "https://enthousiasme.info/en/information/articles/?article=65"
    }
]

export default function index() {

    const [showWebView, setShowWebView] = useState(false);
    const [webviewUrl, setWebviewUrl] = useState("");

    const setUrl = (url) => {
        setWebviewUrl(url);
        setShowWebView(true)
    }

    return (
        <View style={{ flex: 1 }}>
            {
                !showWebView ?
                    (
                        <>
                            <ScrollView horizontal={true} style={{ height: 250, marginBottom: 10 }}>{categories.map(item => <BannerCard item={item} />)}
                            </ScrollView>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.id}
                                renderItem={(item) => <Card item={item.item} setUrl={setUrl} />}
                            />
                        </>
                    ) :
                    (
                        <>
                            <IconButton icon="exit-to-app" onPress={() => setShowWebView(false)} />
                            <WebView source={{ uri: webviewUrl }} scalesPageToFit={true} />
                        </>
                    )
            }
        </View>
    )
}
