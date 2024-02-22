import react from "react";
import { Text, View, StyleSheet ,Button} from 'react-native';


const ChangePersonalImformation = ({navigation}) => {
    
    return (
        <View>
           <Text> ChangePersonalImformation </Text>
           <Button
                    onPress={() => navigation.navigate('ChangePassword')} 
                    title="비밀번호 수정"
            />
             <Button
                    onPress={() => navigation.navigate('MemberBreak')} 
                    title="회원 탈퇴"
            />
        </View>
    );
        
}

export default ChangePersonalImformation;