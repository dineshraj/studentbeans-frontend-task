export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    paddingTop: '40px',
    backgroundColor: 'rgb(250, 250, 250)'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start',
    paddingTop: '20px',
    paddingLeft: '20px',
    boxSizing: 'border-box'
  },

  content: {
    height: '310px',
    overflow: 'scroll'
  },

  heading: {
    display: 'flex',
    gap: '8px',
    paddingBottom: '16px',
    borderBottom: '1px grey solid',
    icon: {
      order: '1',
      height: '60px'
      // flex: ' 0 0 20%'
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
}
