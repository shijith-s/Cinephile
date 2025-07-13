import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
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
    </>
  );
}
