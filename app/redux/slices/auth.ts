import {createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { AppDispatch, RootState } from "../store";
import { toast } from "react-hot-toast";


// ----------------------------------------------------------------------

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  user: null,
  user_id: null,
  email: "",
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = "";
      state.user_id = null;
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

// Reducer
export default slice.reducer;


export function LoginUser(formValues:any) {
  return async (dispatch:AppDispatch,getState:RootState) => {
    // Make API call here

    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));

    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response:any) {
        if(response.status ===200){
       console.log(response.data.user_id)
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
            user_id: response.data.user_id,
          })
        );
        window.localStorage.setItem("user_id", response.data.user_id);
        
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );
       


      }
    
      })
      .catch(function (error:any) {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
        toast.error(error.message);

      })
      .finally(() => {
        if (!getState().auth.error) 
        { toast.success("Loged in successfully");
          window.location.href = "/";

        }
      });
  };
}

export function LogoutUser() {
  return async (dispatch:AppDispatch) => {
    window.localStorage.removeItem("user_id");
    dispatch(slice.actions.signOut());
  };
}

export function RegisterUser(formValues:any) {
  return async (dispatch:AppDispatch, getState:any) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));

    await axios
      .post(
        "/auth/register",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response:any) {
        dispatch(
          slice.actions.updateRegisterEmail({ email: formValues.email })
        );

        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );

      })
      .catch(function (error) {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ error: true, isLoading: false })
        );
        toast.error(error.message);
        
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/verify";
        }
      });
  };
}
export function ForgotPassword(formValues:any) {
  return async (dispatch:AppDispatch) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));

    await axios
      .post(
        "/auth/forgot-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response:any) {

        
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );
        toast.success("Reset Link sended");

      })
      .catch(function (error) {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
        toast.error(error.message);

      });
  };
}
export function NewPassword(formValues:any) {
  return async (dispatch:AppDispatch) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));

    await axios
      .post(
        "/auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response:any) {
        dispatch(
            slice.actions.logIn({
              isLoggedIn: true,
              token: response.data.token,
            })
          );
        
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );
        toast.success("Password changed successfully");

      })
      .catch(function (error) {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
        toast.error(error.message);

      });
  };
}



export function VerifyEmail(formValues:any) {
  return async (dispatch:AppDispatch, getState:RootState) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));

    await axios
      .post(
        "/auth/verify",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response:any) {
        if(response.status ==200){
        dispatch(slice.actions.updateRegisterEmail({ email: "" }));
        window.localStorage.setItem("user_id", response.data.user_id);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );


       
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );
        window.location.href = "/";
        toast.success("User verified successully");
      
      }
      })
      .catch(function (error) {
        dispatch(
          slice.actions.updateIsLoading({ error: true, isLoading: false })
        );
        toast.error(error.message);

      });
  };
}
