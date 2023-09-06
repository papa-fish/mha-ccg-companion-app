import { View, StyleSheet, Pressable, Text, Button } from "react-native";
import incrementState from '../utils/incrementState'

export default function PlusButton(props) {

    return(
        <View>
            <Button 
                title="+"
                onPress={() => incrementState(props.state, props.setState)} 
                color={props.bkc} 
            >
            </Button>
        </View>
    );
};