<template>
  <section class="vh-100">
    <div class="container py-5">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form @submit.prevent="login">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                id="formLoginLabelEmail"
                class="form-control form-control-lg"
                v-model="register.email"
                required
                autofocus
              />
              <label class="form-label" for="formLoginLabelEmail">Email</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input
                type="password"
                id="formLoginLabelSenha"
                class="form-control form-control-lg"
                v-model="register.password"
                required
              />
              <label class="form-label" for="formLoginLabelSenha">Contraseña</label>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="col-12 btn btn-primary btn-lg btn-block"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "LoginComponent",
  components: {},
  data() {
    return {
      register: {
        email: "",
        password: "",
      },
      error: "",
      data: [],
    };
  },
  methods: {
    
    async login() {
      try {const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        
        {
          email: this.register.email,
          password: this.register.password,}
      );
      console.log(data);



      if (
        data.id 
      ) {
        this.$root.$emit("login", true);
        localStorage.setItem("authOnly", true);
        localStorage.setItem("token", "123456789");
        localStorage.setItem("user", JSON.stringify(data));

        Swal.fire({
          title: "Welcome!",
          text: "User Logged Success",
          icon: "success",
        }).then;
        {
          this.$router.push({ path: "/" });
        }
      }
        
          
      } catch (error) {
        console.log(error);

        Swal.fire({
          title: "OPPS",
          text: "Usuario NO encontrado",
          icon: "warning",
        });
      
      }
        
    },
  },
  props: {
    tipoUsuario: {
      type: String,
      required: true,
    },
  },
};
</script>
