import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import isTablet from "../utils/isTablet";
import toggleAttackZone from "../utils/toggleAttackZone";

export default function AttackComponent(props) {

    const playerOneColor = props.colors.one;
    const playerTwoColor = props.colors.two;
    const showAttackZone = props.showAttackZone;
    const setShowAttackZone = props.setShowAttackZone;
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
        },
        imageContainer: {
            alignItems: 'center',
        },
        image: {
          height: isTablet ? 220 : 154,
          width: isTablet ? 220 : 154,
        },
        text: {
            fontSize: isTablet ? 60: 40,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: '#000000',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
            position: 'absolute',
            textAlign: 'center',
            width: '100%',
            top: '41%',
            transform: [{ translateY: -18 }],
        },
        buttonContainer: {
            flex: 1,
            justifyContent: 'space-between',
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
        },
        buttons: {
            flex: 1,
            borderBottomWidth: 2,
        },
      });

    return(
        <View style={{ flex: 1, width: '100%' }}>
            <View style={ styles.container }>

                <>
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
                </>

                <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => toggleAttackZone(showAttackZone, setShowAttackZone)}>
                        <View style={[styles.imageContainer, { marginLeft: '13%' }]}>
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
                            <Text style={[styles.text, { left: '-10%' }]}>{props.speed}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={ styles.imageContainer }>
                        <Image 
                            style={styles.image}
                            source={require('../assets/damageicon.png')}
                        />
                        <Text style={ styles.text }>{props.damage}</Text>
                    </View>
                </View>
            </View>
            
        </View>
    );
};