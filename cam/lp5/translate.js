function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    } else {
        return null;
    }
}

document.write('<style>.goog-te-banner-frame {height:1px;}body {top:0 !important;}</style>');


function googleTranslateElementInit() {
	
	var lang = getQueryString("lang");
	if(!lang){
		lang = "en";
	}
    new google.translate.TranslateElement({
        pageLanguage: lang,
        autoDisplay: true,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

$(window).load(function () {
    var language =(navigator.language || navigator.browserLanguage).toLowerCase();
	
    $('iframe.goog-te-menu-frame').contents().find('a').each(function () {
        var a = $(this);
        if(language.indexOf('zh-tw') >= 0 && $.trim(a.text()).indexOf('中文(繁體)') != -1){
            a[0].click();
        } else if(language.indexOf('zh-hk') >= 0 && $.trim(a.text()).indexOf('中文(繁體)') != -1){
            a[0].click();
        } else if((language.indexOf('zh-cn') >= 0 || language.indexOf('zh') >= 0) && $.trim(a.text()).indexOf('中文(简体)') != -1){
            a[0].click();
        } else if(language.indexOf('en') >= 0 && $.trim(a.text()).indexOf('English') != -1){
            a[0].click();
        } else if(language.indexOf('es') >= 0 && $.trim(a.text()).indexOf('Español') != -1){
            a[0].click();
        } else if(language.indexOf('it') >= 0 && $.trim(a.text()).indexOf('Italiano') != -1){
            a[0].click();
        } else if(language.indexOf('de') >= 0 && $.trim(a.text()).indexOf('Deutsch') != -1){
            a[0].click();
        } else if(language.indexOf('fr') >= 0 && $.trim(a.text()).indexOf('Français') != -1){
            a[0].click();
        } else if(language.indexOf('vi') >= 0 && $.trim(a.text()).indexOf('tiếng việt') != -1){
            a[0].click();
        } else if(language.indexOf('nl') >= 0 && $.trim(a.text()).indexOf('Nederlands') != -1){
            a[0].click();
        } else if(language.indexOf('se') >= 0 && $.trim(a.text()).indexOf('svenska') != -1){
            a[0].click();
        } else if(language.indexOf('fi') >= 0 && $.trim(a.text()).indexOf('suomi') != -1){
            a[0].click();
        } else if(language.indexOf('dk') >= 0 && $.trim(a.text()).indexOf('Dansk') != -1){
            a[0].click();
        } else if(language.indexOf('no') >= 0 && $.trim(a.text()).indexOf('norsk') != -1){
            a[0].click();
        } else if(language.indexOf('my') >= 0 && $.trim(a.text()).indexOf('Melayu') != -1){
            a[0].click();
        } else if(language.indexOf('ko') >= 0 && $.trim(a.text()).indexOf('한국어') != -1){
            a[0].click();
        } else if(language.indexOf('id') >= 0 && $.trim(a.text()).indexOf('Indonesia') != -1){
            a[0].click();
        } else if(language.indexOf('hi') >= 0 && $.trim(a.text()).indexOf('हिन्दी') != -1){
            a[0].click();
        } else if(language.indexOf('ar') >= 0 && $.trim(a.text()).indexOf('العربية') != -1){
            a[0].click();
        }  else if(language.indexOf('ja') >= 0 && $.trim(a.text()).indexOf('日本語') != -1){
            a[0].click();
        }

    });
	
	$('goog-close-link').click();
    $('goog-te-banner-frame').attr("style","height: 0px; display :none;");
    $('body').attr("style","top: 0 !important");
});

document.write('<div style="height:0px;width:0px;display: none;" id="google_translate_element"></div>');

