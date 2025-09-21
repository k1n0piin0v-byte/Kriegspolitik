// Данные о правительствах стран
const countryGovernments = {
    // Российская Республика
    "Российская Республика": {
        leader: "Алексей Навальный",
        government: "Временное правительство",
        rulingIdeology: "Либерализм",
        stability: "65%",
        support: "58%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 10 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 45 },
                { name: "Консерватизм", percentage: 20 },
                { name: "Прямая Демократия", percentage: 15 },
                { name: "Социал-Демократия", percentage: 10 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 2 },
                { name: "Авторитаризм", percentage: 5 },
                { name: "Патернализм", percentage: 3 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Кубанская Республика
    "Кубанская Республика": {
        leader: "Вениамин Кондратьев",
        government: "Казачье правительство",
        rulingIdeology: "Консерватизм",
        stability: "72%",
        support: "65%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 8 },
                { name: "Милитаризм", percentage: 12 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 3 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 5 },
                { name: "Консерватизм", percentage: 35 },
                { name: "Прямая Демократия", percentage: 3 },
                { name: "Социал-Демократия", percentage: 2 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 10 },
                { name: "Авторитаризм", percentage: 15 },
                { name: "Патернализм", percentage: 25 },
                { name: "Нейтралитет", percentage: 2 }
            ]
        }
    },
    
    // Северо-Кавказская Социалистическая Республика
    "Северо-Кавказская Социалистическая Республика": {
        leader: "Рамазан Кадыров",
        government: "Совет народных комиссаров",
        rulingIdeology: "Сталинизм",
        stability: "85%",
        support: "78%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 0 },
                { name: "Милитаризм", percentage: 15 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 60 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 20 },
                { name: "Марксизм", percentage: 10 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 0 },
                { name: "Консерватизм", percentage: 0 },
                { name: "Прямая Демократия", percentage: 0 },
                { name: "Социал-Демократия", percentage: 0 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 0 },
                { name: "Авторитаризм", percentage: 5 },
                { name: "Патернализм", percentage: 5 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Кавказский Халифат
    "Кавказский Халифат": {
        leader: "Амир аль-Хаким",
        government: "Шура (Совет старейшин)",
        rulingIdeology: "Фалангизм",
        stability: "90%",
        support: "82%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 10 },
                { name: "Милитаризм", percentage: 20 },
                { name: "Фалангизм", percentage: 70 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 0 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 0 },
                { name: "Консерватизм", percentage: 0 },
                { name: "Прямая Демократия", percentage: 0 },
                { name: "Социал-Демократия", percentage: 0 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 0 },
                { name: "Авторитаризм", percentage: 0 },
                { name: "Патернализм", percentage: 0 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Республика Украина
    "Республика Украина": {
        leader: "Владимир Зеленский",
        government: "Верховная Рада",
        rulingIdeology: "Либерализм",
        stability: "60%",
        support: "52%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 8 },
                { name: "Милитаризм", percentage: 12 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 40 },
                { name: "Консерватизм", percentage: 15 },
                { name: "Прямая Демократия", percentage: 10 },
                { name: "Социал-Демократия", percentage: 20 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 2 },
                { name: "Авторитаризм", percentage: 5 },
                { name: "Патернализм", percentage: 3 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Азовская Зона Оккупации
    "Азовская Зона Оккупации": {
        leader: "Отсутствует",
        government: "Военная администрация",
        rulingIdeology: "Милитаризм",
        stability: "45%",
        support: "38%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 30 },
                { name: "Реваншизм", percentage: 15 },
                { name: "Милитаризм", percentage: 50 },
                { name: "Фалангизм", percentage: 5 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 0 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 0 },
                { name: "Консерватизм", percentage: 0 },
                { name: "Прямая Демократия", percentage: 0 },
                { name: "Социал-Демократия", percentage: 0 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 0 },
                { name: "Авторитаризм", percentage: 0 },
                { name: "Патернализм", percentage: 0 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Вольная Галиция
    "Вольная Галиция": {
        leader: "Андрей Садовый",
        government: "Народная Рада",
        rulingIdeology: "Социал-Демократия",
        stability: "75%",
        support: "70%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 8 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 10 }
            ],
            "Либеральные идеологии": [
                { name: "Либeralism", percentage: 20 },
                { name: "Консерватизм", percentage: 10 },
                { name: "Прямая Демократия", percentage: 25 },
                { name: "Социал-Демократия", percentage: 45 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 0 },
                { name: "Авторитаризм", percentage: 0 },
                { name: "Патернализм", percentage: 0 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Беларусь
    "Беларусь": {
        leader: "Александр Лукашенко",
        government: "Совет Министров",
        rulingIdeology: "Авторитаризм",
        stability: "80%",
        support: "65%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 10 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 5 },
                { name: "Консерватизм", percentage: 10 },
                { name: "Прямая Демократия", percentage: 3 },
                { name: "Социал-Демократия", percentage: 2 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 5 },
                { name: "Авторитаризм", percentage: 60 },
                { name: "Патернализм", percentage: 25 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Сибирская Федерация
    "Сибирская Федерация": {
        leader: "Дмитрий Мезенцев",
        government: "Сибирская Дума",
        rulingIdeology: "Консерватизм",
        stability: "70%",
        support: "63%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 8 },
                { name: "Милитаризм", percentage: 12 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 10 },
                { name: "Консерватизм", percentage: 40 },
                { name: "Прямая Демократия", percentage: 5 },
                { name: "Социал-Демократия", percentage: 5 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 5 },
                { name: "Авторитаризм", percentage: 15 },
                { name: "Патернализм", percentage: 25 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Хабаровская Социалистическая Хунта
    "Хабаровская Социалистическая Хунта": {
        leader: "Сергей Фургал",
        government: "Революционный комитет",
        rulingIdeology: "Ленинизм",
        stability: "68%",
        support: "60%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 0 },
                { name: "Милитаризм", percentage: 10 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 10 },
                { name: "Троцкизм", percentage: 15 },
                { name: "Ленинизм", percentage: 50 },
                { name: "Марксизм", percentage: 25 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 0 },
                { name: "Консерватизм", percentage: 0 },
                { name: "Прямая Демократия", percentage: 0 },
                { name: "Социал-Демократия", percentage: 0 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 0 },
                { name: "Авторитаризм", percentage: 0 },
                { name: "Патернализм", percentage: 0 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Иркутская Социалистическая Хунта
    "Иркутская Социалистическая Хунта": {
        leader: "Отсутствует",
        government: "Совет рабочих депутатов",
        rulingIdeology: "Троцкизм",
        stability: "55%",
        support: "48%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 0 },
                { name: "Милитаризм", percentage: 5 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 10 },
                { name: "Троцкизм", percentage: 45 },
                { name: "Ленинизм", percentage: 15 },
                { name: "Марксизм", percentage: 30 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 0 },
                { name: "Консерватизм", percentage: 0 },
                { name: "Прямая Демократия", percentage: 0 },
                { name: "Социал-Демократия", percentage: 0 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 0 },
                { name: "Авторитаризм", percentage: 0 },
                { name: "Патернализм", percentage: 0 },
                { name: "Нейтралитет", percentage: 0 }
            ]
        }
    },
    
    // Республика Тыва
    "Республика Тыва": {
        leader: "Шолбан Кара-оол",
        government: "Великий Хурал",
        rulingIdeology: "Патернализм",
        stability: "78%",
        support: "72%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 0 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 8 },
                { name: "Фалангизм", percentage: 0 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 0 },
                { name: "Ленинизм", percentage: 0 },
                { name: "Марксизм", percentage: 3 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 3 },
                { name: "Консерватизм", percentage: 5 },
                { name: "Прямая Демократия", percentage: 2 },
                { name: "Социал-Демократия", percentage: 2 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 10 },
                { name: "Авторитаризм", percentage: 15 },
                { name: "Патернализм", percentage: 60 },
                { name: "Нейтралитет", percentage: 5 }
            ]
        }
    }
};

// Для стран, которых нет в списке, можно использовать значение по умолчанию
const defaultGovernment = {
    leader: "Отсутствует",
    government: "Отсутствует",
    rulingIdeology: "Нейтралитет",
    stability: "50%",
    support: "50%",
    ideologies: {
        "Правые идеологии": [
            { name: "Национал-социализм", percentage: 0 },
            { name: "Реваншизм", percentage: 0 },
            { name: "Милитаризм", percentage: 0 },
            { name: "Фалангизм", percentage: 0 }
        ],
        "Левые идеологии": [
            { name: "Сталинизм", percentage: 0 },
            { name: "Троцкизм", percentage: 0 },
            { name: "Ленинизм", percentage: 0 },
            { name: "Марксизм", percentage: 0 }
        ],
        "Либеральные идеологии": [
            { name: "Либерализм", percentage: 0 },
            { name: "Консерватизм", percentage: 0 },
            { name: "Прямая Демократия", percentage: 0 },
            { name: "Социал-Демократия", percentage: 0 }
        ],
        "Авторитарные идеологии": [
            { name: "Монархизм", percentage: 0 },
            { name: "Авторитаризм", percentage: 0 },
            { name: "Патернализм", percentage: 0 },
            { name: "Нейтралитет", percentage: 100 }
        ]
    }
};