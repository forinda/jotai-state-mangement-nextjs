import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-4 h-full min-h-screen bg-white p-8">
			<div>
				<h1 className="font-bold uppercase">God vibes only</h1>
				<Link href={"/dashboard/"}>Dashboard</Link>
			</div>
			<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci
        aspernatur explicabo neque autem aliquid necessitatibus, nemo natus quae
        ipsam!
			</p>{" "}
			<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci
        aspernatur explicabo neque autem aliquid necessitatibus, nemo natus quae
        ipsam!
			</p>{" "}
			<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci
        aspernatur explicabo neque autem aliquid necessitatibus, nemo natus quae
        ipsam!
			</p>
		</main>
	);
}
