import { View, StyleSheet, Pressable, Text } from "react-native";
import incrementState from '../utils/incrementState'

export default function PlusButton(props) {

    const styles = StyleSheet.create({
        plusButton: {
            backgroundColor: props.bkc,
            flex: 1,
            paddingVertical: 15,
        },
        plusButtonText: {
            textAlign: 'center',
        },
    });

    return(
        <Pressable 
            style={ styles.plusButton }
            onPress={() => incrementState(props.state, props.setState)} 
        >
            <Text style={ styles.plusButtonText }>+</Text>
        </Pressable>
    );
};