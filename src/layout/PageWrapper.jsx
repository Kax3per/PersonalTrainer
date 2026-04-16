export default function PageWrapper({ children }) {
  return (
    <div className="
      relative min-h-screen
      flex items-center justify-center
      p-4
      overflow-hidden
      bg-gradient-to-br from-white via-blue-50 to-blue-100
    ">

      {/* 🔥 BACKGROUND BLOBS */}
      <div className="
        absolute w-[500px] h-[500px]
        bg-blue-500/20
        rounded-full blur-[120px]
        top-[-150px] left-[-150px]
        animate-pulse
      "></div>

      <div className="
        absolute w-[400px] h-[400px]
        bg-blue-300/20
        rounded-full blur-[120px]
        bottom-[-120px] right-[-120px]
        animate-pulse
      "></div>

      {/* 🔥 GRID TEXTURE (SUBTLE) */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)]
        [background-size:24px_24px]
      "></div>

      {/* 🔥 MAIN CARD */}
      <div className="
        relative z-10
        w-full max-w-[1600px]
        
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        overflow-hidden
        flex flex-col
        min-h-[90vh]
      ">
        {children}
      </div>

    </div>
  );
}