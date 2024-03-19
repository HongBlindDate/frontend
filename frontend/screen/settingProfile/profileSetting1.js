import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSetting1({navigation}) {
    return (
      <View style={styles.contaniner}>
        <Text>hello</Text>
      </View>
        
    );
}

const styles = StyleSheet.create({
  contaniner:{
    backgroundColor:"white",
    flex:1,
  }
})