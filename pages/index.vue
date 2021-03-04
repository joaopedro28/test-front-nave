<template>
	<div>
		<div class="title1">
			Navers
			{{$store.state.access_token}}
			{{navers}}
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			teste: process.env.API_BASE_URL_NAVE
		}
	},
	async asyncData({params, query, res, $axios, req, app, error, store}) {
		try {
			const navers = await $axios.$get('navers')
			return {
				navers: navers
			}
		} catch(e) {
			console.error(e)
		}
	}
}
</script>
