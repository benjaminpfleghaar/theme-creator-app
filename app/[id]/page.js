import Navigation from "@/components/Navigation/Navigation";
import ColorContainer from "@/components/ColorContainer/ColorContainer";

export function generateMetadata({ params }) {
	return {
		title: "Theme: " + params.id,
	};
}

export default function Theme() {
	return (
		<>
			<Navigation />
			<ColorContainer />
		</>
	);
}
