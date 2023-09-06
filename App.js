import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PlusButton from './src/components/PlusButton';
import MinusButton from './src/components/MinusButton';
import BlockComponent from './src/components/BlockComponent';
import AttackComponent from './src/components/AttackComponent';

export default function App() {

  const [ playerOneCurrentHp, setPlayerOneCurrentHp ] = useState(25);
  const [ playerTwoCurrentHp, setPlayerTwoCurrentHp ] = useState(25);
  const [ playerOneMaxHp, setPlayerOneMaxHp ] = useState(25);
  const [ playerTwoMaxHp, setPlayerTwoMaxHp ] = useState(25);
  const [ attackDamage, setAttackDamage ] = useState(4);
  const [ attackSpeed, setAttackSpeed ] = useState(4);

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
        <Text>{playerOneCurrentHp}</Text>
        <PlusButton bkc={playerColors.one} state={playerOneCurrentHp} setState={setPlayerOneCurrentHp} />
        <MinusButton bkc={playerColors.one} state={playerOneCurrentHp} setState={setPlayerOneCurrentHp} />
      </View>
      <View style={styles.container}>
        <AttackComponent speed={attackSpeed} damage={attackDamage} />
      </View>
      <View style={styles.container}>
        <Text>{playerTwoCurrentHp}</Text>
        <PlusButton bkc={playerColors.two} state={playerTwoCurrentHp} setState={setPlayerTwoCurrentHp} />
        <MinusButton bkc={playerColors.two} state={playerTwoCurrentHp} setState={setPlayerTwoCurrentHp} />
      </View>
    </>
  );
};