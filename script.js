document.getElementById('paylas').addEventListener('click', function() {
    const yaziInput = document.getElementById('yazi');
    const yazi = yaziInput.value.trim();

    if (yazi) {
        const yaziListesi = document.getElementById('yaziListesi');
        const li = document.createElement('li');
        li.textContent = yazi;
        yaziListesi.appendChild(li);
        yaziInput.value = ''; // Metni temizle
    } else {
        alert('Lütfen yazınızı girin!');
    }
});
