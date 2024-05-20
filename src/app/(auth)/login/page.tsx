"use client";
import OpenLayout from "@/components/OpenLayout";
import useAuth from "@/hooks/useAuth";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const formInfo = [
	{
		id: 1,
		label: "User name",
		name: "username",
		required: true,
		type: "text",
		placeholder: "mike...",
	},
	{
		id: 2,
		label: "Password",
		name: "password",
		required: true,
		type: "password",
		placeholder: "*************",
	},
];
const tokens = {
	access_token:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ4ZF94MzRfeDEyIjoiTVRvNk1UbzZiMlY2WVUxWVZtOTRVbXRxUjBKcFZFcHZZMUo0Y3pvNllXTT0iLCJpYXQiOjE3MTYxOTc4NTUsImV4cCI6MTcxNjI4NDI1NX0.OAO6o9RVBIx2P1oQJhtGFneWj85MEtx_bLb3yW9ytsU",
	refresh_token:
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ4ZF94MzRfeDEyIjoiTVRvNk1UbzZiMlY2WVUxWVZtOTRVbXRxUjBKcFZFcHZZMUo0Y3pvNmNtWT0iLCJpYXQiOjE3MTYxOTc4NTUsImV4cCI6MTcxNjM3MDY1NX0.dXRhsYXq6XwjpW998lRQJijfXqWPuZw1vCaX0alSzX4",
};

export default function Login() {
	const [form, setForm] = React.useState<{
		username: string;
		password: string;
	}>({ password: "", username: "" });
	const { login } = useAuth([]);
	const router = useRouter();
	const queryParams = useSearchParams();
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value! }));

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formDta = new FormData(e.currentTarget);
		const data = Object.fromEntries(formDta);

		login({
			tokens: tokens,
			user: {
				email: form.username,
				role: "ADMIN",
				name: form.username,
				is_active: true,
			},
		});
		if (queryParams.get("redirectUrl")) {
			const path = decodeURIComponent(
				queryParams.get("redirectUrl") || "/"
			);

			router.push(path);
		}
		router.push("/");
	};

	return (
		<OpenLayout>
			<div className="h-screen flex flex-col justify-center items-center">
				<form
					onSubmit={submit}
					className="w-full md:max-w-[40rem] border flex flex-col gap-4 bg-white p-4 md:p-10  items-center"
				>
					{formInfo.map(({ id, label, name, ...props }) => (
						<div key={id} className="flex flex-col gap-2 w-full">
							<label htmlFor={name}>{label}</label>
							<input
								name={name}
								id={name}
								{...props}
								className="border border-slate-200 rounded p-2"
								onChange={handleInputChange}
							/>
						</div>
					))}
					<div className="w-full">
						<button className="bg-blue-600 w-full p-2 rounded-sm text-white uppercase">
							Login
						</button>
					</div>
				</form>
			</div>
		</OpenLayout>
	);
}
