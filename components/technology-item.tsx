// components/TechnologyItem.tsx
import { Colors } from "@/constants/colors";
import { Technology } from "@/constants/mockData";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TechnologyItemProps {
  technology: Technology;
  onPress: (technology: Technology) => void;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({
  technology,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(technology)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{technology.icon}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{technology.name}</Text>
          <View>
            <Text style={styles.difficultyText}>{technology.difficulty}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {technology.description}
        </Text>
      </View>

      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  difficultyText: {
    fontSize: 12,
    color: Colors.surface,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    color: Colors.textLight,
    lineHeight: 18,
  },
  arrow: {
    fontSize: 16,
    color: Colors.textLight,
    marginLeft: 10,
  },
});
