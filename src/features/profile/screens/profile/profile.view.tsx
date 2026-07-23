import { Button, Container } from "@/shared/componentes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MemberHeader } from "../../components/member-header";
import { MemberInfoGrid } from "../../components/member-info-grid";
import { MemberInfoRow } from "../../components/member-info-row";
import { useProfileModel } from "./profile.model";

export default function Profile() {
  const { member, header, infoRow, infoGrid, navigateToCard } =
    useProfileModel();

  if (!member) return null;
  return (
    <Container>
      <MemberHeader {...header} />
      <MemberInfoRow {...infoRow} />
      <MemberInfoGrid {...infoGrid} />
      <Button
        title="Acessar Carteirinha Digital"
        iconLeft={
          <MaterialCommunityIcons
            name="card-account-details"
            size={22}
            color="#FDB022"
          />
        }
        onPress={navigateToCard}
      />
    </Container>
  );
}
