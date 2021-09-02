import { DatePicker } from '@syncfusion/ej2-calendars';


//This is the event that declares that the even
const myHandler = (event: any) => {
    document.getElementById('displayH1').innerHTML = "Changed";
}

//Debouncing the event above for 2 seconds.
const dHandler = debounced(3000, myHandler);

//Resetting the text on screen when its clicked.
const resetEvent = () => {
    document.getElementById('displayH1').innerHTML = "Waiting";
}

// initialize datepicker component
let datepickerObject: DatePicker = new DatePicker();
// render initialized datepicker and set the events.
datepickerObject.blur = resetEvent;
datepickerObject.change = myHandler;
datepickerObject.open = resetEvent;
datepickerObject.focus = resetEvent;
datepickerObject.appendTo('#element');

//Debounce function
function debounced(delay: number, fn: any) {
    let timerId: number;
    return function (...args: any) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    }
  }

document.getElementById('datePicker').addEventListener("change", () => {
  document.getElementById('titleH1').innerText = "Changed!";
});

document.getElementById('datePicker').addEventListener("click", () => {
    document.getElementById('titleH1').innerText = "Ready";
})

document.getElementById('datePicker').addEventListener("blur", () => {
  document.getElementById('titleH1').innerText = "Ready";
})
