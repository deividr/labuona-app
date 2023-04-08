<script lang="ts">
	export let text: string = 'Button';
	export let fullWidth: boolean = false;
</script>

<button
	class={`rounded-sm h-12 bg-green-600 text-white text-lg w-28 hover:ring-2 ring-green-500 focus:bg-green-500 ${
		fullWidth ? 'w-full' : ''
	}`}
	on:click>{text}</button
>
