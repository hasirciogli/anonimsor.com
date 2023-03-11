import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator, PermissionsAndroid } from 'react-native';
import { TopBar } from '../components/hometopbar';

export const LoadingScreen = ({ navigation }) => {

    const checkPermissions = async () => {
        try {
            const res = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
            
            if (!res)
                return false;

            return true;
        } catch (err) {
            alert("izin hatası");
            return false;
        }
    };

    useEffect(() => {
        setTimeout(async () => {
            if (!await checkPermissions())
                navigation.replace("PermissionRequest");
            else
                navigation.replace("Home");
        }, 1500);
    }, []);


    return (
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
});
