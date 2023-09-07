import { Pressable, StyleSheet, Text, View } from 'react-native';
import handleFullBlock from '../utils/handleFullBlock';
import handleHalfBlock from '../utils/handleHalfBlock';
import handleUnblocked from '../utils/handleUnblocked';

export default function BlockComponent(props) {

    const styles = StyleSheet.create({
        blockcomponentcontainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%'
        },
        blockcomponentbutton: {
            flex: 1,
            borderColor: '#ffffff'
        },
        blockcomponenttext: {
            textAlign: 'center',
            paddingVertical: 16,
        }
    });

    return(
        <View style={styles.blockcomponentcontainer}>
            <Pressable 
                style={[ styles.blockcomponentbutton, { backgroundColor: 'rgb(220, 53, 70)' }]}
                onPress={() => handleUnblocked(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.blockcomponenttext }>Unblocked</Text>
            </Pressable>
            <Pressable 
                style={[ styles.blockcomponentbutton, { backgroundColor: 'rgb(252 222 68)' }]}
                onPress={() => handleHalfBlock(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.blockcomponenttext }>Half Block</Text>
            </Pressable>
            <Pressable 
                style={[ styles.blockcomponentbutton, { backgroundColor: 'rgb(102, 188, 105)' }]}
                onPress={() => handleFullBlock(
                    props.setDamage, 
                    props.setSpeed
                )}
            >
                <Text style={ styles.blockcomponenttext }>Full Block</Text>
            </Pressable>
        </View>
        );
    };