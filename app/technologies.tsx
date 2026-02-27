import { TechnologyItem } from "@/components/technology-item";
import { Colors } from "@/constants/colors";
import { technologies, Technology } from "@/constants/mockData";
import React from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

export default function TechnologiesScreen() {
  const handleTechPress = (tech: Technology) => {
    Alert.alert(
      tech.name,
      `${tech.description}\n\nDificultad: ${tech.difficulty}`,
      [{ text: "Cerrar", style: "cancel" }],
    );
  };

  const renderItem = ({ item }: { item: Technology }) => (
    <TechnologyItem technology={item} onPress={handleTechPress} />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Tecnologías</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={technologies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textLight,
  },
});
