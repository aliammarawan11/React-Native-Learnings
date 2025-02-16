import { Button, StyleSheet, Text, View } from 'react-native'



const Home = ({navigation}) => {
  return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
      <Text>Home</Text>
      <Button title="Profile" onPress ={() => navigation.navigate("Profile")}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})