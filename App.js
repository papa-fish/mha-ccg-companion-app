import React from 'react';
import { useState, useEffect } from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';
import { Overlay, Button, Icon } from '@rneui/themed';

import BlockComponent from './src/components/BlockComponent';
import AttackComponent from './src/components/AttackComponent';
import EndPhaseButton from './src/components/EndPhaseButton';
import PlayerComponent from './src/components/PlayerComponent';

export default function App() {

  const [ visible, setVisible ] = useState(false);
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

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (playerOneCurrentHp <= 0 || playerTwoCurrentHp <= 0) {
        setVisible(true);
    }
  }, [playerOneCurrentHp, playerTwoCurrentHp]);

  const handleReset = () => {
    setVisible(false);
    setPlayerOneCurrentHp(playerOneMaxHp);
    setPlayerTwoCurrentHp(playerTwoMaxHp);
  };

  const styles = StyleSheet.create({
    playerComponentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    attackComponentContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#b0abab' }}>
      <View style={{ flexBasis: '50%', transform: [{ rotate: '180deg' }] }}>
        <StatusBar hidden />

        <Overlay overlayStyle={{ backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent' }} isVisible={visible} onBackdropPress={toggleOverlay}>
          <Button 
            onPress={handleReset}
            icon={
              <Icon
              name='reload1'
              type='ant-design'
              color='white'
              size={128}
              />
            }
          />
        </Overlay>

        <View style={styles.attackComponentContainer}>
            <AttackComponent 
              speed={speed} 
              setSpeed={setSpeed} 
              damage={damage} 
              setDamage={setDamage} 
              colors={playerColors} 
            />
        </View>
        <View style={styles.playerComponentContainer}>
            <PlayerComponent 
              hp={playerOneCurrentHp}
              setHp={setPlayerOneCurrentHp}
              maxHp={playerOneMaxHp}
              setMaxHp={setPlayerOneMaxHp}
              bkc={playerColors.one}
              />
        </View>
          {currentPlayer === 2 &&
            <BlockComponent 
              damage={damage} 
              state={playerOneCurrentHp} 
              setState={setPlayerOneCurrentHp} 
              setDamage={setDamage}
              setSpeed={setSpeed}
            />
          }
          {showEndPhaseButton1 && 
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
      
      <View style={{ flexBasis: '50%' }}>
        <View style={styles.attackComponentContainer}>
          <AttackComponent 
            speed={speed} 
            setSpeed={setSpeed} 
            damage={damage} 
            setDamage={setDamage} 
            colors={playerColors} 
          />
        </View>
        <View style={styles.playerComponentContainer}>
          <PlayerComponent 
            hp={playerTwoCurrentHp}
            setHp={setPlayerTwoCurrentHp}
            maxHp={playerTwoMaxHp}
            setMaxHp={setPlayerTwoMaxHp}
            bkc={playerColors.two}
            />
        </View>

          {currentPlayer === 1 &&
            <BlockComponent 
              damage={damage} 
              state={playerTwoCurrentHp} 
              setState={setPlayerTwoCurrentHp} 
              setDamage={setDamage}
              setSpeed={setSpeed}
            />
          }
          {showEndPhaseButton2 && 
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
    </View>
  );
};