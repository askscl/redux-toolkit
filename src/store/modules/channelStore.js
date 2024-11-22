import {createSlice} from "@reduxjs/toolkit";

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: [],
    },
    reducers:{
        setChannels(state, action){
            state.channelList = action.payload
        }
    }
})

// 异步请求部分
// 模拟数据
const dataJson = {
    "data": {
        "channels": [
            {
                "id": 0,
                "name": "推荐"
            },
            {
                "id": 1,
                "name": "html"
            },
            {
                "id": 2,
                "name": "开发者资讯"
            },
            {
                "id": 4,
                "name": "c++"
            },
            {
                "id": 6,
                "name": "css"
            },
            {
                "id": 7,
                "name": "数据库"
            },
            {
                "id": 8,
                "name": "区块链"
            },
            {
                "id": 9,
                "name": "go"
            },
            {
                "id": 10,
                "name": "产品"
            },
            {
                "id": 11,
                "name": "后端"
            },
            {
                "id": 12,
                "name": "linux"
            },
            {
                "id": 13,
                "name": "人工智能"
            },
            {
                "id": 14,
                "name": "php"
            },
            {
                "id": 15,
                "name": "javascript"
            },
            {
                "id": 16,
                "name": "架构"
            },
            {
                "id": 17,
                "name": "前端"
            },
            {
                "id": 18,
                "name": "python"
            },
            {
                "id": 19,
                "name": "java"
            },
            {
                "id": 20,
                "name": "算法"
            },
            {
                "id": 21,
                "name": "面试"
            },
            {
                "id": 22,
                "name": "科技动态"
            },
            {
                "id": 23,
                "name": "js"
            },
            {
                "id": 24,
                "name": "设计"
            },
            {
                "id": 25,
                "name": "数码产品"
            },
            {
                "id": 26,
                "name": "软件测试"
            }
        ]
    },
    "message": "OK"
}

const { setChannels } = channelStore.actions
const fetchCannels = () => async (dispatch) => {
    const response = await fetch('http://geek.itheima.net/v1_0/channels')
    const data = await response.json()
    // const data = dataJson;
    dispatch(setChannels(data.data.channels))
}

export {fetchCannels}
const reducer = channelStore.reducer
export default reducer