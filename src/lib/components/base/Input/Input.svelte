<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { InputType } from './Input';

	export let type: InputType = 'text',
		value: HTMLInputAttributes['value'] = '',
		valid: boolean = true;

	$: styleInvalid = valid
		? 'focus:ring-green-300 focus:border-green-500'
		: 'border-red-600 border-1 focus:ring-red-300 focus:border-red-600';

	$: styleClass = `border rounded-md p-3 h-12 w-full text-slate-500 hover:shadow-md focus:ring-2 ${styleInvalid}}`;
</script>

{#if type === 'text'}
	<input type="text" bind:value class={styleClass} {...$$restProps} />
{:else if type === 'password'}
	<input type="password" bind:value class={styleClass} {...$$restProps} />
{:else if type === 'email'}
	<input type="email" bind:value class={styleClass} {...$$restProps} />
{/if}
