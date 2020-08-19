import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  });
  it('should be false', () => {
    const foo = true;
    expect(foo).toBe(false);
  })
})

describe('<CommentAdd /> interactions', () => {

  it('should change the state commentText and currentlength when the onChange function of the TextField is invoked', () => {
      wrapper.find(TextField).simulate('change',
          { target: { value: 'New Comment' } }
      );
      expect(wrapper.state('commentText')).toEqual('New Comment');
      expect(wrapper.state('currentLength')).toEqual('New Comment'.length);
  });
});
