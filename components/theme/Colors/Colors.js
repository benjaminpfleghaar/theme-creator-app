"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import "@/components/theme/Colors/Colors.scss";
import Color from "@/components/theme/Color/Color";
import useThemeState from "@/states/useThemeState";
import Headline from "@/components/theme/Headline/Headline";

export default function Colors() {
	const { id } = useParams();
	const router = useRouter();
	const { themes } = useThemeState();
	const { name, colors } = themes.find((theme) => theme.id === id) || {};

	if (!name) return router.replace("/");

	return (
		<main className="colors">
			<Headline themeId={id}>{name}</Headline>
			<section className="colors__section">
				{colors.map((color) => (
					<Color key={color.id} themeId={id} colorId={color.id} length={colors.length} role={color.role} hex={color.hex} />
				))}
			</section>
		</main>
	);
}
