import react from "react";
import { Text, View, StyleSheet ,Button} from 'react-native';


const ChangeIdeal = ({navigation}) => {
    
    return (
        <View>
           <Text> changeIdeal</Text>
           <Button
                    onPress={() => navigation.navigate('ChangeIdealKeyword')} 
                    title="이상형 키워드 수정"
            />
        </View>
    );
        
}

export default ChangeIdeal;