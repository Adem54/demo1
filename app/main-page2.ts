import { EventData, Page, platformNames } from '@nativescript/core'
import { topmost } from '@nativescript/core/ui/frame/frame-common';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  
}

declare var UIBarStyle;

export function onPageLoaded(args:EventData)
{
  let page = args.object as Page;
  //Biz burda IOS platform specific code kullanaagiz cunku, IOS da StatusBar uygulamanini icindedir, Actionbar ile birlikte ama androide oyle degil uygulamadan, actionBar dan tamamen bagimsizdir.Bundan dolayi biz simdi sadece IOS DA calismasini istedgimz kodlarimizi platofrm kontrolu yaparak yazacagiz

  if(platformNames.ios)
  {
    // const navBar = topmost().ios.controller.navigationBar;
    // navBar.barStyle = UIBarStyle.UIBarStyleBlack;
    //UIBarStyle IOS Enum
    //nativescript frame den geliyor
  
    //navBar.barStyle = UIBarStyle.UIBarStyleBlack; bunu kullanirken typescriptten dolayi hata aliyoruz boyle durumlarda, biz member access ile property si kullanilan obje declare ile ust kisimda tanimlarsak o zaman artik sorun yasamayiz...BESTPRACTISE!!!
    //UIBarStyleBlack; BURDA ios icin bu navigationBar(ActionBar), StatusBar degil ve de bu navigationBar ile igligil 2 secenegimiz var..Dark-Light ya da Black-White
    //Eger ActionBar i gizlememis isek veya kaldirmamis isek.... bu gecerlidir....Ama ActionBar olmazsa ne yapacagiz....
    //ActionBar i kaldirinca ios da tekrardan, statusbar color:black olarak geliyor
  
  }
}


//App_Resources nativescript uygulamasi tarafindan yuklenmistir ve IOS klasoru icerisinde info.plist dosyasi vardir. Ios un gorunusu ve davranislari ile ilgili degisiklkl yapmak istersek burda yapabiliyoruz
//Burda key-array-tru-string taglari var dirak olarakkod ekleyecegiz 
//<key></key> sonra value olarak <string></string> sonra da <key></key><false></false>
/*

</array> ve </dict> arasina kodumuzu ekleriz!!!!IOS ICIN
	</array>

	<key>UIStatusBarStyle</key>
	<string>UIStatusBarStyleLightContent</string>

	<key>UIViewControllerBasedStatusBarAppearence</key>
	<false/>	

</dict>
</plist>

EKLEDIKTEN SONRA YENIDEN MANUEL COMPILE ETMEMIZ GEREKIR APPLICATION IMIZI

*/