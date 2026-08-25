# Jak umieścić bibliotekę na GitHubie

## Najprościej: GitHub Desktop

1. Rozpakuj paczkę ZIP na komputerze.
2. Uruchom GitHub Desktop i zaloguj się na swoje konto.
3. Wybierz **File -> Add local repository** i wskaż folder `matura-informatyka-github`.
4. Jeśli program poinformuje, że folder nie jest jeszcze repozytorium, wybierz utworzenie repozytorium w tym folderze.
5. W polu opisu zmian wpisz np. `Pierwsza wersja biblioteki` i wybierz **Commit to main**.
6. Wybierz **Publish repository**. Jeśli strona ma być publiczna, nie zaznaczaj opcji repozytorium prywatnego.

## Włączenie strony GitHub Pages

1. Otwórz repozytorium na GitHubie.
2. Wejdź w **Settings -> Pages**.
3. W części publikacji wybierz **Deploy from a branch**.
4. Wybierz gałąź `main` oraz folder `/ (root)` i zapisz ustawienia.
5. Po zakończeniu publikacji GitHub pokaże adres strony.

Ważne: `index.html`, `styles.css`, pliki `.js` oraz folder `assets` muszą znajdować się w katalogu głównym repozytorium. Nie wysyłaj wyłącznie pliku ZIP, ponieważ GitHub Pages nie rozpakuje go automatycznie.

## Aktualizowanie strony

Po dodaniu nowych arkuszy lub zmianie plików otwórz ponownie GitHub Desktop, wpisz krótki opis zmian, wybierz **Commit to main**, a następnie **Push origin**.

