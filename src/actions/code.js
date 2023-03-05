import { activeUsername, getCode } from "../services/userService";

export const activate_user = (username  , code) => {
    return async (dispatch) => {
        const { data } = await activeUsername(username , code);
        await dispatch({ type: "ACTIVE_USER", payload: data.code });
    };
};

export const get_activeCode = (user) => {
    return async (dispatch, getState) => {
        const { data, status } = await getCode(user);
        if (status === 201) successMessage("کاربر با موفقیت اکتیو شد");
        await dispatch({
            type: "GET_CODE",
            payload: [...getState().code, data.code],
        });
    };
};
