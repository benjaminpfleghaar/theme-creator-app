import "@/styles/globals.scss";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
	weight: ["400", "600"],
	subsets: ["latin"],
});

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
