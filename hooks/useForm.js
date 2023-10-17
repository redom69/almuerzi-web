import React, { useState } from "react";

export default (initialState, onSubmmit) => {
    const [inputs, setInputs] = useState(initialState)

    const subscribe = field => value => {
        setInputs({ ...inputs, [field]: value })
    }

    const handleSubmmit = () => {
        onSubmmit(inputs)
    }

    return { subscribe, inputs, handleSubmmit }
}