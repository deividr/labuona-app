<script lang="ts">
	import { page } from "$app/stores";
	import MenuBar from "$lib/components/composed/MenuBar/MenuBar.svelte";
	import "../app.css";
</script>

{#if $page.url.pathname === "/login"}
	<slot />
{:else}
	<MenuBar />
	<div class="bg ml-44">
		<slot />
	</div>
{/if}
