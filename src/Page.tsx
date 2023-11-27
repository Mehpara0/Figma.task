import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native"
function Card (){
    return(
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
              <Image source={require('./assets/images/Group.png')}/>
              <Text style={styles.text}>Credit / Debit Card</Text>
            </View>
            <View>
            <Image source={require('./assets/images/Card.png')}/>
            </View>
            <View style={styles.camera}>
            <Image source={require('./assets/images/photo.png')}/>
            </View>
            <View style={styles.small}>
            <View>
              <Text style={styles.text1}>Name on card</Text>
            </View>
            <View style={styles.names}>
              <Text style={styles.name}>Mamedova Mehpara</Text>
            </View>
            <View>y
              <Text style={styles.text2}>Card number</Text>
            </View>
            <View style={styles.numbers}>
              <Text style={styles.number}>4242 4242 4242 4242</Text>
            </View>
            </View>
            <View style={styles.medium}>
            <View style={styles.left}>
            <View>
              <Text style={styles.text3}>Expiry date</Text>
            </View>
            <View style={styles.dates}>
              <Text style={styles.date}>04/22</Text>
            </View>
            </View>
            <View style={styles.right}>
            <View>
              <Text style={styles.text4}>CVC</Text>
            </View>
            <View style={styles.CVCs}>
              <Text style={styles.CVC}>474 <Image source={require('./assets/images/Hint.png')}/></Text>
            </View>
            </View>
            </View>
        </SafeAreaView>
    )
}
export default Card

const styles=StyleSheet.create({
    area:{
      flex:1,
    },
    header:{
      flexDirection:"row",
      marginTop:50,
      marginLeft:35,
      alignItems:"center",
    },
    text:{
      marginLeft:22,
      lineHeight:28,
      fontSize:22,
      color:"black",
      fontWeight:"600",
      
    },
    camera:{
      alignSelf:"center",
    },
    text1:{
      fontSize:14,
      fontWeight:"400",
      marginLeft:24,
    },
    names:{
      flex:0.6,
      borderWidth:1,
      justifyContent:"center",
      marginLeft:24,     
      marginTop:5,     
      borderRadius:10,
      borderColor:"grey",
      width:"86%",
    },
    name:{
      fontSize:16,
      marginLeft:10,
    },
    text2:{
      marginLeft:24,
      marginTop:8,
      fontSize:14,
      fontWeight:"400",
      
    },
    numbers:{
      flex:0.6,
      borderWidth:1,
      marginLeft:24,
      width:"86%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    number:{
      fontSize:16,
      marginLeft:10,
    },
    small:{
      height:120,
    },
    text3:{
      fontSize:14,
      marginLeft:24,
      marginTop:8, 
      fontWeight:"400",
    },
    dates:{
      flex:0.6,
      borderWidth:1,
      marginLeft:24,
      width:"80%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    date:{
      fontSize:18,
      marginLeft:10,
    },
    text4:{
      fontSize:14,
      fontWeight:"400",
      marginLeft:4,
      marginTop:8,
    },
    CVCs:{
      flex:0.6,
      borderWidth:1,
      marginLeft:5,
      width:"80%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    CVC:{
      fontSize:18,
      marginLeft:10,
    },
    medium:{
      flexDirection:"row",
      justifyContent:"space-between",
      height:120,
    },
    left:{
      width:"50%"
    },
    right:{
      width:"50%",
    }
})