import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Text, View,TouchableOpacity } from 'react-native';

export default function FindID({navigation}) {
    return (
        <View>
          <Text>Find ID</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting1')}>
            <Text>임의 버튼</Text>
          </TouchableOpacity>
        </View>

    );
}