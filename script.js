function changeMood(mood) {
    const body = document.body;
    const greeting = document.getElementById('greeting');
    const quote = document.getElementById('quote');

    if (mood === 'happy') {
        body.style.backgroundColor = "#FFD700";
        greeting.innerText = "Gasssssss! 🔥";
        quote.innerText = "Hari ini milik lu, sikat semua tantangan!";
    } else if (mood === 'chill') {
        body.style.backgroundColor = "#87eba0";
        greeting.innerText = "Slow down, Bre...";
        quote.innerText = "Ambil nafas dulu, dunia gak bakal lari kok.";
    } else if (mood === 'focus') {
        body.style.backgroundColor = "#281414";
        body.style.color = "white";
        greeting.innerText = "Deep Work Mode 🧠";
        quote.innerText = "Kurangi gangguan, fokus ke progress.";
    }
}