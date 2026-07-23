/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Callsun 品牌色板 (基于 2026-07 客户原型图 + 2026-07-23 东家确认)
        // 主 CTA / 强调色 = 稍收敛的黄绿 (accent green，比原型荧光更沉稳)
        // 深色 hero / stats / footer = 略带暖调的深黑
        callsun: {
          DEFAULT: '#7CBE22',   // 主 CTA / 黄绿 (accent primary)
          lime: '#7CBE22',      // 别名，语义化
          limeHi: '#8FD32E',    // hover / 高亮
          limeLo: '#6AA51D',    // pressed / 暗调
          ink: '#0F0F0E',       // 主文字 / 深黑 (略暖)
          dark: '#0F0F0E',      // 深色 hero / stats 底 (与 ink 一致)
          panel: '#1A1A1A',     // 次深色卡片底
          mute: '#525252',      // 次要文字 (gray-600)
          muteLight: '#A3A3A3', // eyebrow / metadata (gray-400)
          line: '#E5E5E5',      // 分割线 (gray-200)
          lineDark: '#2A2A2A',  // 深色区块分割线
          bg: '#F7F7F7',        // 浅背景 (near-white gray)
          surface: '#FAFAFA',   // 卡片浅底
          tag:     '#1D4ED8',   // 角标蓝 (450W solar panel corner badge)
        },
        // 向后兼容 jinko-rebuild 组件的 jinko.* token (等重写完删)
        jinko: {
          DEFAULT: '#7CBE22',
          dark: '#0F0F0E',
          accent: '#7CBE22',
          ink: '#0F0F0E',
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
