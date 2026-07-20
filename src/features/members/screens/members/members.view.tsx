import { Button, Container } from "@/shared/componentes";
import React, { useRef } from "react";
import { FlatList, Text, View } from "react-native";
import { ProfileCard } from "../../components/profile-card";
import { generateMemberPDF } from "../../pdf/generateMemberPDF";
import { useMembers } from "./members.model";

import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";

const membro = {
  name: "João Silva",
  role: "Presbítero",
  age: 35,
  phone: "(11) 99999-9999",
  email: "joao@email.com",
  baptism: "15/04/2018",

  photo: "https://i.pravatar.cc/300?img=12",

  church: {
    name: "Igreja Batista Central",
    logo: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
};

export default function Members() {
  const { members, isLoadingMembers } = useMembers();

  const viewRef = useRef<ViewShot>(null);

  if (isLoadingMembers) {
    return <Text>Loading...</Text>;
  }

  // 📸 EXPORTAR TELA INTEIRA
  const exportImage = async () => {
    try {
      if (!viewRef.current?.capture) {
        console.log("ViewShot não disponível");
        return;
      }
      const uri = await viewRef.current.capture();

      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error("Erro ao exportar:", error);
    }
  };

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
        <Button title="pdf" onPress={() => generateMemberPDF(membro)} />
        <Button title="Exportar tela inteira (PNG)" onPress={exportImage} />
        <ViewShot
          ref={viewRef}
          options={{ format: "png", quality: 1, result: "tmpfile" }}
          style={{ backgroundColor: "#fff" }}
        >
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

          <ProfileCard
            name="Betania Silva Souza"
            position="Missionária"
            url="https://i.pravatar.cc/150?img=5"
            sex="Feminino"
          />
          <ProfileCard
            name="Claudio Silva"
            position="Presbítero"
            url="https://i.pravatar.cc/150?img=53"
            sex="Masculino"
          />
          <ProfileCard
            name="Adriano Santos"
            position="Presbítero"
            url="https://i.pravatar.cc/150?img=54"
            sex="Masculino"
          />
        </ViewShot>
        <ProfileCard
          name="Pr. Arnaldo"
          position="Pastor local"
          url="https://i.pravatar.cc/150?img=55"
          sex="Masculino"
        />
        <ProfileCard
          name="Pr. Anderson"
          position="Pastor"
          url="https://i.pravatar.cc/150?img=56"
          sex="Masculino"
        />
        <ProfileCard
          name="Claudio Silva"
          position="Presbítero"
          url="https://i.pravatar.cc/150?img=18"
          sex="Masculino"
        />
        <ProfileCard
          name="Adriano Santos"
          position="Presbítero"
          url="https://i.pravatar.cc/150?img=18"
          sex="Masculino"
        />
      </View>
    </Container>
  );
}
