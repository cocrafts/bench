import React from 'react';
import { createRoot } from 'react-dom/client';

import { configure } from './src/utils/lib';
import App from './src';

const container = document.getElementById('root');
const root = createRoot(container);
configure();

root.render(<App />);
