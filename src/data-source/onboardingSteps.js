export default [
  // 1. Selamat Datang
  {
    id: 1,
    route: '/dashboard',
    targetId: null,
    title: 'Selamat Datang di Konten Otomatis',
    description:
      'Di sini kamu bisa membuat konten gambar tanpa ribet. Mari kita mulai!'
  },

  // 2. Tombol Add New di Dashboard
  {
    id: 2,
    route: '/dashboard',
    targetId: 'dashboard-add-new-btn',
    title: 'Tambah Konten Baru',
    description:
      'Kamu bisa memulai membuat konten gambar dengan menekan tombol “Tambah Konten Baru”.'
  },

  // 3. Step 1 – Resolution
  {
    id: 3,
    route: '/create-content',
    targetId: 'step1-resolution',
    title: 'Atur Resolusi Gambar',
    description:
      'Pilih resolusi konten dari pilihan yang tersedia atau buat ukuranmu sendiri.'
  },

  // 4. Step 1 – Layout
  {
    id: 4,
    route: '/create-content',
    targetId: 'step1-layout',
    title: 'Pilih Layout Konten',
    description:
      'Tentukan layout yang sesuai dengan komposisi kontenmu.'
  },

  // 5. Step 1 – Next Button
  {
    id: 5,
    route: '/create-content',
    targetId: 'onboarding-next-1',
    title: 'Lanjutkan ke Tahap Berikutnya',
    description:
      'Setelah menentukan resolusi dan layout, lanjutkan dengan menekan tombol “Next”.'
  },

  // 6. Step 2 – Ads Group
  {
    id: 6,
    route: '/create-content',
    targetId: 'ads-group-select',
    title: 'Pilih Ads Group',
    description:
      'Kamu bisa memilih “Ads Group” untuk mengelompokkan konten gambarmu.'
  },

  // 7. Step 2 – Next Button
  {
    id: 7,
    route: '/create-content',
    targetId: 'onboarding-next-2',
    title: 'Lanjutkan ke Tahap Selanjutnya',
    description:
      'Jika sudah memilih Ads Group, tekan “Next” untuk melanjutkan.'
  },

  // 8. Step 3 – Upload Background
  {
    id: 8,
    route: '/create-content',
    targetId: 'background-upload',
    title: 'Unggah Gambar Latar',
    description:
      'Unggah gambar yang akan dijadikan latar belakang untuk kontenmu.',
    tooltipPosition: 'bottom'
  },


  // 9. Step 3 – File Type
  {
    id: 9,
    route: '/create-content',
    targetId: 'file-type-select',
    title: 'Pilih Jenis File',
    description:
      'Tentukan format file yang akan menjadi hasil konten gambarmu.'
  },

  // 10. Step 3 – Generate
  {
    id: 10,
    route: '/create-content',
    targetId: 'onboarding-finish',
    title: 'Generate Gambar Otomatis',
    description:
      'Selamat! Sekarang kamu bisa menekan tombol “Generate Image” untuk membuat kontenmu secara otomatis.'
  }
]
