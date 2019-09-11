import {
  createStyles
} from '@material-ui/core'

import {theme} from '../../root'

export const styles = createStyles({
  card: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '36px 24px 32px',
    backgroundColor: theme.dark.elementColor,
    color: theme.dark.textColor
  },

  title: {
    marginTop: 36
  },

  content: {
    margin: '16px 0 0',
    textAlign:'left'
  },

  image: {
    objectFit: 'contain',
    width: 110,
    height: 80,
  },
})

