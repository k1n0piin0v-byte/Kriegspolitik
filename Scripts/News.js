class NewsManager {
    constructor() {
        this.news = [];
        this.containerId = 'news-container';
    }
    
    // Метод для загрузки новостей
    loadNews() {
        // Всего одна новость, как requested
        this.news = [
            {
                date: '07.09.2025',
                title: 'Запуск платформы Kriegspolitik',
                content: 'Мы рады объявить о запуске нашей игровой платформы. Теперь каждый желающий может присоединиться к сообществу Kriegspolitik и принять участие в альфа-тестировании. Регистрация открыта для всех пользователей.'
            }
        ];
        
        this.renderNews();
    }
    
    // Метод для отображения новостей
    renderNews() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        // Очищаем контейнер
        container.innerHTML = '';
        
        // Добавляем новость
        this.news.forEach(item => {
            const newsElement = document.createElement('div');
            newsElement.className = 'news-item';
            newsElement.innerHTML = `
                <div class="news-date">${this.formatDate(item.date)}</div>
                <div class="news-title">${item.title}</div>
                <div class="news-content">${item.content}</div>
            `;
            container.appendChild(newsElement);
        });
    }
    
    // Метод для форматирования даты
    formatDate(dateString) {
        const [day, month, year] = dateString.split('.');
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
    }
}

// Создаем экземпляр менеджера новостей
const newsManager = new NewsManager();

// Загружаем новости при загрузке документа
document.addEventListener('DOMContentLoaded', function() {
    newsManager.loadNews();
});