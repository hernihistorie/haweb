<script lang="ts">
  const { html } = $props();

  let host: HTMLElement | undefined = $state();

  const shadowContent = (html: string) => `
    <link href="https://inventory.herniarchiv.cz/static/admin/bootstrap/bootstrap2/swatch/default/bootstrap.min.css?v=2.3.2" rel="stylesheet">
    <link href="https://inventory.herniarchiv.cz/static/admin/bootstrap/bootstrap2/css/bootstrap-responsive.css?v=2.3.2" rel="stylesheet">
    <link href="https://inventory.herniarchiv.cz/static/admin/admin/css/bootstrap2/admin.css?v=1.1.1" rel="stylesheet">
    <link href="https://inventory.herniarchiv.cz/static/main.css" rel="StyleSheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://unpkg.com/htmx.org@1.6.0"><\/script>
    <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"><\/script>
    <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
    <style>
      .glyphicon.fa::before { content: ""; }
      .faded { opacity: 0.15; }
      .plain { border: none; background: none; }
      .ha-header { display: none !important; }
      #rhinventory-html { font-size: 80%; }
      #selected { display: none; }
    <\/style>
    <div id="rhinventory-html">${html}</div>
  `;
    let initialized = false;

  $effect(() => {
    const content = shadowContent(html);
    if (!host || !initialized) {
      initialized = true;
      return;
    }
    const shadow = host.shadowRoot ?? host.attachShadow({ mode: 'open' });
    const existing = shadow.getElementById('rhinventory-html');
    if (existing) {
      existing.innerHTML = html; // only swap the content, not the stylesheets
    } else {
      shadow.innerHTML = content; // first time $effect takes over without a shadowRoot
    }
  });
</script>

<div bind:this={host}>
  {@html `<template shadowrootmode="open">${shadowContent(html)}</template>`}
</div>