import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="cta" fullScreen>
    <div class="text-center">
      <a href="mailto:contato@minhavitrineonline.com.br?subject=Agendar%20demo%20minhavitrineonline" class="btn-primary">Agendar demo grátis</a>
    </div>
  </Section>
));
