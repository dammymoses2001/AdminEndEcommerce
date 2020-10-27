import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function protectedRoute({ component: Component, ...rests }) {
    return (
        <Route
            {...rests}
            render={(props) => {
                if (true) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={{
                        pathname: '/login',
                        state: { from: props.locations },
                    }}
                    />
                }
            }}
        />
    )

}
