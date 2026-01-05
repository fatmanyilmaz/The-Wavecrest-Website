# The Wavecrest Hotel Website

The Wavecrest Hotel, modern tasarım anlayışıyla hazırlanmış,
kullanıcı deneyimini ön planda tutan bir otel web sitesi projesidir.

Proje; estetik tasarım, akıcı animasyonlar ve responsive yapı
bir araya getirilerek geliştirilmiştir.

# Temel Özellikler

- Smooth scroll ile sayfa içi navigasyon
- ScrollReveal ile animasyonlu içerikler
- Otomatik ve manuel kontrollü oda slider’ı
- Hover ve click etkileşimli servis alanı
- Otomatik kayan galeri (CSS animation)
- Modern ve premium UI tasarım

# Notlar

Bu proje frontend geliştirme pratiği amacıyla hazırlanmıştır.

Tasarım ve etkileşimler tamamen özelleştirilmiştir.

# Header

<img width="1136" height="612" alt="Ekran Resmi 2026-01-05 16 18 20" src="https://github.com/user-attachments/assets/a33333ff-eb4d-4ea9-b98c-bdffd854dc38" />
Ana sayfa, The Wavecrest Hotel için güçlü bir ilk izlenim oluşturacak şekilde tasarlanmıştır. 

Tam ekran hero görseli, sade tipografi ve dengeli yerleşim sayesinde kullanıcıyı siteye adım attığı anda atmosferin içine çeker.

Header alanında bulunan:
- Home
- About
- Rooms
- Services
- Gallery 
- Contact

butonlarına tıklandığında, kullanıcı sayfa içinde ilgili bölüme yumuşak (smooth) scroll efektiyle yönlendirilir.

Bu yapı sayesinde:
- Sayfa yenilenmeden gezinme sağlanır.
- Kullanıcı aradığı içeriğe hızlıca ulaşır.
- Tek sayfa deneyimi korunur.

Hero alanında:
Büyük arka plan görseli,

Otelin ruhunu yansıtan başlık ve slogan,

Rezervasyon formu (check-in / check-out / guest seçimi) bulunur. 

Bu alan, kullanıcıyı doğrudan aksiyona yönlendirecek şekilde konumlandırılmıştır.
Scroll edildikçe içerikler animasyonlu olarak sırayla görünür ve sayfa boyunca görsel akış bozulmadan devam eder.

# About

<img width="1348" height="748" alt="Ekran Resmi 2026-01-05 16 28 51" src="https://github.com/user-attachments/assets/84061abe-3621-480a-ade8-a5ae7dbb0949" />

About Us bölümü, otelin kimliğini, atmosferini ve hikâyesini yansıtacak şekilde modern ve premium bir tasarımla hazırlanmıştır.

Bölüm yapısı iki ana alandan oluşur:
Sol tarafta otelin sıcaklığını ve konfor hissini yansıtan görsel alan,
Sağ tarafta markanın vizyonunu anlatan metinsel içerik.

Bu düzen, görsel ve metin dengesini koruyarak kullanıcıya sade ve etkileyici bir deneyim sunar.

Kullanıcı sayfayı aşağı kaydırdıkça içerikler sırayla ve akıcı animasyonlarla ekrana gelir:

Sıralı Görünüm (Sequential Arrival): Sayfa aşağı kaydırıldığında önce görsel soldan (origin: 'left') yumuşak bir şekilde belirir. Ardından alt başlık, ana başlık ve açıklama metni belirli milisaniyelik farklarla (delay: 500ms, 1000ms, 1500ms) sırayla takip eder.

- Önce “About Us” alt başlığı görünür.
- Ardından ana başlık gecikmeli olarak ekrana gelir.
- Son olarak açıklama metni ve Read More butonu ortaya çıkar.

Kullanıcı Odaklı Akış: Tüm metinlerin aynı anda patlaması yerine sırayla gelmesi, kullanıcının okuma odağını yönlendirir ve sayfa yüklenme algısını (perceived performance) iyileştirir.

# Video 1

<img width="1691" height="629" alt="Ekran Resmi 2026-01-05 16 38 39" src="https://github.com/user-attachments/assets/a0fb14ed-4819-4d91-ac92-4c48462ff66d" />

Bu bölümde, web sitesinin görsel etkisini güçlendirmek ve kullanıcıyı atmosferin içine çekmek amacıyla döngü halinde oynatılan bir arka plan video kullanılmıştır.

