const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3005;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const MENU_FILE = path.join(DATA_DIR, "menu.json");
const RESERVATIONS_FILE = path.join(DATA_DIR, "reservations.json");
const SEED_FILE = path.join(ROOT, "menu.seed.json");

fs.mkdirSync(DATA_DIR, { recursive: true });

function readJSON(file, fallback = []) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { return fallback; }
}
function writeJSON(file, data) {
  const tmp = file + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf8");
  fs.renameSync(tmp, file);
}
if (!fs.existsSync(MENU_FILE)) {
  writeJSON(MENU_FILE, readJSON(SEED_FILE, []));
}
if (!fs.existsSync(RESERVATIONS_FILE)) {
  writeJSON(RESERVATIONS_FILE, []);
}

app.use(express.json());
app.use(express.static(path.join(ROOT, "public")));

app.get("/api/menu", (req, res) => {
  const menu = readJSON(MENU_FILE, [])
    .filter(x => x.active !== 0)
    .sort((a,b) => (a.sort_order || 0) - (b.sort_order || 0));
  res.json(menu);
});

app.post("/api/reservations", (req, res) => {
  const { name, phone, guests, sectionPreference = "" } = req.body || {};
  const guestCount = Number(guests);
  if (!String(name || "").trim() || !String(phone || "").trim() ||
      !Number.isInteger(guestCount) || guestCount < 1) {
    return res.status(400).json({ ok:false, message:"Vui lòng nhập đủ thông tin đặt bàn." });
  }

  const rows = readJSON(RESERVATIONS_FILE, []);
  const row = {
    id: rows.length ? Math.max(...rows.map(x => Number(x.id) || 0)) + 1 : 1,
    name: String(name).trim(),
    phone: String(phone).trim(),
    guests: guestCount,
    section_preference: String(sectionPreference),
    created_at: new Date().toISOString()
  };
  rows.push(row);
  writeJSON(RESERVATIONS_FILE, rows);
  res.json({ ok:true, id:row.id });
});

app.get("*", (req,res) => res.sendFile(path.join(ROOT, "public", "index.html")));

app.listen(PORT, () => {
  console.log("");
  console.log("==========================================");
  console.log("  Bep Nha Ba is running");
  console.log(`  http://localhost:${PORT}`);
  console.log("==========================================");
  console.log("");
});
