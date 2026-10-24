<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep this single-page portfolio at the index route with local profile tabs; its sections are views of the same profile.
- Keep contact inquiries as explicit downloadable drafts until a real contact destination is supplied; never imply delivery without an actual sending service.
- Define visual styling and semantic palette tokens in the global stylesheet so all portfolio views share one design system.
- Keep the cover's wide banner and its phone-height composition as two images swapped by breakpoint: one wide crop cannot keep the subject's whole head in frame and leave the headline readable on narrow screens.
