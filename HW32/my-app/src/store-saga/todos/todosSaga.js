import { loadTaskFailure, addTaskRequest, editTaskRequest, toggleRequest, clearTaskRequest, deleteTaskRequest, loadTasksRequest, clearTaskFailure, editTaskFailure, loadTaskSuccess, addTaskFailure, addTaskSuccess, editTaskSuccess, deleteTaskFailure, deleteTaskSuccess, clearTasksSuccess, toggleCompleted } from "./todosSlice";
import axios from 'axios';
import { call, put, takeEvery } from "@redux-saga/core/effects";



const APi_URL = 'https://dummyjson.com/todos';

function* loadTasksSaga() {
  try {
    const res = yield call(axios.get, `${APi_URL}`);
    yield put(loadTaskSuccess(res.data.todos))
  }
  catch (err) {
    yield put(loadTaskFailure(err.message))
  }
}

function* addTaskSaga(action) {
  try {
    const task = {
      id: Date.now(),
      todo: action.payload,
      completed: false,
      userId: 1
    };

    yield call(axios.post, `${APi_URL}/add`, task);
    yield put(addTaskSuccess(task));
  } catch (error) {
    yield put(addTaskFailure(error.message));
  }
}

function* deleteTasksSaga(action) {
  try {
    yield put(deleteTaskSuccess(action.payload))
  }
  catch (err) {
    yield put(deleteTaskFailure(err.message))
  }
}

function* toggleCompletedSaga(action) {
  try {
    const res = yield call(axios.put, `${APi_URL}/${action.payload.id}`, {
      completed: action.payload.completed
    })
    yield put(toggleCompleted(res.data))
  }
  catch (err) {
    console.log(err)
  }
}

function* editTasksSaga(action) {
  try {
    const {id, todo }= action.payload;
    yield put(editTaskSuccess({id,todo}))
  }
  catch (err){
    yield put(editTaskFailure(err.message))
  }
}

function* clearTasksSaga() {
  try {
    yield put(clearTasksSuccess())
  }
  catch (err) {
    yield put(clearTaskFailure)
  }
}

export default function* todosSaga() {
  yield takeEvery(addTaskRequest.type, addTaskSaga);
  yield takeEvery(loadTasksRequest.type, loadTasksSaga);
  yield takeEvery(deleteTaskRequest.type, deleteTasksSaga);
  yield takeEvery(clearTaskRequest.type, clearTasksSaga)
  yield takeEvery(toggleRequest.type, toggleCompletedSaga)
  yield takeEvery(editTaskRequest.type, editTasksSaga)
}
