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
                        <router-link class="nav-link px-4 py-3" to="/language">Used Languages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-4 py-3" to="/intern">Intern Experience</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-4 py-3" to="/portfolio">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-4 py-3" to="/sns">SNS</router-link>
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

