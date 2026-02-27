import { Link } from "expo-router";

import { WelcomeCard } from "@/components/welcome-card";
import { Colors } from "@/constants/colors";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const handleGetStarted = () => {
    Alert.alert("¡Genial!", "He completado mi primer componente React Native", [
      { text: "Continuar", style: "default" },
    ]);
  };

  return (
    <View style={styles.container}>
      <WelcomeCard
        userName="Carlos José Mantilla Cote"
        onGetStarted={handleGetStarted}
      />

      <Link href="/about" style={styles.linkButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ir a Acerca De →</Text>
        </View>
      </Link>

      <Link href="/technologies" style={styles.linkButton}>
        <View style={[styles.button, styles.buttonSecondary]}>
          <Text style={[styles.buttonText, styles.buttonSecondaryText]}>
            Ver Tecnologías →
          </Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
  },
  linkButton: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  buttonSecondaryText: {
    color: Colors.primary,
  },
});
