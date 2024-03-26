document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNo = document.getElementById("phoneNo").value.trim();
    const address = document.getElementById("address").value.trim();

    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneNoError = document.getElementById("phoneNoError");
    const addressError = document.getElementById("addressError");

    switch (true) {
      case fullName === "":
        fullNameError.classList.remove("hidden");
        event.preventDefault();
        break;
      case email === "":
        emailError.classList.remove("hidden");
        event.preventDefault();
        break;
      case phoneNo === "":
        phoneNoError.classList.remove("hidden");
        event.preventDefault();
        break;
      case address === "":
        addressError.classList.remove("hidden");
        event.preventDefault();
        break;
      default:
        fullNameError.classList.add("hidden");
        emailError.classList.add("hidden");
        phoneNoError.classList.add("hidden");
        addressError.classList.add("hidden");
    }
  });
