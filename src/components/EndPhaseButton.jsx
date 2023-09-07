import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import handleEndPhase from '../utils/handleEndPhase'

export default function EndPhaseButton(props) {

    const styles = StyleSheet.create({
        endphasecontainer: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        endphasebutton: {
            width: '100%',
            backgroundColor: props.bkc,
        },
        endphasetext: {
            textAlign: 'center',
            paddingVertical: 16,
        }
    });

    return (
        <View style={ styles.endphasecontainer }>
            <Pressable 
                style={ styles.endphasebutton }
                onPress={() => handleEndPhase(
                    props.player, 
                    props.setPlayer,
                    props.btn1, 
                    props.btn2, 
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.endphasetext }>END PHASE</Text>
            </Pressable>
        </View>
        );
    };