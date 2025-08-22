# 🚀 GitHub Analyzer  

A **powerful yet simple GitHub profile analyzer** that lets you:  

- 🔍 **Fetch** detailed info about a single GitHub user  
- ⚔️ **Compare** two GitHub users **side by side** (repos, followers, stars, activity, etc.)  

Built with **Node.js + Express + EJS + Axios + node-cache**, it’s perfect for developers who want **quick insights into GitHub accounts**.  

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

-------------------------------------------------------------------------------
## 🗂 Project Structure

github-analyzer/
├── controllers/
│   ├── Apicaching.js       # Caches API responses to reduce requests
│   ├── api.fetch.js        # Fetch GitHub user data from API
│   └── compare.js          # Handles single user & comparison requests
│
├── middleware/
│   └── recordlogging.js    # Logs user requests for analytics and debugging
│
├── routes/
│   └── gitroutes.js        # Express GET & POST routes
│
├── views/
│   ├── index.ejs           # Landing page (search input)
│   ├── result.ejs          # Single user profile view
│   └── compared.ejs        # Two-user comparison view
│
├── .gitignore              # Ignored files (node_modules, .env, etc.)
├── .env                    # Environment variables (GitHub token, port, etc.)
├── package.json            # Project metadata & scripts
├── server.js               # Main server entry point
└── README.md               # Project documentation

------------------------------------------------------------------------------------

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


Visit: http://localhost:5000 🎉


____________________________________________________________________


## 📌 Future Improvements  

- 📱 **Enhanced Mobile Responsiveness** – Fully optimized layout for phones, tablets, and smaller screens  
- ✨ **UI & UX Enhancements** – Cleaner, more intuitive, and highly user-friendly interface  
- ⚡ **Performance Optimizations** – Faster load times, smoother interactions, and efficient API handling  
- 🤖 **AI Assistant Integration** – Personalized AI guidance to help users outperform others in comparison mode, with actionable tips and insights  
- ⚔️ **Advanced Comparison Modes** – Compare multiple users simultaneously, use custom metrics, and deeper analytics for better evaluation  
- 🌟 **Extended Data Fetching & Display** – More detailed GitHub stats, contribution streaks, repository insights, and visually engaging dashboards  


____________________________________________________________________

## 🧑‍💻 Author  

**Shreyas N**  

- 🌐 GitHub: [@ShreyasN707](https://github.com/ShreyasN707)  
- 💼 LinkedIn: [Shreyas N](https://www.linkedin.com/in/shreyas-n-44717b332)  
- 📫 Contact: shreyasnaik81@gmail.com
