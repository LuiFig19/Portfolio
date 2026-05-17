import { footer, site } from "@/content/content";
import { MonoLabel } from "./MonoLabel";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-10 pt-10 md:px-12">
      <div className="mx-auto flex w-full max-w-page flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            <span className="font-display text-lg text-fg">{site.name}</span>
          </div>
          <p className="mt-2 max-w-md text-sm text-fg-tertiary">{footer.note}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <MonoLabel variant="muted">{footer.location.toUpperCase()}</MonoLabel>
          <MonoLabel variant="muted" bracket={false}>
            {footer.copy}
          </MonoLabel>
          <MonoLabel variant="muted" bracket={false}>
            {footer.version}
          </MonoLabel>
        </div>
      </div>
    </footer>
  );
}
