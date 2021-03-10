<template>
	<div>
		<div class="modal fade modal-naver" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-body d-flex flex-column flex-md-row p-0">
						<div class="w-100 w-md-50">
							<img
								src="/img/img1.png"
								class="img-fluid w-100 "
								alt="naver"
								title="Naver"
							/>
						</div>
						<div class="w-100 w-md-50 h-100">
							<div class="modal-header">
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="p-4">
								<h3 class="title1 font36">{{content.name}}</h3>
								<h5 class="text1 font24 weight400">{{content.job_role}}</h5>
								<label class="text1 font24 my-2" for="name">Idade</label>
								<p class="text1 font24 weight400">{{content.birthdate}}</p>
								<label class="text1 font24 my-2" for="name">Tempo de empresa</label>
								<p class="text1 font24 weight400">{{content.admission_date}}</p>
								<label class="text1 font24 my-2" for="name">Projetos que participou</label>
								<p class="text1 font24 weight400">{{content.project}}</p>
							</div>
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
		content: {
			default: ''
		},
		id: {
			default: ''
		},
	},
	data() {
		return {}
	},
	methods:{
		TimeOf(date) {
			let today = new Date();
			let yourDate = new Date(date);
			let time = today.getFullYear() - yourDate.getFullYear();
			let mounth = today.getMonth() - yourDate.getMonth();
			if (mounth < 0 || (mounth === 0 && today.getDate() < yourDate.getDate())) {
				time --;
			}
			return time
		}
	}
}
</script>
