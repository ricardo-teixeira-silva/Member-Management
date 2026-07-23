import { Container } from "@/shared/componentes";
import { useCurrentMember } from "@/shared/store/currentMember";
import { Text, View } from "react-native";
import { MenuStats } from "../../components/menu-stats";
import { QuickActions } from "../../components/quick-actions";
import { TotalMembersCard } from "../../components/total-members-card";
import { useDashBoard } from "./dashboard.model";

export default function Dashboard() {
  const member = useCurrentMember((s) => s.member);
  const {
    totalMembers,
    membersByPosition,
    isLoadingMembers,
    totalCreatedThisMonth,
  } = useDashBoard();

  const firstName = (): string => {
    return member?.name.split(" ")[0] ?? "";
  };

  const handleGetTotalMembers = (): number => {
    if (isLoadingMembers) return 0;
    return totalMembers;
  };

  return (
    <Container>
      <View className=" gap-1 w-[80%]">
        <Text className="text-calor_darkblue text-2xl font-semibold">
          Paz do Senhor {firstName()}! Bem vindo a gestão
        </Text>
        <Text className="text-color_silver text-sm">
          Confira os dados atualizados da sua congregação hoje.
        </Text>
      </View>
      <TotalMembersCard
        total={handleGetTotalMembers()}
        growth={`+${totalCreatedThisMonth} este mês`}
      />
      <MenuStats
        totalMembers={totalMembers}
        pastors={membersByPosition["Pastor"] ?? 0}
        presbyters={membersByPosition["Presbítero"] ?? 0}
        deacons={membersByPosition["Diácono"] ?? 0}
        missionaries={membersByPosition["Missionária"] ?? 0}
      />
      <QuickActions />
    </Container>
  );
}
