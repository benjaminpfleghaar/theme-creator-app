import Colors from "@/components/Colors/Colors";
import Header from "@/components/Header/Header";

export function generateMetadata({ params }) {
	return {
		title: "Theme: " + params.id,
	};
}

export default function Theme() {
	return (
		<>
			<Header />
			<Colors />
		</>
	);
}
