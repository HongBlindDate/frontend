import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , useWindowDimensions } from 'react-native';

export default function TermsOfUse({navigation}) {
  const {width, height} = useWindowDimensions();
  const styles = makeStyles(width, height);
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfoAgreed: false,
    marketing: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.termsContainer}>
        <View style={styles.introContainer}>
          <Text style={styles.introText}>서비스 이용을 위해{"\n"}약관 동의가 필요합니다.</Text>
        </View>
        <View style={styles.agreeContainer}>
          <View style={styles.allAgreeContainer}>
            <Text style={styles.agreeAllText}>전체동의</Text>
          </View>
          <View style={styles.specificTermsContainer}>
            <View style={styles.specificTerms}>
              <View style={styles.specificTerm}>
                <Text style={styles.necessaryText}>필수</Text>
              </View>
              <View style={styles.termsButton}>
                <TouchableOpacity><Text style={styles.text}>홍개팅 서비스 이용약관</Text></TouchableOpacity>
              </View>
              <View>
                {/*체크 버튼*/}
              </View>
            </View>
            <View style={styles.specificTerms}>
              <View style={styles.specificTerm}>
                <Text style={styles.necessaryText}>필수</Text>
              </View>
              <View style={styles.termsButton}>
                <TouchableOpacity><Text style={styles.text}>개인정보 수집 및 이용 동의</Text></TouchableOpacity>
              </View>
              <View>
                {/*체크 버튼*/}
              </View>
            </View>
            <View style={styles.specificTerms}>
              <View style={styles.specificTerm}>
                <Text style={styles.unnecessaryText}>선택</Text>
              </View>
              <View style={styles.termsButton}>
                <TouchableOpacity><Text style={styles.text}>마케팅 활용 동의</Text></TouchableOpacity>
              </View>
              <View>
                {/*체크 버튼*/}
              </View>
            </View>
          </View>
          <View style={{flex:6}}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Join')}}>
          <Text style={{fontSize: 15, color: "#FFFFFF"}}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const makeStyles = (width, height) => StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#FFFFFF",
    },
    termsContainer: {
      flex: 7,
      width: "100%",
    },
    introContainer: {
      flex: 1,
      paddingHorizontal: "7%",
      paddingTop: "15%",
    },
    introText: {
      fontSize: 30 * width / 400,
    },
    agreeContainer: {
      flex: 2,
      alignContent: "center",
      justifyContent: "center",
      marginHorizontal: "10%",
    },
    allAgreeContainer: {
      flex: 1,
      borderBottomColor: "#E1E2E4",
      borderBottomWidth: 1,
    },
    agreeAllText: {
      fontSize: 20 * width / 400,
    },
    specificTermsContainer: {
      flex: 3,
    },
    specificTerms: {
      flex: 1,
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    specificTerm: {
      flex: 1,
      alignContent: "center",
    },
    necessaryText: {
      color: "#BB2649",
      fontSize: 13 * width / 400,
      fontWeight: "bold",
    },
    termsButton: {
      flex: 5,
    },
    text: {
      fontSize: 13 * width / 400,
    },
    unnecessaryText: {
      color: "#000000",
      fontSize: 13 * width / 400,
      fontWeight: "bold",
    },
    buttonContainer: {
      flex: 1,
      justifyContent:"center",
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
});