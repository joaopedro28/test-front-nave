<template>
	<div>
		<div v-if="showModalDelete" class="modal-mask">
			<div class="modal-wrapper px-2">
				<div class="modal-container">
					<div class="modal-header border-0">
						<div class="text1 font24">
							{{title}}
						</div>
						<button class="closeButton" @click="$emit('close')" >
							<img src="img/out.svg" alt="Delete" title="Delete">
						</button>
					</div>
					<div class="modal-body">
						<div class="text1 font16 weight400">
							{{text}}
						</div>
						<div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-end">
							<button type="button" @click="closeDelete()" class="btn-white" >Cancelar</button>
							<button type="button" class="btn-black mt-2 mt-md-0 ms-md-3" @click="DeleteUser(id)">Excluir</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: {
			default: ''
		},
		status:'',
		showModalDelete: {
			default: false
		}
	},
	data() {
		return {
			title: 'Excluir Naver',
			text: 'Tem certeza que deseja excluir este Naver?',
			WasDeleted: false
		}
	},
	methods: {
		async DeleteUser(id) {
			try {
				await this.$axios.$delete(`navers/${id}`);
				this.$emit('Deleted', true)
			}
			catch{
				console.log('Não foi possivel deletar o usuario')
				this.$router.push("/")
			}
		},
		closeDelete() {
			this.$emit('Deleted')
		}
	}
}


</script>
