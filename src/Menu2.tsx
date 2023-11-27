import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MenuContainer = (props: any) => {
  return (
    <View>
      <Text style={styles.text}>
        {'Hey Leslee,\n there’s a new course about Figma'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    paddingHorizontal: 40,
    fontWeight: '600',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
  },
});
export default MenuContainer;