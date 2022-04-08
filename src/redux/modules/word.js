// word.js
import { db } from "../../firebase"
import { collection, getDocs, addDoc, getDoc, Firestore, doc, updateDoc }
    from "firebase/firestore";

// Actions
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';

const initialState = {
    list: []
};

// Action Creators
export function loadWord(word_list) {
    return { type: LOAD, word_list };//액션 리턴
}

export function createWord(word) {
    return { type: CREATE, word };
}

export function updateWord(word_index) {
    return { type: UPDATE, word_index };
}

//middlewares 파이어베이스와 통신하는 함수, 파이어스토어에서 데이터 가져오는 함수, 리덕스 청크(함수 리턴) 여기서 씀
//R미들웨어
export const loadWordFB = () => {
    return async function (dispatch) {//async:비동기통신하게 dispatch parameter는 의문을 갖지 마라
        const word_data = await getDocs(collection(db, "diction"));//파이어베이스에서 가지고온 데이터

        let word_list = [];
        word_data.forEach((doc) => {//doc:word_data 필드 하나하나
            word_list.push({ id: doc.id, ...doc.data() })
        });
        console.log(word_list);//word_data 필드 하나하나를 word_list에 넣은거

        dispatch(loadWord(word_list));//디스패치 일으켜서 word_list 수정요청을 보냄
    };
};

//C미들웨어
export const createWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "diction"), word);
        const word_data = await { id: docRef.id, ...word }
        console.log(word_data)
        dispatch(createWord(word_data))
    };
};

//U 미들웨어
export const updateWordFB = (word_idx) => {
    console.log("워드인덱스:" + word_idx);
    return async function (dispatch, getState) {
        if (!word_idx) {
            return;
        }
        const docRef = doc(db, "diction", word_idx);//firebase연결 객체
        await updateDoc(docRef, { remem: true });
        window.location.reload()
        const _word_list = getState().word.list
        const word_index = _word_list.findIndex((w) => {
            return w.id === word_index;
        })
        dispatch(updateWord(word_index));
    }
}

// Reducer
export default function word(state = initialState, action = {}) {
    switch (action.type) {
        case "word/LOAD": {
            return { list: action.word_list };//액션에 넣어놓은 word_list 교체
        }
        case "word/CREATE": {
            const new_word_list = [...state.list, action.word]
            return { list: new_word_list };
        }
        default:
            return state;
    }
}