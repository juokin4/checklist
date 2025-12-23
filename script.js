// -----------------------------
// CHECKLIST VERİSİ BAŞLANGICI
// -----------------------------

const checklists = {

        "Anlaşmalı Boşanma Davası": [
        "1. Boşanma iradesinin net ve kesin olup olmadığı",
        "2. Mal Rejimi Tasfiyesi hakkındaki kararların açıkça belirlenmesi",
        "3. Ortak Çocuklar için Velayet düzenlemesi (tek/ortak velayet)",
        "4. İştirak Nafakası (çocuk için) miktarı ve ödeme şekli",
        "5. Yoksulluk Nafakası (eş için) miktarı ve ödeme şekli",
        "6. Maddi ve Manevi Tazminat taleplerinden feragat veya miktarın belirlenmesi",
        "7. Ziynet eşyası, ev eşyası gibi hususlardaki anlaşmanın eklenmesi",
        "8. Protokolün taraflarca serbest irade ile imzalandığının beyanı"
    ],
    "Tapu İptali ve Tescil Davası": [
        "1. Geçersizliğe sebep olan hukuki nedenin belirlenmesi (muris muvazaası, vekalet görevinin kötüye kullanılması vb.)",
        "2. Davalı Tarafın tapu kaydındaki mevcut malik olup olmadığı",
        "3. Tapu kaydının delil olarak dosyaya eklenmesi (güncel tarihli)",
        "4. Dava değerinin (taşınmazın değeri) doğru hesaplanması ve harcın yatırılması",
        "5. Taşınmazın güncel tapu ve imar durumunun kontrolü"
    ],
    "İşçi Alacağı Davası (Kıdem, İhbar, Fazla Mesai)": [
        "1. İş sözleşmesinin türünün ve sona erme şeklinin (haklı/haksız fesih) tespiti",
        "2. Fesih tarihi ve çalışma süresinin netleştirilmesi (Kıdem Tazminatı için)",
        "3. İhbar Süresi tespiti ve İhbar Tazminatı talebinin uygunluğu",
        "4. Çalışma saatlerine ilişkin kayıtların ve tanık beyanlarının toplanması (Fazla Mesai/UBGT)",
        "5. İbraname/Hizmet Sözleşmesi varsa geçerliliğinin kontrolü",
        "6. Zorunlu arabuluculuk sürecinin tamamlandığına dair son tutanağın temini"
    ],
    "Kira Tahliyesi Davası (İhtiyaç Nedeniyle)": [
        "1. Tahliye taahhüdü varsa, tanzim tarihinin kira sözleşmesinden sonra olup olmadığı",
        "2. Tahliye talebinin dayanağı olan ihtiyacın 'samimi, zorunlu ve sürekli' olup olmadığının tespiti",
        "3. İhtiyaç sahibinin (malik/iştirakçi) ve kiracının kimlik tespiti",
        "4. Kira sözleşmesinin bir örneğinin dosyaya eklenmesi",
        "5. Dava açma süresinin (sözleşme süresinin bitiminden itibaren 1 ay) kontrolü"
    ],
    "Trafik Kazasından Kaynaklanan Tazminat Davası": [
        "1. Kaza Tespit Tutanağının ve varsa Bilirkişi Raporunun temini",
        "2. Kusur oranlarının netleştirilmesi",
        "3. Maddi ve Manevi Zarar kalemlerinin (tedavi, iş gücü kaybı vb.) hesaplanması",
        "4. Sorumlu tarafların (sürücü, malik, sigorta şirketi) hepsinin davalı gösterilmesi",
        "5. Zamanaşımı süresinin kontrolü (Hukukta 2 yıl, Cezada uzun süre)"
    ],
    "İcra Takibine İtirazın İptali Davası": [
        "1. İcra takibinin (ödeme emri) ve borca itirazın tebliğ tarihinin kontrolü",
        "2. İtirazın İptali davası açma süresinin kontrolü (itirazın tebliği tarihinden itibaren 1 yıl)",
        "3. Takibe konu alacağın varlığını gösteren delillerin (fatura, senet, sözleşme) eksiksiz temini",
        "4. Alacağın likit (belirli) olup olmadığının tespiti",
        "5. %20'den aşağı olmamak kaydıyla inkar tazminatı talebinin değerlendirilmesi"
    ],
    "Maddi ve Manevi Tazminat Davası (Haksız Fiil)": [
        "1. Haksız fiilin (eylemin) tespit edilmesi ve ispatı",
        "2. Zarar görenin zararının miktarının belirlenmesi (Maddi Zarar)",
        "3. Manevi zarar için kişilik hakkı ihlalinin şiddetinin değerlendirilmesi",
        "4. Nedensellik bağının (fiil ile zarar arasındaki illiyet) kurulması",
        "5. Zamanaşımı süresinin kontrolü (öğrenmeden itibaren 2 yıl, her halde 10 yıl)"
    ],
    "İdare Mahkemesinde İptal Davası": [
        "1. Dava konusu işlemin (idarî kararın) yürütülmesinin durdurulması talebinin gerekçelendirilmesi",
        "2. İşlemin tebliğ tarihinin netleştirilmesi",
        "3. Dava açma süresinin kontrolü (tebliğden itibaren genellikle 60 gün)",
        "4. İdarî işlemin hukuka aykırılık gerekçesinin (sebep, konu, yetki, şekil, maksat) belirlenmesi",
        "5. İdari merci tecavüzü (ön karar başvurusu) yapılıp yapılmadığının kontrolü"
    ],
    "Önalım (Şufa) Davası": [
        "1. Taşınmazın tapu kaydında paylı mülkiyetin olup olmadığı",
        "2. Payın üçüncü kişiye satıldığı tarihin tespiti (Şufa hakkının doğumu)",
        "3. Dava açma süresinin kontrolü (satışın ilgiliye bildirimi/öğrenmeden itibaren 3 ay ve her halde 2 yıl)",
        "4. Tapuda gösterilen satış bedeli ile gerçek satış bedelinin tespiti (gerçek bedel üzerinden tescil)",
        "5. Dava değeri üzerinden önalım bedelinin peşin olarak mahkeme veznesine yatırılması (Teminat)"
    ],
    "Mirasçılık Belgesinin İptali Davası": [
        "1. İptali istenen mevcut Mirasçılık Belgesinin (Veraset İlamı) dosya sunulması",
        "2. Mirasbırakanın (muris) doğru künyesinin ve ölüm tarihinin netleştirilmesi",
        "3. Mirasçıların doğru ve eksiksiz olarak belirlenmesi",
        "4. Mirasçılar arasında evlatlık, tanıma, gaiplik gibi özel durumların olup olmadığı",
        "5. Nüfus kayıtlarının (alt ve üst soy) güncel tarihli olarak dosyaya eklenmesi"
    ],
    "İş Kazası Tespit Davası": [
        "1. Kazanın meydana geldiği tarihin tespiti ve SGK'ya bildirim yapılıp yapılmadığı",
        "2. İşçi ile işveren arasındaki hukuki ilişkinin (hizmet akdi) varlığının ispatı",
        "3. Kazanın iş yerinde veya işverenin talimatıyla gerçekleştiğinin tespiti",
        "4. Sigortalılık süresi ve prim gün sayılarının kontrolü",
        "5. Maluliyet oranının tespiti için Adli Tıp Kurumu (ATK) raporunun beklenilmesi"
    ],
    "Nafaka Artırım/Azaltım Davası": [
        "1. Mevcut nafaka miktarını belirleyen mahkeme kararının temini",
        "2. Tarafların mali ve sosyal durumlarındaki **esaslı değişikliklerin** ispatı",
        "3. Çocuğun/nafaka alacaklısının artan ihtiyaçlarının belgelenmesi (Artırım için)",
        "4. Nafaka yükümlüsünün gelir kaybının/yeni yükümlülüklerinin belgelenmesi (Azaltım için)",
        "5. Davanın açıldığı tarihe göre, nafakaya uygulanan güncel **TÜİK ÜFE** oranlarının değerlendirilmesi"
    ],
    "Men'i Müdahale ve Ecri Misil Davası": [
        "1. Taşınmaz üzerindeki hak sahipliğinin (malik, iştirakçi) tespiti",
        "2. Davalının taşınmaza **haksız müdahalesinin** niteliğinin (işgal, kullanma) belirlenmesi",
        "3. Ecri Misil (Haksız işgal tazminatı) talebi için geriye dönük 5 yıllık zamanaşımı kontrolü",
        "4. Haksız işgalin başlangıç ve bitiş tarihlerinin netleştirilmesi",
        "5. Taşınmazın **kira bedelinin** belirlenmesi için keşif ve bilirkişi talebinin yapılması"
    ],
    "Çekişmeli Boşanma Davası": [
        "1. Evlilik birliğinin temelden sarsıldığını gösteren kusurlu davranışların (şiddet, aldatma vb.) listelenmesi",
        "2. Kusurlu davranışlara ilişkin delillerin (tanık, mesaj, fotoğraf vb.) toplanması",
        "3. Maddi ve Manevi Tazminat taleplerinin **kusur oranlarına** göre belirlenmesi",
        "4. **Geçici tedbir** taleplerinin (nafaka, velayet) belirlenmesi ve dilekçeye eklenmesi",
        "5. Tarafların ekonomik ve sosyal durum araştırma taleplerinin hazırlanması"
    ],
    "Sözleşmenin İptali/Geçersizliği Davası": [
        "1. İptali istenen sözleşmenin bir örneğinin temini",
        "2. İptal/Geçersizlik nedeninin belirlenmesi (hata, hile, ikrah, gabin, şekil eksikliği)",
        "3. Sözleşmenin ifa edilip edilmediği veya ne kadarının ifa edildiği",
        "4. İptal hakkının kullanılması için öngörülen hak düşürücü sürenin (genellikle 1 yıl) kontrolü",
        "5. Karşı tarafın sebepsiz zenginleşme hükümlerine göre iade borcunun belirlenmesi"
    ],
    "Ticari Defterlerin İbrazı ve Tespiti Davası": [
        "1. Davalının tacir statüsünde olup olmadığının kontrolü",
        "2. İbrazı istenen defter/belgenin hukuki uyuşmazlığın çözümü için **zorunlu** olup olmadığı",
        "3. İbraz talebinin dayanağı olan hukuki ilişkinin (ortaklık, ticari işlem) belirlenmesi",
        "4. İbraz talebinin **Hukuk Muhakemeleri Kanunu (HMK)** hükümlerine uygunluğunun denetimi",
        "5. Mahkemece verilen süreye rağmen defter ibraz edilmezse, defter içeriğinin davacı lehine oluşacağına dair talebin hazırlanması"
    ],
    "Kamulaştırmasız El Atma Tazminat Davası": [
        "1. Taşınmazın kamulaştırılmadan el konulduğunun (fiili veya hukuki el atma) tespiti",
        "2. El atmanın gerçekleştiği tarihin belirlenmesi",
        "3. Taşınmazın el atılan kısmının yüz ölçümü ve sınırlarının belirlenmesi",
        "4. Dava açılmadan önce idareye uzlaşma başvurusu yapılıp yapılmadığının kontrolü",
        "5. Taşınmazın dava tarihindeki **güncel değerinin** tespiti için keşif ve bilirkişi talebinin yapılması"
    ],
    "Tüketici Sözleşmesinden Kaynaklanan Davalar": [
        "1. Davacının **tüketici**, davalının **satıcı/sağlayıcı** olduğunun ispatı",
        "2. Uyuşmazlık konusunun (ayıplı mal/hizmet, haksız şart) belirlenmesi",
        "3. Ayıp bildiriminin süresinde (teslimden itibaren 6 ay/2 yıl) yapılıp yapılmadığı",
        "4. Tüketici Hakem Heyeti veya Tüketici Mahkemesi görev/yetki alanının kontrolü",
        "5. Zorunlu arabuluculuk sürecinin tamamlandığına dair son tutanağın temini"
    ],
    "Ortaklığın Giderilmesi (İzale-i Şüyu) Davası": [
        "1. Ortak mülkiyete (paylı veya elbirliği) konu taşınmazın tapu kaydının temini",
        "2. Tüm paydaşların (ortakların) davaya dahil edildiği (zorunlu dava arkadaşlığı) kontrolü",
        "3. Satış yoluyla mı yoksa taksim (bölünme) yoluyla mı giderim istendiği",
        "4. Taşınmazın taksiminin hukuken (imar durumu, yüz ölçümü) mümkün olup olmadığı",
        "5. Satış kararı verilmesi halinde, satışın ne şekilde (açık artırma/ortaklar arası artırma) yapılacağı talebinin belirlenmesi",
	"6. Bekletici mesele yapılacak şeylerin olup olmadığının kontrolü (aşağıda sayılanlar bekletici meselelerdir)",
	"7. Mülkiyet uyuşmazlığının bulunup bulunmadığının tespiti",
	"8. Ad soyad düzeltim davasının bulunup bulunmadığının tespiti",
	"9. Muhdesatın aidiyeti davasının bulunup bulunmadığının tespiti",
	"10. Veraset ilamının iptali davasının bulunup bulunmadığının tespiti",
	"11. Menfi tespit davasının bulunup bulunmadığının tespiti",
	"12. Terekenin tespiti davasının bulunup bulunmadığının tespiti",
	"13. Tapu iptal ve tescil davasının bulunup bulunmadığının tespiti (Miras terekesinin ifasına yönelik olarak)",
	"14. Vasiyetnamenin tenfizi bulunup bulunmadığının tespiti",
	"15. Tapuda sınır düzeltimi iddiasının bulunup bulunmadığının tespiti",	
	"16. İcranın geri bırakılması kararının bulunup bulunmadığının tespiti",
	"17. Elbirliği mülkiyetinin paylı mülkiyete çevrilmesi davasının bulunup bulunmadığının tespiti",
	"18. Mirasçılık belgelerinin arasında çelişki bulunup bulunmadığının tespiti",
	"19. Paydaşlıktan çıkarma davasının bulunup bulunmadığının tespiti",
	"20. Tapu kayıtlarında çelişkinin bulunup bulunmadığının tespiti"
	
    ],
    "Vergi Mahkemesinde Tarhiyatın İptali Davası": [
        "1. İptali istenen vergi/ceza ihbarnamesinin temini",
        "2. İhbarnamenin tebliğ tarihinin netleştirilmesi",
        "3. Dava açma süresinin kontrolü (**tebliğden itibaren 30 gün** hak düşürücü süre)",
        "4. Vergi hatası veya vergi cezasının hukuka aykırılık nedenlerinin (sebep, yetki, usul) belirlenmesi",
        "5. **Yürütmenin Durdurulması** talebinin gerekçelendirilmesi (telafisi güç zarar ve hukuka aykırılık)"
    ],
    "İflas Davası (İcra Mahkemesi)": [
        "1. Davacı/Alacaklının ve borçlunun tacir statüsünde olup olmadığı",
        "2. Borçlu aleyhine başlatılan takibin türü (genel haciz/kambiyo) ve semeresiz kalıp kalmadığı",
        "3. Borçlunun ödemelerini tatil ettiğine dair somut delillerin temini",
        "4. İflas talebine dayanak olan alacağın varlığının ispatı",
        "5. İflas talebinde bulunan alacaklı sayısı (toplu talep veya tek talep)"
    ],
    "Haksız Tutuklama Tazminat Davası": [
        "1. Beraat veya takipsizlik kararı ile tutukluluk halinin hukuka aykırı olduğunun kesinleşmesi",
        "2. Kararın kesinleşme tarihinin tespiti",
        "3. Tazminat davası açma süresinin kontrolü (**kesinleşmeden itibaren 3 ay** ve her halde 1 yıl)",
        "4. Tutukluluk süresinin ve bu süre zarfındaki maddi kayıpların (gelir kaybı) belgelenmesi",
        "5. Manevi zarar talebinin gerekçelendirilmesi"
    ],
    "Vasi Tayini Davası": [
        "1. Vasi atanması talep edilen kişinin (vesayet altındaki) tam kimlik ve adres tespiti",
        "2. Vesayeti gerektiren nedenin (akıl hastalığı, savurganlık, yaşlılık vb.) somut delillerle ispatı",
        "3. Vasi adayının belirlenmesi ve vasilik görevini kabul edip etmediği",
        "4. Vesayet altındaki kişinin mal varlığı ve gelir durumu hakkında bilgi toplanması",
        "5. Mahkemece verilen **sağlık kurulu raporu** için gerekli işlemlerin yapılması"
    ],
    "İtirazın Kaldırılması Davası (İİK m. 68/68a)": [
        "1. Takibe konu alacağın İİK'nın aradığı nitelikte (ilamlı, imzası ikrar edilmiş adi senet, fatura vb.) olup olmadığı",
        "2. İcra takibinin tebliğ ve borca itiraz tarihlerinin netleştirilmesi",
        "3. İtirazın kaldırılması süresinin kontrolü (itirazın tebliği tarihinden itibaren 6 ay)",
        "4. Borçlunun itirazının nedeninin alacağın tamamına mı yoksa bir kısmına mı olduğu",
        "5. Gecikme tazminatı ve/veya icra inkar tazminatı talebinin hazırlanması"
    ],
    "Hisse Senedi İptali ve Tescili Davası (TTK)": [
        "1. İptali istenen hisse senedinin seri ve numaralarının tespiti",
        "2. Kayıp veya zayi durumunun tespiti ve bunu gösterir belgelerin temini (Karar/Tutanak)",
        "3. Şirketin ticaret sicil kayıtlarının kontrolü",
        "4. İptal talebinin TTK'da öngörülen hak düşürücü süreler içinde yapılıp yapılmadığı",
        "5. Senedin hamili bilinmiyorsa ilanların usulüne uygun yapılması"
    ],
    "Kira Bedelinin Tespiti Davası": [
        "1. Kira sözleşmesinin bir örneğinin temini ve başlangıç tarihinin belirlenmesi",
        "2. Dava açma süresinin kontrolü (kira döneminin bitiminden önceki 30 gün içinde/yeni dönemde)",
        "3. Talep edilen yeni kira bedelinin hakkaniyete uygunluğunun gerekçelendirilmesi",
        "4. Tarafların mali durumları ve emsal kira bedelleri araştırması için delil listesi hazırlanması",
        "5. **Beş yıldan uzun süreli** sözleşme olup olmadığı (HMK m. 344) kontrolü"
    ],
    "Ayıplı Mal Davası (Tüketici)": [
        "1. Ayıplı malın ne zaman teslim edildiği ve ayıp bildirimi tarihi",
        "2. Tüketicinin seçimlik haklarından (bedel iadesi, misli değişim, onarım, indirim) hangisini kullandığı",
        "3. Ayıbın gizli mi yoksa açık mı olduğu",
        "4. Ayıbın gerçekten malın **kullanım amacına** aykırı olup olmadığının ispatı",
        "5. Tüketici Hakem Heyeti veya Mahkemesi görev/yetki alanının kontrolü ve zorunlu arabuluculuk"
    ],
    "Tapu Kaydının Tashihi (Düzeltilmesi) Davası": [
        "1. Düzeltme istenen tapu kaydındaki yanlışlığın türü (isim, yüz ölçümü, cins tashihi vb.)",
        "2. Tapu kaydındaki yanlışlığın maddi hatadan kaynaklandığının tespiti",
        "3. Düzeltme talebinin dayanağı olan resmi belgelerin (nüfus kaydı, mahkeme kararı) temini",
        "4. Davada tapu malikleri ile hazinenin davalı gösterilip gösterilmediği",
        "5. Eski tapu kayıtlarının (müstenidat) incelenmesi"
    ],
    "Borçtan Kurtulma (Menfi Tespit) Davası": [
        "1. Davalının (alacaklı) başlattığı icra takibinin (varsa) veya borcun dayanağının belirlenmesi",
        "2. Borcun var olmadığına dair somut delillerin (ödeme makbuzu, ibraname) temini",
        "3. **%15'ten az olmamak üzere teminat** yatırılıp yatırılmayacağı hususunun değerlendirilmesi",
        "4. Yüzdelik teminat karşılığında İcra Takibinin Durdurulması talebinin hazırlanması",
        "5. Borcun zamanaşımına uğrayıp uğramadığının kontrolü"
    ],
    "Şirket Ortaklıktan Çıkarma Davası": [
        "1. Ortağın çıkarma nedeni (TTK'da sayılan haklı sebepler) ve somut delillerinin belirlenmesi",
        "2. Çıkarma kararının **genel kurul kararıyla** alınıp almadığı ve usul kontrolü",
        "3. Çıkarılmak istenen ortağa ait payın değerinin belirlenmesi (Değerleme Tarihi)",
        "4. Ortağın pay bedelini ne zaman ve nasıl ödeme taahhüdünde bulunulduğu",
        "5. Şirket esas sözleşmesindeki çıkarma hükümlerinin kontrolü"
    ],
    "Uzaklaştırma Kararına İtiraz (6284 Sayılı Kanun)": [
        "1. Verilen koruyucu/önleyici tedbir kararının (uzaklaştırma) bir örneğinin temini",
        "2. Kararın tebliğ tarihinin tespiti",
        "3. İtiraz süresinin kontrolü (tefhim/tebliğden itibaren **2 hafta**)",
        "4. Şiddet tehdidi, hakaret veya kötü muamele iddialarına karşı somut delillerin toplanması",
        "5. Uzaklaştırma kararının hukuka aykırılık nedenlerinin (gerçeğe aykırılık vb.) gerekçelendirilmesi"
    ],
    "Çek Tazminat Davası (Karşılıksız Çek)": [
        "1. Karşılıksız çıkan çekin aslı ve arkasındaki karşılıksız kaşesinin temini",
        "2. Çekin ibraz ve karşılıksız kaşeleme tarihlerinin tespiti",
        "3. Çek ile ilgili icra takibi başlatılıp başlatılmadığı",
        "4. Zamanaşımı süresinin (genellikle 6 ay) kontrolü",
        "5. **Tazminat miktarının** (karşılıksız kalan miktar + yasal faiz/tazminat) doğru hesaplanması"
    ],
    "Telifsiz Kullanım Tazminat Davası (Fikri ve Sınai Haklar)": [
        "1. Eserin/markanın/tasarımın kime ait olduğunun tespiti (Tescil Belgesi, Kayıt)",
        "2. Davalı tarafından hakkın hangi tarihte ve ne şekilde ihlal edildiğinin tespiti (Somut deliller)",
        "3. İhlalin sona erdirilmesi talebi (Men'i tecavüz)",
        "4. Maddi tazminatın (kullanım bedeli veya kar kaybı) hesaplanması yöntemi",
        "5. Manevi tazminat ve/veya itibar tazminatı taleplerinin gerekçelendirilmesi"
    ],
    "Mal Rejiminin Tasfiyesi Davası": [
        "1. Boşanma davasının kesinleşme tarihinin tespiti (Mal Rejiminin Sona Erme Anı)",
        "2. Edinsel Malların (edinilmiş mallara katılma rejimi) listelenmesi",
        "3. Kişisel Malların (edinilmiş mal sayılmayanlar) tespiti ve ispatı",
        "4. Mal rejimine tabi malların **tasfiye tarihindeki** değerlerinin belirlenmesi",
        "5. Değer artış payı ve katılma alacağı taleplerinin doğru hesaplanması"
    ],
    "Ceza Davasında Şikayetten Vazgeçme": [
        "1. Vazgeçmenin hangi suç türü için yapıldığı (Şikayete tabi suç mu?)",
        "2. Vazgeçmenin sanık/hükümlü hakkındaki sonuçlarının (düşme/kaldırılma) netleştirilmesi",
        "3. Vazgeçme beyanının mahkemeye veya Cumhuriyet Başsavcılığına usulüne uygun sunulması",
        "4. Birden fazla sanık varsa, vazgeçmenin hangi sanıklar için geçerli olacağının belirtilmesi",
        "5. Kamu davasına müdahillik sıfatı varsa, bu sıfatın kaldırılması talebinin eklenmesi"
    ],
    "İdare Mahkemesinde Tam Yargı Davası": [
        "1. Zarara neden olan idari eylem veya işlemin tespiti",
        "2. İdari eylem/işlem ile zarar arasındaki **nedensellik bağının** ispatı",
        "3. Maddi ve manevi zarar kalemlerinin ve miktarlarının belirlenmesi",
        "4. Dava açılmadan önce idareye **başvuru** yapılıp yapılmadığının (ön karar) kontrolü",
        "5. Başvurunun reddi veya zımni reddi tarihinin tespiti ve dava açma süresinin (60 gün) kontrolü"
    ],
    "Hizmet Tespit Davası (SGK)": [
        "1. Sigortasız çalışılan dönemin başlangıç ve bitiş tarihlerinin belirlenmesi",
        "2. İş yerinin tespiti ve iş yerinde çalışıldığına dair tanık (komşu iş yeri) ve belge delillerinin toplanması",
        "3. Çalışma şekli ve ücretin ispatı",
        "4. Dava açma süresinin kontrolü (Hizmet Tespit Davası için 5 yıllık hak düşürücü süre)",
        "5. İşverenin SGK kayıtları ve beyanlarının incelenmesi"
    ],
    "Tapu İptali ve Tescil (Muvazaa/Bağış)": [
        "1. Murisin (Ölen) yaptığı temlikin (satış, bağış) gerçek iradeye uygun olup olmadığı (Muvazaa)",
        "2. Murisin bu tasarrufu yaparken mirasçılardan mal kaçırma kastının ispatı",
        "3. Davalının (temlik yapılan kişi) davacının (mirasçı) miras payına tecavüz eden kısmın belirlenmesi",
        "4. Murisin ölmeden önceki sağlık durumu ve mal varlığı hakkında delillerin temini",
        "5. Davanın tüm mirasçılara karşı açılıp açılmadığı kontrolü"
    ],
    "Tahliye Taahhüdü Nedeniyle Tahliye Takibi": [
        "1. Kiracının imzaladığı Tahliye Taahhüdünün geçerlilik şartlarının kontrolü (Tarih, Şekil)",
        "2. Taahhüdün, **kira sözleşmesi imzalandıktan sonraki bir tarihte** düzenlenip düzenlenmediği",
        "3. Taahhütte belirtilen tahliye tarihinin kontrolü",
        "4. Tahliye taahhüdüne dayalı icra takibine başlama süresinin kontrolü (Taahhüt tarihinden itibaren 1 ay)",
        "5. Kiracı tarafından icra takibine itiraz edilmişse, İtirazın Kaldırılması/İptali yollarının belirlenmesi"
    ],
    "İstirdat (Geri Alma) Davası": [
        "1. Borcun ve yapılan ödemenin dayanağının (İcra Takibi, Sebepsiz Zenginleşme) tespiti",
        "2. Ödemenin cebri (zorla) icra takibi baskısı altında yapılıp yapılmadığının ispatı",
        "3. İstirdat davası açma süresinin kontrolü (**ödemenin yapıldığı tarihten itibaren 1 yıl**)",
        "4. İcra takibinin hangi aşamada kesinleştiği ve ödeme makbuzlarının temini",
        "5. Geri istenen miktarın faiz başlangıç tarihinin belirlenmesi"
    ],
    "Marka Hükümsüzlüğü Davası": [
        "1. Hükümsüzlüğü istenen markanın tescil tarihi ve numarasının belirlenmesi",
        "2. Hükümsüzlük nedeninin tespiti (mutlak veya nispi ret nedenleri, kötü niyet vb.)",
        "3. Davacının (marka sahibi/ilgili kişi) hukuki menfaatinin varlığının ispatı",
        "4. Davanın açılma süresinin kontrolü (kural olarak süreye tabi olmamakla birlikte, bazı nispi ret nedenleri için 5 yıllık hak düşürücü süre)",
        "5. Markanın tescil edildiği sınıfların belirlenmesi ve delil karşılaştırması"
    ],
    "İhtiyati Haciz Kararına İtiraz": [
        "1. İhtiyati haciz kararının tebliğ tarihinin netleştirilmesi",
        "2. İtiraz süresinin kontrolü (haczin tatbikinden itibaren **7 gün**)",
        "3. İhtiyati haciz nedeninin (alacağın vadesi gelmiş veya teminatın yetersiz olması) somut olarak çürütülmesi",
        "4. Alacağın esasına veya teminata itirazın gerekçelendirilmesi",
        "5. Mahkemeden duruşmalı inceleme talebinin yapılması"
    ],
    "Tasarrufun İptali Davası (İİK m. 277)": [
        "1. Borçlu aleyhine kesinleşmiş bir icra takibi ve aciz belgesinin temini (ön şart)",
        "2. İptali istenen tasarrufun (satış, bağışlama, rehin) tarihinin ve niteliğinin belirlenmesi",
        "3. Tasarrufun yapıldığı tarihe göre İİK'daki iptal sebeplerinden (bedelsiz, zarar verme kastı vb.) hangisinin uygulandığı",
        "4. Dava açma süresinin kontrolü (**5 yıllık hak düşürücü süre**)",
        "5. Taşınmazın güncel tapu kaydının incelenmesi"
    ],
    "Babalık Davası (Soybağının Kurulması)": [
        "1. Çocuğun doğum tarihinin ve kimlik bilgilerinin tespiti",
        "2. Davalı (baba olduğu iddia edilen kişi) ile annenin hukuki ilişkisinin (evli, evli değil) belirlenmesi",
        "3. Dava açma süresinin kontrolü (Çocuk için erginliğinden itibaren 1 yıl; anne için doğumdan itibaren 1 yıl)",
        "4. Baba ile çocuk arasındaki soybağı ilişkisinin tespiti için **DNA incelemesi** talebinin hazırlanması",
        "5. Çocuğun annesine nafaka ve doğum giderleri taleplerinin değerlendirilmesi"
    ],
    "Trafik Kazası Sigorta Rücu Davası": [
        "1. Sigorta şirketinin ödediği tazminat miktarının ve ödeme tarihinin belgelenmesi",
        "2. Rücu nedeninin (sürücünün ehliyetsizliği, alkol, kaza yerini terk vb.) somut delillerle ispatı",
        "3. Sürücünün/İşletenin kusur oranının tespiti",
        "4. Rücu davası açma süresinin kontrolü (Ödeme tarihinden itibaren 2 yıl)",
        "5. Sigorta poliçesinin rücu şartlarına uygunluğunun kontrolü"
    ],
    "Vekalet Ücreti Alacağı Davası": [
        "1. Vekaletnamenin bir örneğinin dosyaya eklenmesi",
        "2. Ücretin türü (yüzdelik, maktu, avukatlık asgari ücret tarifesi) ve miktarının belirlenmesi",
        "3. Davanın/İşin hangi aşamada sonuçlandığı veya sonlandığı",
        "4. Ücret alacağının muacceliyet tarihinin belirlenmesi",
        "5. Tahsil edilen icra dosyası varsa, tahsilat makbuzlarının ve kesinleşme tarihinin temini"
    ],
    "Gemi İhtiyati Haciz Davası (Deniz Ticaret Hukuku)": [
        "1. Alacağın bir deniz alacağı olup olmadığının (TTK m. 1352) tespiti",
        "2. Haczi istenen geminin (gemi sicil kaydı) ve bağlama limanının belirlenmesi",
        "3. İhtiyati haczin istenmesi için geçerli bir nedenselliğin (alacağın tehlikede olması) ispatı",
        "4. Talep edilen teminat miktarının (genellikle alacağın %10-%20'si) belirlenmesi",
        "5. İhtiyati haciz kararının icrasının usulüne uygun yapılması için gerekli belgelerin hazırlanması"
    ],
    "Konkordato Tasdiki Davası (İİK)": [
        "1. Borçlunun (tacir) mali durumunu gösteren **güncel tabloların** ve bilançonun sunulması",
        "2. Alacaklıların üçte iki çoğunluğunun onayının alınıp alınmadığı",
        "3. **Kesin Mühlet Kararı** talebinin ve gerekçesinin hazırlanması",
        "4. Konkordato projesinin (ödeme planı, indirim oranı) hazırlanması",
        "5. Komiser atanması için gerekli bilgi ve belgelerin temini"
    ],
    "Bankalara Karşı Haksız Masraf İadesi Davası": [
        "1. İadesi istenen masraf/komisyonun türünün (dosya masrafı, ekspertiz, kredi tahsis) belirlenmesi",
        "2. Masrafın tahsil edildiğine dair banka dekontları veya ekstrenin temini",
        "3. Tüketici/Ticaret Mahkemesi görev alanının tespiti",
        "4. Masrafın fahiş veya haksız şart niteliğinde olduğunun gerekçelendirilmesi",
        "5. Dava açılmadan önce Tüketici Hakem Heyeti veya arabuluculuk başvurusunun yapılıp yapılmadığı"
    ],
    "İstihkak Davası (İcra Hukuku)": [
        "1. Haczedilen malın (taşınır/taşınmaz) haciz tutanağı ve kim tarafından haczedildiğinin tespiti",
        "2. Davacının (Üçüncü Kişi) mal üzerindeki mülkiyet/zilyetlik hakkının ispatı (Fatura, sözleşme vb.)",
        "3. İstihkak davası açma süresinin kontrolü (Haczin öğrenilmesinden itibaren **7 gün**)",
        "4. Malın hacizli kalması halinde olası zararlar için **teminat** yatırılıp yatırılmayacağı",
        "5. Davanın icra mahkemesinde mi yoksa genel mahkemede mi açılacağının tespiti"
    ],
    "Zarar Giderim Davası (İmar Hukuku)": [
        "1. Zarara neden olan imar planının veya uygulamasının kesinleşme tarihinin tespiti",
        "2. Taşınmazın imar öncesi ve imar sonrası durumlarının karşılaştırılması (Değer düşüşü)",
        "3. Dava açma süresinin kontrolü (İmar planının tebliğinden itibaren İdari Yargıda 60 gün; Tazminat Yargısında özel süreler)",
        "4. Zararın hesaplanması için emsal taşınmaz fiyatlarının toplanması",
        "5. İmar planındaki düzenlemenin **kamu yararına** uygun olup olmadığının değerlendirilmesi"
    ],
    "Soybağının Reddi Davası": [
        "1. Çocuğun evlilik birliği içinde veya evliliğin sona ermesinden itibaren 300 gün içinde doğduğunun tespiti",
        "2. Davacının (koca/anne/çocuk) kimlik ve adres tespiti",
        "3. Dava açma süresinin kontrolü (Koca için öğrenme tarihinden itibaren 1 yıl)",
        "4. Soybağının reddi için **biyolojik babalık olasılığının ortadan kalktığının** ispatı (DNA, Tanıklık)",
        "5. Davada tüm tarafların (anne, koca, çocuk, kayyım) usulüne uygun davalı gösterilmesi"
    ],
    "Fatura İtirazının Hükümsüzlüğü Davası": [
        "1. Faturanın bir ticari ilişkiye dayalı olup olmadığının tespiti",
        "2. Faturanın karşı tarafa tebliğ tarihinin belirlenmesi",
        "3. Faturaya itiraz edilip edilmediğinin ve itirazın ne zaman (tebliğden itibaren **8 gün**) yapıldığının tespiti",
        "4. İtirazın **yazılı ve noter onaylı** olup olmadığının kontrolü (TTK m. 21)",
        "5. Ticari defterlerin delil olarak incelenmesi talebinin hazırlanması"
    ],
    "Geçici Velayet Kararına İtiraz": [
        "1. Geçici velayet kararını veren mahkeme ve kararın tarihinin tespiti",
        "2. İtiraz süresinin kontrolü (tefhim/tebliğden itibaren **2 hafta**)",
        "3. Çocuğun üstün yararının tehlikede olduğuna dair yeni ve somut delillerin sunulması",
        "4. Çocukla kişisel ilişki kurulmasına dair talebin gerekçelendirilmesi",
        "5. Sosyal İnceleme Raporu (SİR) alınması talebinin değerlendirilmesi"
    ],
    "Tahkim İtirazı ve İptal Davası": [
        "1. Taraflar arasında **geçerli bir tahkim sözleşmesinin** olup olmadığı",
        "2. Hakem kararının (veya hakem heyeti kararının) tebliğ tarihinin netleştirilmesi",
        "3. İptal davası açma süresinin kontrolü (**tebliğden itibaren 1 ay**)",
        "4. İptal nedeninin (hakem seçimi usulü, savunma hakkının kısıtlanması, kamu düzenine aykırılık vb.) HMK'daki sınırlı nedenlere uygunluğunun kontrolü",
        "5. Yürütmenin Durdurulması talebinin hazırlanması"
    ],
    "İdare Mahkemesinde Disiplin Cezasına İtiraz": [
        "1. Davacıya uygulanan disiplin cezasının türü (uyarma, kınama, aylıktan kesme, kademe ilerlemesi durdurulması, meslekten çıkarma)",
        "2. Cezayı veren makamın yetkisinin kontrolü",
        "3. Savunma hakkının usulüne uygun kullanılıp kullanılmadığının (7 günlük süre) kontrolü",
        "4. İptal nedeninin (hukuka aykırılık, orantısızlık, yetki aşımı) gerekçelendirilmesi",
        "5. Dava açma süresinin kontrolü (İtiraz mercii varsa cevap tarihinden, yoksa 60 gün)"
    ],
    "İşyeri Tescilinin İptali Davası (Marka)": [
        "1. Tescili istenen markanın tescil belgelerinin temini",
        "2. Tescil başvurusunun hangi tarih ve numarası ile yapıldığının belirlenmesi",
        "3. **Türk Patent ve Marka Kurumu'na** karşı açılacak iptal davasının gerekçesi",
        "4. Ret kararının dayanağının (benzerlik, ayırt edicilik eksikliği vb.) çürütülmesi",
        "5. Mahkemeden (Fikri ve Sınai Haklar Hukuk Mahkemesi) uzman bilirkişi raporu talebinin hazırlanması"
    ],
    "Kooperatif Genel Kurul Kararının İptali Davası": [
        "1. İptali istenen genel kurul kararının tarih ve sayısının tespiti",
        "2. Davacının kooperatif üyesi/yöneticisi olup olmadığının ispatı",
        "3. Dava açma süresinin kontrolü (karar tarihinden itibaren **1 ay**)",
        "4. İptal nedeninin belirlenmesi (usulde aykırılık, dürüstlük kuralına aykırılık vb.)",
        "5. Genel kurul toplantı tutanağının ve hazirun listesinin temini"
    ],
    "Ceza Davası Sonrası Maddi Tazminat Talebi (Mağdur)": [
        "1. Ceza yargılamasının kesinleşme kararının (Hükümlülük) temini",
        "2. Maddi zararın (tedavi gideri, iş gücü kaybı, destekten yoksun kalma) hesaplanması",
        "3. Zarar ile suç fiili arasındaki illiyet bağının ispatı",
        "4. Dava açma süresinin kontrolü (CMK'daki tazminat hükümlerine göre veya genel zamanaşımı)",
        "5. Hükümlü ve/veya diğer sorumlu kişilerin (işveren, sigorta) davalı olarak gösterilmesi"
    ],
    "Kat Mülkiyeti Ortak Gider Alacağı Davası": [
        "1. Davalının (Kat Maliki/Kiracı) kimlik ve adres tespiti",
        "2. Ödenmeyen aidat/gider borçlarının dökümü ve ödeme tarihleri",
        "3. Yasal faiz ve icra inkar tazminatı taleplerinin eklenmesi",
        "4. Yönetim planının ve işletme projesinin (yönetici defteri) temini",
        "5. Ödenmeyen alacaklar için taşınmaz üzerine **yasal ipotek** tesisi talebinin değerlendirilmesi"
    ],
    "Temerrüt Nedeniyle Tahliye Davası": [
        "1. Ödenmeyen kira bedellerinin ve temerrüt ihtarnamesinin tebliğ tarihinin tespiti",
        "2. Kiracıya tanınan sürenin (konut ve çatılı işyeri kiralarında **30 gün**) dolup dolmadığı",
        "3. Aynı kira yılı içinde **iki haklı ihtar** koşulunun sağlanıp sağlanmadığı",
        "4. İcra takibine itiraz edilmişse, itirazın iptali/kaldırılması ile tahliye taleplerinin birlikte açılıp açılmadığı",
        "5. Dava açma süresinin (temerrüt süresinin bitimi veya ikinci ihtarın tebliğini takip eden 1 ay) kontrolü"
    ],
    "Kira Bedelinin Uyarlanması Davası": [
        "1. Sözleşmenin ifasının aşırı ölçüde güçleşmesine neden olan **öngörülemez** durumların (Ekonomik kriz, pandemik vb.) tespiti",
        "2. Davacının sözleşmenin yapıldığı sırada bu durumları bilmesinin veya beklemesinin mümkün olup olmadığı",
        "3. **Yeni bir kira dönemi** içinde dava açılıp açılmadığı",
        "4. Talep edilen yeni kira bedelinin emsal değerler ve hakkaniyet ilkesine uygunluğunun ispatı",
        "5. Davadan önce kira bedelinin uyarlanması amacıyla karşı tarafa ihtarname gönderilip gönderilmediği"
    ],
    "Kiralananın Ayıbının Giderilmesi Davası": [
        "1. Kiralananda mevcut olan ayıbın (eksiklik, bozukluk) niteliği (önemli/önemsiz) ve tespiti",
        "2. Ayıp bildiriminin kiraya verene **derhal** yapılıp yapılmadığı",
        "3. Kiraya verene ayıbı gidermesi için uygun bir süre verilip verilmediği",
        "4. Ayıp nedeniyle kira bedelinden indirim talep edilip edilmediği",
        "5. Ayıbın kiralananın **kullanım amacına** uygunluğunu tamamen veya önemli ölçüde engellemesi durumunun değerlendirilmesi"
    ],
    "Kiraya Verenin İhtiyacı Nedeniyle Tahliye (Yeni Malik)": [
        "1. Kiralananı sonradan edinen yeni malikin tapu tescil tarihinin tespiti",
        "2. Yeni malikin ihtiyacının **samimi, zorunlu ve sürekli** olduğunun ispatı",
        "3. Tahliye talebinin kiracıya ihtarname ile bildirilme süresinin kontrolü (Edinme tarihinden itibaren **1 ay**)",
        "4. Tahliye davasının açılma süresinin kontrolü (Edinme tarihinden itibaren **6 ay** sonra)",
        "5. Kiracının önceki sözleşmedeki haklarının korunup korunmadığının değerlendirilmesi"
    ],
    "Kira Sözleşmesinin Feshi ve Tazminat Davası (Haklı Sebeple)": [
        "1. Kira sözleşmesinin feshine yol açan haklı sebebin (kiraya verenin ağır kusuru, kiralananın kullanılamaz hale gelmesi) tespiti",
        "2. Feshin haklı bir nedene dayandığının ispatı",
        "3. Kira sözleşmesinin **derhal** feshedildiğine dair bildirim yapılıp yapılmadığı",
        "4. Fesih nedeniyle uğranılan maddi zararın (taşınma/yerleşme masrafları vb.) hesaplanması",
        "5. Manevi tazminat talebi varsa, kişilik haklarının ihlal edilip edilmediği"
    ],
    "Kira Alacağı için İcra Takibine İtirazın Kaldırılması (İlamlı)": [
        "1. Takibe konu alacağın varlığına ilişkin **ilam veya ilam niteliğinde belge** (Tahliye Taahhüdü) olup olmadığı",
        "2. Takibin türünün (ilamlı/ilamsız) doğru seçilip seçilmediği",
        "3. Borçlunun itirazının nedeninin (Borç miktarı, imza, yetki vb.) incelenmesi",
        "4. İtirazın kaldırılması süresinin kontrolü (İİK m. 41'e göre 6 ay)",
        "5. Haciz talebinin uygunluğunun değerlendirilmesi"
    ],
    "Kira Sözleşmesinin Tapuya Şerhi Davası": [
        "1. Kira sözleşmesinin süresinin ve koşullarının belirlenmesi",
        "2. Kira sözleşmesinin tapuya şerh edilmesine ilişkin **kiraya verenin rızasının** (sözleşmede/ayrıca) olup olmadığı",
        "3. Kiraya verenin rızası yoksa, bu hakkın tapuya şerh edilmesi için haklı nedenlerin bulunup bulunmadığı",
        "4. Tapu Sicil Müdürlüğüne başvuru sürecinin usulüne uygun işletilip işletilmediği",
        "5. Şerhin süresinin (en fazla 10 yıl) ve hükümlerinin kontrolü"
    ],
    "Hükmen Tahliye Davası (300 Gün Kuralı)": [
        "1. Kiralananın tahliyesinin, malikin **yeniden inşa/imar** amacıyla yapıldığının tespiti",
        "2. İmar projesinin veya ruhsatının dosyaya eklenmesi",
        "3. Tahliye sonrası kiralananın 3 yıl süreyle eski kiracıya teklif etme zorunluluğunun (ön alım hakkı) değerlendirilmesi",
        "4. Tahliye davasının açılma süresinin kontrolü (sözleşme bitiminden itibaren 1 ay)",
        "5. Tahliye sonrası kiraya verenin 3 yıl boyunca yeniden kiralama yasağına uyup uymadığı"
    ],
    "Kira Bedeli Artışına İlişkin Davalar (Yıllık Tavan)": [
        "1. Dava konusu kira artışının, **yasal tavan oranını** (TBK'daki sınırlamalar veya yasal üst sınır) aşıp aşmadığının tespiti",
        "2. Kiraya verenin talep ettiği artış oranının (TÜFE/ÜFE) doğru hesaplanıp hesaplanmadığı",
        "3. Beş yıldan uzun süreli sözleşmeler için hakkaniyet indirimi talebinin değerlendirilmesi",
        "4. Davanın yeni kira dönemi içinde açılıp açılmadığı",
        "5. Kiracı tarafından ödeme yapılırken **ihtirazi kayıt** belirtilip belirtilmediği"
    ],
    "Kira Borcunun Tespiti Davası (Olumsuz Tespit)": [
        "1. Kiracının, kira borcu olmadığını veya ödediğini iddia ettiği dönemin ve miktarın belirlenmesi",
        "2. Kira bedellerinin ödendiğine dair somut delillerin (banka dekontu, makbuz) temini",
        "3. Kiraya verenin başlattığı icra takibi varsa, bu takibin ve itirazın tarihinin tespiti",
        "4. Dava açılmadan önce icra takibine itiraz edilip edilmediği",
        "5. Yüzdelik teminat karşılığında icra takibinin durdurulması talebinin hazırlanması"
    ],
    "Sözleşmenin Sona Ermesi Nedeniyle Tahliye (Süre Bitimi)": [
        "1. Kiralananın konut veya çatılı işyeri kirası olup olmadığı",
        "2. Kiracının sürenin bitiminden en az **15 gün önce** bildirimde bulunup bulunmadığı",
        "3. Kiraya verenin kira sözleşmesini ancak **10 yıllık uzama süresinin** sonunda feshedebilme hakkının kontrolü",
        "4. Sözleşme süresinin bitimi nedeniyle tahliye davası açma süresinin (süre bitimini takip eden 1 ay) kontrolü",
        "5. Yeni kira dönemi başlamadan önce kiraya veren tarafından **tahliye iradesinin** kiracıya bildirilip bildirilmediği"
    ],
    "Gerekçesiz Fesih Tazminatı Davası (Kira Hukuku)": [
        "1. Kiraya verenin tahliye nedenini (ihtiyaç, yeniden inşa) takip eden 3 yıl içinde kiralananı **haklı bir sebep olmaksızın** başka birine kiralaması",
        "2. Önceki kiracının bu durumu öğrendiği tarihin tespiti",
        "3. Kiraya verenin yeni kiralaması nedeniyle uğranılan zararın (Yerleşme, komisyon vb.) hesaplanması",
        "4. Tazminat davasının açılma süresinin kontrolü (Öğrenme tarihinden itibaren 1 yıl ve her halde 5 yıl)",
        "5. Tazminat miktarının **en az 1 yıllık kira bedeli** tutarında olup olmadığının değerlendirilmesi"
    ],
    "Kira Sözleşmesine Aykırılık Nedeniyle Tahliye": [
        "1. Kiracının sözleşmeye aykırı davranışının (komşuları rahatsız etme, hor kullanma vb.) somut olarak tespiti",
        "2. Kiracıya bu aykırılığı gidermesi için ihtarname ile uygun bir süre verilip verilmediği",
        "3. Verilen süreye rağmen aykırılığın giderilip giderilmediği",
        "4. Aykırılığın **önemli ve katlanılmaz** boyutta olup olmadığının değerlendirilmesi",
        "5. Aykırılık durumunun tanık veya diğer delillerle ispatı"
    ],
    "Kiralanan Taşınmazın Tahliyesi (Ölüm Durumu)": [
        "1. Kiracının veya kiraya verenin ölüm tarihinin tespiti",
        "2. Sözleşmenin kendiliğinden mirasçılara geçip geçmediği (Genel kural geçer)",
        "3. Kiraya verenin mirasçılarının sözleşmeyi feshetme haklarının (yasal süre ve nedenler) kontrolü",
        "4. Kiracının ölen mirasçılarının, sözleşmenin devamına itiraz edip etmediği",
        "5. Kiracının ölümü nedeniyle sözleşmenin **haklı sebeple** feshedilmesi için ek koşulların kontrolü"
    ],
    "Depozito (Güvence Bedeli) İadesi Davası": [
        "1. Kira sözleşmesi veya ek protokol ile güvence bedelinin (depozito) ödendiğine dair belgenin temini",
        "2. Kiralananın tahliye edildiği ve kiraya verene teslim edildiği tarihin tespiti",
        "3. Kiraya verenin, depozitonun iadesi için yasal süresi (tahliyeden itibaren 3 ay) içinde dava açıp açmadığı",
        "4. Kiralananın kiracıdan kaynaklanan hasar veya borç olup olmadığının kontrolü",
        "5. İade edilmeyen kısım için yasal faiz talebinin eklenmesi"
    ],
    "Ortaklık Nedeniyle Tahliye Davası (Kira Hukuku)": [
        "1. Kiralanan taşınmazın malikleri arasında ortaklık (iştirak/paylı) bulunup bulunmadığı",
        "2. Tahliye davasının tüm maliklerin **oybirliğiyle** (iştirak) veya **pay ve paydaş çoğunluğuyla** (paylı) açılıp açılmadığı",
        "3. Tahliye talebine dayanak olan ihtiyacın ortaklığın menfaatine uygun olup olmadığının tespiti",
        "4. Dava açılmadan önce diğer ortaklara tahliye niyetinin bildirilip bildirilmediği",
        "5. Ortaklığın giderilmesi davası açılmasının tahliye davasına etkisinin değerlendirilmesi"
    ],
    "Kira Sözleşmesinde Kefilin Sorumluluğu Davası": [
        "1. Kira sözleşmesindeki kefalet hükümlerinin geçerliliğinin kontrolü (Kefilin el yazısı, miktar, tarih)",
        "2. Kefilin sorumluluğunun ne zaman başlayıp bittiğinin tespiti (Süre, miktar sınırı)",
        "3. Kefaletin adi kefalet mi yoksa müteselsil kefalet mi olduğunun belirlenmesi",
        "4. Kefile karşı takip başlatılmadan önce asıl borçluya (kiracıya) başvurulup başvurulmadığı",
        "5. Kefilin itiraz ve def'ilerinin (zamanaşımı, indirim talebi vb.) değerlendirilmesi"
    ],
    "İşyeri Devri Nedeniyle Sözleşmenin Feshi": [
        "1. Kiracının (işleten) işyerini kiraya verenin izni olmaksızın **devredip devretmediği**",
        "2. Kiraya verenin sözleşmeyi haklı nedenle feshetme hakkının doğup doğmadığı",
        "3. Devredenin (eski kiracı) sorumluluğunun devirden sonraki **iki yıl** ile sınırlı olup olmadığı",
        "4. Devir işlemi sonrası kiraya verene bildirim yapılıp yapılmadığı",
        "5. Fesih ve tahliye taleplerinin bir arada açılıp açılmadığı"
    ],
    "Kiraya Verenin Kiralanana Müdahalesi (Huzuru Bozma)": [
        "1. Kiraya verenin kiralanana **haksız müdahalesinin** (Anahtar isteme, eve girme vb.) somut olarak tespiti",
        "2. Müdahale nedeniyle kiracının huzur ve sükununun bozulup bozulmadığı",
        "3. Kiracı tarafından müdahalenin önlenmesi için **men'i müdahale** talebi hazırlanması",
        "4. Müdahale nedeniyle kira bedelinden indirim veya sözleşmenin haklı nedenle feshi taleplerinin değerlendirilmesi",
        "5. Manevi tazminat talebinin gerekçelendirilmesi"
    ],
    "Kiracı Tarafından Alt Kira/Kullanım İzni İptali": [
        "1. Kira sözleşmesinde alt kiraya/kullanım iznine ilişkin **açık bir hükmün** olup olmadığı",
        "2. Alt kira/kullanım izninin kiraya verene **zarar verip vermediğinin** tespiti",
        "3. Kiraya verenin alt kira/kullanım iznini **haklı sebeple** iptal edip etmediği",
        "4. Alt kiracının, kiraya verene karşı doğrudan sorumlu olup olmadığının kontrolü",
        "5. Alt kiracının tahliyesinin asıl kiracının tahliyesine bağlı olup olmadığı"
    ],
    "Kira Uyuşmazlıklarında Arabuluculuk Süreci (Başlangıç)": [
        "1. Uyuşmazlığın **zorunlu arabuluculuk** kapsamına girip girmediği (Kira tespiti, tahliye vb.)",
        "2. Arabuluculuk başvurusunun hangi tarafça yapıldığı ve sürecin başlangıç tarihi",
        "3. Arabulucuya sunulan taleplerin net ve hukuki dayanaklarının belirlenmesi",
        "4. Tarafların uzlaşmaya varıp varmadıkları ve son tutanağın (anlaşma/anlaşmama) temini",
        "5. Anlaşma sağlanamaması durumunda, **dava açma süresi** için arabuluculuk süresinin etkisinin hesaplanması"
    ],
    "Hisseli Taşınmazda Fiili Taksim İptali Davası": [
        "1. Ortaklar arasında fiili taksim (bölüşme) anlaşmasının varlığının tespiti",
        "2. Fiili taksimin diğer paydaşlar tarafından onaylanıp onaylanmadığı",
        "3. Taksimin adil ve hakkaniyete uygun olup olmadığı",
        "4. Fiili taksimin paydaşlık ilişkisini sona erdirip erdirmediği",
        "5. Fiili taksimin tapu kaydına şerh edilip edilmediği"
    ],
    "İpotek (Rehin) Tesisinin İptali Davası": [
        "1. İpoteğin dayanağı olan borcun geçersizliği veya hiç doğmadığının ispatı",
        "2. İpotek tesisinde vekalet görevinin kötüye kullanılıp kullanılmadığı",
        "3. İpoteğin kaldırılması talebinin bankaya/alacaklıya iletilip iletilmediği",
        "4. İpoteğin fekki (kaldırılması) için gerekli harç ve masrafların hesaplanması",
        "5. İpotek tesisinin zamanaşımına uğrayıp uğramadığı"
    ],
    "Kat İrtifakının Kat Mülkiyetine Çevrilmesi Davası": [
        "1. Yapı kullanma izin belgesinin (iskan) alınıp alınmadığı",
        "2. Tüm bağımsız bölümlerin tamamlanıp tamamlanmadığı",
        "3. Yönetim planının hazırlanıp hazırlanmadığı",
        "4. Tüm kat irtifakı sahiplerinin oybirliği veya aranan çoğunluğun sağlanıp sağlanmadığı",
        "5. Projedeki eksiklik veya aykırılıkların olup olmadığı"
    ],
    "Geçit Hakkı Tesisi Davası (Mecra/Zorunlu Geçit)": [
        "1. Taşınmazın genel yolla bağlantısının olup olmadığı ve mevcut yolun yeterliliği",
        "2. Geçit hakkı talep edilen komşu taşınmazın malikinin tespiti",
        "3. Geçit hakkının kurulmasının **en az zararla** gerçekleşeceği yerin belirlenmesi (Keşif/Bilirkişi)",
        "4. Geçit hakkı karşılığında **uygun bedelin** (tazminatın) belirlenmesi",
        "5. Geçit hakkının tapu siciline tescili talebinin hazırlanması"
    ],
    "Ölünceye Kadar Bakma Sözleşmesinin İptali": [
        "1. Sözleşmenin şekil şartlarına (resmi vasiyetname şeklinde/noterde) uygun olup olmadığı",
        "2. Bakım borçlusunun (davalı) bakım yükümlülüğünü yerine getirip getirmediği",
        "3. Sözleşmenin muvazaalı (mirasçıdan mal kaçırma) olup olmadığı",
        "4. Ölünceye Kadar Bakma Sözleşmesi lehtarının (murisin) hukuki ehliyetinin tespiti",
        "5. İptal davası açma süresinin kontrolü (mirasçılar için muvazaa nedeniyle zamanaşımı yok; diğer nedenler için genel süreler)"
    ],
    "Anonim Şirket Genel Kurul Kararının Butlanı Davası": [
        "1. Kararın TTK'da sayılan butlan (mutlak geçersizlik) sebeplerinden (sermayenin azaltılması, a.ş.'nin temel yapısını değiştirme vb.) birine girip girmediği",
        "2. Kararın kamu düzenine, dürüstlük kuralına veya şirket esas sözleşmesine aykırılık durumunun tespiti",
        "3. Butlanın ileri sürülmesi için herhangi bir hak düşürücü sürenin olup olmadığı (Kural: Her zaman ileri sürülebilir)",
        "4. Davacının (ortak, yönetici, alacaklı) dava açmakta hukuki menfaatinin varlığı",
        "5. Butlanın tescil ve ilanının zorunlu olup olmadığı"
    ],
    "Anonim Şirket Yönetim Kurulu Üyesinin Sorumluluk Davası": [
        "1. Yönetim kurulu üyesinin görevini **özen ve sadakat yükümlülüğüne** aykırı olarak yerine getirip getirmediği",
        "2. Zararın (şirket/ortaklar/alacaklılar) somut olarak meydana gelip gelmediği",
        "3. Sorumluluk davası açma süresinin kontrolü (Zararı ve sorumluyu öğrenmeden itibaren 2 yıl, her halde 5 yıl)",
        "4. Zarar ile yönetim kurulu üyesinin kusurlu eylemi arasındaki illiyet bağının ispatı",
        "5. Dava açma yetkisinin (şirket/pay sahipleri/alacaklılar) doğru belirlenmesi"
    ],
    "Bononun İptali Davası (Kambiyo Hukuku)": [
        "1. Bono'nun (veya diğer kambiyo senedinin) zayi (kaybolma/çalınma) durumunun tespiti",
        "2. Bono'nun hamili bilinmiyorsa veya senet ele geçirilemiyorsa iptal talebi hazırlanması",
        "3. Mahkemeden **ilgililere ilan** yapılması talebinin hazırlanması",
        "4. İptal kararının kesinleşmesi sonrası yeni senet düzenleme (verme) talebinin hazırlanması",
        "5. Senet üzerindeki imzanın inkarı durumunun değerlendirilmesi"
    ],
    "İstirdat Davası (İİK m. 72) - İcra Hukuku": [
        "1. Borçlu tarafından icra takibi devam ederken veya hacizden sonra **cebri ödeme** yapıldığına dair makbuzların temini",
        "2. Borçlunun icra takibine itirazının veya menfi tespit davasının reddedilmiş olması",
        "3. Ödemenin cebir ve tehdit altında yapıldığının ispatı",
        "4. İstirdat davası açma süresinin kontrolü (Borcun tamamının ödendiği tarihten itibaren **1 yıl**)",
        "5. Takibin hangi aşamada kesinleştiği"
    ],
    "Sıra Cetveline İtiraz Davası (İİK)": [
        "1. İcra İflas Dairesi tarafından düzenlenen sıra cetvelinin tebliğ tarihinin tespiti",
        "2. İtiraz süresinin kontrolü (Sıra cetvelinin tebliğinden itibaren **7 gün**)",
        "3. İtiraz nedeninin (Alacağın miktarı, rehin hakkı, rüçhan hakkı vb.) somut olarak gerekçelendirilmesi",
        "4. Davanın tüm ilgililere (diğer alacaklılar) karşı açılıp açılmadığı kontrolü (Zorunlu dava arkadaşlığı)",
        "5. İtirazın, icra mahkemesinde mi yoksa genel mahkemede mi yapılacağının tespiti"
    ],
    "Tapunun Tahrifi Nedeniyle Tazminat Davası": [
        "1. Tapu sicilindeki yanlış/hukuka aykırı işlemin (hata, tahrif) tespiti",
        "2. Yanlış işlem nedeniyle uğranılan maddi zararın (güncel değer kaybı) hesaplanması",
        "3. Tazminat talebinin Devlete (Hazineye) karşı açılması zorunluluğu",
        "4. Tazminat davası açma süresinin kontrolü (Olayın öğrenilmesinden itibaren 1 yıl, her halde 10 yıl)",
        "5. Tapu memurunun kusurlu eyleminin tespiti"
    ],
    "Yabancı Mahkeme Kararının Tanıma ve Tenfizi Davası": [
        "1. Yabancı mahkeme kararının (Boşanma, alacak, tazminat vb.) tasdikli (apostilli) aslı ve yeminli tercümesinin temini",
        "2. Kararın kesinleştiğine dair yabancı mahkeme yazısının temini",
        "3. **Karşılıklılık (mütekabiliyet)** ilkesinin (Türkiye ile yabancı ülke arasında anlaşma) varlığının araştırılması",
        "4. Kararın Türk kamu düzenine aykırılık teşkil edip etmediğinin tespiti",
        "5. Kararın tenfizi (icrası) için talep edilen icra işlemlerinin belirlenmesi"
    ],
    "Kambiyo Senedine Dayalı İcra Takibine İtiraz ve Şikayet": [
        "1. Takibin dayanağı olan kambiyo senedinin (Çek, Bono, Poliçe) şekil şartlarına uygunluğunun kontrolü",
        "2. Borçlunun imzaya itirazının süresinde (ödeme emri tebliğinden itibaren **5 gün**) yapılıp yapılmadığı",
        "3. Borcun esasına itirazın (Hizmet karşılığı olmaması, zamanaşımı vb.) genel mahkemede mi yoksa icra mahkemesinde mi yapılacağının tespiti",
        "4. Takibin **yetkili icra dairesinde** başlatılıp başlatılmadığına ilişkin şikayet süresinin (7 gün) kontrolü",
        "5. İcra inkar tazminatı riskinin değerlendirilmesi"
    ],
    "Miras Sözleşmesinin İptali Davası (Sağlar Arası Tasarruf)": [
        "1. Miras sözleşmesinin (mirasçı atama, vasiyet) usulüne uygun (resmi vasiyetname şeklinde) yapılıp yapılmadığı",
        "2. Sözleşmenin iptalini gerektiren nedenin tespiti (Hata, hile, ikrah, ehliyetsizlik)",
        "3. Mirasbırakanın (muris) hukuki ehliyetinin ve iradesinin tespiti",
        "4. İptal davası açma süresinin kontrolü (Öğrenmeden itibaren 1 yıl, vasiyetnamelerin açıldığı tarihten itibaren 10 yıl)",
        "5. Tenkis (indirim) talebinin iptal talebiyle birlikte değerlendirilmesi"
    ],
    "Acentelik Sözleşmesinin Feshi ve Tazminat Davası": [
        "1. Acentelik sözleşmesinin süresi ve fesih şartlarının kontrolü",
        "2. Feshin haklı bir nedene (TTK m. 121) dayanıp dayanmadığı",
        "3. **Denkleştirme (Portföy) Tazminatı** talebinin koşullarının (yeni müşteriler, menfaat sağlama) oluşup oluşmadığı",
        "4. Denkleştirme tazminatı talebi için hak düşürücü sürenin kontrolü (Sözleşmenin sona ermesinden itibaren **1 yıl**)",
        "5. Acentenin rekabet yasağına ilişkin hükümlerin kontrolü"
    ],
    "Tahliye Taahhüdüne Dayalı İmzaya İtirazın İptali": [
        "1. Tahliye taahhüdü altındaki imzanın kiracıya ait olup olmadığının tespiti",
        "2. İtirazın kaldırılması yerine, daha uzun süreli ve esasa girilebilen İtirazın İptali davasının açılma zorunluluğu",
        "3. İmzaya itirazın kötü niyetli olduğunun ispatı",
        "4. **İcra İnkar Tazminatı** talebinin hazırlanması",
        "5. İmza incelemesi için adli tıp/grafoloji uzmanı bilirkişi incelemesi talebinin yapılması"
    ],
    "Ticari İşletme Rehni Tesisi ve Kaldırılması": [
        "1. Ticari işletme rehninin (TMK m. 940) kapsamının belirlenmesi (Ticari unvan, makine, demirbaş vb.)",
        "2. Rehin sözleşmesinin noterde usulüne uygun düzenlenip düzenlenmediği",
        "3. Rehnin ticaret siciline tescil ve ilanının yapılıp yapılmadığı",
        "4. Borcun ödendiğine dair delillerin temini ve rehnin fekki (kaldırılması) talebi",
        "5. Rehnin satışının (paraya çevrilmesi) İİK hükümlerine uygunluğunun kontrolü"
    ],
    "Mirasın Hükmen Reddi Davası (TMK m. 605)": [
        "1. Mirasbırakanın (muris) ölüm tarihi itibarıyla **borca batık** olup olmadığının tespiti",
        "2. Borca batıklığın tespiti için murisin tüm mal varlığı (aktif ve pasif) araştırmasının yapılması",
        "3. Mirasın reddi davasının açılma süresinin kontrolü (Ölümden itibaren **3 ay** hak düşürücü süre)",
        "4. Mirasçıların murisin mallarını benimseyici (kabul) davranışta bulunup bulunmadığı",
        "5. Hükmen reddi tespit davasının tüm mirasçılara karşı açılması zorunluluğu"
    ],
    "Anonim Şirket Azınlık Hakları Davası (Özel Denetim)": [
        "1. Davacının (azınlık ortağı) pay oranının yasal sınırı aşıp aşmadığı (**%5 veya daha fazla**)",
        "2. Azınlık haklarının (özel denetim, genel kurulun toplantıya çağırılması) ihlal edildiğine dair somut delillerin sunulması",
        "3. Şirketin mali durumunun veya yönetiminin kötüye gittiğine dair gerekçelerin tespiti",
        "4. Özel denetçi atanması talebinin şirkete karşı açılıp açılmadığı",
        "5. Davanın Ticaret Mahkemesinde açılması ve usul şartlarının yerine getirilmesi"
    ],
    "Kat İrtifakı/Mülkiyeti Ortak Yerlere Müdahalenin Önlenmesi": [
        "1. Müdahalenin ortak alana (teras, depo, merdiven boşluğu vb.) yapıldığının tespiti",
        "2. Müdahalenin ortak kullanım hakkını kısıtlayıcı nitelikte olup olmadığı",
        "3. Davalı kat malikinin müdahalesinin **yönetim planına** veya yasal hükümlere aykırılığının ispatı",
        "4. Müdahalenin giderilmesi (eski hale getirilmesi) talebinin hazırlanması",
        "5. Yöneticiye karşı veya tüm kat maliklerine karşı dava açılması zorunluluğunun kontrolü"
    ],
    "Sebepsiz Zenginleşme Davası": [
        "1. Davalının (zenginleşen) mal varlığında **haklı bir sebep olmaksızın** bir artışın olup olmadığı",
        "2. Davacının (fakirleşen) mal varlığında aynı oranda fakirleşmenin meydana gelip gelmediği",
        "3. Fakirleşme ile zenginleşme arasında doğrudan bir illiyet bağının varlığı",
        "4. İade borcunun kapsamının ve iade edilmeyecek kısmın (giderler vb.) belirlenmesi",
        "5. Zamanaşımı süresinin kontrolü (Geri isteme hakkını öğrenmeden itibaren 1 yıl, her halde 10 yıl)"
    ],
    "Yeniden İmar (Revizyon İmar Planı) Nedeniyle Tapu İptali": [
        "1. İptali istenen imar planının (revizyon/değişiklik) askı ilan süresinin tespiti",
        "2. Planın kesinleşme ve yürürlüğe girme tarihinin belirlenmesi",
        "3. İmar planının hukuka aykırılık nedenlerinin tespiti (Şehircilik ilkeleri, kamu yararı, mülkiyet hakkı ihlali)",
        "4. İmar planının iptali için dava açma süresinin kontrolü (**60 gün**)",
        "5. Taşınmazın eski ve yeni imar durumunun karşılaştırılması"
    ],
    "İhalenin Feshi Davası (İİK)": [
        "1. İcra yoluyla yapılan ihalenin feshi nedeninin tespiti (Usulsüz tebligat, teminat alınmaması, muvazaa vb.)",
        "2. İhale alıcısının (davalı) ve varsa diğer ilgililerin davaya dahil edilmesi",
        "3. İhalenin feshi davası açma süresinin kontrolü (Fesih sebebinin öğrenilmesinden itibaren **7 gün**)",
        "4. Fesih davasının icra mahkemesinde açılması zorunluluğu",
        "5. İhalenin feshini talep edenin (alacaklı, borçlu, ilgili) hukuki menfaatinin varlığı"
    ],
    "İflasın Ertelenmesi Davası (Kaldırıldı/Konkordato)": [
        "1. (Bu dava türü 2018'de yürürlükten kalkmış olup, yerine **Konkordato** hükümleri gelmiştir.)",
        "2. Borçlunun konkordato hükümlerine uygunluk koşullarının tespiti",
        "3. İflasın ertelenmesi talebi yerine konkordato mühleti talebinin hazırlanması",
        "4. Şirketin mali durumunun analizi ve Konkordato Projesinin sunulması",
        "5. Dava açılma ve mühlet sürelerinin kontrolü"
    ],
    "Ciroda İbraz (Geri Verme) Talebiyle Senet İptali": [
        "1. Senet hamilinin (ciro alıcısı) senedi borçluya geri vermeyi (ibraz) taahhüt etmesi",
        "2. Senedin bedelinin ödendiğine dair delillerin temini",
        "3. İbraz borcunun ifa edilmemesi nedeniyle senet iptali talebinin hazırlanması",
        "4. İptal davasının yetkili mahkemede açılması",
        "5. Senet üzerindeki ciro zincirinin ve son hamilin tespiti"
    ],
    "Miras Sebebiyle İstihkak Davası": [
        "1. Davacının (mirasçı) miras payının haksız yere ele geçirildiğinin tespiti",
        "2. Davalının (haksız zilyet) mirasa konu malı hangi sıfatla elinde bulundurduğunun belirlenmesi",
        "3. İstihkak davasının açılma süresinin kontrolü (Mirasçı olduğunu ve zilyetliği öğrenmeden itibaren 1 yıl, her halde 10 yıl)",
        "4. Mirasa konu malların (taşınır/taşınmaz) listelenmesi ve güncel değerlerinin tespiti",
        "5. Haksız zilyedin (davalı) iyiniyetli/kötüniyetli olup olmadığının tespiti"
    ],
    "Vasiyetnamenin Tenfizi (Yerine Getirilmesi) Davası": [
        "1. Vasiyetnamenin mahkemece açılıp ilgililere tebliğ edildiğine dair kararın temini",
        "2. Vasiyetnamenin geçerliliğine (iptal/tenkis) ilişkin bir davanın açılıp açılmadığı",
        "3. Vasiyetnamenin yerine getirilmesi görevlisi (tenfiz memuru) atanıp atanmadığı",
        "4. Tenfizi istenen vasiyet hükmünün (malın devri, lehdara ödeme vb.) somut olarak belirlenmesi",
        "5. Tenfiz davası açma süresinin kontrolü (İptal/Tenkis davası açma süresinin beklenilmesi)"
    ],
    "Haksız Rekabetin Men'i ve Tazminat Davası": [
        "1. Haksız rekabet eyleminin (Yanlış beyan, sırların ifşası, başkasının iş ürününü kullanma vb.) somut olarak tespiti",
        "2. Davalının eyleminin **TTK m. 55'deki genel şartlara** uygunluğunun tespiti",
        "3. Haksız rekabetin sonuçlarının (maddi/manevi zarar, itibar kaybı) hesaplanması",
        "4. Men'i (önleme) ve Tazminat taleplerinin birlikte açılması",
        "5. Davanın Ticaret Mahkemesinde açılması ve zamanaşımı süresinin kontrolü (1 yıl/3 yıl)"
    ],
    "İflasta Tenzil Davası (Alacaklılar lehine)": [
        "1. Borçlunun (müflisin) iflastan önceki mal kaçırma kastının (tenzile tabi tasarruflar) tespiti",
        "2. Tenzile tabi tasarrufların (bağışlama, bedelsiz devir vb.) iflas masasınca incelenmesi",
        "3. Tenzil davası açma süresinin kontrolü (İflasın açıldığı tarihten itibaren **1 yıl**)",
        "4. Dava sonucunda tenzil edilen malların iflas masasına dönme hükmünün tespiti",
        "5. Dava açma yetkisinin İflas İdaresi'ne ait olması"
    ],
    "Deniz Kazası ve Çatma Tazminat Davası (TTK)": [
        "1. Deniz kazasının (çatma) meydana geldiği yer ve tarihin tespiti",
        "2. Kazaya karışan gemilerin (gemi sicil kaydı) ve donatanların belirlenmesi",
        "3. Kaza nedeniyle oluşan maddi zararın (onarım, kurtarma, yük kaybı) hesaplanması",
        "4. **Deniz raporu** ve bilirkişi incelemesinin yapılması",
        "5. Donatanın sınırlı sorumluluk hakkının (TTK m. 1358) değerlendirilmesi"
    ],
    "Sigorta Poliçesi Hükümlerinin İptali Davası (Haksız Şart)": [
        "1. Poliçedeki iptali istenen hükmün (haksız şart) somut olarak tespiti",
        "2. İptal edilen hükmün tüketici aleyhine ve iyi niyet kurallarına aykırı olup olmadığının ispatı",
        "3. Sözleşmenin imzalandığı tarihteki ilgili yasal düzenlemelerin kontrolü",
        "4. Tazminat talebi varsa, uğranılan zararın hesaplanması",
        "5. Dava açma süresinin kontrolü (Tüketici Uyuşmazlıkları için özel ve genel zamanaşımı)"
    ],
    "İcra Tarafından Satılan Malın Geri Alınması (Geri Alma Hakkı)": [
        "1. İcra yoluyla satılan malın (taşınır/taşınmaz) ihale tutanağının temini",
        "2. İhalenin feshi davası açılmış ve reddedilmiş olması",
        "3. Geri alma hakkının (İİK m. 134) yasal süresinin ve koşullarının kontrolü",
        "4. Geri alma hakkını kullanma niyetinin icra dairesine bildirilip bildirilmediği",
        "5. Satış bedeli ve masrafların iadesi için gerekli işlemlerin yapılması"
    ],
    "Vekalet Görevinin Kötüye Kullanılması Nedeniyle Tazminat": [
        "1. Vekilin (davalı) vekalet görevini (satış, rehin vb.) kötüye kullandığı eyleminin tespiti",
        "2. Kötüye kullanmanın somut olarak ispatı (Karşı tarafla muvazaalı işlem, bedelsiz devir)",
        "3. Uğranılan maddi zararın (malvarlığı kaybı) hesaplanması",
        "4. Zamanaşımı süresinin kontrolü (Fiili ve zararı öğrenmeden itibaren 1 yıl, her halde 10 yıl)",
        "5. Kötüye kullanma eylemi nedeniyle tapu iptali ve tescil talebi varsa, bu davanın eklenmesi"
    ],
    "Kıymetli Evrakın Hükümsüzlüğü (Zayii) Davası": [
        "1. Kaybolan kıymetli evrakın (Senet, Bono, Çek vb.) açık kimliğinin tespiti",
        "2. Zayi olduğunun mahkemeye bildirilmesi ve **iptal** talebinin hazırlanması",
        "3. Mahkemece verilen ilan süresinin (genellikle 3 ay) beklenilmesi",
        "4. İlan süresi içinde itiraz eden çıkarsa, senedi ibraz eden kişiye karşı istihkak davası açılması zorunluluğu",
        "5. İptal kararının kesinleşmesi sonrası yeni senet düzenlenmesi talebi"
    ],
    "Yatırım Danışmanlığı Sorumluluğu Tazminat Davası": [
        "1. Yatırım danışmanı ile müvekkil arasındaki sözleşmenin ve ilişki türünün tespiti",
        "2. Danışmanın **özen ve sadakat yükümlülüğünü** ihlal eden kusurlu eyleminin tespiti",
        "3. Danışmanın tavsiyesi nedeniyle uğranılan maddi zararın (yatırım kaybı) hesaplanması",
        "4. Zarar ile danışmanlık eylemi arasındaki illiyet bağının ispatı",
        "5. Zamanaşımı süresinin kontrolü (Zararı ve faili öğrenmeden itibaren 2 yıl, her halde 10 yıl)"
    ],
    
    
    "TCK 81/82 - Kasten Öldürme (Nitelikli)": [
        "1. Suçun **tasarlama** veya **canavarca hisle** işlenip işlenmediği (TCK 82/a,b)",
        "2. Mağdur ve fail arasındaki ilişkinin tespiti (Üstsoy/Altsoy, Eş, Kardeş vb. TCK 82/d)",
        "3. Olay yeri inceleme raporu ve otopsi raporunun eksiksiz incelenmesi",
        "4. Silah/vasıta tespiti ve ele geçirilip geçirilmediği",
        "5. Failin olası kast veya doğrudan kast ile hareket edip etmediği"
    ],
    "TCK 86/87 - Kasten Yaralama (Neticesi Sebebiyle Ağırlaşmış)": [
        "1. Mağdurun vücudundaki yaralanmanın niteliği ve **Adli Tıp Kurumu (ATK)** raporu",
        "2. Yaralamanın basit tıbbi müdahale ile giderilip giderilemeyeceği (TCK 86/2)",
        "3. Yaralanmanın **duyu veya organların işlevine** etki edip etmediği (TCK 87/2)",
        "4. Suçun silahla, birden fazla kişiyle veya altsoy/üstsoya karşı işlenip işlenmediği (TCK 86/3)",
        "5. Suçun şikayete tabi olup olmadığı (TCK 86/1-2 için 6 ay süre)"
    ],
    "TCK 94 - İşkence Suçu": [
        "1. Eylemin **kamu görevlisi** tarafından işlenip işlenmediği",
        "2. Eylemin sistematik, zalimane ve onur kırıcı nitelikte olup olmadığı",
        "3. İşkencenin yapıldığı yer ve zamanın tespiti",
        "4. Mağdurun bedensel ve ruhsal durumunun uzman raporlarıyla (ATK) belgelenmesi",
        "5. **Zamanaşımı** sürelerinin kontrolü (İşkence suçu için zamanaşımı özel hükümlere tabidir)"
    ],
    "TCK 96 - Eziyet Suçu": [
        "1. Eylemin belli bir süreç içerisinde ve **sistematik** olarak yapılıp yapılmadığı",
        "2. Mağdurun acı çekmesine veya aşağılanmasına yönelik olup olmadığı",
        "3. Eziyetin kime karşı (çocuğa, eşe, yaşlıya) işlendiğinin tespiti",
        "4. Suçun delillerinin (görüntü, tanık, doktor raporu) toplanması",
        "5. Eziyetin kasten yaralama suçunun ağır neticesi olup olmadığının ayrımı"
    ],
    "TCK 102 - Cinsel Saldırı Suçu": [
        "1. Eylemin **cebir, tehdit veya hile** kullanılarak işlenip işlenmediği",
        "2. Mağdurun rızasının olup olmadığı veya rızanın geçerliliğinin tespiti (yaş, ehliyet)",
        "3. Eylemin sarkıntılık düzeyinde mi kaldığı yoksa **tamamlanmış** cinsel saldırı mı olduğu",
        "4. Nitelikli hallerin (silahla, birden fazla kişiyle, kamu görevlisi tarafından) olup olmadığı",
        "5. Mağdurun **ruh sağlığının** bozulup bozulmadığına dair raporun temini"
    ],
    "TCK 103 - Çocukların Cinsel İstismarı": [
        "1. Mağdurun **yaşının** (15 yaşını doldurup doldurmadığı) kesin tespiti",
        "2. Eylemin sarkıntılık düzeyinde mi kaldığı yoksa **vücuda organ sokma** düzeyinde mi olduğu",
        "3. Mağdurun **ruh sağlığını** bozup bozmadığına dair ATK raporunun temini",
        "4. Suçun nitelikli hallerinin (üstsoy/altsoy, öğretmen, bakıcı vb.) varlığı",
        "5. Mağdurun cinsel istismara ilişkin **beyanlarının** güvenilirliğinin değerlendirilmesi"
    ],
    "TCK 106 - Tehdit Suçu": [
        "1. Tehdidin **ciddi ve somut** bir kötülük içermesi",
        "2. Tehdidin mağdurun kendisine veya yakınına karşı yapılıp yapılmadığı",
        "3. Tehdidin basit (TCK 106/1) mi yoksa **silahla, imzasız mektupla veya birden fazla kişiyle** işlenip işlenmediği (TCK 106/2)",
        "4. Suçun şikayete tabi olup olmadığı (Basit tehdit şikayete tabidir)",
        "5. Eylemin TCK 107 (Şantaj) suçundan ayrımının yapılması"
    ],
    "TCK 107 - Şantaj Suçu": [
        "1. Failin, mağduru **hakkı olan veya yükümlü olduğu bir şeyi yapmaya/yapmamaya** zorlayıp zorlamadığı",
        "2. Zorlama eyleminin **haksız bir yarar** elde etme kastıyla yapılıp yapılmadığı",
        "3. Şantaja konu olan eylemin (sır, görüntü, itibar zedeleyici bilgi) hukuki niteliği",
        "4. Suçun tamamlanıp tamamlanmadığı (Tehdit anında suç tamamlanır)",
        "5. Delillerin (yazışma, ses kaydı) hukuka uygun yöntemlerle elde edilip edilmediği"
    ],
    "TCK 109 - Kişiyi Hürriyetinden Yoksun Kılma": [
        "1. Mağdurun rızası olmaksızın fiilen hürriyetinin kısıtlanıp kısıtlanmadığı",
        "2. Eylemin süresinin tespiti (kısa/uzun süre)",
        "3. Suçun nitelikli hallerinin (silahla, cinsel amaçla, birden fazla kişiyle) varlığı",
        "4. Suçun işlenmesinde cebir/tehdit kullanılıp kullanılmadığı",
        "5. Mağdurun hürriyetinden yoksun bırakıldığı yerin (konut, araç vb.) tespiti"
    ],
    "TCK 119 - Kamu Görevlisi Tarafından İrtikap (TCK 250)": [
        "1. Failin **kamu görevlisi** olup olmadığı",
        "2. Görevinin sağladığı nüfuzu kötüye kullanarak menfaat sağlayıp sağlamadığı",
        "3. Mağdurun, memurun nüfuzuna inanarak menfaat teminine rıza gösterip göstermediği",
        "4. Suçun **icbar (zorlama)** veya **ikna (kandırma)** suretiyle işlenip işlenmediği",
        "5. Suçun rüşvetten (TCK 252) ayrımının yapılması"
    ],
    "TCK 125 - Hakaret Suçu": [
        "1. Eylemin **somut bir olgu** isnat edip etmediği veya **sövme** niteliğinde mi olduğu",
        "2. Hakaretin **yüzüne karşı, sesli, yazılı veya görsel** iletişim araçlarıyla yapılıp yapılmadığı (TCK 125/2)",
        "3. Suçun kamu görevlisine karşı görevinden dolayı işlenip işlenmediği (TCK 125/3)",
        "4. Suçun şikayete tabi olup olmadığı (Kural olarak 6 ay içinde şikayet)",
        "5. **Karşılıklı hakaret** durumunun (TCK 129/3) ve haksız tahrik indiriminin değerlendirilmesi"
    ],
    "TCK 132 - Haberleşmenin Gizliliğini İhlal": [
        "1. Haberleşmenin (telefon, e-posta, mektup) içeriğinin rızasız olarak **dinlenip, kaydedilip veya ele geçirilip** geçirilmediği",
        "2. Suçun nitelikli halinin (içeriğin yayınlanması veya başkasına verilmesi) varlığı",
        "3. Suçun şikayete tabi olup olmadığı (Kural olarak şikayete tabidir)",
        "4. Delilin (ses kaydı, yazışma) hukuka aykırı yollarla elde edilip edilmediği (CMK 135/2)",
        "5. TCK 133 (Özel hayatın gizliliğini ihlal) suçuyla ayrımı"
    ],
    "TCK 134 - Özel Hayatın Gizliliğini İhlal": [
        "1. Kişinin **özel hayat alanına** (konut, yatak odası, özel görüşmeler) rızasız girilip girilmediği",
        "2. Özel hayat kapsamındaki ses/görüntülerin **kaydedilip veya yayınlanıp** yayınlanmadığı (TCK 134/2)",
        "3. Eylemin, kişinin bulunduğu yerden ayrılmasıyla özel hayatın gizliliğini ihlal edip etmediği (Takip etme)",
        "4. Suçun şikayete tabi olup olmadığı",
        "5. Suçun işlenmesinde kullanılan araçların (casus yazılım, kamera) tespiti"
    ],
    "TCK 141/142 - Hırsızlık (Nitelikli)": [
        "1. Zilyedin rızası olmaksızın **taşınır malın** alınıp alınmadığı",
        "2. Nitelikli hallerin (Bina içinde, gece vakti, silahla, kamu kurumu malı vb.) varlığı (TCK 142)",
        "3. Hırsızlık suçunun **kullanma hırsızlığı** (TCK 147) olup olmadığının ayrımı",
        "4. Suçun **tamamlanma anı** (Malın zilyetlikten çıkarıldığı an)",
        "5. Hırsızlığa konu malın değerinin **az** olup olmadığı (TCK 145 - Etkin pişmanlık ve indirim sebebi)"
    ],
    "TCK 148 - Yağma (Gasp) Suçu": [
        "1. Malın alınmasında **cebir veya tehdit** kullanılıp kullanılmadığı",
        "2. Cebir/tehdidin malı almaya elverişli ve yoğunlukta olup olmadığı",
        "3. Nitelikli hallerin (Silahla, birden fazla kişiyle, gece vakti, yol kesmek suretiyle) varlığı (TCK 149)",
        "4. Eylemin hırsızlık suçundan (Cebir/tehdit yoksa) ayrımının yapılması",
        "5. Yağma eyleminin **konut dokunulmazlığını ihlal** suçunu da içerip içermediği"
    ],
    "TCK 155 - Güveni Kötüye Kullanma": [
        "1. Suçun konusunun (malın) zilyetliğinin **faile devredilmiş** olup olmadığı",
        "2. Failin malı, devir amacına aykırı olarak kullanıp kullanmadığı (Zilyetliğin devri, mülkiyetin devri yok)",
        "3. Suçun nitelikli halinin (Meslek ve sanat nedeniyle, hizmet ilişkisi nedeniyle) varlığı",
        "4. Suçun şikayete tabi olup olmadığı (Basit güveni kötüye kullanma şikayete tabidir)",
        "5. Borcun ödenmemesi (Hukuki ihtilaf) ile suç arasındaki ayrımın yapılması"
    ],
    "TCK 157/158 - Dolandırıcılık (Nitelikli)": [
        "1. Failin **hileli davranışlarla** mağduru aldatıp aldatmadığı",
        "2. Mağdurun aldatma sonucu **zararına** faile veya başkasına yarar sağlayıp sağlamadığı",
        "3. Nitelikli hallerin tespiti (**TCK 158/1/f: Bilişim sistemleri, banka veya kredi kurumlarını araç olarak kullanma**)",
        "4. Suçun kamu kurumu zararına (TCK 158/1/e) işlenip işlenmediği",
        "5. Hileli davranışın **icat edilmiş** (yeni) veya **basit** düzeyde olup olmadığının değerlendirilmesi"
    ],
    "TCK 163 - Karşılıksız Yararlanma (Elektronik ve Bilişim)": [
        "1. Mağdurun rızası olmaksızın **otomat, bilişim sistemleri, elektrik** gibi hizmetlerden yararlanılıp yararlanılmadığı",
        "2. TCK 163/3'deki nitelikli halin (Elektronik kart, şifre, kod kullanımı) varlığı",
        "3. Suçun şikayete tabi olup olmadığı (TCK 167/2 - Hukuki ilişki varsa şikayete tabidir)",
        "4. Zararın miktarının tespiti",
        "5. Etkin pişmanlık (TCK 168) hükümlerinin uygulanıp uygulanmayacağı"
    ],
    "TCK 167 - Şahsi Cezasızlık ve Etkin Pişmanlık (Malvarlığı Suçları)": [
        "1. Fail ile mağdur arasında **şahsi cezasızlık** nedeninin (üstsoy/altsoy, eş, kardeş) olup olmadığı (TCK 167/1)",
        "2. Suçun niteliğinin (Dolandırıcılık, Yağma, Konut dokunulmazlığını ihlal) şahsi cezasızlığı kaldırıp kaldırmadığı (TCK 167/3)",
        "3. Failin zararı **tamamen giderip** gidermediği (Etkin Pişmanlık TCK 168/1)",
        "4. Etkin pişmanlığın ne zaman (Kovuşturma başlamadan önce/hükümden önce) gösterildiğinin tespiti",
        "5. Zararın kısmen giderilmesinin (TCK 168/2) indirim nedeni olup olmayacağının değerlendirilmesi"
    ],
    "TCK 179 - Trafik Güvenliğini Tehlikeye Sokma": [
        "1. Failin **alkol, uyuşturucu madde** veya **bilinçli taksirle** hareket edip etmediği (TCK 179/3)",
        "2. Kanuni limitlerin (alkol/uyuşturucu) aşılıp aşılmadığının tespiti",
        "3. Failin aracı tehlikeli şekilde kullanıp kullanmadığı (Hız limiti, kırmızı ışık vb.)",
        "4. Eylemin **somut bir tehlike** yaratıp yaratmadığı",
        "5. Kazanın ölüm veya yaralama gibi bir neticeye yol açıp açmadığı (TCK 179/2)"
    ],
    "TCK 188 - Uyuşturucu veya Uyarıcı Madde Ticareti": [
        "1. Failin eyleminin **kullanma** (TCK 191) mı yoksa **ticaret/tedarik** (TCK 188) kapsamına mı girdiği",
        "2. Madde miktarının ve niteliğinin (uyuşturucu/uyarıcı) tespiti",
        "3. Satış, tedarik, sevk veya depolama eylemlerinden hangisinin gerçekleştiği",
        "4. Suçun nitelikli hallerinin (örgüt faaliyeti, kamu görevlisi tarafından) varlığı",
        "5. **Etkin pişmanlık** hükümlerinin (TCK 192) uygulanıp uygulanmayacağı",
	"6. Uyuşturucunun saf gramajı mı yoksa tütünle karışık mı olduğunun tespiti (tütün ile karışıksa, ATK'dan veya ATK'ya gönderilmek üzere ilgili ACM'den ayrıştırma istemelisiniz)"
    ],
    "TCK 191 - Kullanmak İçin Uyuşturucu Madde Bulundurma": [
        "1. Failin üzerindeki/evindeki maddenin **kişisel kullanım sınırı** içinde kalıp kalmadığı (Miktar ve çeşitlilik)",
        "2. Suçun denetimli serbestlik hükümleri kapsamında olup olmadığı",
        "3. Denetimli serbestlik süresi içinde (5 yıl) yeni bir suç işlenip işlenmediği",
        "4. Tedavi ve denetimli serbestlik tedbirine uyulup uyulmadığı",
        "5. Suçun **ihbarı** halinde etkin pişmanlık hükümlerinin uygulanıp uygulanmayacağı (TCK 192)"
    ],
    "TCK 204/206 - Resmi Belgede Sahtecilik": [
        "1. Sahte belgenin **resmi belge** niteliğinde olup olmadığı (TCK 204)",
        "2. Sahteciliğin **düzenleme yetkisi olmayan kamu görevlisi** tarafından yapılıp yapılmadığı (TCK 204/2)",
        "3. Sahteciliğin aldatma yeteneği (hukuki sonuç doğurma potansiyeli) olup olmadığı",
        "4. **Özel belgede sahtecilik** (TCK 207) ile ayrımının yapılması",
        "5. Sahte belgenin **kullanılıp kullanılmadığı** (Sahtecilik suçu kullanmayla tamamlanır)"
    ],
    "TCK 216 - Halkı Kin ve Düşmanlığa Tahrik": [
        "1. Eylemin **aleni** (herkesin görebileceği/duyabileceği yerde) yapılıp yapılmadığı",
        "2. Eylemin, halkın belli bir kesiminin **diğer bir kesimine** karşı **kin ve düşmanlığa** sevk edip etmediği",
        "3. Tahrikin **kamu güvenliği** açısından **açık ve yakın bir tehlike** doğurup doğurmadığı",
        "4. Suçun, TCK 218 (Basın ve yayın yoluyla işleme) nitelikli haliyle işlenip işlenmediği",
        "5. İfade özgürlüğü sınırlarının aşılıp aşılmadığı"
    ],
    "TCK 220 - Suç İşlemek Amacıyla Örgüt Kurma": [
        "1. En az **üç kişinin** bir araya gelip gelmediği",
        "2. Amacın **kanunda sayılan suçları** (hapis cezasının alt sınırı bir yıl veya daha fazla) işlemek olup olmadığı",
        "3. Örgütün **yapısı, hiyerarşisi ve devamlılığı** (sürekli suç işleme amacı) olup olmadığı",
        "4. Örgüte üye olma (TCK 220/2) veya yardım etme (TCK 220/3) eylemlerinin tespiti",
        "5. Örgüt liderinin (TCK 220/1) rolünün belirlenmesi"
    ],
    "TCK 239 - Ticari Sır, Bankacılık Sırrı veya Müşteri Sırrı İhlali": [
        "1. Açıklanan/elde edilen bilginin **ticari sır, bankacılık sırrı veya müşteri sırrı** niteliğinde olup olmadığı",
        "2. Eylemin, hukuka aykırı olarak sırrı **açıklama, ele geçirme veya kullanma** şeklinde olup olmadığı",
        "3. Suçun, yetkili kişiler tarafından görevleri dolayısıyla öğrenilen sırlar hakkında işlenip işlenmediği",
        "4. Suçun şikayete tabi olup olmadığı (Kural olarak şikayete tabidir)",
        "5. Sırrın açıklanması nedeniyle **maddi zararın** meydana gelip gelmediği"
    ],
    "TCK 243 - Bilişim Sistemine Girme": [
        "1. Bilişim sistemine **hukuka aykırı** ve **izinsiz** olarak girilip girilmediği",
        "2. Suçun tamamlanma anının (Sisteme giriş anı)",
        "3. Sistemin içeriğinde kalıp kalmadığı (243/2 - Veri silme, değiştirme)",
        "4. Eylemin **nitelikli hali** (Bankacılık, kamu kurumu bilişim sistemi) olup olmadığı (TCK 244-245)",
        "5. Suçun basit hali için şikayet şartının olup olmadığı"
    ],
    "TCK 245 - Banka veya Kredi Kartlarının Kötüye Kullanılması": [
        "1. Kartın (banka/kredi) veya bilgilerin (şifre, numara) **hukuka aykırı** olarak ele geçirilip geçirilmediği",
        "2. Kartın/bilgilerin **izin alınmaksızın** kullanılıp kullanılmadığı",
        "3. Eylemin kartın **sahte** üretilmesi (TCK 245/2) şeklinde olup olmadığı",
        "4. Failin, kendi hesabına ait kartı borcunu ödemeden kullanma (TCK 245/3) hükmüyle ayrımı",
        "5. Oluşan zararın tespiti ve **etkin pişmanlık** hükümlerinin uygulanabilirliği"
    ],
    "TCK 250 - İrtikap Suçu (İcbar Suretiyle)": [
        "1. Failin **kamu görevlisi** olup olmadığı",
        "2. Mağdurun, memurun **zorlaması (icbar)** sonucu menfaat temin etme zorunda kalıp kalmadığı",
        "3. Zorlamanın **hukuka aykırı** ve **cebir** düzeyinde olup olmadığı",
        "4. İrtikap suçunun, rüşvet ve görevi kötüye kullanma suçlarından ayrımının yapılması",
        "5. Mağdurun menfaati temin ederken **iradesinin sakatlanıp** sakatlanmadığı"
    ],
    "TCK 252 - Rüşvet Suçu": [
        "1. Eylemin **kamu görevlisinin** görevinin ifasıyla ilgili olup olmadığı",
        "2. Rüşvet anlaşmasının (teklif, kabul, vaat) oluşup oluşmadığı",
        "3. Suçun, rüşvet alan (TCK 252/1) ve rüşvet veren/vaat eden (TCK 252/2) tarafından ayrı ayrı değerlendirilmesi",
        "4. Rüşvetin konusunun (menfaat) tespiti",
        "5. **Etkin pişmanlık** (TCK 254) hükümlerinin uygulanıp uygulanmayacağı"
    ],
    "TCK 257 - Görevi Kötüye Kullanma": [
        "1. Failin eyleminin **görevinin gereklerine aykırı** olup olmadığı",
        "2. Bu aykırılığın **mağdurun mağduriyetine** veya **kamunun zararına** yol açıp açmadığı (TCK 257/1)",
        "3. Eylemin TCK'da daha ağır bir suçun (Rüşvet, İrtikap) konusunu oluşturup oluşturmadığı",
        "4. Görevi ihmal (TCK 257/2) ile görevdeki keyfiliğin ayrımı",
        "5. Kamu zararının veya kişisel menfaatin somut olarak tespiti"
    ],
    "TCK 265 - Görev Suçunda Direnme": [
        "1. Failin, **kanuni bir emrin** yerine getirilmesini engellemek amacıyla kamu görevlisine karşı cebir veya tehdit kullanıp kullanmadığı",
        "2. Direnme eyleminin, memurun görevinin ifası sırasında gerçekleşip gerçekleşmediği",
        "3. Direnme eyleminin **kasten yaralama** suçunu da oluşturup oluşturmadığı (TCK 265/2)",
        "4. Eylemin TCK 118 (Sendikal hakları kullanmaya engel olma) suçuyla ayrımı",
        "5. Kamu görevlisine karşı yapılan eylemin **hukuka aykırı** olup olmadığı"
    ],
    "TCK 267 - İftira Suçu": [
        "1. Failin, hakkında soruşturma/kovuşturma başlatılmasını sağlamak amacıyla, **gerçeğe aykırı** isnatta bulunup bulunmadığı",
        "2. İsnadın **somut ve ceza hukuku anlamında suç** oluşturacak nitelikte olması",
        "3. Suçun nitelikli hali (İftira sonucu mağdur hakkında **hapis cezası** verilmesi) olup olmadığı (TCK 267/2)",
        "4. İsnadın **yazılı veya görsel** iletişim araçlarıyla yapılıp yapılmadığı",
        "5. **Gönüllü vazgeçme** (TCK 269) hükümlerinin uygulanıp uygulanmayacağı"
    ],
    "TCK 270 - Suçu Bildirmeme": [
        "1. Eylemin, **işlenmiş bir suçun varlığını** öğrenme şeklinde olup olmadığı",
        "2. Suçun **yetkili makamlara** bildirilmesi zorunluluğunun yerine getirilip getirilmediği",
        "3. Suçun konusunun (Ağır bir suç olması - TCK 270/2)",
        "4. Bildirmeme nedeniyle failin **cezalandırılmasının engellenip** engellenmediği",
        "5. TCK 278 (Suçu bildirmeme) ile ayrımının yapılması (Bu madde kamu görevlisi dışındaki kişileri kapsar)"
    ],
    "TCK 275 - Yalan Tanıklık": [
        "1. Yalan beyanın **yeminli** olarak yapılıp yapılmadığı",
        "2. Tanıklığın **mahkeme veya yetkili merciler** önünde yapılıp yapılmadığı",
        "3. Yalan tanıklığın **suçun sonucuna** (hüküm) etki edip etmediği",
        "4. Yalan tanıklıktan **gönüllü vazgeçme** (TCK 276) hükmünün uygulanıp uygulanmayacağı",
        "5. Yalan beyanın **yazılı veya sözlü** olarak verilip verilmediği"
    ],
    "TCK 279 - Kamu Görevlisinin Suçu Bildirmemesi": [
        "1. Failin **kamu görevlisi** olup olmadığı",
        "2. Suçun, görevi gereği **öğrenilmiş** olması",
        "3. Suçun, **yetkili makamlara bildirilmesi zorunluluğunun** yerine getirilip getirilmediği",
        "4. Suçun konusunun niteliği ve ağırlığı",
        "5. Suçun zamanaşımı ve şikayet süresinin kontrolü"
    ],
    "TCK 283 - Suçtan Kaynaklanan Malvarlığı Değerlerini Aklama": [
        "1. Aklama fiilinin konusunun (malvarlığının) **bir öncül suçtan** (TCK 282/1'deki suçlar) kaynaklanıp kaynaklanmadığı",
        "2. Failin eyleminin, malvarlığı değerinin **yasal yollardan elde edilmiş görünümünü** verme amacı taşıyıp taşımadığı",
        "3. Aklama yönteminin (Para transferi, taşınmaz alımı, şirket kurma) tespiti",
        "4. Failin, aklanan malvarlığını **bilip bilmediği** (TCK 282/1)",
        "5. **Etkin pişmanlık** (TCK 282/5) hükümlerinin uygulanabilirliği"
    ],
    "TCK 288 - Adil Yargılamayı Etkilemeye Teşebbüs": [
        "1. Eylemin **görevi nedeniyle yargı görevi yapanı** etkileme amacı taşıyıp taşımadığı",
        "2. Eylemin **kanuna aykırı** bir karar verme veya işlem yapma yönünde baskı yapılıp yapılmadığı",
        "3. Baskının **cebir, tehdit veya hile** şeklinde olup olmadığı",
        "4. Suçun teşebbüs aşamasında kalıp kalmadığı",
        "5. Eylemin **ifade özgürlüğü** sınırlarını aşıp aşmadığı"
    ],
    "TCK 299 - Cumhurbaşkanına Hakaret": [
        "1. Eylemin **alenen** veya **özel** ortamda yapılıp yapılmadığı",
        "2. Eylemin **Cumhurbaşkanının onur, şeref ve saygınlığını** zedeleyici nitelikte olup olmadığı",
        "3. Eylemin hakaret (TCK 125) suçundan ayrımının yapılması",
        "4. Kovuşturma yapılabilmesi için **Adalet Bakanı'nın izninin** olup olmadığı (Ön şart)",
        "5. Eylemin eleştiri sınırları içinde kalıp kalmadığı"
    ],
    "TCK 300 - Devletin Egemenlik Alametlerini Aşağılama": [
        "1. Eylemin **Türk Bayrağını, İstiklal Marşını, TBMM'yi** veya **Türkiye Cumhuriyeti'ni** alenen aşağılama niteliği taşıyıp taşımadığı",
        "2. Aşağılama eyleminin **alenen** yapılıp yapılmadığı",
        "3. Suçun, düşünce ve ifade özgürlüğü sınırlarını aşıp aşmadığı",
        "4. Eylemin **şiddet ve nefret** içerip içermediği",
        "5. Suçun, TCK 301 (Türk Milletini, Cumhuriyeti ve Devletin Kurum ve Organlarını Aşağılama) suçuyla ayrımı"
    ],
    "TCK 302 - Devletin Birliğini ve Ülke Bütünlüğünü Bozma": [
        "1. Suçun amacının, **Devletin birliğini, ülke bütünlüğünü bozmak, Devletin egemenliğini zayıflatmak** olup olmadığı",
        "2. Eylemin **cebir ve şiddet** kullanılarak yapılıp yapılmadığı (Cebir, zorlama)",
        "3. Suçun, **terör örgütü** faaliyeti çerçevesinde işlenip işlenmediği (Terörle Mücadele Kanunu)",
        "4. Suça iştirak edenlerin (Azmettiren, yardım eden) rolünün belirlenmesi",
        "5. Eylemin **teşebbüs** aşamasında kalıp kalmadığı (Teşebbüs dahi cezalandırılır)"
    ],
    "TCK 309 - Anayasayı İhlal": [
        "1. Eylemin, **cebir ve şiddet kullanarak** Anayasanın öngördüğü düzeni (Yasama, Yürütme, Yargı) ortadan kaldırma girişimi olup olmadığı",
        "2. Suçun **failinin** (Kamu görevlisi, sivil, örgüt üyesi) tespiti",
        "3. Suçun, **darbe, isyan veya ayaklanma** şeklinde gerçekleşip gerçekleşmediği",
        "4. Eylemin TCK 302 (Devletin Birliğini Bozma) ve TCK 312 (Silahlı Örgüt) suçlarından ayrımı",
        "5. Suçun teşebbüs aşamasında kalıp kalmadığı"
    ],
    "TCK 314 - Silahlı Örgüt Kurma/Yönetme/Üye Olma": [
        "1. Örgütün **silahlı** niteliğinin tespiti",
        "2. Failin örgüt içindeki **rolünün** (Kurucu, yönetici, üye) belirlenmesi",
        "3. Örgütün amacının (Suç işlemek, Devletin güvenliğine karşı eylemler) tespiti",
        "4. Suçun, TCK 220 (Suç İşlemek Amacıyla Örgüt Kurma) suçuyla ayrımı",
        "5. Örgüt üyeliği için **hukuki aidiyetin** ispatı (Kişinin örgüte bağlılığı, hiyerarşi)"
    ],
    "TCK 316 - Suç İçin Anlaşma": [
        "1. İki veya daha fazla kişinin **en az bir yıl hapis cezası** gerektiren bir suçun işlenmesi için anlaşması",
        "2. Suçun **teşebbüs aşamasında** kalıp kalmadığı",
        "3. Suç için anlaşmanın, TCK 220 (Örgüt Kurma) suçuyla ayrımının yapılması (Örgütte süreklilik ve hiyerarşi aranır)",
        "4. Anlaşmanın **somut ve ciddi** nitelikte olup olmadığı",
        "5. Anlaşma konusu suçun işlenip işlenmediği"
    ],
    "TCK 326 - Devlet Sırlarından Yararlanma, Ticarette Kullanma": [
        "1. Failin eyleminin **devlet sırrını** açıklaması veya ticarette kullanması şeklinde olup olmadığı",
        "2. Bilginin **devlet sırrı** niteliğinde olup olmadığının tespiti",
        "3. Eylemin **hukuka aykırı** ve **izinsiz** olarak yapılıp yapılmadığı",
        "4. Suçun nitelikli hallerinin (Sırrı rüşvetle açıklama) varlığı",
        "5. Suçun **casusluk** (TCK 328, 330) suçlarından ayrımının yapılması"
    ],
    "TCK 328 - Siyasi ve Askeri Casusluk": [
        "1. Failin amacının, **Devletin güvenliğine veya siyasal yararlarına** ilişkin bilgileri temin edip yabancı devlete/kişiye vermesi",
        "2. Casusluk eyleminin **gizli bilgi** elde etme şeklinde olup olmadığı",
        "3. Bilginin içeriğinin ve öneminin tespiti",
        "4. Suçun **teşebbüs aşamasında** kalıp kalmadığı",
        "5. Casusluk faaliyetinin **örgüt faaliyeti** kapsamında olup olmadığı"
    ],
    "TCK 340 - Askerlikten Kaçma (Firar)": [
        "1. Failin **askerlik yükümlüsü** olup olmadığı",
        "2. Yoklama kaçağı, bakaya veya firar durumlarından hangisinin gerçekleştiği",
        "3. Yoklama kaçağının **savaşa, seferberliğe veya olağanüstü hale** ilişkin olup olmadığı",
        "4. Firar eyleminin süresinin tespiti (7 gün/Daha uzun süre)",
        "5. Suçun **zamanaşımı** süresinin kontrolü (Askeri Ceza Kanunu hükümleri)"
    ],
    "TCK 172 - Çevrenin Kasten Kirletilmesi": [
        "1. Eylemin **izinsiz** ve **bilinçli** olarak yapılıp yapılmadığı",
        "2. Eylemin, çevreyi (hava, su, toprak) **kalıcı** veya **ciddi** şekilde kirletip kirletmediği",
        "3. Atık/maddenin **tehlikeli** olup olmadığı",
        "4. Suçun, TCK 171 (Çevrenin taksirle kirletilmesi) suçundan ayrımının yapılması",
        "5. Çevre üzerindeki zararın **bilirkişi** raporuyla tespiti"
    ],
    "TCK 181 - Su Kaynaklarının Kirlenmesi": [
        "1. Eylemin **içme suyu** kaynaklarını veya **nehir/göl** gibi su rezervlerini kirletip kirletmediği",
        "2. Kirliliğin **geçici** veya **kalıcı** nitelikte olup olmadığı",
        "3. Kirliliğin **halk sağlığı** açısından tehlike yaratıp yaratmadığı",
        "4. Suçun kasten veya taksirle işlenip işlenmediği",
        "5. Suçun şikayete tabi olup olmadığı"
    ],
    "TCK 285 - Gizliliğin İhlali (Soruşturma/Kovuşturma Gizliliği)": [
        "1. Eylemin **soruşturma/kovuşturma aşamasında** gerçekleşip gerçekleşmediği",
        "2. Bilginin **gizli** olup olmadığı (Soruşturma dosyasının içeriği, tanık beyanları vb.)",
        "3. Gizliliğin ihlalinin **kamu görevlisi** tarafından yapılıp yapılmadığı (TCK 285/2)",
        "4. İhlalin, soruşturmanın veya kovuşturmanın **selametini** tehlikeye atıp atmadığı",
        "5. Gizliliğin ihlali eyleminin **yazılı veya görsel** iletişim araçlarıyla yapılıp yapılmadığı"
    ],
    "TCK 288 - Yargılamayı Etkilemeye Teşebbüs": [
        "1. Yargılamayı yapan **yargıç, savcı veya bilirkişiyi** etkileme amacı taşıyıp taşımadığı",
        "2. Etkileme eyleminin **cebir, tehdit, yasa dışı vaat** şeklinde olup olmadığı",
        "3. Eylemin, **adil yargılama ilkesini** ihlal edip etmediği",
        "4. Suçun, TCK 267 (İftira) suçuyla ayrımının yapılması",
        "5. Yargılamayı etkileme teşebbüsünün **somut ve ciddi** nitelikte olup olmadığı"
    ],
    "TCK 290 - Suçluyu Kayırma": [
        "1. Suçluyu kayırma eyleminin, **işlenmiş bir suçu** gizleme veya failin **kaçmasını kolaylaştırma** şeklinde olup olmadığı",
        "2. Fail ile kayrılan kişi arasında **akrabalık ilişkisi** olup olmadığı (TCK 291 - Cezadan muafiyet nedeni)",
        "3. Kayırma eyleminin **kamu görevlisi** tarafından görevi gereği yapılıp yapılmadığı (TCK 290/2)",
        "4. Kayırma eylemi nedeniyle failin **cezalandırılmasının engellenip** engellenmediği",
        "5. Suçun şikayete tabi olup olmadığı"
    ],
    "TCK 297 - Hükümlü veya Tutuklunun Kaçması": [
        "1. Kaçan kişinin **hükümlü veya tutuklu** statüsünde olup olmadığı",
        "2. Kaçma eyleminin **cebir veya şiddet** kullanılarak yapılıp yapılmadığı (TCK 297/2)",
        "3. Eylemin **kamu görevlisinin** (gardiyan, jandarma) görevini yapmasını engelleme şeklinde olup olmadığı",
        "4. Kaçan kişinin **gönüllü olarak geri dönüp** dönmediği (TCK 297/3 - İndirim nedeni)",
        "5. Kaçma eylemine **yardım** edenlerin tespiti (TCK 295)"
    ],
    "TCK 306 - Yabancı Devlet Aleyhine Asker Toplama": [
        "1. Failin eyleminin, **Türkiye'nin taraf olduğu bir yabancı devlete karşı** asker toplama şeklinde olup olmadığı",
        "2. Eylemin, **Devletler Hukukuna** aykırılık teşkil edip etmediği",
        "3. Suçun **alenen** işlenip işlenmediği",
        "4. Toplanan asker sayısının ve eylemin amacının tespiti",
        "5. Suçun **savaş, seferberlik veya olağanüstü hal** durumunda işlenip işlenmediği"
    ],
    "TCK 310 - Cumhurbaşkanına Suikast ve Fiili Saldırı": [
        "1. Eylemin **Cumhurbaşkanına karşı** işlenmiş olması",
        "2. Eylemin amacının **suikast** (öldürme kastı) veya **fiili saldırı** (yaralama, cebir) olup olmadığı",
        "3. Suçun **teşebbüs** aşamasında kalıp kalmadığı",
        "4. Suça iştirak edenlerin tespiti ve rolleri",
        "5. Eylemin **terör örgütü** faaliyeti çerçevesinde işlenip işlenmediği"
    ],
    "TCK 311 - Yasama Organına Karşı Suç": [
        "1. Eylemin **cebir veya tehdit** kullanarak **Türkiye Büyük Millet Meclisi'nin** görevini yapmasını engelleme amacı taşıyıp taşımadığı",
        "2. Meclis üyelerine veya Meclis çalışanlarına karşı cebir kullanılıp kullanılmadığı",
        "3. Suçun **darbe veya isyan** şeklinde gerçekleşip gerçekleşmediği",
        "4. Suçun **terör örgütü** faaliyeti çerçevesinde işlenip işlenmediği",
        "5. Eylemin TCK 309 (Anayasayı İhlal) suçuyla ilişkisinin tespiti"
    ],
    "TCK 312 - Hükümete Karşı Suç": [
        "1. Eylemin **cebir veya tehdit** kullanarak **Türkiye Cumhuriyeti Hükümeti'ni** görevini yapmaktan alıkoyma amacı taşıyıp taşımadığı",
        "2. Eylemin **darbe veya isyan** şeklinde gerçekleşip gerçekleşmediği",
        "3. Hükümet üyelerine veya Hükümet binalarına karşı cebir kullanılıp kullanılmadığı",
        "4. Suçun **teşebbüs** aşamasında kalıp kalmadığı",
        "5. Suçun TCK 309 (Anayasayı İhlal) suçuyla ilişkisinin tespiti"
    ],
    "TCK 317 - Yüksek Mahkemelere Karşı Suç": [
        "1. Eylemin **cebir veya tehdit** kullanarak **Anayasa Mahkemesi, Yargıtay, Danıştay** gibi yüksek mahkemeleri etkileme amacı taşıyıp taşımadığı",
        "2. Eylemin **yargı bağımsızlığını** ihlal edip etmediği",
        "3. Mahkeme üyelerine veya binalarına karşı cebir kullanılıp kullanılmadığı",
        "4. Eylemin **adil yargılamayı etkileme** (TCK 288) suçuyla ayrımının yapılması",
        "5. Suçun **teşebbüs** aşamasında kalıp kalmadığı"
    ],
    "TCK 325 - Devlet Sırlarına Karşı Suçlar (İhmal)": [
        "1. Failin, görevi gereği öğrendiği devlet sırrının **korunmasıyla yükümlü** olup olmadığı",
        "2. Sırrın açığa çıkmasının **ihmal** (gerekli özeni göstermeme) sonucu olup olmadığı",
        "3. İhmal sonucu sırrın açıklanmasıyla **devlet güvenliğinin** tehlikeye düşüp düşmediği",
        "4. Suçun **kasten** veya **taksirle** işlenip işlenmediği",
        "5. İhmal sonucu sırrın açıklanmasıyla **maddi zararın** meydana gelip gelmediği"
    ],
    "TCK 159 - İcra ve İflas Kanunu'na Muhalefet (Mal Beyanında Bulunmama)": [
        "1. Failin hakkında **icra takibi** başlatılıp başlatılmadığı",
        "2. Tebligatın usulüne uygun yapılıp yapılmadığı",
        "3. Failin, mal beyanında bulunma **yükümlülüğünü** yerine getirip getirmediği",
        "4. Mal beyanının **yalan** veya **eksik** olup olmadığı",
        "5. Suçun **şikayete** tabi olup olmadığı"
    ],
    "TCK 160 - Bankacılık Kanunu'na Aykırılık (Hesap Bilgilerinin Kötüye Kullanılması)": [
        "1. Eylemin **banka müşterilerinin** hesap bilgileri veya sırları ile ilgili olup olmadığı",
        "2. Banka çalışanının veya ilgili kişinin **görevi nedeniyle** öğrendiği bilgiyi açıklaması",
        "3. Eylemin **maddi zarar** veya **hukuki sonuç** doğurup doğurmadığı",
        "4. Suçun **kasten** işlenip işlenmediği",
        "5. Suçun **şikayete** tabi olup olmadığı"
    ],
    "TCK 166 - Yağma Sonrası Etkin Pişmanlık": [
        "1. Yağma suçunun **tamamlanıp** tamamlanmadığı",
        "2. Failin, **kovuşturma başlamadan önce** veya **hüküm verilmeden önce** pişmanlık gösterip göstermediği",
        "3. Mağdurun zararının **tamamen veya kısmen** giderilip giderilmediği",
        "4. Zararın giderilmesinin **gönüllü** olup olmadığı",
        "5. Etkin pişmanlığın, suçun nitelikli hallerinin (silahlı yağma vb.) varlığında uygulanabilirliği"
    ],
    "TCK 197 - Parada Sahtecilik": [
        "1. Sahte paranın **ulusal veya yabancı para** olup olmadığı",
        "2. Sahte paranın **piyasaya sürülüp** sürülmediği",
        "3. Sahte paranın **gerçek para** gibi algılanma yeteneği (aldatma yeteneği) olup olmadığı",
        "4. Suçun **bilinçli olarak** işlenip işlenmediği (Failin paranın sahte olduğunu bilmesi)",
        "5. **Etkin pişmanlık** hükümlerinin uygulanabilirliği (TCK 200)"
    ],
    "TCK 214 - Suç İşlemek İçin Alenen Tahrik": [
        "1. Eylemin **alenen** (herkesin görebileceği/duyabileceği yerde) yapılıp yapılmadığı",
        "2. Eylemin, **belirli bir suçu işlemeye** yönelik **doğrudan** bir çağrı içerip içermediği",
        "3. Suçun **basın ve yayın** yoluyla işlenip işlenmediği (TCK 218)",
        "4. Eylemin **ifade özgürlüğü** sınırları içinde kalıp kalmadığı",
        "5. Suçun, TCK 216 (Kin ve Düşmanlığa Tahrik) suçuyla ayrımı"
    ],
    "TCK 225 - Hayasızca Hareketler": [
        "1. Eylemin **alenen** (görülme ihtimali olan) yapılıp yapılmadığı",
        "2. Eylemin **cinsel içerikli** ve **edep, iffet duygularını rencide edici** nitelikte olup olmadığı",
        "3. Eylemin TCK 102 (Cinsel Saldırı) suçuyla ayrımının yapılması (Hayasızca hareketler mağdurun vücuduna temas içermez)",
        "4. Eylemin **birden fazla kişiyle** işlenip işlenmediği",
        "5. Suçun şikayete tabi olup olmadığı"
    ],
    "TCK 230 - Aile Hukukundan Kaynaklanan Yükümlülüğün İhlali (Nafaka)": [
        "1. Yükümlülüğün (Nafaka, bakım, gözetim) **mahkeme kararı** ile belirlenip belirlenmediği",
        "2. Mahkeme kararının **kesinleşmiş** olup olmadığı",
        "3. Yükümlülüğün **ihlal edildiği** dönemin tespiti",
        "4. Failin, yükümlülüğünü yerine getirmemesinin **kasten** mi yoksa **maddi imkansızlık** nedeniyle mi olduğunun tespiti",
        "5. Suçun şikayet ve kovuşturma süresinin kontrolü (İİK'daki özel hükümler)"
    ]



}; // ✔ sadece bu kapanış olacak

