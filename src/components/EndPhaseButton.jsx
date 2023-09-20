import { View, Platform, TouchableOpacity, StyleSheet, Text } from "react-native";
import handleEndPhase from '../utils/handleEndPhase';
import isTablet from "../utils/isTablet";

export default function EndPhaseButton(props) {

    const styles = StyleSheet.create({
        endphasebutton: {
            flex: 0.6,
            justifyContent: 'space-evenly',
            backgroundColor: props.bkc,
            borderWidth: 2,
            ...Platform.select({
                ios: {
                    marginBottom: isTablet ? 0 : 40,
                },
            }),
        },
        endphasetext: {
            textAlign: 'center',
            fontSize: isTablet ? 34 : 20,
            fontWeight: 'bold',
            color: 'white',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
        },
    });

    return (
            <View style={ styles.endphasebutton }>
                <TouchableOpacity 
                    onPress={() => handleEndPhase(
                        props.player, 
                        props.setPlayer,
                        props.btn1, 
                        props.btn2, 
                        props.setDamage, 
                        props.setSpeed
                        )}
                        activeOpacity={0.3}
                        >
                    <Text style={ styles.endphasetext }>END PHASE</Text>
                </TouchableOpacity>
            </View>
        );
    };