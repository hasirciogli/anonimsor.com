import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native';
import { TopBar } from '../components/hometopbar';
import { getUser } from '../internal_modules/localsession';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { FadeInView } from './fadeinView';

export const QuestComponent = props => {

    const [fontsLoaded] = useFonts({
        'Open-Sans-v1': require('./../assets/fonts/opensansv1.ttf'),
    });

    return (
        <TouchableOpacity onPress={() => { props.nref.navigate("QuestPage", { qid: props.qid }); }} style={qstyles.container_base}>
            <FadeInView style={qstyles.container_internal}>
                <LinearGradient
                    start={{ x: .05, y: 1 }}
                    end={{ x: .6, y: -.1 }}
                    colors={['#b8183d', 'purple']}
                    style={qstyles.container_internal}
                >

                    <FadeInView style={{ flex: 1, flexDirection: "row", padding: 8 }}>
                        <FadeInView style={{ width: 130, borderRadius: 0, overflow: "hidden", borderRightWidth: 1, borderRightColor: "white" }}>
                            <Image
                                style={{ flex: 1, width: "100%", height: "100%", borderRadius: 4, overflow: "hidden" }}
                                src={props.img}
                                onError={() => { this.src = "https://anonimsor.com/storage/image/site-images/anonymous.png" }}
                            />
                        </FadeInView>

                        <FadeInView style={{ flex: 1, flexDirection: "column", borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5, paddingBottom: 2, overflow: "hidden" }}>
                            <FadeInView>
                                <Text style={qstyles.quest_title}>{props.header}</Text>
                                <Text style={qstyles.quest_content}>{props.content}</Text>
                            </FadeInView>

                            <FadeInView style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: 'flex-end' }}>
                                <Text style={qstyles.quest_writed_by}>
                                    <Text style={{ fontWeight: "bold" }}>By:</Text> {props.by}
                                </Text>

                                <Text style={qstyles.quest_writed_by}>
                                    {props.created_at}
                                </Text>
                            </FadeInView>
                        </FadeInView>
                    </FadeInView>

                </LinearGradient>
            </FadeInView>

        </TouchableOpacity>
    );
}

const qstyles = StyleSheet.create({
    container_base: {
        width: '100%',
        height: 140,
        padding: 7,
        overflow: "hidden",
        borderRadius: 15,
    },
    container_internal: {
        flex: 1,
        overflow: "hidden",
        borderRadius: 4
    },
    quest_title: {
        color: "white",
        fontFamily: "Open-Sans-v1",
        fontSize: 14,
        fontWeight: "bold"
    },
    quest_content: {
        color: "white",
        fontFamily: "Open-Sans-v1",
        fontSize: 12,
        fontWeight: "light",
        marginTop: 4
    },
    quest_writed_by: {
        color: "white",
        fontFamily: "Open-Sans-v1",
        fontSize: 10,
        fontWeight: "light",
        marginTop: 4
    }
});
