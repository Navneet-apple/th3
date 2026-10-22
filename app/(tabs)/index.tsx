import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { catalog } from "../../src/data/catalog";
import { TitleCard } from "../../src/ui/TitleCard";
import { theme } from "../../src/ui/theme";

export default function DiscoverScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.eyebrow}>TH3 · CLEAN-ROOM STARTER</Text>
      <Text style={styles.heading}>Discover anime</Text>
      <Text style={styles.subheading}>A new, independent starting point for a catalog and watchlist app.</Text>
      <Text style={styles.section}>Featured</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {catalog.map((anime) => <TitleCard key={anime.id} anime={anime} onPress={() => router.push({ pathname: "/anime/[id]", params: { id: anime.id } })} />)}
      </ScrollView>
      <View style={styles.note}>
        <Text style={styles.noteTitle}>Starter data only</Text>
        <Text style={styles.noteText}>Titles and artwork here are placeholders. Connect a permitted catalog provider to show real metadata.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, paddingTop: 28, gap: 10 },
  eyebrow: { color: theme.accent, fontSize: 11, fontWeight: "800", letterSpacing: 1.5 },
  heading: { color: theme.text, fontSize: 30, fontWeight: "800", marginTop: 6 },
  subheading: { color: theme.muted, fontSize: 15, lineHeight: 22, marginBottom: 18 },
  section: { color: theme.text, fontSize: 19, fontWeight: "700", marginBottom: 4 },
  note: { marginTop: 22, padding: 16, gap: 6, backgroundColor: theme.surface, borderRadius: 14, borderWidth: 1, borderColor: theme.border },
  noteTitle: { color: theme.text, fontWeight: "700", fontSize: 15 },
  noteText: { color: theme.muted, lineHeight: 20 },
});
