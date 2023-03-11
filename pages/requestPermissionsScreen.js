import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert, ActivityIndicator, PermissionsAndroid } from 'react-native';
import { TopBar } from '../components/hometopbar';

export const PermissionRequestScreen = ({ navigation }) => {

    const requestPermissions = async () => {
        const granted = await PermissionsAndroid.requestMultiple(
            [
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ]
        );


        if (granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] != PermissionsAndroid.RESULTS.GRANTED)
            return await false;

        if (granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] != PermissionsAndroid.RESULTS.GRANTED)
            return await false;

        return await true;
    };

    const rePerm = async () => {
        if (!await requestPermissions()) {
            await alert("İzin işlemi başarısız. Uygulama ayarlarını sıfırlayın veya yeniden yükleyin...");
        }
        else{
            await navigation.replace("Loading");
        }
    }


    return (
        <View style={styles.container}>
            <Text style={{ color: "black", fontSize: 12 }}>Uygulamanın çalışması için izin gereklidir.</Text>
            <TouchableOpacity onPress={rePerm}>
                <Text style={{ color: "black", fontSize: 12, backgroundColor: "gray", padding: 10, borderRadius: 3, marginTop: 10, color: "white" }}>İzin ver</Text>
            </TouchableOpacity>
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
