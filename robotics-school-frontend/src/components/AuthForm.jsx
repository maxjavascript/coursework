import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Импортируем useNavigate вместо useHistory
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './AuthForm.css'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate() // Используем useNavigate для навигации

    const handleSubmit = e => {
        e.preventDefault()
        // Выполните здесь логику входа/регистрации
        // Если успешный вход, перенаправляем на /home
        if (isLogin) {
            navigate('/home') // Используем navigate для перенаправления
        }
    }

    return (
        <div className='auth-form-container'>
            <div className='auth-form-card'>
                <h2 className='text-center mb-4'>
                    {isLogin ? 'Вход' : 'Регистрация'}
                </h2>
                <Form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <Form.Group controlId='formBasicName' className='mb-3'>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Введите полное имя'
                                className='form-input'
                            />
                        </Form.Group>
                    )}
                    <Form.Group controlId='formBasicEmail' className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Введите email'
                            className='form-input'
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword' className='mb-3'>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Введите пароль'
                            className='form-input'
                        />
                    </Form.Group>
                    <Button
                        variant='primary'
                        type='submit'
                        className='w-100 mb-3'
                    >
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    <div className='text-center'>
                        <Button
                            variant='link'
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin
                                ? 'Нет учетной записи?'
                                : 'Есть учетная запись? Войдите!'}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AuthForm
