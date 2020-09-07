<template>
    
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

      <span class="navbar-brand">Vuex-Todo List</span>
      <button class="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarArea" 
              aria-controls="navbarArea" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarArea">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>簡介</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todo">成品</router-link>
          </li>
        </ul>
      </div>

    </nav>

</template>