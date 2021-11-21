import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Repo from "./Repo";

const ReposList = (props) => {
  return (
    <View>
      {props.repos.length ? (
        <Text style={styles.repositoriesText}>Repositories</Text>
      ) : null}
      <FlatList 
        data={props.repos}
        renderItem={({ item, index }) => {
          return <Repo item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  repositoriesText: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default ReposList;
