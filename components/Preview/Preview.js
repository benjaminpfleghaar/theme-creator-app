import Link from "next/link";
import "@/components/Preview/Preview.scss";

export default function Preview() {
	return (
		<section className="preview">
			<Link href="/default" title="View Default Theme" className="preview__link">
				<div style={{ backgroundColor: "#003049" }}></div>
				<div style={{ backgroundColor: "#d62828" }}></div>
				<div style={{ backgroundColor: "#f77f00" }}></div>
				<div style={{ backgroundColor: "#fcbf49" }}></div>
			</Link>
			<h4 className="preview__title">
				Default Theme <small className="preview__title--details">8 Colors</small>
			</h4>
		</section>
	);
}
