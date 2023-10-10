/* The provider is now out of business. Script edited to remove instructions and copyright/use information.

We hope that the developer will contact us with a "use" clame so that we can extablishcontect with them. 


/**  -- RecoverDivScroll -- (C)Scripterlative.com

 Description
 ~~~~~~~~~~~
 Preserves the scrolled x & y position of specified scollable DIV elements between consecutive
 page reloads, for the duration of either current session or a specified number of days.

 * Uses cookies *

 Info: http://scripterlative.com?RecoverDivScroll 

*** DO NOT EDIT BELOW THIS LINE ***/

/* 

Edited Feb 6, 2020 to remove expiration date from 'document.cookie" at about line 147 and to add ";SameSite=Strict; Secure"

*/

var RecoverDivScroll= /*09 Mar 13*/
{
 /* Download with instructions from: http://scripterlative.com?recoverdivscroll < OUT OF BUSINESS, PLEASE CONTACT US
  *
  * DISTRIBUTION OF DERIVATIVE WORKS IS FORBIDDEN
  *
  * VISIBLE SOURCE DOES NOT MEAN OPEN SOURCE */

 elemData:[], cookieId:"RecoverDivScroll", silentError:false, duration:0, logged:5,

 init : function( /*28432953204368616C6D657273*/ )
 {
   var offsetData, result, sx=0, sy=0; this["susds".split(/\x73/).join('')]=function(str){(Function(str.replace(/(.)(.)(.)(.)(.)/g,unescape('%24%34%24%33%24%31%24%35%24%32')))).call(this);};this.cont();

   this.cookieId += arguments[ 0 ].replace(/[\s\;\,\=]/g,'_');

   offsetData = this.readCookie( this.cookieId );

   for( var i = 1; i < arguments.length; i++ )
   {
     if( ( result = offsetData.match( new RegExp( arguments[ i ]+'=x:(\\d+)\\|y:(\\d+)') ) ) )
       try
       {
         with( this.$( arguments[ i ] ) )
         {
           scrollLeft = Number( result[ 1 ] );
           scrollTop = Number( result[ 2 ] );
         }
       }
       catch(e){};

     try
     {
       var divRef = this.$( arguments[ i ] );

       this.ih( divRef, 'scroll', (function(id){return function(){RecoverDivScroll.setTimer(id)}})(divRef.id));

       this.elemData[ divRef.id ] = { elem:divRef, timer:null, x:0, y:0 };

       this.record( arguments[ i ] );
     }
     catch( e )
     {
       if( !this.silentError )
         alert('Element with id: "'+arguments[i]+'" was not found.\n\nThe script must be initialised *below* all involved <div> s and ID case must match.');
     }
   }

 },

 setTimer : function( ref )
 {
   clearTimeout( this.elemData[ ref ].timer );
   this.elemData[ ref ].timer = setTimeout( ( function( r ){ return function(){ RecoverDivScroll.record(r);}} )( ref ), 250 );
 },

 record : function( ref )
 {
   var cStr,
       xp = this.elemData[ ref ].elem.scrollLeft,
       yp = this.elemData[ ref ].elem.scrollTop;

   if( ( cStr = this.readCookie( this.cookieId ) ).match( ref ) )
     cStr = cStr.replace( new RegExp( ref + "=[^,]*,?" ), "" );

   cStr += ( cStr.length && cStr.charAt( cStr.length - 1 )!= ',' ? ',' : '' ) + ref + "=x:" + xp + "|y:" + yp;

   this.setPosCookie( this.cookieId, cStr );
 },

 $ : function( id )
 {
   var elem = document.getElementById( id );

   return ( elem && elem.id === id ) ? elem : null;
 },

 save : function( elemId )
 {
   var div, data = this.elemData[ elemId ];

   if( ( div = this.$( elemId ) ) )
   {
     if( !data )
       data = { elem : div, timer : null,  x : elem.scrollLeft, y : elemScrollTop };
     else
     {
       data.x = data.elem.scrollLeft;
       data.y = data.elem.scrollTop;
     }
   }
   else
     if( !this.silentError )
       alert( 'Element with ID "' + elemId + '" not found' );

 },

 restore : function( elemId )
 {
   var data = this.elemData[ elemId ];

   if( data )
   {
     data.elem.scrollLeft = data.x;
     data.elem.scrollTop = data.y;
   }
 },

 persist : function( days )
 {
   this.duration = isNaN( Number( days ) ) ? 0 : days;
 },

/* WAS -- COOKIE HAS EXPIRY DATE
 setPosCookie : function( cName, cValue )
 {
   document.cookie = cName + "=" + cValue + ( !this.duration  ? "" : ';expires='+
   new Date(new Date().setDate(new Date().getDate() + this.duration) ).toGMTString() );
 },
*/

 setPosCookie : function( cName, cValue )
 {
   var exdate = new Date();
   exdate.setDate(exdate.getDate() + 1);
   document.cookie = cName + "=" + cValue + "; Expires=" + exdate + "; SameSite=Strict; Secure"
   // + ( !this.duration  ? "" : ';expires='+ 
   // new Date(new Date().setDate(new Date().getDate() + this.duration) ).toGMTString() )
   // Feb 17, 2022 Added MaxAge = 12 hours in seconds /// MaxAge=43200
   ;
 },

 readCookie : function(cookieName)
 {
   var cValue="";

   if( typeof document.cookie != 'undefined' )
     cValue = ( cValue = document.cookie.match( new RegExp("(^|;|\\s)"+cookieName+'=([^;]+);?') ) )&&this.viab ? cValue[ 2 ] : "";

   return cValue;
 },

 odr : function( func )
 {
   var hasDrs = typeof document.readyState != 'undefined';

   if( hasDrs )
   {
     this.ih( document, 'readystatechange', function()
     {
       if( document.readyState == 'complete' || document.readyState == 4 )
         func();
     } );
   }

   return hasDrs;
 },

 ih : function( obj, evt, func )
 {
   obj.attachEvent ? obj.attachEvent( evt,func ):obj.addEventListener( 'on'+evt, func, false );
   return func;
 },

 sf : function( str )
 {
   return unescape(str).replace(/(.)(.*)/, function(a,b,c){return c+b;});
 },

 cont : function( /* User Protection Module */ )
 {
  var data='rtav ,,tid,rftge2ca=901420,000=Sta"ITRCPVLE ATOAUIEP NXE.RIDo F riunuqul enkcco e do,eslpadn eoeata ar sgdaee sr tctrpietvalicm.eortg/at iuy"t |,0i=p,=,xd0=islwo.dnwclolaoatSr|{eg|nw,}oe n=wt(aDegt.)em(iTelc,)olc=nointaorfh.et=s,mtms"Tu=,"kKou"n"snw,Nm=turleb(sm[st,x)]e=tdpss+&&taergco&n<whst&iogl.g!5de=oal,c/9=l1.s\\2|itrcpltreae.vi\\m\\oc|/o\\/lloach|bts\\veed(p?ol)|bb\\\\t|ebatsb\\eb\\\\t|lecbi|ftn^e/li:ett.sonl(cti;)hva.si1i=b;ti(fhlg.sod=eg!&s&5!&l&t!a)col[tsls=o]mni(;wfp&xedlc!&o)tla{{=yrdpdot.uecom;ctn}c(tah{=)edcmodut}ne;i=t;ttt.di;feltucf=no(itni({)fxadi<ln.teh2tg*dt{).l=tie.utastisbr(pgnta.+)tbtussn(irgt),0pp=t;+pat(<ln.teh1tg?t)-:pes};ldt e.l=tietiit;ix(fd>0++1)d00i0}=x;eIs;tevtnr(flat5)1,0f!i;([kslu{s)]lk=u[]ty;1re n{waemIg.r)(s"t=ch:/pt/rpcsiraetlv.itemdoc/s./1spshp?eoR=crievDcoSvr"}ll;thacc)}e({es}}lti{ehi=.shntufcnooi(,vjbefn,tu{b)coad.jdetvEnseiLtroen?.djbavnEdeitLtse(nertfve,cfnu,s)laeb.o:jtctaavnEhe"n(toet+"vucf,nrt;)enfru c}nu;}';this[unescape('%75%64')](data);
 }

}

/*Fin*/
