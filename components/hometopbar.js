import { LinearGradient } from 'expo-linear-gradient';
import { Image, PermissionsAndroid } from 'react-native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { isLoggedIn, getUser } from '../internal_modules/localsession';

export const TopBar = props => {
    const checkIsLogged = isLoggedIn();
    const loggedInUser = getUser();
    return (
        <View style={styles.topbar}>
            <Text style={{ fontWeight: "bold" }}>Anonim<Text style={{ color: "red" }}>sor.com</Text></Text>

            <View style={{ width: 130, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", columnGap: 12 }}>

                {
                    checkIsLogged ? (
                        <>
                            <Text style={{ color: "rgba(20, 20, 20, 255)", fontSize: 14 }}>{loggedInUser}</Text>
                            <TouchableOpacity style={styles.rUserImageBtn} onPress={() => { props.nref.navigate("Profile") }}>

                                <Image
                                    style={{ flex: 1, width: "100%", height: "100%", borderRadius: 30, overflow: "hidden" }}
                                    src={"https://anonimsor.com/storage/image/site-images/anonymous.png"}
                                    onError={() => {this.src = "https://anonimsor.com/storage/image/site-images/anonymous.png"} }
                                />

                            </TouchableOpacity>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity style={styles.rAddQuestBtn} onPress={() => { }}>
                                <Text style={{ color: "rgba(255, 255, 255, 255)", fontSize: 12 }}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rLoginBtn}>
                                <Text style={{ color: "rgba(255, 255, 255, 255)", fontSize: 13 }}>Giriş Yap</Text>
                            </TouchableOpacity>
                        </>
                    )
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topbar: {
        zIndex: 100,
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 55,
        minHeight: 55,
        maxHeight: 55,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(60, 60, 60, 0.5)",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "center",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    rLoginBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(100, 100, 255, 1)",
        height: 35,
        maxHeight: 35,
        width: 10,
        maxWidth: 70,
        color: "rgba(255, 255, 255, 255)",
        fontSize: 5,
        paddingHorizontal: 6,
        paddingVertical: 0,
        borderRadius: 1
    },
    rAddQuestBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(120, 255, 120, 1)",
        width: 23,
        maxWidth: 23,
        height: 23,
        maxHeight: 23,
        color: "rgba(255, 255, 255, 255)",
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 100,
        marginEnd: 5
    },
    rUserImageBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        maxWidth: 40,
        height: 40,
        maxHeight: 40,
        color: "rgba(255, 255, 255, 255)",
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 100,
        marginEnd: 5
    }
});
