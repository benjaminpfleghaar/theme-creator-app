"use client";

import "@/components/Colors/Colors.scss";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import useThemeState from "@/states/useThemeState";
import Color from "@/components/Colors/Color/Color";
import Header from "@/components/Colors/Header/Header";

export default function Colors() {
	const { id } = useParams();
	const router = useRouter();
	const { themes } = useThemeState();
	const { name, colors } = themes.find((theme) => theme.id === id) || {};

	if (!name) return router.replace("/");

	return (
		<main className="main">
			<Header themeId={id}>{name}</Header>
			<section className="colors">
				{colors.map((color) => (
					<Color key={color.id} themeId={id} colorId={color.id} length={colors.length} role={color.role} hex={color.hex} />
				))}
			</section>
		</main>
	);
}
