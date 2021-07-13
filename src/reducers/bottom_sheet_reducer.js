import { OPEN_BOTTOM_SHEET, CLOSE_BOTTOM_SHEET } from "../actions/bottom_sheet_actions";

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_BOTTOM_SHEET:
            return true;
        case CLOSE_BOTTOM_SHEET:
            return null;
        default:
            return state;
    }
}