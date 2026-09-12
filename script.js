function saveName() {
  let name = document.getElementById("nameInput").value;

  localStorage.setItem("studentName", name);

  alert("Name Saved!");
}

// Load Name
function loadName() {
  let savedName = localStorage.getItem("studentName");

  if (savedName) {
    document.getElementById("output").innerText = "Saved Name: " + savedName;
  } else {
    document.getElementById("output").innerText = "No name found!";
  }
}

// Clear Name
function clearName() {
  localStorage.removeItem("studentName");

  document.getElementById("output").innerText = "";
}
