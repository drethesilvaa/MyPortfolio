import { createGlobalStyle } from "styled-components";

export const StyleMyInfo = createGlobalStyle`
.border {
  height: 425px;
  width: 391px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
  border: 0 !important;
}

.border:hover {
  border: 0 !important;
}

.card {
  height: 435px;
  width: 400px;
  background: #808080;
  border-radius: 64% 36% 33% 67% / 44% 50% 50% 56%;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // left: 50%;
  // transform: translateX(-50%);
}

.card0 {
  background-size: 435px;
  background-position: center;
  background-repeat: no-repeat;
}

.card0:hover::before{
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0,0,0,0.25);
}

.card0:hover {
  background-size: 600px;
  background-position: left;
}



.card0:hover h2 {
  opacity: 1;
}

.card0:hover .fa {
  opacity: 1;
}

.skills-bar .bar .progress-line {
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.card0:hover .bar .progress-line span {
  animation: animate 1s 0.5s cubic-bezier(1, 0, 0.5, 1) forwards;
}

h2 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #fff;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
  margin-top: 74px;
}

.fa {
  opacity: 0;
  transition: opacity 1s;
}

.skills {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.skills-bar {
  padding: 0px 12px;
    transform: scale(0.9);
}

.skills-bar .bar {
  margin: 12px 0;
}

.skills-bar .bar .info span {
  font-size: 1rem;
  font-weight: 500;
}

.skills-bar .bar .info {
  margin-bottom: 8px;
  color: #fff;
}

.skills-bar .bar .progress-line {
  position: relative;
  height: 10px;
  width: 290px;
  background: #f0f0f0;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
}

.bar .progress-line span {
  position: absolute;
  background:  ${({ theme }) => theme.myInfoBarColor};
  height: 100%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  text-transfrom: uppercase;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.progress-line .html {
  width: var(--my-var);
}
.progress-line .css {
  width: 70%;
}
.progress-line .bootstrap {
  width: 82%;
}
.progress-line .javascript {
  width: 62%;
}
.progress-line .c {
  width: 90%;
}

.icon {
  position: absolute;
  right: 50px;
  bottom: 45px;
  color: white;
  height: 2em;
  width: 3em;
  transition: transform 0.2s ease 0s;
}

.card0:hover .icon {
  transform: scale(1.2);
}

/* ////........Media Query........//// */

@media (max-width: 700px) {
  .skills {
    width: 80%;
  }

  .skills-bar .bar .progress-line {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .skills {
    width: 80%;
  }

  .skills-bar .bar .progress-line {
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .card0 {
    background-size: 320px;
  }
  .card {
    height: 400px;
    width: 320px;
  }
  .border {
    height: 394px;
    width: 310px;
  }
}

  `;
