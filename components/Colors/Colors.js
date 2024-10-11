"use client";

import "@/components/Colors/Colors.scss";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Color from "@/components/Color/Color";
import useThemeState from "@/states/useThemeState";
import Headline from "@/components/Headline/Headline";

export default function Colors() {
	const { id } = useParams();
	const router = useRouter();
	const { themes } = useThemeState();
	const { name, colors } = themes.find((theme) => theme.id === id) || {};

	if (!themes.find((theme) => theme.id === id)) return router.push("/");

	return (
		<main className="colors">
			<Headline themeId={id}>{name}</Headline>
			<section className="colors__section">
				{colors.map((color) => (
					<Color key={color.id} themeId={id} colorId={color.id} length={colors.length} role={color.role} color={color.hex} />
				))}
			</section>
		</main>
	);
}
