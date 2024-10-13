import Navigation from "@/components/Navigation/Navigation";
import ColorManager from "@/components/ColorManager/ColorManager";

export function generateMetadata({ params }) {
	return {
		title: "Theme: " + params.id,
	};
}

export default function Theme() {
	return (
		<>
			<Navigation />
			<ColorManager />
		</>
	);
}
