function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" />

    </div>
  );
}

export default AnimatedBackground;