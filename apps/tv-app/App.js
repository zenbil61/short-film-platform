import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Alert
} from 'react-native';
import ui from '@sfp/ui';
import CustomKeyboard from './CustomKeyboard';
import HorizontalScroll from './HorizontalScroll';
export default function App() {
  const handlePress = () => {
    Alert.prompt('Butona tıklandı!');
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          height: 200,
          backgroundColor: 'red',
          width: '100%',
          fontSize: 100,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        eleman seçildi
      </Text>
      <ScrollView>
        <CustomKeyboard />
        <Text style={styles.header}>Scrollable Content {ui}</Text>
        {[...Array(1).keys()].map((item, index) => (
          <View key={index} style={styles.item}>
            <Button
              onPress={handlePress}
              style={styles.button}
              title={`${ui + index}`}
            ></Button>
          </View>
        ))}
        <HorizontalScroll />
        <HorizontalScroll />
        <HorizontalScroll />
        <HorizontalScroll />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 200,
    fontSize: 100,
    color: 'red'
  },
  item: {
    backgroundColor: 'white',
    marginTop: 20
  }
});
