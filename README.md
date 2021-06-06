# mini-vanilla-pwa

POC of the most simple PWA (Progressive Web App) I can do.

## TODO

- [X] Find out what devices we want to target (https://caniuse.com/)
    - Most recent
- [X] Add subdomain `pwa.baldir.fr`
- [X] Create virtual host in my VPS (as a reverse proxy)
- [ ] Create letsEncrypt certificate for the subdomain `pwa.baldir.fr`
- [ ] Check PWA with LightHouse
- [ ] Create and deploy to prove it can be installed on a device
- [ ] Document how to do it -> Making-of
- [ ] 404 error page `404.html`

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

### Create a (sub-)domain

First you must own a domain name.

- `pwa.baldir.fr`
- Create A/AAAA Record for the IP address of your running web server (ex. Apache2, Nginx ... )

### Create a virtual host

Then we need to redirect the (sub-)domain to the correct application in the running server.

- Connect to your server through SSH
- Add a virtualhost to your nginx config

Here is a sample of the Nginx configuration I use.

```
server {
    server_name  pwa.baldir.fr;

    listen 80;

    root   /home/marc/sources/mini-vanilla-pwa;
    index  index.html index.htm;

    location / {
       try_files $uri $uri/ =404;
    }

    error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
```
### Add LetEncrypt SSL certificate with certbot

- Add a CAA record for Linode
    - Name : pwa
    - Tag : issue
    - Value : letsencrypt.org
    
TODO : fix later

### `manifest.json`

- create a `manifest.json` file (for more information follow [the w3c spec][w3c-manifest-spec])
- reference it in a `<link rel="manifest" href="/manifest.json">`
- create an icon for apple ``
- add support for older devices : `<link rel='icon' sizes='192x192' href='icon-192x192.png'>`


Ex. 

```json
{
  "lang": "en",
  "dir": "ltr",
  "name": "Mini vanilla PWA POC",
  "short_name": "mini-vanilla-pwa",
  "scope": "./",
  "icons": [{
    "src": "imgs/icon_144x144.png",
    "sizes": "144x144",
    "type": "image/png"
  },
    {
      "src": "imgs/icon_192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }],
  "display": "standalone",
  "start_url": "./"
}
```

### 


[w3c-manifest-spec]:https://w3c.github.io/manifest/