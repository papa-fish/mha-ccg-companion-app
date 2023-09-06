import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PlusButton from './src/components/PlusButton';
import MinusButton from './src/components/MinusButton';
import BlockComponent from './src/components/BlockComponent';
import AttackComponent from './src/components/AttackComponent';
import EndPhaseButton from './src/components/EndPhaseButton';

export default function App() {

  const [ playerOneCurrentHp, setPlayerOneCurrentHp ] = useState(25);
  const [ playerTwoCurrentHp, setPlayerTwoCurrentHp ] = useState(25);
  const [ playerOneMaxHp, setPlayerOneMaxHp ] = useState(25);
  const [ playerTwoMaxHp, setPlayerTwoMaxHp ] = useState(25);
  const [ currentPlayer, setCurrentPlayer ] = useState(1);
  const [ showEndPhaseButton1, setShowEndPhaseButton1 ] = useState(true);
  const [ showEndPhaseButton2, setShowEndPhaseButton2 ] = useState(false);
  const [ damage, setDamage ] = useState(4);
  const [ speed, setSpeed ] = useState(4);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  const playerColors = {
    one: "#007bff",
    two: "#dc3546"
  };
  
  return (
    <>
      <View style={styles.container}>
        {currentPlayer === 2 &&
          <BlockComponent 
            damage={damage} 
            state={playerOneCurrentHp} 
            setState={setPlayerOneCurrentHp} 
            setDamage={setDamage}
            setSpeed={setSpeed}
          />
        }
        {currentPlayer === 1 && 
          <EndPhaseButton 
            player={currentPlayer} 
            setPlayer={setCurrentPlayer} 
            btn1={setShowEndPhaseButton1} 
            btn2={setShowEndPhaseButton2} 
            setDamage={setDamage} 
            setSpeed={setSpeed} 
            bkc={playerColors.one} 
          />
        }
      </View>

      <View style={styles.container}>
        <Text>{playerOneCurrentHp}</Text>
        {/* <Text>{playerOneMaxHp}</Text> */}
        <PlusButton bkc={playerColors.one} state={playerOneCurrentHp} setState={setPlayerOneCurrentHp} />
        <MinusButton bkc={playerColors.one} state={playerOneCurrentHp} setState={setPlayerOneCurrentHp} />
      </View>

      <View style={styles.container}>
        <AttackComponent 
          speed={speed} 
          setSpeed={setSpeed} 
          damage={damage} 
          setDamage={setDamage} 
          colors={playerColors} 
        />
      </View>

      <View style={styles.container}>
        <Text>{playerTwoCurrentHp}</Text>
        <PlusButton bkc={playerColors.two} state={playerTwoCurrentHp} setState={setPlayerTwoCurrentHp} />
        <MinusButton bkc={playerColors.two} state={playerTwoCurrentHp} setState={setPlayerTwoCurrentHp} />
      </View>

      <View style={styles.container}>
        {currentPlayer === 1 &&
          <BlockComponent 
            damage={damage} 
            state={playerTwoCurrentHp} 
            setState={setPlayerTwoCurrentHp} 
            setDamage={setDamage}
            setSpeed={setSpeed}
          />
        }
        {currentPlayer === 2 && 
          <EndPhaseButton 
            player={currentPlayer} 
            setPlayer={setCurrentPlayer} 
            btn1={setShowEndPhaseButton1} 
            btn2={setShowEndPhaseButton2} 
            setDamage={setDamage} 
            setSpeed={setSpeed} 
            bkc={playerColors.two} 
          />
        }
      </View>

    </>
  );
};