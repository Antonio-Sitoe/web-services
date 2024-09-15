import { useEffect, useState } from 'react'

function Form() {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState({
    name: '',
    document_number: '',
    birth_date: '',
    nationality: '',
    phone_number: '',
    physical_address: '',
    card_number: '',
    issue_date: '',
  })

  useEffect(() => {
    setLoad(true)
    fetch('https://api-storage-tiaw-sigma.vercel.app/sendData')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json?.data)
      })
      .finally(() => {
        setLoad(false)
      })
  }, [])

  if (load) return <p>carregando...</p>
  return (
    <div>
      <h3>Nome completo</h3>
      <span>{data?.name}</span>

      <h3>Número do documento</h3>
      <span>{data?.document_number}</span>

      <h3>Data de nascimento</h3>
      <span>{data?.birth_date}</span>

      <h3>Nacionalidade</h3>
      <span>{data?.nationality}</span>

      <h3>Número de telefone</h3>
      <span>{data?.phone_number}</span>

      <h3>Endereço</h3>
      <span>{data?.physical_address}</span>

      <h3>Número do cartão</h3>
      <span>{data?.card_number}</span>

      <h3>Data de emissão do documento</h3>
      <span>{data?.issue_date}</span>
    </div>
  )
}

export { Form }
