module.exports = {
  content: ['./index.html', './components/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: [
          '0.25rem',
          '0.35rem'
        ],
        sm: [
          '0.35rem',
          '0.45rem'
        ],
        base: [
          '0.42rem',
          '0.52rem'
        ],
        lg: [
          '0.55rem',
          '0.65rem'
        ],
        xl: [
          '0.65rem',
          '0.75rem'
        ]
      },
      boxShadow: {
        'l-white': '-10px 0 10px white',
        'l-zinc': '-10px 0 10px #18181b'
      },
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      },
      colors: {
        // main: '#f44c58',
        'success-100': '#F2F9EC',
        'success-200': '#E4F2DB',
        'success-300': '#7EC050',
        'warn-100': '#FCF6ED',
        'warn-200': '#F8ECDA',
        'warn-300': '#DCA550',
        'error-100': '#ED7456',
        'error-200': '#f3471c',
        'error-300': '#ffffff'
      },
      variants:{
        scrollbar: ['dark']
      }
    },
  },
  plugins: [],
}
