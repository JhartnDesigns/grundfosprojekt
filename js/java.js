"use strict";

function showLogin() {
  let login = document.getElementById('login');
  login.style.display = "block";

  let next = document.getElementById('next');
  next.style.display = "none";

  let home = document.getElementById('home');
  home.style.display = 'none';
}

function createAcount() {
  let login = document.getElementById('login');
  login.style.display = "none";

  let next = document.getElementById('next');
  next.style.display = "none";

  let home = document.getElementById('home');
  home.style.display = 'block';
}

function nextstep() {
  let login = document.getElementById('login');
  login.style.display = "none";

  let next = document.getElementById('next');
  next.style.display = "block";

  let home = document.getElementById('home');
  home.style.display = 'none';
}

function tilbage() {
  let home = document.getElementById('home');
  home.style.display = 'block';

  let next = document.getElementById('next');
  next.style.display = "none";
}
