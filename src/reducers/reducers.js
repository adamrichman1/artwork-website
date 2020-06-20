// json
import images from '../constants/art-categories'

const initialState = {
    images: images
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}
