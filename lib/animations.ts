export const defaultPageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  
  export const defaultTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };
  
  export const customAnimations: Record<string, any> = {
    // Define specific animations for particular routes
    "/aboutus": {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    },
    "/blog": {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    // Add more routes as needed
  };
  