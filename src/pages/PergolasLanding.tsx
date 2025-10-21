import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, CheckCircle, XCircle } from "lucide-react";

const PergolasLanding = () => {
  const [userCity, setUserCity] = useState('Portugal');
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'gmail' | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    message: 'Saudações, gostaria de obter o orçamento de uma pérgola bioclimática.'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Detectar localização do usuário
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city) {
          setUserCity(data.city);
          setFormData(prev => ({ ...prev, city: data.city }));
        }
      } catch (error) {
        console.log('Erro ao detectar localização:', error);
        setUserCity('Portugal');
      }
    };

    detectLocation();
  }, []);

  const handleChannelSelect = (channel: 'whatsapp' | 'gmail') => {
    setSelectedChannel(channel);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          channel: selectedChannel,
          subject: `Orçamento Pérgola Bioclimática - ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          city: '',
          message: 'Saudações, gostaria de obter o orçamento de uma pérgola bioclimática.'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Bloco 1 - Texto principal */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-iberico-800">
              Quanto custa instalar uma pérgola bioclimática em <span className="text-iberico-600">{userCity}</span>?
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-iberico-600 max-w-3xl mx-auto">
              <p>
                Em <strong>{userCity}</strong>, o valor médio de fornecimento e instalação de uma pérgola bioclimática pela CTIbéricos começa a partir de <span className="text-iberico-800 font-bold text-2xl">1.000 €</span>.
              </p>
              
              <p>
                Claro que esse preço pode ser mais baixo ou mais alto, dependendo do tipo de estrutura, área disponível e necessidades específicas da sua casa ou estabelecimento.
              </p>
              
              <p className="text-xl font-medium">
                👉 Se quer saber quanto custaria exatamente no seu espaço, a CTIbéricos está a oferecer um <span className="text-green-600 font-bold">orçamento personalizado e gratuito</span>, sem compromisso — com resposta média em apenas <span className="text-blue-600 font-bold">15 a 20 minutos</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 - Pergunta de canal de atendimento */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-iberico-800">
              Onde gostaria de ser atendido?
            </h2>
            <p className="text-lg text-iberico-600 mb-12">
              Escolha o canal mais prático para receber o seu orçamento personalizado.
            </p>

            {!selectedChannel && (
              <div className="flex flex-col md:flex-row gap-6 animate-fade-in">
                <Button
                  onClick={() => handleChannelSelect('whatsapp')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>WhatsApp</span>
                </Button>
                
                <Button
                  onClick={() => handleChannelSelect('gmail')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Mail className="h-6 w-6" />
                  <span>Gmail</span>
                </Button>
              </div>
            )}

            {/* Formulário dinâmico */}
            {selectedChannel && (
              <div className="animate-fade-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-iberico-700 mb-2">
                        Nome
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="O seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-iberico-700 mb-2">
                        Sobrenome
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="O seu sobrenome"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-iberico-700 mb-2">
                        Número de telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+351 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-iberico-700 mb-2">
                        Cidade
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="A sua cidade"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-iberico-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      readOnly
                      className="w-full bg-gray-50"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-6 text-lg font-medium rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ${
                      selectedChannel === 'whatsapp'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      'A enviar...'
                    ) : selectedChannel === 'whatsapp' ? (
                      'Enviar pedido via WhatsApp'
                    ) : (
                      'Receber orçamento por Gmail'
                    )}
                  </Button>
                </form>

                {/* Status de envio */}
                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <p className="text-green-800 font-medium">
                      ✅ Pedido enviado com sucesso! Um especialista da CTIbéricos entrará em contacto em breve.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <p className="text-red-800 font-medium">
                      ❌ Ocorreu um erro ao enviar o pedido. Por favor, tente novamente.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bloco 4 - Seção de confiança */}
      <section className="py-16 bg-iberico-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Quem somos */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-iberico-800 text-center">
                Quem somos nós
              </h2>
              <div className="space-y-4 text-lg text-iberico-600 text-center">
                <p>
                  A CTIbéricos é uma empresa especializada em soluções de pérgolas bioclimáticas, toldos e coberturas inteligentes para residências e estabelecimentos comerciais em todo o território português.
                </p>
                <p>
                  Com mais de 15 anos de experiência, unimos design, tecnologia e conforto para transformar espaços exteriores em áreas funcionais e elegantes.
                </p>
                <p>
                  Atuamos com compromisso, rapidez e qualidade certificada — porque acreditamos que cada projeto deve refletir o estilo e o conforto de quem o vive.
                </p>
              </div>
            </div>

            {/* Testemunhos */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-iberico-800 text-center">
                O que dizem os nossos clientes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <p className="text-iberico-600 mb-4">
                    "Instalação impecável, equipa super profissional."
                  </p>
                  <p className="text-iberico-800 font-medium">– Ana M., Lisboa</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <p className="text-iberico-600 mb-4">
                    "A pérgola ficou fantástica! Recomendo sem hesitar."
                  </p>
                  <p className="text-iberico-800 font-medium">– Ricardo P., Setúbal</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <p className="text-iberico-600 mb-4">
                    "Excelente relação qualidade-preço e atendimento rápido."
                  </p>
                  <p className="text-iberico-800 font-medium">– Carla D., Porto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PergolasLanding;
