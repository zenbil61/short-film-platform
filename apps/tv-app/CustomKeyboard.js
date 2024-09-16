import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (key) => {
    setInputValue((prev) => prev + key);
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      {/* TextInput editable değil, böylece varsayılan klavye açılmıyor */}
      <TextInput
        style={styles.input}
        value={inputValue}
        editable={false}
        placeholder='Özel klavye ile yazın'
      />

      {/* Özel Klavye Bileşeni */}
      <View style={styles.keyboard}>
        {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => handleKeyPress(key)}
          >
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.key} onPress={handleDelete}>
          <Text style={styles.keyText}>Sil</Text>
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
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  key: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#4CAF50',
    borderRadius: 5
  },
  keyText: {
    color: '#fff',
    fontSize: 18
  }
});

export default App;
