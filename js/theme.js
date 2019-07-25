$(function() {
  // Back to top
  $(window).scroll(function() {
    $(window).scrollTop() > 500
      ? $(".to-top").show()
      : $(".to-top").hide();
  });
  $(".to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  // Load comment
  if ($("#comment").length) {
    var gitalk = new Gitalk({
      clientID: "5b1b57676fe4e6a65180",
      clientSecret: "3e7d46e975b1adbc7443b394662dede1e40f907c",
      repo: "smile",
      owner: "lhybaobei",
      admin: ["lhybaobei"],
      id: location.pathname,
      distractionFreeMode: false
    });
    gitalk.render("comment");
  }

  // article-share
  $('.share-box i').click(function() {
    var type = $(this).data('type');
    var title = document.title;
    var encodedUrl = encodeURIComponent(location.href);
    var url;
    if (type === 'weibo') {
      url = '//service.weibo.com/share/share.php?title=' + title + '&url=' + encodedUrl + '&searchPic=true&style=number';
    } else if (type === 'qq') {
      url = '//connect.qq.com/widget/shareqq/index.html?url=' + encodedUrl + '&title=' + title;
    } else if (type === 'douban') {
      url = '//shuo.douban.com/!service/share?href=' + encodedUrl + '&name=' + title;
    } else if (type === 'qzone') {
      url = '//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodedUrl + '&title=' + title;
    }
    if (url) window.open(url);
  });
});
