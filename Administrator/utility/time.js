
function renderTime() {
  let s_format = "second";
  let s_Opthtml = "";
  const seconds = [];
  let m_format = "second";
  let digit_f = '';
  let m_Opthtml = "";
  const minutes = [];
  let h_format = "second";
  let h_Opthtml = "";
  const hours = [];
  for (let i = 0; i < 60; i++) {
    if (i > 1) {
      s_format = "seconds";
      m_format = "minutes";
      h_format = "hours";
    }
    else {
      s_format = "second";
      m_format = "minute";
      h_format = "hour";
    }
    if (i < 10) {
      digit_f = `0${i}`;
    } else {
      digit_f = `${i}`;
    }
    seconds.push(`<option>${digit_f} ${s_format}</option>`);
    minutes.push(`<option>${digit_f} ${m_format}</option>`);
    hours.push(`<option>${digit_f} ${h_format}</option>`);
  }
  seconds.forEach(element => {
    s_Opthtml += element;
  });
  minutes.forEach(element => {
    m_Opthtml += element;
  });
  hours.forEach(element => {
    h_Opthtml += element;
  });
  const s_selector = document.querySelector(".s-select");
  s_selector.innerHTML = s_Opthtml;
  const m_selector = document.querySelector(".m-select");
  m_selector.innerHTML = m_Opthtml;
  const h_selector = document.querySelector(".h-select");
  h_selector.innerHTML = h_Opthtml;
  const time_input = document.querySelector(".time-inputs");
  time_input.style.display = "flex";
  time_input.style.width = "430px";

}
;

renderTime();