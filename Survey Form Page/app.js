const email = document.querySelector("#email");
const button = document.querySelector("#submit");
const section = document.querySelector("section");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", (e) => {
  if (emailRegex.test(email.value) == false) {
    alert("Please provide a valid email adress");
  } else {
    e.preventDefault();

    /* The blurry screen and text box message, after submission */
    section.classList.add("blur-screen");
    const div = document.createElement("div");
    div.classList.add("message");

    /* The success image */
    const url =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbiKM-0B9PPQgLkrqbCAV3scT6m9F_OHPmDA&usqp=CAU";
    const imgSuccess = new Image();
    imgSuccess.src = url;
    imgSuccess.classList.add("img-success");

    /* The title of the message */
    const title = document.createElement("p");
    const titleContent = document.createTextNode(
      "Thanks for submitting your form!"
    );
    title.appendChild(titleContent);
    title.classList.add("title");

    /* The content of the message */
    const text = document.createElement("p");
    const textContent = document.createTextNode(
      "We'll get in touch as soon as possible!"
    );
    text.appendChild(textContent);
    text.classList.add("text");

    /* Adding the elements to the message box */
    section.appendChild(div);
    div.appendChild(imgSuccess);
    div.appendChild(title);
    div.appendChild(text);

    document.body.style.overflow = "hidden";
  }
});
