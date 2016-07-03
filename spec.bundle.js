import app from './src';

import mocks from 'angular-mocks';

const srcContext = require.context( './src', true, /\.spec\.js/ );

srcContext.keys().forEach( srcContext );