function getTime() {
  const ris = document.querySelector(".ris");
  clearRis(ris);
  let timeInput;

  timeInput = document.getElementById("input");

  let timeValue = timeInput.value;

  let hour = parseInt(timeValue.slice(0, 2));
  let minute = parseInt(timeValue.slice(3));

  let firstPossibility = document.createElement("p");
  let secondPossibility = document.createElement("p");
  let thirdPossibility = document.createElement("p");
  let fourthPossibility = document.createElement("p");
  firstPossibility.innerText = `${plusHours(hour, minute, 4)} (dormi 6 ore)`;
  secondPossibility.innerText = `${plusHours(hour, minute, 5)} (dormi 7 ore e 30)`;
  thirdPossibility.innerText = `${plusHours(hour, minute, 6)} (dormi 9 ore)`;
  fourthPossibility.innerText = `${plusHours(hour, minute, 7)} (dormi 10 ore e 30)`;
  ris.appendChild(firstPossibility);
  ris.appendChild(secondPossibility);
  ris.appendChild(thirdPossibility);
  ris.appendChild(fourthPossibility);
  content.appendChild(ris);
}

function plusHours(hour, minute, times) {
  if (times % 2 === 0) {
    hour += 3 * (times / 2);
    if (hour > 23) {
      hour -= 24;
    }
    return `${hour}:${minute === 0 ? "00" : minute}`;
  } else if (times <= 0) return "ERRORE";
  else {
    for (let i = 0; i < times; i++) {
      hour++;
      minute += 30;
      if (minute > 59) {
        minute -= 60;
        hour++;
      }
      if (hour > 23) {
        hour -= 24;
      }
    }
    return `${hour}:${minute === 0 ? "00" : minute}`;
  }
}

function clearRis(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}