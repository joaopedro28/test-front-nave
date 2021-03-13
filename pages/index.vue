<template>
	<main>
		<div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between mt-2">
			<div class="title1">
				Navers
			</div>
			<nuxt-link to="adicionar-naver" class="btn-black  px-3 my-2">Adicionar Naver</nuxt-link>
		</div>
		<div class="row">
			<div
				class="col-12 col-sm-6 col-md-4 col-lg-3 my-5"
				v-for="naver in navers"
				:key="naver.id"
			>
				<div class="cursor-pointer" data-bs-toggle="modal" :data-bs-target="`#naver${naver.id}`">
					<img
						src="/img/img1.png"
						class="img-fluid w-100 "
						:alt="naver.name"
						:title="naver.name"
					/>
					<h4 class="text1 font16">{{ naver.name }}</h4>
					<p class="text1 font16 weight400">{{ naver.project }}</p>
				</div>
				<NaverController :id="naver.id"/>
				<ModalNaver :content="naver" :id="`naver${naver.id}`" />
			</div>
		</div>
	</main>
</template>

<script>
import ModalNaver from "~/components/ModalNaver.vue"
import naver from "~/data/naver.json"
import NaverController from '../components/NaverController.vue';

export default {
	layout: 'naverLayout',
	middleware: 'authenticated',
	components: {
		ModalNaver,
		NaverController
	},
	async asyncData({ params, query, res, $axios, req, app, error, store }) {
		try {
			const navers = await $axios.$get("navers");
			return {
				navers: navers
			};
		} catch (e) {
			console.error(e);
		}
	}
};
</script>
