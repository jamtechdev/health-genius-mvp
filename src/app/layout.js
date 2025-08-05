// ✅ Correct
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
          rel="stylesheet"
        />

      </head>
      <body>{children}
        <script src="https://cdn.jsdelivr.net/npm/apexcharts" strategy="afterInteractive"></script>
        {/* <script src="/main.js" strategy="lazyOnload"></script> */}
      </body>
    </html>
  );
}