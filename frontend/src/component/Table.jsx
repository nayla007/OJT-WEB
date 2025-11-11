import { useState, useEffect } from "react";

function Table({ data, className, onDelete, onEdit }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setTableData(data.map((item) => ({ ...item })));
    }
  }, [data]);

  const allMonths = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  const tanggalPerBulan = {
    Januari: ["20-28"],
    Februari: ["11-15"],
    Maret: ["17-24"],
    April: ["01-07"],
    Mei: ["08-17"],
    Juni: ["10-18"],
    Juli: ["18-27"],
    Agustus: ["16-28"],
    September: ["05-15"],
    Oktober: ["24-30"],
    November: ["11-19"],
    Desember: ["03-09"],
  };

  const handleBulanChange = (index, bulan) => {
    const newData = [...tableData];
    newData[index].bulan = bulan;
    newData[index].tanggal = tanggalPerBulan[bulan]?.join(", ") || "";
    setTableData(newData);
  };

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
        {tableData && tableData.length > 0 ? (
    tableData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>Rp {Number(item.harga).toLocaleString()}</td>
              <td>{item.jmlHari}</td>
              <td>{item.bidang}</td>
              <td>
              <select
  className="form-select form-select-sm"
  value={item.bulan ?? ""}   // pakai ?? untuk fallback ke string kosong
  onChange={(e) => handleBulanChange(index, e.target.value)}
>
  <option value="">--Pilih Bulan--</option>
  {allMonths.map((bulan) => (
    <option key={bulan} value={bulan}>
      {bulan}
    </option>
  ))}
</select>
            </td>
            <td>{item.tanggal}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(item.id)}
                >
                  Hapus
                </button>
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

export default Table; 