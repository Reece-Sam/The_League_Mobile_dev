import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>THE LEAGUE</Text>
        <Text style={styles.cart}>🛒</Text>
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Find your football gear</Text>

      {/* Search */}
      <TextInput
        style={styles.search}
        placeholder="Search jerseys, cleats, equipment..."
        placeholderTextColor="#888"
      />

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>

      <View style={styles.categories}>
        <View style={styles.category}>
          <Text style={styles.categoryIcon}>⚽</Text>
          <Text style={styles.categoryText}>Jerseys</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>👟</Text>
          <Text style={styles.categoryText}>Cleats</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🧤</Text>
          <Text style={styles.categoryText}>Equipment</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },

  cart: {
    fontSize: 25,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },

  search: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    width: "31%",
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryIcon: {
    fontSize: 30,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
