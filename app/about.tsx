// app/about.tsx
import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Acerca De Mi App</Text>

        <View style={styles.infoCard}>
          <Text style={styles.subtitle}>Mi Primera App React Native</Text>
          <Text style={styles.description}>
            Esta aplicación fue creada el 26 de febrero de 2026.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.subtitle}>Tecnologías Utilizadas</Text>
          <Text style={styles.description}>
            • React Native{"\n"}• Expo Router{"\n"}• TypeScript{"\n"}•
            File-based Routing{"\n"}• StyleSheet
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.subtitle}>Desarrollado por</Text>
          <Text style={styles.description}>
            Carlos José Mantilla Cote{"\n"}
            Estudiante de Ingeniería de Software{"\n"}
            FESC
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 20,
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: Colors.surface,
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
});
