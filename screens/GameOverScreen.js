import { useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function GameOverScreen ({reset}) {

    function handlePress () {
        reset()
    }
   
    return(
        <View style={styles.gameScreen}>
            <Text style={styles.header}>
                Well let's see
            </Text>
            <View>
                <Text style={styles.title}>Game OVERRR</Text>
                <View style={styles.btns}>
                    <PrimaryButton press={handlePress}>reset</PrimaryButton>
                </View>
            </View>
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
        marginLeft: '15%',
        
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
    }
})

export default GameOverScreen