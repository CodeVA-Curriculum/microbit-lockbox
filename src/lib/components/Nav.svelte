<script>
    import {base} from '$app/paths';
    import CodeVA from '$lib/assets/CodeVALogo.png'
    import Twine from '$lib/assets/microbit.png';
    export let links = [];
    
    let burger = {
        active: false
    }
    function toggleMenu() {
        burger.active = !burger.active;
    }
</script>

<nav class='navbar'>
    <div class='navbar-brand logo'>
        <a class="navbar-item" href="{base}/">
            <img alt="The CodeVA Logo" src="{CodeVA}" height="48">
            <p class='mx-3 heading is-size-5'>+</p>
            <img alt="The Micro:Bit Logo" src="{Twine}" height="48">
            <h1 class='heading is-size-5 ml-5 mt-1 is-hidden-mobile'>Micro:Bit Lockbox</h1>
        </a>
        <button on:click={toggleMenu} role="button" class="navbar-burger {burger.active ? 'is-active' : ''}" aria-label="menu" aria-expanded="{burger.active}" data-target="nav-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>
    <div id='nav-menu' class="navbar-menu {burger.active ? 'is-active' : ''}">
        <div class="navbar-end">
            <a class="navbar-item"
                href='{base}/'
            >
                Home
            </a>
            {#each links as link}
            <a class="navbar-item"
                href={`${base}${link.path}`}
            >
                {link.text}
            </a>
            {/each}
        </div>
    </div>
</nav>