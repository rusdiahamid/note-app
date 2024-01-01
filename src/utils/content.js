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

const emptyPage = {
  id: {
    text: 'Tidak ada catatan'
  },
  en: {
    text: 'No Notes'
  }
}

const notFoundPage = {
  id: {
    text: 'Halaman tidak ditemukan'
  },
  en: {
    text: 'Page not found'
  }
}

const noteInput = {
  id: {
    title: 'Sukses',
    text: 'Catatan berhasil disimpan.',
    titlePlaceholder: 'Judul Catatan',
    bodyPlaceholder: 'Ketik catatan disini'
  },
  en: {
    title: 'Success',
    text: 'Note saved successfully.',
    titlePlaceholder: 'Note Title',
    bodyPlaceholder: 'Type note here'
  }
}

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

const handleArchiveModal = {

  id: {
    title: 'Sukses',
    text: 'Catatan berhasil diarsipkan'
  },
  en: {
    title: 'Success',
    text: 'Note archived successfully'
  }
}

const handleUnarchiveModal = {
  id: {
    title: 'Sukses',
    text: 'Catatan berhasil dipulihkan'
  },
  en: {
    title: 'Success',
    text: 'Notes recovered successfully'
  }
}

const logoutHandler = {
  id: {
    title: 'apakah kamu yakin?',
    text: 'keluar aplikasi',
    confirm: 'Keluar',
    cancel: 'Batal',
    loggedOutTitle: 'Berhasil keluar',
    loggedOutSubtitle: 'sampai jumpa lagi :)',
    canceledTitle: 'Batal',
    canceledSubtitle: 'Kamu masih ada disini'
  },
  en: {
    title: 'Are you sure?',
    text: 'Logout from the app',
    confirm: 'Logout',
    cancel: 'Cancel',
    loggedOutTitle: 'Logout Success',
    loggedOutSubtitle: 'See you :)',
    canceledTitle: 'Cancel',
    canceledSubtitle: 'You are still here'
  }
}



export {
  homePage,
  archivePage,
  handleDeleteModal,
  handleArchiveModal,
  handleUnarchiveModal,
  noteInput,
  loginPage,
  registerPage,
  emptyPage,
  notFoundPage,
  logoutHandler
};
