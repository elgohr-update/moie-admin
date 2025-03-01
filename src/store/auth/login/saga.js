import {call, put, takeEvery, takeLatest} from "redux-saga/effects"

// Login Redux States
import {LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN} from "./actionTypes"
import {apiError, loginSuccess, logoutUserSuccess} from "./actions"

//Include Both Helper File with needed methods
import {getFirebaseBackend} from "../../../helpers/firebase_helper"
import {postSocialLogin,} from "../../../helpers/fakebackend_helper"
import {postLogin} from "../../../helpers/backend_helper";
import {getErrorMessage} from "../../../common/utils";

const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
  try {
      const response = yield call(postLogin, {
        username: user.username,
        password: user.password,
      });
      yield localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
      setTimeout(() => {
        window.location = "/dashboard";
      }, 1000);
  } catch (error) {
    const message = getErrorMessage(error);
    yield put(apiError(message));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))
    }
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
