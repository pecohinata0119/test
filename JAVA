document.getElementById('draw-button').addEventListener('click', () => {
    const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];
    const result = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('result').textContent = `結果: ${result}`;
});
