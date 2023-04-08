<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { InputType } from './Input';

	const styleClass: string =
		'border rounded-md p-3 h-12 w-full text-slate-500 focus:border-green-500 invalid:border-red-600 invalid:border-1 invalid:focus:ring-2 invalid:focus:ring-red-300 invalid:focus:border-red-600 hover:shadow-md focus:ring-2 focus:ring-green-300';

	export let type: InputType = 'text',
		value: HTMLInputAttributes['value'] = '';
</script>

{#if type === 'text'}
	<input type="text" bind:value class={styleClass} {...$$restProps} />
{:else if type === 'password'}
	<input type="password" bind:value class={styleClass} {...$$restProps} />
{:else if type === 'email'}
	<input type="email" bind:value class={styleClass} {...$$restProps} />
{/if}
