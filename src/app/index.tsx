import { router } from "expo-router";

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const products = [
  {
    id: 1,
    name: "Real Madrid Home Jersey",
    category: "Jerseys",
    price: 10000,
  },
  {
    id: 2,
    name: "Chelsea Away Jersey",
    category: "Jerseys",
    price: 10000,
  },
  {
    id: 3,
    name: "Nike Mercurial Boots",
    category: "Cleats",
    price: 25000,
  },
  {
    id: 4,
    name: "Football Training Gloves",
    category: "Equipment",
    price: 15000,
  },
];

export default function HomeScreen() {
  const openProduct = (name: string, price: number, category: string) => {
    router.push({
      pathname: "/product-details",
      params: {
        name,
        price: String(price),
        category,
      },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>THE LEAGUE</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => alert("Your cart is coming soon!")}
        >
          <Text style={styles.cart}>🛒</Text>
        </TouchableOpacity>
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

      {/* Products */}
      <Text style={styles.sectionTitle}>Popular Products</Text>

      <View style={styles.products}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.product}
            activeOpacity={0.6}
            onPress={() =>
              openProduct(product.name, product.price, product.category)
            }
          >
            <View style={styles.productImage}>
              <Text style={styles.imageText}>⚽</Text>
            </View>

            <Text style={styles.productName}>{product.name}</Text>

            <Text style={styles.productCategory}>{product.category}</Text>

            <Text style={styles.productPrice}>
              {product.price.toLocaleString()} FCFA
            </Text>

            <Text style={styles.viewDetails}>Tap to view details →</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111111",
  },

  cart: {
    fontSize: 25,
    padding: 5,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
    color: "#111111",
  },

  search: {
    height: 50,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#111111",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
    color: "#111111",
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
    color: "#111111",
  },

  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  product: {
    width: "48%",
    marginBottom: 24,
  },

  productImage: {
    height: 160,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    fontSize: 50,
  },

  productName: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
    color: "#111111",
  },

  productCategory: {
    fontSize: 13,
    color: "#777777",
    marginTop: 4,
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: "#111111",
  },

  viewDetails: {
    fontSize: 12,
    color: "#555555",
    marginTop: 8,
  },
});
