import React from 'react'

export default function WrittenDiaries(props) {
    return (
        <div>
            {props.logs.map((log, i)=>
            (<div key={i}>
                <span>{`${i+1}번째 일기: `}</span>
                <span>{log.text}</span>
            </div>)
            )}
        </div>
    )
}
