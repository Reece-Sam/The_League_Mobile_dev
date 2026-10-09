import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProductDetailsScreen() {
  const { name, price, category } = useLocalSearchParams<{
    name: string;
    price: string;
    category: string;
  }>();

  const [selectedVersion, setSelectedVersion] = useState("Fan Version");

  const isCleats = category?.toLowerCase() === "cleats";
  const isJersey = category?.toLowerCase() === "jerseys";

  const [selectedSize, setSelectedSize] = useState(isCleats ? "40" : "M");

  const sizes = isCleats
    ? ["40", "41", "42", "43", "44", "45"]
    : ["S", "M", "L", "XL", "XXL"];

  // Jersey prices
  const fanPrice = 10000;
  const playerPrice = 12000;

  // Display the selected jersey price or the original price for other products.
  const currentPrice = isJersey
    ? selectedVersion === "Player Version"
      ? playerPrice
      : fanPrice
    : Number(price) || 0;

  return (
    <ScrollView style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back to products</Text>
      </TouchableOpacity>

      {/* Product image placeholder */}
      <View style={styles.imageContainer}>
        <Text style={styles.image}>⚽</Text>
      </View>

      <Text style={styles.category}>{category}</Text>

      <Text style={styles.name}>{name}</Text>

      {/* Jersey version selection */}
      {category?.toLowerCase() === "jerseys" && (
        <>
          <Text style={styles.sectionTitle}>Choose Jersey Version</Text>

          <View style={styles.versions}>
            <TouchableOpacity
              style={[
                styles.versionCard,
                selectedVersion === "Fan Version" && styles.selectedVersion,
              ]}
              onPress={() => setSelectedVersion("Fan Version")}
            >
              <Text style={styles.versionName}>Fan Version</Text>

              <Text style={styles.versionDescription}>
                Comfortable fit for everyday supporters.
              </Text>

              <Text style={styles.versionPrice}>
                {fanPrice.toLocaleString()} FCFA
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.versionCard,
                selectedVersion === "Player Version" && styles.selectedVersion,
              ]}
              onPress={() => setSelectedVersion("Player Version")}
            >
              <Text style={styles.versionName}>Player Version</Text>

              <Text style={styles.versionDescription}>
                Athletic fit inspired by professional match jerseys.
              </Text>

              <Text style={styles.versionPrice}>
                {playerPrice.toLocaleString()} FCFA
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* Current price */}
      <Text style={styles.price}>{currentPrice.toLocaleString()} FCFA</Text>

      {/* Description */}
      <Text style={styles.sectionTitle}>Description</Text>

      <Text style={styles.description}>
        {category?.toLowerCase() === "jerseys"
          ? selectedVersion === "Player Version"
            ? "Choose the Player Version for an athletic fit inspired by professional football jerseys."
            : "Choose the Fan Version for a comfortable jersey suitable for supporting your favourite team."
          : "Discover quality football gear from THE LEAGUE, designed for football lovers."}
      </Text>

      {/* Size selection */}
      <Text style={styles.sectionTitle}>Choose Size</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[styles.size, selectedSize === size && styles.selectedSize]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && styles.selectedSizeText,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add to cart */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          alert(
            `Product: ${name}\n` +
              `Version: ${selectedVersion}\n` +
              `Size: ${selectedSize}\n` +
              `Price: ${currentPrice.toLocaleString()} FCFA\n\n` +
              "We'll connect this to your cart next!",
          )
        }
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 60,
  },

  back: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333333",
  },

  imageContainer: {
    height: 250,
    backgroundColor: "#f3f3f3",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    fontSize: 100,
  },

  category: {
    color: "#777777",
    marginTop: 20,
    fontSize: 14,
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 12,
  },

  versions: {
    gap: 12,
  },

  versionCard: {
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 12,
    padding: 15,
  },

  selectedVersion: {
    borderColor: "#111111",
    borderWidth: 2,
    backgroundColor: "#f5f5f5",
  },

  versionName: {
    fontSize: 17,
    fontWeight: "bold",
  },

  versionDescription: {
    color: "#666666",
    fontSize: 13,
    marginTop: 6,
    lineHeight: 19,
  },

  versionPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  description: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 23,
  },

  sizes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  size: {
    width: 48,
    height: 45,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  selectedSize: {
    backgroundColor: "#111111",
    borderColor: "#111111",
  },

  sizeText: {
    fontSize: 16,
    fontWeight: "600",
  },

  selectedSizeText: {
    color: "#ffffff",
  },

  button: {
    backgroundColor: "#111111",
    padding: 17,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
