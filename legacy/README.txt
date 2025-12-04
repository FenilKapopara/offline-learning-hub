Offline Learning Hub – Static Web App (No Build)

Open `index.html` directly in your browser or serve with any static server.

Features
- Offline-first (caches courses & reviews locally if the hub is down)
- Catalog with search, subject & level filters
- Feedback dialog (ratings + comments)
- Settings for language and local hub address
- Tutor upload UI (POST to `/api/uploads` on your local hub)

Configure
1) Click Settings (top right).
2) Set Hub address e.g. http://hub.local or http://10.0.0.1
3) Save → the app reloads courses.

Optional local server:
python3 -m http.server 5173
# open http://localhost:5173/index.html
