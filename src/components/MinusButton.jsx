import { View, StyleSheet, Pressable, Text, Button } from "react-native";
import decrementState from '../utils/decrementState'

export default function PlusButton(props) {

    return(
        <View>
            <Button 
                title="-"
                onPress={() => decrementState(props.state, props.setState)} 
                color={props.bkc} 
            >
            </Button>
        </View>
    );
};