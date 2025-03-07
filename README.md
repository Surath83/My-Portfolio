<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>My Portfolio (MERN Stack)</h1>
<p>This is a full-stack portfolio project built using the <strong>MERN stack</strong>: <strong>MongoDB, Express, React (Vite), and Node.js</strong>. It showcases my projects and allows users to get in touch or subscribe to my newsletter.</p>

<hr>

<h2>Project Structure</h2>
<pre>
<code>
my-portfolio/
│
├── client/                   # React Frontend
│   ├── public/                # Public assets (e.g., index.html, icons)
│   └── src/                   
│       ├── components/        # Reusable Components
│       ├── App.jsx            # Main App Component
│       └── main.jsx           # Vite Entry Point
│
├── server/                    # Node.js Backend
│   ├── models/                # Mongoose Schemas
│   ├── routes/                # API Routes
│   └── index.js               # Express App Entry Point
│
└── README.md                  # Project Documentation
</code>
</pre>

<hr>

<h2>Tech Stack</h2>

<h3>Frontend:</h3>
<ul>
    <li><strong>React (Vite)</strong>: Fast and optimized development with React 16.</li>
    <li><strong>Axios</strong>: For making HTTP requests to the backend.</li>
    <li><strong>CSS Modules</strong>: Scoped and maintainable styling.</li>
</ul>

<h3>Backend:</h3>
<ul>
    <li><strong>Node.js</strong>: JavaScript runtime for server-side.</li>
    <li><strong>Express.js</strong>: Fast, unopinionated web framework.</li>
    <li><strong>Mongoose</strong>: ODM for MongoDB.</li>
</ul>

<h3>Database:</h3>
<ul>
    <li><strong>MongoDB Atlas</strong>: Cloud-hosted NoSQL database.</li>
</ul>

<hr>

<h2>Features</h2>
<ul>
    <li><strong>Dynamic Portfolio Showcase</strong>: Display projects and experiences.</li>
    <li><strong>Responsive Design</strong>: Works well on all devices.</li>
    <li><strong>Form Validation</strong>: Input validation with user-friendly messages.</li>
</ul>

<hr>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li><strong>Node.js</strong> and <strong>npm</strong> installed</li>
    <li><strong>MongoDB Atlas</strong> account and cluster setup</li>
</ul>

<h3>Installation</h3>

<ol>
    <li>
        <strong>Clone the Repository</strong>
        <pre><code>
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
        </code></pre>
    </li>

    <li>
        <strong>Install Dependencies</strong>
        <pre><code>
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
        </code></pre>
    </li>

    <li>
        <strong>Environment Variables</strong>
        <p>Create a <code>.env</code> file in the <strong>server</strong> directory with the following:</p>
        <pre><code>
MONGO_URI=your_mongo_db_connection_string
PORT=5000
        </code></pre>
        <p>Replace <code>your_mongo_db_connection_string</code> with your MongoDB Atlas connection URI.</p>
    </li>
</ol>

<hr>

<h2>Running the App</h2>

<h3>Development Mode</h3>
<pre><code>
# Start the client
cd client
npm run dev

# Start the server
cd ../server
nodemon index.js
</code></pre>

<h3>Production Mode</h3>
<pre><code>
# Build React app
cd client
npm run build

# Start server
cd ../server
node index.js
</code></pre>

<p>The frontend should be running on <code>http://localhost:5173</code> and the backend on <code>http://localhost:5000</code>.</p>

<hr>

<h2>API Endpoints</h2>

<h3>Contact Form</h3>
<ul>
    <li><strong>POST</strong> <code>/api/contact</code> - Stores contact form submissions.</li>
</ul>

<h3>Newsletter Subscription</h3>
<ul>
    <li><strong>POST</strong> <code>/api/newsletter</code> - Stores newsletter subscriptions.</li>
</ul>

<hr>

<h2>Folder Structure Explained</h2>

<h3>Client Side (React + Vite)</h3>
<ul>
    <li><code>components/</code>: Reusable React components.</li>
    <li><code>App.jsx</code>: Main component with routing and layout.</li>
    <li><code>main.jsx</code>: Vite entry point.</li>
</ul>

<h3>Server Side (Node.js + Express)</h3>
<ul>
    <li><code>models/</code>: MongoDB schemas using Mongoose.</li>
    <li><code>routes/</code>: API routes for handling form submissions.</li>
    <li><code>index.js</code>: Express app entry point.</li>
</ul>

<hr>

<h2>Deployment</h2>

<ol>
    <li><strong>Frontend:</strong> Host on <strong>Vercel</strong> or <strong>Netlify</strong>.</li>
    <li><strong>Backend:</strong> Host on <strong>Render</strong>, <strong>Railway</strong>, or <strong>Vercel</strong> (Serverless Functions).</li>
    <li><strong>Database:</strong> Use <strong>MongoDB Atlas</strong> for cloud-hosted NoSQL database.</li>
</ol>

<hr>

<h2>Scripts</h2>

<h3>Client Scripts</h3>
<pre><code>
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
</code></pre>

<h3>Server Scripts</h3>
<pre><code>
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
</code></pre>

<hr>

<h2>Contributing</h2>
<p>Feel free to submit issues and pull requests for new features or fixes.</p>

<hr>

<h2>License</h2>
<p>This project is licensed under the <strong>MIT License</strong>.</p>

<hr>

<h2>Contact</h2>
<ul>
    <li><strong>Name:</strong> Surath Chowdhury</li>
    <li><strong>Email:</strong> surath172003@gmail.com</li>
    <li><strong>LinkedIn:</strong> surath chowdhury</li>
</ul>

</body>
</html>
