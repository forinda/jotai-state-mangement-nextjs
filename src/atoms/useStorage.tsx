"use client";

import { isClient } from "@/utils/isClient";

export type TokenType = {
	access_token: string;
	refresh_token: string;
};

type LocalStorageKeyType = "cart-8884990dfffdc-23" | "aut-rt-esddsmkdjs-sed";

export function appStorage() {
	const setStorage = <Key extends LocalStorageKeyType>(
		name: Key,
		value: string
	) => {
		if (isClient()) {
			localStorage.setItem(name, value as string);
		}
	};

	const getStorage = <T = any,>(name: LocalStorageKeyType): T => {
		if (isClient()) {
			const value = localStorage.getItem(name as string)!;

			return value as T;
		}

		return "{}" as T;
	};
	const removeKey = <K extends LocalStorageKeyType>(key: K) => {
		if (isClient()) {
			localStorage.removeItem(key as string);
		}
	};

	return { setStorage, getStorage, removeKey };
}
