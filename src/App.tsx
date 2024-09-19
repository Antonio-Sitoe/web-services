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
        {[
          'c7eb52ea-ba17-4d05-8862-8b951ccc4089',
          'd4228666-36a2-46c3-8469-dbc537960f84',
          'e15d31f2-7db9-4cbf-9d93-99dd8fa1ff5c',
          'e15d31f2-9876-acvb-123-1efgegfth65g',
          'c694ac9f-315a-4117-87a2-bf0d38362e68',
          '4674fa03-b2e7-48da-b27b-cfda7a90191b',
          '4dc8c3a8-d78f-409b-8a57-3d0531e59574',
        ].map((item, i) => {
          return (
            <button onClick={() => handle(item)}>
              Fazer registo Empresa {i + 1}
            </button>
          )
        })}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
