import React from 'react'

const Header = () => {
    return (
        <header className='bg-light py-3'>
            <div className='container'>
                <h1
                    className='text-center'
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                    }}
                >
                    Robotics School
                </h1>
            </div>
        </header>
    )
}

export default Header
