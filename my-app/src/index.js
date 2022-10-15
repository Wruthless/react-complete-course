/**
 * The `index.js` file is the first file that is ran when you 
 * visit the application.
 */

import ReactDOM from 'react-dom/client';

/**
 * Inject `index.css`
 */
import './index.css';

/**
 * `App` is a function defined in 'app.js'
 */
import App from './App';

/**
 * Create the main hook of the user interface. It tells react where
 * this react application should be placed in the web page that is loaded.
 * 
 * This element is located in ../public/index.html
 *     <div id="root"></div>
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Call the render method on the `root` object.
 * App is a component that is rendered in place of the `root` element/div.
 */
root.render(<App />);
