<template>
	<div class="form-page m-auto">
		<div class="d-flex flex-row ">
			<nuxt-link to="/" class="mr-3">
				<img src="img/back.svg" title="Voltar para os Navers!" alt="Voltar para os Navers!">
			</nuxt-link>
			<h4 class="text1 font24 m-0">Editar Naver</h4>
		</div>
		<FormEditNaver />
	</div>
</template>
<script>
import FormEditNaver from "~/components/FormEditNaver.vue"

export default {
	components: {
		FormEditNaver
	},
}
</script>
