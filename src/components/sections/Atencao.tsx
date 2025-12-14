import { component$ } from '@builder.io/qwik';
import Section from '../Section';

export default component$(() => (
  <Section id="atencao" fullScreen>
    <div class="absolute inset-0 overflow-hidden opacity-35 pointer-events-none">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" class="text-[var(--accent)]"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g class="text-[var(--accent)]">
          <circle cx="20%" cy="30%" r="100" fill="currentColor" opacity="0.3"/>
          <circle cx="80%" cy="60%" r="150" fill="currentColor" opacity="0.3"/>
          <circle cx="50%" cy="80%" r="120" fill="currentColor" opacity="0.3"/>
          <rect x="10%" y="10%" width="80" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="3" opacity="0.4"/>
          <rect x="70%" y="20%" width="60" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="3" opacity="0.4"/>
          <path d="M 60% 40% L 65% 35% L 70% 40% L 65% 45% Z" fill="currentColor" opacity="0.3"/>
          <path d="M 30% 70% L 35% 65% L 40% 70% L 35% 75% Z" fill="currentColor" opacity="0.3"/>
        </g>
      </svg>
    </div>
    <div class="w-full text-center relative z-10">
      <h1 class="text-4xl sm:text-5xl font-extrabold animate-fade-in">Leve sua loja física para o online, <span class="badge text-4xl sm:text-5xl font-extrabold">sem complicação</span></h1>
      <p class="section-content mt-4 max-w-3xl mx-auto animate-fade-in-delay text-lg">
        Seus produtos aparecem no <span class="font-bold text-[var(--accent)]">Google</span>, no <span class="font-bold text-[var(--accent)]">WhatsApp</span> e em <span class="font-bold text-[var(--accent)]">parceiros de entrega</span>:<br/> 
        tudo <span class="font-bold">automaticamente</span> a partir das suas notas fiscais. 
        <br/><span class="italic underline">Zero cadastro manual.</span>
      </p>
    </div>
  </Section>
));
