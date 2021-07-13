export const OPEN_BOTTOM_SHEET = "OPEN_BOTTOM_SHEET";
export const CLOSE_BOTTOM_SHEET = "CLOSE_BOTTOM_SHEET";

export const openBottomSheet = () => {
    return {
        type: OPEN_BOTTOM_SHEET,
    }
};

export const closeBottomSheet = () => {
    return {
        type: CLOSE_BOTTOM_SHEET,
    }
};