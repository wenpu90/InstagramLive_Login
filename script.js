function handleCredentialResponse(response) {
  const output = document.getElementById("output");
  output.textContent = "Loading user info...";

  // Decode JWT to get user info (optionally, send it to server)
  const payload = JSON.parse(atob(response.credential.split('.')[1]));
  console.log("User Info:", payload);
  output.textContent = `Hello, ${payload.name}`;
}