import { useStore } from "@nanostores/react";
import { count } from "../stores/count.ts";

export default function CountVisualizer() {
	const $count = useStore(count);
	return (
		<div>
			<h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
				Count Value : {$count}
			</h1>
		</div>
	);
}
