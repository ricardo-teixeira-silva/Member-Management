import { Container } from "@/shared/componentes";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { ProfileCard } from "../../components/profile-card";
import { useMembers } from "./members.model";

export default function Members() {
  const { members, isLoadingMembers } = useMembers();

  if (isLoadingMembers) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <View className=" gap-1 w-[80%]">
        <Text className="text-color_darkblue text-2xl font-semibold">
          Lista de Membros
        </Text>
        <Text className="text-color_silver text-sm">
          Gestão de fiéis e liderança
        </Text>
      </View>
      <View className="gap-4">
        <FlatList
          data={members}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProfileCard
              name={item.name}
              position={item.position}
              url={item.photoUrl}
              sex={item.sex}
            />
          )}
        />
      </View>
    </Container>
  );
}
