"use client";

import "@/app/page.scss";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Color from "@/components/Color/Color";
import Header from "@/components/Header/Header";
import useThemeState from "@/states/useThemeState";
import Headline from "@/components/Headline/Headline";

export default function Theme() {
	const { id } = useParams();
	const router = useRouter();
	const { themes } = useThemeState();
	const { name, colors } = themes.find((theme) => theme.id === id) || {};

	return (
		<>
			<Header />
			<main className="main">
				<Headline>{name}</Headline>
				<section className="colors">{!name ? router.push("/") : colors.map((color) => <Color key={color.id} role={color.role} color={color.hex} />)}</section>
			</main>
		</>
	);
}
