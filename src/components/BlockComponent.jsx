import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import handleFullBlock from '../utils/handleFullBlock';
import handleHalfBlock from '../utils/handleHalfBlock';
import handleUnblocked from '../utils/handleUnblocked';

export default function BlockComponent(props) {

    const styles = StyleSheet.create({
        blockcomponentcontainer: {
            flex: 0.6,
            flexDirection: 'row',
            ...Platform.select({
                ios: {
                    marginBottom: 40,
                },
            }),
        },
        blockcomponentbuttons: {
            flex: 1,
            justifyContent: 'space-evenly',
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderRightWidth: 2,
            paddingVertical: 5,
        },
        blockcomponenttext: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textShadowColor: '#000000',
            textShadowOffset: { width: 2, height: 1.5 },
            textShadowRadius: 1,
        },
    });

    return(
        <View style={ styles.blockcomponentcontainer }>
            <TouchableOpacity 
                style={[ 
                    styles.blockcomponentbuttons, { 
                        backgroundColor: '#dc3546', 
                        borderLeftWidth: 2
                    }
                ]}
                onPress={() => handleUnblocked(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
                activeOpacity={0.3}
            >
                <Text style={ styles.blockcomponenttext }>Unblocked</Text>
                <Text style={ styles.blockcomponenttext }>{props.damage}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[ 
                    styles.blockcomponentbuttons, { 
                        backgroundColor: '#f2d850', 
                    }
                ]}
                onPress={() => handleHalfBlock(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
                activeOpacity={0.3}
            >
                <Text style={ styles.blockcomponenttext }>Half Block</Text>
                <Text style={ styles.blockcomponenttext }>{Math.ceil(props.damage / 2)}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[ 
                    styles.blockcomponentbuttons, { 
                        backgroundColor: '#66bc69' 
                    }
                ]}
                onPress={() => handleFullBlock(
                    props.setDamage, 
                    props.setSpeed
                )}
                activeOpacity={0.3}
            >
                <Text style={ styles.blockcomponenttext }>Full Block</Text>
                <Text style={ styles.blockcomponenttext }>{props.damage * 0}</Text>
            </TouchableOpacity>
        </View>
        );
    };