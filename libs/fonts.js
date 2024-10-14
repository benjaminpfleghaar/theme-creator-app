import localFont from "next/font/local";

export const geist = localFont({
	src: [
		{
			path: "../public/fonts/Geist-Regular.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/Geist-Medium.ttf",
			weight: "600",
		},
	],
});
