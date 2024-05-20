"use client";
import {
	UserRoleTypes,
	authStoreAtom,
	isAuthenticatedAtom,
	logoutUserAtom,
	userAuth,
	userRoleAtom,
} from "@/atoms/authAtom";
import { useAtom } from "jotai";
import React from "react";

export default function useAuth(roles: UserRoleTypes[]) {
	const [isAuthenticated] = useAtom(isAuthenticatedAtom);
	const [role] = useAtom(userRoleAtom);
	const [, login] = useAtom(authStoreAtom);
	const [user] = useAtom(userAuth);
	const [, logout] = useAtom(logoutUserAtom);
	const access = React.useMemo(
		() =>
			roles.length > 1
				? isAuthenticated && roles.includes(role!)
				: isAuthenticated,
		[isAuthenticated, role, roles]
	);

	return {
		isAuthenticated,
		role,
		access,
		user,
		logout,
		login,
	};
}
