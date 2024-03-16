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
        flex: 85,
        paddingHorizontal: "2%",
        justifyContent: 'center',
        textAlign: 'left',
        width: "100%",
    },
    title1: {
        fontSize: 25,
        fontFamily: 'GongGothic',
    },
    title2: {
        fontSize: 22,
        fontFamily: 'GongGothic',
    },
    text1:{
        fontSize: 14,
        fontFamily:'PretendardMedium',
        color: "#626262",
    },
    text2: {
        fontSize: 15,
        fontFamily:'PretendardMedium',
        color: "#5E5E5E",
    },
    text3: {
        fontSize: 13,
        fontFamily:'PretendardMedium',
        color: "#BB2649",
    },
    text4: {
        fontSize: 14,
        fontFamily:'PretendardMedium',
        color: "#626262",
    },
    text5: {
        fontSize: 14,
        fontFamily:'PretendardRegular',
        color: "#ACB0B3",
    },
    text6: {
        fontSize: 12,
        fontFamily:'PretendardMedium',
        color: "#626262",
    },
    inputText: {
        flex: 42,
        color: '#000000',
        fontFamily:'PretendardMedium',
        fontSize: 13,
        borderWidth: 1,
        borderColor: "#E1E2E4",
        borderRadius: 7,
        width: "100%",
        paddingHorizontal: 15,
    },
    buttonContainer: {
        flex: 44,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "100%",
        height: "100%",
        backgroundColor: "#BB2649",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 15,
        fontFamily:'PretendardMedium',
        color: "#FFFFFF",
    },
})

export default styles;