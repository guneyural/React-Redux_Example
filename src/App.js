import React, {Component} from 'react';
import Post from './Components/Post';
import { Provider } from 'react-redux';
import store from './Redux/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Post />
                </div>
            </Provider>
        );
    }
}

export default App;