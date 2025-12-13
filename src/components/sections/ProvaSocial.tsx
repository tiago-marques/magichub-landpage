import { component$ } from '@builder.io/qwik';
import Section from '../Section';
import Testimonial from '../Testimonial';

export default component$(() => (
  <Section title="6. Prova social" id="prova-social">
    Pequenas lojas como a sua já estão usando a minhavitrineonline para entrar no digital de forma simples.
    <Testimonial quote={"Nunca imaginei ter um catálogo online tão rápido. O aumento nas vendas veio muito rápido também."} author="Loja parceira minhavitrineonline" />
  </Section>
));
