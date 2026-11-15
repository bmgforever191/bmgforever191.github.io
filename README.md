# Earn Your Doomscroll – Website

Statische deutschsprachige Website für die Android-App. **Unabhängig vom privaten React-Native-App-Repository.** Keine Installation von npm, React oder anderen Abhängigkeiten notwendig. Die Website enthält bewusst keine Spenden- oder Unterstützungslinks.

## Lokal ansehen

1. ZIP entpacken.
2. Terminal im entpackten Ordner öffnen.
3. `python3 -m http.server 8000`
4. Im Browser `http://localhost:8000` öffnen.

Für eine reine Vorschau kannst du auch `index.html` direkt öffnen. Mit dem lokalen Server sind die relativen Links zu den Unterseiten jedoch zuverlässiger zu prüfen.

## Links eintragen

Nur `js/config.js` bearbeiten:

```js
window.EYD_CONFIG = Object.freeze({
  groupUrl: 'https://groups.google.com/g/DEINE-GRUPPE',
  playTestUrl: 'https://play.google.com/apps/testing/DEINE.APP.ID',
  contactEmail: 'kontakt@deine-domain.de',
});
```

Diese Adressen sind **nur illustrative Beispiele**, keine funktionierenden Links. Setze deine echten URLs ein. **Niemals Passwörter oder private Zugangsdaten in diese Datei schreiben:** Sie wird öffentlich ausgeliefert.

Solange ein Wert leer ist, zeigt die Website einen Hinweis statt eines kaputten Buttons.

Der obere „Am Test teilnehmen“-Button führt immer zum Testbereich. Dort stehen Google Group und Play-Testlink in der richtigen Reihenfolge. Die Gruppenmitgliedschaft allein ist noch keine Google-Play-Testanmeldung.

## Screenshots austauschen

Unter `assets/` liegen die von dir bereitgestellten Screenshots, komprimiert als WebP:

- `heute.webp`, `apps.webp`, `regeln.webp` – Haupt-Screenshots
- `nutzungszugriff-liste.webp`, `nutzungszugriff-detail.webp`
- `overlay-liste.webp`, `overlay-detail.webp` – Android-Hilfe

Wenn sich das UI in der nächsten App-Version geändert hat, Screenshots aktualisieren. Nimm für Website-Screenshots keine persönlichen Daten, privaten Apps oder sensiblen Benachrichtigungen auf, die du nicht veröffentlichen möchtest. Die aktuellen Bilder stammen aus deinen Uploads; bitte vor Publikation entsprechend prüfen.

## Gestaltung ändern

`css/styles.css` enthält Farben, Abstände, Responsive-Layout und alle UI-Komponenten. Keine externen Schriftarten, Bildquellen oder JavaScript-Bibliotheken. Vergrößerung der Screenshots erfolgt über ein natives `<dialog>`.

## GitHub Pages

1. **Neues, separates öffentliches Repository** anlegen, z. B. `earn-your-doomscroll-site`.
2. Den **Inhalt** dieses Ordners (nicht die ZIP-Datei) in das Repository committen.
3. Unter **Settings → Pages** als Quelle „Deploy from a branch“, `main` und `/ (root)` wählen.
4. Veröffentlicht wird die Website unter `https://DEIN-USERNAME.github.io/REPO-NAME/`.
5. Die statische Seite ist auch unter einem Unterpfad erreichbar, weil alle Ressourcen relative Pfade verwenden.

### Hochladen über den Browser (ohne zweites GitHub-Konto auf dem Mac)

Für dein neues Repository `bmgforever191.github.io`:

1. Im Browser mit dem neuen GitHub-Account anmelden.
2. Repository `bmgforever191.github.io` öffentlich anlegen.
3. Dieses ZIP **entpacken**. In GitHub unter **Add file → Upload files** den **Inhalt des Ordners** hochladen, insbesondere `index.html`, `css`, `js`, `assets`, `datenschutz`, `impressum`.
4. Änderungen committen und unter **Settings → Pages → Deploy from a branch → main → / (root)** veröffentlichen.
5. Website prüfen: `https://bmgforever191.github.io/`.
6. Datenschutzseite prüfen: `https://bmgforever191.github.io/datenschutz/`.

**Achtung:** Vor der öffentlichen Veröffentlichung die rechtlichen Platzhalter ergänzen und prüfen. Das HTML ist bereits vorbereitet, aber nicht rechtlich final.

Dein privates Android-Quellcode-Repository muss nicht öffentlich werden.

## VOR einer öffentlichen Freischaltung

**Nicht mit Platzhaltern veröffentlichen.** Der aktuelle Stand ist eine Vorschau / Vorbereitung:

- [ ] `impressum/index.html`: vollständige, zutreffende Anbieterangaben ergänzen
- [ ] `datenschutz/index.html`: verantwortliche Person, Kontakt, Hosting-Details und tatsächliche App-Datenverarbeitung anhand des finalen Builds ergänzen; prüfen lassen
- [ ] Prüfen, ob und welche weiteren rechtlichen Angaben auf der Website und im Play-Store benötigt werden
- [ ] `js/config.js`: echte Gruppen- und Play-Testlinks eintragen
- [ ] Datenschutzhinweise der Android-App mit ihrem tatsächlichen Release-Build abgleichen
- [ ] Support-Kontaktadresse hinterlegen und überwachen
- [ ] App-Bilder auf persönliche Informationen prüfen und nach der Codex-Iteration ggf. aktualisieren
- [ ] Mobile Darstellung, Tastaturbedienung und alle Links testen
- [ ] Keine Signierungsdateien, APK/AAB, `release.properties` oder privaten App-Quellcode in dieses Repository kopieren

Die rechtlichen Seiten sind **keine rechtliche Beratung** und derzeit ausdrücklich unvollständig.

## Datenschutz-Unterseite für Google Play

Die Seite unter `datenschutz/index.html` ist eine **getrennt erreichbare HTML-Unterseite** und umfasst Entwürfe zur **Android-App** (UsageStats, Overlay, lokale Speicherung, Löschung) und zur **Website** (GitHub Pages, Kontakt, externe Google-Links).

Die Entwurfsseite enthält noch sichtbare Markierungen `[ ... ]`, ein Entwurfsbanner und `noindex`. **Erst wenn die Datenschutzerklärung geprüft und vervollständigt ist**, die Platzhalter und Entwurfskennzeichnung entfernen, den `<title>` anpassen und die Meta-Angabe `noindex` entfernen. Danach im Browser die URL `https://bmgforever191.github.io/datenschutz/` aufrufen und kontrollieren.

Die URL kann dann in der **Google Play Console** und in der **Android-App** als Datenschutzerklärung verlinkt werden. Google verlangt eine öffentlich ohne Anmeldung erreichbare Webseite, keine PDF-Datei. Prüfe, dass die Play-Console-Angaben zur Datensicherheit und dieser Text miteinander übereinstimmen.

Quellen zur Prüfung:
- Google Play Nutzer-Daten-Policy: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play Review-Vorbereitung: https://support.google.com/googleplay/android-developer/answer/9859455
- GitHub Pages und IP-Protokollierung: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