// -----------------------------
// CHECKLIST VERİSİ BİTİŞİ
// -----------------------------

const caseTypeSelect = document.getElementById("caseType");
const checklistContainer = document.getElementById("checklistContainer");
const currentCaseTitle = document.getElementById("currentCaseTitle");
const itemSearch = document.getElementById("itemSearch");
const btnSelectAll = document.getElementById("btnSelectAll");
const btnClearAll = document.getElementById("btnClearAll");

const progressLabel = document.getElementById("progressLabel");
const progressBarInner = document.getElementById("progressBarInner");


// --------------------------------------------
// 1️⃣ Sayfa yüklendiğinde dava dropdown'u doldur
// --------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const keys = Object.keys(checklists).sort();
    keys.forEach(key => {
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = key;
        caseTypeSelect.appendChild(opt);
    });

    loadDarkMode();
});


// --------------------------------------------
// 2️⃣ Checklist göster
// --------------------------------------------
caseTypeSelect.addEventListener("change", () => {
    const selected = caseTypeSelect.value;

    checklistContainer.innerHTML = "";
    itemSearch.value = "";

    if (!selected) {
        currentCaseTitle.textContent = "Henüz dava seçilmedi.";
        checklistContainer.innerHTML = `<div>Soldan dava seçin.</div>`;
        updateProgress();
        return;
    }

    currentCaseTitle.textContent = selected;

    const items = checklists[selected];
    items.forEach((text, index) => {
        const id = `chk_${selected}_${index}`;

        const div = document.createElement("div");
        div.className = "check-item";

        div.innerHTML = `
            <input type="checkbox" id="${id}">
            <label for="${id}">${text}</label>
        `;

        checklistContainer.appendChild(div);
    });

    restoreChecklistState(selected);
    updateProgress();
});


