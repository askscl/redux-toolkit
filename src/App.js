import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/modules/counterStore';    
import { fetchCannels } from './store/modules/channelStore';

function App() {
    const { count } = useSelector(state => state.counter);
    const { channelList } = useSelector(state => state.channel);
    const dispatch = useDispatch(); //特别注意：要先调用 一下dispatch，不然会报错
    // 使用useEffect触发异步请求执行
    useEffect(() => {
        dispatch(fetchCannels());
    }, [dispatch]);
    return (
        <div className="App">
            <h1>count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            <div>
                <ul>
                    {channelList.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
