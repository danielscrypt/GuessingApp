import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Alert } from 'react-native' ;
import PrimaryButton from '../components/PrimaryButton';

function MainScreen ({onPicked}) {
    const [myNum, setMyNum] = useState('') ; 

    function handleChange(enteredText) {
        setMyNum(enteredText)
    }

    function reset () {
        setMyNum('')
    }

    function pressHandler() {
        const updatedNum = parseInt(myNum);

        if(isNaN(updatedNum) || updatedNum <= 0 || updatedNum >= 99) {
            Alert.alert(
                'You gotta be kidding me !',
                'Get yourselt toghether',
                [{text: 'ok', style: 'destructive' , onPress: reset}]
            )
            return;
        }

        onPicked(updatedNum)
        console.log('valid !')
      }


    return (
        <View style={styles.mainScreen}>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType={'number-pad'}
            onChangeText={handleChange}
            value={myNum} />
            <View style={styles.btnsContainer}>
            <PrimaryButton 
            press={reset} 
            color='#7203ce'>Reset</PrimaryButton>
            <PrimaryButton
            press={pressHandler} 
            color='#7203ce'>confirm</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        marginTop: 200,
        width: '100%',
      flexDirection: 'column' , 
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7203ce',
      borderRadius: 7,
      padding: 10,
      elevation: 15 ,
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    numberInput: {
        height: 40,
        width: '20%',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        fontSize: 25 , 
        color: '#fff',
        padding: 7,
        textAlign: 'center'

    }
  });
  

export default MainScreen