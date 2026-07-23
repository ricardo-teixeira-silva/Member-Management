import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { QuickActionItem } from "./quick-actions-item";

export interface QuickActionProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export const QuickActions = () => {
  return (
    <View className="gap-5">
      <Text className="text-xl font-inter_bold text-slate-900">
        Ações rápidas
      </Text>
      <View className="flex-row flex-wrap justify-between gap-y-4">
        <QuickActionItem
          title="Cadastrar Membro"
          icon={<Feather name="user-plus" size={30} color="#2563EB" />}
          onPress={() => router.navigate("/(tabs)/register")}
        />
        <QuickActionItem
          title="Lista de Presença"
          icon={
            <MaterialCommunityIcons
              name="clipboard-check-outline"
              size={30}
              color="#16A34A"
            />
          }
          onPress={() => router.navigate("/(tabs)/attendance")}
        />
        <QuickActionItem
          title="Criar Notas Semanais"
          icon={
            <Ionicons name="document-text-outline" size={30} color="#D97706" />
          }
          onPress={() => router.navigate("/(stack)/register-notes")}
        />
        <QuickActionItem
          title="Lista de Membros"
          icon={
            <MaterialCommunityIcons
              name="account-group-outline"
              size={30}
              color="#7C3AED"
            />
          }
          onPress={() => router.navigate("/(tabs)/members")}
        />
      </View>
    </View>
  );
};
