<template>
  <div class="d-flex justify-content-end">
    <a class="btn bg-primary btn-sm mr-10" @click="home()">Home</a>
    <a class="btn bg-info btn-sm" @click="login()">Login</a>
  </div>
  <div class="container my-5 col-5 p-5 shadow-sm">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="name@example.com"
        v-model="userData.email"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Enter password"
        v-model="userData.password"
      />
    </div>
    <button class="btn bg-info" @click="accountLogin()">Login</button>
    <button class="btn btn-primary" @click="check()">Check</button>
  </div>
</template>

<script src="../../js/loginpage.js"></script>
