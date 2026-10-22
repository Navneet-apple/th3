import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { catalog } from "../../src/data/catalog";
import { theme } from "../../src/ui/theme";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => catalog.filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase())), [query]);
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Search</Text>
      <TextInput accessibilityLabel="Search anime titles" placeholder="Search titles" placeholderTextColor={theme.muted} value={query} onChangeText={setQuery} style={styles.input} />
      {results.map((item) => (
          <Pressable key={item.id} onPress={() => router.push({ pathname: "/anime/[id]", params: { id: item.id } })} style={styles.row}>
          <View style={styles.monogram}><Text style={styles.monogramText}>{item.title.slice(0, 1)}</Text></View>
          <View style={styles.copy}><Text style={styles.title}>{item.title}</Text><Text style={styles.meta}>{item.year} · {item.genres.join(", ")}</Text></View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>
      ))}
      {results.length === 0 && <Text style={styles.empty}>No matching titles in the sample catalog.</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, paddingTop: 28, gap: 12 },
  heading: { color: theme.text, fontSize: 28, fontWeight: "800", marginBottom: 6 },
  input: { backgroundColor: theme.surface, borderColor: theme.border, borderWidth: 1, borderRadius: 12, color: theme.text, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16, marginBottom: 8 },
  row: { flexDirection: "row", alignItems: "center", gap: 12, padding: 10, backgroundColor: theme.surface, borderRadius: 12 },
  monogram: { width: 48, height: 56, borderRadius: 8, backgroundColor: theme.surfaceRaised, alignItems: "center", justifyContent: "center" },
  monogramText: { color: theme.accent, fontSize: 22, fontWeight: "800" },
  copy: { flex: 1, gap: 4 },
  title: { color: theme.text, fontWeight: "700", fontSize: 15 },
  meta: { color: theme.muted, fontSize: 12 },
  chevron: { color: theme.muted, fontSize: 24, paddingHorizontal: 8 },
  empty: { color: theme.muted, lineHeight: 22, paddingVertical: 12 },
});
