import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const categories = ['5-6 класс', '7-9 класс', '10-11 класс', 'EV3', 'Общий']

    const handleCategorySelect = category => {
        navigate(`/test/${category}`) // Перенаправление на тест
    }

    return (
        <div className='text-center'>
            <h2>Выберите категорию теста:</h2>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className='btn btn-primary oversized-button mb-2 w-100'
                    onClick={() => handleCategorySelect(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default Home
