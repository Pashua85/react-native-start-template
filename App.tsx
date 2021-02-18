import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ImageStyle,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  ActivityIndicator,
  StatusBar,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";



interface IStyles {
  container: ViewStyle;
  textStyle: TextStyle;
  largeText: TextStyle;
}

const App: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, styles.largeText]}>
        Start-template
      </Text>
    </View>
  );
};

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  textStyle: {
    textAlign: "center",
    ...Platform.select({
      ios: {
        fontFamily: "AvenirNext-Regular",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  largeText: {
    fontSize: 44,
  }
});

export default App;
