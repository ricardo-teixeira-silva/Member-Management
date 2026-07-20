export interface Member {
  id: string;
  user_id: string;
  name: string;
  photo: string | null;
  position: string;
  church: string;
}

export interface MemberWithPhoto extends Member {
  photoUrl: string;
}
