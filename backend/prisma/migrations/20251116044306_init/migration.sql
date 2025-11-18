-- CreateTable
CREATE TABLE `kategori_pelatihan` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_pelatihan` (
    `id_pelatihan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pelatihan` VARCHAR(191) NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `persyaratan` VARCHAR(191) NOT NULL,
    `materi_pembelajaran` VARCHAR(191) NOT NULL,
    `instruktur` VARCHAR(191) NOT NULL,
    `sertifikasi` VARCHAR(191) NOT NULL,
    `metode_pembelajaran` VARCHAR(191) NOT NULL,
    `biaya` VARCHAR(191) NOT NULL,
    `fasilitas` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `id_kategori` INTEGER NOT NULL,
    `file_url` VARCHAR(191) NULL,

    INDEX `data_pelatihan_id_kategori_fkey`(`id_kategori`),
    PRIMARY KEY (`id_pelatihan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `akses` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Admin_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datapendaftar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `institusi` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `fax` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `namaPeserta` VARCHAR(191) NOT NULL,
    `telPeserta` VARCHAR(191) NOT NULL,
    `emailPeserta` VARCHAR(191) NOT NULL,
    `pelatihan` VARCHAR(191) NOT NULL,
    `id_pelatihan` INTEGER NOT NULL,
    `buktiBayar` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'MENUNGGU_BAYAR',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jadwal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bidang` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `jmlHari` INTEGER NOT NULL,
    `bulan` VARCHAR(191) NULL,
    `tanggal` VARCHAR(191) NULL,
    `id_pelatihan` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataPeserta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_data_pendaftar` INTEGER NOT NULL,
    `tanggal_konfirmasi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nomorSertifikat` VARCHAR(191) NULL,
    `fileSertifikat` VARCHAR(191) NULL,

    UNIQUE INDEX `DataPeserta_id_data_pendaftar_key`(`id_data_pendaftar`),
    UNIQUE INDEX `DataPeserta_nomorSertifikat_key`(`nomorSertifikat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_pelatihan` ADD CONSTRAINT `data_pelatihan_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_pelatihan`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datapendaftar` ADD CONSTRAINT `datapendaftar_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `data_pelatihan`(`id_pelatihan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal` ADD CONSTRAINT `jadwal_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `data_pelatihan`(`id_pelatihan`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataPeserta` ADD CONSTRAINT `DataPeserta_id_data_pendaftar_fkey` FOREIGN KEY (`id_data_pendaftar`) REFERENCES `datapendaftar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
