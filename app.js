function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  var data = window.MATURA_DATA;
  var requirements = window.REQUIREMENTS_DATA;
  var theoryData = window.THEORY_TOPICS || {
    definitions: [],
    assignments: {}
  };
  var pageCleanup = window.PAGE_CLEANUP || {
    excluded: []
  };
  var excludedPages = new Set(pageCleanup.excluded);
  var app = document.querySelector("#app");
  var search = document.querySelector("#search");
  var categoryButtons = _toConsumableArray(document.querySelectorAll("[data-category]"));
  var requirementsButton = document.querySelector("[data-requirements]");
  var activeCategory = "all";
  var activeTheoryTopic = "all";
  var activeLightbox = null;
  var lightboxReturnFocus = null;
  var query = "";
  var labels = {
    excel: "Excel",
    access: "Access",
    python: "Python",
    algorytmy: "Algorytmy",
    teoria: "Teoria",
    dane: "Pliki danych"
  };
  var escapeHtml = function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[c];
    });
  };
  var humanSize = function humanSize(bytes) {
    return bytes < 1024 ? "".concat(bytes, " B") : bytes < Math.pow(1024, 2) ? "".concat((bytes / 1024).toFixed(1), " KB") : "".concat((bytes / Math.pow(1024, 2)).toFixed(1), " MB");
  };
  var pageHref = function pageHref(page) {
    return typeof page === "string" ? page : page.src;
  };
  var visiblePages = function visiblePages(pages) {
    return pages.filter(function (page) {
      return !excludedPages.has(pageHref(page));
    });
  };
  var pageCount = function pageCount(exam) {
    return exam.questionPdfs.reduce(function (n, pdf) {
      return n + visiblePages(pdf.pages).length;
    }, 0);
  };
  var visibleLibraryPages = data.exams.reduce(function (sum, exam) {
    return sum + pageCount(exam);
  }, 0);
  var theoryTopicById = Object.fromEntries(theoryData.definitions.map(function (topic) {
    return [topic.id, topic];
  }));
  var theoryTopicsFor = function theoryTopicsFor(exam, task) {
    return theoryData.assignments["".concat(exam.slug, "|").concat(task.id)] || ["inne"];
  };
  function pageFigure(src, label) {
    return "<figure class=\"page-card\">\n      <button class=\"page-zoom\" type=\"button\" data-lightbox-src=\"".concat(escapeHtml(src), "\" data-lightbox-label=\"").concat(escapeHtml(label), "\" aria-label=\"Powi\u0119ksz: ").concat(escapeHtml(label), "\">\n        <img src=\"").concat(encodeURI(src), "\" alt=\"").concat(escapeHtml(label), "\" loading=\"lazy\">\n        <span class=\"zoom-hint\">POWI\u0118KSZ</span>\n      </button>\n      <figcaption>").concat(escapeHtml(label), "</figcaption>\n    </figure>");
  }
  function closeLightbox() {
    var _lightboxReturnFocus;
    if (!activeLightbox) return;
    activeLightbox.remove();
    activeLightbox = null;
    document.body.classList.remove("lightbox-open");
    (_lightboxReturnFocus = lightboxReturnFocus) === null || _lightboxReturnFocus === void 0 || _lightboxReturnFocus.focus();
    lightboxReturnFocus = null;
  }
  function openLightbox(src, label, trigger) {
    closeLightbox();
    lightboxReturnFocus = trigger;
    var overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", label);
    overlay.innerHTML = "\n      <div class=\"lightbox-bar\">\n        <strong>".concat(escapeHtml(label), "</strong>\n        <span>Esc lub kliknij t\u0142o, aby zamkn\u0105\u0107</span>\n      </div>\n      <button class=\"lightbox-close\" type=\"button\" aria-label=\"Zamknij podgl\u0105d\">\xD7</button>\n      <div class=\"lightbox-scroll\">\n        <img src=\"").concat(encodeURI(src), "\" alt=\"").concat(escapeHtml(label), "\">\n      </div>");
    document.body.appendChild(overlay);
    document.body.classList.add("lightbox-open");
    activeLightbox = overlay;
    overlay.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay || event.target.classList.contains("lightbox-scroll")) closeLightbox();
    });
    overlay.querySelector(".lightbox-close").focus();
  }
  function attachLightboxes() {
    app.querySelectorAll("[data-lightbox-src]").forEach(function (button) {
      return button.addEventListener("click", function () {
        openLightbox(button.dataset.lightboxSrc, button.dataset.lightboxLabel, button);
      });
    });
  }
  function setCategory(category) {
    activeCategory = category;
    activeTheoryTopic = "all";
    categoryButtons.forEach(function (button) {
      return button.classList.toggle("active", button.dataset.category === category);
    });
    requirementsButton === null || requirementsButton === void 0 || requirementsButton.classList.remove("active");
    if (category === "all") renderLibrary();else renderCategory();
  }
  function setRequirements() {
    activeCategory = "requirements";
    categoryButtons.forEach(function (button) {
      return button.classList.remove("active");
    });
    requirementsButton === null || requirementsButton === void 0 || requirementsButton.classList.add("active");
    renderRequirements();
  }
  function filteredExams() {
    var needle = query.trim().toLocaleLowerCase("pl");
    return data.exams.filter(function (exam) {
      var categoryMatch = activeCategory === "all" || exam.categories.includes(activeCategory);
      var haystack = [exam.year, exam.title].concat(_toConsumableArray(exam.attachments.map(function (file) {
        return "".concat(file.name, " ").concat(file.path);
      }))).join(" ").toLocaleLowerCase("pl");
      return categoryMatch && (!needle || haystack.includes(needle));
    });
  }
  function filteredTasks() {
    var needle = query.trim().toLocaleLowerCase("pl");
    return data.exams.flatMap(function (exam) {
      return exam.tasks.filter(function (task) {
        return task.category === activeCategory;
      }).map(function (task) {
        return {
          exam: exam,
          task: task
        };
      });
    }).filter(function (_ref) {
      var exam = _ref.exam,
        task = _ref.task;
      var topics = task.category === "teoria" ? theoryTopicsFor(exam, task) : [];
      var topicMatch = task.category !== "teoria" || activeTheoryTopic === "all" || topics.includes(activeTheoryTopic);
      var haystack = [exam.year, exam.title, task.title, "zadanie ".concat(task.number)].concat(_toConsumableArray(topics.map(function (topic) {
        var _theoryTopicById$topi;
        return ((_theoryTopicById$topi = theoryTopicById[topic]) === null || _theoryTopicById$topi === void 0 ? void 0 : _theoryTopicById$topi.label) || topic;
      })), _toConsumableArray(task.files.map(function (file) {
        return "".concat(file.name, " ").concat(file.path);
      }))).join(" ").toLocaleLowerCase("pl");
      return topicMatch && (!needle || haystack.includes(needle));
    });
  }
  function renderRequirements() {
    var preserveScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var needle = query.trim().toLocaleLowerCase("pl");
    var visibleSections = requirements.sections.map(function (section) {
      return _objectSpread(_objectSpread({}, section), {}, {
        groups: section.groups.map(function (group) {
          return _objectSpread(_objectSpread({}, group), {}, {
            items: group.items.filter(function (item) {
              var haystack = [section.title, section.eyebrow, group.title, group.intro, item.name, item.syntax, item.badge, item.text, item.ref].join(" ").toLocaleLowerCase("pl");
              return !needle || haystack.includes(needle);
            })
          });
        }).filter(function (group) {
          return group.items.length;
        })
      });
    }).filter(function (section) {
      return section.groups.length;
    });
    var allItems = requirements.sections.flatMap(function (section) {
      return section.groups.flatMap(function (group) {
        return group.items;
      });
    });
    var shownItems = visibleSections.flatMap(function (section) {
      return section.groups.flatMap(function (group) {
        return group.items;
      });
    }).length;
    var quickLinks = visibleSections.map(function (section) {
      return "\n      <a class=\"requirements-jump ".concat(section.id, "\" href=\"#wymagania-").concat(section.id, "\" data-requirement-target=\"wymagania-").concat(section.id, "\">\n        <span>").concat(escapeHtml(section.eyebrow), "</span>\n        <strong>").concat(escapeHtml(section.title), "</strong>\n        <small>").concat(section.groups.reduce(function (sum, group) {
        return sum + group.items.length;
      }, 0), " zagadnie\u0144 \u2192</small>\n      </a>");
    }).join("");
    var sourceLinks = requirements.sources.map(function (source) {
      return "\n      <a class=\"source-document\" href=\"".concat(encodeURI(source.href), "#page=").concat(source.openPage, "\" target=\"_blank\">\n        <span>PDF</span>\n        <div><strong>").concat(escapeHtml(source.short), "</strong><small>").concat(escapeHtml(source.pages), "</small></div>\n        <i>OTW\xD3RZ \u2197</i>\n      </a>");
    }).join("");
    app.innerHTML = "\n      <section class=\"hero requirements-hero\">\n        <div>\n          <p class=\"eyebrow\">Oficjalny zakres \xB7 podstawa i informator</p>\n          <h1>Wymagania ucznia.<br>W jednym miejscu.</h1>\n          <p class=\"lead\">Uporz\u0105dkowany zakres wiedzy i umiej\u0119tno\u015Bci na podstawie podstawy programowej z 2024 roku oraz Informatora maturalnego EM2024. Ka\u017Cdy punkt ma wskazane \u017Ar\xF3d\u0142o i stron\u0119 PDF.</p>\n        </div>\n        <div class=\"stats\" aria-label=\"Statystyki wymaga\u0144\">\n          <div class=\"stat\"><strong>".concat(requirements.sections.length, "</strong><span>dzia\u0142y</span></div>\n          <div class=\"stat\"><strong>").concat(allItems.length, "</strong><span>zagadnie\u0144</span></div>\n          <div class=\"stat\"><strong>").concat(requirements.sources.length, "</strong><span>dokumenty</span></div>\n          <div class=\"stat\"><strong>2024</strong><span>podstawa</span></div>\n        </div>\n      </section>\n      <section class=\"requirements-intro\">\n        <div>\n          <p class=\"guide-kicker\">Jak czyta\u0107 t\u0119 list\u0119</p>\n          <h2>Egzamin sprawdza ca\u0142\u0105 podstaw\u0119, a nie tylko przyk\u0142ady z Informatora.</h2>\n          <p>W zadaniach mog\u0105 pojawi\u0107 si\u0119 do\u0142\u0105czone pliki z danymi. Szczeg\xF3lny nacisk po\u0142o\u017Cono na algorytmy i programowanie, ale obowi\u0105zuj\u0105 tak\u017Ce arkusze, relacyjne bazy danych oraz wiedza teoretyczna.</p>\n        </div>\n        <div class=\"source-documents\">").concat(sourceLinks, "</div>\n      </section>\n      ").concat(needle ? "<div class=\"requirements-result\"><strong>".concat(shownItems, "</strong> wynik\xF3w dla \u201E").concat(escapeHtml(query.trim()), "\u201D</div>") : "<nav class=\"requirements-jumps\" aria-label=\"Dzia\u0142y wymaga\u0144\">".concat(quickLinks, "</nav>"), "\n      <div class=\"requirements-list\">\n        ").concat(visibleSections.map(function (section) {
      return "\n          <section class=\"requirement-section\" id=\"wymagania-".concat(section.id, "\">\n            <header>\n              <div>\n                <p class=\"eyebrow\">").concat(escapeHtml(section.eyebrow), "</p>\n                <h2>").concat(escapeHtml(section.title), "</h2>\n                <p>").concat(escapeHtml(section.summary), "</p>\n              </div>\n              <span class=\"requirement-count\">").concat(section.groups.reduce(function (sum, group) {
        return sum + group.items.length;
      }, 0), " punkt\xF3w</span>\n            </header>\n            <div class=\"source-note\"><strong>Wa\u017Cne:</strong> ").concat(escapeHtml(section.sourceNote), "</div>\n            <div class=\"requirement-groups\">\n              ").concat(section.groups.map(function (group) {
        return "\n                <details class=\"requirement-group\" open>\n                  <summary><span>".concat(escapeHtml(group.title), "</span><small>").concat(group.items.length, "</small></summary>\n                  ").concat(group.intro ? "<p class=\"function-checklist-intro\">".concat(escapeHtml(group.intro), "</p>") : "", "\n                  <div class=\"requirement-items ").concat(group.kind === "functionChecklist" ? "function-checklist" : "", "\">\n                    ").concat(group.items.map(function (item) {
          return "\n                      <article class=\"requirement-item ".concat(group.kind === "functionChecklist" ? "function-row" : "", "\">\n                        <span class=\"check\" aria-hidden=\"true\">").concat(group.kind === "functionChecklist" ? "ƒ" : "✓", "</span>\n                        <div>\n                          ").concat(group.kind === "functionChecklist" ? "<div class=\"function-name-row\"><code>".concat(escapeHtml(item.name), "</code>").concat(item.badge ? "<span>".concat(escapeHtml(item.badge), "</span>") : "", "</div>") : "<h3>".concat(escapeHtml(item.name), "</h3>"), "\n                          ").concat(item.syntax ? "<pre class=\"function-syntax\">".concat(escapeHtml(item.syntax), "</pre>") : "", "\n                          <p>").concat(escapeHtml(item.text), "</p>\n                          <small>").concat(escapeHtml(item.ref), "</small>\n                        </div>\n                      </article>");
        }).join(""), "\n                  </div>\n                </details>");
      }).join(""), "\n            </div>\n          </section>");
    }).join("") || "\n          <div class=\"empty\">\n            <strong>Brak wynik\xF3w w wymaganiach</strong>\n            <p>Spr\xF3buj wpisa\u0107 np. \u201Etabela przestawna\u201D, \u201EJOIN\u201D, \u201Erekurencja\u201D albo \u201Esieci\u201D.</p>\n          </div>", "\n      </div>");
    app.querySelectorAll("[data-requirement-target]").forEach(function (link) {
      return link.addEventListener("click", function (event) {
        event.preventDefault();
        var target = document.getElementById(link.dataset.requirementTarget);
        target === null || target === void 0 || target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        history.replaceState({
          view: "requirements"
        }, "", "#".concat(link.dataset.requirementTarget));
      });
    });
    if (!preserveScroll) window.scrollTo({
      top: 0
    });
    history.replaceState({
      view: "requirements"
    }, "", "#wymagania");
  }
  function renderCategory() {
    var _app$querySelector;
    var items = filteredTasks();
    var years = _toConsumableArray(new Set(items.map(function (_ref2) {
      var exam = _ref2.exam;
      return exam.year;
    }))).sort(function (a, b) {
      return b.localeCompare(a);
    });
    var files = items.reduce(function (sum, _ref3) {
      var task = _ref3.task;
      return sum + task.files.length;
    }, 0);
    var allTheoryItems = activeCategory === "teoria" ? data.exams.flatMap(function (exam) {
      return exam.tasks.filter(function (task) {
        return task.category === "teoria";
      }).map(function (task) {
        return {
          exam: exam,
          task: task
        };
      });
    }) : [];
    var topicCounts = Object.fromEntries(theoryData.definitions.map(function (topic) {
      return [topic.id, allTheoryItems.filter(function (_ref4) {
        var exam = _ref4.exam,
          task = _ref4.task;
        return theoryTopicsFor(exam, task).includes(topic.id);
      }).length];
    }));
    var visibleTopics = theoryData.definitions.filter(function (topic) {
      return topicCounts[topic.id] > 0;
    });
    var activeTopic = activeTheoryTopic === "all" ? null : theoryTopicById[activeTheoryTopic];
    var theoryTopicPanel = activeCategory === "teoria" ? "\n      <section class=\"theory-browser\">\n        <header>\n          <div>\n            <p class=\"eyebrow\">Podzia\u0142 wed\u0142ug tre\u015Bci i formy zadania</p>\n            <h2>Wybierz zagadnienie</h2>\n            <p>Jedno zadanie mo\u017Ce nale\u017Ce\u0107 do kilku grup. Dotyczy to zw\u0142aszcza starszych test\xF3w \u0142\u0105cz\u0105cych np. SQL, systemy liczbowe i pytania prawda/fa\u0142sz.</p>\n          </div>\n          ".concat(activeTopic ? "<button class=\"clear-topic\" type=\"button\" data-theory-topic=\"all\">Poka\u017C ca\u0142\u0105 teori\u0119</button>" : "", "\n        </header>\n        <div class=\"theory-topic-grid\">\n          <button class=\"theory-topic-card ").concat(activeTheoryTopic === "all" ? "active" : "", "\" type=\"button\" data-theory-topic=\"all\">\n            <span class=\"topic-mark\">\u2211</span>\n            <strong>Wszystkie tematy</strong>\n            <small>").concat(allTheoryItems.length, " zada\u0144</small>\n          </button>\n          ").concat(visibleTopics.map(function (topic) {
      return "\n            <button class=\"theory-topic-card topic-".concat(topic.id, " ").concat(activeTheoryTopic === topic.id ? "active" : "", "\" type=\"button\" data-theory-topic=\"").concat(topic.id, "\">\n              <span class=\"topic-mark\">").concat(escapeHtml(topic.mark), "</span>\n              <strong>").concat(escapeHtml(topic.label), "</strong>\n              <p>").concat(escapeHtml(topic.description), "</p>\n              <small>").concat(topicCounts[topic.id], " zada\u0144</small>\n            </button>");
    }).join(""), "\n        </div>\n      </section>") : "";
    var categoryLead = activeCategory === "teoria" ? "Zadania są pogrupowane według zagadnienia oraz formy. Wybierz temat, a następnie otwórz treść zadania i oficjalną odpowiedź." : "Każdy kafelek prowadzi bezpośrednio do treści konkretnego zadania oraz plików potrzebnych do jego rozwiązania.";
    var listTitle = activeTopic ? activeTopic.label : labels[activeCategory];
    app.innerHTML = "\n      <section class=\"hero category-hero\">\n        <div>\n          <p class=\"eyebrow\">Dzia\u0142 \xB7 ".concat(escapeHtml(labels[activeCategory]), "</p>\n          <h1>").concat(escapeHtml(labels[activeCategory]), "<br>zadanie po zadaniu.</h1>\n          <p class=\"lead\">").concat(escapeHtml(categoryLead), "</p>\n        </div>\n        <div class=\"stats\" aria-label=\"Statystyki dzia\u0142u\">\n          <div class=\"stat\"><strong>").concat(years.length, "</strong><span>lat</span></div>\n          <div class=\"stat\"><strong>").concat(items.length, "</strong><span>zada\u0144</span></div>\n          <div class=\"stat\"><strong>").concat(files, "</strong><span>plik\xF3w</span></div>\n          <div class=\"stat\"><strong>").concat(items.reduce(function (n, _ref5) {
      var task = _ref5.task;
      return n + visiblePages(task.pages).length;
    }, 0), "</strong><span>stron</span></div>\n        </div>\n      </section>\n      ").concat(theoryTopicPanel, "\n      <section class=\"toolbar\">\n        <div><h2>Zadania: ").concat(escapeHtml(listTitle), "</h2><p>").concat(items.length, " pozycji \xB7 tre\u015B\u0107 arkusza i odpowiedzi w jednym miejscu</p></div>\n        <select class=\"year-select\" aria-label=\"Przejd\u017A do roku\">\n          <option value=\"\">Przejd\u017A do roku</option>\n          ").concat(years.map(function (year) {
      return "<option value=\"".concat(year, "\">").concat(year, "</option>");
    }).join(""), "\n        </select>\n      </section>\n      <div id=\"task-list\">\n        ").concat(years.length ? years.map(function (year) {
      var yearly = items.filter(function (_ref6) {
        var exam = _ref6.exam;
        return exam.year === year;
      });
      return "<section class=\"year-section\" id=\"year-".concat(year, "\">\n            <div class=\"year-heading\"><h3>").concat(year, "</h3><span>").concat(yearly.length, " zada\u0144</span></div>\n            <div class=\"exam-grid\">").concat(yearly.map(taskCard).join(""), "</div>\n          </section>");
    }).join("") : "<div class=\"empty\"><strong>Brak wynik\xF3w</strong><p>Zmie\u0144 wpisan\u0105 fraz\u0119.</p></div>", "\n      </div>");
    app.querySelectorAll("[data-task]").forEach(function (card) {
      return card.addEventListener("click", function () {
        openTask(card.dataset.exam, card.dataset.task);
      });
    });
    (_app$querySelector = app.querySelector(".year-select")) === null || _app$querySelector === void 0 || _app$querySelector.addEventListener("change", function (event) {
      var _document$querySelect;
      if (event.target.value) (_document$querySelect = document.querySelector("#year-".concat(event.target.value))) === null || _document$querySelect === void 0 || _document$querySelect.scrollIntoView();
    });
    app.querySelectorAll("[data-theory-topic]").forEach(function (button) {
      return button.addEventListener("click", function () {
        activeTheoryTopic = button.dataset.theoryTopic;
        renderCategory();
      });
    });
    var categoryHash = activeCategory === "teoria" && activeTheoryTopic !== "all" ? "#dzial-teoria-".concat(activeTheoryTopic) : "#dzial-".concat(activeCategory);
    history.replaceState({
      view: "category",
      category: activeCategory,
      theoryTopic: activeTheoryTopic
    }, "", categoryHash);
  }
  function taskCard(_ref7) {
    var exam = _ref7.exam,
      task = _ref7.task;
    var pivotChip = task.category === "excel" && task.excelGuide ? "<span class=\"chip pivot-".concat(task.excelGuide.pivot.replace(" ", "-"), "\">Tabela przestawna: ").concat(task.excelGuide.pivot, "</span>") : "";
    var taskTopics = task.category === "teoria" ? theoryTopicsFor(exam, task) : [];
    var visibleTaskTopics = taskTopics.slice(0, 3);
    var theoryChips = visibleTaskTopics.map(function (topic) {
      var _theoryTopicById$topi2;
      return "\n      <span class=\"chip theory-topic-chip topic-".concat(topic, "\">").concat(escapeHtml(((_theoryTopicById$topi2 = theoryTopicById[topic]) === null || _theoryTopicById$topi2 === void 0 ? void 0 : _theoryTopicById$topi2.label) || topic), "</span>");
    }).join("") + (taskTopics.length > visibleTaskTopics.length ? "<span class=\"chip\">+".concat(taskTopics.length - visibleTaskTopics.length, "</span>") : "");
    return "<article class=\"exam-card task-card\" tabindex=\"0\" role=\"button\" data-exam=\"".concat(escapeHtml(exam.slug), "\" data-task=\"").concat(escapeHtml(task.id), "\">\n      <div class=\"exam-top\">\n        <div><span class=\"task-number\">ZADANIE ").concat(task.number, "</span><h4>").concat(escapeHtml(task.title), "</h4></div>\n        <span class=\"count\">").concat(visiblePages(task.pages).length, " str.</span>\n      </div>\n      <div class=\"chips\"><span class=\"chip ").concat(task.category, "\">").concat(labels[task.category], "</span>").concat(pivotChip).concat(theoryChips, "<span class=\"chip\">").concat(escapeHtml(exam.title), "</span></div>\n      <div class=\"card-foot\"><span>").concat(task.files.length, " ").concat(task.files.length === 1 ? "plik" : "plików", " do pobrania</span><span class=\"open-arrow\">TRE\u015A\u0106 I PLIKI \u2192</span></div>\n    </article>");
  }
  function renderLibrary() {
    var _app$querySelector2;
    var exams = filteredExams();
    var years = _toConsumableArray(new Set(exams.map(function (exam) {
      return exam.year;
    }))).sort(function (a, b) {
      return b.localeCompare(a);
    });
    var activeName = activeCategory === "all" ? "Wszystkie arkusze" : labels[activeCategory];
    app.innerHTML = "\n      <section class=\"hero\">\n        <div>\n          <p class=\"eyebrow\">2005\u20142026 \xB7 materia\u0142y lokalne</p>\n          <h1>Ca\u0142a matura.<br>Jedno spokojne miejsce.</h1>\n          <p class=\"lead\">Przegl\u0105daj obrazy arkuszy, filtruj zadania wed\u0142ug dzia\u0142u i otwieraj pliki robocze bez szukania po folderach.</p>\n        </div>\n        <div class=\"stats\" aria-label=\"Statystyki biblioteki\">\n          <div class=\"stat\"><strong>".concat(data.stats.years, "</strong><span>lat</span></div>\n          <div class=\"stat\"><strong>").concat(data.stats.exams, "</strong><span>arkuszy</span></div>\n          <div class=\"stat\"><strong>").concat(visibleLibraryPages, "</strong><span>stron</span></div>\n          <div class=\"stat\"><strong>").concat(data.stats.files, "</strong><span>plik\xF3w</span></div>\n        </div>\n      </section>\n      <section class=\"toolbar\">\n        <div><h2>").concat(escapeHtml(activeName), "</h2><p>").concat(exams.length, " zestaw\xF3w w bie\u017C\u0105cym widoku</p></div>\n        <select class=\"year-select\" aria-label=\"Przejd\u017A do roku\">\n          <option value=\"\">Przejd\u017A do roku</option>\n          ").concat(years.map(function (year) {
      return "<option value=\"".concat(year, "\">").concat(year, "</option>");
    }).join(""), "\n        </select>\n      </section>\n      <div id=\"exam-list\">\n        ").concat(years.length ? years.map(function (year) {
      var yearly = exams.filter(function (exam) {
        return exam.year === year;
      });
      return "<section class=\"year-section\" id=\"year-".concat(year, "\">\n            <div class=\"year-heading\"><h3>").concat(year, "</h3><span>").concat(yearly.length, " ").concat(yearly.length === 1 ? "zestaw" : "zestawy", "</span></div>\n            <div class=\"exam-grid\">").concat(yearly.map(examCard).join(""), "</div>\n          </section>");
    }).join("") : "<div class=\"empty\"><strong>Brak wynik\xF3w</strong><p>Zmie\u0144 dzia\u0142 lub wpisan\u0105 fraz\u0119.</p></div>", "\n      </div>");
    app.querySelectorAll("[data-exam]").forEach(function (card) {
      return card.addEventListener("click", function () {
        return openExam(card.dataset.exam);
      });
    });
    (_app$querySelector2 = app.querySelector(".year-select")) === null || _app$querySelector2 === void 0 || _app$querySelector2.addEventListener("change", function (event) {
      var _document$querySelect2;
      if (event.target.value) (_document$querySelect2 = document.querySelector("#year-".concat(event.target.value))) === null || _document$querySelect2 === void 0 || _document$querySelect2.scrollIntoView();
    });
    history.replaceState({
      view: "library"
    }, "", location.pathname);
  }
  function examCard(exam) {
    var visibleChips = exam.categories.filter(function (c) {
      return c !== "dane";
    }).slice(0, 5);
    return "<article class=\"exam-card\" tabindex=\"0\" role=\"button\" data-exam=\"".concat(escapeHtml(exam.slug), "\">\n      <div class=\"exam-top\"><h4>").concat(escapeHtml(exam.title), "</h4><span class=\"count\">").concat(pageCount(exam), " str.</span></div>\n      <div class=\"chips\">").concat(visibleChips.map(function (c) {
      return "<span class=\"chip ".concat(c, "\">").concat(labels[c], "</span>");
    }).join(""), "</div>\n      <div class=\"card-foot\"><span>").concat(exam.attachments.length, " plik\xF3w do zada\u0144</span><span class=\"open-arrow\">OTW\xD3RZ \u2192</span></div>\n    </article>");
  }
  function openExam(slug) {
    var exam = data.exams.find(function (item) {
      return item.slug === slug;
    });
    if (!exam) return;
    var pdfButtons = exam.questionPdfs.map(function (pdf) {
      return "<a class=\"btn\" href=\"".concat(encodeURI(pdf.href), "\" target=\"_blank\">").concat(escapeHtml(pdf.label), " PDF</a>");
    }).join("");
    var answerButton = exam.answerHref ? "<a class=\"btn secondary\" href=\"".concat(encodeURI(exam.answerHref), "\" target=\"_blank\">Odpowiedzi PDF</a>") : "";
    var pages = exam.questionPdfs.flatMap(function (pdf) {
      return pdf.pages.map(function (src, index) {
        return {
          src: src,
          label: "".concat(pdf.label, " \xB7 strona ").concat(index + 1)
        };
      }).filter(function (page) {
        return !excludedPages.has(page.src);
      });
    });
    app.innerHTML = "\n      <button class=\"back\" type=\"button\">\u2190 WR\xD3\u0106 DO BIBLIOTEKI</button>\n      <section class=\"detail-head\">\n        <div><p class=\"eyebrow\">".concat(exam.year, " \xB7 informatyka rozszerzona</p><h1>").concat(escapeHtml(exam.title), "</h1>\n          <div class=\"chips\">").concat(exam.categories.filter(function (c) {
      return c !== "dane";
    }).map(function (c) {
      return "<span class=\"chip ".concat(c, "\">").concat(labels[c], "</span>");
    }).join(""), "</div>\n        </div>\n        <div class=\"detail-actions\">").concat(pdfButtons).concat(answerButton, "</div>\n      </section>\n      <section class=\"section\">\n        <div class=\"section-title\"><h2>Obrazy zada\u0144</h2><span>").concat(pages.length, " stron arkusza</span></div>\n        <div class=\"page-grid page-stack\">").concat(pages.map(function (page) {
      return pageFigure(page.src, page.label);
    }).join("") || "<p>Brak arkusza PDF w dostarczonych materia\u0142ach.</p>", "</div>\n      </section>\n      <section class=\"section\">\n        <div class=\"section-title\"><h2>Pliki do zada\u0144</h2><span>").concat(exam.attachments.length, " plik\xF3w</span></div>\n        <div class=\"file-list\">").concat(exam.attachments.map(fileCard).join("") || "<p>Ten zestaw nie zawiera osobnych plik\xF3w roboczych.</p>", "</div>\n      </section>");
    app.querySelector(".back").addEventListener("click", renderLibrary);
    attachLightboxes();
    window.scrollTo({
      top: 0
    });
    history.pushState({
      view: "exam",
      slug: slug
    }, "", "#".concat(encodeURIComponent(slug)));
  }
  function openTask(examSlug, taskId) {
    var exam = data.exams.find(function (item) {
      return item.slug === examSlug;
    });
    var task = exam === null || exam === void 0 ? void 0 : exam.tasks.find(function (item) {
      return item.id === taskId;
    });
    if (!exam || !task) return;
    var answerButton = exam.answerHref ? "<a class=\"btn secondary\" href=\"".concat(encodeURI(exam.answerHref), "\" target=\"_blank\">Odpowiedzi PDF</a>") : "";
    var guide = task.category === "excel" ? task.excelGuide : null;
    var solution = task.solutionGuide;
    var taskPages = visiblePages(task.pages);
    var detailTheoryChips = task.category === "teoria" ? theoryTopicsFor(exam, task).map(function (topic) {
      var _theoryTopicById$topi3;
      return "\n        <span class=\"chip theory-topic-chip topic-".concat(topic, "\">").concat(escapeHtml(((_theoryTopicById$topi3 = theoryTopicById[topic]) === null || _theoryTopicById$topi3 === void 0 ? void 0 : _theoryTopicById$topi3.label) || topic), "</span>");
    }).join("") : "";
    var answerModeNote = task.answerMode === "matched" ? "Strony klucza przypisane do tego numeru zadania" : "Pełny dostępny klucz odpowiedzi dla tego arkusza";
    var guidePanel = guide ? "<aside class=\"excel-guide\">\n      <p class=\"guide-kicker\">Analiza zadania \xB7 ".concat(escapeHtml(guide.confidence), "</p>\n      <div class=\"pivot-verdict ").concat(guide.pivot.replace(" ", "-"), "\">\n        <span>Tabela przestawna</span>\n        <strong>").concat(escapeHtml(guide.pivot), "</strong>\n      </div>\n      <p class=\"pivot-note\">").concat(escapeHtml(guide.pivotNote), "</p>\n      <div class=\"guide-block\">\n        <h3>Przydatne funkcje</h3>\n        <div class=\"function-list\">").concat(guide.functions.map(function (item) {
      return "<div class=\"function-item\">\n          <code>".concat(escapeHtml(item.name), "</code>\n          <p>").concat(escapeHtml(item.use), "</p>\n        </div>");
    }).join(""), "</div>\n      </div>\n      <div class=\"guide-block\">\n        <h3>Proponowana kolejno\u015B\u0107</h3>\n        <ol>").concat(guide.steps.map(function (step) {
      return "<li>".concat(escapeHtml(step), "</li>");
    }).join(""), "</ol>\n      </div>\n      <p class=\"guide-disclaimer\">To wskaz\xF3wka do samodzielnego rozwi\u0105zania, nie gotowy arkusz odpowiedzi.</p>\n    </aside>") : "";
    app.innerHTML = "\n      <button class=\"back\" type=\"button\">\u2190 WR\xD3\u0106 DO DZIA\u0141U ".concat(escapeHtml(labels[task.category].toUpperCase()), "</button>\n      <section class=\"detail-head\">\n        <div>\n          <p class=\"eyebrow\">").concat(exam.year, " \xB7 ").concat(escapeHtml(exam.title), " \xB7 zadanie ").concat(task.number, "</p>\n          <h1>").concat(escapeHtml(task.title), "</h1>\n          <div class=\"chips\"><span class=\"chip ").concat(task.category, "\">").concat(labels[task.category], "</span>").concat(detailTheoryChips, "<span class=\"chip\">cz\u0119\u015B\u0107 ").concat(task.part, "</span></div>\n        </div>\n        <div class=\"detail-actions\">\n          <a class=\"btn\" href=\"").concat(encodeURI(task.pdfHref), "\" target=\"_blank\">Pe\u0142ny arkusz PDF</a>").concat(answerButton, "\n        </div>\n      </section>\n      <section class=\"section\">\n        <div class=\"section-title\"><h2>Tre\u015B\u0107 zadania</h2><span>").concat(taskPages.length, " ").concat(taskPages.length === 1 ? "strona" : "strony", "</span></div>\n        <div class=\"").concat(guide ? "task-workspace" : "", "\">\n          <div class=\"page-grid page-stack ").concat(guide ? "task-pages" : "", "\">").concat(taskPages.map(function (page) {
      return pageFigure(page.src, page.label);
    }).join(""), "</div>\n          ").concat(guidePanel, "\n        </div>\n      </section>\n      <section class=\"section solution-section\">\n        <div class=\"section-title\"><h2>Odpowied\u017A i przyk\u0142adowe rozwi\u0105zanie</h2><span>").concat(escapeHtml(answerModeNote), "</span></div>\n        <div class=\"solution-layout\">\n          <article class=\"sample-solution\">\n            <p class=\"guide-kicker\">Jak podej\u015B\u0107 do zadania</p>\n            <h3>").concat(escapeHtml(solution.heading), "</h3>\n            <ol>").concat(solution.steps.map(function (step) {
      return "<li>".concat(escapeHtml(step), "</li>");
    }).join(""), "</ol>\n            <div class=\"solution-example\">\n              <span>Przyk\u0142adowy szablon</span>\n              <pre>").concat(escapeHtml(solution.example), "</pre>\n            </div>\n            <p class=\"solution-note\">").concat(escapeHtml(solution.note), "</p>\n          </article>\n          <div class=\"official-answer\">\n            <div class=\"answer-head\">\n              <div><strong>Oficjalny klucz odpowiedzi</strong><small>").concat(escapeHtml(answerModeNote), "</small></div>\n              ").concat(exam.answerHref ? "<a href=\"".concat(encodeURI(exam.answerHref), "\" target=\"_blank\">Otw\xF3rz pe\u0142ny PDF \u2192</a>") : "", "\n            </div>\n            <div class=\"page-grid page-stack answer-pages\">").concat(task.answerPages.map(function (src, index) {
      return pageFigure(src, "Klucz odpowiedzi \xB7 strona ".concat(index + 1));
    }).join(""), "</div>\n          </div>\n        </div>\n      </section>\n      <section class=\"section\">\n        <div class=\"section-title\"><h2>Pliki do tego zadania</h2><span>").concat(task.files.length, " ").concat(task.files.length === 1 ? "plik" : "plików", "</span></div>\n        <div class=\"file-list\">").concat(task.files.map(fileCard).join("") || "<div class=\"empty compact\"><strong>Brak osobnego pliku \u017Ar\xF3d\u0142owego</strong><p>W tym zadaniu dane znajduj\u0105 si\u0119 bezpo\u015Brednio w tre\u015Bci arkusza albo nie by\u0142o ich w dostarczonej paczce.</p></div>", "</div>\n      </section>");
    activeCategory = task.category;
    categoryButtons.forEach(function (button) {
      return button.classList.toggle("active", button.dataset.category === activeCategory);
    });
    app.querySelector(".back").addEventListener("click", renderCategory);
    attachLightboxes();
    window.scrollTo({
      top: 0
    });
    history.pushState({
      view: "task",
      examSlug: examSlug,
      taskId: taskId
    }, "", "#zadanie-".concat(encodeURIComponent(examSlug), "-").concat(encodeURIComponent(taskId)));
  }
  function fileCard(file) {
    var ext = file.name.split(".").pop();
    return "<a class=\"file\" href=\"".concat(encodeURI(file.href), "\" download>\n      <span class=\"file-icon\">").concat(escapeHtml(ext), "</span>\n      <span><strong>").concat(escapeHtml(file.name), "</strong><small>").concat(escapeHtml(file.path), " \xB7 ").concat(humanSize(file.size), "</small></span>\n      <span class=\"download\" aria-label=\"Pobierz\">\u2193</span>\n    </a>");
  }
  categoryButtons.forEach(function (button) {
    return button.addEventListener("click", function () {
      return setCategory(button.dataset.category);
    });
  });
  requirementsButton === null || requirementsButton === void 0 || requirementsButton.addEventListener("click", setRequirements);
  document.querySelector("[data-home]").addEventListener("click", function () {
    return setCategory("all");
  });
  search.addEventListener("input", function () {
    query = search.value;
    if (activeCategory === "requirements") renderRequirements(true);else if (activeCategory === "all") renderLibrary();else renderCategory();
  });
  document.addEventListener("keydown", function (event) {
    var _document$activeEleme;
    if (event.key === "Escape" && activeLightbox) {
      event.preventDefault();
      closeLightbox();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Enter" && (_document$activeEleme = document.activeElement) !== null && _document$activeEleme !== void 0 && _document$activeEleme.matches("[data-exam]")) document.activeElement.click();
  });
  window.addEventListener("popstate", function (event) {
    var _event$state, _event$state2, _event$state3, _event$state4;
    closeLightbox();
    if (((_event$state = event.state) === null || _event$state === void 0 ? void 0 : _event$state.view) === "exam") openExam(event.state.slug);else if (((_event$state2 = event.state) === null || _event$state2 === void 0 ? void 0 : _event$state2.view) === "task") openTask(event.state.examSlug, event.state.taskId);else if (((_event$state3 = event.state) === null || _event$state3 === void 0 ? void 0 : _event$state3.view) === "requirements") setRequirements();else if (((_event$state4 = event.state) === null || _event$state4 === void 0 ? void 0 : _event$state4.view) === "category") {
      activeCategory = event.state.category;
      activeTheoryTopic = event.state.theoryTopic || "all";
      categoryButtons.forEach(function (button) {
        return button.classList.toggle("active", button.dataset.category === activeCategory);
      });
      requirementsButton === null || requirementsButton === void 0 || requirementsButton.classList.remove("active");
      renderCategory();
    } else {
      activeCategory = "all";
      categoryButtons.forEach(function (button) {
        return button.classList.toggle("active", button.dataset.category === "all");
      });
      requirementsButton === null || requirementsButton === void 0 || requirementsButton.classList.remove("active");
      renderLibrary();
    }
  });
  var initialSlug = decodeURIComponent(location.hash.slice(1));
  var initialCategory = initialSlug.match(/^dzial-(excel|access|python|algorytmy|teoria)(?:-(.+))?$/);
  if (initialSlug === "wymagania" || initialSlug.startsWith("wymagania-")) {
    setRequirements();
    if (initialSlug !== "wymagania") requestAnimationFrame(function () {
      var _document$getElementB;
      (_document$getElementB = document.getElementById(initialSlug)) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({
        block: "start"
      });
      history.replaceState({
        view: "requirements"
      }, "", "#".concat(initialSlug));
    });
  } else if (initialCategory) {
    activeCategory = initialCategory[1];
    activeTheoryTopic = activeCategory === "teoria" && theoryTopicById[initialCategory[2]] ? initialCategory[2] : "all";
    categoryButtons.forEach(function (button) {
      return button.classList.toggle("active", button.dataset.category === activeCategory);
    });
    requirementsButton === null || requirementsButton === void 0 || requirementsButton.classList.remove("active");
    renderCategory();
  } else if (initialSlug && data.exams.some(function (exam) {
    return exam.slug === initialSlug;
  })) openExam(initialSlug);else renderLibrary();
})();
