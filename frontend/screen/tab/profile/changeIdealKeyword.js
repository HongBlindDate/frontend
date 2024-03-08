import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const App = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const maxSelection = 5;

  const onPressButton = (index) => {
    if (selectedButtons.includes(index)) {
      // already selected -> selected off
      setSelectedButtons(prevSelected => prevSelected.filter(item => item !== index));
    } else if (selectedButtons.length < maxSelection) {
      // 선택된 버튼이 최대 선택 가능한 개수보다 작은 경우 선택
      setSelectedButtons(prevSelected => [...prevSelected, index]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectionInfo}>
        <Text style={styles.selectionText}>
          {selectedButtons.length}/{maxSelection} 선택됨
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {Array.from({ length: 20 }, (_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              { backgroundColor: selectedButtons.includes(index) ? 'blue' : 'white' }
            ]}
            onPress={() => onPressButton(index)}
          >
            <Text style={[styles.buttonText, { color: selectedButtons.includes(index) ? 'white' : 'black' }]}>
              버튼 {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
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
  selectionInfo: {
    marginBottom: 20,
  },
  selectionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 5,
    padding: 10,
    borderRadius: 999,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default App;

