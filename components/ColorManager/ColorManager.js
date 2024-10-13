"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Color from "@/components/Color/Color";
import useThemeState from "@/states/useThemeState";
import "@/components/ColorManager/ColorManager.scss";
import ColorHeader from "@/components/ColorHeader/ColorHeader";

export default function ColorManager() {
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
		<main className="color-manager">
			<ColorHeader themeId={id}>{name}</ColorHeader>
			<section className="color-section">
				{colors.map((color) => (
					<Color key={color.id} themeId={id} colorId={color.id} colorLength={colors.length} {...color} />
				))}
			</section>
		</main>
	);
}
