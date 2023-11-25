<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

{#if $page.url.pathname === '/login'}
	<slot />
{:else}
	<nav class="fixed top-0 left-0 w-full h-10 p-2 shadow-md">
		<a href="/">Home</a>
		<a href="/login">Login</a>
	</nav>
	<div class="mt-10">
		<slot />
	</div>
{/if}
