import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout/basic';
import Routers from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>  
        <Routers/>
    </Layout>

  </React.StrictMode>
);
