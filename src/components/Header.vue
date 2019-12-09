<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
            <a class="navbar-brand" href="/" >Pizza Planet</a>
            <ul class="navbar-nav">
                <router-link :to="{name: 'homeLink'}" tag="li"><a class="nav-link">home</a></router-link>
                <router-link :to="{name: 'menuLink'}" tag='li'><a class="nav-link">menu</a></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    
}

</script>

<style scoped>
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-item{
        padding-left: 5px;
    }
</style>