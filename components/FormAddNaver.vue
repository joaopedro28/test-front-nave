<template>
	<div >
		<ValidationObserver v-slot="{ handleSubmit }" ref="observer">
			<form @submit.prevent="handleSubmit(AddNaver)" action="#" method="post">
				<div class="row">
					<ValidationProvider name="nome" rules="required" slim v-slot="{ errors, classes, required }">
						<div class="col-12 col-sm-6 py-2  form-group">
							<label class="pb-1">Nome</label>
							<input type="text" placeholder="Nome" required class="form-control form-input" v-model="name">
							<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
						</div>
					</ValidationProvider>
					<ValidationProvider name="cargo" rules="required" slim v-slot="{ errors, classes, required }">
						<div class="col-12 col-sm-6 py-2  form-group">
							<label class="pb-1">Cargo</label>
							<input type="text" placeholder="Cargo" required class="form-control form-input" v-model="job">
							<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
						</div>
					</ValidationProvider>
					<ValidationProvider name="Idade" rules="required" slim v-slot="{ errors, classes, required }">
						<div class="col-12 col-sm-6 py-2  form-group">
							<label class="pb-1">Data de Nascimento</label>
							<input type="date" placeholder="Idade" required class="form-control form-input" v-model="age">
							<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
						</div>
					</ValidationProvider>
					<ValidationProvider name="tempo de empresa" rules="required" slim v-slot="{ errors, classes, required }">
						<div class="col-12 col-sm-6 py-2  form-group">
							<label class="pb-1">Data de inicio na empresa</label>
							<input type="date" placeholder="Tempo de empresa" required class="form-control form-input" v-model="company_time">
							<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
						</div>
					</ValidationProvider>
					<ValidationProvider name="projeto" rules="required" slim v-slot="{ errors, classes, required }">
						<div class="col-12 col-sm-6 py-2  form-group">
							<label class="pb-1">Projetos que participou</label>
							<input type="text" placeholder="Projetos que participou" required class="form-control form-input" v-model="projects">
							<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
						</div>
					</ValidationProvider>
					<ValidationProvider name="url da foto do naver" rules="required" slim v-slot="{ errors, classes, required }">
						<div class="col-12 col-sm-6 py-2 form-group">
							<label class="pb-1">URL da foto do Naver</label>
							<input type="text" placeholder="URL da foto do Naver" required class="form-control form-input" v-model="url">
							<small v-show="errors[0]" class="text-danger">{{ errors[0] }}</small>
						</div>
					</ValidationProvider>
				</div>
				<FormMessage :msg="msg_form" :type="msg_form_type"></FormMessage>
				<div class="d-flex justify-content-end">
					<button type="submit" class="btn-black px-5 ml-auto my-2">Enviar</button>
				</div>
			</form>
		</ValidationObserver>
		<ModalConfirm  :status="'criado'" @close="Close()" :showModal="showModal" />
	</div>
</template>
<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";
import form from "~/mixins/form";
import FormMessage from "~/components/FormMessage.vue"
import ModalConfirm from "~/components/ModalConfirm.vue"

export default {
	mixins: [form],
	components: {
		ValidationProvider,
		ValidationObserver,
		FormMessage,
		ModalConfirm
	},
	data() {
		return {
			name: '',
			job: '',
			age: '',
			company_time: '',
			projects: '',
			url: '',
			action: '/',
			sending: false,
			showModal: false
		}
	},
	methods:{
		async AddNaver() {
			const params = new URLSearchParams();
			params.append('name', this.name);
			params.append('job_role', this.job);
			params.append('birthdate', this.$moment(this.age).format('DD/MM/YYYY'));
			params.append('admission_date', this.$moment(this.company_time).format('DD/MM/YYYY'));
			params.append('project', this.projects);
			params.append('url', this.url);
			this.sending = true;
			this.$axios.$post('navers', params).then((res) => {
				this.msg_form = 'Naver adicionado com sucesso!';
				this.msg_form_type = 'success';
				this.showModal = true;
			}).catch((e) => {
                this.msg_form = 'Não foi possível adicionar um novo Naver!';
                this.msg_form_type = 'error';
                console.error(e);
            })
		},
		Close() {
			window.location.href = "/"
		}
	}
}
</script>
