import { ScrollView, StyleSheet, Text, View } from "react-native";
import { schedule } from "../../src/data/catalog";
import { theme } from "../../src/ui/theme";

export default function ScheduleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Schedule</Text>
      <Text style={styles.subheading}>Example entries only. A licensed schedule source has not been connected.</Text>
      {schedule.map((entry) => (
        <View key={`${entry.day}-${entry.title}`} style={styles.row}>
          <Text style={styles.day}>{entry.day.slice(0, 3).toUpperCase()}</Text>
          <View style={styles.copy}><Text style={styles.title}>{entry.title}</Text><Text style={styles.meta}>{entry.episode}</Text></View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, paddingTop: 28, gap: 12 },
  heading: { color: theme.text, fontSize: 28, fontWeight: "800" },
  subheading: { color: theme.muted, lineHeight: 21, marginBottom: 6 },
  row: { flexDirection: "row", alignItems: "center", gap: 14, padding: 14, backgroundColor: theme.surface, borderRadius: 12 },
  day: { color: theme.accent, width: 42, fontSize: 12, fontWeight: "800", letterSpacing: 1 },
  copy: { gap: 4 },
  title: { color: theme.text, fontWeight: "700", fontSize: 15 },
  meta: { color: theme.muted, fontSize: 12 },
});
