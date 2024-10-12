import Colors from "@/components/Colors/Colors";
import Navigation from "@/components/Global/Navigation/Navigation";

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
