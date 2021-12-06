import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import User from "../components/User";

const UserScreen = (props) => {
  const { user } = props.route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        {user ? <User user={user} /> : null}
        <Text style={{color:"red",fontStyle:"italic",fontSize:20,marginTop:20}}> {'>'} Autres caractéristiques de {user.login} :</Text>
        <Text style={{color:"blue",fontStyle:"italic",fontSize:20,marginTop:20 , paddingLeft:16}}>le lien de leur github :{user.url}</Text>
        <Text style={{color:"blue",fontStyle:"italic",fontSize:20,marginTop:20, paddingLeft:16}}>le type d'utilisateur :{user.type}</Text>
        <Text style={{color:"blue",fontStyle:"italic",fontSize:20,marginTop:20, paddingLeft:16}}>l'email d'utilisateur :{user.email || "not exist"} </Text>
        <Text style={{color:"blue",fontStyle:"italic",fontSize:20,marginTop:20, paddingLeft:16}}>le nombre des repos public :{user.public_repos}</Text>
        <Text style={{color:"blue",fontStyle:"italic",fontSize:20,marginTop:20, paddingLeft:16}}>il est crée en :{user.created_at}</Text>
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