Video, sayfa içinde sürekli tekrar eden (loop) bir yapıdadır ve herhangi bir kesinti hissi yaratmadan arka planda akmaya devam eder. Bu sayede:
- Sayfaya dinamizm kazandırılır.
- Statik görsellere kıyasla daha güçlü bir ilk izlenim oluşturulur.
- Kullanıcının sayfada kalma süresi artırılır.

Bu bölümün temel hedefleri:
- Kullanıcıda lüks ve sakinlik hissi uyandırmak.
- Markanın prestij algısını güçlendirmek.
- Sayfa akışı içinde görsel bir durak noktası oluşturmak.

Sonuç olarak bu video bölümü, sitenin genel tasarım diliyle uyumlu, dikkat çekici ve modern bir deneyim sunacak şekilde tasarlanmıştır.

# Rooms

<img width="1468" height="752" alt="Ekran Resmi 2026-01-05 16 47 43" src="https://github.com/user-attachments/assets/30060e1a-6ad8-4e76-8c56-77327b1e9957" />

Bu bölüm, otelin oda deneyimini kullanıcıya hissettirmek amacıyla minimal, ferah ve odaklanmış bir tasarım anlayışıyla oluşturulmuştur.

Sol tarafta yer alan metin alanı; odaların konfor, estetik ve dinlenme odaklı yapısını vurgularken, sağ tarafta bulunan görsel slider ile bu anlatım görsel olarak desteklenmiştir.

Odalar bölümü içerisinde:

Sayfa aşağı kaydırıldıkça metinler ve görseller scroll animasyonları ile sırayla görünür.

Birden fazla oda görseli slider (carousel) yapısı ile sunulmaktadır.
- Kullanıcı, odalar arasında geçiş yaparak farklı atmosferleri keşfedebilir.
- Aktif görseli temsil eden nokta (dot) göstergeleri sayesinde slider durumu net bir şekilde takip edilebilir.
- Bu yapı, sayfayı kalabalıklaştırmadan çok sayıda içeriğin etkili şekilde sunulmasını sağlar.


# Video 2
<img width="1669" height="783" alt="Ekran Resmi 2026-01-05 17 02 31" src="https://github.com/user-attachments/assets/cf689d70-5902-4dff-a846-119726e4b4be" />

Bu bölüm, otelin kutlama, etkinlik ve özel anlara ev sahipliği yapan atmosferini güçlü bir görsel anlatımla sunmak amacıyla tasarlanmıştır.

Arka planda yer alan video, döngü (loop) halinde otomatik olarak oynatılmakta ve kullanıcı etkileşimine gerek kalmadan kesintisiz bir deneyim sunmaktadır.

Video; davetler, kutlamalar ve sosyal anları yansıtarak sayfaya canlılık ve dinamizm katar.


Video üzerinde konumlandırılan metin alanı:
Animasyonlu olarak değişen ifadelerden oluşur.

Minimal tipografi ve yumuşak geçiş animasyonları ile video ile uyum içinde çalışır.

Metin animasyonu, videonun durağanlaşmasını engelleyerek kullanıcı ilgisini canlı tutar.

# Services

<img width="1372" height="783" alt="Ekran Resmi 2026-01-05 17 07 05" src="https://github.com/user-attachments/assets/41233835-faa5-47b0-9e34-5a5421f3d2ef" />


"Services" bölümü, saf JavaScript (Vanilla JS) kullanılarak kurgulanmış, yüksek etkileşimli bir içerik yönetim modülüdür. 

Kullanıcı deneyimini (UX) önceliklendiren bu yapı, otel hizmetlerini dinamik bir şekilde sunar.

- Event-Driven UI: JavaScript addEventListener metodları ile hem Click hem de MouseEnter olayları dinlenir. Bu sayede kullanıcı bir başlığın üzerine geldiği anda içerik akıcı bir şekilde güncellenir.

- Akıllı Sıfırlama Mekanizması (Reset Logic): e.stopPropagation() ve global bir click dinleyicisi sayesinde, kullanıcı etkileşim alanının dışına tıkladığında içerik otomatik olarak varsayılan (default) durumuna geri döner.

- Görsel Geçiş Efektleri: CSS animasyonları (animate class) JavaScript ile senkronize edilerek, görsellerin değişimi sırasında gözü yormayan yumuşak bir ölçeklendirme ve opaklık geçişi sağlanmıştır.


# Gallery 

<img width="1107" height="849" alt="Ekran Resmi 2026-01-05 23 10 06" src="https://github.com/user-attachments/assets/baf9ac21-369e-4737-a758-609ec29dd4d1" />

