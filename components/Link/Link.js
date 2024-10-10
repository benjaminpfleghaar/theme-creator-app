import "@/components/Link/Link.scss";

export default function Link({ title, target, active }) {
	return (
		<a href={target} title={title} className={`link ${active ? "link--active" : ""}`}>
			{title}
		</a>
	);
}
