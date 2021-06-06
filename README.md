# mini-vanilla-pwa

POC of the most simple PWA (Progressive Web App) I can do.

## TODO

- [X] Find out what devices we want to target (https://caniuse.com/)
    - Most recent
- [ ] Create and deploy to prove it can be installed on a device
- [ ] Document how to do it -> Making-of
- [ ] Add subdomain `pwa.baldir.fr`
- [ ] Create virtual host in my VPS
- [ ] Create letsEncrypt certificate for the subdomain `pwa.baldir.fr`

## Installation

## Hosting

## Architecture

- Hosting with https
- Domain

## Making-of (future blog post)

Initial setup

1. Setup a git repository
2. Choose a licence (I chose the https://unlicense.org) - See also https://choosealicense.com/
3. 

### First, what is a PWA?

- A web page
- Native experience (for mobile users also)
- Classic URL
- What devices can support PWA?

### `manifest.json`

- create a `manifest.json` file (for more information follow [the w3c spec][w3c-manifest-spec])
- reference it in a `<link rel="manifest" href="/manifest.json">`
- create an icon for apple ``
- add support for older devices : `<link rel='icon' sizes='192x192' href='icon-192x192.png'>`

### 


[w3c-manifest-spec]:https://w3c.github.io/manifest/