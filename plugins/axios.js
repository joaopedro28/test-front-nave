export default function ({ $axios, app, store }) {
	$axios.setToken(store.state.access_token, 'Bearer');
	$axios.onRequest(test =>{
		$axios.setToken(store.state.access_token, 'Bearer');
    })
}
