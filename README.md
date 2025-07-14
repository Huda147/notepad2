# 📝 Real-Time Collaborative Notepad

A lightweight, real-time collaborative notepad that runs directly in the browser using Firebase and is hosted freely on GitHub Pages.

---

## 🚀 Features

- ✏️ **Real-Time Syncing**: Collaborate across devices instantly using Firebase Realtime Database.
- 🔢 **Multiple Note Support**: Switch between different note IDs (e.g., note1, note2, etc.).
- 🌙 **Dark Mode Toggle**: Easily switch between light and dark themes.
- 💾 **Export to `.txt`**: Download your notes as plain text files.
- 🧑‍💻 **No Login Required**: Access and edit notes without authentication.

---

## 🛠️ Tech Stack

| Technology      | Purpose                                      |
|-----------------|----------------------------------------------|
| HTML, CSS       | User Interface and Styling                   |
| JavaScript      | Frontend Logic & Interactions                |
| Firebase        | Real-Time Database for syncing notes         |
| GitHub Pages    | Static hosting of the frontend site          |

---

## 📁 File Structure

```
.
├── index.html            # Main UI layout
├── style.css             # Light and dark mode styles
├── main.js               # Sync logic, note switching, export, theme toggle
├── firebase-config.js    # Firebase config (replace with your values)
```

---

## 🧩 Setup Instructions

1. **Clone or download this repository**
2. **Replace `firebase-config.js` content** with your Firebase project config
3. **Enable Firebase Realtime Database** in test mode
4. **Deploy to GitHub Pages**:
   - Push your code to GitHub
   - Go to repo settings → Pages → Select `main` branch → `/ (root)`
   - Access the web app at `https://huda147.github.io/notepad2/`
---

## 🧠 Tips

- Use short, memorable note IDs (like `team-tasks`, `ideas`, `draft1`)
- Notes are publicly visible by ID — do not store private info
- Can be enhanced with encryption, auth, markdown support, etc.

---

## 📜 License

MIT License. Free to use and modify.

---

Made with ❤️ using Firebase & GitHub Pages.
