import { ProfileCard } from "@/features/members/components/profile-card";
import { Button, Container } from "@/shared/componentes";
import { exportImage } from "@/shared/utils/functions/export-image";
import React, { useRef } from "react";
import { FlatList, Text, View } from "react-native";
import ViewShot from "react-native-view-shot";
import { generateMemberPDF } from "../pdf/generateMemberPDF";
import { useAttendance } from "./attendance.model";

const membro = {
  name: "Claudio Roberto Silva",
  role: "Presbítero",
  age: 35,
  phone: "(11) 99999-9999",
  email: "joao@email.com",
  baptism: "15/04/2018",

  photo:
    "https://pqhaqmgrwfkaprmxhnbw.supabase.co/storage/v1/object/public/member-photos/claudio_presbitero.png",

  church: {
    name: "Igreja Missionária Livre dos Apóstolos",
    logo: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
};

export default function Attendance() {
  const {
    members,
    isLoadingMembers,
    selectedMembers,
    togglePresence,
    saveAttendance,
  } = useAttendance();

  const viewRef = useRef<ViewShot>(null);

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
                checked={selectedMembers.includes(item.id)}
                onPress={() => togglePresence(item.id)}
              />
            )}
          />
        </ViewShot>
        <View className="gap-4 mt-20">
          <Button title="Salvar lista de presença" onPress={saveAttendance} />
          <Button
            title="Compartilhar lista de presença .pdf"
            onPress={() => generateMemberPDF(membro)}
          />
          <Button
            title="Exportar tela inteira (PNG)"
            onPress={() => exportImage(viewRef)}
          />
        </View>
      </View>
    </Container>
  );
}
