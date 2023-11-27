import React from "react";
import {SafeAreaView, View, Text,Image, StyleSheet,TouchableOpacity} from "react-native";
import HeaderContainer from "./HeaderContainer";
import ButtonContainer from "./ButtonContainer";
import MenuContainer from "./MenuContainer";
import Menu from "./Menu";

function App(){
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Image source={require('./assets/icons/bust.png')}/>
      </View> 
      <HeaderContainer/>
      <View>
        <Text style={styles.text}>{'Hey Leslee,\n there’s a new course about Figma'}</Text>
      </View>
      <MenuContainer/>
      <View>
        <Text style={styles.menu}>{'Find out how our new matching tool can help you learn another way'}</Text>
      </View>
      <Menu/>
      <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.word}>Discover The Course</Text>
        </TouchableOpacity>
      </View>
      <ButtonContainer/>
       <View>
        <Text style={styles.end}>Not now</Text>
      </View>
    </SafeAreaView>
  );
};
export default App 

const styles=StyleSheet.create({
  area:{
    flex:1,
  },
  header:{
    alignItems:"center",
    marginTop: 24,
  },
  text:{
    fontSize:22,
    paddingHorizontal:40,
    fontWeight:'600',
    alignItems: 'center',
    color: "black",
    textAlign: 'center'
  },
  menu:{
    fontSize:16,
    fontWeight:'300',
    marginTop:11,
    paddingHorizontal:60,
    textAlign:'center',
    color:"black",
  },
  button: {
    alignSelf:'center',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 22,
    marginTop:67,
    width:284,
    borderRadius:10
  },
  word:{
    color:"white",
  },
  end: {
    fontSize:16,
    marginTop:30,
    justifyContent:'center',
    color:"grey",
    textAlign:'center',    
  },
});