import { Tabs } from "expo-router";
import { theme } from "../../src/ui/theme";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.accent,
      tabBarInactiveTintColor: theme.muted,
      tabBarStyle: { backgroundColor: theme.surface, borderTopColor: theme.border },
      sceneStyle: { backgroundColor: theme.background },
    }}>
      <Tabs.Screen name="index" options={{ title: "Discover", tabBarLabel: "Discover" }} />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarLabel: "Search" }} />
      <Tabs.Screen name="library" options={{ title: "My List", tabBarLabel: "My List" }} />
      <Tabs.Screen name="schedule" options={{ title: "Schedule", tabBarLabel: "Schedule" }} />
    </Tabs>
  );
}
