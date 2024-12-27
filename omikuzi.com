<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>おみくじ</title>
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <h1>おみくじ</h1>
    <button id="draw-button">おみくじを引く</button>
    <div id="result"></div>
    <script src="script.js"></script>
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
                .then(() => console.log('Service Worker Registered'))
                .catch(err => console.error('Service Worker Registration Failed:', err));
        }
    </script>
</body>
</html>
