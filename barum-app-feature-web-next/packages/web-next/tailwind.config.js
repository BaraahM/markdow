module.exports = {
    // ... existing config
    content: [
      // ... existing content paths
      './components/editor/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        //  any custom theme extensions from the editor
      },
    },
    plugins: [
      //  any plugins needed by the editor
      require('tailwind-scrollbar-hide'),
    ],
  };