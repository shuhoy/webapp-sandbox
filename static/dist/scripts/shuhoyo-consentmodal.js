// JavaScript部分
document.addEventListener('DOMContentLoaded', function() {
    // Cookieのチェック
    if (!getCookie('userConsent')) {
        // Cookieが存在しない場合、モーダルを表示
        document.getElementById('cookieModal').classList.add('active');
    }

    // 「同意する」ボタンのイベントリスナー
    document.getElementById('acceptCookie').addEventListener('click', function() {
        const consentValue = 'accepted';  // 保存する値
        const expirationDays = 365;  // Cookieの有効期間（例：365日）

        // Cookieに値を保存
        setCookie('userConsent', consentValue, expirationDays);

        // モーダルを非表示
        document.getElementById('cookieModal').classList.remove('active');
    });
});

// Cookieを設定する関数
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Cookieを取得する関数
function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") == 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}
