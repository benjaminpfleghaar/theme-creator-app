import "./page.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import Preview from "@/components/Preview/Preview";

export default function Home() {
	return (
		<>
			<Header />
			<main className="home">
				<header className="home__header">
					<h1 className="home__headline">3 Beautiful themes</h1>
					<Button type="button">New Theme</Button>
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
