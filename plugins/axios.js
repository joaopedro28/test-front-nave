export default function ({ $axios, app, store }) {
    // if (process.client && store.getters.isAuth) {
		console.log('store.state.access_token',store.state.access_token)
	$axios.setToken(store.state.access_token, 'Bearer');
	// }
	$axios.onRequest(test =>{
		$axios.setToken(store.state.access_token, 'Bearer');
		// $axios.setHeader('Authorization', store.state.access_token);
		console.log(test)
    })
}
