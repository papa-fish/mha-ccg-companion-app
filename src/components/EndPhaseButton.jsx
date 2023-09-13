import { Platform, Pressable, StyleSheet, Text } from "react-native";
import handleEndPhase from '../utils/handleEndPhase'

export default function EndPhaseButton(props) {

    const styles = StyleSheet.create({
        endphasebutton: {
            flex: 0.6,
            justifyContent: 'space-evenly',
            backgroundColor: props.bkc,
            borderWidth: 2,
            ...Platform.select({
                ios: {
                    marginBottom: 40,
                },
            }),
        },
        endphasetext: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
        },
    });

    return (
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
        );
    };