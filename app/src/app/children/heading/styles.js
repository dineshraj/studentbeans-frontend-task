const heading = {
  container: {
    display: 'flex',
    gap: '8px',
    paddingBottom: '16px',
    borderBottom: '1px rgb(240,240,240) solid',
    width: 'calc(100% - 20px)'
  },

  icon: {
    order: '1',
    height: '60px'
  },

  userInfo: {
    order: '2',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.2em'
  },

  username: {
    fontWeight: 'bold',
    margin: '0'
  },

  location: {
    margin: '0',
    color: 'rgb(30,30,30)'
  }
}

export default heading
