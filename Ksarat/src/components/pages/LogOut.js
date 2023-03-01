import Swal from "sweetalert2";

const Logout = () => {
  Swal.fire({
    title: 'Do You Want To Logout?',
    text: "Are You Sure?",
    icon: 'question',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Confirm'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location = "./sign-up";
    }
  });
};

export default Logout;
