import { StyleSheet, Text, View } from "react-native";
import calculateHpPercentage from "../utils/calculateHealthPercentage";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function PlayerComponent(props) {

    const styles = StyleSheet.create({
        healthBarContainer: {
          width: 50,
          height: 200,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          flexDirection: 'column-reverse',
          alignItems: 'center',
        },
        healthBar: {
          width: '100%',
          borderRadius: 4,
        },
        hpText: {
          position: 'absolute',
          top: '50%',
        },
      });

    return(
        <>
            <View style={styles.healthBarContainer}>
                <View
                    style={[
                        styles.healthBar,
                        { height: `${Math.min(100, calculateHpPercentage(props.hp, props.maxHp))}%`, backgroundColor: props.bkc },
                    ]}
                />
                <Text style={styles.hpText}>{props.hp}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <PlusButton bkc={props.bkc} state={props.hp} setState={props.setState} />
                <MinusButton bkc={props.bkc} state={props.hp} setState={props.setState} />
            </View>
        </>
    );
};