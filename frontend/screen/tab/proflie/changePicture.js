import react,{useState} from "react";
import { Text, View,Pressable, StyleSheet ,Button ,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const ChangePicture = ({navigation}) => {
    
    const [imageUrl, setImageUrl] = useState('');

    //hooks for image permission
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    const uploadImage = async () => {

        if (!status?.granted){ //check to have permissions
            const permission = await requestPermission();  //If not, permission acceptance
            if(!permission.granted){
                return null;
            }
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOption.Images, //only choose image, no video
            allowsEditing: true, //edit allow
            aspect: [4, 3], //ratio
            quality: 1,  // image quailty
        });

        if (result.canceled){
            return null; //cancel upload
        }
        
        console.log(result);
        setImageUrl(result.uri);
       
    };

    return (
        <View>
           <Text>changePicture</Text>
           <Button
                title="사진 추가"
                color="#f194ff"
                onPress={() => {uploadImage()}}
      />
            <Image source={{uri:imageUrl}}/>
        </View>
        
    );
        
}

export default ChangePicture;