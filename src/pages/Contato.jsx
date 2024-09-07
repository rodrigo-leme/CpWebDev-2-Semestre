function Contato() {
    return (
      <div>
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default Contato;