// --------------------------------------------
// 3️⃣ Progress bar hesaplama
// --------------------------------------------
function updateProgress() {
    const boxes = checklistContainer.querySelectorAll("input[type='checkbox']");
    if (boxes.length === 0) {
        progressLabel.textContent = "0 / 0 • %0";
        progressBarInner.style.width = "0%";
        return;
    }

    let checked = 0;
    boxes.forEach(b => { if (b.checked) checked++; });

    const percent = Math.round((checked / boxes.length) * 100);

    progressLabel.textContent = `${checked} / ${boxes.length} • %${percent}`;
    progressBarInner.style.width = percent + "%";
}


// --------------------------------------------
// 4️⃣ Hepsini işaretle / temizle
// --------------------------------------------
btnSelectAll.addEventListener("click", () => {
    const boxes = checklistContainer.querySelectorAll("input[type='checkbox']");
    boxes.forEach(b => b.checked = true);
    saveChecklistState();
    updateProgress();
});

btnClearAll.addEventListener("click", () => {
    const boxes = checklistContainer.querySelectorAll("input[type='checkbox']");
    boxes.forEach(b => b.checked = false);
    saveChecklistState();
    updateProgress();
});


// --------------------------------------------
// 5️⃣ Madde içinde arama
// --------------------------------------------
itemSearch.addEventListener("input", () => {
    const q = itemSearch.value.toLowerCase();
    const items = checklistContainer.querySelectorAll(".check-item");

    items.forEach(div => {
        const text = div.textContent.toLowerCase();
        div.style.display = text.includes(q) ? "flex" : "none";
    });

    updateProgress();
});


// --------------------------------------------
// 6️⃣ LocalStorage
// --------------------------------------------
function saveChecklistState() {
    const selected = caseTypeSelect.value;
    if (!selected) return;

    const boxes = checklistContainer.querySelectorAll("input[type='checkbox']");
    const state = Array.from(boxes).map(b => b.checked);

    localStorage.setItem("checklist_" + selected, JSON.stringify(state));
}

function restoreChecklistState(selected) {
    const saved = localStorage.getItem("checklist_" + selected);
    if (!saved) return;

    const state = JSON.parse(saved);
    const boxes = checklistContainer.querySelectorAll("input[type='checkbox']");

    boxes.forEach((b, i) => {
        b.checked = state[i];
    });

    updateProgress();
}

checklistContainer.addEventListener("change", () => {
    saveChecklistState();
    updateProgress();
});
// --------------------------------------------
// 7️⃣ Dark Mode Kaydet & Yükle
// --------------------------------------------
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
});

function loadDarkMode() {
    if (localStorage.getItem("dark") === "true") {
        document.body.classList.add("dark");
    }
}
