# Czas pod kontrolą — landing page

Statyczna, responsywna strona sprzedażowa w HTML/CSS/JS. Nie wymaga instalacji zależności.

## Podgląd lokalny
Otwórz `index.html` w przeglądarce albo uruchom lokalny serwer:

```bash
python -m http.server 8000
```

Następnie wejdź na `http://localhost:8000`.

## Uruchomienie sprzedaży
1. Utwórz produkt w Naffy i skonfiguruj automatyczne dostarczanie pełnego PDF po płatności.
2. Skopiuj publiczny link do koszyka/checkoutu.
3. W pliku `script.js` wstaw go do `CHECKOUT_URL`.
4. Uzupełnij cenę w `index.html` (szukaj `[ UZUPEŁNIJ CENĘ ]`).
5. Uzupełnij dane sprzedawcy, kontakt, regulamin, politykę prywatności i informacje o prawach konsumenta.
6. Przetestuj zakup testowy w panelu platformy.

**Ważne:** pełny płatny PDF nie znajduje się w projekcie. W `assets/` są wyłącznie grafiki strony i materiały demonstracyjne. Pełny plik należy przechowywać i dostarczać wyłącznie przez skonfigurowaną platformę sprzedażową.

## Publikacja na Netlify
Połącz repozytorium GitHub z Netlify. Build command pozostaw pusty, a publish directory ustaw na `czas-pod-kontrola` (wartość jest również ustawiona w głównym `netlify.toml`).

## Przed publikacją
- [ ] Podłączyć `CHECKOUT_URL`.
- [ ] Uzupełnić cenę.
- [ ] Uzupełnić dane sprzedawcy i kontakt.
- [ ] Dodać prawidłowe dokumenty prawne i politykę prywatności.
- [ ] Skonfigurować dostarczanie PDF w Naffy.
- [ ] Sprawdzić ścieżkę płatności, e-mail po zakupie i dostęp do pliku.
- [ ] Zweryfikować stronę na telefonie i komputerze po wdrożeniu.
