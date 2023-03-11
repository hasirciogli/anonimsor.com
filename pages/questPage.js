import { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { TopBar } from '../components/hometopbar';
import { QuestComponent } from '../components/quest';

export const QuestScreen = props => {

    return (
        <View style={styles.container}>
            <TouchableOpacity><Text>31 + {props.route.params.qid}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});
