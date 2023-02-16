import { RootNavigator } from "./src/navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { darkTheme, defaultTheme } from "./src/utils/theme";

export default function App() {
  const theme = useColorScheme() ? darkTheme : defaultTheme;

  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}
