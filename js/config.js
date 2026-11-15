/**
 * Echte Adressen einsetzen, sobald die Testgruppe und der Play-Test bereit sind.
 * Leere Werte erzeugen keinen kaputten Link, sondern einen sichtbaren Platzhalter.
 * Keine Passwörter, Tokens oder sonstigen Geheimnisse hier hinterlegen:
 * Diese Datei ist auf einer öffentlichen Website für jeden sichtbar.
 */
window.EYD_CONFIG = Object.freeze({
  groupUrl: '',       // z. B. https://groups.google.com/g/...
  playTestUrl: '',    // Der Opt-in-Link aus der Google Play Console
  contactEmail: '',   // Öffentliche Kontaktadresse, z. B. kontakt@example.de
});
