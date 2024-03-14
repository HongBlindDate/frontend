import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: "5%",
    },
    intro: {
        flex: 37,
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: "2%",
        justifyContent: "center",
        textAlign: "left",
    },
    introText:{
        fontSize: 22,
        fontFamily:'GongGothic',
    },
    text1:{
        fontSize: 14,
        fontFamily:'PretendardMedium',
        color: "#626262",
    },
    input: {
        flex: 1,
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: '#E1E2E4',
        borderRadius: 7,
        backgroundColor: "transparent",
        fontFamily:'PretendardMedium',
        fontSize: 13,
    },
    button: {
        backgroundColor: "#BB2649",
        borderRadius: 7,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 15,
        fontFamily:'Pretendard',
        color: "#FFFFFF",
    },
})
//save login info

export default styles;