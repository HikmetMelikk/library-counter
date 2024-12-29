import { useStore } from "@nanostores/react";
import { count } from "../stores/count.ts";

export default function ReactButton() {
	const $count = useStore(count);

	const increase = () => {
		count.set($count + 1);
	};

	return (
		<button
			className="px-6 py-3 text-base font-medium text-white bg-button-gradient rounded-lg shadow-sm hover:bg-button-gradient-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-200 ease-in-out hover:shadow-lg active:shadow-sm mx-2"
			onClick={increase}>
			React Increase Counter Button
		</button>
	);
}
