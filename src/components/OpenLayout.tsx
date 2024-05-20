"use client";
import useAuth from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
	children: React.ReactNode;
};
export default function OpenLayout(props: Props) {
	const { isAuthenticated } = useAuth([]);
	const router = useRouter();
	const queryParams = useSearchParams();

	React.useEffect(() => {
		if (isAuthenticated) {
			if (queryParams.get("redirectUrl")) {
				const path = decodeURIComponent(
					queryParams.get("redirectUrl") || "/"
				);

				router.push(path);
			}
		}
	}, [isAuthenticated, queryParams, router]);

	return <React.Fragment>{props.children}</React.Fragment>;
}
