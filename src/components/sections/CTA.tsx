import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section title="10. Chame pra ação" id="cta">
    <div class="text-center">
      <a href="mailto:contato@MinhaVitrineOnline.com?subject=Agendar%20demo%20MinhaVitrineOnline" class="btn-primary">Agendar demo grátis</a>
    </div>
  </Section>
));
