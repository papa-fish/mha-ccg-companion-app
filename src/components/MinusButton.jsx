import { View, StyleSheet, Pressable, Text } from "react-native";
import decrementState from '../utils/decrementState'

export default function MinusButton(props) {

    const styles = StyleSheet.create({
        minusButton: {
            backgroundColor: props.bkc,
            flex: 1,
            paddingVertical: 15,
        },
        minusButtonText: {
            textAlign: 'center',
        },
    });

    return(
        <Pressable 
            style={ styles.minusButton }
            onPress={() => decrementState(props.state, props.setState)} 
        >
            <Text style={ styles.minusButtonText }>-</Text>
        </Pressable>
    );
};