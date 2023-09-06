import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlusButton from './src/components/PlusButton';
import MinusButton from './src/components/MinusButton';
import BlockComponent from './src/components/BlockComponent';
import AttackComponent from './src/components/AttackComponent';
import EndPhaseButton from './src/components/EndPhaseButton';

import PlayerComponent from './src/components/PlayerComponent';

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

  const playerColors = {
    one: "#007bff",
    two: "#dc3546"
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

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

      <PlayerComponent 
        hp={playerOneCurrentHp}
        setState={setPlayerOneCurrentHp}
        maxHp={playerOneMaxHp}
        bkc={playerColors.one}
      />


      <View style={styles.container}>
        <AttackComponent 
          speed={speed} 
          setSpeed={setSpeed} 
          damage={damage} 
          setDamage={setDamage} 
          colors={playerColors} 
        />
      </View>

      <PlayerComponent 
        hp={playerTwoCurrentHp}
        setState={setPlayerTwoCurrentHp}
        maxHp={playerTwoMaxHp}
        bkc={playerColors.two}
      />

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