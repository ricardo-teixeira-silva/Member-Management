export interface Member {
  id: number;
  name: string;
  position: string;
  photo: string | null;
  photoUrl: string;
  sex: string;
  church: string;
  created_at: string;
  birthDate: string;
  baptismDate: string;
  ordinationDate: string;
}

export type RegisterFormData = {
  photo?: string;
  name: string;
  church: string;
  position: string;
  sexo: string;
  birthDate: Date | null;
  baptismDate: Date | null;
  ordinationDate: Date | null;
};
