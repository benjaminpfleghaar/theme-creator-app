import "@/app/page.scss";
import Color from "@/components/Color/Color";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";

export function generateMetadata() {
	return {
		title: "Default Theme",
	};
}

export default function Theme() {
	return (
		<>
			<Header />
			<main className="main">
				<Headline>Default Theme</Headline>
				<section className="main__colors">
					<Color role="Primary" color="#003049" />
					<Color role="Secondary" color="#d62828" />
					<Color role="Background" color="#f77f00" />
					<Color role="Highlight" color="#fcbf49" />
				</section>
			</main>
		</>
	);
}
