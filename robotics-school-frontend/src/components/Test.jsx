import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Test = () => {
    const { category } = useParams()
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [result, setResult] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    useEffect(() => {
        loadQuestions(category)
    }, [category])

    const loadQuestions = category => {
        const loadedQuestions = getQuestionsByCategory(category)
        setQuestions(loadedQuestions)
    }

    const handleAnswerSelect = answer => {
        setSelectedAnswer(answer)
        setUserAnswers(prevAnswers => [...prevAnswers, answer])
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setSelectedAnswer(null)
                setCurrentQuestionIndex(currentQuestionIndex + 1)
            } else {
                calculateScore()
            }
        }, 1000)
    }

    const calculateScore = () => {
        const score = userAnswers.filter(
            (answer, index) => answer === questions[index].correctAnswer
        ).length
        setResult(score)
    }

    const getQuestionsByCategory = category => {
        const questionsData = {
            '5-6 класс': [
                {
                    question: 'Что такое робот?',
                    answers: ['Машина', 'Человек', 'Животное', 'Растение'],
                    correctAnswer: 'Машина',
                },
                {
                    question: 'Какая основная задача робота?',
                    answers: [
                        'Автоматизация процессов',
                        'Обучение',
                        'Развлечение',
                        'Вождение',
                    ],
                    correctAnswer: 'Автоматизация процессов',
                },
                {
                    question: 'Как называется процесс программирования робота?',
                    answers: [
                        'Кодирование',
                        'Декодирование',
                        'Редактирование',
                        'Перевод',
                    ],
                    correctAnswer: 'Кодирование',
                },
                {
                    question:
                        'Какой компонент отвечает за управление движением робота?',
                    answers: ['Мотор', 'Датчик', 'Батарея', 'Шестерня'],
                    correctAnswer: 'Мотор',
                },
                {
                    question:
                        'Какая платформа часто используется для обучения робототехнике?',
                    answers: [
                        'LEGO Mindstorms',
                        'Raspberry Pi',
                        'Arduino',
                        'Все перечисленные',
                    ],
                    correctAnswer: 'Все перечисленные',
                },
            ],
            '7-9 класс': [
                {
                    question: 'Что такое микроконтроллер в роботе?',
                    answers: [
                        'Центральный процессор',
                        'Система питания',
                        'Механизм для движения',
                        'Элемент внешней оболочки',
                    ],
                    correctAnswer: 'Центральный процессор',
                },
                {
                    question:
                        'Какой датчик используется для измерения расстояния?',
                    answers: [
                        'Ультразвуковой датчик',
                        'Инфракрасный датчик',
                        'Гироскопический датчик',
                        'Датчик температуры',
                    ],
                    correctAnswer: 'Ультразвуковой датчик',
                },
                {
                    question: 'Что такое сервомотор в робототехнике?',
                    answers: [
                        'Мотор с обратной связью',
                        'Обычный мотор',
                        'Механизм для открытия дверей',
                        'Часть датчика',
                    ],
                    correctAnswer: 'Мотор с обратной связью',
                },
                {
                    question: 'Как называется система координат робота?',
                    answers: [
                        'Декартова система',
                        'Сферическая система',
                        'Цилиндрическая система',
                        'Все перечисленные',
                    ],
                    correctAnswer: 'Декартова система',
                },
                {
                    question:
                        'Какая платформа наиболее популярна для создания автономных роботов?',
                    answers: [
                        'Arduino',
                        'Raspberry Pi',
                        'LEGO Mindstorms',
                        'Все перечисленные',
                    ],
                    correctAnswer: 'Все перечисленные',
                },
            ],
            '10-11 класс': [
                {
                    question: 'Что такое инверсная кинематика в робототехнике?',
                    answers: [
                        'Метод расчета положений звеньев робота',
                        'Программирование поведения робота',
                        'Электрическая схема управления',
                        'Система питания робота',
                    ],
                    correctAnswer: 'Метод расчета положений звеньев робота',
                },
                {
                    question:
                        'Какой алгоритм часто используется в автономных роботах для прокладывания маршрутов?',
                    answers: [
                        'Алгоритм A*',
                        'Бинарный поиск',
                        'Сортировка пузырьком',
                        'Поиск в глубину',
                    ],
                    correctAnswer: 'Алгоритм A*',
                },
                {
                    question:
                        'Какой язык программирования часто используется для программирования роботов?',
                    answers: ['Python', 'Java', 'C++', 'Все перечисленные'],
                    correctAnswer: 'Все перечисленные',
                },
                {
                    question: 'Что такое SLAM в робототехнике?',
                    answers: [
                        'Алгоритм для одновременного построения карты и определения местоположения',
                        'Метод управления моторами',
                        'Тип датчика',
                        'Система контроля батареи',
                    ],
                    correctAnswer:
                        'Алгоритм для одновременного построения карты и определения местоположения',
                },
                {
                    question:
                        'Какой компонент чаще всего используется для связи робота с другими устройствами?',
                    answers: [
                        'Wi-Fi',
                        'Bluetooth',
                        'Звуковой сигнал',
                        'Инфракрасный порт',
                    ],
                    correctAnswer: 'Bluetooth',
                },
            ],
            EV3: [
                {
                    question: 'Что такое LEGO Mindstorms EV3?',
                    answers: [
                        'Платформа для создания программируемых роботов',
                        'Игрушка',
                        'Учебный курс по программированию',
                        'Процессорный модуль',
                    ],
                    correctAnswer:
                        'Платформа для создания программируемых роботов',
                },
                {
                    question:
                        'Какой датчик используется в EV3 для обнаружения цвета?',
                    answers: [
                        'Цветовой датчик',
                        'Инфракрасный датчик',
                        'Ультразвуковой датчик',
                        'Датчик касания',
                    ],
                    correctAnswer: 'Цветовой датчик',
                },
                {
                    question:
                        'Как называется процесс загрузки программы в робота EV3?',
                    answers: [
                        'Загрузка',
                        'Инсталляция',
                        'Программирование',
                        'Прошивка',
                    ],
                    correctAnswer: 'Загрузка',
                },
                {
                    question: 'Что такое мотор EV3 Large?',
                    answers: [
                        'Сильный мотор для движения больших частей робота',
                        'Датчик движения',
                        'Маленький мотор',
                        'Процессорный блок',
                    ],
                    correctAnswer:
                        'Сильный мотор для движения больших частей робота',
                },
                {
                    question: 'Какое ПО используется для программирования EV3?',
                    answers: ['EV3-G', 'Arduino IDE', 'Python', 'Scratch'],
                    correctAnswer: 'EV3-G',
                },
            ],
            Общий: [
                {
                    question:
                        'Какие компоненты необходимы для создания робота?',
                    answers: [
                        'Моторы, датчики, контроллер',
                        'Аккумуляторы, провода, датчики',
                        'Компьютер, монитор, клавиатура',
                        'Процессор, мышь, дисплей',
                    ],
                    correctAnswer: 'Моторы, датчики, контроллер',
                },
                {
                    question: 'Что такое роботизированная рука?',
                    answers: [
                        'Механическая рука, управляющаяся программно',
                        'Протез',
                        'Игрушка',
                        'Инструмент для рисования',
                    ],
                    correctAnswer:
                        'Механическая рука, управляющаяся программно',
                },
                {
                    question: 'Какой принцип работы ультразвукового датчика?',
                    answers: [
                        'Измерение расстояния с помощью звуковых волн',
                        'Определение температуры',
                        'Измерение давления',
                        'Определение уровня воды',
                    ],
                    correctAnswer:
                        'Измерение расстояния с помощью звуковых волн',
                },
                {
                    question:
                        'Как называется процесс автономного движения робота?',
                    answers: [
                        'Навигация',
                        'Программирование',
                        'Механика',
                        'Проектирование',
                    ],
                    correctAnswer: 'Навигация',
                },
                {
                    question: 'Какие типы приводов используются в роботах?',
                    answers: [
                        'Электрический, гидравлический, пневматический',
                        'Ручной, ножной, электрический',
                        'Гидравлический, воздушный, механический',
                        'Все перечисленные',
                    ],
                    correctAnswer:
                        'Электрический, гидравлический, пневматический',
                },
            ],
        }

        return questionsData[category] || []
    }

    const getButtonClass = answer => {
        if (!selectedAnswer) return 'btn btn-secondary mb-2 w-100'
        return answer === questions[currentQuestionIndex].correctAnswer
            ? 'btn btn-success mb-2 w-100'
            : answer === selectedAnswer
            ? 'btn btn-danger mb-2 w-100'
            : 'btn btn-secondary mb-2 w-100'
    }

    return (
        <div className='text-center'>
            {result === null ? (
                <>
                    <h3>{questions[currentQuestionIndex]?.question}</h3>
                    {questions[currentQuestionIndex]?.answers.map(
                        (answer, index) => (
                            <button
                                key={index}
                                className={getButtonClass(answer)}
                                onClick={() => handleAnswerSelect(answer)}
                                disabled={!!selectedAnswer} // Отключаем кнопки после выбора ответа
                            >
                                {answer}
                            </button>
                        )
                    )}
                </>
            ) : (
                <h3>
                    Ваш результат: {result} из {questions.length}
                </h3>
            )}

            <button
                className='btn btn-primary mt-4'
                onClick={() => navigate(-1)}
            >
                Назад
            </button>
        </div>
    )
}

export default Test
