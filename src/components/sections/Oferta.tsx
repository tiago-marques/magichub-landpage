import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section title="7. Faça a oferta" id="oferta">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 class="text-xl font-semibold">Veja na prática como a minhavitrineonline funciona.</h3>
        <p class="section-content">Agende uma demonstração gratuita, sem compromisso, e descubra como sua loja pode aparecer no digital em poucos minutos.</p>
      </div>
      <a href="mailto:contato@minhavitrineonline.com?subject=Quero%20ser%20early%20adopter" class="btn-primary">Quero o desconto</a>
    </div>
  </Section>
));
