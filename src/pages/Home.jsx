import Card from '../components/Card';

function Home() {
  const cardsData = [
    { bgColor: '#FDE4E4', title: 'Youtube', icon: '🎥', number: '01', description: 'Produza conteúdo criativo e conquiste uma audiência global no palco digital do mundo.' },
    { bgColor: '#FFF7E0', title: 'Tiktok', icon: '🎵', number: '02', description: 'Foque em criatividade e brilhe nos vídeos curtos que envolvem o mundo global do TikTok.' },
    { bgColor: '#E0F7F4', title: 'Facebook', icon: '📘', number: '03', description: 'Conecte-se com uma audiência de forma autêntica e transforme seus vídeos em tendências no feed do Facebook.' },
    { bgColor: '#E0E7FF', title: 'Instagram', icon: '📸', number: '04', description: 'Inspire os usuários com histórias visuais e crie laços através de imagens e vídeos nas Stories e Reels.' },
  ];

  return (
    <div>
      <h1>Crie seus vídeos online</h1>
      <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
      <button>Começar agora!</button>
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;