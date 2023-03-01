<script lang="ts">
	import Input from '$components/base/Input.svelte';
	import Label from '$components/base/Label.svelte';

	export let label = '';
	export let id = label;
	export let placeholder = '';
	export let type = '';
	export let value = '';
</script>

<fieldset class="w-full flex flex-col">
	<Label {label} forId={id} />
	<Input {placeholder} bind:value {id} {type} />
</fieldset>
