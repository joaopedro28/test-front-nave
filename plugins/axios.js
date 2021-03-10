export default function ({ $axios, app, store }) {
    // if (process.client && store.getters.isAuth) {
	$axios.setToken(store.state.access_token, 'Bearer');
	// }
	$axios.onRequest(test =>{
		$axios.setToken(store.state.access_token, 'Bearer');
    })
}
