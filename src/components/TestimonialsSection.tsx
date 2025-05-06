
import { useState, useEffect, useRef } from 'react';
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
    name: "Ana Martins",
    title: "Cascais",
    quote: "Excelente atendimento e profissionalismo. A nossa pérgola bioclimática transformou completamente a nossa área exterior, permitindo-nos usufruir do espaço durante todo o ano.",
    rating: 5
  },
  {
    id: 2,
    name: "José Silva",
    title: "Lisboa",
    quote: "Toda a experiência, desde o atendimento inicial ao serviço pós-venda, foi impecável. Os toldos são de excelente qualidade e o resultado superou todas as expectativas.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Santos",
    title: "Oeiras",
    quote: "As cortinas de vidro instaladas pela C.T.Ibéricos são fantásticas - protegem a nossa varanda do vento e chuva sem comprometer a vista. Serviço de instalação rápido e limpo.",
    rating: 5
  },
  {
    id: 4,
    name: "Pedro Costa",
    title: "Sintra",
    quote: "Já é a segunda vez que recorremos à C.T.Ibéricos, desta vez para instalar estores de rolo. Mais uma vez, um serviço profissional e produtos de alta qualidade.",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-iberico-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-semibold mb-4 text-iberico-800 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            O Que Dizem os Nossos Clientes
          </h2>
          <div 
            className={`h-1 w-20 bg-iberico-500 mb-6 mx-auto transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          ></div>
          <p 
            className={`text-iberico-700 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A satisfação dos nossos clientes é a nossa melhor recompensa. Descubra o que dizem sobre os nossos serviços e produtos.
          </p>
        </div>

        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-none shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>
                      <blockquote className="text-iberico-700 mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="font-medium text-iberico-800">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-iberico-600">
                          {testimonial.title}
                        </div>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
