import {all, call, fork, put, takeEvery} from "redux-saga/effects"

//Account Redux states
import {GET_PRODUCT_IMAGES, GET_PRODUCT_IMAGE, REGISTER_PRODUCT_IMAGE, UPDATE_PRODUCT_IMAGE} from "./actionTypes"

import {
    getProductImagesSuccess,
    getProductImagesFailed,
    registerProductImageSuccess,
    getProductImageSuccess,
    getProductImageFailed,
    registerProductImageFailed,
    updateProductImageSuccess,
    updateProductImageFail
} from "./actions"

import {
    registerProductImageApi,
    updateProductImageApi,
    fetchProductImageApi,
    fetchProductImagesApi
} from "../../helpers/backend_helper"

import Conditionals from "../../common/conditionals";

/**
 * *  Configuración de CRUD Saga (Realizar configuración para cada uno de las replicas)
 */

const ACTION_NAME_LIST      =   GET_PRODUCT_IMAGES;
const ACTION_NAME_GET       =   GET_PRODUCT_IMAGE;
const ACTION_NAME_CREATE    =   REGISTER_PRODUCT_IMAGE;
const ACTION_NAME_UPDATE    =   UPDATE_PRODUCT_IMAGE;

const LIST_API_REQUEST      =   fetchProductImagesApi;
const GET_API_REQUEST       =   fetchProductImageApi;
const POST_API_REQUEST      =   registerProductImageApi;
const PUT_API_REQUEST       =   updateProductImageApi;

//actions
const LIST_SUCCESS_ACTION   =   getProductImagesSuccess;
const LIST_FAILED_ACTION    =   getProductImagesFailed;
const GET_SUCCESS_ACTION    =   getProductImageSuccess;
const GET_FAILED_ACTION     =   getProductImageFailed;
const CREATE_SUCCESS_ACTION =   registerProductImageSuccess;
const CREATE_FAILED_ACTION  =   registerProductImageFailed;
const UPDATE_SUCCESS_ACTION =   updateProductImageSuccess;
const UPDATE_FAILED_ACTION  =   updateProductImageFail;


const LIST_URL = "/productImages";

function* get({ id }) {
    try {
        const response = yield call(GET_API_REQUEST,  id );
        yield put(GET_SUCCESS_ACTION(response))
    } catch (error) {
        yield put(GET_FAILED_ACTION(error))
    }
}


function* fetch({conditional, limit, offset}) {
    try {

        const cond = Conditionals.getConditionalFormat(conditional);
        const query = Conditionals.buildHttpGetQuery(cond, limit, offset);

        const response = yield call(LIST_API_REQUEST, query)
        yield put(LIST_SUCCESS_ACTION(response.data, response.meta));
    } catch (error) {
        yield put(LIST_FAILED_ACTION(error))
    }
}

function* register({ payload: { data, history } }) {
    try {
        const response = yield call(POST_API_REQUEST, data)
        yield put(CREATE_SUCCESS_ACTION(response))
        history.push(LIST_URL)

    } catch (error) {
        yield put(CREATE_FAILED_ACTION(error))
    }
}

function* update({ payload: { id, data, history } }) {
    try {
        const response = yield call(PUT_API_REQUEST, id, data)
        yield put(UPDATE_SUCCESS_ACTION(response))
        history.push(LIST_URL)

    } catch (error) {
        yield put(UPDATE_FAILED_ACTION(error))
    }
}

export function* watchProductImage() {
    yield takeEvery(ACTION_NAME_CREATE, register);
    yield takeEvery(ACTION_NAME_UPDATE, update);
    yield takeEvery(ACTION_NAME_LIST, fetch);
    yield takeEvery(ACTION_NAME_GET, get)
}

function* productImageSaga() {
    yield all([fork(watchProductImage)])
}

export default productImageSaga
