const homePage = {
  id: {
    page: 'Catatan aktif',
    placeholder: 'Cari berdasarkan judul...'
  },
  en: {
    page: 'Active notes',
    placeholder: 'search by title...'
  },
};

const archivePage = {
  id: {
    page: 'Catatan diarsip',
    placeholder: 'Cari berdasarkan judul...'
  },
  en: {
    page: 'Archived notes',
    placeholder: 'search by title...'
  },
};

const handleDeleteModal = {
  id: {
    title: 'Apakah kamu yakin?',
    text: 'Catatan ini akan dihapus permanen',
    confirm: 'Hapus',
    cancel: 'Batal',
    deletedTitle: 'Dihapus!',
    deletedSubtitle: 'Catatan berhasil dihapus.',
    canceledTitle: 'Batal',
    canceledSubtitle: 'Catatan aman :)'
  },
  en: {
    title: 'Are you sure?',
    text: 'This note will be permanently deleted',
    confirm: 'Delete',
    cancel: 'Cancel',
    deletedTitle: 'Deleted!',
    deletedSubtitle: 'Note deleted successfully.',
    canceledTitle: 'Cancel',
    canceledSubtitle: 'note is safe :)'
  }
}

const loginPage = {
  id: {
    header: 'Yuk, masuk untuk menggunakan aplikasi',
    button: 'Masuk',
    footer: 'Belum punya akun?',
    link: 'Daftar disini'
  },
  en: {
    header: 'Lets login to continue using app',
    button: 'Login',
    footer: 'Don\'t have an account? ',
    link: 'Register'
  },
};

const registerPage = {
  id: {
    header: 'Isi form untuk mendaftar akun.',
    button: 'Daftar',
    footer: 'Sudah punya akun?',
    link: 'masuk disini'
  },
  en: {
    header: 'Fill the form to register account.',
    button: 'Register',
    footer: 'Already have an account? ',
    link: 'Login'
  },
};


export { homePage, archivePage, handleDeleteModal, loginPage, registerPage };
