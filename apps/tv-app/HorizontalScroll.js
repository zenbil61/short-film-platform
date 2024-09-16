import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Alert,
  Text,
  ImageBackground,
  Pressable
} from 'react-native';

const imageUrl =
  'https://www.arttablo.com/upload/U-thor-film-afisi-sinema-kanvas-tablo1527774573-800.jpg';
const App = () => {
  const [focused, setFocused] = useState(0);

  const handlePress = (param) => {
    setFocused(param);
    Alert.alert(`Tıklanan: ${param}`);
  };
  return (
    <View>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Pressable
            onPress={() => handlePress(index)}
            onPressIn={() => setFocused(index)}
            onFocus={() => setFocused(index)}
            style={({ pressed }) => [
              {
                height: 305,
                margin: 20,
                borderRadius: 5,
                transform: [
                  { scale: focused === index ? 1.15 : 1 } // %10 büyütme
                ]
                // opacity: focused === index ? 1 : 0.7,
                // borderWidth: focused === index ? 2 : 0,
                // borderColor: 'white',    // Sınır rengi
              }
            ]}
          >
            <ImageBackground
              source={{ uri: imageUrl }}
              style={styles.backgroundImage}
            >
              <View key={index} style={styles.box}></View>
            </ImageBackground>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row', // Yatay yerleştirme için
    marginTop: 50
  },
  backgroundImage: {
    borderRadius: 5,
    overflow: 'hidden' // Kenar köşelerinin yuvarlanmasını sağlamak için
  },
  box: {
    width: 200,
    height: 300,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10 // Kutular arasında boşluk
  },

  boxText: {
    color: '#fff',
    fontSize: 18
  }
});

export default App;
