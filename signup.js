var signUp = document.getElementById("signUp");

signUp.addEventListener("submit", SignUp);

async function SignUp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pswd = document.getElementById("pswd").value;

  const obj = {
    name,
    email,
    pswd,
  };

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
