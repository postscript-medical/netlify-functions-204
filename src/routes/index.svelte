<script>
  async function handleClick (url) {
    const response = await fetch(url, { method: 'POST' });

    console.log("Response:", response);
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click="{() => handleClick('/api/my-function-200')}">Respond with 200</button>
<button on:click="{() => handleClick('/api/my-function-204')}">Respond with 204</button>