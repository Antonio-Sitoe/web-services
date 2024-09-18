import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handle(ID: string) {
    // window.open(
    //   `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/${ID}`, // URL da página de autenticação
    //   'authPopup', // Nome da janela (opcional)
    //   'width=600,height=900,scrollbars=yes' // Tamanho e opções da janela
    // )
    window.location.href = `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/${ID}`
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Registo de dados</h1>
      <div className="card">
        <button onClick={() => handle('c7eb52ea-ba17-4d05-8862-8b951ccc4089')}>
          Fazer registo Empresa A
        </button>
        <button onClick={() => handle('d4228666-36a2-46c3-8469-dbc537960f84')}>
          Fazer registo Empresa B
        </button>
        <button onClick={() => handle('e15d31f2-7db9-4cbf-9d93-99dd8fa1ff5c')}>
          Fazer registo Empresa C
        </button>
        {/* <button
          onClick={() => {
            window.location.href = `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/b4f730a7-c2a3-49be-8051-8f6d2b15f447`
          }}
        >
          Fazer registo Empresa D
        </button>
        <button
          onClick={() => {
            window.location.href = `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/a1c2d123-ef45-4899-a0ab-bf563d5f9c68`
          }}
        >
          Fazer registo Empresa E
        </button> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
