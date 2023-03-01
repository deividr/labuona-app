<script lang="ts">
	export let text: string = 'Button';
	export let fullWidth: boolean = false;
</script>

<button
	class={`rounded-sm h-10 bg-gray-600 text-gray-50 text-lg w-28 hover:ring-2 ring-gray-400 focus:bg-gray-500 ${
		fullWidth ? 'w-full' : ''
	}`}>{text}</button
>
