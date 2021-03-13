<template>
	<div v-if="showModal" class="modal-mask">
		<div class="modal-wrapper px-2">
			<div class="modal-container">
				<div class="modal-header border-0">
					<div class="text1 font24"> Naver {{status}}</div>
					<button class="closeButton" @click="CloseModal()" >
						<img src="img/out.svg" alt="Delete" title="Delete">
					</button>
				</div>
				<div class="modal-body">
					<div class="text1 font16 weight400">
						Naver {{status}} com sucesso!
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		status:'',
		showModal: {
			require: true,
			default: false
		}
	},
	methods:{
		CloseModal() {
			window.location.href = '/'
		}
	}
}
</script>
