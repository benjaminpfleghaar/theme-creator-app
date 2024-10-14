import { useThemeState } from "@/libs/states";
import Button from "@/components/Button/Button";
import "@/components/ThemeHeader/ThemeHeader.scss";

export default function ThemeHeader({ children }) {
	const { addTheme } = useThemeState();

	return (
		<header className="theme-header">
			<h1 className="theme-header__title">{children}</h1>
			<Button type="button" onClick={addTheme}>
				New Theme
			</Button>
		</header>
	);
}
