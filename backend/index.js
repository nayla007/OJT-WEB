import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataPendaftarRoutes from "./routes/DataPendaftarRoute.js";
import jadwalRoutes from "./routes/JadwalRoutes.js";
import KategoriPelatihanRoute from "./routes/KategoriPelatihanRoute.js";
import DaftarPelatihanRoute from "./routes/DaftarPelatihanRoute.js";

// import pelatihanRoutes from "./routes/PelatihanRoutes.js"


import DataPendaftar from "./routes/DataPendaftarRoute.js";
import AuthRoute from "./routes/AuthRoute.js"

import AdminRoute from "./routes/AdminRoute.js"

dotenv.config();

const app = express();

// middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());


app.use('/api', DataPendaftar)
app.use('/api/auth', AuthRoute)
app.use('/api/admin', AdminRoute)
app.use("/kategori-pelatihan", KategoriPelatihanRoute);
app.use("/daftar-pelatihan", DaftarPelatihanRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

// routes
app.use("/api/pendaftar", dataPendaftarRoutes);  // untuk admin
app.use("/api/jadwal", jadwalRoutes);            // untuk user
// app.use("/api/pelatihan", pelatihanRoutes);

// jalankan server
const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});
