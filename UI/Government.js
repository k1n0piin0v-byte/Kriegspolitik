// Данные о правительствах стран
const countryGovernments = {
    // Российская Республика
    "Российская Республика": {
        government: "Демократия",
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
        government: "Диктатура",
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
        government: "Однопартийная Диктатура",
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
        government: "Диктатура",
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
        government: "Демократия",
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
        government: "Диктатура",
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
        government: "Демократия",
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
                { name: "Либерализм", percentage: 20 },
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
        government: "Диктатура",
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
        government: "Демократия",
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
        government: "Однопартийная Диктатура",
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
        government: "Однопартийная Диктатура",
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
        government: "Диктатура",
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
    },

    // Европейские страны
    "Польша": {
        government: "Демократия",
        rulingIdeology: "Консерватизм",
        stability: "70%",
        support: "65%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 5 },
                { name: "Реваншизм", percentage: 10 },
                { name: "Милитаризм", percentage: 25 },
                { name: "Фалангизм", percentage: 2 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 1 },
                { name: "Троцкизм", percentage: 1 },
                { name: "Ленинизм", percentage: 2 },
                { name: "Марксизм", percentage: 3 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 15 },
                { name: "Консерватизм", percentage: 30 },
                { name: "Прямая Демократия", percentage: 5 },
                { name: "Социал-Демократия", percentage: 10 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 3 },
                { name: "Авторитаризм", percentage: 8 },
                { name: "Патернализм", percentage: 12 },
                { name: "Нейтралитет", percentage: 5 }
            ]
        }
    },

    "Германский Рейх": {
        government: "Однопартийная Диктатура",
        rulingIdeology: "Реваншизм",
        stability: "85%",
        support: "80%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 15 },
                { name: "Реваншизм", percentage: 40 },
                { name: "Милитаризм", percentage: 25 },
                { name: "Фалангизм", percentage: 5 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 0 },
                { name: "Троцкизм", percentage: 1 },
                { name: "Ленинизм", percentage: 1 },
                { name: "Марксизм", percentage: 2 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 5 },
                { name: "Консерватизм", percentage: 8 },
                { name: "Прямая Демократия", percentage: 1 },
                { name: "Социал-Демократия", percentage: 3 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 10 },
                { name: "Авторитаризм", percentage: 15 },
                { name: "Патернализм", percentage: 12 },
                { name: "Нейтралитет", percentage: 2 }
            ]
        }
    },

    "Республика Бавария": {
        government: "Демократия",
        rulingIdeology: "Консерватизм",
        stability: "60%",
        support: "55%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 5 },
                { name: "Реваншизм", percentage: 10 },
                { name: "Милитаризм", percentage: 8 },
                { name: "Фалангизм", percentage: 2 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 2 },
                { name: "Троцкизм", percentage: 3 },
                { name: "Ленинизм", percentage: 3 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 20 },
                { name: "Консерватизм", percentage: 35 },
                { name: "Прямая Демократия", percentage: 10 },
                { name: "Социал-Демократия", percentage: 15 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 15 },
                { name: "Авторитаризм", percentage: 5 },
                { name: "Патернализм", percentage: 20 },
                { name: "Нейтралитет", percentage: 12 }
            ]
        }
    },

    "Австрия": {
        government: "Демократия",
        rulingIdeology: "Нейтралитет",
        stability: "75%",
        support: "70%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 8 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 3 },
                { name: "Фалангизм", percentage: 2 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 2 },
                { name: "Троцкизм", percentage: 3 },
                { name: "Ленинизм", percentage: 3 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 15 },
                { name: "Консерватизм", percentage: 25 },
                { name: "Прямая Демократия", percentage: 8 },
                { name: "Социал-Демократия", percentage: 20 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 5 },
                { name: "Авторитаризм", percentage: 3 },
                { name: "Патернализм", percentage: 10 },
                { name: "Нейтралитет", percentage: 30 }
            ]
        }
    },

    "Чехия": {
        government: "Демократия",
        rulingIdeology: "Социал-Демократия",
        stability: "80%",
        support: "75%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 3 },
                { name: "Реваншизм", percentage: 2 },
                { name: "Милитаризм", percentage: 5 },
                { name: "Фалангизм", percentage: 1 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 5 },
                { name: "Троцкизм", percentage: 5 },
                { name: "Ленинизм", percentage: 8 },
                { name: "Марксизм", percentage: 10 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 20 },
                { name: "Консерватизм", percentage: 15 },
                { name: "Прямая Демократия", percentage: 10 },
                { name: "Социал-Демократия", percentage: 25 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 2 },
                { name: "Авторитаризм", percentage: 3 },
                { name: "Патернализм", percentage: 8 },
                { name: "Нейтралитет", percentage: 12 }
            ]
        }
    },

    "Словакия": {
        government: "Демократия",
        rulingIdeology: "Консерватизм",
        stability: "65%",
        support: "60%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 10 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 8 },
                { name: "Фалангизм", percentage: 3 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 8 },
                { name: "Троцкизм", percentage: 5 },
                { name: "Ленинизм", percentage: 7 },
                { name: "Марксизм", percentage: 10 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 12 },
                { name: "Консерватизм", percentage: 20 },
                { name: "Прямая Демократия", percentage: 5 },
                { name: "Социал-Демократия", percentage: 15 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 5 },
                { name: "Авторитаризм", percentage: 10 },
                { name: "Патернализм", percentage: 15 },
                { name: "Нейтралитет", percentage: 10 }
            ]
        }
    },

    "Дания": {
        government: "Монархия",
        rulingIdeology: "Социал-Демократия",
        stability: "90%",
        support: "85%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 2 },
                { name: "Реваншизм", percentage: 1 },
                { name: "Милитаризм", percentage: 3 },
                { name: "Фалангизм", percentage: 1 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 3 },
                { name: "Троцкизм", percentage: 5 },
                { name: "Ленинизм", percentage: 4 },
                { name: "Марксизм", percentage: 8 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 20 },
                { name: "Консерватизм", percentage: 18 },
                { name: "Прямая Демократия", percentage: 10 },
                { name: "Социал-Демократия", percentage: 35 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 15 },
                { name: "Авторитаризм", percentage: 2 },
                { name: "Патернализм", percentage: 8 },
                { name: "Нейтралитет", percentage: 15 }
            ]
        }
    },

    "Бельгия": {
        government: "Монархия",
        rulingIdeology: "Нейтралитет",
        stability: "60%",
        support: "55%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 5 },
                { name: "Реваншизм", percentage: 3 },
                { name: "Милитаризм", percentage: 5 },
                { name: "Фалангизм", percentage: 2 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 5 },
                { name: "Троцкизм", percentage: 7 },
                { name: "Ленинизм", percentage: 6 },
                { name: "Марксизм", percentage: 10 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 25 },
                { name: "Консерватизм", percentage: 20 },
                { name: "Прямая Демократия", percentage: 8 },
                { name: "Социал-Демократия", percentage: 22 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 15 },
                { name: "Авторитаризм", percentage: 4 },
                { name: "Патернализм", percentage: 12 },
                { name: "Нейтралитет", percentage: 25 }
            ]
        }
    },

    "Нидерланды": {
        government: "Монархия",
        rulingIdeology: "Либерализм",
        stability: "85%",
        support: "80%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 3 },
                { name: "Реваншизм", percentage: 2 },
                { name: "Милитаризм", percentage: 5 },
                { name: "Фалангизм", percentage: 1 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 2 },
                { name: "Троцкизм", percentage: 4 },
                { name: "Ленинизм", percentage: 3 },
                { name: "Марксизм", percentage: 7 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 35 },
                { name: "Консерватизм", percentage: 20 },
                { name: "Прямая Демократия", percentage: 12 },
                { name: "Социал-Демократия", percentage: 25 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 10 },
                { name: "Авторитаризм", percentage: 2 },
                { name: "Патернализм", percentage: 8 },
                { name: "Нейтралитет", percentage: 15 }
            ]
        }
    },

    "Люксембург": {
        government: "Монархия",
        rulingIdeology: "Нейтралитет",
        stability: "95%",
        support: "90%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 1 },
                { name: "Реваншизм", percentage: 1 },
                { name: "Милитаризм", percentage: 2 },
                { name: "Фалангизм", percentage: 1 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 2 },
                { name: "Троцкизм", percentage: 3 },
                { name: "Ленинизм", percentage: 2 },
                { name: "Марксизм", percentage: 5 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 30 },
                { name: "Консерватизм", percentage: 25 },
                { name: "Прямая Демократия", percentage: 10 },
                { name: "Социал-Демократия", percentage: 20 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 15 },
                { name: "Авторитаризм", percentage: 1 },
                { name: "Патернализм", percentage: 5 },
                { name: "Нейтралитет", percentage: 40 }
            ]
        }
    },

    "Франция": {
        government: "Демократия",
        rulingIdeology: "Либерализм",
        stability: "70%",
        support: "65%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 8 },
                { name: "Реваншизм", percentage: 5 },
                { name: "Милитаризм", percentage: 10 },
                { name: "Фалангизм", percentage: 3 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 7 },
                { name: "Троцкизм", percentage: 10 },
                { name: "Ленинизм", percentage: 8 },
                { name: "Марксизм", percentage: 12 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 30 },
                { name: "Консерватизм", percentage: 20 },
                { name: "Прямая Демократия", percentage: 8 },
                { name: "Социал-Демократия", percentage: 25 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 5 },
                { name: "Авторитаризм", percentage: 7 },
                { name: "Патернализм", percentage: 10 },
                { name: "Нейтралитет", percentage: 15 }
            ]
        }
    },

    "Великобритания": {
        government: "Монархия",
        rulingIdeology: "Консерватизм",
        stability: "75%",
        support: "70%",
        ideologies: {
            "Правые идеологии": [
                { name: "Национал-социализм", percentage: 5 },
                { name: "Реваншизм", percentage: 8 },
                { name: "Милитаризм", percentage: 12 },
                { name: "Фалангизм", percentage: 2 }
            ],
            "Левые идеологии": [
                { name: "Сталинизм", percentage: 3 },
                { name: "Троцкизм", percentage: 5 },
                { name: "Ленинизм", percentage: 4 },
                { name: "Марксизм", percentage: 8 }
            ],
            "Либеральные идеологии": [
                { name: "Либерализм", percentage: 20 },
                { name: "Консерватизм", percentage: 30 },
                { name: "Прямая Демократия", percentage: 5 },
                { name: "Социал-Демократия", percentage: 20 }
            ],
            "Авторитарные идеологии": [
                { name: "Монархизм", percentage: 20 },
                { name: "Авторитаризм", percentage: 5 },
                { name: "Патернализм", percentage: 12 },
                { name: "Нейтралитет", percentage: 15 }
            ]
        }
    }
};

// Для стран, которых нет в списке, можно использовать значение по умолчанию
const defaultGovernment = {
    government: "Демократия",
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