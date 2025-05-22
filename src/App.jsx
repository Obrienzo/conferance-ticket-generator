import IntroPage from "./IntroPage.jsx";

function App() {

  return (
    <main className="min-h-screen grid place-content-center text-neutral-100 p-5 relative">
    
      <div className="mb-4.5">
                <img className="mx-auto" src="/src/assets/images/logo-full.svg" alt="Page logo" />
            </div>
      <IntroPage />

      {/* Adding the additional styling elements */}
      <img className="absolute bottom-0 -z-10 lg:invisible" src="/src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="" />
      <img className="absolute bottom-0 -z-10 invisible lg:visible" src="/src/assets/images/pattern-squiggly-line-bottom-desktop.svg" alt="" />
      <img className="absolute right-0 -z-20" src="/src/assets/images/pattern-squiggly-line-top.svg" alt="" />
    </main>
  )
}

export default App
