MakerBadge.prototype = {

  constructor: MakerBadge,

  init: function (settings, callback) {

    //set properties
    if (settings.id) {
      this.userId = settings.id
    }

    if (settings.position) {
      this.position = settings.position
    }

    if (settings.layout) {
      this.layout = settings.layout;
    }
    if (settings.promoText) {
      this.promoText = settings.promoText;
    }
    if (settings.promoLink) {
      this.promoLink = settings.promoLink;
    }
    if (settings.imageAlt) {
      this.imageAlt = settings.imageAlt;
    }

    if (settings.theme) {
      this.theme = settings.theme;
    }

    if (settings.title) {
      this.title = settings.title
    }
    if (settings.message) {
      this.message = settings.message
    }

    if (settings.customHTML) {
      this.customHTML = settings.customHTML
    }


    //only using pic in theme 2
    if (this.layout) {
      if (settings.pic) {
        this.pic = '<img alt="'+(settings.imageAlt ? settings.imageAlt:'My SAVI Story')+'" width="30" style="border-radius:100%" src="' + settings.pic + '"/>&nbsp;&nbsp;'
      }
    }

    this.mounted = true
    //trigger the badge
    //pass callback function for arrow to show after loaded
    this.run(callback)
  },

  run: function (callback) {
    const body = document.querySelector('html');
    const container = document.createElement('div');
    const content = document.createElement('div');
    const button = document.createElement('div');
    const statsList = document.createElement('div');
    const username = document.createElement('div');
    const profileLink = document.createElement('a');
    const twitter = document.createElement('a');
    const makerbadge = document.createElement('a');
    makerbadge.style = "display:block;margin: 0.5rem 0;font-size:10px;color:#718096;text-decoration:none;font-weight:400;"
    makerbadge.innerHTML = "Add this to your website"
    makerbadge.target="_blank"
    makerbadge.href = "https://savivets.org/our-partners"
    //set the style based on theme
    const customHTML = document.createElement('div');
    customHTML.innerHTML = this.customHTML;

    this.setStyle()

    document.getElementsByTagName('head')[0].appendChild(this.style);
    button.innerHTML = 'Maker';
    profileLink.innerHTML = 'P'
    profileLink.target = '_blank';
    profileLink.classList = 'ph-btn';
    container.classList = 'maker-badge';
    button.classList = 'maker-badge__btn';
    content.classList = 'maker-badge__content';
    statsList.classList = 'maker-badge__stats';
    username.style = 'text-align:center;margin:.5rem 0;font-weight:800;'
    button.innerHTML = 'Maker'
    container.appendChild(button);
    container.appendChild(content);

    let containerHeight = 0;
    var that = this
    //@TODO: separate themes out into their own sections
    //var img = 'https://tinify-bucket.s3-us-west-1.amazonaws.com/blm-blue-round.png'
    var img = 'https://www.savivets.org/wp-content/uploads/2019/03/Premier-Partner.png'
    var border = '';
    if(that.theme=='dark'){
      //img = 'https://tinify-bucket.s3-us-west-1.amazonaws.com/blm-blue-round.png'
      img = 'https://www.savivets.org/wp-content/uploads/2019/03/Premier-Partner.png'
    }
    else if(that.theme=='light' ){
      //img = 'https://tinify-bucket.s3-us-west-1.amazonaws.com/blm-white-round.png'
      img = 'https://www.savivets.org/wp-content/uploads/2019/03/Premier-Partner.png'
      if(that.layout==2){
        border = 'border:1px solid #cbd5e0;';
      }
    }
    const userPic = that.pic ? that.pic :img
    const imageAlt = that.imageAlt ? that.imageAlt:'My SAVI Story'
    const userPicSize = that.layout === 2 ? 50 : 30
    const picEl = '<img alt="'+imageAlt+'" style="'+border+'" width="' + userPicSize + '" class="maker-badge__btn-img" src="' + userPic + '"/>&nbsp;&nbsp;'
    const name = that.title ? that.title : '#mySAVIstory'
    // username.innerHTML = '@' + data.user.username;

    if (that.layout === 1) {
      button.innerHTML = picEl + name;
    } else if (that.layout === 2) {
      button.innerHTML = picEl;
    } else {
      button.innerHTML = picEl + name;
    }

    // profileLink.href = data.user.profile_url;
    statsList.innerHTML = ''
    if(that.layout===2){
      content.innerHTML+= '<div style="font-weight:600;font-size:1.125rem;">'+name+'</div>'
    }

    content.innerHTML+='<div style="color:#4a5568;max-width:200px;padding:0.5rem 0px 0;line-height:1.2rem">'+that.message+'</div>'

    statsList.innerHTML+= 
      '<div style="margin-top:0.5rem;"><a style="color:#2B6CB0;text-decoration:underline;font-weight: 600;" target="_blank" href="'+that.promoLink+'">' + that.promoText + '</a>' + '</div>'
    // content.appendChild(profileLink)
    // content.appendChild(username);
    content.appendChild(statsList);
    if (that.twitter) {
      content.appendChild(twitter)
    }
    if (that.customHTML) {
      content.appendChild(customHTML)
    }
    content.appendChild(makerbadge);
    body.appendChild(container);
    containerHeight = container.clientHeight;
    if (that.layout === 2) {
      container.style.bottom = 'calc(-' + containerHeight + 'px + 76px)';
    } else {
      container.style.bottom = 'calc(-' + containerHeight + 'px + 50px)';
    }
    container.classList.add('transition');
    container.style.visibility = 'visible';
    //run callback to say everything has loaded
    if (callback) {
      callback()
    }



    button.addEventListener('click', () => {
      if (container.classList.contains('isOpen')) {
        if (that.layout === 2) {
          container.setAttribute('style', 'visibility:visible;bottom:calc(-' + containerHeight + 'px + 76px)');
        } else {
          container.setAttribute('style', 'visibility:visible;bottom:calc(-' + containerHeight + 'px + 50px)');
        }
        container.classList.remove('isOpen')
      } else {
        container.setAttribute('style', 'visibility:visible;');
        container.classList.add('isOpen')
      }
    })
  },

  setStyle: function () {
    let isOpenStyle = '.isOpen{bottom: 0;}'
    const transitionStyle = '.transition {transition: all .3s ease}'
    this.style = document.createElement('style');
    this.style.type = 'text/css';
    //style 1 (default style)
    if (this.layout === 1) {
      var profileLinkStyle = ".ph-btn{margin: 0 auto;\
          height: 30px; \
          width: 30px; \
          text-align: left; \
          line-height: 30px;\
          background: #da552f;\
          display: block;\
          border-radius: 50%;\
          font-size: 1rem;\
          color: #fff;\
          text-decoration: none;\
          font-weight: 800;}";
      const borderBxStyle = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}'
      const containerStyle = '.maker-badge{z-index:99;max-width:200px;color:#2b2b2b;font-size:16px;font-family:helvetica;text-align:right;height:auto;min-width:160px;position:fixed;bottom:-100%;' + this.position + ':0;border-top-left-radius:6px;}';
      const contentStyle = '.maker-badge__content{text-align:left;font-size:.9rem;border: 1px solid #cbd5e0;padding:.5rem;display:block;background:#fff;height:100%;}'
      const buttonStyle = '.maker-badge__btn{display:flex;align-items:center;height:50px;line-height:50px;padding: 0 .5rem;cursor:pointer;border:1px solid #cbd5e0;border-bottom:0;background:#fff;border-top-left-radius:6px;color:#2d3748;}'
      const statsListStyle = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}'
      const buttonImgStyle = '.maker-badge__btn-img {border-radius: 50%;}'
      this.style.innerHTML = transitionStyle + buttonImgStyle + statsListStyle + borderBxStyle + containerStyle + contentStyle + buttonStyle + profileLinkStyle + isOpenStyle;
    }
    if (this.layout === 2) {
      isOpenStyle = '.isOpen{\
          bottom: 0;}\
          .isOpen .maker-badge__btn {\
            margin-bottom: -20px;\
          z-index: 99;}\
          .isOpen .maker-badge__content{\
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\
          }'
      var profileLinkStyle = ".ph-btn{margin: 0 auto;\
          height: 30px; \
          width: 30px; \
          text-align: left; \
          line-height: 30px;\
          background: #da552f;\
          display: block;\
          border-radius: 50%;\
          font-size: 1rem;\
          color: #fff;\
          text-decoration: none;\
          font-weight: 800;}";
      const borderBxStyle = '.maker-badge, .maker-badge *,.maker-badge *:before,.maker-badge *:after{box-sizing: border-box;}'
      const containerStyle = '.maker-badge{z-index:99;visibility:hidden;color:#2b2b2b;font-size:16px;font-family:helvetica;text-align:' + this.position + ';height:auto;min-width:160px;position:fixed;bottom:-100%;' + this.position + ':0;border-top-left-radius:6px;}';
      const contentStyle = '.maker-badge__content{\
                                position:relative;\
                                text-align:left;\
                                font-size:.9rem;\
                                border: 1px solid #cbd5e0;\
                                padding:1rem;\
                                border-top-left-radius:.5rem;\
                                border-top-right-radius:.5rem;\
                                display:block;\
                                background:#fff;\
                                height:100%;}\
                                .maker-badge__content::before{\
                                content:"";\
                                display: block;\
                                position: absolute;\
                                top: -10px;\
                                ' + this.position + ': 25px;\
                                width: 0;\
                                height: 0;\
                                border-left: 10px solid transparent;\
                                border-right: 10px solid transparent;\
                                border-bottom: 10px solid #fff;';
      const buttonStyle = '.maker-badge__btn{\
                              transition: all .3s ease;\
                              display: inline-flex;\
                              justify-content: right;\
                              align-items: center;\
                              cursor: pointer;\
                              position: relative;\
                              text-align: center;\
                              width: 44px;\
                              height: 44px;\
                              z-index: 99;\
                              margin: 20px 10px;\
                              border-radius: 50%;}\
                              .maker-badge__btn:hover .maker-badge__btn-img {transform:scale(1.1);box-shadow:0px 0px 10px rgba(0,0,0,0.5);}\
                              .isOpen .maker-badge__btn-img {top:15px;}'
      const statsListStyle = '.maker-badge__stats{list-style: none;padding: 0;margin: .3rem 0;} .maker-badge__stats li {margin: .3rem 0}';
      const buttonImgStyle = '.maker-badge__btn-img {\
                                  border-radius: 50%;\
                                  width: 44px;\
                                  position: absolute;\
                                  top: 0;\
                                  right: 0;\
                                  left: 0;\
                                  bottom: 0;\
                                  transition: all .3s ease;\
                                  margin: auto;}'
      this.style.innerHTML = transitionStyle + buttonImgStyle + statsListStyle + borderBxStyle + containerStyle + buttonStyle + profileLinkStyle + isOpenStyle + contentStyle;
    }

  }

}

/** * MakerBadge Constructor */

function MakerBadge(settings) {

  this.userId = ''
  this.position = 'right'
  this.layout = 1
  this.coffee = false
  this.customHTML = ''
  this.mounted = false
  this.imageAlt = ''

  this.theme=''
  this.title = '#mySAVIstory'
  this.message = 'Support Our Veterans. My SAVI Story.'
  this.pic = ''
  this.promoLink = 'https://savivets.org/donate'
  this.promoText = 'Send a donation '+String.fromCodePoint(0x2192)

}

var mysavistoryBadge = new MakerBadge()
