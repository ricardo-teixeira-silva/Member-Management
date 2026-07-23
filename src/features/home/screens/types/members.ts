export interface Member {
  id: number;
  name: string;
  position: string;
  photo: string | null;
  photoUrl: string;
  sex: string;
  church: string;
  created_at: string;
}

export type MembersByPosition = {
  Presbítero: number;
  Pastor: number;
  Diácono: number;
  Missionária: number;
};
