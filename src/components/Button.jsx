import React from 'react'

const Button = ({ children }) => {
    return <button className="bg-primary px-8 py-2 rounded-3xl text-white">{children}</button>;
}

export default Button