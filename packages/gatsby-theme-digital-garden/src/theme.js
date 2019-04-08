const blue = '#3c58e8'

export default {
  colors: {
    blue,
    text: '#000',
    background: '#fff',
    link: blue,
    primary: blue,
    secondary: '#444',
    muted: '#888',
    highlight: 'tomato'
  },
  fonts: {
    body: 'system-ui, sans-serif'
  },
  lineHeights: {
    body: 1.5
  },
  styles: {
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    img: {
      maxWidth: '100%'
    },
    pre: {
      text: 'rebeccapurple',
      background: '#f6f3f9',
      overflowX: 'scroll',
      p: 2
    },
    code: {
      text: 'rebeccapurple',
      background: '#f6f3f9'
    }
  }
}
