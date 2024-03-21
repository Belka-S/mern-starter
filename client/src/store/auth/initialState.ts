export type TUserInitialState = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  avatarUrl?: string | null;
  verifiedEmail?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
};

export const userInitialState: TUserInitialState = {
  id: '',
  name: '',
  email: '',
  verifiedEmail: '',
  accessToken: '',
  refreshToken: '',
};
