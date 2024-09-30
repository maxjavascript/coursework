import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AuthForm from './components/AuthForm'
import Footer from './components/Footer'
import Home from './components/Home' // Импорт компонента Home
import Test from './components/Test' // Импорт компонента Test

const App = () => {
    return (
        <Router>
            <div className='d-flex flex-column min-vh-100'>
                <Header />
                <main className='flex-grow-1 d-flex justify-content-center align-items-center'>
                    <Routes>
                        <Route path='/' element={<AuthForm />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/test/:category' element={<Test />} />{' '}
                        {/* Добавлен маршрут для тестов */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
