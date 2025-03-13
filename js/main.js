// Define route handlers
const routes = {
  '/': () => '<h1>Whassupdawg to Findthinger</h1><p>Yabba dabba do!</p>',
  '/search': () => '<h1>Search</h1><p>Find destinations here (coming soon).</p>',
  '/about': () => '<h1>About</h1><p>A vanilla JS road trip planner.</p>',
  '404': () => '<h1>404 - Not Found</h1><p>Oops, wrong turn!</p>'
};

// Router function to render content
function router() {
  const app = document.getElementById('app');
  const path = window.location.hash.slice(1) || '/'; // Get hash, default to '/'
  const content = routes[path] || routes['404']; // Match route or 404
  app.innerHTML = content();
}

// Listen for hash changes and initial load
window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);