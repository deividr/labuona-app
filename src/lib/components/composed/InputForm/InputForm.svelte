<script lang="ts">
	import { Input } from '$lib/components/base/Input';
	import { Label } from '$lib/components/base/Label';

	export let label = '';
	export let id = label;
	export let value: any = '';
	export let errorMessage: string = '';
	export let hasError: boolean = false;

	$: valid = !hasError;
</script>

<fieldset class="w-full flex flex-col">
	<Label {label} forId={id} />
	<Input {id} bind:value bind:valid {...$$restProps} />
	{#if !valid}
		<span class="text-sm text-red-500 mt-2">{errorMessage}</span>
	{/if}
</fieldset>
