<template>
	<div>
		<div class="d-flex flex-row ">
			<div @click="deleteNaver=true" class="cursor-pointer me-2">
				<img src="img/close.svg" alt="Delete" title="Delete">
			</div>
			<ModalDelete @Deleted="deleteClose" @close="deleteNaver=false" :id="id" :showModalDelete="deleteNaver" />
			<div v-if="WasDeleted == true">
				<ModalConfirm  :status="'excluído'" @close="WasDeleted=false" :showModal="WasDeleted" />
			</div>
			<a :href="`editar-naver?id=${id}`">
				<img src="img/pencil.svg" alt="Edita" title="Edita">
			</a>
		</div>
	</div>
</template>
<script>
import ModalConfirm from "~/components/ModalConfirm.vue"
import ModalDelete from "~/components/ModalDelete.vue"

export default {
	components:{
		ModalDelete,
		ModalConfirm
	},
	props:{
		id:''
	},
	data() {
		return {
			deleteNaver:false,
			WasDeleted:false
		}
	},
	methods :{
		deleteClose(exit) {
			this.deleteNaver = false;
			if(exit) {
				this.WasDeleted = true
			}
		}
	}
}
</script>
