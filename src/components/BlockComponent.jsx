import { Button, Text, View } from 'react-native';
import handleFullBlock from '../utils/handleFullBlock';
import handleHalfBlock from '../utils/handleHalfBlock';
import handleUnblocked from '../utils/handleUnblocked';

export default function BlockComponent(props) {
    return(
        <View>
            <Text>Block Component</Text>
            {/* <Button 
                title="Unblocked"
                onPress={() => handleUnblocked(props.damage, props.state, props.setState) }
            /> */}
        </View>
        );
    };


    // <div className="block-container">
    //     <button 
    //         onClick={() => handleUnblocked(attackDamage, state, setState)}
    //         className="block-btn" 
    //         id="unblocked"
    //         >
    //         <label>UNBLOCKED</label>
    //         <p className="damage">{attackDamage}</p>
    //     </button>
    //     <button 
    //         onClick={() => handleHalfBlock(attackDamage, state, setState)}
    //         className="block-btn" 
    //         id="half-block"
    //         >
    //         <label>HALF BLOCK</label>
    //         <p className="damage">{Math.ceil(attackDamage / 2)}</p>
    //     </button>
    //     <button
    //         onClick={handleFullBlock} 
    //         className="block-btn" 
    //         id="full-block"
    //         >
    //         <p> FULL BLOCK</p>
    //         <p className="damage">{attackDamage * 0}</p>
    //     </button>
    // </div>