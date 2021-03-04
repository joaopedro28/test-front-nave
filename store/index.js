const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

export const getters = {
    isAuth: state => {
        return !!state.access_token
    }
}
export const state = () => {
    return {
		access_token: ''
    }
}
export const mutations = {
    setAuth(state, token) {
        state.access_token = token
    },
}
export const actions = {
    async nuxtServerInit({commit, state}, {req, app}) {
        let token = '';
        if (req.headers.cookie) {
			const parsed = cookieparser.parse(req.headers.cookie)
            try {
				token = JSON.parse(parsed.auth)

            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setAuth', token.access_token)

    },
    logout({commit}) {
        this.$axios.$get('/?logout=sim')
        commit('setAuth', {
            access_token: '',
        })
        Cookie.remove('access_token')
    }
}
