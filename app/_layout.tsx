import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { WatchlistProvider } from "../src/state/watchlist";
import { theme } from "../src/ui/theme";

export default function RootLayout() {
  return (
    <WatchlistProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerStyle: { backgroundColor: theme.background }, headerTintColor: theme.text, contentStyle: { backgroundColor: theme.background } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="anime/[id]" options={{ title: "Title details" }} />
      </Stack>
    </WatchlistProvider>
  );
}
