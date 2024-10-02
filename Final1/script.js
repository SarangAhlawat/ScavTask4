
const correctPasscodes = ["ABCD", "EFGH", "IJKL", "MNOP", "QRST", "UVWX", "YZ12", "3456", "7890", "WXYZ"]; 

function checkPasscode() {
  const userPasscode = document.getElementById("passcode").value;
  const resultDiv = document.getElementById("result");

  if (correctPasscodes.includes(userPasscode)) {
    resultDiv.innerHTML = "Correct! Redirecting to the next page...";
    resultDiv.style.color = "darkgreen";
    resultDiv.style.fontWeight = "900";
    resultDiv.style.fontSize = "24px";


    const time = Date.now();

    setTimeout(() => {
      window.location.href = `room.html?time=${time}`;
    }, 2000);
  } else {
    resultDiv.innerHTML = "Incorrect passcode, try again!";
    resultDiv.style.color = "darkred";
    resultDiv.style.fontWeight = "900";
    resultDiv.style.fontSize = "24px";
  }
}
