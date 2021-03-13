<template>
	<div>
		<div class="container-fluid">
			<header>
				<div class="d-flex justify-content-between align-items-center">
					<div>
						<img
							src="/img/logo.svg"
							class="img-fluid d-block mx-auto my-4 "
							alt="Nave.rs"
							title="Nave.rs"
						/>
					</div>
					<nuxt-link to="/logout" class="text1 logout mx-3" v-if="this.$route.path !== '/login'">
						Sair
					</nuxt-link>
				</div>
			</header>
			<Nuxt />
		</div>
	</div>
</template>
<script>
export default {

}
</script>
