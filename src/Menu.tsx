import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Menu = (props: any) => {
  return (
    <View>
        <Text style={styles.menu}>{'Find out how our new matching tool can help you learn another way'}</Text>
      </View>
  );
};

const styles=StyleSheet.create({
    menu:{
        fontSize:16,
        fontWeight:'300',
        paddingHorizontal:60,
        textAlign:'center',
        marginTop:11,
        color:"black",
      },
})
export default Menu;