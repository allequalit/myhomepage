function calculatePrice() {
    const country = document.getElementById('country').value;
    const ports = parseInt(document.getElementById('ports').value, 10);
    const publicIPs = parseInt(document.getElementById('publicIPs').value, 10);
    const users = parseInt(document.getElementById('users').value, 10);

    let basePrice = country === 'japan' ? 1000 : 100000;
    let portPrice = country === 'japan' ? 0 : 3000 * ports;
    let publicIPPrice = country === 'japan' ? 2000 * publicIPs : 50000 * publicIPs;
    let userPrice = 0;

    if (country === 'japan') {
        if (users <= 10) userPrice = 900 * users;
        else if (users <= 50) userPrice = 800 * users;
        else if (users >= 51) userPrice = 750 * users;
    } else if (country === 'korea') {
        if (users <= 10) userPrice = 1500 * users;
        else if (users <= 50) userPrice = 1200 * users;
        else if (users >= 51) userPrice = 900 * users;
    }

    const totalPrice = basePrice + portPrice + publicIPPrice + userPrice;

     // 숫자를 통화 형식으로 변환
     const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW',
    });
    const formattedTotalPrice = formatter.format(totalPrice);

    document.getElementById('totalPrice').innerText = formattedTotalPrice;
}
