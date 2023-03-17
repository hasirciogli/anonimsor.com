import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

export const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity title="Go back" onPress={() => navigation.goBack("Home")}>
                <Text>Come Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1
    }
});




export const RegisterScreen = ({ navigation }) => {
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity title="Go back" onPress={() => navigation.goBack("Home")}>
                <Text>Come Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const registerStyles = StyleSheet.create({
    container: {
        flex: 1
    }
});






export const AuthScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'osv1': require('./../assets/fonts/opensansv1.ttf'),
    });

    return (
        <View style={{ flex: 1, gap: 5, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{marginBottom: 40}}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 600,
                    fontFamily: 'osv1', 
                    color: "black",
                    textAlign: "center",
                }}>
                    Giriş yapmak ister misin?
                </Text>
                <TouchableOpacity title="Go back" onPress={() => navigation.replace("Home")}>
                    <Text style={{textAlign: "center"}}>Geri Dön</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={authStyles.same_button} title="Go back" onPress={() => navigation.navigate("Login")}>
                <Text style={authStyles.same_button_text}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={authStyles.same_button} title="Go back" onPress={() => navigation.navigate("Register")}>
                <Text style={authStyles.same_button_text}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
}

const authStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    same_button: {
        backgroundColor: "purple",
        borderRadius: 8,
        shadowRadius: 10,
        shadowColor: "black",
        shadowOffset: 10,
        padding: 15,
        color: "white",
        width: "85%",
        textAlign: "center",
    },
    same_button_text: {
        fontFamily: 'osv1', 
        color: "white",
        textAlign: "center"
    }
});
