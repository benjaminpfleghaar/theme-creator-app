import Link from "next/link";
import "@/components/Theme/Theme.scss";
import Empty from "@/components/Empty/Empty";

export default function Theme({ theme }) {
	const { id, name, colors } = theme;

	return (
		<section className="theme">
			<Link href={id} title={`View ${id}`} className="theme__link">
				{colors.length === 0 ? <Empty /> : colors.map((color) => <div key={color.id} style={{ backgroundColor: color.hex }}></div>)}
			</Link>
			<h2 className="theme__title">
				{name} <small className="theme__title--details">{colors.length} Colors</small>
			</h2>
		</section>
	);
}
