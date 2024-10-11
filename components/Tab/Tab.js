import Link from "next/link";
import "@/components/Tab/Tab.scss";

export default function Tab({ title, target, active }) {
	return (
		<Link href={target} title={title} className={`link ${active ? "link--active" : ""}`}>
			{title}
		</Link>
	);
}
