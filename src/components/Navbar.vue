<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="col-12">
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/logo.gif" alt=""
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/login"
                >Giriş Yap</router-link
              >
            </li>
            <li class="nav-item mr-5">
              <router-link class="nav-link text-dark" to="/login"
                >Üye Ol</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link btn btn-warning btn-sm text-dark"
                to="/login"
                >Ücretsiz İlan Ver</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
