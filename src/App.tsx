import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handle(ID: string) {
    window.open(
      `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/${ID}`, // URL da página de autenticação
      'authPopup', // Nome da janela (opcional)
      'width=600,height=900,scrollbars=yes' // Tamanho e opções da janela
    )
    // window.location.href = `https://portal-7okv-git-modi-sdk-release-antonio-sitoes-projects.vercel.app/${ID}`
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
          'd4228666-36a2-46c3-8469-09823776g3d2r2',
          'd4228666-36a2-46c3-8469-dbc537960f84',
          'e15d31f2-7db9-4cbf-9d93-99dd8fa1ff5c',
          'a3e26844-4210-4e12-880e-c61545579245',
          '4f8010dd-c639-4056-91ee-9d62d50faca0',
          'bdc29c2d-3284-4f3e-9aba-92cd1134eafd',
          '9ab30b19-a3f7-4370-971a-3bb0f1ef052e',
          '8e93c14d-6fbe-42c9-a176-7cef1b1dab13',
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
