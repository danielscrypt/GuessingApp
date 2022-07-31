import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"


    function randNum (max , min ,exclude) {
        const rand = Math.floor(Math.random() * (max - min))  + min
        
        if (rand === exclude) {
            return randNum(exclude)
        } else {
           return rand 
        }
        
    }

    let maxBoundry = 100;
    let minBoundry = 1;

function GameScreen ({userNumber , gameOver}) {
    const intialGuess = randNum(maxBoundry , minBoundry , userNumber)
    const [currentGuess, setCurrentGuess] = useState(intialGuess);
    const [guesses , setGuesses] = useState([currentGuess])

    function nextGuess(dir){
        if (dir === 'lower' &&  currentGuess < userNumber || dir === 'higher' && currentGuess > userNumber) {
            Alert.alert(
                'You gotta be kidding me !',
                'Get yourselt toghether',
                [{text: 'ok', style: 'destructive' }]
            )
        } else {

        if (dir === 'lower') {
            maxBoundry = currentGuess
        } else {
            minBoundry = currentGuess + 1
        }
        const newRand = randNum(maxBoundry , minBoundry , currentGuess)
        setCurrentGuess(newRand)
        setGuesses(prevGuess => [...prevGuess, newRand])
    } 
        console.log(minBoundry, maxBoundry)
        console.log(guesses)
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            minBoundry = 1
            maxBoundry = 100
            gameOver()
        }
    }, [currentGuess, userNumber, gameOver])

    let guessesScreen = undefined

    if (guesses) {
        guessesScreen = (<View style={styles.guesses}>
            {guesses.map((guess, i) => (
                <Text key={i}>{guess}</Text>
            ))}
        </View>)
    }


    return(
        <View style={styles.container}>
        <View style={styles.gameScreen}>
            <Text style={styles.header}>
                Well let's see
            </Text>
            <View>
            <Text style={styles.currentGuess}>{currentGuess}</Text>
                <Text style={styles.title}>Higher or Lower ?</Text>
                <View style={styles.btns}>
                <PrimaryButton press={nextGuess.bind(this, 'higher')} >+</PrimaryButton>
                <PrimaryButton press={nextGuess.bind(this, 'lower')} >-</PrimaryButton>
                </View>
            </View>
        </View>
        {guessesScreen}
    </View>
    )
}

const styles = StyleSheet.create({
    gameScreen : {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '50%',
        maxWidth: '70%',
        marginTop: 200,
        elevation: 20,
        borderRadius: 30,
        backgroundColor: '#7203ce',
        padding: 20,
        
    }, 
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    header: {
        color: '#fff',
        fontSize: 40, 

    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    currentGuess: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        marginVertical: 15,
    },
    guesses: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginVertical: 50,
        padding: 20,
        borderColor: 'purple',
        elevation: 20,
        borderWidth: 1,
        width: '70%',
        borderRadius: 30,
        backgroundColor: '#fff',

    }
})

export default GameScreen