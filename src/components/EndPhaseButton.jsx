import { Button, View } from "react-native";
import handleEndPhase from '../utils/handleEndPhase'

export default function EndPhaseButton(props) {

    return (
        <View>
            <Button 
                title="End Phase"
                color={ props.bkc }
                onPress={() => handleEndPhase(
                    props.player, 
                    props.setPlayer,
                    props.btn1, 
                    props.btn2, 
                    props.setDamage, 
                    props.setSpeed
                )}
            />
        </View>
        );
    };