# mySAVIstoryBadge
### An open-source badge to put your mark on every project.
[![Netlify Status](https://api.netlify.com/api/v1/badges/48c5b8fc-bc88-4004-86fc-0275af66de82/deploy-status)](https://app.netlify.com/sites/mysavistory/deploys)

<img src="https://www.savivets.org/wp-content/uploads/2019/03/Premier-Partner.png" width="250" style="
    margin: 5rem auto;
    display: block;
    border: 4px solid black;
    border-radius: 5px;"/>
    
This project is a fork of MakerBadge - customised for #mysavistory

---

# How to use mysavistoryBadge/MakerBadge:
Use it in 2 steps:

## 1. Get your badge:

```html
<!-- Insert makerbadge.js (download or use ☁️cloud version) -->

<!-- Premium badge -->
<script type="text/javascript" src="https://mysavistory.netlify.app/mysavistorybadge_premium.js"></script>
<!-- Trusted badge -->
<script type="text/javascript" src="https://mysavistory.netlify.app/mysavistorybadge_trusted.js"></script>
<!-- Recommended badge -->
<script type="text/javascript" src="https://mysavistory.netlify.app/mysavistorybadge_recommended.js"></script>
<!-- Preferred badge -->
<script type="text/javascript" src="https://mysavistory.netlify.app/mysavistorybadge_preferred.js"></script>

<!-- Initialise MakerBadge with options -->
    
<script>
  mysavistoryBadge.init({
       layout:1, 
       theme:'dark', 
       promoText : 'Send a donation '+String.fromCodePoint(0x2192),
       promoLink : 'https://savivets.org/donate/',
       message : 'Support Our Veterans. My SAVI Story',
       title : '#mySAVIstory',
       imageAlt: "My SAVI Story"
})
</script>
```

## 2. Customise your badge (Beta):

You can customise the values after each colon (e.g. layout:2 - change the 2 to 1)

* layout: a number - 1 (badge with text) or 2 (Round button)
* theme: a string - 'light' or 'dark'.
* promoURL: a string (url) to a donation page.
* message: string - any short message.
* title: string - The title of your badge
* imageAlt: string - Alt text for your image - the default is "My SAVI Story"

---

# Contribute

Proudly an open source project.

Feel free to contribute <a target="_blank" href="https://github.com/chriskonings/maker-badge">here</a>
