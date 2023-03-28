<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
            <div class="mr-auto navbar-nav">
            <li class="nav-item">
            <router-link :to="{ name: 'contactbook' }" class="nav-link">
            Danh bạ
            <i class="fas fa-address-book"></i>
            </router-link>
            </li>
            <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Login</button>
            
        </div>
    </nav>
</template>