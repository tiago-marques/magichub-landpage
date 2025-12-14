import { component$ } from '@builder.io/qwik';
import AvatarSvg from '~/assets/avatar.svg?jsx';

export default component$(({ quote, author }: any) => {
  return (
    <div class="card flex gap-4 items-start">
      <AvatarSvg class="w-14 h-14 rounded-full" alt="avatar" />
      <div>
        <p class="text-[var(--text)]">“{quote}”</p>
        <p class="mt-2 text-sm text-[var(--muted)]">— {author}</p>
      </div>
    </div>
  );
});
