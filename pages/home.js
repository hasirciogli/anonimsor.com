import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, TouchableOpacity, Alert, FlatList, ActivityIndicator } from 'react-native';
import { FadeInView } from '../components/fadeinView';
import { TopBar } from '../components/hometopbar';
import { QuestComponent } from '../components/quest';
import { getQuests } from '../internal_modules/questFuncs';


export const HomeScreen = ({ navigation }) => {
    const navRef = navigation;

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [state, setState] = useState([]);
    const [interVal, setIntervalx] = useState(0);

    componentDidMount = () => {
        
    }

    useEffect(() => {
        //setIntervalx(setInterval(() => setState({ time: Date.now() }), 1000));

        setTimeout(() => {
            getQuests((q) => {
                setData(q);
                setLoading(false);
            });
        }, 1879);


         /*return() => {
            clearInterval(interVal);
        };

       setInterval(async () => {
            getQuests((q) => {
                setData(q);
            });
        }, 3500);*/
    }, []);

    return (
        <FadeInView style={styles.container}>

            <TopBar nref={navRef} />
            {isLoading ? (
                <>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                        <ActivityIndicator />
                    </View>
                </>
            ) : (
                <>
                    <FlatList
                        style={{ zIndex: 10 }}
                        data={data}
                        keyExtractor={({ quest_id }) => quest_id}
                        renderItem={({ item }) => (
                            <QuestComponent
                                fullItem={item}
                                qid={item.quest_id}
                                nref={navRef}
                                header={item.header}
                                content={item.content}
                                by={item.secret_mode ? "Gizli Üye" : item.user_name + " " + item.user_surname}
                                img={item.image_url}
                                secret_mode={item.secret_mode}
                                created_at={item.created_at}
                            />
                        )}
                    />
                </>
            )}
        </FadeInView >
    );

    return (
        <QuestComponent
            qid={1453}
            nref={navRef}
            header={"Tayyip tekrar aday oldu?"}
            content={"Arkadaşlar ben bu durumdan hiç hoşlanmadım, Siz nasıl düşünüyorsunuz acaba ?"}
            by={"Noxy Yanbakar"}
            views={1453}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});
