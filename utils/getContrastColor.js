export default function getContrastColor(color) {
	return "0x" + color.slice(1) > 0x777777 ? "color__title--black" : "color__title--white";
}
