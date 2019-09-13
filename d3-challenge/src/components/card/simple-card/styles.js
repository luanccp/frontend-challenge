import {
  createStyles
} from '@material-ui/core'

// import {theme} from '../../root'

export const styles = createStyles({
  card: {
    minWidth: 300,
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    padding: '6px 4px 6px',
    // backgroundColor: theme.dark.elementColor,
    // color: theme.dark.textColor,
    marginBottom: '52px'
  },

  title: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 600
  },

  content: {
    margin: '6px 16px 0',
    fontSize:12,
  },

  image: {
    objectFit: 'cover',
    width: 300,
    height:180
  },
})

