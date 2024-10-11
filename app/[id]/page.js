"use client";

import "@/app/page.scss";
import { useParams } from "next/navigation";
import Color from "@/components/Color/Color";
import Header from "@/components/Header/Header";
import useThemeState from "@/states/useTicketState";
import Headline from "@/components/Headline/Headline";

export default function Theme() {
	const { id } = useParams();
	const { themes } = useThemeState();
	const { name, colors } = themes.find((theme) => theme.id === id);

	return (
		<>
			<Header />
			<main className="main">
				<Headline>{name}</Headline>
				<section className="colors">
					{colors.map((color) => (
						<Color key={color.id} role={color.role} color={color.hex} />
					))}
				</section>
			</main>
		</>
	);
}
