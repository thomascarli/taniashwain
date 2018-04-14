$(document).ready(function(){

  var start = true;
  var timers = []
  var fonts = [
    //"blowbrush",
    //"meatloaf",
    //"luna",
    "funsized"
  ]

  var colors = [
    "#F67280",
    // "#C06C84",
    // "#6C5B7B",
    // "#355C7D",
    // "#5AC8D8",
    // "#597FCA",
    // "#2552AC",
    // "#B0757C",
    // "#085F63",
    // "#40A798",
    // "#476268",
    // "#34374C",
    // "#2C2E3E",
    // "#583131"
  ]

  arr = [
    {time:4170.0, word:"When"},
    {time:4460.0, word:"I"},
    {time:4640.0, word:"First"},
    {time:5010.0, word:"Saw"},
    {time:5360.0, word:"You", font: "jiggler", color: "#C06C84"},
    {time:8770.0, word:"I"},
    {time:9140.0, word:"Saw"},
    {time:9430.0, word:"LOVE", font: "wrestle", color: "#6C5B7B"},
    {time:12330.0, word:"And"},
    {time:12460.0, word:"The"},
    {time:12580.0, word:"First"},
    {time:12860.0, word:"Time"},
    {time:13220.0, word:"You"},
    {time:13440.0, word:"TOUCHED", font: "neon"},
    {time:13720.0, word:"ME", font: "jiggler", color: "#5AC8D8"},
    {time:15980.0, word:"I"},
    {time:16320.0, word:"Felt"},
    {time:16670.0, word:"LOVE", font: "moon-flower", color: "#355C7D"},
    {time:18960.0, word:"And"},
    {time:19180.0, word:"After"},
    {time:19370.0, word:"All"},
    {time:19610.0, word:"This"},
    {time:19880.0, word:"TIME", font: "fowler", color: "#2552AC"},
    {time:22460.0, word:"You're"},
    {time:22840.0, word:"Still"},
    {time:23140.0, word:"The"},
    {time:23440.0, word:"One"},
    {time:23600.0, word:"I"},
    {time:23860.0, word:"Love", font: "third-rail", color: "#B0757C"},
    {time:26060.0, word:""},
    {time:29490.0, word:"Looks"},
    {time:29920.0, word:"like"},
    {time:30340.0, word:"we"},
    {time:30510.0, word:"made"},
    {time:30960.0, word:"it"},
    {time:32619.9, word:"Look"},
    {time:32890.0, word:"how"},
    {time:33260.0, word:"far"},
    {time:33930.0, word:"we've"},
    {time:34130.0, word:"come"},
    {time:34800.0, word:"my"},
    {time:35040.0, word:"baby"},
    {time:36450.0, word:"We"},
    {time:36650.0, word:"mighta"},
    {time:37080.0, word:"took"},
    {time:37530.0, word:"the"},
    {time:37760.0, word:"long"},
    {time:38120.0, word:"way"},
    {time:40260.0, word:"We"},
    {time:40550.0, word:"knew"},
    {time:41120.0, word:"we'd"},
    {time:41310.0, word:"get"},
    {time:41810.0, word:"there"},
    {time:42190.0, word:"someday", font: "blowbrush" },
    {time:43750.0, word:"They"},
    {time:44150.0, word:"said"},
    {time:45380.0, word:"I"},
    {time:45800.0, word:"bet"},
    {time:47350.0, word:"they'll"},
    {time:47780.0, word:"never"},
    {time:48530.0, word:"make"},
    {time:49070.0, word:"it"},
    {time:49680.0, word:"But"},
    {time:49970.0, word:"just"},
    {time:50580.0, word:"look"},
    {time:51240.0, word:"at"},
    {time:51870.0, word:"us"},
    {time:52330.0, word:"holding"},
    {time:53760.0, word:"on"},
    {time:56540.0, word:"We're"},
    {time:56850.0, word:"still"},
    {time:57270.0, word:"together"},
    {time:58970.0, word:"still"},
    {time:59370.0, word:"going"},
    {time:60760.0, word:"strong"},
    {time:65129.9, word:"You're"},
    {time:65349.9, word:"still"},
    {time:65560.0, word:"the"},
    {time:65790.0, word:"one"},
    {time:66040.0, word:"I"},
    {time:66510.0, word:"run"},
    {time:67480.0, word:"to"},
    {time:68730.0, word:"The"},
    {time:68940.0, word:"on"},
    {time:69160.0, word:"that"},
    {time:69370.0, word:"I"},
    {time:69610.0, word:"belong"},
    {time:71110.0, word:"to"},
    {time:72280.0, word:"You're"},
    {time:72520.0, word:"still"},
    {time:72760.0, word:"the"},
    {time:72990.0, word:"one"},
    {time:73270.0, word:"I"},
    {time:73630.0, word:"want"},
    {time:74710.0, word:"for"},
    {time:75580.0, word:"life"},
    {time:79540.0, word:"You're"},
    {time:79750.0, word:"still"},
    {time:79930.0, word:"the"},
    {time:80140.0, word:"one"},
    {time:80380.0, word:"that"},
    {time:80830.0, word:"I"},
    {time:81800.0, word:"love"},
    {time:83040.0, word:"The"},
    {time:83240.0, word:"only"},
    {time:83680.0, word:"one"},
    {time:83900.0, word:"I"},
    {time:84430.0, word:"dream"},
    {time:85460.0, word:"of"},
    {time:86620.0, word:"You're"},
    {time:86840.0, word:"still"},
    {time:87060.0, word:"the"},
    {time:87270.0, word:"one"},
    {time:87510.0, word:"I"},
    {time:87970.0, word:"kiss"},
    {time:89010.0, word:"good"},
    {time:89960.0, word:"night"},
    {time:93950.0, word:"Ain't"},
    {time:94450.0, word:"nothin'"},
    {time:95090.0, word:"better"},
    {time:97480.0, word:"We"},
    {time:97780.0, word:"beat"},
    {time:98380.0, word:"the"},
    {time:98680.0, word:"odds"},
    {time:99380.0, word:"together"},
    {time:100920.0, word:"I'm"},
    {time:101060.0, word:"glad"},
    {time:101270.0, word:"we"},
    {time:101590.0, word:"didn't"},
    {time:102310.0, word:"listen"},
    {time:104360.0, word:"Look"},
    {time:104580.0, word:"at"},
    {time:104950.0, word:"what"},
    {time:105720.0, word:"we"},
    {time:105950.0, word:"would"},
    {time:106490.0, word:"be"},
    {time:106880.0, word:"missin'"},
    {time:108240.0, word:"They"},
    {time:108640.0, word:"said"},
    {time:109850.0, word:"I"},
    {time:110330.0, word:"bet"},
    {time:111850.0, word:"they'll"},
    {time:112350.0, word:"never"},
    {time:113040.0, word:"make"},
    {time:113450.0, word:"it"},
    {time:114120.0, word:"But"},
    {time:114380.0, word:"just"},
    {time:114890.0, word:"look"},
    {time:115640.0, word:"at"},
    {time:116310.0, word:"us"},
    {time:116750.0, word:"holdin'"},
    {time:118210.0, word:"on"},
    {time:121060.0, word:"We're"},
    {time:121290.0, word:"still"},
    {time:121740.0, word:"together"},
    {time:123500.0, word:"still"},
    {time:123940.0, word:"goin'"},
    {time:125300.0, word:"strong"},
    {time:129630.0, word:"You're"},
    {time:129860.0, word:"still"},
    {time:130030.0, word:"the"},
    {time:130270.0, word:"one"},
    {time:130520.0, word:"I"},
    {time:131009.9, word:"run"},
    {time:131990.0, word:"to"},
    {time:133180.0, word:"The"},
    {time:133400.0, word:"one"},
    {time:133620.0, word:"that"},
    {time:133840.0, word:"I"},
    {time:134110.0, word:"belong"},
    {time:135560.0, word:"to"},
    {time:136740.0, word:"You're"},
    {time:136960.0, word:"still"},
    {time:137190.0, word:"the"},
    {time:137410.0, word:"one"},
    {time:137730.0, word:"I"},
    {time:138110.0, word:"want"},
    {time:139120.0, word:"for"},
    {time:140050.0, word:"life"},
    {time:143880.0, word:"You're"},
    {time:144110.0, word:"still"},
    {time:144380.0, word:"the"},
    {time:144610.0, word:"one"},
    {time:144870.0, word:"that"},
    {time:145370.0, word:"I"},
    {time:146310.0, word:"love", font: "luna"},
    {time:147480.0, word:"The"},
    {time:147750.0, word:"only"},
    {time:148190.0, word:"one"},
    {time:148480.0, word:"I"},
    {time:148820.0, word:"dream"},
    {time:149930.0, word:"of"},
    {time:151140.0, word:"You're"},
    {time:151350.0, word:"still"},
    {time:151540.0, word:"the"},
    {time:151770.0, word:"one"},
    {time:152010.0, word:"I"},
    {time:152450.0, word:"kiss"},
    {time:153500.0, word:"good"},
    {time:154260.0, word:"night"},
    {time:156670.0, word:"You're"},
    {time:156940.0, word:"still"},
    {time:157410.0, word:"the"},
    {time:157630.0, word:"one"},
    {time:172560.0, word:"You're"},
    {time:172770.0, word:"still"},
    {time:172980.0, word:"the"},
    {time:173190.0, word:"one"},
    {time:173440.0, word:"I"},
    {time:173840.0, word:"run"},
    {time:174920.0, word:"to"},
    {time:176150.0, word:"The"},
    {time:176390.0, word:"one"},
    {time:176610.0, word:"that"},
    {time:176850.0, word:"I"},
    {time:176900.0, word:"belong"},
    {time:178510.0, word:"to"},
    {time:179720.0, word:"You're"},
    {time:179970.0, word:"still"},
    {time:180180.0, word:"the"},
    {time:180410.0, word:"one"},
    {time:180640.0, word:"I"},
    {time:181090.0, word:"want"},
    {time:182090.0, word:"for"},
    {time:183020.0, word:"life"},
    {time:186990.0, word:"You're"},
    {time:187200.0, word:"still"},
    {time:187410.0, word:"the"},
    {time:187630.0, word:"one"},
    {time:187850.0, word:"that"},
    {time:188290.0, word:"I"},
    {time:189310.0, word:"love", font: "luna"},
    {time:190520.0, word:"The"},
    {time:190740.0, word:"only"},
    {time:191210.0, word:"one"},
    {time:191430.0, word:"I"},
    {time:191860.0, word:"dream"},
    {time:192940.0, word:"of"},
    {time:194110.0, word:"You're"},
    {time:194340.0, word:"still"},
    {time:194560.0, word:"the"},
    {time:194780.0, word:"one"},
    {time:195020.0, word:"I"},
    {time:195420.0, word:"kiss"},
    {time:196480.0, word:"good"},
    {time:197190.0, word:"night"},
    {time:201280.0, word:"I'm"},
    {time:201460.0, word:"so"},
    {time:201760.0, word:"glad"},
    {time:202380.0, word:"we"},
    {time:202700.0, word:"made"},
    {time:203120.0, word:"it"},
    {time:204620.0, word:"Look"},
    {time:204880.0, word:"how"},
    {time:205290.0, word:"far"},
    {time:206090.0, word:"we've"},
    {time:206500.0, word:"come"},
    {time:207180.0, word:"my"},
    {time:207820.0, word:"baby"}
  ]

  function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function() {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
  }

  $('.audio-wrapper').click(function() {
    audio = $('#audio-controls')[0];

    if (audio.paused == false) {
      timers.forEach(function(element) {
        element.pause();
      });

      audio.pause();
    } else {
      if(start == true) {
        arr.forEach(function(element, idx) {
          timers[idx] = new Timer(function() {
            $('.main').text(element.word);

            if (element.color) {
              $(".content-wrapper").css("background-color", element.color);
            } else {
              $(".content-wrapper").css("background-color", colors[Math.floor(Math.random() * colors.length)]);
            }

            if (element.font) {
              $(".main").css("font-family", element.font);
            } else {
              $(".main").css("font-family", fonts[Math.floor(Math.random() * fonts.length)]);
            }
          }, element.time);
        });
        $('.audio-wrapper').hide();
        start = false;
      } else {
        timers.forEach(function(element) {
          element.resume();
        });
      }

      audio.play();
    }
  });
});
