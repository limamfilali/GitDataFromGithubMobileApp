import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Repo from "../components/Repo";

const RepoScreen = (props) => {
  const { repo } = props.route.params;

  return (
    <View>
      <Repo item={repo} />
      <Text style={{color:"red"}}>Autres propriéties :</Text>
      <Text>visibilité: {repo.visibility}</Text>
    </View>
  );
};

export default RepoScreen;
