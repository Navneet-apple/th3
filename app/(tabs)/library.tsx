import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { catalog } from "../../src/data/catalog";
import { useWatchlist } from "../../src/state/watchlist";
import { theme } from "../../src/ui/theme";

export default function LibraryScreen() {
  const { ids } = useWatchlist();
  const saved = catalog.filter((item) => ids.includes(item.id));
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>My List</Text>
      <Text style={styles.subheading}>Your saved titles live here for this session.</Text>
      {saved.map((item) => (
        <Pressable key={item.id} onPress={() => router.push({ pathname: "/anime/[id]", params: { id: item.id } })} style={styles.row}>
          <View style={styles.monogram}><Text style={styles.initial}>{item.title.slice(0, 1)}</Text></View>
          <View style={styles.copy}><Text style={styles.title}>{item.title}</Text><Text style={styles.meta}>{item.status} · {item.episodes} episodes</Text></View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      ))}
      {saved.length === 0 && <Text style={styles.empty}>Your list is empty. Open a title and save it to see it here.</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, paddingTop: 28, gap: 12 },
  heading: { color: theme.text, fontSize: 28, fontWeight: "800" },
  subheading: { color: theme.muted, lineHeight: 21, marginBottom: 6 },
  row: { flexDirection: "row", alignItems: "center", gap: 12, padding: 10, backgroundColor: theme.surface, borderRadius: 12 },
  monogram: { width: 48, height: 56, borderRadius: 8, backgroundColor: theme.surfaceRaised, alignItems: "center", justifyContent: "center" },
  initial: { color: theme.accent, fontSize: 22, fontWeight: "800" },
  copy: { flex: 1, gap: 4 },
  title: { color: theme.text, fontWeight: "700", fontSize: 15 },
  meta: { color: theme.muted, fontSize: 12 },
  chevron: { color: theme.muted, fontSize: 24, paddingHorizontal: 8 },
  empty: { color: theme.muted, lineHeight: 22, paddingVertical: 12 },
});
