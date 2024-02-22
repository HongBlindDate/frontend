import react from "react";
import { Text, View, StyleSheet, Button} from 'react-native';


const DetailProfile = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <View>
                <Button
                    onPress={() => navigation.navigate('ChangeProfile')} //address first letter -> write capital
                    title="프로필 수정"
            />
                <Button
                    onPress={() => navigation.navigate('ChangePicture')} 
                    title="사진 수정"
            />
             
            </View>
        </View>
    );
        
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
}
)

export default DetailProfile;