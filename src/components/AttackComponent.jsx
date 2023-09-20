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
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 5,
        },
        imageContainer: {
            alignItems: 'center',
        },
        image: {
          height: isTablet ? 256 : 128,
          width: isTablet ? 256 : 128,
        },
        text: {
            fontSize: isTablet ? 60: 36,
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 52,
            borderTopWidth: 2,
            borderLeftWidth: 2,
        },
        buttons: {
            flex: 1,
            borderRightWidth: 2,
        },
      });

    return(
        <View style={{ width: '100%' }}>
            <View style={ styles.container }>
                <TouchableOpacity onPress={() => toggleAttackZone(showAttackZone, setShowAttackZone)}>
                    <View style={ styles.imageContainer }>
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
                        <Text style={[styles.text, { left: '-15%' }]}>{props.speed}</Text>
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

/**
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimension Data</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
    </View>
 */