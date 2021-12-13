import React, {useState} from "react";
import {apiRequest} from "./api/api";

export const Request = () => {
    const [success, setSuccess] = useState<boolean>(false)
    const onClickHandler = () => {
        apiRequest.test(success)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log( error.response ? error.response.data.errorText : error.message );
            })
    }
    return (
        <div>
            <input onChange={() => setSuccess(!success)} type="checkbox"/>
            <button onClick={onClickHandler}>Post</button>
        </div>
    )
}