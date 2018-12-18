<template>
    <nav class="navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link px-4 py-3" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-4 py-3" to="/introduction">Introduction</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4 py-3" href="#">Used Languages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4 py-3" href="#">Intern Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4 py-3" href="#">Portforio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4 py-3" href="#">SNS</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
nav {
    height: 56px;
}
.nav-link:hover {
    background-color: rgba(65,184,131,0.5);
    transition: 0.5s;
}
</style>

