import { StyleSheet, Text, View } from "react-native";
import calculateHpPercentage from "../utils/calculateHealthPercentage";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function PlayerComponent(props) {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        healthBarContainer: {
          flex: 2,
          height: 100,
          flexDirection: 'column-reverse',
          borderTopWidth: 2,
        },
        healthBar: {
          width: '100%',
        },
        hpTextWrapper: {
          flexDirection: 'row',
        },
        hpText: {
            textAlign: 'center',
            position: 'absolute',
            justifyContent: 'space-evenly',
            top: 45
        },
        buttonContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
        },
        buttons: {
            flex: 1,
        },
        minusButton: {
            borderTopWidth: 2,
        }
      });

    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                    <PlusButton 
                        bkc={props.bkc} 
                        state={props.hp} 
                        setState={props.setHp} 
                        />
                </View>
                <View style={[ styles.buttons, styles.minusButton ]}>
                    <MinusButton 
                        bkc={props.bkc} 
                        state={props.hp} 
                        setState={props.setHp} 
                    />
                </View>
            </View>

            <View style={styles.healthBarContainer}>
                <View
                    style={[
                        styles.healthBar,
                        { height: `${Math.min(100, calculateHpPercentage(props.hp, props.maxHp))}%`, backgroundColor: props.bkc },
                    ]}
                />
            </View>
                {/* <View style={styles.hpTextWrapper}>
                  <Text style={ styles.hpText }>Current{'\n'}{props.hp}</Text>
                  <Text style={ styles.hpText }>Max{'\n'}{props.maxHp}</Text>
                </View> */}

            <View style={ styles.buttonContainer }>
                <View style={styles.buttons}>
                    <PlusButton 
                        bkc={props.bkc} 
                        state={props.maxHp} 
                        setState={props.setMaxHp} 
                        />
                </View>
                <View style={[ styles.buttons, styles.minusButton ]}>
                    <MinusButton 
                        bkc={props.bkc} 
                        state={props.maxHp} 
                        setState={props.setMaxHp} 
                    />
                </View>
            </View>
        </View>
    );
};