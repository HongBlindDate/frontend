import react from "react";
import { Text, View , Switch, StyleSheet ,Button} from 'react-native';
import {useState} from 'react';


const ProfileStart = ({navigation}) => {

    const [randomopen, setrandomopen] = useState(false); //toggle switch constant
    const randomSwitch = () => setrandomopen(previousState => !previousState);

    const [idealopen, setidealopen] = useState(false); //toggle switch constant
    const idealSwitch = () => setidealopen(previousState => !previousState);
    
    const [faceopen, setfaceopen] = useState(false); //toggle switch constant
    const faceSwitch = () => setfaceopen(previousState => !previousState);


    return (
    <View style={styles.container}>
        
        {/* provide my summary profile */}
        <View style={{flex:2,backgroundColor:"orange"}}> 
            <Text>Profile</Text>
        </View>
        
        {/* for toggle switch */}
        <View style={{ flex:1, backgroundColor:"green"}}>

            {/* toggleswitch to random matching open/unopen */}
            <View style={{flexDirection:"row"}}>
                <Text>랜덤매칭 여부</Text>
                <Switch
	                trackColor={{false: '#767577', true: '#81b0ff'}}
	                thumbColor={randomopen ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
	                onValueChange={randomSwitch}
	                value={randomopen}
                />
                </View> 
            
            {/* toggleswitch to ideal matching open/unopen */}
            <View style={{flexDirection:"row"}}>
                <Text> 이상형 매칭 여부</Text>
                <Switch
	                trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={randomopen ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={idealSwitch}
                    value={idealopen}
/>
            </View>

            {/* toggleswitch to face open open/unopen */}
            <View style={{flexDirection:"row"}}>
                <Text> 얼굴 공개 여부</Text>
                <Switch
	                trackColor={{false: '#767577', true: '#81b0ff'}}
	                thumbColor={randomopen ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
	                onValueChange={faceSwitch}
	                value={faceopen}
/>
            </View>
        </View>

        {/* view to change page */}
        <View style={{flex:1,flexDirection:"row"}}>
            <Button
                onPress={() => navigation.navigate('DetailProfile')} //address first letter -> write capital
                title="내 프로필 보기"
/>
            <Button
                onPress={() => navigation.navigate('ChangeIdeal')} 
                title="이상형 보기"
/>
            <Button
                onPress={() => navigation.navigate('ChangePersonalImformation')} 
                title="개인정보 수정"
/>
            
            </View>
    </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    toggleSwitch:{

    }
}
)

export default ProfileStart;