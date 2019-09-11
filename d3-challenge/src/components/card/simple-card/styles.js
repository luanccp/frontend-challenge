import {
  createStyles
} from '@material-ui/core'

import {theme} from '../../root'

export const styles = createStyles({
  card: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    padding: '6px 4px 6px',
    backgroundColor: theme.dark.elementColor,
    color: theme.dark.textColor
  },

  title: {
    marginTop: 36,
    fontSize: 22,
    fontWeight: 600
  },

  content: {
    margin: '6px 16px 0',
    fontSize:12,
  },

  image: {
    objectFit: 'contain',
    width: 110,
    height: 80,
  },
})

