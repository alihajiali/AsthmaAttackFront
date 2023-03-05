import {
    getUser ,
    getUsers,
    deleteUser ,
    updateUser ,
    newUser,
} from "./../services/userService";
import { successMessage } from "./../utils/message";

export const getAllUsers = () => {
    return async (dispatch) => {
        const  data  = await getUsers();
        console.log("users (action get all users:)",data.users)
        await dispatch({ type: "INIT", payload: data.users });
    };
};

export const createNewUser = (username , password , email , phone) => {
    return async (dispatch, getState) => {
        const user = {username , password , email , phone}
        const  data = await newUser(username , password , email , phone);
        await dispatch({
            type: "ADD_USER",
            payload: [...getState().users, user],
        });


        await dispatch({
            type:"SET_USER",
            payload:username
        })
        return data;
    };
};


export const handleUserUppdate = (user , code  ,newuser) => {
    return async (dispatch, getState) => {
        const users = [...getState().users];
        const filteredUsers = users.filter(
            (user1) => user1.id !== user.id
        );
 

        try {
            const { data, status } = await updateUser(
                user,
                code,
                newuser
            );
            console.log(data);
            await dispatch({
                type: "UPDATE_USER",
                payload: [...filteredUsers, data.user],
            });
            if (status === 200) {
                successMessage("کاربر با موفقیت ویرایش شد");
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_USER", payload: [...users] });
        }
    };
};

export const handleUserDelete = (username,code) => {
    return async (dispatch, getState) => {
        const users = [...getState().users];
        const filteredusers = users.filter(
            (user1) =>  user1.username!== username
        );

        try {
            await dispatch({
                type: "DELETE_USER",
                payload: [...filteredusers],
            });
            const { status } = await deleteUser(username , code);

            if (status === 200) successMessage("کاربر با موفقیت پاک شد ");
        } catch (ex) {
            await dispatch({ type: "DELETE_USER", payload: [...users] });
        }
    };
};
