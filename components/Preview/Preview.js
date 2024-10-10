import Link from "next/link";
import "@/components/Preview/Preview.scss";

export default function Preview() {
	return (
		<section className="theme__preview">
			<Link href="/" title="View Default Theme" className="theme__preview-link">
				<div style={{ backgroundColor: "#003049" }}></div>
				<div style={{ backgroundColor: "#d62828" }}></div>
				<div style={{ backgroundColor: "#f77f00" }}></div>
				<div style={{ backgroundColor: "#fcbf49" }}></div>
			</Link>
			<h4 className="theme__preview-title">
				Default Theme <small className="theme__preview-title--details">8 Colors</small>
			</h4>
		</section>
	);
}
