
import React, { useState, useEffect, useCallback } from 'react';
import { api } from './services/api'
import { uuid } from 'uuidv4'

interface IData {
  id: string;
  nome: string;
  price: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [fruta, setFruta] = useState<string>('')
  const [frutaValue, setFrutaValue] = useState<any>('')

  console.log(data)

  useEffect(() => {
    console.log(data)
    api.get('data').then(
      response => {
        setData(response.data)
      }
    )
  }, [data]);


  const convertoToCurrency = useCallback((value: number) =>
    Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value/100)
    , []);

  const addToApi = useCallback(() => {
    api.post('data', {
      id: uuid,
      nome: fruta,
      price: frutaValue
    }).then(
      response => alert('Tudo certo!')
    ).catch(e => alert('Error'))

  }, [uuid, fruta, frutaValue])

  return (

    <div>
      <h2>Olá!!</h2>
      <ul>
        {data.map(fruta => {
          return (
            <li key={fruta.id}>
              {fruta.nome} | {convertoToCurrency(fruta.price)}
            </li>
          )
        })}
      </ul>
      <hr />
      <h1>{fruta}</h1>
      <hr />

      <input type="text" onChange={e => setFruta(e.target.value)} placeholder="Qual fruta" />
      <input type="number" onChange={e => setFrutaValue(parseFloat(e.target.value))} placeholder="Qual valor" />

      <button onClick={addToApi}>Adicionar</button>
    </div>
  );
}
export default App;