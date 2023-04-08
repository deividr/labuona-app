<script lang="ts">
	import { Input, type InputType } from '../../base/Input';
	import { Label } from '../../base/Label';

	export let label = '';
	export let id = label;
	export let value: any = '';
</script>

<fieldset class="w-full flex flex-col">
	<Label {label} forId={id} />
	<Input {id} bind:value {...$$restProps} />
</fieldset>
