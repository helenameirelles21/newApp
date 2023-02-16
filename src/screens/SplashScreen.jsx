import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export const SplashScreen = ({ navigation }) => {
  // Espere 2 segundos para ir para Home Screen
  setTimeout(() => {
    navigation.navigate("Home");
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
      <ActivityIndicator animating={true} />
      <Text>Útil pra realizar checagem de variáveis etc...</Text>
    </View>
  );
};
