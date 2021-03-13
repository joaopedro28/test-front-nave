<template>

</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    middleware: 'authenticated',
	mounted() {
		this.$store.dispatch('logout')
		window.location.href = '/login'
	}
}
</script>
