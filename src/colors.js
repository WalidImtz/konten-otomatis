// src/colors.js

// Gradien tidak digunakan untuk tema ini, tapi tetap bisa disimpan untuk fleksibilitas
export const gradientBgBase = 'bg-linear-to-tr'
export const gradientBgPrimary = `${gradientBgBase} from-[#223381] via-[#111143] to-[#223381]`

export const gradientBgPurplePink = gradientBgPrimary


// Warna dasar tema
export const colorsBgLight = {
  base: 'bg-background text-text',
  surface: 'bg-surface text-text',
  contrast: 'bg-primary text-white',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-black',
  info: 'bg-blue-500 text-white',
}

export const colorsText = {
  base: 'text-text',
  contrast: 'text-primary',
  muted: 'text-gray-300',
  white: 'text-white',
}

export const colorsOutline = {
  contrast: [colorsText.contrast, 'border-primary'],
  base: [colorsText.base, 'border-surface'],
}

export const getButtonColor = (color, isOutlined, hasHover, isActive = false) => {
  const colors = {
    bg: {
      primary: 'bg-primary text-white',
      surface: 'bg-surface text-text',
      base: 'bg-background text-text',
    },
    hover: {
      primary: 'hover:bg-[#ff9b3a]',
      surface: 'hover:bg-[#2a44a0]',
      base: 'hover:bg-[#191966]',
    },
    active: {
      primary: 'active:bg-[#d56d0f]',
      surface: 'active:bg-[#1c2a6d]',
      base: 'active:bg-[#0e0e3a]',
    },
  }

  const base = [colors.bg[color] || colors.bg.primary]
  if (hasHover) base.push(colors.hover[color] || colors.hover.primary)
  if (isActive) base.push(colors.active[color] || colors.active.primary)
  if (isOutlined) base.push('border border-primary text-primary bg-transparent')

  return base
}
