import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'
import AlternativeClock from "../h9/AlternativeClock";
import {AlternativeClock2} from "../h9/AlternativeClock2";

function HW10() {
    // useSelector, useDispatch

    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType,initStateType>(state => state.loading)

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(()=>dispatch(loadingAC(false)),3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.value
                ? (
                    <div className={s.overlayLoader}>
                        <div className={s.loader}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            <AlternativeClock/>
            <hr/>
            <hr/>
            <AlternativeClock2/>
            <hr/>

        </div>
    )
}

export default HW10
