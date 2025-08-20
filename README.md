# 🚀 GitHub Analyzer  

A simple yet powerful **GitHub profile analyzer** that lets you:  
- 🔍 Fetch and display detailed information about a single GitHub user.  
- ⚔️ Compare two GitHub users **side by side** (repos, followers, stars, activity, etc.).  

Built with **Node.js + Express + EJS + Axios**, this project is perfect for developers who want quick insights into GitHub accounts.  

---

## ✨ Features  

✅ **Single User Lookup** – Get details of any GitHub profile (bio, repos, followers, stars, etc.)  
✅ **User Comparison** – Compare two GitHub users **side by side** in a clean UI  
✅ **Fast & Lightweight** – Powered by **Node.js + Express**  
✅ **Interactive UI** – Built with **EJS templating**  
✅ **Developer-Friendly** – Easy setup & simple code structure  

---

### 🔍 Single User Mode  

### ⚔️ Comparison Mode  

---

## ⚙️ Tech Stack  

- **Backend**: Node.js, Express.js,Axios  
- **Frontend**: EJS templating, CSS  
- **API**: GitHub REST API v3  

---

📂 Project Structure:

github-analyzer/
│── controllers/
│   ├── api.fetch.js     # Fetch GitHub user data from API
│   ├── compare.js       # Separates incomming request for single user or comparing users
│
│── routes/
│   └── gitroutes.js     # Express routes for GET & POST requests
│── views/
│   ├── index.ejs        # Landing page (search input)
│   ├── result.ejs       # Output page for single user data
│   └── compared.ejs     # Output page for two-user comparison
│
│── .gitignore           # Ignored files (node_modules, .env, etc.)
│── .env                 # Environment variables (GitHub token, port, etc.)
│── package.json         # Project metadata & scripts
│── server.js            # Main server entry point
│── README.md            # Project documentation

---------------------------------------------------------------------------

## 🚀 Getting Started  

### 🔑 Environment Variables  

Create a `.env` file in the root directory and add the following:  

```env
PORT=3000                # Port number for the server (default: 3000)
GITHUB_TOKEN=your_token  # (Optional) GitHub Personal Access Token to increase API rate limits


### 1️⃣ Clone the repo  
```bash
git clone https://github.com/ShreyasN707/Github-Analyzer.git
cd github-analyzer

### 2️⃣ Install dependencies
npm install

### 3️⃣ Run the project
npm run dev

Project will start on : http://localhost:3000/  🎉

--------------------------------------------------------

📌 Future Improvements:

📊 Add charts for repositories & contributions

📱 Improve mobile responsiveness

🔒 Add caching to reduce API calls

---------------------------------------------------------

## 🧑‍💻 Author  

**Shreyas N**  

- 🌐 GitHub: [@ShreyasN707](https://github.com/ShreyasN707)  
- 💼 LinkedIn: [Shreyas N](https://www.linkedin.com/in/shreyas-n-44717b332)  
