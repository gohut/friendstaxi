export function HeroSection() {
  return (
    <section id="home" className="w-full overflow-hidden bg-[#2a2a8c]">
      <iframe
        id="hero-frame"
        src="/friends-track-hero.html?v=17"
        title="Friends Track Karur taxi service"
        className="block h-[calc(100svh-9rem)] min-h-[600px] max-h-[900px] w-full border-0"
        loading="eager"
        onLoad={(event) => {
          event.currentTarget.contentWindow?.postMessage(
            { type: "friends-track-request-ready" },
            window.location.origin,
          );
        }}
      />
    </section>
  );
}
