import { HeadingProps } from '.'

export const getSize = (size: HeadingProps['size']) => {
  switch (size) {
    case 'xxl':
      return 'text-[3.5rem]'
    case 'xl':
      return 'text-[2.5rem]'
    case 'lg':
      return 'text-[1.75rem]'
  }
}

export const getColor = (color?: HeadingProps['color']) => {
  switch (color) {
    case 'white':
      return 'text-white'
    case 'black':
      return 'text-black'
  }
}
