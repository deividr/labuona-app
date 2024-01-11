<script lang="ts">
	import { TitlePage } from "$lib/components/base/TitlePage";
	import { faker } from "@faker-js/faker";

	const items = Array(10)
		.fill(null)
		.map(() => ({
			number: faker.number.int(100),
			client: faker.person.fullName(),
			refrigerator: faker.string.alpha(5)
		}));
</script>

<div class="flex flex-col w-fit">
	<TitlePage title="Pedido" />

	<table class="table-auto">
		<thead>
			<tr>
				<th>Números</th>
				<th>Cliente</th>
				<th>Geladeira</th>
			</tr>
		</thead>
		<tbody>
			{#each items as item (item.number)}
				<tr>
					<td>{item.number}</td>
					<td>{item.client}</td>
					<td>{item.refrigerator}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
