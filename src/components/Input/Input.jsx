import React from 'react'

export default function Input(prop) {
    return (
        <div>
            {/* {console.log(prop)} */}
            <div className={prop.className}>
                <label htmlFor="exampleInputEmail1">{prop.label}</label>
                <input type={prop.type} className="form-control" placeholder={prop.placeholder} />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
        </div>
    )
}
