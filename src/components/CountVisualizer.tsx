import { useStore } from "@nanostores/react";
import { count } from "../stores/count.ts";

export default function CountVisualizer() {
	const $count = useStore(count);
	return (
		<div className="relative border-2 border-purple-400 rounded-lg p-4 w-full max-w-md">
			<span className="absolute -top-3 right-4 bg-white px-2 text-purple-500 font-semibold">
				React
			</span>
			<h1 className="text-2xl text-center font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
				Count Value : {$count}
			</h1>
		</div>
	);
}
