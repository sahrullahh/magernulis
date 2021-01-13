	function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.body-html', true);
  setVisible('.slider', false);
});
    const nama = document.querySelector('#nama');
	const absen = document.querySelector('#absen');
	const kelas = document.querySelector('#kelas');
	const mapel = document.querySelector('#mapel');
	const tanggal = document.querySelector('#tanggal');
	const areanulis = document.querySelector('#areanulis');
	const overlay = document.querySelector('.overlay');
	const save = document.querySelector('#save');
	// // const close = document.querySelector('#close');
	const modal = document.querySelector('.modal');
	const openSettings = document.querySelector('#settings');
	nama.addEventListener("keyup", function () {
		txtName = this.value
	});
	areanulis.addEventListener("keyup", function () {
		txtContent = this.value
		let text = document.getElementById("areanulis").value;   
		let lines = text.split(/\r|\r\n|\n/);
		let count = lines.length;
		console.log(count);
  		// console.log(length);
		document.querySelector("#line-text").innerText = "all line : " + count + ",  all word : " + areanulis.value.length;
		if (areanulis.value.length == 0) {
			setTimeout(function() {
				document.querySelector(".ai-text-count").style.display = "none";
				document.querySelector(".ai-text-count").style.animation = "bounceInRight 0.5s ease-out";
			}, 400);
			document.querySelector(".ai-text-count").style.animation = "bounceOutRight 0.5s ease-out";
		}else{
			document.querySelector(".ai-text-count").style.display = "block";
		}
	});
	absen.addEventListener("keyup", function () {
		txtAbsen = this.value
	});
	kelas.addEventListener("keyup", function () {
		txtKelas = this.value
	});
	mapel.addEventListener("keyup", function () {
		txtMapel = this.value
	});
	tanggal.addEventListener("change", function () {
		txtDate = this.value
	});
  	save.addEventListener("click", function () {
  		setTimeout(function() {
  			overlay.style.display = "none";
  			modal.style.animation = "lightSpeedIn 0.4s ease-out";
  		}, 300);
		modal.style.animation = "bounceOut 0.4s ease-out";
	});
	openSettings.addEventListener("click", function () {
		overlay.style.display = "block";
	});

 let bg, font, margin, gap, fontsize;

    let txtDate = '',
      txtName = '',
      txtKelas = '',
      txtMapel = '',
      txtAbsen = '', 
      txtContent = '';

    let fonts = [{

        'index': 0,
        'name': 'Gloria Hallelujah  (Recommended)',
        'file': 'GloriaHallelujah-Regular.ttf'
      },
      {     
        'index': 1,
        'name': 'HandwritingCR 2',
        'file': 'HandwritingCR-2.ttf'
      },
      {
        'index': 2,
        'name': 'My HandWriting',
        'file': 'My_handwriting.ttf'
      },
      {
        'index': 3,
        'name': 'Shadows Into Light',
        'file': 'ShadowsIntoLight-Regular.ttf'
      },
      {
        'index': 4,
        'name': 'My HandSare Holding you',
        'file': 'MyHandsareHoldingYou.ttf'
      }
    ];

    let getFontIndex = () => {
      let fontIndex = localStorage.getItem('fontIndex');
      if (fontIndex) {
        return fonts[fontIndex];
      }
      return fonts[0];
    }
     let fontSizeIndex = localStorage.getItem('fontSizeIndex');
