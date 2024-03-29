/*const checkboxes = document.querySelectorAll(".symptom-checkbox");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    this.checked = !this.checked;
  });
});
*/

window.addEventListener("load", function () {
  let form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("form submitted.");

    const name = event.target.elements["user_name"].value;
    const symptom = event.target.elements["user_comment"].value;

    let sickness = {
      user: name,
      symptom: symptom,
    };

    processFormSubmission(sickness);

    event.target.reset();
  });
});

async function processFormSubmission(sickness) {
  let displayCommentsContainer = document.getElementById(
    "displayCommentsContainer"
  );
  displayCommentsContainer.innerHTML = "";

  let diagnosis = document.createElement("p");
  diagnosis.innerText = "Thinking ...";

  displayCommentsContainer.appendChild(diagnosis);

  let diagnosisResponse = await getDiagnosis(sickness);

  //console.log(diagnosisResponse)

  displayCommentsContainer.innerHTML = "";
  diagnosis.innerText =
    "Oh, I am sorry " +
    sickness.user +
    "! I am sorry to hear that. Here is a joke to make you fee better : " +
    diagnosisResponse;

  displayCommentsContainer.appendChild(diagnosis);
}

async function getDiagnosis(sickness) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const apiUrl = "https://icanhazdadjoke.com/slack";

  try {
    // Simulate a delay of 2 seconds before making the API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios.get(apiUrl);

    // Access the data from the API response
    const data = response.data;
    return data.attachments[0].text;
  } catch (error) {
    console.error("Error fetching data from the API", error);
    throw error;
  }
}
