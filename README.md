# 🌳 LangTree: Linguistic Phylogenetic Explorer

LangTree is a full-stack web application engineered to map, navigate, and visualize the complex phylogenetic ancestry of global languages. 

Unlike flat data applications, LangTree handles deep, biological-style recursive relationships. The core engineering focus of this project is resolving the performance bottlenecks of deep nested queries in NoSQL, utilizing advanced data denormalization to achieve sub-100ms API latency.

## 🚀 Key Engineering Features

* **Sub-100ms Recursive Data Retrieval:** Re-architected a standard nested NoSQL structure using denormalized pathing, dropping data fetch times from 1.5s to under 100ms.
* **Hierarchical Catch-All Routing:** Leverages Next.js 15 dynamic catch-all segments (`/family/[...slug]`) to generate nested URL paths that perfectly mirror the ancestral tree (e.g., `/family/indo-european/indo-iranian/indo-aryan`).
* **Agentic Path Reconstruction:** A smart search algorithm that not only finds target languages but dynamically validates and reconstructs the full ancestral path for immediate frontend redirection.
* **Optimized Static Generation:** Pre-renders deep tree branches at build time via Vercel, ensuring instant page loads for users without taxing the database.

## 🗄️ Database Design: The Data Denormalization Strategy

### The Problem
In a standard NoSQL approach, mapping a language tree requires recursive queries. To find "Bengali", the database must find its parent (Indo-Aryan), then that parent's parent (Indo-Iranian), triggering an $O(N)$ query chain that spikes latency to >1.5 seconds.

### The Solution (How LangTree works)
Instead of forcing the API to walk the tree at runtime, relationships are **denormalized** at the database level. Each document stores its direct children *and* its fully qualified ancestral path as an array of slugs. 

**Example Firestore Document:**
```json
{
  "id": "bengali",
  "name": "Bengali",
  "family": "Indo-Aryan",
  "ancestors": ["indo-european", "indo-iranian", "indo-aryan"],
  "descendants": ["sylheti", "chittagonian"],
  "metadata": {
    "speakers": "230M",
    "region": "South Asia"
  }
}
```
**Result:** A single $O(1)$ query retrieves the language, its immediate children, and the exact data needed for the Next.js router to build the breadcrumb UI and URL structure instantly.

---

## 💻 Tech Stack

**Frontend:**
* Next.js 15 (App Router, Server Components)
* React 19
* TypeScript
* Tailwind CSS
* Lucide React (Iconography)

**Backend & Database:**
* Node.js / Express (REST API)
* Firebase Firestore (NoSQL Database)
* Next.js Server Actions (for seamless client-server mutations)

**Deployment & Infrastructure:**
* Frontend: Vercel (Optimized for Next.js SSG/ISR)
* Backend: Render / Vercel Serverless Functions
* Monorepo managed via npm workspaces.

---

## 🛠️ Local Development Setup

Because LangTree is structured with separate frontend and backend environments, ensure you set up both correctly.

### 1. Clone the Repository
```bash
git clone [https://github.com/DevManTowhid/LangTree.git](https://github.com/DevManTowhid/LangTree.git)
cd LangTree
```

### 2. Install Dependencies
This project uses a root `package.json` to manage workspaces.
```bash
# Install dependencies for both frontend and backend
npm install
```

### 3. Environment Variables
You must set up your local `.env` files for the Next.js frontend to communicate with your backend.

Create a `.env.local` file inside the `frontend` directory:
```env
NEXT_PUBLIC_API_URL=[http://127.0.0.1:5000](http://127.0.0.1:5000)
```
*(Note: For production deployment on Vercel, this variable must be updated to your live backend URL).*

### 4. Run the Development Servers
Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
The application will now be running on `http://localhost:3000`.

---

## 🌐 Deployment Details

**Frontend (Vercel):**
* **Root Directory:** Must be set to `frontend` in Vercel project settings.
* **Build Command:** `npm run build`
* **Install Command:** `npm install`
* **Environment Variables:** `NEXT_PUBLIC_API_URL` must point to the live backend URL.

---

## 👨‍💻 Author
**Md. Towhidul Alam**
* Software Engineer
* **GitHub:** [@DevManTowhid](https://github.com/DevManTowhid)
* **LinkedIn:** [md-towhidul-alam-59b5b8302](https://www.linkedin.com/in/md-towhidul-alam-59b5b8302/)
