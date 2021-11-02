import React from 'react'
import ReactDOM from 'react-dom'
import data from '../data.json'
import App from './index.js'

describe('App', () => {

  describe('loading', () => {
    it('loads without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App data={data} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });  
  });

  describe('rendering', () => {
    const div = document.createElement('div');

    beforeEach(() => {
      ReactDOM.render(<App data={data} />, div);
    })

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(div);
    });
 
    it('renders the user account logo', () => {
      const heading = div.querySelector('.heading');
      const logo = heading.querySelector('img').getAttribute('src');
      expect(logo).toBe('user_icon.png');
    });

    it('renders the user account name', () => {
      const username = div.querySelector('.username');
      expect(username.textContent).toBe('avfcofficial');
    });

    it('renders the user account location', () => {
      const location = div.querySelector('.location');
      expect(location.textContent).toBe('Villa Park, England');
    });

    it('renders all the user comments', () => {
      const comments = div.querySelectorAll('.comment');
      expect(comments.length).toBe(22);
    });

    it('renders the footer section correctly', () => {
      const footer = div.querySelector('.footer');
      const likes = footer.querySelector('.likes');
      const time = footer.querySelector('.time');
      const icon = footer.querySelectorAll('.unliked');

      expect(likes.textContent).toBe('6244 likes');
      expect(time.textContent).toBe('3 years ago');
      expect(icon.length).toBe(1);
    });
  });
});
