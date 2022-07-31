import {View, Text, StyleSheet, Pressable} from 'react-native' ; 

function PrimaryButton ({children, color, press}) {

    const styles = StyleSheet.create({
        btnContainer: {
          backgroundColor: '#fff',
          borderRadius: 15,
          marginHorizontal: 5,
          flex: 1,

        },
        innerText: {
          letterSpacing: 1,
          fontSize: 15,
          color: color,
          fontWeight: '600',
        },
         innerContainer: {
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }
      });
    return (
      <View style={styles.btnContainer} >
      <Pressable 
      style={styles.innerContainer}
      onPress={press} 
      android_ripple={{color: 'purple'}}>
            <Text style={styles.innerText}>{children}</Text>
        </Pressable>
        </View>
    )
}


  
export default PrimaryButton