<template>
	<div class="container hv-100 d-flex justify-content-center align-items-center">
			<div class="form-login p-4">
				<img src="/img/logo.svg" class="img-fluid d-block mx-auto my-4 " alt="Nave.rs" title="Nave.rs">
				<FormLogin />
			</div>

	</div>
</template>
<script>
import FormLogin from "~/components/FormLogin.vue";

export default {
	components: {
		FormLogin
	}
}
</script>
