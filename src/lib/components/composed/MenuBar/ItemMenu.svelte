<script lang="ts">
	import { page } from "$app/stores";

	export let label = "";
	export let href = "";

	$: isActive = $page.url.pathname === href;
</script>

<li
	class={`${
		isActive ? "bg-green-100 rounded-xl text-green-700" : ""
	} hover:bg-green-100 rounded-xl`}
>
	<a {href} class="w-full flex flex-row items-end gap-2 p-3">
		<slot name="icon" />
		{label}
	</a>
</li>
