var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
      })
      Toast.fire({
        icon: 'success',
        title: 'Email Copiado',
      })
});