window.REQUIREMENTS_DATA = {
  updated: "23 lipca 2026",
  sources: [
    {
      id: "podstawa",
      short: "Podstawa programowa 2024",
      title: "Rozporządzenie – podstawa programowa informatyki dla liceum i technikum",
      href: "assets/dokumenty/DU_programowej_2024.pdf",
      openPage: 342,
      pages: "PDF: 342–347"
    },
    {
      id: "informator",
      short: "Informator maturalny EM2024",
      title: "Informator o egzaminie maturalnym z informatyki – EM2024",
      href: "assets/dokumenty/Informator_EM2024_informatyka.pdf",
      openPage: 5,
      pages: "PDF: 5–96"
    }
  ],
  sections: [
    {
      id: "excel",
      title: "Excel i arkusz kalkulacyjny",
      eyebrow: "Dane, obliczenia i prezentacja",
      summary: "Uczeń ma umieć zaimportować dane, dobrać funkcje do ich typu, przeprowadzić analizę, odfiltrować rekordy według kilku kryteriów i czytelnie zaprezentować wynik.",
      sourceNote: "Podstawa programowa określa rodzaje operacji, ale nie podaje zamkniętego katalogu nazw funkcji. Lista funkcji poniżej jest praktycznym zestawem wynikającym z wymagań i zadań pokazanych w Informatorze.",
      groups: [
        {
          title: "Obowiązkowe minimum do nauki - funkcje Excela",
          kind: "functionChecklist",
          intro: "Traktuj tę listę jako minimum egzaminacyjne. Podstawa wymaga różnorodnych i zaawansowanych funkcji, ale nie podaje zamkniętego wykazu nazw. LICZ.JEŻELI i ŚREDNIA.JEŻELI są nazwane wprost w rozwiązaniach Informatora.",
          items: [
            { name: "SUMA()", syntax: "=SUMA(B2:B100)", text: "Dodawanie całego zakresu wartości.", badge: "minimum praktyczne", ref: "Podstawa s. 344; Informator s. 64–76" },
            { name: "ŚREDNIA()", syntax: "=ŚREDNIA(B2:B100)", text: "Średnia arytmetyczna dla zakresu.", badge: "minimum praktyczne", ref: "Podstawa s. 344; Informator s. 64–76" },
            { name: "MIN() i MAX()", syntax: "=MIN(B:B)  /  =MAX(B:B)", text: "Wyszukiwanie wartości najmniejszej i największej.", badge: "minimum praktyczne", ref: "Informator s. 70" },
            { name: "JEŻELI()", syntax: "=JEŻELI(B2>100;\"tak\";\"nie\")", text: "Zwracanie wyniku zależnego od warunku.", badge: "wprost w Informatorze", ref: "Podstawa s. 343–344; Informator s. 67" },
            { name: "ORAZ(), LUB(), NIE()", syntax: "=JEŻELI(ORAZ(B2>0;C2=\"A\");1;0)", text: "Budowanie warunków złożonych.", badge: "minimum praktyczne", ref: "Podstawa s. 343–344" },
            { name: "LICZ.JEŻELI()", syntax: "=LICZ.JEŻELI(C:C;\">0\")", text: "Liczenie komórek spełniających jedno kryterium.", badge: "wprost w Informatorze", ref: "Informator s. 67" },
            { name: "LICZ.WARUNKI()", syntax: "=LICZ.WARUNKI(B:B;\">=10\";C:C;\"A\")", text: "Liczenie rekordów spełniających kilka kryteriów.", badge: "minimum praktyczne", ref: "Podstawa s. 344" },
            { name: "SUMA.JEŻELI() i SUMA.WARUNKÓW()", syntax: "=SUMA.WARUNKÓW(D:D;B:B;\"A\";C:C;\">0\")", text: "Sumowanie wartości dla jednej lub wielu grup i warunków.", badge: "minimum praktyczne", ref: "Podstawa s. 344; Informator s. 64–76" },
            { name: "ŚREDNIA.JEŻELI() i ŚREDNIA.WARUNKÓW()", syntax: "=ŚREDNIA.JEŻELI(B:B;\"styczeń\";D:D)", text: "Obliczanie średniej tylko dla wybranej grupy.", badge: "wprost w Informatorze", ref: "Informator s. 74" },
            { name: "ROK(), MIESIĄC(), DZIEŃ()", syntax: "=ROK(A2)  /  =MIESIĄC(A2)", text: "Wydobywanie części daty potrzebnej do zestawienia.", badge: "minimum praktyczne", ref: "Informator s. 64–76" },
            { name: "LEWY(), PRAWY(), FRAGMENT.TEKSTU()", syntax: "=FRAGMENT.TEKSTU(A2;3;4)", text: "Pobieranie wskazanego fragmentu napisu lub kodu.", badge: "minimum praktyczne", ref: "Podstawa s. 344" },
            { name: "DŁ() i ZNAJDŹ()", syntax: "=DŁ(A2)  /  =ZNAJDŹ(\"-\";A2)", text: "Długość tekstu i pozycja szukanego znaku.", badge: "minimum praktyczne", ref: "Podstawa s. 344" },
            { name: "WYSZUKAJ.PIONOWO()", syntax: "=WYSZUKAJ.PIONOWO(A2;Tabela2!A:D;4;FAŁSZ)", text: "Pobieranie danych z innej tabeli po wspólnym identyfikatorze. W nowszym Excelu można także użyć X.WYSZUKAJ.", badge: "minimum praktyczne", ref: "Praktyczna realizacja wymagań z Podstawy s. 344" },
            { name: "ZAOKR()", syntax: "=ZAOKR(B2;4)", text: "Zaokrąglanie do liczby miejsc wymaganej w poleceniu.", badge: "minimum praktyczne", ref: "Podstawa s. 343–344; Informator s. 64–76" },
            { name: "CZ.CAŁK.DZIELENIA()", syntax: "=CZ.CAŁK.DZIELENIA(A2;400)", text: "Całkowita część wyniku dzielenia, np. liczba pełnych transportów lub opakowań.", badge: "wprost w Informatorze", ref: "Informator s. 67" },
            { name: "MOD() i LICZBA.CAŁK()", syntax: "=MOD(A2;2)  /  =LICZBA.CAŁK(A2)", text: "Reszta z dzielenia i część całkowita liczby.", badge: "minimum praktyczne", ref: "Podstawa s. 343–344" }
          ]
        },
        {
          title: "Wymagania obowiązkowe",
          items: [
            { name: "Import i porządkowanie danych", text: "Wczytywanie danych z plików tekstowych i innych źródeł do tabeli; poprawne rozdzielanie kolumn, nagłówków, liczb i dat.", ref: "Podstawa s. 344; Informator s. 64–76" },
            { name: "Obliczenia dobrane do danych", text: "Stosowanie formuł i funkcji odpowiednich dla liczb, tekstu, dat oraz warunków zapisanych w poleceniu.", ref: "Podstawa s. 344; Informator s. 68–76" },
            { name: "Filtrowanie wielokryterialne", text: "Wyszukiwanie rekordów spełniających jednocześnie kilka kryteriów i budowanie zestawień tylko z wybranego podzbioru danych.", ref: "Podstawa s. 344; Informator s. 68" },
            { name: "Zestawienia i agregacja", text: "Obliczanie sum, liczności, średnich, minimów i maksimów w grupach, również z użyciem tabeli przestawnej.", ref: "Podstawa s. 344; Informator s. 68–76" },
            { name: "Wykresy", text: "Dobór typu wykresu do danych, poprawne opisanie osi, serii, jednostek i legendy oraz prezentowanie wyniku obliczeń.", ref: "Podstawa s. 344; Informator s. 68, 74–76" },
            { name: "Funkcje zaawansowane", text: "Łączenie kilku funkcji w jednej formule oraz używanie odwołań względnych, bezwzględnych i mieszanych.", ref: "Podstawa s. 344; Informator s. 69" },
            { name: "Dokładność wyniku", text: "Stosowanie wskazanej liczby miejsc po przecinku, poprawnych formatów dat i liczb oraz rozumienie różnicy między wartością a jej prezentacją.", ref: "Informator s. 64–76; Podstawa s. 343" }
          ]
        },
        {
          title: "Funkcje w typowych zadaniach - zastosowania",
          items: [
            { name: "SUMA, ŚREDNIA, MIN, MAX", text: "Podstawowe agregaty dla całego zakresu; kontrola zakresu i pomijania pustych komórek.", ref: "Informator s. 64–76" },
            { name: "JEŻELI, ORAZ, LUB", text: "Warunki pojedyncze i złożone, klasyfikacja rekordów oraz zwracanie różnych wyników zależnie od danych.", ref: "Wynika z wymagań programistycznych i zadań arkuszowych; Podstawa s. 343–344" },
            { name: "LICZ.JEŻELI / LICZ.WARUNKI", text: "Liczenie rekordów spełniających jedno albo wiele kryteriów.", ref: "Informator s. 64–76" },
            { name: "SUMA.JEŻELI / SUMA.WARUNKÓW", text: "Sumowanie wartości dla wybranej kategorii, przedziału czasu lub zestawu warunków.", ref: "Informator s. 64–76" },
            { name: "ŚREDNIA.JEŻELI / ŚREDNIA.WARUNKÓW", text: "Średnia dla określonej grupy; Informator pokazuje wprost możliwość użycia ŚREDNIA.JEŻELI zamiast tabeli przestawnej.", ref: "Informator s. 74" },
            { name: "INDEKS + PODAJ.POZYCJĘ / X.WYSZUKAJ / WYSZUKAJ.PIONOWO", text: "Łączenie informacji z tabel na podstawie wspólnego identyfikatora. Na egzaminie liczy się efekt, nie konkretna wersja funkcji.", ref: "Praktyczna realizacja wymagań z Podstawy s. 344 i przykładów Informatora s. 64–76" },
            { name: "LEWY, PRAWY, FRAGMENT.TEKSTU, DŁ, ZNAJDŹ", text: "Wydobywanie fragmentów kodów i napisów, sprawdzanie długości oraz położenia znaku.", ref: "Praktyczna realizacja analizy danych tekstowych; Podstawa s. 344" },
            { name: "DATA, ROK, MIESIĄC, DZIEŃ, DZIEŃ.TYG", text: "Budowanie i rozkładanie dat oraz grupowanie wyników w czasie.", ref: "Przykładowe zadania z datami; Informator s. 64–76" },
            { name: "ZAOKR, MOD, LICZBA.CAŁK", text: "Kontrolowanie dokładności, reszty z dzielenia i części całkowitej.", ref: "Podstawa s. 343–344; Informator s. 64–76" }
          ]
        },
        {
          title: "Narzędzia arkusza",
          items: [
            { name: "Tabela przestawna", text: "Pola w wierszach i kolumnach, filtrowanie, grupowanie oraz wybór sposobu podsumowania: suma, licznik, średnia, minimum lub maksimum.", ref: "Podstawa s. 344; Informator s. 68, 74" },
            { name: "Wykres przestawny", text: "Wykres powiązany z tabelą przestawną, pozwalający zmieniać widok danych przez pola i filtry.", ref: "Podstawa s. 344; Informator s. 68" },
            { name: "Sortowanie i filtr", text: "Sortowanie wielopoziomowe, filtr liczbowy, tekstowy i daty; kontrola, czy filtrowana jest cała tabela.", ref: "Podstawa s. 344" },
            { name: "Formuły kopiowane", text: "Poprawne blokowanie adresów znakiem $ i wypełnianie formuły w dół bez przesuwania stałych parametrów.", ref: "Wymaganie praktyczne z przykładowych zadań; Informator s. 64–76" },
            { name: "Formatowanie danych", text: "Format liczbowy, procentowy, daty i czasu; zadana liczba miejsc po przecinku bez utraty dokładności obliczeń.", ref: "Informator s. 64–76" },
            { name: "Kontrola rozwiązania", text: "Sprawdzenie liczby wierszy po imporcie, wartości skrajnych, jednostek i zgodności wyniku z poleceniem.", ref: "Informator s. 6, 64–76" }
          ]
        }
      ]
    },
    {
      id: "access",
      title: "Access i relacyjne bazy danych",
      eyebrow: "Relacje, kwerendy i SQL",
      summary: "Uczeń projektuje bazę z wieloma tabelami, łączy je relacjami i tworzy zapytania wyszukujące, grupujące oraz modyfikujące dane. Powinien rozumieć zarówno widok projektu kwerendy, jak i zapis SQL.",
      sourceNote: "Nazwa programu Access nie jest jedynym dopuszczalnym rozwiązaniem. Wymagania dotyczą relacyjnej bazy danych i języka SQL; Access jest typowym środowiskiem używanym do realizacji zadań.",
      groups: [
        {
          title: "Obowiązkowe minimum do nauki - Access i SQL",
          kind: "functionChecklist",
          intro: "Te nazwy trzeba rozpoznawać i umieć zastosować w widoku projektu lub SQL. Informator pokazuje wprost m.in. SELECT, DISTINCT, LEFT JOIN, COUNT, AVG, DateDiff, Left, Mid i IIf.",
          items: [
            { name: "SELECT, FROM, WHERE", syntax: "SELECT pola FROM tabela WHERE warunek;", text: "Wybór pól, tabeli i rekordów spełniających warunek.", badge: "wprost w Informatorze", ref: "Informator s. 78–93" },
            { name: "AND, OR, NOT", syntax: "WHERE cena>100 AND rok>=2020", text: "Łączenie i negowanie warunków.", badge: "minimum praktyczne", ref: "Informator s. 79–93" },
            { name: "BETWEEN, IN, LIKE", syntax: "WHERE rok BETWEEN 2010 AND 2020", text: "Przedziały, lista dopuszczalnych wartości i wzorce tekstowe.", badge: "wprost / praktyczne", ref: "Informator s. 79–93" },
            { name: "IS NULL / IS NOT NULL", syntax: "WHERE tabela2.id IS NULL", text: "Wyszukiwanie braku dopasowania lub pustej wartości.", badge: "wprost w Informatorze", ref: "Informator s. 93" },
            { name: "INNER JOIN", syntax: "FROM A INNER JOIN B ON A.id=B.id", text: "Łączenie tylko rekordów posiadających dopasowanie.", badge: "wprost w Informatorze", ref: "Informator s. 83–92" },
            { name: "LEFT JOIN", syntax: "FROM A LEFT JOIN B ON A.id=B.id", text: "Zachowanie wszystkich rekordów z lewej tabeli, również bez dopasowania.", badge: "wprost w Informatorze", ref: "Informator s. 81, 93" },
            { name: "GROUP BY i HAVING", syntax: "GROUP BY miasto HAVING Count(*)>1", text: "Grupowanie danych i nakładanie warunku na wynik grupowania.", badge: "wprost w Informatorze", ref: "Informator s. 81–93" },
            { name: "ORDER BY i DISTINCT", syntax: "SELECT DISTINCT marka ORDER BY marka;", text: "Sortowanie wyniku i usuwanie powtórzeń.", badge: "wprost w Informatorze", ref: "Informator s. 78–93" },
            { name: "COUNT()", syntax: "Count([Id])", text: "Liczenie rekordów w grupie.", badge: "wprost w Informatorze", ref: "Informator s. 81, 83, 87" },
            { name: "SUM(), AVG(), MIN(), MAX()", syntax: "Avg([wiek])", text: "Suma, średnia oraz wartości skrajne w kwerendzie podsumowującej.", badge: "wprost / minimum", ref: "Podstawa s. 344–345; Informator s. 89–90" },
            { name: "DateDiff()", syntax: "DateDiff(\"n\";[start];[koniec])", text: "Różnica między datami lub godzinami w wybranej jednostce.", badge: "wprost w Informatorze", ref: "Informator s. 85" },
            { name: "Year(), Month(), Day()", syntax: "Year([Data])", text: "Wydobywanie roku, miesiąca i dnia z pola daty.", badge: "minimum praktyczne", ref: "Praktyczna realizacja zadań bazodanowych; Informator s. 82–93" },
            { name: "Left(), Right(), Mid(), Len()", syntax: "Mid([PESEL];10;1)", text: "Analiza fragmentów pól tekstowych, np. kodu lub numeru PESEL.", badge: "wprost / minimum", ref: "Informator s. 89–90" },
            { name: "IIf()", syntax: "IIf(warunek;wartość1;wartość2)", text: "Warunkowe obliczanie wartości pola w kwerendzie Accessa.", badge: "wprost w Informatorze", ref: "Informator s. 89–90" },
            { name: "INSERT, UPDATE, DELETE", syntax: "UPDATE tabela SET pole=... WHERE ...;", text: "Rozpoznawanie i bezpieczne stosowanie zapytań modyfikujących.", badge: "wymagane w podstawie", ref: "Podstawa s. 345" }
          ]
        },
        {
          title: "Wymagania obowiązkowe",
          items: [
            { name: "Projekt bazy relacyjnej", text: "Tworzenie bazy składającej się z wielu tabel i taki podział danych, aby ograniczyć powtórzenia.", ref: "Podstawa s. 344–345; Informator s. 77–93" },
            { name: "Klucze i relacje", text: "Rozpoznawanie klucza podstawowego i obcego oraz tworzenie relacji 1‑wiele między tabelami.", ref: "Podstawa s. 344–345; Informator s. 77–80" },
            { name: "Import plików tekstowych", text: "Wczytywanie tabel z plików, dobór separatora, nagłówków, typów pól i identyfikatorów.", ref: "Informator s. 77–93" },
            { name: "Wybieranie danych", text: "Tworzenie kwerend z warunkami liczbowymi, tekstowymi i datami, także z kilku powiązanych tabel.", ref: "Podstawa s. 344–345; Informator s. 78–93" },
            { name: "Agregacja i grupowanie", text: "Obliczanie liczności, sumy, średniej, minimum i maksimum dla grup oraz filtrowanie wyników grupowania.", ref: "Informator s. 80–93" },
            { name: "Modyfikacja danych", text: "Stosowanie SQL nie tylko do wyszukiwania, lecz także do bezpiecznej zmiany danych, gdy wymaga tego zadanie.", ref: "Podstawa s. 345" },
            { name: "Integralność i ochrona", text: "Dbanie o spójność relacji, poprawne typy danych, ograniczanie błędnych rekordów i zabezpieczanie danych.", ref: "Podstawa s. 345" }
          ]
        },
        {
          title: "Jak stosować SQL w zadaniu",
          items: [
            { name: "SELECT, FROM, WHERE", text: "Wybór pól i rekordów spełniających warunki, w tym AND, OR, NOT, BETWEEN, LIKE oraz IN.", ref: "Informator s. 78–93" },
            { name: "INNER JOIN i LEFT JOIN", text: "Łączenie tabel po odpowiadających sobie kluczach; LEFT JOIN także wtedy, gdy trzeba zachować rekordy bez dopasowania.", ref: "Informator s. 80–93" },
            { name: "GROUP BY i HAVING", text: "Grupowanie rekordów oraz nakładanie warunku na wynik agregacji.", ref: "Informator s. 80–93" },
            { name: "COUNT, SUM, AVG, MIN, MAX", text: "Agregaty w kwerendach podsumowujących; prawidłowe rozumienie, co jest liczone i na jakim poziomie grupowania.", ref: "Informator s. 80–93" },
            { name: "DISTINCT", text: "Usuwanie powtórzeń z wyniku, gdy polecenie wymaga listy różnych wartości.", ref: "Informator s. 82–93" },
            { name: "ORDER BY", text: "Sortowanie rosnące i malejące, również według kilku pól.", ref: "Informator s. 80–93" },
            { name: "Pola obliczeniowe i daty", text: "Działania na polach, obliczanie różnicy dat, konstruowanie wyniku liczbowego lub tekstowego.", ref: "Informator s. 82–93" },
            { name: "INSERT, UPDATE, DELETE", text: "Rozumienie zapytań modyfikujących i stosowanie ich z kontrolą warunku, jeśli wymaga tego polecenie.", ref: "Podstawa s. 345" }
          ]
        },
        {
          title: "Narzędzia w Accessie",
          items: [
            { name: "Projekt tabeli", text: "Nazwy pól, typy danych, klucz podstawowy, wymagane wartości i właściwości pola.", ref: "Podstawa s. 344–345; Informator s. 77–93" },
            { name: "Okno relacji", text: "Łączenie kluczy, wymuszanie więzów integralności i kontrola kierunku relacji 1‑wiele.", ref: "Informator s. 77–80" },
            { name: "Projekt kwerendy", text: "Dodawanie tabel i pól, kryteria, sortowanie, sumy, parametr „Pokaż” oraz przełączanie do widoku SQL.", ref: "Informator s. 78–93" },
            { name: "Arkusz danych i eksport", text: "Kontrola wyników kwerendy i zapis rezultatu w formacie wskazanym w poleceniu.", ref: "Informator s. 77–93" },
            { name: "Weryfikacja wyniku", text: "Sprawdzanie liczby rekordów, duplikatów i rekordów bez dopasowania oraz porównywanie wyniku z prostą kwerendą kontrolną.", ref: "Informator s. 6, 77–93" }
          ]
        }
      ]
    },
    {
      id: "programowanie",
      title: "Programowanie i algorytmy",
      eyebrow: "Od pomysłu do przetestowanego programu",
      summary: "Na egzaminie rozszerzonym szczególny nacisk położono na algorytmikę i programowanie. Uczeń powinien zaprojektować rozwiązanie, zapisać je w wybranym języku, uruchomić dla danych testowych i uzasadnić jego poprawność oraz wydajność.",
      sourceNote: "Język Python jest dobrym wyborem, ale wymagania nie ograniczają ucznia do jednego języka. Oceniany jest algorytm, poprawność wyniku i sposób udokumentowania rozwiązania.",
      groups: [
        {
          title: "Obowiązkowe minimum do nauki - Python",
          kind: "functionChecklist",
          intro: "Podstawa wymaga konstrukcji programistycznych, ale nie narzuca nazw funkcji konkretnego języka. Jeśli wybierasz Pythona, poniższy zestaw traktuj jako obowiązkowe minimum potrzebne do samodzielnego wykonania zadań.",
          items: [
            { name: "input() i print()", syntax: "n = int(input())  /  print(wynik)", text: "Wczytanie danych i wypisanie wyniku.", badge: "minimum Pythona", ref: "Podstawa s. 343–344" },
            { name: "int(), float(), str(), bool()", syntax: "liczba = int(napis)", text: "Konwersja podstawowych typów danych.", badge: "minimum Pythona", ref: "Podstawa s. 343" },
            { name: "if, elif, else", syntax: "if warunek: ... elif ... else: ...", text: "Instrukcje warunkowe i rozgałęzienia programu.", badge: "wymagane w podstawie", ref: "Podstawa s. 343" },
            { name: "for, while, range()", syntax: "for i in range(n): ...", text: "Pętle o znanej i nieznanej liczbie powtórzeń.", badge: "wymagane w podstawie", ref: "Podstawa s. 343" },
            { name: "def i return", syntax: "def funkcja(x): return wynik", text: "Definiowanie funkcji z parametrami i zwracanie wyniku, także rekurencyjnie.", badge: "wymagane w podstawie", ref: "Podstawa s. 343–345" },
            { name: "open() i with", syntax: "with open(\"dane.txt\") as f:", text: "Bezpieczne otwieranie plików wejściowych i wynikowych.", badge: "minimum Pythona", ref: "Informator s. 6, 9–63" },
            { name: "read(), readline(), write()", syntax: "wiersze = f.readlines()", text: "Odczyt całego pliku lub pojedynczych wierszy i zapis rezultatów.", badge: "minimum Pythona", ref: "Informator s. 6, 9–63" },
            { name: "split(), strip(), join()", syntax: "a, b = wiersz.strip().split()", text: "Dzielenie wiersza na dane, usuwanie końca linii i łączenie tekstów.", badge: "minimum Pythona", ref: "Praktyczna realizacja zadań plikowych" },
            { name: "len()", syntax: "n = len(tablica)", text: "Liczba elementów kolekcji lub znaków napisu.", badge: "minimum Pythona", ref: "Podstawa s. 342–344" },
            { name: "list(), set(), dict()", syntax: "unikalne = set(dane)", text: "Tworzenie podstawowych struktur danych i dobór ich do problemu.", badge: "minimum Pythona", ref: "Podstawa s. 343–346" },
            { name: "append(), pop()", syntax: "stos.append(x)  /  x = stos.pop()", text: "Dodawanie i usuwanie elementów; potrzebne m.in. do stosu i kolejki.", badge: "minimum Pythona", ref: "Podstawa s. 346" },
            { name: "sum(), min(), max()", syntax: "największa = max(dane)", text: "Podstawowe agregaty. Trzeba też umieć napisać ich odpowiednik samodzielnie, jeśli bada to zadanie.", badge: "minimum Pythona", ref: "Podstawa s. 345–346" },
            { name: "abs(), round(), pow()", syntax: "błąd = abs(a-b)", text: "Wartość bezwzględna, zaokrąglanie i potęgowanie.", badge: "minimum Pythona", ref: "Podstawa s. 343, 345" },
            { name: "sorted() i .sort()", syntax: "wynik = sorted(dane, reverse=True)", text: "Sortowanie kopii danych lub listy w miejscu.", badge: "minimum Pythona", ref: "Podstawa s. 342, 345–346" },
            { name: "enumerate()", syntax: "for i, x in enumerate(dane): ...", text: "Iterowanie po elementach razem z ich indeksami.", badge: "minimum Pythona", ref: "Praktyczna realizacja wymagań z Podstawy s. 343–344" }
          ]
        },
        {
          title: "Warsztat programisty",
          items: [
            { name: "Pełny proces rozwiązania", text: "Określenie problemu i modelu, zaprojektowanie algorytmu, zapis programu, uruchomienie, testowanie i poprawienie rozwiązania.", ref: "Podstawa s. 342–344" },
            { name: "Wejście i wyjście", text: "Wczytywanie danych z klawiatury i plików, przetwarzanie wielu rekordów oraz zapis wyniku w wymaganej postaci.", ref: "Podstawa s. 343–344; Informator s. 6, 9–63" },
            { name: "Instrukcje sterujące", text: "Wyrażenia arytmetyczne i logiczne, instrukcje warunkowe, pętle oraz zagnieżdżanie konstrukcji.", ref: "Podstawa s. 343" },
            { name: "Funkcje i procedury", text: "Wydzielanie części programu do funkcji z parametrami lub bez, zwracanie wyniku i ograniczanie powtórzeń kodu.", ref: "Podstawa s. 343–344" },
            { name: "Struktury danych", text: "Dobór tablic/list, napisów, słowników lub zbiorów, a na poziomie rozszerzonym także struktur dynamicznych i bibliotek.", ref: "Podstawa s. 343–346" },
            { name: "Testowanie", text: "Przygotowanie danych typowych, brzegowych i błędnych, uruchomienie programu i ocena zgodności wyniku z oczekiwaniem.", ref: "Podstawa s. 342–344; Informator s. 6" },
            { name: "Poprawność i złożoność", text: "Wyjaśnianie działania algorytmu, uzasadnianie poprawności oraz ocena liczby operacji i zużycia pamięci.", ref: "Podstawa s. 343" },
            { name: "IDE", text: "Sprawne pisanie, uruchamianie, poprawianie i testowanie programu w wybranym środowisku programistycznym.", ref: "Podstawa s. 344" },
            { name: "Udokumentowany wynik", text: "Uzyskanie wyniku przez uruchomienie własnej implementacji i zapisanie rezultatów oraz plików rozwiązania zgodnie z poleceniem.", ref: "Informator s. 6, 9–63" }
          ]
        },
        {
          title: "Metody algorytmiczne",
          items: [
            { name: "Wyszukiwanie liniowe i binarne", text: "Wybór sposobu wyszukiwania zależnie od uporządkowania danych.", ref: "Podstawa s. 345" },
            { name: "Iteracja i rekurencja", text: "Rozumienie obu sposobów opisu procesu oraz umiejętność zapisania wersji rekurencyjnej, gdy jest wymagana.", ref: "Podstawa s. 343, 345–346" },
            { name: "Dziel i zwyciężaj", text: "Rozbijanie problemu na mniejsze części, np. przy jednoczesnym szukaniu min/max, sortowaniu przez scalanie i quicksort.", ref: "Podstawa s. 346" },
            { name: "Metoda zachłanna", text: "Podejmowanie lokalnie najlepszego wyboru, np. przy wydawaniu reszty lub wyznaczaniu najkrótszej drogi.", ref: "Podstawa s. 343, 346" },
            { name: "Programowanie dynamiczne", text: "Zapamiętywanie wyników podproblemów; wymagany przykład: najdłuższy wspólny podciąg.", ref: "Podstawa s. 346" },
            { name: "Metoda połowienia", text: "Zmniejszanie przedziału o połowę, m.in. przy wyszukiwaniu i przybliżaniu miejsca zerowego funkcji.", ref: "Podstawa s. 343, 345; Informator s. 16–18" },
            { name: "Abstrakcja i dekompozycja", text: "Modelowanie problemu, podział na podproblemy, redukcja do znanego problemu, heurystyki i myślenie rekurencyjne.", ref: "Podstawa s. 343" },
            { name: "Projektowanie z góry i z dołu", text: "Budowanie rozwiązania przez kolejne uszczegóławianie albo przez łączenie gotowych, mniejszych składników.", ref: "Podstawa s. 343" },
            { name: "Porównywanie algorytmów", text: "Analiza co najmniej dwóch sposobów rozwiązania na podstawie ich implementacji, poprawności i efektywności.", ref: "Podstawa s. 343" },
            { name: "Podstawy matematyczne", text: "Stosowanie pojęć potrzebnych w algorytmice, w tym potęg, logarytmów, podzielności i własności liczb.", ref: "Podstawa s. 343, 345" }
          ]
        },
        {
          title: "Algorytmy wymienione w podstawie",
          items: [
            { name: "Liczby i systemy", text: "Test pierwszości, rozkład na czynniki pierwsze, sito Eratostenesa, zamiana systemów pozycyjnych i arytmetyka w systemach innych niż dziesiętny.", ref: "Podstawa s. 342, 345" },
            { name: "Euklides", text: "NWD w wersji iteracyjnej i rekurencyjnej oraz zastosowania NWD/NWW, m.in. działania na ułamkach.", ref: "Podstawa s. 342, 345" },
            { name: "Ciągi", text: "Iteracyjne wyznaczanie elementów ciągów, w tym ciągu Fibonacciego.", ref: "Podstawa s. 342" },
            { name: "Napisy i szyfry", text: "Porównywanie napisów, naiwny algorytm wyszukiwania wzorca oraz szyfr Cezara.", ref: "Podstawa s. 342" },
            { name: "Sortowanie", text: "Przez wstawianie, bąbelkowe, przez scalanie i szybkie; rozumienie różnicy między prostymi metodami a metodą dziel i zwyciężaj.", ref: "Podstawa s. 342, 345–346" },
            { name: "Minimum i maksimum", text: "Jednoczesne wyznaczanie najmniejszego i największego elementu z ograniczeniem liczby porównań.", ref: "Podstawa s. 345–346" },
            { name: "Potęgowanie i pierwiastki", text: "Szybkie potęgowanie iteracyjne i rekurencyjne oraz przybliżone obliczanie pierwiastka kwadratowego.", ref: "Podstawa s. 345" },
            { name: "Schemat Hornera", text: "Obliczanie wartości wielomianu i wykorzystanie schematu w zadaniach liczbowych.", ref: "Podstawa s. 345" },
            { name: "Przedziały i podciągi", text: "Najdłuższy spójny podciąg niemalejący oraz spójny podciąg o największej sumie.", ref: "Podstawa s. 345; Informator s. 10–14" },
            { name: "Odwrotna notacja polska", text: "Konwersja wyrażeń do ONP i obliczanie wartości wyrażenia przy użyciu stosu.", ref: "Podstawa s. 345–346" },
            { name: "Stos, kolejka i lista", text: "Rozumienie operacji na strukturach dynamicznych i zastosowanie ich w algorytmach.", ref: "Podstawa s. 346" },
            { name: "Grafy", text: "Modelowanie sytuacji grafem i rozwiązywanie zadań, np. związanych z drogami.", ref: "Podstawa s. 346" },
            { name: "Fraktale", text: "Rekurencyjne tworzenie obiektów fraktalnych.", ref: "Podstawa s. 345" },
            { name: "Kryptografia klucza publicznego", text: "Algorytmiczne podstawy szyfrowania asymetrycznego i podpisu elektronicznego.", ref: "Podstawa s. 346–347" }
          ]
        }
      ]
    },
    {
      id: "teoria",
      title: "Wiedza teoretyczna",
      eyebrow: "Komputer, sieć, dane i odpowiedzialność",
      summary: "Teoria nie jest oddzielona od praktyki: uczeń powinien rozumieć reprezentację danych, działanie komputera i sieci, błędy obliczeń, kompresję, bezpieczeństwo oraz prawne i społeczne skutki technologii.",
      sourceNote: "Informator pokazuje przykładowe zadania zamknięte i otwarte, ale egzamin może sprawdzać każde wymaganie z podstawy programowej – nie tylko zagadnienia pokazane w przykładach.",
      groups: [
        {
          title: "Dane i działanie komputera",
          items: [
            { name: "Reprezentacja informacji", text: "Sposoby zapisu znaków, liczb i wartości logicznych oraz zależność między reprezentacją a możliwymi operacjami.", ref: "Podstawa s. 343; Informator s. 94–95" },
            { name: "Systemy pozycyjne", text: "Zapis i przeliczanie liczb, wykonywanie działań oraz rozumienie znaczenia pozycji cyfry.", ref: "Podstawa s. 342, 345; Informator s. 94–95" },
            { name: "Operacje arytmetyczne i logiczne", text: "Rozumienie sposobu wykonywania przez komputer podstawowych działań i operacji logicznych.", ref: "Podstawa s. 343" },
            { name: "Błędy obliczeń", text: "Zaokrąglenia, przybliżenia i ograniczona precyzja zapisu liczb; wpływ błędu na wynik.", ref: "Podstawa s. 343" },
            { name: "Sprzęt i oprogramowanie", text: "Funkcje elementów komputera i urządzeń cyfrowych, rodzaje oprogramowania oraz rola systemu operacyjnego.", ref: "Podstawa s. 342, 346" },
            { name: "Kompresja", text: "Różnica między kompresją stratną i bezstratną dla tekstu, obrazu, dźwięku i filmu.", ref: "Podstawa s. 346" }
          ]
        },
        {
          title: "Sieci i internet",
          items: [
            { name: "Budowa i usługi internetu", text: "Struktura sieci, podstawowe usługi, sposób identyfikowania komputerów i przesyłania informacji.", ref: "Podstawa s. 346" },
            { name: "Urządzenia i protokoły", text: "Funkcje urządzeń sieciowych oraz rola protokołów w komunikacji.", ref: "Podstawa s. 346" },
            { name: "Technologie transmisji", text: "Rozpoznawanie zastosowań pojęć takich jak VPN, NFC, Bluetooth, WiMAX i transmisja strumieniowa.", ref: "Informator s. 96" },
            { name: "Usługi w chmurze i współpraca", text: "Korzystanie z zasobów sieciowych, pracy zespołowej i zdalnego dostępu z uwzględnieniem bezpieczeństwa.", ref: "Podstawa s. 344, 347" }
          ]
        },
        {
          title: "Bezpieczeństwo i kryptografia",
          items: [
            { name: "Ochrona danych", text: "Zabezpieczanie danych wrażliwych, haseł i kodów PIN; aktualizacje, kopie, uprawnienia i bezpieczne ustawienia systemu.", ref: "Podstawa s. 347" },
            { name: "Uwierzytelnianie", text: "Rozumienie potwierdzania tożsamości i znaczenia silnych, unikalnych danych dostępowych.", ref: "Podstawa s. 347" },
            { name: "Szyfrowanie", text: "Cel szyfrowania, podstawowe różnice między kluczem wspólnym i publicznym oraz zastosowanie kryptografii.", ref: "Podstawa s. 346–347; Informator s. 48, 51–52" },
            { name: "Podpis elektroniczny", text: "Idea podpisu cyfrowego: autentyczność autora, integralność dokumentu i użycie pary kluczy.", ref: "Podstawa s. 346–347" },
            { name: "Ocena zagrożeń", text: "Rozpoznawanie ryzyka związanego z urządzeniami, siecią i ujawnianiem informacji oraz dobór ochrony do sytuacji.", ref: "Podstawa s. 342, 347" }
          ]
        },
        {
          title: "Prawo, etyka i społeczeństwo",
          items: [
            { name: "Prywatność i dane osobowe", text: "Świadome publikowanie informacji o sobie i innych, ochrona prywatności oraz tożsamości internetowej.", ref: "Podstawa s. 342, 347" },
            { name: "Prawo autorskie i licencje", text: "Legalne używanie i rozpowszechnianie programów, dokumentów i materiałów; poszanowanie własności intelektualnej.", ref: "Podstawa s. 342, 347" },
            { name: "Netykieta i etyka", text: "Odpowiedzialna komunikacja, ocena konsekwencji działań i stosowanie zasad etycznych w środowisku cyfrowym.", ref: "Podstawa s. 342, 347" },
            { name: "Skutki piractwa", text: "Rozumienie prawnych, ekonomicznych i społecznych konsekwencji nielegalnego kopiowania.", ref: "Podstawa s. 347" },
            { name: "Włączenie cyfrowe", text: "Dostrzeganie wykluczenia cyfrowego, potrzeb osób ze szczególnymi potrzebami i znaczenia dostępności technologii.", ref: "Podstawa s. 347" },
            { name: "Praca zespołowa", text: "Planowanie i realizowanie projektu programistycznego z użyciem narzędzi współpracy oraz odpowiedzialnym podziałem zadań.", ref: "Podstawa s. 342, 347" },
            { name: "Samokształcenie", text: "Wykorzystywanie zasobów internetowych, kursów i dokumentacji do rozwijania umiejętności.", ref: "Podstawa s. 347" }
          ]
        }
      ]
    }
  ]
};
