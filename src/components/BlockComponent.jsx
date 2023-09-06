import { Button, StyleSheet, Text, View } from 'react-native';
import handleFullBlock from '../utils/handleFullBlock';
import handleHalfBlock from '../utils/handleHalfBlock';
import handleUnblocked from '../utils/handleUnblocked';

export default function BlockComponent(props) {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row'
        }
    });

    return(
        <View style={styles.container}>
            <Button 
                title="Unblocked"
                onPress={() => handleUnblocked(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
            />
            <Button 
                title="Half Block"
                onPress={() => handleHalfBlock(
                    props.damage, 
                    props.state, 
                    props.setState, 
                    props.setDamage, 
                    props.setSpeed
                )}
            />
            <Button 
                title="Full Block"
                onPress={() => handleFullBlock(
                    props.setDamage, 
                    props.setSpeed
                )}
            />
        </View>
        );
    };