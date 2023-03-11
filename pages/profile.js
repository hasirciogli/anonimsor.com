import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { TopBar } from '../components/hometopbar';
import { getUser } from '../internal_modules/localsession';

export const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                {getUser()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});
