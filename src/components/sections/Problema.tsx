import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="problema" fullScreen>
    <p class="lead">Você vende bem na loja, mas:</p>
    <ul class="list-disc pl-5 space-y-2 section-content">
      <li>Seus produtos não aparecem no Google</li>
      <li>Criar catálogo dá trabalho</li>
      <li>Falta tempo para cuidar do digital</li>
      <li>Plataformas parecem difíceis e caras</li>
    </ul>

    <p class="section-content">Enquanto isso, seus clientes estão procurando online.</p>
  </Section>
));
