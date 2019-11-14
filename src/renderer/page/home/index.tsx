import React from 'react';
import { store } from '../..';
import { countAdd } from './action';

interface IProps {}

const Home: React.FC<IProps> = (props: IProps) => {

    const home = store.getState().homeReducer;
    const { count } = home;

    const onClick = () => {
        store.dispatch(countAdd(1))
    }

    return <div><button onClick={onClick}>count：{count}</button></div>
}

export default Home;