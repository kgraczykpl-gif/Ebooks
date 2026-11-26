# Ebooks

Repozytorium projektów e-booków i stron sprzedażowych.

## Czas pod kontrolą

Statyczny landing page znajduje się w katalogu `czas-pod-kontrola/`.

### Publikacja na Netlify

Repozytorium jest przygotowane do wdrożenia przez GitHub:
- Build command: pozostaw puste.
- Publish directory: `czas-pod-kontrola` (ustawienie jest też zapisane w `netlify.toml`).
- Po połączeniu repozytorium Netlify będzie automatycznie budować i publikować zmiany z gałęzi `main`.

### Przed uruchomieniem sprzedaży

1. W `czas-pod-kontrola/script.js` ustaw prawdziwy `CHECKOUT_URL` z Naffy.
2. W `czas-pod-kontrola/index.html` uzupełnij cenę i dane sprzedawcy.
3. Dodaj poprawne linki do regulaminu, polityki prywatności i kontaktu.
4. Skonfiguruj automatyczne dostarczanie pełnego PDF w Naffy i wykonaj zakup testowy.

Pełny, płatny PDF nie jest przechowywany w repozytorium. Katalog `assets/` zawiera grafiki strony i podglądy demonstracyjne.