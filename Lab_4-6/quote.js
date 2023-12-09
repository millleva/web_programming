function getRandomQuote() {
    var quotes = [
        "Ці руки нічого не крали (с) Віктор Ющенко",
        "У тебя скучное лицо, тебе никто денег не даст (с) Геннадій Кернес",
        "Пропало все! (с) Юлія Тимошенко",
        "Якщо куля в лоб, то куля в лоб (с) Арсеній Яценюк",
        "Астанавітєсь! (с) Віктор Янукович",
        "Не впихайте невпихуєме! (с) Олег Ляшко",
        "Кофе будешь? (с) Ігор Коломойський",
        "Я ж не лох (с) Володимир Зеленський",
        "Це ж було вже! (с) Леонід Кучма",
        "Трошки текст по-дибільному написаний (с) Михайло Добкін",
        "Бе бе бе бе бе (с) Михайло Саакашвілі",
    ];

    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
document.addEventListener("DOMContentLoaded", function () {
    var quoteElement = document.getElementById("quote-of-the-day");
    if (quoteElement) {
        quoteElement.innerText = getRandomQuote();
    }
});