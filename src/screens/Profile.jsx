import { StyleSheet, Text, View,Button } from 'react-native'


const Profile = ({navigation,route}) => {
   const {id, name} = route.params 
  return (
    <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
      <Text>Profile</Text>
      <Text>ID: {id}, Name :{name}</Text>
      <Button title="Search" onPress ={() => navigation.navigate("Search")}></Button>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})