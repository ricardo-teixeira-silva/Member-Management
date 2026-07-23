export interface Member {
  id: string;
  user_id: string;
  name: string;
  photo: string | null;
  position: string;
  sex: string;
  church: string;
  birthDate: string;
  baptismDate: string;
  ordinationDate: string;
}

export interface MemberWithPhoto extends Member {
  photoUrl: string;
}
