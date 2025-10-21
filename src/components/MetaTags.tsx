import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      const title = document.querySelector('title');
      const description = document.querySelector('meta[name="description"]');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');

      if (location.pathname === '/pergolas-orcamento') {
        if (title) title.textContent = 'Quanto custa instalar uma pérgola bioclimática em Portugal | CTIbéricos';
        if (description) description.setAttribute('content', 'Descubra o preço médio das pérgolas bioclimáticas e peça um orçamento gratuito e personalizado com resposta em 15 a 20 minutos. CTIbéricos - especialistas em conforto exterior.');
        if (ogTitle) ogTitle.setAttribute('content', 'Quanto custa instalar uma pérgola bioclimática em Portugal | CTIbéricos');
        if (ogDescription) ogDescription.setAttribute('content', 'Descubra o preço médio das pérgolas bioclimáticas e peça um orçamento gratuito e personalizado com resposta em 15 a 20 minutos. CTIbéricos - especialistas em conforto exterior.');
      } else {
        if (title) title.textContent = 'C.T.Ibéricos - Toldos, Pérgolas, Cortinas de Vidro e Estores';
        if (description) description.setAttribute('content', 'C.T.Ibéricos - Especialistas em instalação de toldos, pérgolas bioclimáticas, cortinas de vidro e estores de rolo com mais de 40 anos de experiência.');
        if (ogTitle) ogTitle.setAttribute('content', 'C.T.Ibéricos - Toldos, Pérgolas, Cortinas de Vidro e Estores');
        if (ogDescription) ogDescription.setAttribute('content', 'Especialistas em instalação de toldos, pérgolas bioclimáticas, cortinas de vidro e estores de rolo com mais de 40 anos de experiência.');
      }
    };

    updateMetaTags();
  }, [location.pathname]);

  return null;
};

export default MetaTags;
