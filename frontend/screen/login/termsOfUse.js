import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './theme.js';

export default function TermsOfUse({navigation}) {
  //const [term1, setTerm1] = useState(false);
  //const [term2, setTerm2] = useState(false);
  //const [term3, setTerm3] = useState(false);
  const term1 = true;
  const term2 = true;
  const term3 = true;
  return (
    <View style={styles.container}>
      <View style={{flex:98}}/>
      <View style={styles.intro}>
        <Text style={styles.title2}>서비스 이용을 위해</Text>
        <Text style={styles.title2}>약관 동의가 필요합니다.</Text>
      </View>
      <View style={{flex:105}}/>
      <View style={Styles.termsContainer}>
        {/*전체동의버튼*/}
        <View style={Styles.termContainer1}>
            <Text style={Styles.agreeAllText}>전체동의</Text>
        </View>
        <View style={Styles.line}/>
        <View style={{flex: 27}}/>
        {/*필수 약관1*/}
        <View style={Styles.termContainer2}>
            <Text style={Styles.termText}>필수</Text>
            <TouchableOpacity>
              <Text style={styles.text2}>홍개팅 서비스 이용약관</Text>
            </TouchableOpacity>
        </View>
        {/*필수 약관2*/}
        <View style={Styles.termContainer2}>
            <Text style={Styles.termText}>필수</Text>
            <TouchableOpacity>
              <Text style={styles.text2}>개인정보 수집 및 이용 동의</Text>
            </TouchableOpacity>
        </View>
        {/*선택 약관*/}
        <View style={Styles.termContainer2}>
            <Text style={{...Styles.termText, color: '#000000'}}>선택</Text>
            <TouchableOpacity>
              <Text style={styles.text2}>마케팅 활용동의</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:241}}/>
      {/*모두 동의 시 다음 버튼 활성화*/}
      <View style={styles.buttonContainer}>
        {(term1 && term2 && term3) ?
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Join')}}>
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity> : <TouchableOpacity style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress={() => {navigation.navigate('Join')}} disabled>
          <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>}
      </View>
      <View style={{flex:26}}/>
    </View>
  );
};

const Styles = StyleSheet.create({
    termsContainer: {
      flex: 158,
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      height: "100%",
    },
    line: {
      flex: 17, 
      borderBottomWidth: 1,
      width: "100%",
      borderBottomColor: '#E1E2E4',
    },
    termContainer1: {
      flex: 30,
      flexDirection: 'row',
      paddingHorizontal: "2%",
      width: "100%",
      height: "100%",
    },
    termContainer2: {
      flex: 18,
      flexDirection: 'row',
      paddingHorizontal: "2%",
      width: "100%",
      height: "100%",
    },
    agreeAllText: {
      fontSize: 18,
      fontFamily: 'PretendardMedium',
      color: '#000000',
    },
    termText: {
      fontSize: 15,
      fontFamily: 'PretendardSemiBold',
      color: '#BB2649',
    },
    agreeButton: {
      backgroundColor: "#FFB6C1",
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
    },
});