import { component$ } from '@builder.io/qwik';

export default component$(({ quote, author, avatar }: any) => {
  return (
    <div class="card flex gap-4 items-start">
      <img 
        src={avatar || "https://pravatar.cc/150"} 
        class="w-14 h-14 rounded-full object-cover flex-shrink-0 shadow-md" 
        alt={author} 
        width="56" 
        height="56"
        loading="lazy"
        decoding="async"
      />
      <div>
        <p class="text-[var(--text)]">“{quote}”</p>
        <p class="mt-2 text-sm text-[var(--muted)]">— {author}</p>
      </div>
    </div>
  );
});
