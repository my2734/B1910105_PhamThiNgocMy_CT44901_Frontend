<template>
    <div>
        <h1>Login</h1>
        <label for="">Username</label>
        <input v-model="user.username" type="text" class="form-control">
        <label for="">Password</label>
        <input v-model="user.password" type="password" class="form-control">
        <button @click="handlerLogin()" class="btn btn-primary mt-3">Submit</button>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
            user:{
                username: "",
                password: "",
            }
        }
    },
    methods:{
        handlerLogin(){
            data = {
                username: this.user.username,
                password: this.user.password
            }
            axios.post('localhost:8080/api/auth/login',data)
                .then((response)=>{
                    this.$router.push({name:'contactbook'})
                })
        }
    }
}
</script>

<style>
</style>