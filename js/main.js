(function () {
  var AR = {
    nav_proj: "المشاريع", nav_exp: "الخبرة", nav_skills: "المهارات", nav_cert: "الشهادات", nav_contact: "التواصل",
    tidy: "رتّب المكتب",
    bname: "إبراهيم عمران", n1: "إبراهيم", n2: "عمران", r1: "مطوّر Flutter", loc: "القاهرة، مصر",
    role: "مطوّر Flutter | مطوّر تطبيقات موبايل",
    cta1: "شوف أعمالي", cta2: "قول أهلاً", cv: "حمّل السيرة الذاتية",
    avail: "متاح حالياً لفرص العمل بدوام كامل",
    summary: "مطوّر Flutter بخبرة أكثر من 3 سنوات، سلّمت أكثر من 7 تطبيقات موبايل باستخدام Clean Architecture وMVVM وBloc/Cubit، مع تكامل عملي مع REST وGraphQL وFirebase وبوابات الدفع. نشرت عدة تطبيقات على App Store وGoogle Play، واستمررت في العمل الحر طوال فترة الخدمة العسكرية.",
    st1: "سنوات الخبرة", st2: "تطبيقات تم تسليمها", st3: "المتاجر",
    z1: "اللي سلّمته", z1h: "اضغط على أي صورة بولارويد عشان تقلبها.",
    k_store: "تطبيق منشور", k_free: "عمل حر", k_off: "مشاركة بدون إنترنت", k_ai: "بمساعدة الذكاء الاصطناعي", k_oss: "مفتوح المصدر",
    landing: "صفحة الهبوط",
    z2: "اشتغلت فين", z2h: "من الأحدث للأقدم.", now: "الآن",
    j1_role: "مطوّر Flutter مستقل", j1_co: "عمل حر / عملاء عن بُعد", j1_when: "مايو 2025 – الآن",
    j1_a: "سلّمت تطبيقات Flutter كاملة لعملاء مستقلين، من الواجهات وإدارة الحالة إلى التكامل مع الـ API وFirebase.",
    j1_b: "التزمت بمواعيد التسليم مع العملاء أثناء أداء الخدمة العسكرية الإلزامية.",
    j1_c: "سلّمت تطبيقات لعملاء منها Hessaby (متابعة المبيعات والمصروفات) وMHC Laboratory (تحاليل منزلية).",
    j2_role: "مطوّر Flutter", j2_co: "شركة DigiFly، مصر", j2_when: "أكتوبر 2024 – أبريل 2025",
    j2_a: "طوّرت وصنت أكثر من 4 تطبيقات Flutter، من تصميم المعمارية حتى الإطلاق.",
    j2_b: "نشرت أكثر من 3 تطبيقات على App Store وGoogle Play، وتولّيت صفحات المتجر والإصدارات وخطوات النشر.",
    j2_c: "طبّقت Bloc وRiverpod ضمن Clean Architecture، مع تكامل REST API وتخزين Sqflite/Firebase.",
    j3_role: "مطوّر Flutter", j3_co: "شركة Envapress، مصر", j3_when: "مارس 2024 – أغسطس 2024",
    j3_a: "بنيت وصنت أكثر من 3 تطبيقات Flutter من المعمارية الأولية حتى الإنتاج.",
    j3_b: "نشرت أكثر من تطبيقين على App Store وGoogle Play، وتولّيت عملية النشر والإصدار بالكامل.",
    j3_c: "استخدمت Bloc وClean Architecture مع REST API وSqflite وHive وFirebase.",
    z3: "ستيكرات اللابتوب", z3h: "مهاراتي. اسحبها زي ما تحب.", lidnote: "Flutter وDart وأصحابهم",
    p1_d: "تطبيق Flutter لنقل الملفات بين الأجهزة بدون إنترنت، بتكامل مع Android الأصلي وطبقة مخصصة لثبات الاتصال (LocalOnlyHotspot، وربط بـ QR، وسيرفر HTTP محلي، وKotlin MethodChannels).",
    p2_d: "تطبيق تسوّق للأجهزة التقنية: تصفّح ومقارنة وشراء.",
    p3_d: "يربط أصحاب السيارات بورش الإصلاح لطلب عروض الأسعار والحجز والتقييم.",
    p4_d: "تطبيق للأهالي لمتابعة نمو الطفل والتواصل مع مجتمع الأهالي.",
    p5_d: "تطبيق لأصحاب المحلات الصغيرة لمتابعة المبيعات والمصروفات والديون، مع تقارير وتصدير Excel.",
    p6_d: "تطبيق تحاليل منزلية: حجز الزيارات، تتبّع الطلبات، نتائج PDF، مع لوحة تحكم للإدارة.",
    p7_d: "تطبيق تشخيص بمساعدة الذكاء الاصطناعي لكسور العظام وكوفيد-19 والأمراض الجلدية والالتهاب الرئوي.",
    p8_d: "حزمة Flutter للتحجيم المتجاوب بدون BuildContext، منشورة على pub.dev.",
    z4: "شهادات متعلّقة", z4h: "ستة كورسات على Udemy. اضغط على أي شهادة لفتحها.",
    edu_h: "التعليم", edu_d: "بكالوريوس علوم الحاسب، أكاديمية طيبة",
    langs_l: "اللغات", langs_v: "العربية (لغة أم)، الإنجليزية (متوسط)",
    z5: "قول أهلاً", contact_lede: "أبحث عن وظيفة Flutter بدوام كامل. أسرع طريقة للتواصل معي هي الإيميل.",
    c_phone: "الهاتف", c_loc: "الموقع", c_loc_v: "القاهرة، مصر"
  };
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (n) { n.setAttribute("data-en", n.textContent); });
  var root = document.documentElement;
  var langBtn = document.getElementById("langBtn");
  var themeBtn = document.getElementById("themeBtn");
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function setLang(l) {
    var ar = l === "ar";
    root.setAttribute("lang", l);
    root.setAttribute("dir", ar ? "rtl" : "ltr");
    nodes.forEach(function (n) {
      var key = n.getAttribute("data-i18n");
      n.textContent = ar && AR[key] ? AR[key] : n.getAttribute("data-en");
    });
    langBtn.textContent = ar ? "EN" : "العربية";
    document.title = ar ? "إبراهيم عمران | المكتب" : "Ibrahim Omran Desk";
    store("io5-lang", l);
  }
  langBtn.addEventListener("click", function () { setLang(root.getAttribute("lang") === "ar" ? "en" : "ar"); });

  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function paintThemeBtn() { themeBtn.textContent = isDark() ? "day" : "night"; }
  themeBtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next); store("io5-theme", next); paintThemeBtn();
  });
  var savedTheme = load("io5-theme");
  if (savedTheme === "light" || savedTheme === "dark") root.setAttribute("data-theme", savedTheme);
  paintThemeBtn();
  if (load("io5-lang") === "ar") setLang("ar");

  /* the desk lamp: in night mode a pool of light follows the pointer */
  window.addEventListener("pointermove", function (e) {
    root.style.setProperty("--lx", e.clientX + "px");
    root.style.setProperty("--ly", e.clientY + "px");
  }, { passive: true });

  /* drag objects around (desktop only) */
  var mq = window.matchMedia("(min-width: 960px)");
  var desk = document.getElementById("desk");
  var z = 20;
  var drags = Array.prototype.slice.call(document.querySelectorAll(".drag"));
  function flip(el) {
    var on = !el.classList.contains("flipped");
    el.classList.toggle("flipped", on);
    el.setAttribute("aria-pressed", on ? "true" : "false");
  }
  drags.forEach(function (el) {
    var sx = 0, sy = 0, ox = 0, oy = 0, moved = false, active = false;
    el.addEventListener("pointerdown", function (e) {
      if (!mq.matches || (e.button && e.button !== 0)) return;
      if (e.target.closest("a,button,input")) return;
      active = true; moved = false; sx = e.clientX; sy = e.clientY;
      ox = parseFloat(el.style.getPropertyValue("--x")) || 0;
      oy = parseFloat(el.style.getPropertyValue("--y")) || 0;
      el.style.zIndex = ++z;
      try { el.setPointerCapture(e.pointerId); } catch (err) {}
    });
    el.addEventListener("pointermove", function (e) {
      if (!active) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 5) return;
      if (!moved) { moved = true; el.classList.add("lift"); }
      el.style.setProperty("--x", (ox + dx) + "px");
      el.style.setProperty("--y", (oy + dy) + "px");
    });
    el.addEventListener("pointerup", function () {
      if (!active) return;
      active = false; el.classList.remove("lift");
      if (!moved && el.classList.contains("pol")) flip(el);
    });
    el.addEventListener("pointercancel", function () { active = false; el.classList.remove("lift"); });
    if (el.classList.contains("pol")) {
      el.addEventListener("click", function (e) {
        if (mq.matches || e.target.closest("a")) return;
        flip(el);
      });
      el.addEventListener("keydown", function (e) {
        if (e.target !== el) return;
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(el); }
      });
    }
  });
  document.getElementById("tidyBtn").addEventListener("click", function () {
    desk.classList.add("tidy");
    drags.forEach(function (el) { el.style.removeProperty("--x"); el.style.removeProperty("--y"); el.classList.remove("flipped"); el.setAttribute("aria-pressed", "false"); });
    setTimeout(function () { desk.classList.remove("tidy"); }, 700);
  });

  document.querySelectorAll(".copy").forEach(function (b) {
    b.addEventListener("click", function () {
      var text = b.getAttribute("data-copy"), old = b.textContent;
      function done() { b.textContent = "copied"; setTimeout(function () { b.textContent = old; }, 1400); }
      try { navigator.clipboard.writeText(text).then(done, function () { b.textContent = "select it"; }); }
      catch (e) { b.textContent = "select it"; }
    });
  });
})();
