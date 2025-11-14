import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
];

export const OrganicVideoLoop = ({ currentVideoIndex }: { currentVideoIndex: number }) => {

  // Four distinct organic shapes for each video - fitted to 580x620 container
  const organicShapes = [
    // Shape 1 - Curved Frame (portrait oriented with uneven smooth borders)
    "M 150,40 C 220,25 320,30 400,50 C 460,65 510,100 530,150 C 545,210 550,280 545,350 C 540,420 525,480 485,520 C 445,555 385,570 310,565 C 235,560 170,545 130,515 C 90,485 65,445 55,390 C 45,330 50,260 65,195 C 80,130 110,85 135,60 C 145,48 148,42 150,40 Z",
    
    // Shape 2 - Pear/Teardrop (wider at bottom, narrowing toward top)
    "M 290,35 C 335,38 375,50 405,75 C 440,105 460,150 470,200 C 480,255 485,320 480,385 C 475,450 460,505 425,540 C 385,580 330,600 265,595 C 200,590 145,570 110,535 C 75,500 55,450 50,390 C 45,330 50,265 70,205 C 90,145 125,95 165,65 C 205,35 245,32 290,35 Z",
    
    // Shape 3 - Oval (soft rounded shape)
    "M 290,50 C 360,52 420,70 460,110 C 500,150 520,210 525,280 C 530,350 520,420 485,470 C 450,520 390,550 310,555 C 230,560 160,540 115,495 C 70,450 50,385 55,310 C 60,235 85,170 130,125 C 175,80 230,48 290,50 Z",
    
    // Shape 4 - Cloud (rounded, puffy, horizontal orientation)
    "M 140,280 C 145,230 170,190 210,165 C 250,140 300,135 350,145 C 395,153 435,175 465,210 C 490,240 505,280 512,325 C 518,370 515,415 500,450 C 485,485 455,510 415,525 C 370,542 315,545 265,538 C 215,531 175,515 150,485 C 125,455 110,415 108,370 C 106,330 115,305 125,285 C 132,270 137,282 140,280 Z"
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Organic glass container with soft edges */}
      <div className="relative w-full max-w-[580px] aspect-[580/620]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              maskImage: `url(#organic-mask-${currentVideoIndex})`,
              WebkitMaskImage: `url(#organic-mask-${currentVideoIndex})`,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          >
            {/* Video layer - black and white */}
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: "grayscale(100%) contrast(1.15) brightness(0.8)",
                }}
                src={videos[currentVideoIndex]}
              />
            </div>

            {/* Heavy grain texture - visible and tactile */}
            <div 
              className="absolute inset-0 opacity-50 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "180px 180px",
              }}
            />

            {/* Secondary noise layer for depth */}
            <div 
              className="absolute inset-0 opacity-35 pointer-events-none mix-blend-soft-light"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "300px 300px",
              }}
            />

            {/* Frosted glass layer with reduced blur */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(6px) saturate(120%)",
                WebkitBackdropFilter: "blur(6px) saturate(120%)",
              }}
            />

            {/* Glass reflection and highlights */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.15) 0%, transparent 40%, rgba(255, 255, 255, 0.08) 100%)",
              }}
            />

            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 80px rgba(255, 255, 255, 0.04)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft ambient glow beneath */}
        <div 
          className="absolute inset-0 -z-10 blur-[60px] opacity-15"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* SVG masks for organic shapes with soft edges - one for each video */}
        <svg width="0" height="0" className="absolute" viewBox="0 0 580 620">
          <defs>
            <filter id="soft-edge">
              <feGaussianBlur stdDeviation="4" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.4 0.8 1" />
              </feComponentTransfer>
            </filter>
            
            {organicShapes.map((shapePath, index) => (
              <mask key={index} id={`organic-mask-${index}`}>
                <rect width="100%" height="100%" fill="black" />
                <path
                  d={shapePath}
                  fill="white"
                  filter="url(#soft-edge)"
                />
              </mask>
            ))}
          </defs>
        </svg>
      </div>
    </div>
  );
};
