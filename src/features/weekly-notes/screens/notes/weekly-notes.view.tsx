import { Button, Container } from "@/shared/componentes";
import { useExportImage } from "@/shared/hooks/useExportImage";
import { useRef } from "react";
import { Text, View } from "react-native";
import ViewShot from "react-native-view-shot";
import { WeeklyNotesCard } from "../../components/weekly-notes-card";
import { useWeeklyNotesModel } from "./weekly-notes.model";

export default function WeeklyNotes() {
  const viewRef = useRef<ViewShot>(null);

  const { exportImage } = useExportImage();
  const { goBack } = useWeeklyNotesModel();
  return (
    <Container>
      <View className="gap-1">
        <Text className="font-medium text-2xl text-[#143B8D]">
          Notas Semanais
        </Text>
        <Text className="font-inter_regular text-base leading-6 text-slate-500">
          Acompanhe a nossa programação espiritual e atividades.
        </Text>
      </View>
      <ViewShot
        ref={viewRef}
        options={{
          format: "png",
          quality: 1,
          result: "tmpfile",
        }}
      >
        <WeeklyNotesCard />
      </ViewShot>
      <Button title="Compartilhar" onPress={() => exportImage(viewRef)} />
      <Button title="Voltar" variant="outline" onPress={goBack} />
    </Container>
  );
}
