<script lang="ts">
	import Icon from "@iconify/svelte";
	import ItemMenu from "./ItemMenu.svelte";
</script>

<nav class="top-0 left-0 h-full w-40 p-2 shadow-md flex flex-col justify-between text-gray-700">
	<ul class="flex flex-col gap-4">
		<li class="drop-shadow-lg flex justify-center">
			<a href="/">
				<img src="/assets/images/logo.png" alt="Logo" width="100" />
			</a>
		</li>
		<ItemMenu label="Pedidos" href="/orders">
			<Icon icon="lets-icons:order" width="30px" slot="icon" />
		</ItemMenu>
		<ItemMenu label="Produtos" href="/products">
			<Icon icon="fluent-mdl2:product-list" width="30px" slot="icon" />
		</ItemMenu>
	</ul>
	<div class="my-2 ml-2">
		<form action="/logout" method="post">
			<button type="submit" role="link" class="flex items-end gap-2">
				<Icon icon="line-md:logout" width="30px" slot="icon" />
				Logout
			</button>
		</form>
	</div>
</nav>
