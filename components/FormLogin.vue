<template>
	<div >
		<ValidationObserver v-slot="{ handleSubmit }" ref="observer">
			<form @submit.prevent="handleSubmit(onSubmitlogin)" action="#" method="post">
				<ValidationProvider name="e-mail" rules="required|email" slim v-slot="{ errors, classes, required }">
					<div class="form-group">
						<label>E-mail</label>
						<input type="email" placeholder="E-mail" required class="form-control form-input" v-model="email">
						<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
					</div>
				</ValidationProvider>
				<ValidationProvider name="senha" rules="required" slim v-slot="{ errors, classes, required }">
					<div class="form-group">
						<label>Senha</label>
						<input type="password" placeholder="Senha" required class="form-control form-input" v-model="password">
						<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
					</div>
				</ValidationProvider>
				<FormMessage :msg="msg_form" :type="msg_form_type"></FormMessage>

				<button type="submit" class="btn-black w-100 my-2">Enviar</button>
			</form>
		</ValidationObserver>
	</div>
</template>
<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";
import form from "~/mixins/form";
import FormMessage from "~/components/FormMessage.vue"
const Cookie = process.client ? require('js-cookie') : undefined

export default {
	mixins: [form],
	components: {
		ValidationProvider,
		ValidationObserver,
		FormMessage
	},
	data() {
		return {
			token: '',
			password: '',
			email: '',
			action: '/',
			sending: false
		}
	},
	methods:{
		async onSubmitlogin() {
			const params = new URLSearchParams();
			params.append('email', this.email);
			params.append('password', this.password);
			this.sending = true;
			this.$axios.$post('users/login', params).then((res) => {
				this.$axios.setToken(res.token, 'Bearer');

				this.loginPost(res);
				this.msg_form = 'Login realizado com sucesso!';
				this.msg_form_type = 'success';
			}).catch((e) => {
                this.msg_form = 'Não foi possível enviar!';
                this.msg_form_type = 'error';
                console.error(e);
            })
		},
		loginPost(res) {
			const access_token = res.token
			Cookie.set('access_token', access_token, { path: '/' })
			this.$store.commit('setAuth', access_token)
			window.location.href = '/'
		}
	}
}
</script>
