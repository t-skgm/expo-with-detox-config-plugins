import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container} testID="main">
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="show Hello"
        onPress={() => {
          setShow(true);
        }}
        testID="hello_button"
      />
      {show && <Text>Hello!!!</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
