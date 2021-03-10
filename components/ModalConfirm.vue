<template>
	<div v-if="showModal" class="modal-mask">
		<div class="modal-wrapper">
			<div class="modal-container">
				<div> Naver {{status}}</div>
				<div class="modal-header">
					<slot name="header">
						Naver {{status}} com sucesso!
					</slot>
				</div>
				<nuxt-link to="/" > X</nuxt-link>
				<div class="modal-body">
					<slot name="body">
					default body
					</slot>
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
	}
}
</script>
