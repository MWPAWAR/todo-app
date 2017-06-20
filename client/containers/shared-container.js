import React from 'react';
import { Provider } from 'react-redux';

export default Container => {
  const Root = props => {
    const { store, ...remaining } = props;
    return (
      <Provider store={store}>
        <Container {...remaining} />
      <Provider>
    )
  }

  return Root;
}
