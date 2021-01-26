import './App.css';

import React from 'react';
import { RecoilRoot } from 'recoil';

import { CharacterCounter } from './CharacterCounter';

interface AppProps {}

export function App({}: AppProps) {
    return (
        <RecoilRoot>
            CharacterCounter: <CharacterCounter />
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload!
                    </p>
                </header>
            </div>
        </RecoilRoot>
    );
}
