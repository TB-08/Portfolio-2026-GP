function BrowserChrome({ title }) {
  return (
    <div className="flex h-11 items-center gap-3 border-b border-white/10 px-4">
      <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#5D85DB]/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
      <span className="ml-2 min-w-0 flex-1 truncate rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-[0.62rem] uppercase text-[#C8D4EA]/72">
        {title}
      </span>
    </div>
  );
}

function MockupFrame({ variant = "browser", title = "preview", children, className = "" }) {
  if (variant === "phone") {
    return (
      <div className={`mockup-phone ${className}`}>
        <span className="mockup-phone-notch" />
        <div className="mockup-phone-screen">{children}</div>
      </div>
    );
  }

  if (variant === "tablet") {
    return (
      <div className={`mockup-tablet ${className}`}>
        <div className="mockup-tablet-screen">{children}</div>
      </div>
    );
  }

  return (
    <div className={`mockup-browser ${className}`}>
      <BrowserChrome title={title} />
      <div className="mockup-browser-screen">{children}</div>
    </div>
  );
}

export default MockupFrame;
