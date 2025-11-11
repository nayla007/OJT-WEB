-- CreateTable
CREATE TABLE `DataPendaftar` (
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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
