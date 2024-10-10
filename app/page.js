import "@/components/Home/Home.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Preview from "@/components/Preview/Preview";

export default function Home() {
	return (
		<>
			<Header />
			<main className="home">
				<header className="home__header">
					<h1 className="home__headline">3 Themes</h1>
					<Button label="New Theme" type="button" />
				</header>
				<section className="home__themes">
					<Preview />
					<Preview />
					<Preview />
				</section>
			</main>
		</>
	);
}
