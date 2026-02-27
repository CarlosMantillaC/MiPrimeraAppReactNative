// components/WelcomeCard.tsx
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/colors";

interface WelcomeCardProps {
  userName: string;
  onGetStarted: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  userName,
  onGetStarted,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola Mundo!</Text>
      <Text style={styles.subtitle}>Por {userName}</Text>
      <Text style={styles.description}>
        Esta es mi primera aplicación React Native con Expo Router.
      </Text>

      <TouchableOpacity style={styles.button} onPress={onGetStarted}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 20,
    margin: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
});
