import "@/app/page.scss";
import Header from "@/components/Header/Header";
import Preview from "@/components/Preview/Preview";
import Headline from "@/components/Headline/Headline";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main">
				<Headline>3 Beautiful themes</Headline>
				<section className="themes">
					<Preview />
					<Preview />
					<Preview />
				</section>
			</main>
		</>
	);
}
