(function () {
  "use strict";

  var data = window.MATURA_DATA;
  if (!data || !data.exams) {
    return;
  }

  var root = "assets/2026/informatyka-2026-maj-matura-rozszerzona";
  var pdf = root + "/pdf/informatyka-2026-maj-matura-rozszerzona.pdf";
  var answerPdf = root + "/pdf/informatyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf";
  var cardPdf = root + "/pdf/informatyka-2026-maj-matura-rozszerzona-karta.pdf";
  var dataRoot = root + "/pliki/DANE/Dane-NF-2605";

  function pad(number) {
    return number < 10 ? "0" + number : String(number);
  }

  function image(number) {
    return root + "/images/arkusz-" + pad(number) + ".jpg";
  }

  function answerImage(number) {
    return root + "/answer-images/odpowiedzi-" + pad(number) + ".jpg";
  }

  function imageList(first, last) {
    var items = [];
    var number;
    for (number = first; number <= last; number += 1) {
      items.push(image(number));
    }
    return items;
  }

  function taskPages(first, last) {
    var items = [];
    var number;
    for (number = first; number <= last; number += 1) {
      items.push({
        src: image(number),
        label: "Arkusz · strona " + number
      });
    }
    return items;
  }

  function answerPages(first, last) {
    var items = [];
    var number;
    for (number = first; number <= last; number += 1) {
      items.push(answerImage(number));
    }
    return items;
  }

  function sourceFile(name, size) {
    return {
      name: name,
      path: "Dane-NF-2605 / " + name,
      href: dataRoot + "/" + name,
      category: "dane",
      size: size
    };
  }

  function selectFiles(names, attachments) {
    var result = [];
    var i;
    var j;
    for (i = 0; i < names.length; i += 1) {
      for (j = 0; j < attachments.length; j += 1) {
        if (attachments[j].name === names[i]) {
          result.push(attachments[j]);
          break;
        }
      }
    }
    return result;
  }

  var attachments = [
    {
      name: "Dane-NF-2605.zip",
      path: "DANE / komplet oficjalnych danych CKE",
      href: root + "/pliki/DANE/Dane-NF-2605.zip",
      category: "dane",
      size: 160832
    },
    sourceFile("klienci.txt", 46942),
    sourceFile("korpo_przyklad.txt", 150000),
    sourceFile("korpo.txt", 318047),
    sourceFile("opis_transakcji.txt", 20639),
    sourceFile("pary_przyklad.txt", 5686),
    sourceFile("pary.txt", 17526),
    sourceFile("staw.txt", 6764),
    sourceFile("transakcje.txt", 26324)
  ];

  var algorithmGuide = {
    heading: "Przykładowy schemat rozwiązania algorytmicznego",
    steps: [
      "Zapisz dane wejściowe, wynik oraz przypadki brzegowe.",
      "Rozpisz kolejne wywołania albo iteracje i sprawdź je na małym przykładzie.",
      "Dopiero potem zapisz algorytm w pseudokodzie lub wybranym języku.",
      "Na końcu sprawdź zgodność z ograniczeniami podanymi w poleceniu."
    ],
    example: "wczytaj dane\nustaw wynik początkowy\npowtarzaj operacje zgodnie z warunkiem zadania\nwypisz wynik",
    note: "Dokładne wartości i kryteria punktowania znajdują się w oficjalnych zasadach oceniania."
  };

  var programmingGuide = {
    heading: "Przykładowy szkielet rozwiązania w Pythonie",
    steps: [
      "Wczytaj dane z właściwego pliku i usuń znaki końca wiersza.",
      "Rozdziel rozwiązanie na małe funkcje odpowiadające podpunktom.",
      "Sprawdź program na pliku przykładowym, a potem uruchom go na pełnych danych.",
      "Zapisz wyniki dokładnie w formacie wymaganym w arkuszu."
    ],
    example: "with open(\"dane.txt\", encoding=\"utf-8\") as plik:\n    dane = [wiersz.strip() for wiersz in plik if wiersz.strip()]\n\nwyniki = []\n# obliczenia\n\nwith open(\"wyniki.txt\", \"w\", encoding=\"utf-8\") as plik:\n    plik.write(\"\\n\".join(map(str, wyniki)))",
    note: "Nazwy plików i algorytm należy dopasować do konkretnego zadania."
  };

  var theoryGuide = {
    heading: "Przykładowy sposób rozwiązania",
    steps: [
      "Rozpoznaj system liczbowy, protokół lub własność sprawdzaną w poleceniu.",
      "Zapisz potrzebną definicję albo rozwiń liczbę według wag pozycji.",
      "Wykonaj obliczenia krok po kroku i sprawdź wynik w systemie dziesiętnym."
    ],
    example: "liczba w systemie pozycyjnym = suma(cyfra · podstawa^pozycja)",
    note: "Pełna poprawna odpowiedź znajduje się w oficjalnym kluczu CKE."
  };

  var excelSteps = [
    "Zaimportuj plik staw.txt z separatorem tabulacji i sprawdź typy dat oraz liczb.",
    "Dodaj kolumny pomocnicze potrzebne do grupowania danych według miesięcy.",
    "Wykonaj zestawienie miesięczne i utwórz wymagany wykres kolumnowy.",
    "Dla ciągów dni bez opadów oraz symulacji wzrostu użyj kolejnych wierszy i formuł odwołujących się do poprzedniego dnia.",
    "Zapisz odpowiedzi w pliku wyniki7.txt i zachowaj plik z obliczeniami."
  ];

  var excelGuide = {
    pivot: "polecana",
    pivotNote: "Tabela przestawna wygodnie obliczy średnie miesięczne do zadania 7.1; pozostałe podpunkty wymagają także kolumn pomocniczych lub programu.",
    functions: [
      { name: "ŚREDNIA / ŚREDNIA.WARUNKÓW", use: "Obliczenie średnich temperatur dla kolejnych miesięcy." },
      { name: "MIESIĄC / ROK", use: "Wyodrębnienie części daty potrzebnej do grupowania." },
      { name: "JEŻELI", use: "Budowa licznika kolejnych dni bez opadów i symulacji wzrostu." },
      { name: "MAX / MAX.WARUNKÓW", use: "Wyznaczenie najdłuższego ciągu dla każdego miesiąca." },
      { name: "ZAOKR", use: "Zapis wyniku z wymaganą liczbą miejsc po przecinku." }
    ],
    steps: excelSteps,
    confidence: "na podstawie treści arkusza 2026"
  };

  var excelSolution = {
    heading: "Przykładowy sposób rozwiązania w arkuszu kalkulacyjnym",
    steps: excelSteps,
    example: "=ŚREDNIA.WARUNKÓW(zakres_temperatur;zakres_miesięcy;wybrany_miesiąc)\n=JEŻELI(opady=0;poprzedni_licznik+1;0)",
    note: "Nazwy zakresów oraz adresy komórek trzeba dopasować do układu zaimportowanych danych."
  };

  var accessSolution = {
    heading: "Przykładowy sposób rozwiązania w Accessie lub SQL",
    steps: [
      "Zaimportuj trzy pliki jako osobne tabele i ustaw poprawne typy pól.",
      "Połącz Klientów z Transakcjami po IdKlienta, a Transakcje z OpisemTransakcji po IdTransakcji.",
      "Dla podpunktów utwórz osobne kwerendy z grupowaniem, zliczaniem i sumowaniem.",
      "W zadaniu 8.5 dołącz także tabele Produkty i Kategorie oraz zastosuj warunek LIKE."
    ],
    example: "SELECT p.IdProduktu, p.Nazwa\nFROM (Produkty AS p INNER JOIN Kategorie AS k\nON p.IdKategorii = k.IdKategorii)\nINNER JOIN opis_transakcji AS o\nON p.IdProduktu = o.IdProduktu\nWHERE k.NazwaKategorii = 'spozywcze'\nAND p.Opis LIKE '*do ekspresu kolbowego*'\nGROUP BY p.IdProduktu, p.Nazwa;",
    note: "W MySQL zamiast gwiazdki w warunku LIKE użyj znaku %."
  };

  var exam = {
    year: "2026",
    slug: "informatyka-2026-maj-matura-rozszerzona",
    title: "maj - matura (Formuła 2023)",
    categories: ["access", "algorytmy", "excel", "python", "teoria"],
    questionPdfs: [
      { label: "Arkusz", href: pdf, pages: imageList(1, 21) },
      { label: "Karta odpowiedzi", href: cardPdf, pages: [] }
    ],
    answerHref: answerPdf,
    attachments: attachments,
    tasks: [
      {
        id: "1-1", number: 1, title: "Rekurencja", category: "algorytmy", part: 1,
        pdfHref: pdf, pages: taskPages(4, 6), files: [], solutionGuide: algorithmGuide,
        answerPages: answerPages(2, 4), answerMode: "matched"
      },
      {
        id: "1-2", number: 2, title: "Dodawanie pisemne i przeniesienia", category: "algorytmy", part: 1,
        pdfHref: pdf, pages: taskPages(7, 8), files: [], solutionGuide: algorithmGuide,
        answerPages: answerPages(5, 6), answerMode: "matched"
      },
      {
        id: "1-3", number: 3, title: "Pary słów", category: "python", part: 1,
        pdfHref: pdf, pages: taskPages(10, 11), files: selectFiles(["pary.txt", "pary_przyklad.txt"], attachments),
        solutionGuide: programmingGuide, answerPages: answerPages(7, 9), answerMode: "matched"
      },
      {
        id: "1-4", number: 4, title: "Korporacja", category: "python", part: 1,
        pdfHref: pdf, pages: taskPages(12, 14), files: selectFiles(["korpo.txt", "korpo_przyklad.txt"], attachments),
        solutionGuide: programmingGuide, answerPages: answerPages(10, 12), answerMode: "matched"
      },
      {
        id: "1-5", number: 5, title: "Systemy liczbowe: podstawa 3 i 5", category: "teoria", part: 1,
        pdfHref: pdf, pages: taskPages(15, 15), files: [], solutionGuide: theoryGuide,
        answerPages: answerPages(13, 13), answerMode: "matched"
      },
      {
        id: "1-6", number: 6, title: "Długość adresów IPv4 i IPv6", category: "teoria", part: 1,
        pdfHref: pdf, pages: taskPages(15, 15), files: [], solutionGuide: theoryGuide,
        answerPages: answerPages(13, 13), answerMode: "matched"
      },
      {
        id: "1-7", number: 7, title: "Staw - analiza danych i symulacja", category: "excel", part: 1,
        pdfHref: pdf, pages: taskPages(16, 17), files: selectFiles(["staw.txt"], attachments),
        excelGuide: excelGuide, solutionGuide: excelSolution,
        answerPages: answerPages(14, 17), answerMode: "matched"
      },
      {
        id: "1-8", number: 8, title: "Sieć sklepów - relacyjna baza danych", category: "access", part: 1,
        pdfHref: pdf, pages: taskPages(18, 20),
        files: selectFiles(["klienci.txt", "transakcje.txt", "opis_transakcji.txt"], attachments),
        solutionGuide: accessSolution, answerPages: answerPages(18, 21), answerMode: "matched"
      }
    ]
  };

  data.exams.unshift(exam);
  data.generated = "25 sierpnia 2026";
  data.stats.years += 1;
  data.stats.exams += 1;
  data.stats.pages += 21;
  data.stats.files += attachments.length;
  data.stats.tasks += exam.tasks.length;
}());
