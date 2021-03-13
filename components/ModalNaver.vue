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
							<div class="modal-header border-0 justify-content-end ">
								<img src="img/out.svg" class="cursor-pointer" data-bs-dismiss="modal" aria-label="Close">
							</div>
							<div class="px-4">
								<h3 class="title1 font24">{{content.name}}</h3>
								<h5 class="text1 font16 weight400">{{content.job_role}}</h5>
								<label class="text1 font16 my-2" for="name">Idade</label>
								<p class="text1 font16 weight400">{{$moment.utc(content.birthdate).format('DD/MM/YYYY')}}</p>
								<label class="text1 font16 my-2" for="name">Tempo de empresa</label>
								<p class="text1 font16 weight400">{{$moment.utc(content.admission_date).format('DD/MM/YYYY')}}</p>
								<label class="text1 font16 my-2" for="name">Projetos que participou</label>
								<p class="text1 font16 weight400">{{content.project}}</p>
								<NaverController class="mb-3" :id="content.id"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import NaverController from '../components/NaverController.vue';

export default {
	props: {
		content: {
			default: ''
		},
		id: {
			default: ''
		},
	},
	components: {
		NaverController
	}
}
</script>
