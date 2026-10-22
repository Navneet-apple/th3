import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { catalog } from "../../src/data/catalog";
import { useWatchlist } from "../../src/state/watchlist";
import { theme } from "../../src/ui/theme";

export default function AnimeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const anime = catalog.find((item) => item.id === id);
  const { ids, toggle } = useWatchlist();

  if (!anime) return <View style={styles.page}><Text style={styles.title}>Title not found</Text></View>;
  const saved = ids.includes(anime.id);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Stack.Screen options={{ title: anime.title }} />
      <View style={styles.art}><Text style={styles.monogram}>{anime.title.split(" ").map((part) => part[0]).join("")}</Text></View>
      <Text style={styles.title}>{anime.title}</Text>
      <Text style={styles.meta}>{anime.year} · {anime.status} · {anime.episodes} episodes</Text>
      <Text style={styles.genres}>{anime.genres.join("  ·  ")}</Text>
      <Text style={styles.synopsis}>{anime.synopsis}</Text>
      <Pressable accessibilityRole="button" onPress={() => toggle(anime.id)} style={styles.button}>
        <Text style={styles.buttonText}>{saved ? "Remove from My List" : "Add to My List"}</Text>
      </Pressable>
      <Text style={styles.notice}>Episode listings and playback are not part of this starter yet.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, gap: 12 },
  art: { height: 230, alignItems: "center", justifyContent: "center", backgroundColor: theme.surfaceRaised, borderRadius: 18, marginBottom: 10 },
  monogram: { color: theme.accent, fontSize: 54, fontWeight: "900", letterSpacing: 4 },
  title: { color: theme.text, fontSize: 26, fontWeight: "800" },
  meta: { color: theme.muted },
  genres: { color: theme.accent, fontWeight: "600", marginTop: 4 },
  synopsis: { color: theme.text, fontSize: 16, lineHeight: 24, marginTop: 8 },
  button: { backgroundColor: theme.accent, borderRadius: 12, alignItems: "center", padding: 14, marginTop: 8 },
  buttonText: { color: "#161321", fontSize: 15, fontWeight: "800" },
  notice: { color: theme.muted, fontSize: 13, lineHeight: 19, marginTop: 6 },
});
