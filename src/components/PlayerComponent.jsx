import { StyleSheet, Text, View } from "react-native";
import calculateHpPercentage from "../utils/calculateHealthPercentage";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";

export default function PlayerComponent(props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row'
        },
        healthBarContainer: {
          width: 50,
          height: 200,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          flexDirection: 'column-reverse',
          alignItems: 'center',
        },
        healthBar: {
          width: '100%',
          borderRadius: 4,
        },
        hpText: {
          position: 'absolute',
          top: '50%',
        },
      });

    return(
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <PlusButton bkc={props.bkc} state={props.hp} setState={props.setHp} />
                <MinusButton bkc={props.bkc} state={props.hp} setState={props.setHp} />
            </View>

            <View style={styles.healthBarContainer}>
                <View
                    style={[
                        styles.healthBar,
                        { height: `${Math.min(100, calculateHpPercentage(props.hp, props.maxHp))}%`, backgroundColor: props.bkc },
                    ]}
                />
                <View style={styles.hpText}>
                  <Text>{props.hp}</Text>
                  <Text>{props.maxHp}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <PlusButton bkc={props.bkc} state={props.maxHp} setState={props.setMaxHp} />
                <MinusButton bkc={props.bkc} state={props.maxHp} setState={props.setMaxHp} />
            </View>
        </View>
    );
};

/***
 *  <div 
      className="player"
      style={ healthMeterStyle }
    >
      <div className="hp-flex-container">
          <div className="current-hp-plus-minus-wrapper">
              <PlusButton 
                  bkc={bkc}
                  state={hp}
                  setState={setHp}
                  />
              <MinusButton                     
                  bkc={bkc}
                  state={hp}
                  setState={setHp} 
                  />
          </div>

          <div 
              className="hp-wrapper"
          >
              <div className="hp-label">
                  <label className="hp-status">CURRENT</label>
                  <p
                      value={hp}
                      className="hp"
                  >
                      {hp}
                  </p>
              </div>
              <div className="hp-label">
                  <label className="hp-status">MAX</label>
                  <p
                      value={maxHp}
                      className="hp"
                  >
                      {maxHp}
                  </p>
              </div>
          </div>

          
          <div className="max-hp-plus-minus-wrapper">
              <PlusButton 
                  bkc={bkc}
                  state={maxHp}
                  setState={setMaxHp}
                  />
              <MinusButton                     
                  bkc={bkc}
                  state={maxHp}
                  setState={setMaxHp} 
                  />
          </div>
      </div>
    </div>
 */