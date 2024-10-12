"use client";

import { useEffect } from "react";
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
	const theme = themes.find((theme) => theme.id === id);

	useEffect(() => {
		if (!theme) router.replace("/");
	}, [theme]);

	if (!theme) return null;

	const { name, colors } = theme;

	return (
		<main className="main">
			<Header themeId={id}>{name}</Header>
			<section className="colors">
				{colors.map((color) => (
					<Color key={color.id} themeId={id} colorId={color.id} colorLength={colors.length} {...color} />
				))}
			</section>
		</main>
	);
}
