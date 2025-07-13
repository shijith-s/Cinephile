import { Stack } from "expo-router";
import "./global.css";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-primary">
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
      </Stack>
    </View>
  );
}
