import {all, call, fork, put, takeEvery} from "redux-saga/effects"

//Account Redux states
import {GET_CUSTOMERS, GET_CUSTOMER, REGISTER_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER} from "./actionTypes"
import {
    getCustomersSuccess,
    registerCustomerSuccess,
    getCustomersFail,
    getCustomerSuccess,
    getCustomerFail,
    registerCustomerFail,
    updateCustomerSuccess, updateCustomerFail, deleteCustomerSuccess, deleteCustomerFailed
} from "./actions"

//Include Both Helper File with needed methods
import {
    registerCustomer,
    updateCustomer,
    fetchCustomer,
    fetchCustomersApi,
    deleteCustomerApi
} from "../../helpers/backend_helper"
import Conditionals from "../../common/conditionals";

function* fetchCustomerById({ id }) {
    try {
        const response = yield call(fetchCustomer, { id });
        yield put(getCustomerSuccess(response))
    } catch (error) {
        yield put(getCustomerFail(error))
    }
}


function* fetchCustomers({conditional, limit, offset}) {
    try {

        const cond = Conditionals.getConditionalFormat(conditional);
        const query = Conditionals.buildHttpGetQuery(cond, limit, offset);

        const response = yield call(fetchCustomersApi, query)
        yield put(getCustomersSuccess(response.data, response.meta));
    } catch (error) {
        yield put(getCustomersFail(error))
    }
}

// Is customer register successfull then direct plot user in redux.
function* customerRegister({ payload: { customer, history } }) {
    try {
        const response = yield call(registerCustomer, customer)
        yield put(registerCustomerSuccess(response))
        history.push("/customers")

    } catch (error) {
        yield put(registerCustomerFail(error))
    }
}

// Is customer register successfull then direct plot user in redux.
function* customerUpdate({ payload: { id, customer, history } }) {
    try {
        const response = yield call(updateCustomer, id, customer)
        yield put(updateCustomerSuccess(response))
        history.push("/customers")

    } catch (error) {
        console.log("error", error);
        yield put(updateCustomerFail(error))
    }
}

function* customerDelete({ payload: { id, history } }) {
    try {
        yield call(deleteCustomerApi, id)
        yield put(deleteCustomerSuccess(id))
        history.push("/customers")

    } catch (error) {
        console.log("error", error);
        yield put(deleteCustomerFailed(error))
    }
}

export function* watchCustomer() {
    yield takeEvery(REGISTER_CUSTOMER, customerRegister);
    yield takeEvery(UPDATE_CUSTOMER, customerUpdate);
    yield takeEvery(GET_CUSTOMERS, fetchCustomers);
    yield takeEvery(GET_CUSTOMER, fetchCustomerById);
    yield takeEvery(DELETE_CUSTOMER, customerDelete);
}

function* customerSaga() {
    yield all([fork(watchCustomer)])
}

export default customerSaga
