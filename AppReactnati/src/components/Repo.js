import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Repo = (props) => {
  const { item } = props;
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigate.navigate("Repo", { repo: item });
      }}
    >
      
      <Text>id :{item.id}</Text>
      <Text style={styles.repoNameText}>Nom :{item.name}</Text>
      <Text style={styles.languageText}>Langage :{item.language || "No language"}</Text>
      <Text>visibilit√©: {item.visibility}</Text>
      <Text>Open issues: {item.open_issues_count}</Text>
      <View style={styles.horizontalLine} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
  repoNameText: {
    fontWeight: "bold",
  },
  languageText: {
    color: "blue",
    fontWeight: "bold",
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#bbb",
  },
});

export default Repo;
