import { StyleSheet, TouchableOpacity, Text } from "react-native";
import decrementState from '../utils/decrementState'

export default function MinusButton(props) {

    const styles = StyleSheet.create({
        minusButton: {
            backgroundColor: props.bkc,
            flex: 1,
            justifyContent: 'center',
        },
        minusButtonText: {
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: '#000000',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
        },
    });

    return(
        <TouchableOpacity 
            style={ styles.minusButton }
            onPress={() => decrementState(props.state, props.setState)}
            activeOpacity={0.3}
        >
            <Text style={ styles.minusButtonText }>-</Text>
        </TouchableOpacity>
    );
};