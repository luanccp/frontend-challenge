import {
  createStyles
} from '@material-ui/core'

export const styles = theme => createStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid #D9D8DD',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '36px 24px 32px',
    backgroundColor:'red'
  },

  title: {
    marginTop: 36
  },

  content: {
    margin: '16px 0 0',
  },

  image: {
    objectFit: 'contain',
    width: 110,
    height: 80,
  },
})

