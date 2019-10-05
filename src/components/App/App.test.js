import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App',() => {
  it('should update state when changeNews is called', () => {
    // setup 

    const wrapper = shallow(<App />);

    const mockArticle = {
      description: 'The web slinger',
      headline: 'Spider-Man ',
      id: 1,
      img: 'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
      url: 'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
    }
  

    // const expected = {
    //   news: mockArticle
    // }

    // execution

    wrapper.instance().changeNews(mockArticle);
    console.log(wrapper.state())

    // expectation

    expect(wrapper.state('news')).toEqual(mockArticle);
  });

})

