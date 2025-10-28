export interface loginrequest {
  username: string;
  password: string;
}

export interface loginresponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface loginstate {
  isLoading: boolean;
  error: string | null;
}