function setup() { 
 createCanvas(300 * 2, 337 * 2);
      bg = loadImage('img/' + getImageIndex().file);
      font = loadFont('fonts/' + getFontIndex().file);
     

      textFont(font);
      textSize(fontSizeIndex);
 //    const ukuranFont = document.querySelector('#fontsize');
 //   ukuranFont.addEventListener("keyup", function () {
 //   	    fontsize = ukuranFont;

	// });
      

      function myFunction(x) {
  if (x.matches) { // If media query matches
  	 createCanvas(200 * 2, 337 * 2);
  } else {
  
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction);

function fungsi2(b) {
  if (b.matches) { // If media query matches
  	 createCanvas(150 * 2, 337 * 2);
  } else {
  
  }
}

var b = window.matchMedia("(max-width: 425px)");
fungsi2(b) // Call listener function at run time
b.addListener(fungsi2);

  }

    function draw() {
      // fix_dpi();
      background(bg);
      margin = 20;
      fill(0, 0, 0, 200);
      translate(margin - 8, margin * 4);
      text(txtName, 0, -55);
      text(txtAbsen, 0, -35);
      text(txtKelas, 450, -33);
      text(txtMapel, 250, -33);
      text(txtDate, 450, -50);
      translate(0, margin + 5);

      text(txtContent, 0, -25, 580 /*, 800 */ );
}

  document.addEventListener('DOMContentLoaded', (e) => {
      let fontSelectEl = document.getElementById('font');
      let fontSelectOptionTemplate = (index, name) => {
        let _selected = (index == getFontIndex().index) ? 'selected' : '';
        return `<option value="${index}" ${_selected}>${name}</option>`;
      }
      let _temp = '';
      fonts.forEach((font, index) => {
        _temp += fontSelectOptionTemplate(index, font.name);
      });
      fontSelectEl.innerHTML = _temp;
    });
    let image = [{
        'index': 0,
        'names': 'Kertas biasa',
        'file': 'hasil.png'
      },
      {
        'index': 1,
        'names': 'Portofolio',
        'file': 'portfolio.jpg'
      },
    ];
     let getImageIndex = () => {
      let imageIndex = localStorage.getItem('imageIndex');
      if (imageIndex) {
        return image[imageIndex];
      }
      return image[0];
    }
    document.addEventListener('DOMContentLoaded', (e) => {
      let imageSelectEl = document.getElementById('kertas');
      let imageSelectOptionTemplate = (index,names) => {
        let _selected = (index == getImageIndex().index) ? 'selected' : '';
        return `<option value="${index}" ${_selected}>${names}</option>`;
      }
      let _image = '';
      image.forEach((img, index) => {
        _image += imageSelectOptionTemplate(index, img.names);
      });
      imageSelectEl.innerHTML = _image;
    });
    function downloadCanvas(c, filename) {
      /// create an "off-screen" anchor tag
      var lnk = document.createElement('a'),
        e;
      /// the key here is to set the download attribute of the a tag
      lnk.download = filename;
      /// convert canvas content to data-uri for link. When download
      /// attribute is set the content pointed to by link will be
      /// pushed as "download" in HTML5 capable browsers
      lnk.href = c.toDataURL();
      /// create a "fake" click-event to trigger the download
      if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
          0, 0, 0, 0, 0, false, false, false,
          false, 0, null);
        lnk.dispatchEvent(e);
      } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
      }
    }
    function fix_dpi() {
      let canvas = document.getElementById('defaultCanvas0');
      let dpi = window.devicePixelRatio;
      let style = {
        height() {
          return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
        },
        width() {
          return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
        }
      }
      canvas.setAttribute('width', style.width() * dpi);
      canvas.setAttribute('height', style.height() * dpi);
    }

const download = document.querySelector('#download');
download.addEventListener("submit", function () {
	var title = prompt('Beri nama tugas anda, sebelum disimpan?'); 
 if (title === null) {
 	return;
 }else{
 	downloadCanvas(document.getElementById('defaultCanvas0'), title + '.png');
 }
});

// function checkingChar() {
// var checkString = document.formname.txt.value;
// if (checkString != "") {
//     if ( /[^A-Za-z\d]/.test(checkString)) {
//         alert("Please enter only letter and numeric characters");
//         document.formname.txt.focus();
//         return (false);
//     }
// }
// }
// let isBatterySupported = 'getBattery' in navigator;
// if(!isBatterySupported) {
//    console.log("Battery not supported");
//    alert("Battery not supported");
// }
// let batteryPromise = navigator.getBattery();
// batteryPromise.then(batteryCallback);

// function batteryCallback(batteryObject) {
//    printBatteryStatus(batteryObject);
// }
// function printBatteryStatus(batteryObject) {
// 	alert("IsCharging",  batteryObject.charging);
//     console.log("IsCharging", batteryObject.charging);
//     console.log("Percentage", batteryObject.level);
   
//     console.log("charging Time", batteryObject.chargingTime);
//     console.log("DisCharging Time", batteryObject.dischargingTime);
// }