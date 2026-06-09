import fotoperfil from './fotoperfil.jpg'
import './App.css'

function App() {
  return (
  <div>
    <header>
     <img src={fotoperfil}></img>
     <h1>Paulo Henrique</h1>
    </header>

    <main>
      <section>
        <h2>Objetivo: Busco minha primeira oportunidade profissional. 
        Tenho facilidade em aprender novas funções, foco em organização
        e grande motivação para aplicar meus conhecimentos teóricos e crescer juntos</h2>
      </section>
      <section>
        <h1>Dados para Contatos</h1>
        <h2>Paulo Henrique</h2>
        <p>44 xxxxx-xxxx</p>
        <p>E-mail: phrodriguesdecarva@gmail.com</p>
        <p>Linkdin: xxxxxxxx</p>
        <p>GitHub: xxxx</p>
      </section>

      <section>
        <h1>Formação</h1>
        <div>
          <article>
            <h2>Ensino Médio Profissionalizante em Desenvolvimento de Sistemas</h2>
            <p>Instituição: Colégio Estadual Santa Maria Goretti</p>
            <p>Ano de Conclusão: 2027</p>
          </article>

          <article>
            <h2></h2>
            <p>Instituição:</p>
            <p>Ano de Conclusão: Concluido</p>
          </article>
        </div>
      </section>

      <section>
        <h1>Experiência Profissional</h1>
        <div>
          <article>
            <h2>Empresa:nenhuma</h2>
            <p>Função/Cargo:</p>
            <p>Período:</p>
          </article>
        </div>
      </section>
    </main>

    <footer>
      <div>Desenvolvido por Paulo Henrique</div>
    </footer>
   </div>
  );
}

export default App;
