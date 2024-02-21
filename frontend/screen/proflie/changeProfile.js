import react from "react";
import { Text, View, StyleSheet ,Button} from 'react-native';


const ChangeProfile = ({navigation}) => {
    
    return (
        <View>
           <Text> changeProfile</Text>
           <Button
                    onPress={() => navigation.navigate('ChangeMyKeyword')} 
                    title="내 키워드 수정"
            />
        </View>
    );
        
}

export default ChangeProfile;