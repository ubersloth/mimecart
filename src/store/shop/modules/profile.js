import { GET_PROFILE } from '@/store/shop/actions.type'
import { RECEIVE_PROFILE } from '@/store/shop/mutations.type'
import { ProfileService } from '@/api/api.service'

const state = {
  data: {
    firstName: '',
    lastName: ''
  }
}

const actions = {
  [GET_PROFILE] ({ commit }) {
    ProfileService.get().then(({ data }) => {
      commit(RECEIVE_PROFILE, data)
    })
  }
}

const mutations = {
  [RECEIVE_PROFILE] (state, profile) {
    state.data = profile
  }
}

export default {
  state,
  actions,
  mutations
}
