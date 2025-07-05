declare module 'aos' {
    interface AosOptions {
      duration?: number;
      offset?: number;
      delay?: number;
      once?: boolean;
      easing?: string;
      anchorPlacement?: string;
    }
  
    const AOS: {
      init: (options?: AosOptions) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
  
    export default AOS;
  }
  