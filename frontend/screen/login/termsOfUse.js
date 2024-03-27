import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import termsCheckbox from '../../assets/images/termsCheckbox.png';
import termCheckbox from '../../assets/images/termCheckbox.png';
import termsCheckboxChecked from '../../assets/images/termsCheckbox-checked.png';
import termCheckboxChecked from '../../assets/images/termCheckbox-checked.png';
import termArrow from '../../assets/images/termArrow.png';

import styles from './theme.js';


export default function TermsOfUse({navigation}) {
  //const [term1, setTerm1] = useState(false);
  //const [term2, setTerm2] = useState(false);
  //const [term3, setTerm3] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [term1Checked, setTerm1Checked] = useState(false);
  const [term2Checked, setTerm2Checked] = useState(false);
  const [term3Checked, setTerm3Checked] = useState(false);
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
            <View style={{flex:222}}/>
            <TouchableOpacity onPress={()=>{
                if(term1Checked&&term2Checked&&term3Checked) {
                  setTerm1Checked(false);
                  setTerm2Checked(false);
                  setTerm3Checked(false);
                  setTermsChecked(false);
                } else{
                  setTerm1Checked(true);
                  setTerm2Checked(true);
                  setTerm3Checked(true);
                  setTermsChecked(true);
                }
              }}>{termsChecked ? <Image source={termsCheckboxChecked}/> : <Image source={termsCheckbox}/>}
            </TouchableOpacity>
        </View>
        <View style={Styles.line}/>
        <View style={{flex: 27}}/>
        {/*필수 약관1*/}
        <View style={Styles.termContainer2}>
            <Text style={Styles.termText}>필수</Text>
            <TouchableOpacity style={{flex: 158}}>
              <Text style={styles.text2}>홍개팅 서비스 이용약관
              <Image source={termArrow}/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setTerm1Checked(!term1Checked)
                //term1Checked===false인 상태에서 눌렀을 경우라 !term1Checked
                if(!term1Checked&&term2Checked&&term3Checked) {
                  setTermsChecked(true);
                } else {
                  setTermsChecked(false);
                }
              }}>{term1Checked? <Image source={termCheckboxChecked}/> : <Image source={termCheckbox}/>}
            </TouchableOpacity>
        </View>
        {/*필수 약관2*/}
        <View style={Styles.termContainer2}>
            <Text style={Styles.termText}>필수</Text>
            <TouchableOpacity style={{flex: 158}}>
              <Text style={styles.text2}>개인정보 수집 및 이용 동의
              <Image source={termArrow}/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              setTerm2Checked(!term2Checked);
              //term2Checked===false인 상태에서 눌렀을 경우라 !term2Checked
              if(term1Checked&&!term2Checked&&term3Checked) {
                setTermsChecked(true);
              } else {
                setTermsChecked(false);
              }
            }}>{term2Checked? <Image source={termCheckboxChecked}/> : <Image source={termCheckbox}/>}
            </TouchableOpacity>
        </View>
        {/*선택 약관*/}
        <View style={Styles.termContainer2}>
            <Text style={{...Styles.termText, color: '#000000'}}>선택</Text>
            <TouchableOpacity style={{flex: 158}}>
              <Text style={styles.text2}>마케팅 활용동의
              <Image style={Styles.arrow} source={termArrow}/>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                  setTerm3Checked(!term3Checked);
                  //term3Checked===false인 상태에서 눌렀을 경우라 !term3Checked
                  if(term1Checked&&term2Checked&&!term3Checked) {
                    setTermsChecked(true);
                  } else {
                    setTermsChecked(false);
                  }
                }}>{term3Checked? <Image source={termCheckboxChecked}/> : <Image source={termCheckbox}/>}
            </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:241}}/>
      {/*모두 동의 시 다음 버튼 활성화*/}
      <View style={styles.buttonContainer}>
        {((term1Checked&&term2Checked) === true) ?
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
      alignItems: 'center',
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
    arrow: {
    },
    agreeButton: {
      backgroundColor: "#FFB6C1",
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
    },
});