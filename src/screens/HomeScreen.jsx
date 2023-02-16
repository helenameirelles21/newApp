import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export function HomeScreen() {
  const [nome, setNome] = useState("Fulano");
  const [altura, setAltura] = useState("1,75");
  const [peso, setPeso] = useState("110");
  return (
    <View style={styles.container}>
      <Text>Hi {nome}!</Text>
      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Text>Digite sua Altura</Text>
      <TextInput
        label="Altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      <Text>Digite seu Peso</Text>
      <TextInput
        label="Peso"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
    </View>
  );
}
