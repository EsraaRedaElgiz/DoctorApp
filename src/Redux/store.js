import SignUpReducer from './Reducers/SignUpSlice'
import ResetPasswordReducer from './Reducers/ResetPasswordSlice'
import NewPasswordReducer from './Reducers/NewPasswordSlice'
import VertificationCodeReducer from './Reducers/VertificationCodeSlice'
import ForgetPasswordReducer from './Reducers/SendEmailSlice'
import LoginReducer from './Reducers/LoginSlice'
import MedicalSheetReducer from './Reducers/MedicalSheetSlice'
import IntroSliderReducer from './Reducers/IntroSliderSlice'
import { createStore, configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
        SignUpReducer: SignUpReducer,
        ResetPasswordReducer: ResetPasswordReducer,
        NewPasswordReducer: NewPasswordReducer,
        VertificationCodeReducer: VertificationCodeReducer,
        ForgetPasswordReducer: ForgetPasswordReducer,
        LoginReducer: LoginReducer,
        MedicalSheetReducer: MedicalSheetReducer,
        IntroSliderReducer:IntroSliderReducer
    }
})
export default store;
