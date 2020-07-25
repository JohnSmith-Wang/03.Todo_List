<template>
  <div>
    
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <router-link class="navbar-brand" to="/">Vuex-Todo List</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">簡介<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" active-class="active">
            <router-link class="nav-link" to="/todo">成品</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
  </div>
</template>