"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Color from "@/components/Color/Color";
import "@/components/ColorList/ColorList.scss";
import useThemeState from "@/states/useThemeState";
import ColorHeader from "@/components/ColorHeader/ColorHeader";

export default function ColorList() {
	const { id } = useParams();
	const router = useRouter();
	const { themes } = useThemeState();
	const theme = themes.find((theme) => theme.id === id);

	useEffect(() => {
		if (!theme) router.replace("/");
	}, [theme]);

	if (!theme) return null;

	const { name, colors } = theme;

	return (
		<main className="main">
			<ColorHeader themeId={id}>{name}</ColorHeader>
			<section className="colors">
				{colors.map((color) => (
					<Color key={color.id} themeId={id} colorId={color.id} colorLength={colors.length} {...color} />
				))}
			</section>
		</main>
	);
}
