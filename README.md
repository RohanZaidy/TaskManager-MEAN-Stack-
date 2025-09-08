# 📝 Task Manager (MEAN Stack)

A modern **Task Manager** application built with the **MEAN stack (MongoDB, Express, Angular, Node.js)**.  
This project demonstrates **full-stack CRUD operations** with **relationships** between schemas:

- ✅ **Lists** → Represent categories (e.g., Mon, Tue, Wed…)
- ✅ **Tasks** → Belong to a specific list  
- ✅ When a **list is deleted**, all its tasks are also deleted (cascading delete).  

---

## 🚀 Features

- 📂 **Create / Read / Update / Delete (CRUD)** for Lists and Tasks  
- 🔗 **Schema Relationship**: One-to-Many (Each List has many Tasks)  
- 🎨 **Angular Frontend**:
  - Modern UI with Bootstrap & FontAwesome
  - Animations on lists and tasks
  - Hover effects & responsive design
- ⚡ **Node.js + Express Backend**:
  - REST API for lists and tasks
  - Cascade delete implemented
- 🗄️ **MongoDB + Mongoose**:
  - Two schemas: `List` and `Task`
  - References (`listId`) to link tasks with lists  

---

## 🏗️ Tech Stack

| Layer          | Technology |
|----------------|------------|
| **Frontend**   | Angular, Bootstrap, FontAwesome |
| **Backend**    | Node.js, Express.js |
| **Database**   | MongoDB (Mongoose ODM) |
| **Versioning** | Git & GitHub |

---
✨ Author

👤 Rohan Zaidy
📧 rohaanzaidy@gmail.com

💡 Built with ❤️ using the MEAN Stack


---

