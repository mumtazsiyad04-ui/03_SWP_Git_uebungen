# Website-Projekt

Eine einfache HTML-Website für Git-Übungen.

## Features

- HTML-Grundstruktur
- CSS-Styling mit modernem Design
- JavaScript-Funktionalität für dynamischen Content
- responsives Container-Layout

## Verwendung

Öffnen Sie `index.html` in einem Webbrowser.

## Git-Übungen

Dieses Projekt dient als Übungsbeispiel für:

- Branch-Management
- Lösen von Merge-Konflikten
- Reset-Operationen

15. Reflexionsaufgaben
15.1 Repository und Staging Area
1. Welchen Zweck erfüllt die Staging Area?
Die Staging Area ist eine Art Zwischenstation, in der ich Änderungen sammeln kann, bevor ich sie committe. So kann ich selbst entscheiden, welche Änderungen in den nächsten Commit kommen sollen.

2. Worin unterscheiden sich git diff und git diff --cached?
Mit git diff sehe ich Änderungen, die noch nicht mit git add vorgemerkt wurden. Mit git diff --cached sehe ich dagegen die Änderungen, die schon in der Staging Area liegen und für den nächsten Commit bereit sind.

3. Warum ist git add . bei großen Änderungen oft weniger kontrolliert als git add DATEI?
Bei git add . werden alle Änderungen im aktuellen Ordner und seinen Unterordnern hinzugefügt. Dabei kann es passieren, dass ich auch Dateien hinzufüge, die ich eigentlich gar nicht committen wollte. Mit git add DATEI kann ich gezielt auswählen, welche Datei ich hinzufügen möchte.

15.2 Branches und Merge

1. Warum entstanden die Änderungen für CSS und JavaScript in getrennten Branches?
Die Änderungen wurden in getrennten Branches gemacht, damit CSS und JavaScript unabhängig voneinander bearbeitet werden konnten. So konnte ich an verschiedenen Funktionen arbeiten, ohne den Hauptbranch main direkt zu verändern.

2. Warum war der erste Merge ein Fast-Forward?
Der erste Merge war ein Fast-Forward, weil es im Hauptbranch keine neuen Änderungen gab, die mit dem Feature-Branch zusammengeführt werden mussten. Git konnte den Zeiger von main einfach auf den neueren Commit verschieben.

3. Warum entstand beim zweiten Merge ein Konflikt in index.html?
Der Konflikt entstand, weil beide Branches Änderungen an derselben Stelle in der Datei index.html gemacht hatten. Git konnte nicht selbst entscheiden, welche Änderung übernommen werden sollte. Deshalb musste ich den Konflikt selbst lösen.

4. Welche Bedeutung haben HEAD, ======= und der Branch-Name in den Konfliktmarkierungen?
HEAD zeigt die Änderungen aus meinem aktuell geöffneten Branch. Die Linie ======= trennt die beiden unterschiedlichen Versionen voneinander. Der Branch-Name am Ende zeigt, aus welchem anderen Branch die Änderungen kommen.

5. Was bewirkt git add index.html nach der manuellen Konfliktlösung?
Mit git add index.html teile ich Git mit, dass ich den Konflikt in dieser Datei gelöst habe. Die korrigierte Datei wird damit für den nächsten Commit vorgemerkt.

15.3 Reset

1. Welche Bereiche verändert git reset --soft HEAD~1?
Mit git reset --soft HEAD~1 wird der letzte Commit zurückgenommen. Die Änderungen bleiben aber in der Staging Area vorgemerkt und sind weiterhin im Arbeitsverzeichnis vorhanden.

2. Welche zusätzliche Wirkung hat git reset --mixed HEAD~1?
Bei git reset --mixed HEAD~1 wird ebenfalls der letzte Commit zurückgenommen. Zusätzlich werden die Änderungen aus der Staging Area entfernt. Die Änderungen bleiben aber in den Dateien erhalten und sind nicht mehr vorgemerkt.

3. Warum ist git reset --hard gefährlich?
git reset --hard ist gefährlich, weil dabei alle nicht committeten Änderungen an verfolgten Dateien verloren gehen können. Deshalb sollte man diesen Befehl nur verwenden, wenn man wirklich sicher ist, dass man die Änderungen nicht mehr braucht.

4. Warum wurde temp-fehler.txt in dieser Übung durch den Hard Reset entfernt?
Die Datei wurde entfernt, weil sie im zurückgesetzten Commit nicht mehr vorhanden war, aber im neueren Commit enthalten war. Durch den Hard Reset wurde das Arbeitsverzeichnis wieder auf den älteren Stand gebracht.

5. Warum würde ein Hard Reset eine beliebige, nie versionierte Notizdatei normalerweise nicht automatisch entfernen?
Eine Datei, die Git noch nie gespeichert oder verfolgt hat, gehört nicht zur normalen Versionsgeschichte. Deshalb wird sie durch einen Hard Reset normalerweise nicht gelöscht.

6. Was bedeutet HEAD~1?
HEAD~1 bedeutet, dass ich einen Commit vor meinem aktuellen Commit zurückgehe. Es ist also der direkte Vorgänger des aktuellen Commits.

7. Wie half das Reflog bei der Wiederherstellung des entfernten Commits?
Mit git reflog konnte ich sehen, welche Commits vorher aktiv waren. Dadurch konnte ich den entfernten Commit wiederfinden und meinen alten Stand wiederherstellen.

15.4 Praktische Situationen

1. Der letzte lokale Commit enthält die richtigen Änderungen, aber eine schlechte Commit-Nachricht. Welche Vorgehensweise ist geeignet?
Dafür kann ich git commit --amend -m "Neue Nachricht" verwenden. Damit kann ich die Nachricht des letzten Commits ändern, ohne einen neuen Commit erstellen zu müssen.

2. Sie möchten den letzten lokalen Commit auflösen und seine Änderungen als nicht vorgemerkte Änderungen behalten. Welcher Modus passt?
Dafür verwende ich git reset --mixed HEAD~1. Der letzte Commit wird zurückgenommen und die Änderungen bleiben erhalten, werden aber aus der Staging Area entfernt.

3. Eine nicht committete Änderung an einer verfolgten Datei soll verworfen werden. Welcher Befehl eignet sich?
Dafür verwende ich git restore DATEI. Damit werden die nicht committeten Änderungen der Datei verworfen und der letzte gespeicherte Stand wird wiederhergestellt.

4. Sie müssen kurzfristig den Branch wechseln, möchten aber unfertige Änderungen noch nicht committen. Welches Werkzeug verwenden Sie?
Dafür verwende ich git stash. Damit kann ich meine unfertigen Änderungen vorübergehend speichern und später mit git stash pop wieder zurückholen.

5. Warum sollte veröffentlichte, gemeinsam genutzte Historie nicht ohne Abstimmung mit reset und Force Push umgeschrieben werden?
Weil andere Personen möglicherweise schon mit diesen Commits arbeiten. Wenn ich die gemeinsame Git-Historie einfach verändere und einen Force Push mache, können Änderungen von anderen verloren gehen oder Probleme bei der Zusammenarbeit entstehen. Deshalb sollte man das vorher immer mit dem Team absprechen.

 
