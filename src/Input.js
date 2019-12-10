import React from 'react'

export default function Input(props) {
    const handleChange = (e) => {
        props.onMessageChange(e.target.value)
    }

    // 버튼을 클릭하면 현재 작성한 일기를 담은 객체를 
    // props를 통해 넘겨받은 함수 onSubmit을 통해 올려 보냅니다. 
    const handleClick = () => {
        let diary = {text: props.log}
        props.onSubmit(diary)
    }
    return (
        <>
            <input placeholder="throw anything on your mind" onChange={handleChange} value={props.log} style={{width: '300px'}} />
            <button onClick={handleClick}>submit!</button>
        </>
    )
}
