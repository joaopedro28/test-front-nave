<template>
	<div>
		<div class="modal fade modal-naver"  :id="`delete${id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header p-0">
						{{title}}
					</div>
					<div class="modal-body  p-0">
						<div class="p-4">
							{{text}}
						</div>
					</div>
					<div class="modal-footer" v-if="!WasDeleted">
						<button type="button" class="btn-white" data-bs-dismiss="modal">Cancelar</button>
						<div type="button" class="btn-black" @click="DeleteUser(id)">Excluir</div>
					</div>
					<div v-else>
						<a href="/" class="btn-white">Fechar</a>
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
				this.title = 'Naver excluído';
				this.text = 'Naver excluído com sucesso!';
				this.WasDeleted = true
			}
			catch{
				console.log('Não foi possivel deletar o usuario')
				this.$router.push("/")
			}

		}
	}

}


</script>
