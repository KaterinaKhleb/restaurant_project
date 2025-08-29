<template>
  <div class="main">
    <h1>BOOK A TABLE</h1>
    <p>
      In a case if you need any special arrangement, such as children chair, please, inform our phone consultant about
      it. Number of guests can be flexible to plus-minus two guests.
    </p>

    <form>
      <div class="half-form">
        <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
        <label for="nme"><span>Your Name</span></label>

        <input type="text" name="name" class="question" id="email" required autocomplete="off" />
        <label for="nme"><span>Your Email</span></label>

        <input type="text" name="name" class="question" id="phone" required autocomplete="off" />
        <label for="nme"><span>Location</span></label>
      </div>

      <div class="half-form">
        <input type="text" name="name" class="question" id="date" required autocomplete="off" />
        <label for="nme"><span>Date, time</span></label>

        <input type="number" name="name" class="question" id="guests" required autocomplete="off" />
        <label for="nme"><span>Number of guests</span></label>

        <textarea name="message" rows="1" class="question" id="msg" required autocomplete="off"></textarea>
        <label for="msg"><span>Any comments?</span></label>
      </div>
    </form>

    <div class="button-holder"><button class="submit">RESERVE</button></div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      msg: "Contacts",
    };
  },
};
</script>

<style scoped>
.main {
  width: 60%;
  margin: 8% auto;
}
h1 {
  color: #3e603b;
  font-size: 60px;
}
.main p {
  font-family: "EB Garamond", serif;
  font-size: 18px;
  width: 60%;
}

form {
  margin: 5% auto;
  display: flex;
}

.half-form {
  width: 48%;
  margin: auto;
}

.button-holder {
  width: 100%;
  text-align: left;
}
.submit {
  width: 180px;
  font-size: 24px;
  border: 2px solid #3e603b;
  padding: 15px;
  color: #3e603b;
  background: transparent;
  margin: auto;
}
.submit:hover {
  background: #3e603b;
  color: #fafafa;
  transition: 300ms linear;
}

input,
span,
label,
textarea {
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 18px;
}

textarea:focus,
input:focus {
  outline: 0;
}

input.question,
textarea.question {
  font-size: 24px;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden;
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 20px 0px;
  margin: 0;
  width: 50%;
  border-top: 1px solid black;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 100%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span,
textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #7d2d3f;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8f8f8f;
  font-size: 36px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px) {
  .main p {
    width: 80%;
  }

  input.question,
  textarea.question {
    font-size: 18px;
  }
  input.question:focus + label > span,
  input.question:valid + label > span,
  textarea.question:focus + label > span,
  textarea.question:valid + label > span {
    top: -80px;
    font-size: 18px;
    color: #7d2d3f;
  }

  input.question + label > span,
  textarea.question + label > span {
    font-size: 26px;
    top: -46px;
    left: 0px;
  }
}

/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
  .main p {
    width: 80%;
  }

  input.question,
  textarea.question {
    font-size: 18px;
  }
  input.question:focus + label > span,
  input.question:valid + label > span,
  textarea.question:focus + label > span,
  textarea.question:valid + label > span {
    top: -80px;
    font-size: 18px;
    color: #7d2d3f;
  }

  input.question + label > span,
  textarea.question + label > span {
    font-size: 26px;
    top: -46px;
    left: 0px;
  }

  form {
    margin-top: 20%;
  }
}

/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {
  .main p {
    width: 80%;
    font-size: 14px;
  }

  input.question,
  textarea.question {
    font-size: 14px;
  }
  input.question:focus + label > span,
  input.question:valid + label > span,
  textarea.question:focus + label > span,
  textarea.question:valid + label > span {
    top: -70px;
    font-size: 14px;
    color: #7d2d3f;
  }

  input.question + label > span,
  textarea.question + label > span {
    font-size: 18px;
    top: -36px;
    left: 0px;
  }

  form {
    margin-top: 10%;
  }
  .submit {
    width: 120px;
    font-size: 16px;
    border: 2px solid #3e603b;
    padding: 12px;
    color: #3e603b;
    background: transparent;
    margin: auto;
  }
}
@media (max-width: 480px) {
  .main p {
    width: 94%;
    font-size: 12px;
  }
  .main {
    width: 90%;
  }
  .main h1 {
    font-size: 28px;
  }

  input.question,
  textarea.question {
    font-size: 12px;
  }
  input.question:focus + label > span,
  input.question:valid + label > span,
  textarea.question:focus + label > span,
  textarea.question:valid + label > span {
    top: -50px;
    font-size: 12px;
    color: #7d2d3f;
  }

  input.question + label > span,
  textarea.question + label > span {
    font-size: 16px;
    top: -34px;
    left: 0px;
  }

  form {
    margin-top: 10%;
  }
  .submit {
    width: 120px;
    font-size: 16px;
    border: 2px solid #3e603b;
    padding: 12px;
    color: #3e603b;
    background: transparent;
    margin: auto;
  }
}
</style>
