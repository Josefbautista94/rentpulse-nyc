# 🏙️ RentPulseNYC

A **NYC Housing & Rent Trends Dashboard** built with **React, Express, and FastAPI**.  
It visualizes rent price trends, income vs. rent ratios, and affordability insights across NYC boroughs and ZIP codes.

---

## 🚀 Tech Stack
- **Frontend**: React (Vite + TypeScript), Recharts (charts), Leaflet (maps)
- **Backend API**: Node.js + Express (serves UI-ready data, proxies Python service)
- **Data/ML Service**: Python FastAPI (ETL + forecasting with pandas + numpy)
- **Database (planned)**: MongoDB (to store rent/income series + forecasts)

---

## 📊 Features (MVP & Beyond)
- **Rent Forecasting** → predict next 12 months of rent index per borough
- **Charts** → line graphs for rent + income, dual-axis affordability ratios
- **Map View** → choropleth map of boroughs/ZIPs colored by rent change
- **Insights** → auto-generated text like:
  > “Rent increased **15% in the Bronx since 2020**, while income rose only **6%** → affordability worsened.”

---

## 🛠️ Local Development

### 1. Clone the repo
```bash
git clone https://github.com/Josefbautista94/rentpulse-nyc.git
cd rentpulse-nyc
```

### 2. Start the Python FastAPI service
```bash
cd pyservice
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 3. Start the Express API
```bash
cd ../api
npm install
npm run dev
```

### 4. Start the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Visit → [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure
```
rentpulse-nyc/
├─ frontend/     # React + Vite app
├─ api/          # Express API
├─ pyservice/    # FastAPI service (ETL + ML)
├─ data/         # Zillow & ACS datasets (gitignored)
├─ README.md
└─ .gitignore
```

---

## 📌 Status
- [x] Repo initialized
- [ ] Frontend scaffolded
- [ ] Express API scaffolded
- [ ] FastAPI service scaffolded
- [ ] First Bronx rent forecast chart working 🎉

---

## 📄 License
MIT — feel free to fork & build on it.
