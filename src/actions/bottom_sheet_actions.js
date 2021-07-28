export const OPEN_BOTTOM_SHEET = "OPEN_BOTTOM_SHEET";
export const CLOSE_BOTTOM_SHEET = "CLOSE_BOTTOM_SHEET";

export const openBottomSheet = (sheet) => {
    return {
        type: OPEN_BOTTOM_SHEET,
        sheet
    }
};

export const closeBottomSheet = () => {
    return {
        type: CLOSE_BOTTOM_SHEET,
    }
};