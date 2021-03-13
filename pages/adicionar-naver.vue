<template>
	<main>
		<div class="form-page m-auto">
			<div class="d-flex flex-row ">
				<nuxt-link to="/" class="pe-2">
					<img src="img/back.svg" title="Voltar para os Navers!" alt="Voltar para os Navers!">
				</nuxt-link>
				<h4 class="text1 font24 m-0">Adicionar Naver</h4>
			</div>
			<FormAddNaver />
		</div>
	</main>
</template>
<script>
import FormAddNaver from "~/components/FormAddNaver.vue"

export default {
	layout: 'naverLayout',
	middleware: 'authenticated',
	components: {
		FormAddNaver
	},
}
</script>
