"use client";
import ProtectedPage from "@/components/ProtectedPage";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
	children: React.ReactNode;
};
function DashboardLayout(props: Props) {
	const { user, logout } = useAuth(["ADMIN"]);

	return (
		<ProtectedPage roles={[]}>
			<div className="bg-white flex gap-2 ">
				<div className="flex flex-col w-64 h-screen border-r bg-white">
					<div className="border-b w-full py-4 flex justify-center flex-col items-center bg-gray-50">
						<div className="h-16 w-16 bg-neutral-400 rounded-full overflow-hidden mb-2">
							<Image
								height={100}
								width={100}
								className="w-full h-full object-cover"
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIyOS4xOSAyMTNjLTE1LjgxLTI3LjMyLTQwLjYzLTQ2LjQ5LTY5LjQ3LTU0LjYyYTcwIDcwIDAgMSAwLTYzLjQ0IDBDNjcuNDQgMTY2LjUgNDIuNjIgMTg1LjY3IDI2LjgxIDIxM2E2IDYgMCAxIDAgMTAuMzggNmMxOS4yMS0zMy4xOSA1My4xNS01MyA5MC44MS01M3M3MS42IDE5LjgxIDkwLjgxIDUzYTYgNiAwIDEgMCAxMC4zOC02TTcwIDk2YTU4IDU4IDAgMSAxIDU4IDU4YTU4LjA3IDU4LjA3IDAgMCAxLTU4LTU4IiAvPgo8L3N2Zz4="
								alt="User Avatar"
							/>
						</div>
						<div className="text-gray-700 font-medium">
							Role: {user?.role || "Guest"}
						</div>
					</div>
					<div className="flex flex-col px-4 py-4">
						{["users", "products"].map((url) => (
							<Link key={url} href={"/dashboard/" + url}>
								<span className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md mb-2 transition">
									{url}
								</span>
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full">
					<div className="flex justify-between border-b p-4 items-center">
						<Link href={"/dashboard"}>Dashboard</Link>
						<div className="flex gap-2 items-center">
							<div>{user?.name}</div>
							<button
								className="px-4 py-2 border rounded bg-red-500 text-white"
								onClick={logout}
							>
								Logout
							</button>
						</div>
					</div>
					{props.children}
				</div>
			</div>
			;
		</ProtectedPage>
	);
}

export default DashboardLayout;
