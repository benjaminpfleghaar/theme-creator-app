import ColorList from "@/components/ColorList/ColorList";
import Navigation from "@/components/Navigation/Navigation";

export function generateMetadata({ params }) {
	return {
		title: "Theme: " + params.id,
	};
}

export default function Theme() {
	return (
		<>
			<Navigation />
			<ColorList />
		</>
	);
}
