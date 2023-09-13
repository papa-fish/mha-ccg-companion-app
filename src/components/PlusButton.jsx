import { StyleSheet, Pressable, Text } from "react-native";
import incrementState from '../utils/incrementState'

export default function PlusButton(props) {

    const styles = StyleSheet.create({
        plusButton: {
            backgroundColor: props.bkc,
            flex: 1,
            justifyContent: 'center',
        },
        plusButtonText: {
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
        <Pressable 
            style={ styles.plusButton }
            onPress={() => incrementState(props.state, props.setState)} 
        >
            <Text style={ styles.plusButtonText }>+</Text>
        </Pressable>
    );
};