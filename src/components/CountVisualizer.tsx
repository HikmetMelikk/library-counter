import { useStore } from "@nanostores/react";
import { count } from "../stores/count.ts";

export default function CountVisualizer() {
	const $count = useStore(count);
	return (
		<div>
			<h1 className="text-2xl font-bold">Count Value : {$count}</h1>
		</div>
	);
}
