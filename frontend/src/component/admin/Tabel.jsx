import { useState, useEffect } from "react";

function Tabel({ data, className, onDelete, onEdit, onBulanChange }) {
  const [tableData, setTableData] = useState([]);

  const allMonths = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember",
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      setTableData(data.map((item) => ({ ...item })));
    }
  }, [data]);


  return (
    <div className="table-responsive mb-5">

    <table className="table table-bordered align-middle text-center">
      <thead className="table-success">
        <tr>
          <th>No</th>
          <th>Nama Pelatihan</th>
          <th>Harga</th>
          <th>Jumlah Hari</th>
          <th>Bidang</th>
           <th scope="col">Bulan</th>
          <th scope="col">Tanggal</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>Rp {Number(item.harga).toLocaleString()}</td>
                <td>{item.jmlHari}</td>
                <td>{item.bidang}</td>
                <td>
                  <select
                    className="form-select form-select-sm"
                    value={item.bulan ?? ""}
                    onChange={(e) => onBulanChange(item.id, e.target.value)}
                  >
                    <option value="">--Pilih Bulan--</option>
                    {allMonths.map((bulan) => (
                      <option key={bulan} value={bulan}>{bulan}</option>
                    ))}
                  </select>
                </td>
                <td>{item.tanggal ?? ""}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(item)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(item.id)}>Hapus</button>
                </td>
              </tr>
            ))
          ) : (
          <tr>

            <td colSpan="6">Belum ada data</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
    
  );
}

export default Tabel; 