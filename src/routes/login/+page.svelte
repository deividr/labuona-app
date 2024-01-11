<script lang="ts">
	import { z } from "zod";
	import { Button } from "$lib/components/base/Button";
	import { InputForm } from "$lib/components/composed/InputForm";
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";
	import type { ActionResult } from "@sveltejs/kit";

	const schema = z.object({
		username: z.string().min(3, { message: "Username obrigatório" }),
		password: z.string().min(3, { message: "Senha obrigatória" })
	});

	let errorMessages: z.infer<typeof schema> = {
		username: "",
		password: ""
	};

	export let form: ActionData;
	let isSubmitting: boolean = false;
	let errorMessage: string = "";

	async function handleSubmit({ formData, cancel }: { formData: FormData; cancel: any }) {
		isSubmitting = true;

		const resultValidate = await schema.safeParseAsync(Object.fromEntries(formData.entries()));

		if (!resultValidate.success) {
			errorMessages = {
				username: resultValidate.error.flatten().fieldErrors.username?.[0] ?? "",
				password: resultValidate.error.flatten().fieldErrors.password?.[0] ?? ""
			};
			cancel();
			return;
		}

		errorMessages = {
			username: "",
			password: ""
		};

		return async ({ result, update }: { result: ActionResult; update: any }) => {
			isSubmitting = false;

			await update();

			if (result.status === 500) {
				errorMessage = "Ocorreu um erro no servidor!";
				return;
			}

			errorMessage = "Login inválido";
		};
	}
</script>

<div class="h-screen flex justify-center items-center bg-gradient-to-r from-red-500 to-green-500">
	<div
		class="w-[400px] h-fit p-10 rounded-lg col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-slate-50 shadow-sm"
	>
		<div class="w-64 drop-shadow-lg -mt-52">
			<img src="/assets/images/logo.png" alt="Logo" />
		</div>
		<h1
			class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-green-500 p-1 mb-8"
		>
			Login
		</h1>

		<form method="POST" class="w-full" use:enhance={handleSubmit}>
			<div class="flex flex-col space-y-5">
				<InputForm
					name="username"
					value={form?.username}
					id="user"
					placeholder="Digite o seu usuário"
					label="Usuário"
					hasError={form?.error || !!errorMessages.username}
					errorMessage={errorMessages.username}
				/>
				<InputForm
					name="password"
					type="password"
					id="senha"
					placeholder="Digite sua senha"
					label="Senha"
					hasError={form?.error || !!errorMessages.password}
					errorMessage={errorMessages.password}
				/>
				{#if form?.error}
					<div class="full text-center text-red-500">
						<span>{errorMessage}</span>
					</div>
				{/if}
				<Button text={isSubmitting ? "Loading" : "Entrar"} fullWidth disabled={isSubmitting} />
			</div>
		</form>
	</div>
</div>
