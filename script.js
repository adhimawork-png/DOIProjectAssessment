const API_URL = "https://script.google.com/macros/s/AKfycbyPZk2Gzf9rc9XhMf6lSZov5nbb-H6ZcDgLCpXo98blB6_ztnr7t-_Tp98R-d8LK65ETg/exec";

document.getElementById("assessmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData();

  formData.append("job", document.getElementById("job").value);
  formData.append("name", document.getElementById("name").value);
  formData.append("position", document.getElementById("position").value);
  formData.append("supervisor", document.getElementById("supervisor").value);
  formData.append("attendance", document.getElementById("attendance").value);
  formData.append("punctuality", document.getElementById("punctuality").value);
  formData.append("attitude", document.getElementById("attitude").value);
  formData.append("technical", document.getElementById("technical").value);
  formData.append("communication", document.getElementById("communication").value);
  formData.append("strengths", document.getElementById("strengths").value);
  formData.append("improvement", document.getElementById("improvement").value);
  formData.append("recommendation", document.getElementById("recommendation").value);

  fetch(API_URL, {
    method: "POST",
    body: formData
  });

  alert("Assessment submitted successfully");
  document.getElementById("assessmentForm").reset();
});

document.getElementById("assessmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fd = new FormData(this);

  for (const pair of fd.entries()) {
    console.log(pair[0] + " =", pair[1]);
  }
});
``