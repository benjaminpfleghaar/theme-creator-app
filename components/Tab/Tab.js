import Link from "next/link";
import "@/components/Tab/Tab.scss";
import { usePathname } from "next/navigation";

export default function Tab({ title, href }) {
	const currentPath = usePathname();

	return (
		<Link href={href} title={title} className={`link ${href === currentPath ? "link--active" : ""}`}>
			{title}
		</Link>
	);
}
