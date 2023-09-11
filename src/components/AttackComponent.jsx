import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function AttackComponent(props) {

    const [ showAttackZone, setShowAttackZone ] = useState(true);

    const playerOneColor = props.colors.one;
    const playerTwoColor = props.colors.two;

    const toggleAttackZone = () => {
        if (showAttackZone === 0) {
            setShowAttackZone(1);
        } else if (showAttackZone === 1) {
            setShowAttackZone(2);
        } else {
            setShowAttackZone(0);
        }
    };

    const styles = StyleSheet.create({
        container: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 5,
        },
        image: {
          height: 128,
          width: 128,

        },
        text: {
            fontSize: 36,
            fontWeight: 'bold',
            color: 'white',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
            position: 'absolute',
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 52,
            marginBottom: 5,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
        },
        buttons: {
            flex: 1,
            borderRightWidth: 2,
        }
      });

    return(
        <View style={{ width: '100%' }}>
            <View style={ styles.container }>
                <TouchableOpacity onPress={toggleAttackZone}>
                    <View style={{ marginLeft: 5 }}>
                        <Image
                            style={styles.image}
                            source={
                                showAttackZone === 0
                                ? require('../assets/midicon.png')
                                : showAttackZone === 1
                                ? require('../assets/lowicon.png')
                                : require('../assets/highicon.png')
                            }
                            />
                        <Text style={[styles.text, { top: 35, left: 35 }]}>{props.speed}</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Image 
                        style={styles.image}
                        source={require('../assets/damageicon.png')}
                        />
                    <Text style={[styles.text, { top: 35, left: 50 }]}>{props.damage}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={ styles.buttons }>
                    <PlusButton 
                        state={props.speed} 
                        setState={props.setSpeed} 
                        bkc={playerOneColor} 
                    />
                </View>
                <View style={ styles.buttons }>
                    <MinusButton 
                        state={props.speed} 
                        setState={props.setSpeed} 
                        bkc={playerOneColor} 
                    />
                </View>
                <View style={ styles.buttons }>
                    <PlusButton 
                        state={props.damage} 
                        setState={props.setDamage} 
                        bkc={playerTwoColor} 
                    />
                </View>
                <View style={ styles.buttons }>
                    <MinusButton 
                        state={props.damage} 
                        setState={props.setDamage} 
                        bkc={playerTwoColor} 
                    />
                </View>
            </View>
            
        </View>
    );
};