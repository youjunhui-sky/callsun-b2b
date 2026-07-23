/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Callsun 品牌色板 (基于 2026-07 客户原型图)
        // 主 CTA / 强调色 = 荧光黄绿 (lime)
        // 深色 hero / stats / footer 底 = 近黑
        callsun: {
          DEFAULT: '#C6F600',   // 主 CTA / 荧光黄绿 (lime primary)
          lime: '#C6F600',      // 别名，语义化
          limeHi: '#D6FF33',    // hover / 高亮
          limeLo: '#A8D400',    // pressed / 暗调
          ink: '#0A0A0A',       // 主文字 / 深黑
          dark: '#111111',      // 深色 hero / stats 底
          panel: '#1A1A1A',     // 次深色卡片底
          mute: '#525252',      // 次要文字 (gray-600)
          muteLight: '#A3A3A3', // eyebrow / metadata (gray-400)
          line: '#E5E5E5',      // 分割线 (gray-200)
          lineDark: '#2A2A2A',  // 深色区块分割线
          bg: '#F7F7F7',        // 浅背景 (near-white gray)
          surface: '#FAFAFA',   // 卡片浅底
        },
        // 向后兼容 jinko-rebuild 组件的 jinko.* token (等重写完删)
        jinko: {
          DEFAULT: '#C6F600',
          dark: '#111111',
          accent: '#C6F600',
          ink: '#0A0A0A',
          mute: '#525252',
          line: '#E5E5E5',
          bg: '#F7F7F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      maxWidth: { content: '1200px', wide: '1440px' },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
        sharp: '2px',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)',
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
    },
  },
  plugins: [],
};
