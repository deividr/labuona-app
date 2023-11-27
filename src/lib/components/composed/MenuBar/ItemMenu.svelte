<script lang="ts">
	import { page } from "$app/stores";

	export let label = "";
	export let href = "";

	$: isActive = $page.url.pathname === href;
</script>

<a {href} class="w-full">
	<div
		class={`flex flex-row items-end gap-2 p-1 w-full ${isActive ? "bg-green-700 rounded-lg" : ""}`}
	>
		<slot name="icon" />
		{label}
	</div>
</a>
