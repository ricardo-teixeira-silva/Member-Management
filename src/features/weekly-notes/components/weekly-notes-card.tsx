import { useWeeklyNotesStore } from "@/shared/store/weeklyNotes";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { WeeklyNoteItem } from "./weekly-note-item";

export const WeeklyNotesCard = () => {
  const notes = useWeeklyNotesStore((state) => state.notes);

  return (
    <View className="rounded-[28px] bg-[#23408E] p-6 shadow-lg gap-2">
      <View className="gap-1">
        <View className="flex-row">
          <View className="mr-4 h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <Feather name="calendar" size={34} color="#FFF" />
          </View>
          <View className="flex-1">
            <Text className="font-inter_bold text-3xl text-white">
              Notas Semanais
            </Text>
            <Text className="text-base text-blue-200">
              Igreja Missionária Livre dos Apóstolos
            </Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <Feather name="clock" size={18} color="#FFFFFF" />
          <Text className="ml-3 py-2 font-inter_medium text-sm text-white">
            Válido: 22 a 28 de Outubro
          </Text>
        </View>
      </View>
      <View className="rounded-2xl border border-dashed border-white/20">
        {notes.length === 0 ? (
          <Text className="text-center font-inter_medium text-base text-blue-200">
            Eventos serão adicionados aqui...
          </Text>
        ) : (
          notes
            .filter((note) => note.title && note.subtitle) // só exibe se ambos tiverem valor
            .map((note, index) => (
              <WeeklyNoteItem
                key={index}
                day={note.day}
                weekDay={note.weekDay}
                title={note.title}
                subtitle={note.subtitle}
                highlight={note.highlight}
              />
            ))
        )}
      </View>
    </View>
  );
};

/*
          <View className="">
            <WeeklyNoteItem
              day="2ª"
              weekDay="FEIRA"
              title="Ensaio com o grupo Rosa de Saron"
              subtitle="Grupo Feminino"
            />

            <WeeklyNoteItem
              day="3ª"
              weekDay="FEIRA"
              title="Culto de Ensino"
              subtitle="19:30 • Templo Sede"
            />

            <WeeklyNoteItem
              day="4ª"
              weekDay="FEIRA"
              title="Ensaio do Grupo Louvor Celeste"
              subtitle="Louvor & Adoração"
            />

            <WeeklyNoteItem
              highlight
              day="5ª"
              weekDay="FEIRA"
              title="3º dia da campanha de restauração"
              subtitle="Tema: 1 Reis cap. 18:30"
            />

            <WeeklyNoteItem
              day="6ª"
              weekDay="FEIRA"
              title="Confraternização do Rosa de Saron"
              subtitle="Salão Social"
            />

            <WeeklyNoteItem
              day="SAB"
              weekDay="FIM SEM"
              title="Culto de Jovens Louvor Celeste"
              subtitle="19:00 • Templo Sede"
            />

            <WeeklyNoteItem
              day="DOM"
              weekDay="CELEBRE"
              title="Culto de Varões Cristo Reina"
              subtitle="18:30 • Culto de Adoração"
            />
          </View>

*/
