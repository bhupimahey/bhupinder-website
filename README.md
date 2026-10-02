# bhupimahey.in

Next.js (React) static export. `npm install`, `npm run dev` to develop, `npm run build` creates `out/`.
Deploy: GitHub Actions > Deploy to Production > Run workflow (manual only; uploads `out/` via rsync).
`public/contact.php` is the contact form handler (PHP, shared hosting). Add `ErrorDocument 404 /404.html` to the server's .htaccess once.
