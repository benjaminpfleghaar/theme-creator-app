import "@/styles/globals.scss";
import { geist } from "@/libs/fonts";

export const metadata = {
	title: "Theme Creator",
	description: "Create beautiful color themes",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={geist.className}>{children}</body>
		</html>
	);
}
