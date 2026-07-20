// RegisterNotes.tsx
import { Button, Container } from "@/shared/componentes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { DayBox } from "../../components/day-box";
import { useRegisterNotesModel } from "./register-notes.model";

export default function RegisterNotes() {
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const { saveNotes } = useRegisterNotesModel();
  const [highlightDays, setHighlightDays] = useState<Record<string, boolean>>(
    {},
  );

  const handleHighlightChange = (dayKey: string, value: boolean) => {
    setHighlightDays((prev) => ({ ...prev, [dayKey]: value }));
  };

  const onSubmit = (data: any) => {
    saveNotes(data, highlightDays);
  };

  return (
    <Container>
      <View className="gap-1">
        <Text className="font-medium text-2xl text-[#143B8D]">
          Programação Semanal
        </Text>
        <Text className="font-inter_regular text-base leading-6 text-slate-500">
          Preencha os detalhes das atividades e temas para a próxima semana da
          congregação.
        </Text>
      </View>

      <DayBox
        dayLabel="Segunda-feira"
        cultoPlaceholder="Ex: Culto de Oração"
        grupoPlaceholder="Ex: Grupo de Louvor"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <DayBox
        dayLabel="Terça-feira"
        cultoPlaceholder="Ex: Culto de Ensino"
        grupoPlaceholder="Ex: Grupo de Intercessão"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <DayBox
        dayLabel="Quarta-feira (Culto Principal)"
        cultoPlaceholder="Culto de Oração e Doutrina"
        grupoPlaceholder="Ex: Diaconato"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <DayBox
        dayLabel="Quinta-feira"
        cultoPlaceholder="Ex: Culto de Libertação"
        grupoPlaceholder="Ex: Grupo de Mulheres"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <DayBox
        dayLabel="Sexta-feira"
        cultoPlaceholder="Ex: Vigília"
        grupoPlaceholder="Ex: Célula"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <DayBox
        dayLabel="Sábado"
        cultoPlaceholder="Ex: Encontro de Jovens"
        grupoPlaceholder="Ex: Ensaios"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <DayBox
        dayLabel="Domingo (Dia do Senhor)"
        cultoPlaceholder="Ex: Escola Dominical"
        grupoPlaceholder="Ex: Culto de Celebração"
        control={control}
        onHighlightChange={handleHighlightChange}
      />

      <Button title="Salvar Programação" onPress={handleSubmit(onSubmit)} />
      <Button title="Cancelar" />
    </Container>
  );
}
