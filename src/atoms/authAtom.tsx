"use client";
import { atom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { TokenType, appStorage } from "./useStorage";

export type UserRoleTypes = "BUYER" | "ADMIN" | "SHIPPING_AGTENT";
type User = {
  name: string;
  email: string;
  is_active: boolean;
  role: UserRoleTypes;
};

type AuthState = {
  tokens?: TokenType;
  user?: User;
};

const initialState = (
  appStorage().getStorage("aut-rt-esddsmkdjs-sed")
  	? JSON.parse(appStorage().getStorage("aut-rt-esddsmkdjs-sed")!)
  	: { tokens: { access_token: "", refresh_token: "" } }
) as AuthState;

const authStorage = appStorage().getStorage<AuthState>("aut-rt-esddsmkdjs-sed");

const authAtom = atom<AuthState | null>(initialState);

export const authStoreAtom = atom(
	authStorage,
	(_get, set, update: AuthState) => {
		console.log("authStoreAtom", { update });

		set(authAtom, update);
		appStorage().setStorage("aut-rt-esddsmkdjs-sed", JSON.stringify(update));
	}
);

// Want derived is_authenticated value
export const isAuthenticatedAtom = atom((get) => {
	const state = get(authAtom);

	if (!state || !state.tokens) return false;
	const { access_token } = state!.tokens!;

	if (!access_token) return false;
	// Add more checks here with jwt-decode
	const decodedToken = jwtDecode(access_token!);

	if (decodedToken) {
		const currentTime = new Date().getTime() / 1000;

		if (decodedToken.exp! < currentTime) {
			return false;
		}

		return !!access_token;
	}

	return !!access_token;
});

export const userRoleAtom = atom((get) => {
	const state = get(authAtom);
	const { user } = state!;

	if (user) {
		return user.role;
	}

	return null;
});

export const userAuth = atom((get) => {
	const state = get(authAtom);
	const { user } = state!;

	if (user) {
		return user;
	}

	return null;
});

export const logoutUserAtom = atom(authStorage, (_get, set) => {
	set(authAtom, {} as AuthState);
	appStorage().removeKey("aut-rt-esddsmkdjs-sed");
});
