<script lang="ts">
	import { page } from "$app/stores";
	import MenuBar from "$lib/components/composed/MenuBar/MenuBar.svelte";
	import "../app.css";
</script>

{#if $page.url.pathname === "/login"}
	<slot />
{:else}
	<div class="flex h-screen bg-slate-50">
		<MenuBar />
		<section class="p-4">
			<slot />
		</section>
	</div>
{/if}
