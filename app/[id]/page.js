import Colors from "@/components/theme/Colors/Colors";
import Navigation from "@/components/global/Navigation/Navigation";

export function generateMetadata({ params }) {
	return {
		title: "Theme: " + params.id,
	};
}

export default function Theme() {
	return (
		<>
			<Navigation />
			<Colors />
		</>
	);
}
