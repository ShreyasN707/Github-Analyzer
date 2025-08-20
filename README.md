# 🚀 GitHub Analyzer  

A **powerful yet simple GitHub profile analyzer** that lets you:  

- 🔍 **Fetch** detailed info about a single GitHub user  
- ⚔️ **Compare** two GitHub users **side by side** (repos, followers, stars, activity, etc.)  

Built with **Node.js + Express + EJS + Axios**, it’s perfect for developers who want **quick insights into GitHub accounts**.  

---

## ✨ Features  

| Feature | Description |
|---------|-------------|
| ✅ **Single User Lookup** | Get full details of any GitHub profile (bio, repos, followers, stars, etc.) |
| ✅ **User Comparison** | Compare two GitHub users side by side in a clean, intuitive UI |
| ⚡ **Fast & Lightweight** | Powered by **Node.js + Express** for speed and efficiency |
| 🎨 **Interactive UI** | Built with **EJS templating** for dynamic rendering |
| 👨‍💻 **Developer-Friendly** | Simple code structure and easy setup |

---

MODES:

### Single User Mode  

### Comparison Mode  


---

## ⚙️ Tech Stack  

- **Backend:** Node.js, Express.js, Axios  
- **Frontend:** EJS templating, CSS  
- **API:** GitHub REST API v3  

---

## 📂 Project Structure  

___________________________________________________________________

github-analyzer/
│── controllers/
│ ├── api.fetch.js # Fetch GitHub user data from API
│ ├── compare.js # Handles single user & comparison requests
│
│── routes/
│ └── gitroutes.js # Express GET & POST routes
│
│── views/
│ ├── index.ejs # Landing page (search input)
│ ├── result.ejs # Single user profile view
│ └── compared.ejs # Two-user comparison view
│
│── .gitignore # Ignored files (node_modules, .env, etc.)
│── .env # Environment variables (GitHub token, port, etc.)
│── package.json # Project metadata & scripts
│── server.js # Main server entry point
│── README.md # Project documentation

___________________________________________________________________


---

## 🚀 Getting Started  

### 🔑 Environment Variables  

Create a `.env` file in the root directory:  

```env
PORT=3000                # Server port (default: 3000)
GITHUB_TOKEN=your_token  # Optional: GitHub Personal Access Token to increase API rate limits


1️⃣ Clone the Repository
git clone https://github.com/ShreyasN707/Github-Analyzer.git
cd github-analyzer

2️⃣ Install Dependencies
npm install

3️⃣ Run the Project
npm run dev


Visit: http://localhost:3000 🎉


____________________________________________________________________


## 📌 Future Improvements  

- 📱 **Enhanced Mobile Responsiveness** – Optimized layout for phones, tablets, and smaller screens  
- 🔒 **API Caching** – Reduce API calls and improve performance  
- ✨ **UI Enhancements** – Cleaner, more intuitive and user-friendly interface  
- ⚡ **Performance Optimizations** – Faster load times and smoother interactions  
- ⚔️ **Advanced Comparison Modes** – Compare multiple users simultaneously or with custom metrics  
- 🌟 **Additional Features** – GitHub stats badges, contribution streaks, and personalized insights

____________________________________________________________________

## 🧑‍💻 Author  

**Shreyas N**  

- 🌐 GitHub: [@ShreyasN707](https://github.com/ShreyasN707)  
- 💼 LinkedIn: [Shreyas N](https://www.linkedin.com/in/shreyas-n-44717b332)  
- 📫 Contact: shreyasnaik81@gmail.com
