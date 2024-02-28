import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker';

const Stack = createStackNavigator();

export default function Join({navigation}) {
    const [email, setEmail] = useState("");
    const onChangeEmail = (payload) => setEmail(payload);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'mail.hongik.ac.kr', value: 'mail.hongik.ac.kr'},
        {label: 'g.hongik.ac.kr', value: 'g.hongik.ac.kr'}
    ]);
    const [code, setCode] = useState("");
    const onChangeCode = (payload) => setCode(payload);

    const send = () => {
        return (
            <View>
                {/* authentication submit button */}
                <TouchableOpacity style={styles.button} onPress={() => submit()}>
                    <Text style={{fontSize: 15}}>가입하기</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const submit = () => {
        return;
    }

    return(
        <View style={styles.container}>
            <View style={styles.joinContainer}>
                <View style={styles.intro}>
                    <Text style={{fontSize: 30, fontWeight: 500}}>홍개팅은 <Text style={{color: '#BB2649'}}>홍대생만</Text>{"\n"}이용 가능한 서비스입니다.</Text>
                    <Text style={{fontSize: 15, fontWeight: 600, color: '#626262'}}>{"\n"}학교 확인을 위해 이메일을 인증해주세요.</Text>
                </View>
                <View style={styles.emailContainer}>
                    <View>
                        <Text style={styles.title}>이메일</Text>
                    </View>
                    {/* fill in email */}
                    <View style={styles.email}>
                        <TextInput
                            value={email}
                            onChangeText={onChangeEmail}
                            placeholder={"이메일 입력"}
                            placeholderTextColor="#E1E2E4"
                            style={styles.emailInput}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>@</Text>
                        </View>
                        {/* select between two emails */}
                        <View style={styles.dropdownContainer}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={styles.dropdown}
                            />
                        </View>
                    </View>
                    <View>
                        <Text>입력하신 이메일 주소로 인증코드가 발송되었습니다.</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>인증코드</Text>
                    </View>
                    <View style={styles.certificationContainer}>
                        {/* email certification code*/}
                        <View style={styles.email}>
                            <TextInput
                                value={code}
                                onChangeText={onChangeCode}
                                placeholder={"인증코드 입력"}
                                placeholderTextColor="#E1E2E4"
                                style={styles.codeInput}
                            />
                            <TouchableOpacity
                                style={styles.resend}>
                                <Text style={{color: "#BB2649"}}>재전송</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 5}}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {/* if no input => cannot press authenticating button */}
                {email == "" ? (<TouchableOpacity style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress={() => send()} disabled>
                    <Text style={{fontSize: 15, color: "#FFFFFF"}}>이메일 인증하기</Text>
                </TouchableOpacity>) : (<TouchableOpacity style={styles.button} onPress={() => send()}>
                    <Text style={{fontSize: 15}}>이메일 인증하기</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    joinContainer:{
        flex: 7,
        padding: "5%",
        paddingTop: 50,
    },
    intro: {
        flex: 2,
    },
    emailContainer: {
        flex: 6,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 17,
        fontWeight: '500',
        color: "#626262",
    },
    email: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    emailInput: {
        flex: 6,
        borderWidth: 1,
        borderColor: '#E1E2E4',
        borderRadius: 7,
        paddingHorizontal: "3%",
        width: "100%",
        height: "100%",
    },
    dropdownContainer: {
        flex: 8,
    },
    dropdown: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#E1E2E4',
        minWidth: "100%",
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 15,
        color: "#ACB0B3",
    },
    certificationContainer: {
        flex: 1,
        flexDirection: "row",
    },
    codeInput: {
        flex: 6,
        borderWidth: 1,
        borderColor: '#E1E2E4',
        borderRadius: 7,
        paddingHorizontal: "3%",
        width: "100%",
        height: "100%",
    },
    resend: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
        borderWidth: 1.5,
        borderRadius: 7,
        borderColor: "#BB2649",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      },
    button: {
        marginTop: 5,
        backgroundColor: "#BB2649",
        borderRadius: 7,
        width: "90%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
    },
})