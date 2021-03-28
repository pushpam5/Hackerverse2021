import React, { useState } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Title, Chip, Button, Avatar, Snackbar } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../../../config/colors'
import { usersRef } from '../../../config/firebase'
import { connect } from 'react-redux';

function index({ user }) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);

    const onDismissSnackBar = () => setVisible(false);

    const onChange = async (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        const doc = await usersRef.doc(user.auth.uid).collection('PrivateSessions').add({
            date
        });
        if (doc.id) {
            setVisible(true)
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <>
            <Card elevation={5} style={styles.container}>
                <TouchableNativeFeedback onPress={() => { }}>
                    <>
                        <View style={styles.top}>
                            <View>
                                <Avatar.Text size={60} label="ZR" />
                            </View>
                            <View style={styles.infoContainer}>
                                <View>
                                    <Title>Zean Ronen</Title>
                                </View>
                                <View style={styles.info}>
                                    <Text>MBBS,DOMS,MS - Opthalmology</Text>
                                    <Text>Opthalmologist</Text>
                                    <Text>6 years of experience</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Chip mode="outlined">Mental Health</Chip>
                            <Chip mode="outlined">Personal Dev.</Chip>
                            <Chip mode="outlined">+2 more</Chip>
                        </View>
                    </>
                </TouchableNativeFeedback>
                <View style={styles.buttonContainer}>
                    <Button color={colors.yellow} uppercase={false} mode="outlined" style={{ width: '45%', borderRadius: 30 }} onPress={() => { }}>Feedbacks</Button>
                    <Button color={colors.blue} uppercase={false} mode="outlined" style={{ width: '45%', borderRadius: 30 }} onPress={showDatepicker}>Book Session</Button>
                </View>
            </Card>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            {visible ? <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={3000}
                style={{ backgroundColor: colors.purple }}
            >
                Session Booked!
        </Snackbar> : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    chipContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    infoContainer: {
        padding: 3,
        justifyContent: "flex-start",
        flex: 0.9
    },
    info: {
        borderRadius: 5,
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        alignContent: "center",
        alignItems: "center"
    },
    chip: {
        width: "33%"
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-evenly"
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(index)