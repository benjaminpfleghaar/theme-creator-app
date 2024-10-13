import "@/styles/globals.scss";
import { dm_sans } from "@/libs/fonts";

export const metadata = {
	title: "Theme Creator",
	description: "Create beautiful color themes",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={dm_sans.className}>{children}</body>
		</html>
	);
}
