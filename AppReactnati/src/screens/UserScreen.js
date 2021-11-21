import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import User from "../components/User";

const UserScreen = (props) => {
  const { user } = props.route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        {user ? <User user={user} /> : null}
        <Text>other stuff</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerWrapper: {
    padding: 20,
  },
});

export default UserScreen;
