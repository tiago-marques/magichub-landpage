import { component$ } from '@builder.io/qwik';

export default component$(({ quote, author }: any) => {
  return (
    <div class="card flex gap-4 items-start">
      <img src="/src/assets/avatar.svg" alt="avatar" class="w-14 h-14 rounded-full" />
      <div>
        <p class="text-slate-700">“{quote}”</p>
        <p class="mt-2 text-sm text-slate-500">— {author}</p>
      </div>
    </div>
  );
});
