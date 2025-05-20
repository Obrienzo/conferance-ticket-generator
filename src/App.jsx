import IntroPage from "./IntroPage.jsx";

function App() {

  return (
    <main className="min-h-screen grid place-content-center bg-[url('/src/assets/images/background-mobile.png')] md:bg-[url('/src/assets/images/background-tablet.png')] lg:bg-[url('/src/assets/images/background-desktop.png')] bg-cover bg-center text-neutral-100 p-5">
    <IntroPage />
    </main>
  )
}

export default App
