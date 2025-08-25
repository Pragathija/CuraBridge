# Cura (Frontend)

A React + Vite + Tailwind frontend for the **Cura** Personal MediCare platform with pages for Dashboard, Appointments, Medications, Alerts, Records, Settings, and simple Auth (demo).

## 🛠 Tech
- React 18 + Vite
- TailwindCSS
- React Router
- Recharts
- Zustand (auth store)
- Axios

## ▶️ Run locally
```bash
npm install
npm run dev
```
> Default dev server: http://localhost:5173

## 🔐 Auth (Demo)
- No real backend required. Login/Signup will set a demo token using Zustand and let you access protected routes.

## 🌐 API Integration
- Configure `VITE_API_BASE` in an `.env` to point to your backend (optional).
- API helper in `src/services/api.js` (AuthAPI, HealthAPI).

## 🖼 Pages
- **Dashboard**: vitals cards + 24h heart-rate chart + quick actions
- **Appointments**: upcoming appointments list
- **Medications**: medication schedule list
- **Alerts**: emergency alerts list + Trigger SOS button (demo)
- **Records**: health records list
- **Settings**: preferences
- **Login / Signup**: demo auth

## 🧪 Mocking
For hackathon demos, the dashboard generates sample heart-rate data client-side.

## 🧩 Folder Structure
```
src/
  components/     # UI components
  pages/          # route pages
  layouts/        # layout wrappers
  services/       # API helpers
  context/        # zustand store
  utils/          # constants
```
## 🎨 Branding
- Primary color: `cura-500` (#2ab891). Logo in `/public/cura.svg`.

## 🚀 Future scope
- Real wearable data via BLE/Web Bluetooth
- Doctor/hospital integration
- Push notifications & background alerts
- Role-based dashboards (patient/doctor/admin)
```