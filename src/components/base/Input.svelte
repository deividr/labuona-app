<script lang="ts">
	export let id: string = '';
	export let type: string = 'text';
	export let value: string = '';
	export let placeholder: string = '';

	const typeAction = (node: any) => {
		node.type = type;
	};
</script>

<input
	use:typeAction
	{placeholder}
	{id}
	bind:value
	class="border rounded-md p-2 h-10 w-full text-slate-500 focus:border-gray-500 focus:ring-1 focus:ring-sky-500 invalid:border-gray-600 hover:shadow-md focus:shadow-md"
/>
