export default function PageWrapper({ children }) {

  /**
   * PageWrapper Component
   * ----------------------
   * Global layout wrapper responsible for:
   * - Centering the entire app content
   * - Applying background visuals (gradient, blobs, texture)
   * - Providing a consistent "card layout" container
   *
   * Usage:
   * Wraps full pages or major sections of the application.
   */

  return (
    <div className="
      relative min-h-screen

      /* CENTER CONTENT */
      flex items-center justify-center

      /* OUTER SPACING */
      p-4

      /* PREVENT OVERFLOW FROM DECORATIVE ELEMENTS */
      overflow-hidden

      /* BACKGROUND GRADIENT */
      bg-linear-to-br from-white via-blue-50 to-blue-100
    ">

  

      {/* TOP-LEFT BLOB */}
      <div className="
        absolute w-125 h-125
        bg-blue-500/20
        rounded-full blur-[120px]
        -top-37.5 -left-37.5

        /* SUBTLE ANIMATION */
        animate-pulse
      "></div>

      {/* BOTTOM-RIGHT BLOB */}
      <div className="
        absolute w-100 h-100
        bg-blue-300/20
        rounded-full blur-[120px]
        -bottom-30 -right-30

        /* SUBTLE ANIMATION */
        animate-pulse
      "></div>

      {/* 🔥 GRID TEXTURE (SUBTLE) */}
   
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)]
        bg-size-[24px_24px]
      "></div>

      {/* 🔥 MAIN CARD */}
    
      <div className="
        relative z-10

        /* WIDTH CONTROL */
        w-full max-w-400
        
        /* VISUAL STYLE */
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        overflow-hidden

        /* LAYOUT */
        flex flex-col

        /* HEIGHT */
        min-h-[90vh]
      ">
        {children}
      </div>

    </div>
  );
}