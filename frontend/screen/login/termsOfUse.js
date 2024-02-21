import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, Submit } from 'react-native';



export default function TermsOfUse({navigation}) {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.termsContainer}>
        <Text style={{fontSize: 20}}>서비스 이용을 위해{"\n"}약관 동의가 필요합니다.</Text>
      </View>
      {/* terms modal */}
      <View>
        <Button color="#f194ff" title="term1" onPress={() => setModal1Visible(true)} />
        <Button title="term2" onPress={() => setModal2Visible(true)} />

        {/* implement modal1 */}
        <Modal
          animationType="fade"
          visible={modal1Visible}
          onRequestClose={() => setModal1Visible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>term1</Text>
              <Text>terms bla bla</Text>
              <Button title="agree" onPress={() => setModal1Visible(false)} />
            </View>
          </View>
        </Modal>
        {/* implement modal1 */}
        <Modal
          animationType="fade"
          visible={modal2Visible}
          onRequestClose={() => setModal2Visible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>term2</Text>
              <Text>terms bla bla</Text>
              <Button title="agree" onPress={() => setModal2Visible(false)} />
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Join')}}>
          <Text style={{fontSize: 15, color: "#FFFFFF"}}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    termsContainer: {
      flex: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    agreeButton: {
      backgroundColor: "#FFB6C1",
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: "35%",
      paddingVertical: "80%",
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
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