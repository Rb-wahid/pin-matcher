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
  let generateInputValue = setValue("generate-input", code, true);
}
document.getElementById("generate-btn").addEventListener("click", () => {
  generateCode();
});
