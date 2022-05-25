import { createGlobalStyle } from "styled-components";

export const Stylenavbar = createGlobalStyle`

@media screen and (max-width: 991px) {
  .navbar-collapse {
    position: absolute;
    top: 104px;
    height: 0;
    width: 100vw;
    z-index: 10;
    left: 0;
    background: ${({ theme }) => theme.menuBg};
    transition: height 1s ease;
  }

  .navbar-collapse.show {
    height: 100vh;
  }

  .navbar-nav {
    top: 50%;
    position: relative;
    transform: scale(1.5);
    height: 100%;
  }
}

.navbar-toggler {
  position: relative;
  display: inline-block;
  border: none;
}
.navbar-toggler span {
  margin: 0 auto;
  position: relative;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-dark .navbar-toggler-icon {
  background-image: none;
}
.navbar-toggler span:before,
.navbar-toggler span:after {
  position: absolute;
  content: "";
}
.navbar-toggler span,
.navbar-toggler span:before,
.navbar-toggler span:after {
  width: 22px;
  height: 4px;
  --tw-text-opacity: 1;
  background-color: ${({ theme }) => theme.hamburguerMenuIconColor};
  display: block;
}
.navbar-toggler span:before {
  margin-top: -9px;
}
.navbar-toggler span:after {
  margin-top: 9px;
}

.navbar-toggler span {
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.navbar-toggler:not(.collapsed) span {
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.navbar-toggler span:before {
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
}
.navbar-toggler:not(.collapsed) span:before {
  margin-top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}
.navbar-toggler span:after {
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s, 0s;
  transition-delay: 0.2s, 0s;
}
.navbar-toggler:not(.collapsed) span:after {
  margin-top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition-delay: 0s, 0.2s;
  transition-delay: 0s, 0.2s;
}

.nav-link-animation {
  transition: transform 100ms ease-in-out 15ms;
}
.nav-link-animation:hover {
  transform: translate3d(0px, -8px, 0px);
}

  `;