Gallery bölümü, görsel zenginliği Pure CSS animasyonları ve JavaScript etkileşimi ile harmanlayan, projenin vitrin niteliğindeki alanıdır.

Bu bölüm, statik görselleri dinamik bir akışa dönüştürerek markanın vizyonunu ("A Glimpse into Our World") modern bir yaklaşımla sunar.

Bu bileşende uygulanan etkileşimler, projenin detaylara verdiği önemi kanıtlamaktadır:

- Hover ile Dinamik Akış Kontrolü (Smart Animation Control): Kullanıcı galerideki bir görsele odaklandığında, animation-play-state: paused özelliği devreye girer. Bu sayede sonsuz döngü (infinite scroll) anlık olarak durur ve kullanıcının görseli detaylı incelemesine olanak tanır. Bu, hem görseller hem de üzerindeki metin katmanları için senkronize bir şekilde çalışır.

- Seçici Filtreleme ve Odaklanma (Selective Focus & Grayscale Effect): Galeri varsayılan olarak filter: grayscale(1) ile siyah-beyaz bir estetiğe sahiptir. Mouse ile bir fotoğrafın üzerine gelindiğinde (hover), sadece o fotoğraf filter: grayscale(0) ile gerçek renklerine kavuşur. Diğer görsellerin gri tonda kalması, kullanıcının dikkatini seçtiği görsele odaklayan güçlü bir görsel hiyerarşi oluşturur.

- CSS Variables: Galeri hızı, görsel genişliği ve miktarı gibi değerler CSS değişkenleri (--width, --quantity) üzerinden yönetilerek kolayca özelleştirilebilir bir yapı kurulmuştur.

- Keyframe Animations: Görsellerin kesintisiz akışı, autoRun ve reversePlay keyframe animasyonları ile milisaniyelik bir hassasiyetle optimize edilmiştir.

- Mask Image: Galerinin her iki yanında bulunan linear-gradient maskeleri, görsellerin ekranın kenarlarından yumuşak bir şekilde kaybolup belirmesini (fade effect) sağlar.


# Footer

<img width="1680" height="370" alt="Ekran Resmi 2026-01-05 23 22 47" src="https://github.com/user-attachments/assets/342f6c21-c182-43a2-aa48-1e9887a5b157" />


The Wavecrest Hotel projesinin en alt kısmında yer alan footer bölümü, sitenin genelindeki minimalizm ve zarafet anlayışını son bir dokunuşla mühürler.

Bu bölüm, teknik karmaşadan uzak, tamamen kullanıcı odaklı ve kurumsal bir kimlik sunmak üzere tasarlanmıştır.



The Wavecrest Hotel projesi, modern ön-yüz (front-end) mimarisinin tüm temel bileşenlerini sistematik bir düzen içinde sunan bir yazılım çalışmasıdır.

Projenin her katmanı, kullanıcıya sunulan görsel verinin teknik doğrulukla işlenmesi prensibiyle geliştirilmiştir.

Projenin Yapısal ve Fiziksel Standartları:

- Tipografik ve Görsel Hiyerarşi: Proje genelinde kullanılan font aileleri ve görsel ağırlıklar, kullanıcının odak noktasını otomatik olarak rezervasyon ve servis gibi kritik eylem alanlarına (Call to Action) yönlendirecek şekilde kalibre edilmiştir.

- Modüler Grid Yapısı: Sayfa düzeni, esnek (fluid) ve modüler bir grid sistemine dayanır; bu sayede farklı ekran çözünürlüklerinde içerik bütünlüğü ve görsel denge korunur.

- İşlevsel Veri Katmanı: Footer ve navigasyon bölümleri, projenin "bilgi mimarisi" (Information Architecture) çerçevesinde; hızlı linkler, kurumsal iletişim verileri ve servis kategorileriyle fiziksel bir dizin yapısı sunar.

- Optimize Edilmiş Medya Entegrasyonu: Yüksek çözünürlüklü görseller ve video arka planları, sayfanın dom yapısına minimum yük bindirecek şekilde optimize edilmiş; görsel kalite ile teknik performans arasındaki denge korunmuştur.

- Arayüz Tutarlılığı: Projenin başlangıcındaki lüks algısı, en alt bölüme kadar korunan renk paleti ve boşluk (white-space) kullanımıyla fiziksel bir marka kimliği oluşturur.

Bu çalışma; modüler CSS yapısı, saf JavaScript (Vanilla JS) tabanlı etkileşimleri ve temiz kod (Clean Code) standartlarıyla sürdürülebilir bir web arayüzü prototipidir.
