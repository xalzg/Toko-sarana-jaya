import { MECHANIC_PHONE_WA } from "../data/data";

export function openWhatsApp(message) {
  const url = `https://wa.me/${MECHANIC_PHONE_WA}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function copyText(text, callback) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (callback) callback();
    }).catch(() => {
      fallbackCopyText(text, callback);
    });
  } else {
    fallbackCopyText(text, callback);
  }
}

function fallbackCopyText(text, callback) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  if (callback) callback();
}
