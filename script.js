function getValue(id, isInput) {
  let elm = document.getElementById(id);
  if (isInput) return elm.value;
  else return elm.innerText;
}
function setValue(id, value, isInput) {
  let elm = document.getElementById(id);
  if (isInput) elm.value = value;
  else elm.innerText = value;
}

function getCode() {
  let code = Math.round(Math.random() * 10000) + "";
  if (code.length == 4) return code;
  else return getCode();
}

function generateCode() {
  let code = getCode();
  setValue("generate-input", code, true);
}
document.getElementById("generate-btn").addEventListener("click", () => {
  generateCode();
});

document.getElementById("numbers").addEventListener("click", (event) => {
  let pinClick = event.target.innerText;
  let pin = "";
  if (isNaN(pinClick)) {
    if (pinClick == "C") {
      pin = "";
    } else if (pinClick == "<") {
      pin = getValue("pin-input", true);
      pin = pin.slice(0, pin.length - 1);
    }
  } else {
    pin = getValue("pin-input", true) + pinClick;
  }
  setValue("pin-input", pin, true);
});

function isPinMatch() {
  let generatePin = getValue("generate-input", true);
  let matchingPin = getValue("pin-input", true);

  return generatePin == matchingPin;
}

function displayAndHide(display, hide) {
  display.style.display = "block";
  hide.style.display = "none";
}

document.getElementById("submit-btn").addEventListener("click", (e) => {
  let success = document.getElementById("success");
    let error = document.getElementById("error");
    
  if (isPinMatch()) {
    displayAndHide(success, error);
  } else {
    displayAndHide(error, success);
  }
});
