const form = document.querySelector(".contact-form .form");
const submitBtn = document.querySelector(".submit-btn");

if (form && submitBtn) {
  const fullNameInput = form.querySelector('input[name="fullname"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const fullNameError = form.querySelector(".fullname-error");
  const emailError = form.querySelector(".email-error");
  const phoneError = form.querySelector(".phone-error");
  const messageError = form.querySelector(".message-error");

  function setError(input, errorEl, message) {
    input.classList.add("input-error");
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(input, errorEl) {
    input.classList.remove("input-error");
    if (errorEl) errorEl.textContent = "";
  }

  function validateFullName() {
    const value = fullNameInput.value.trim().replace(/\s+/g, " ");
    fullNameInput.value = value;

    if (!value) {
      setError(fullNameInput, fullNameError, "Full name is required.");
      return false;
    }

    if (value.length < 2) {
      setError(fullNameInput, fullNameError, "Enter a valid full name.");
      return false;
    }

    clearError(fullNameInput, fullNameError);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    emailInput.value = value;

    if (!value) {
      setError(emailInput, emailError, "Email is required.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError(emailInput, emailError, "Enter a valid email.");
      return false;
    }

    clearError(emailInput, emailError);
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    phoneInput.value = value.replace(/[^\d\s()+-]/g, "");

    const digits = phoneInput.value.replace(/\D/g, "");

    if (!phoneInput.value) {
      setError(phoneInput, phoneError, "Phone is required.");
      return false;
    }

    if (digits.length < 7 || digits.length > 15) {
      setError(phoneInput, phoneError, "Enter a valid phone number.");
      return false;
    }

    clearError(phoneInput, phoneError);
    return true;
  }

  function validateMessage() {
    const value = messageInput.value.trim();
    messageInput.value = value;

    if (!value) {
      setError(messageInput, messageError, "Message is required.");
      return false;
    }

    if (value.length < 10) {
      setError(messageInput, messageError, "Message is too short.");
      return false;
    }

    clearError(messageInput, messageError);
    return true;
  }

  fullNameInput.addEventListener("blur", validateFullName);
  emailInput.addEventListener("blur", validateEmail);
  phoneInput.addEventListener("blur", validatePhone);
  messageInput.addEventListener("blur", validateMessage);

  fullNameInput.addEventListener("input", () => clearError(fullNameInput, fullNameError));
  emailInput.addEventListener("input", () => clearError(emailInput, emailError));
  phoneInput.addEventListener("input", () => clearError(phoneInput, phoneError));
  messageInput.addEventListener("input", () => clearError(messageInput, messageError));



submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isValid =
    validateFullName() &&
    validateEmail() &&
    validatePhone() &&
    validateMessage();

  if (!isValid) return;

  const subject = encodeURIComponent(`New contact form submission from ${fullNameInput.value.trim()}`);
  const body = encodeURIComponent(
    `Full Name: ${fullNameInput.value.trim()}
    Email: ${emailInput.value.trim()}
    Phone: ${phoneInput.value.trim()}
    Message:
    ${messageInput.value.trim()}`
  );

  window.location.href = `mailto:growth@geeksforgrowth.com?subject=${subject}&body=${body}`;
});
}