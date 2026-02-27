document.addEventListener("DOMContentLoaded", () => {
  const ta = document.querySelector(".form-textarea");
  if (!ta) return;

  const maxLines = 4;
  const lineHeight = parseFloat(getComputedStyle(ta).lineHeight);

  // measure browser "extra" pixels in scrollHeight
  ta.style.height = lineHeight + "px";
  const extra = ta.scrollHeight - lineHeight;

  function fit() {
    ta.style.height = lineHeight + "px";

    const maxH = lineHeight * maxLines;
    const h = Math.min(maxH, ta.scrollHeight - extra);

    ta.style.height = Math.max(lineHeight, h) + "px";
    ta.style.overflowY = (ta.scrollHeight - extra) > maxH ? "auto" : "hidden";
  }

  ta.addEventListener("input", fit);
  fit(); // initial
});