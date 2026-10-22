import { Pressable, StyleSheet, Text, View } from "react-native";
import { Anime } from "../data/catalog";
import { theme } from "./theme";

export function TitleCard({ anime, onPress }: { anime: Anime; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.card}>
      <View style={styles.art}>
        <Text style={styles.artLabel}>{anime.title.split(" ").map((part) => part[0]).join("")}</Text>
      </View>
      <View style={styles.copy}>
        <Text numberOfLines={1} style={styles.title}>{anime.title}</Text>
        <Text style={styles.meta}>{anime.year} · {anime.genres[0]}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { width: 154, marginRight: 12, overflow: "hidden", borderRadius: 14, backgroundColor: theme.surface },
  art: { height: 112, alignItems: "center", justifyContent: "center", backgroundColor: theme.surfaceRaised },
  artLabel: { color: theme.accent, fontSize: 30, fontWeight: "800", letterSpacing: 2 },
  copy: { padding: 12, gap: 5 },
  title: { color: theme.text, fontSize: 14, fontWeight: "700" },
  meta: { color: theme.muted, fontSize: 12 },
});
