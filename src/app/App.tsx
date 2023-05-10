import React from 'react';

import './index.scss';
import '../shared/assets/fonts/fonts.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css'

import { UiKit } from 'pages/UiKit';
import { MainPage } from 'pages/Main';

export const App = () => {

    return (
        <div className='app'>
            {/* <UiKit/> */}
            <MainPage/>
        </div>
    );
};
export default App;
