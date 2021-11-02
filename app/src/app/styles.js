const main = {
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
    paddingBottom: '40px',
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

  post: {
    width: '80%'
  }

}

export default main;
