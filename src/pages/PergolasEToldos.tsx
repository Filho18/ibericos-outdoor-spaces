import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmailButton from "@/components/EmailButton";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "António Ferreira",
    location: "Lisboa",
    quote:
      "Ficámos muito satisfeitos com o trabalho da C.T.Ibéricos. A pérgola bioclimática transformou o nosso terraço num espaço que usamos o ano todo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carla Sousa",
    location: "Faro",
    quote:
      "O toldo que instalaram na nossa loja é de excelente qualidade. O atendimento foi impecável do início ao fim.",
    rating: 5,
  },
  {
    id: 3,
    name: "Miguel Santos",
    location: "Leiria",
    quote:
      "Profissionais de confiança. Fizeram a montagem rápida e limpa. Recomendo a todos os que precisem de soluções de sombreamento.",
    rating: 5,
  },
  {
    id: 4,
    name: "Teresa Oliveira",
    location: "Oeiras",
    quote:
      "Já é o segundo projeto que fazemos com a C.T.Ibéricos. A qualidade dos materiais e do serviço é sempre excelente.",
    rating: 5,
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-amber-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const PergolasEToldos = () => {
  const [userCity, setUserCity] = useState("Lisboa");

  useEffect(() => {
    fetch("https://ipapi.co/json/?lang=pt")
      .then((res) => res.json())
      .then((data) => {
        if (data.city) setUserCity(data.city);
      })
      .catch(() => {});
  }, []);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container-custom max-w-[90%] md:max-w-4xl mx-auto text-center">
          <h1 className="text-[36px] leading-[45px] font-semibold text-iberico-800 mb-4">
            Fabricamos e montamos todo tipo de toldos e Pérgolas Bioclimáticas.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-iberico-600 mb-6">
            Atendemos na sua cidade: <span className="text-red-600 font-semibold">{userCity}</span> / <span className="text-red-600 font-semibold">Margem Sul</span>.
          </h2>
          <p className="text-iberico-700 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Clica em Pedir orçamento, preencha o formulário abaixo e a nossa equipa
            vai entrar em contacto o mais breve possível.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-iberico-600 hover:bg-iberico-700 text-white px-10 py-4 text-lg font-medium rounded-full shadow-md"
          >
            Pedir orçamento
          </Button>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-iberico-800 mb-4">
            Quem somos nós
          </h2>
          <p className="text-iberico-700 text-lg leading-relaxed">
            Nós somos a CT Ibéricos, uma empresa que contribui no mercado Português
            desde há 40 anos. Desenvolvemos projetos de toldos, pérgolas bioclimáticas,
            cortinas de vidro e estores de rolo para clientes residenciais e comerciais.
            Com uma equipa experiente e dedicada, garantimos qualidade, durabilidade e
            um atendimento personalizado em cada projeto. A nossa missão é transformar
            espaços exteriores em áreas de conforto e bem-estar durante todo o ano.
          </p>
          <div className="border-b border-gray-200 mt-12" />
        </div>
      </section>

      {/* Formulário Section */}
      <section id="formulario" className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Testemunhos Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
            O que dizem os nossos clientes
          </h2>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4"
                >
                  <Card className="bg-gray-50 rounded-xl shadow-sm border-none h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <StarRating />
                      <blockquote className="text-gray-700 text-sm italic flex-grow mb-4">
                        "{t.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-gray-500 text-sm">{t.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0 mx-2" />
              <CarouselNext className="static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </section>

      <Footer />
      <EmailButton />
      <WhatsAppButton />
    </div>
  );
};

export default PergolasEToldos;
