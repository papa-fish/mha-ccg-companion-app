import { StyleSheet, Text, View } from "react-native";
import calculateHpPercentage from "../utils/calculateHealthPercentage";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function PlayerComponent(props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
        },
        healthBarContainer: {
            flex: 2,
            position: 'relative',
            flexDirection: 'column-reverse',
            borderTopWidth: 2,
        },
        healthBar: {
            width: '100%',
        },
        hpTextWrapper: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        hpText: {
            textAlign: 'center',
            marginHorizontal: 15,
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: '#000000',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
        },
        buttonContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 1000,
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

            <View style={styles.hpTextWrapper}>
                <View>
                    <Text style={ styles.hpText }>Current{'\n'}{props.hp}</Text>
                </View>
                <View>
                    <Text style={ styles.hpText }>Max{'\n'}{props.maxHp}</Text>
                </View>
            </View>

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