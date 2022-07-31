import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isKO , SetKO] = useState(false);

  function numberHandler (pickedNumber) {
    setUserNumber(pickedNumber)
  }
   
  function gameOver () {
    SetKO(true)
  }

  function reset () {
    setUserNumber()
    SetKO(false)
  }
  
  let screen = <MainScreen onPicked={numberHandler} /> 

  if (userNumber) {
    screen = <GameScreen gameOver={gameOver} userNumber={userNumber} />
  }
  
  if (isKO) {
    screen = <GameOverScreen reset={reset} />
  }

  return (
    <LinearGradient colors={['#ead1dc' , '#ff7bb5']} style={styles.container}>
      <ImageBackground 
      resizeMode='cover'
      style={styles.container}
      imageStyle={styles.backgroundImg}
      source={require('./assets/medtitation.jpg')}>
      <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImg: {
    opacity: 0.5,
  }
});
