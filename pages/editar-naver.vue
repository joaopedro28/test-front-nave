<template>
	<div class="form-page m-auto">
		<div class="d-flex flex-row ">
			<nuxt-link to="/" class="pe-2">
				<img src="img/back.svg" title="Voltar para os Navers!" alt="Voltar para os Navers!">
			</nuxt-link>
			<h4 class="text1 font24 m-0">Editar Naver</h4>
		</div>
		<FormEditNaver :naver="naver" />
	</div>
</template>
<script>
import FormEditNaver from "~/components/FormEditNaver.vue"

export default {
	layout: 'naverLayout',
    middleware: 'authenticated',
	components: {
		FormEditNaver
	},
	async asyncData({ params, query, res, $axios, req, app, error, store }) {
		try {
			const naver = await $axios.$get(`navers/${query.id}`);
			return {
				naver: naver
			};
		} catch (e) {
			console.error(e);
		}
	}
}
</script>
