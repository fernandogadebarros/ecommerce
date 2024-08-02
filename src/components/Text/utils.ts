import { TextProps } from '.'

export const getColor = (color?: TextProps['color']) => {
  switch (color) {
    case 'white':
      return 'text-white/25'
    case 'gray':
      return 'text-black/25'
  }
}

export const getWeight = (weight?: TextProps['weight']) => {
  switch (weight) {
    case 'regular':
      return 'font-regular'
    case 'medium':
      return 'font-medium'
    case 'bold':
      return 'font-bold'
  }
}
