/**
 * Wave B breakable desk — refuse / empty / thin / PDF paths.
 * Presentation-complete (Zoom / booth). Not a SaaS backend.
 * Human owns send. Magnet Stripe HOLD. No counsel-blessed PDFs.
 */
(function () {
  "use strict";

  var cfg = window.WAVEB_DESK;
  if (!cfg) return;

  var input = document.getElementById("desk-input");
  var report = document.getElementById("desk-report");
  var stats = document.getElementById("desk-stats");
  var fileInput = document.getElementById("desk-file");
  if (!input || !report) return;

  var minChars = typeof cfg.minChars === "number" ? cfg.minChars : 48;
  var noun = cfg.noun || "document";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setStats(gaps, passes, refuses) {
    if (!stats) return;
    stats.innerHTML =
      '<div class="stat bad"><b>' + gaps + '</b><span>Gaps</span></div>' +
      '<div class="stat ok"><b>' + passes + '</b><span>Pass</span></div>' +
      '<div class="stat"><b>' + refuses + '</b><span>Refuse</span></div>';
  }

  function refuse(title, detail) {
    report.classList.remove("empty");
    report.innerHTML =
      '<div class="refuse-stamp">' +
        "<span>REFUSE</span>" +
        "<p><strong>" + escapeHtml(title) + "</strong> " + escapeHtml(detail) + "</p>" +
      "</div>" +
      '<p class="small muted">Human owns send. We do not invent fields, file, mail, or certify. Not legal advice. Not a system-of-record replacement.</p>';
    setStats(0, 0, 1);
  }

  function render(rows) {
    var gaps = 0;
    var passes = 0;
    var html = '<div class="gap-list">';
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var kind = row.kind === "pass" ? "pass" : "gap";
      if (kind === "pass") passes += 1;
      else gaps += 1;
      html +=
        '<div class="gap-row ' + kind + '">' +
          '<div class="gap-head"><span>' + escapeHtml(row.title) + "</span>" +
          '<span class="badge ' + kind + '">' + (kind === "pass" ? "Pass" : "Gap") + "</span></div>" +
          '<p class="gap-body">' + escapeHtml(row.body) + "</p>" +
          (row.cite ? '<span class="cite">' + escapeHtml(row.cite) + "</span>" : "") +
          '<span class="cite">NOT ADVICE</span>' +
        "</div>";
    }
    html += "</div>";
    html +=
      '<p class="small muted" style="margin-top:0.85rem">' +
      "Heuristic blotter only. Human owns send. Not legal advice. Category SoR stays theirs." +
      "</p>";
    report.classList.remove("empty");
    report.innerHTML = html;
    setStats(gaps, passes, 0);
  }

  function looksBinary(raw) {
    if (/%PDF-/i.test(raw)) return true;
    if (/[\x00-\x08\x0e-\x1f]/.test(raw)) return true;
    if (/^\s*%!PS/.test(raw)) return true;
    return false;
  }

  function run() {
    var raw = input.value;
    var text = raw.replace(/^\uFEFF/, "").trim();
    if (!text) {
      refuse(
        "Empty blotter.",
        "Nothing pasted. The desk holds — it does not invent a " + noun + "."
      );
      return;
    }
    if (looksBinary(raw)) {
      refuse(
        "PDF / binary refused.",
        "We do not parse binaries on this stub. Paste a text excerpt. No counsel-blessed PDF is generated."
      );
      return;
    }
    if (text.length < minChars) {
      refuse(
        "Thin paste.",
        "Not enough face to check. We do not fill blanks, guess clocks, or stamp ready-to-send."
      );
      return;
    }
    if (typeof cfg.analyze !== "function") {
      refuse("Desk not configured.", "No analyzer on this route.");
      return;
    }
    var rows = cfg.analyze(text);
    if (!rows || !rows.length) {
      refuse(
        "No checkable face.",
        "Heuristic found nothing it can label. Human owns the file. We do not invent a clean pass."
      );
      return;
    }
    render(rows);
  }

  function loadSample() {
    if (!cfg.sample) return;
    input.value = cfg.sample;
    run();
  }

  function breakEmpty() {
    input.value = "";
    run();
  }

  function breakThin() {
    input.value = cfg.thin || "ok";
    run();
  }

  function breakPdf() {
    input.value = "%PDF-1.4\n% Wave B stub — binary refused on purpose\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF";
    run();
  }

  document.getElementById("btn-run") && document.getElementById("btn-run").addEventListener("click", run);
  document.getElementById("btn-sample") && document.getElementById("btn-sample").addEventListener("click", loadSample);
  document.getElementById("btn-break-empty") && document.getElementById("btn-break-empty").addEventListener("click", breakEmpty);
  document.getElementById("btn-break-thin") && document.getElementById("btn-break-thin").addEventListener("click", breakThin);
  document.getElementById("btn-break-pdf") && document.getElementById("btn-break-pdf").addEventListener("click", breakPdf);
  document.getElementById("btn-clear") && document.getElementById("btn-clear").addEventListener("click", function () {
    input.value = "";
    report.classList.add("empty");
    report.innerHTML = "<span>Paste a synthetic excerpt, load the sample, or try a break path. Empty / thin / PDF should REFUSE.</span>";
    setStats(0, 0, 0);
  });

  if (fileInput) {
    fileInput.addEventListener("change", function () {
      var file = fileInput.files && fileInput.files[0];
      if (!file) return;
      var name = (file.name || "").toLowerCase();
      var type = (file.type || "").toLowerCase();
      if (name.endsWith(".pdf") || type.indexOf("pdf") !== -1 || type.indexOf("image/") === 0) {
        breakPdf();
        fileInput.value = "";
        return;
      }
      var reader = new FileReader();
      reader.onload = function () {
        input.value = String(reader.result || "");
        run();
      };
      reader.readAsText(file);
      fileInput.value = "";
    });
  }

  var loc = String(window.location.search || "") + String(window.location.hash || "");
  if (/break=empty/.test(loc)) breakEmpty();
  else if (/break=pdf/.test(loc)) breakPdf();
  else if (/break=thin/.test(loc)) breakThin();
})();
