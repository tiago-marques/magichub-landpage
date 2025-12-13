import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section title="3. Apresente a solução" id="solucao">
    <p class="lead">A minhavitrineonline cria seu catálogo digital automaticamente a partir das suas notas fiscais (NFe).</p>

    <ul class="list-disc pl-5 space-y-2 section-content">
      <li>Você continua vendendo normalmente na loja física</li>
      <li>A minhavitrineonline cuida do digital para você</li>
    </ul>
  </Section>
));
