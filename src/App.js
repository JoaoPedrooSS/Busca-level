import axios from "axios";
import { useState } from "react";
import ApexCharts from "./ApexChart";
import styles from "./App.module.css";
import ScrollPanel from "./ScrollArea"; // Importando o componente de Painel com Rolagem

function App() {
  const [cidade, setCidade] = useState("");
  const [pesquisa, setPesquisa] = useState([]);

  function busca() {
    axios
      .get(
        `https://queridodiario.ok.org.br/api/cities?city_name=${cidade}&levels=`
      )
      .then((res) => {
        console.log("Dados recebidos:", res.data);
        setPesquisa(res.data.cities);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.inputs}>
      <h2>Explore os Níveis das Cidades</h2>
      <div>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Digite o nome da cidade"
        />
        <button onClick={busca}>Buscar</button>
      </div>
      <div className={styles.principal}>
        <ScrollPanel>
          {/* Exibindo os nomes das cidades no Painel com Rolagem */}
          {pesquisa.map((cidade) => (
            <div className={styles.list} key={cidade.id}>
              <b>Nome: </b> {cidade.territory_name} <br />
              <b>Level: </b>{cidade.level} <br />
              <b>Estado: </b>{cidade.state_code}
            </div>
          ))}
        </ScrollPanel>
        <ApexCharts pesquisa={pesquisa} />
      </div>
    </div>
  );
}

export default App;
