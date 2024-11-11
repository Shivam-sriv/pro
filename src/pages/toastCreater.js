import { toast, cssTransition } from "react-toastify";

const fade = cssTransition({
  enter: "animate__animated animate__fadeIn animate__slow",
  exit: "animate__animated animate__fadeOut animate__slow",
});

export const notify = (type, message) => {
  toast[type](message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    transition: fade,
    autoClose: 2000,
    hideProgressBar: true,
    toastId: 544,
  });
};
