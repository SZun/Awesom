import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";

export class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.contianer,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <Text>SideDrawer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;
