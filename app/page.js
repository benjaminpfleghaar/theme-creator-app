import "@/app/page.scss";
import Theme from "@/components/Theme/Theme";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main">
				<Headline>3 Beautiful themes</Headline>
				<section className="themes">
					<Theme />
					<Theme />
					<Theme />
				</section>
			</main>
		</>
	);
}
