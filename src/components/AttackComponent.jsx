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
      });

    return(
        <View style={styles.container}>

            <View>
                <PlusButton state={props.speed} setState={props.setSpeed} bkc={playerOneColor} />
                <MinusButton state={props.speed} setState={props.setSpeed} bkc={playerOneColor} />
            </View>

            <TouchableOpacity onPress={toggleAttackZone}>
                <View>
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

            <View>
                <PlusButton state={props.damage} setState={props.setDamage} bkc={playerTwoColor} />
                <MinusButton state={props.damage} setState={props.setDamage} bkc={playerTwoColor} />
            </View>
            
        </View>
    );
};