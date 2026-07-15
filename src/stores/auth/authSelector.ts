import { IAuthState } from './authStore';

export const selectUser = (state: IAuthState) => state.user;
