import react,{useState} from "react";
import { Text, View, StyleSheet ,Button, TextInput , SafeAreaView } from 'react-native';


const ChangeProfile = ({navigation}) => {
    
    const [text, onChangeText] = useState('기본 소개글');

    return (
        <View>
           <Text> changeProfile</Text>
        
        <View style={{flexDirection:"row",}}>
           <Text > 한줄소개: </Text> 
           <TextInput 
                style={styles.input}
                onChangeText={onChangeText} 
                placeholder={""} 
                value={text}
        />
        </View>
          
           
           <Button
                    onPress={() => navigation.navigate('ChangeMyKeyword')} 
                    title="내 키워드 수정"
            />
        </View>
    );
        
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
    }
})

export default ChangeProfile;