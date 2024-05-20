"use client";
import { UserRoleTypes } from "@/atoms/authAtom";
import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
    roles: UserRoleTypes[];
    children: React.ReactNode;
};

export default function ProtectedPage(props: Props) {
	const { isAuthenticated, access, logout } = useAuth(props.roles);
	const router = useRouter();
	const pathName = usePathname();

	React.useEffect(() => {
		if (!isAuthenticated) {
			logout();
			const ToUrl = "/login?redirectUrl=" + encodeURIComponent(pathName);

			return router.push(ToUrl);
		}
		if (!access) {
			return router.push("/");
		}
	}, [access, isAuthenticated, logout, pathName, router]);

	return <React.Fragment>{props.children}</React.Fragment>;
}
