import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({...rest}: TextInputProps){
  return <TextInput style={styles.input} {...rest}/>
}

const styles = StyleSheet.create({
  input: {
    height: 54, 
    borderWidth: 1, 
    borderColor: "#999", 
    borderRadius: 2, 
    paddingHorizontal: 16
  }
}) 