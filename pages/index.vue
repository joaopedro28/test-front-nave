<template>
	<main>
		<div class="d-flex justify-content-between mt-2">
			<div class="title1">
				Navers
			</div>
			<nuxt-link to="adicionar-naver" class="btn-black px-3 my-2">Adicionar Naver</nuxt-link>
		</div>
		<div class="row">
			<div
				class="col-12 col-sm-6 col-md-4 col-lg-3 my-5"
				v-for="naver in navers"
				:key="naver.id"
			>
				<div data-bs-toggle="modal" :data-bs-target="`#naver${naver.id}`">
					<img
						src="/img/img1.png"
						class="img-fluid w-100 "
						alt="naver"
						title="Naver"
					/>
					<h4 class="text1 font16">{{ naver.name }}</h4>
					<p class="text1 font16 weight400">{{ naver.project }}</p>
				</div>
				<div class="d-flex flex-row">
					<div data-bs-toggle="modal" :data-bs-target="`#delete${naver.id}`">
						<img src="img/close.svg" alt="Delete" title="Delete">
					</div>
					<ModalDelete :id="naver.id" />
					<div>
						<img src="img/pencil.svg" alt="Edita" title="Edita">
					</div>
				</div>
				<ModalNaver :content="naver" :id="`naver${naver.id}`" />
			</div>
		</div>
	</main>
</template>

<script>
import ModalNaver from "~/components/ModalNaver.vue"
import naver from "~/data/naver.json"
export default {
	components: {
		ModalNaver
	},
	data() {
		return {
			naverData: naver,
			teste: process.env.API_BASE_URL_NAVE
		};
	},
	methods: {
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
