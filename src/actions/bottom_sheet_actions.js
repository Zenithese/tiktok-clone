export const OPEN_BOTTOM_SHEET = "OPEN_BOTTOM_SHEET";
export const CLOSE_BOTTOM_SHEET = "CLOSE_BOTTOM_SHEET";

export const openModal = modal => {
    return {
        type: OPEN_BOTTOM_SHEET,
        modal,
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_BOTTOM_SHEET,
    }
};