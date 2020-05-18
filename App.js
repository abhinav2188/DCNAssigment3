import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Bluetooth Finder</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex:1,
    padding:16,
    backgroundColor:"#191933",
    color:"#fff",
  },
  heading:{
    marginTop:24,
    fontSize:24,
    textAlign:"center",
    color:"#fff"
  }
});