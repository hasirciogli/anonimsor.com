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
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity title="Go back" onPress={() => navigation.goBack("Home")}>
            <Text>Come Back</Text>
            </TouchableOpacity>
        </View>
      );
}

const authStyles = StyleSheet.create({
    container: {
        flex: 1
    }
});
