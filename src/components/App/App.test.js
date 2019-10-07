import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App',() => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should update state when changeNews is called', () => {
    const mockArticle = {
      description: 'The web slinger',
      headline: 'Spider-Man ',
      id: 1,
      img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
      url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
    }

    expect(wrapper.state('news')).toEqual('');
    wrapper.instance().changeNews(mockArticle);

    expect(wrapper.state('news')).toEqual(mockArticle);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

})

