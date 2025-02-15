import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const App = () => {
  const style = {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'yellow',
    },
  };

  const theme = useColorScheme()
  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode?"black":"white";
  const textColor = isDarkMode?"white":"black";
  return (
    // <View>
    // better to use safeAreaView instead of view
    <SafeAreaView style={[styles.container,{backgroundColor:backgroundColor}]}>
      <ScrollView contentContainerStyle={{gap:10}} >
        
      <Text style={[styles.text,{color:textColor}]}>React Native Learnings</Text>

      <Image
        style={{width: 200, height: 300}}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
      />

      {/* For the button with already build basic UI  */}
      <Button title="Press Me"></Button>

      {/* For the button */}
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'green'}}
        onPress={() => Alert.alert('Pressed')}>
        <Text style={{color: 'white'}}>Button</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={{padding: 10, backgroundColor: 'red'}}
        onPress={() => Alert.alert('Pressed')}>
        <Text style={{color: 'white'}}>Button</Text>
      </TouchableHighlight>

      {/* Mostly used for buttons */}

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
      {/* // </View> */}

      <View style={{width:"50%",height:200,backgroundColor:"red"}}>

      </View>
      <View style={{width:"50%",height:200,backgroundColor:"red"}}>

</View>
<View style={{width:"50%",height:200,backgroundColor:"red"}}>

</View>

<View style={{width:"50%",height:200,backgroundColor:"red"}}>

</View>
<View style={{width:"50%",height:200,backgroundColor:"red"}}>

</View>
<View style={{width:"50%",height:200,backgroundColor:"red"}}>

</View>
<View style={{width:"50%",height:200,backgroundColor:"red"}}>

</View>
</ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    padding:20,
    gap:10,
    flex:1,
    // flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"  //if using flex wrap then use alignContent instead of align item

  },

  text: {
    

    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    padding: 10,
    // paddingVertical:7,
    // paddingHorizontal:10,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    marginTop:10,
    borderWidth:1,
    borderColor:"red",
    

  },

  buttonText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 16,

  },
});
