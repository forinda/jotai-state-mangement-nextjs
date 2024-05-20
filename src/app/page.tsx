"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

export default function Home() {
	const auth = useAuth([]);

	return (
		<main className="flex flex-col gap-4 h-full min-h-screen bg-white text-black p-8">
			<div className="flex justify-between border p-2 rounded-lg shadow items-center sticky top-0 bg-white z-[200000] text-sm">
				<h1 className="font-medium uppercase">Good vibes only</h1>
				<div>
					{!auth.isAuthenticated ? (
						<Link
							href={"/login"}
							className="text-blue-500 hover:underline"
						>
							Login
						</Link>
					) : (
						<div className="flex items-center gap-2">
							<Link
								href={"/dashboard"}
								className="text-blue-500 hover:underline text-xs"
							>
								Dashboard
							</Link>
							<button
								onClick={auth.logout}
								type="button"
								className="px-4 py-1 bg-red-400 text-white rounded text-xs"
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				adipisci aspernatur explicabo neque autem aliquid
				necessitatibus, nemo natus quae ipsam!
			</p>{" "}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				adipisci aspernatur explicabo neque autem aliquid
				necessitatibus, nemo natus quae ipsam!
			</p>{" "}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				adipisci aspernatur explicabo neque autem aliquid
				necessitatibus, nemo natus quae ipsam!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				adipisci aspernatur explicabo neque autem aliquid
				necessitatibus, nemo natus quae ipsam!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				adipisci aspernatur explicabo neque autem aliquid
				necessitatibus, nemo natus quae ipsam!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
				adipisci aspernatur explicabo neque autem aliquid
				necessitatibus, nemo natus quae ipsam!
			</p>
		</main>
	);
}
