export function isClient() {
	return typeof window !== "undefined" && typeof localStorage !== "undefined";
}
