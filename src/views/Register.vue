<template>
    <div>
        <h1>Register</h1>
        <label for="">Username</label>
        <input type="text" class="form-control">
        <label for="">Email</label>
        <input type="text" class="form-control">
        <label for="">Password</label>
        <input type="password" class="form-control">
        <button @click="handlerRegister()" class="btn btn-primary mt-3">Submit</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                user: {
                    username: "",
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            handlerRegister(){
                data = {
                    username: this.user.username,
                    email: this.user.email,
                    password: this.user.password
                }
                axios.post('localhost:8080/api/auth/register',data)
                .then((response)=>{
                    if(response.status == 200){
                        this.$router.push({name:'contactbook'})
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
</script>

<style>
</style>