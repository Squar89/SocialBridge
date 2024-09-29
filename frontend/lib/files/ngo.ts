import {Organization} from "../storage"

export const ngos: Organization[] = [
    {
        id: 0,
        nazwa: "AKADEMICKI ZWIĄZEK SPORTOWY",
        krs: "138860",
        cel: "Celem działań jest upowszechnianie sportu, kultury fizycznej i turystyki oraz poprawa sprawności fizycznej i zdrowia społeczności akademickiej, dzieci i młodzieży. W planach znajduje się rozwijanie sportu wyczynowego w środowisku akademickim oraz wśród młodszych pokoleń. Akcentuje się także potrzebę aktywizacji społeczności lokalnej oraz kształtowania odpowiedzialności za losy klubów i instytucji. Istotne jest podtrzymywanie tradycji narodowej, rozwijanie świadomości obywatelskiej i wychowanie zgodnie z tradycjami AZS. W działaniach uwzględniono także ochronę środowiska naturalnego, rehabilitację osób z niepełnosprawnościami oraz wyrównywanie szans osób w trudnej sytuacji życiowej. Promuje się integrację europejską, współpracę między społeczeństwami oraz wolontariat. Również podejmowane są kroki w celu przeciwdziałania patologiom społecznym, w tym problemom uzależnień wśród młodzieży. Ważnym aspektem jest propagowanie idei olimpijskiej, sportowego fair play oraz rozwój bazy sportowej, edukacji i promocji zdrowia, dostosowanej do różnych grup społecznych. W ramach działań prowadzone są również badania naukowe w obszarze sportu, rehabilitacji, ochrony zdrowia i ekologii, a także promowana jest kultura oraz aktywizacja seniorów dla ich dobrostanu.",
        cel_mini: "Celem działań jest promowanie sportu i kultury fizycznej wśród społeczności akademickiej oraz dzieci i młodzieży, a także wspieranie integracji, ochrony środowiska, i zdrowia poprzez różnorodne inicjatywy, edukację i badania. Dodatkowo, podejmowane są działania na rzecz rehabilitacji, przeciwdziałania patologiom społecznym oraz aktywizacji seniorów.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "wolontariat", "sport", "srodowisko", "edukacja", "zdrowie"])
    },
    {
        id: 1,
        nazwa: "ARS LEGIS - STOWARZYSZENIE IM. ŚW. IVO HELORY - PATRONA PRAWNIKÓW",
        krs: "248256",
        cel: "Organizacja skupia się na świadczeniu nieodpłatnej pomocy prawnej osobom ubogim oraz wspieraniu ochrony praw i wolności człowieka, zwiększając jednocześnie kulturę prawną społeczeństwa. Działa na rzecz upowszechniania wiedzy o prawie polskim i europejskim, a także promuje inicjatywy edukacyjne, zwłaszcza w zakresie edukacji prawnej. Kładzie nacisk na podnoszenie kwalifikacji prawników w dziedzinie etyki zawodowej oraz integrowanie środowiska prawniczego. Organizacja wspiera prawników znajdujących się w potrzebie, a także działalność duszpasterstwa prawników. Ponadto propaguje kult patrona, św. Ivo Helory, oraz wspiera rozwój społeczeństwa obywatelskiego poprzez organizacje pozarządowe. W ramach swoich działań promuje również alternatywne metody rozwiązywania sporów, takie jak mediacje i arbitraż.",
        cel_mini: "Organizacja skupia się na nieodpłatnej pomocy prawnej osobom ubogim, wspieraniu ochrony praw człowieka, podnoszeniu kultury prawnej społeczeństwa oraz edukacji prawnej, a także na wspieraniu prawników w potrzebie i promocji alternatywnych metod rozwiązywania sporów. Dodatkowo, angażuje się w integrowanie środowiska prawniczego oraz wspiera działalność duszpasterstwa prawników.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "spoleczenstwo"])
    },
    {
        id: 2,
        nazwa: "AUTONOMIA",
        krs: "286784",
        cel: "Celem działań jest przeciwdziałanie przemocy, dyskryminacji i nietolerancji, szczególnie w kontekście płci, orientacji seksualnej, pochodzenia etnicznego, rasy, wieku, wyznania i niepełnosprawności, a także promowanie odwagi cywilnej wobec tych aktów. Istotne jest eliminowanie stereotypów związanych z płcią oraz wspieranie emancypacji grup marginalizowanych. Działania te obejmują także równouprawnienie płci, ochronę praw człowieka, w tym praw kobiet, oraz popularyzację wendo-samoobrony i asertywności jako form przeciwdziałania przemocy. Wspierane są inicjatywy na rzecz rozwoju demokracji i aktywności obywatelskiej. Ważnym elementem jest również zapewnienie bezpieczeństwa publicznego, eliminowanie patologii społecznych oraz promowanie pokojowego rozwiązywania konfliktów. Działania skierowane są także na wspieranie niezależności ekonomicznej, ochronę zdrowia, promowanie kultury fizycznej i sportu, oraz dbałość o ekologię i zrównoważony rozwój poprzez uświadamianie globalnych współzależności, a także wdrażanie nowych technologii informacyjnych.",
        cel_mini: "Celem działań jest przeciwdziałanie przemocy, dyskryminacji oraz nietolerancji, a także wspieranie równych praw i szans, zwłaszcza w kontekście płci, orientacji seksualnej i grup marginalizowanych. Ponadto, promuje się działania na rzecz zdrowia, ochrony środowiska, demokracji, aktywności obywatelskiej oraz wykorzystania nowych technologii.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "bezpieczenstwo", "przemoc", "ekologia"])
    },
    {
        id: 3,
        nazwa: "BAŁTYCKIE STOWARZYSZENIE TŁUMACZY",
        krs: "267265",
        cel: "Stowarzyszenie tłumaczy dąży do integracji środowiska tłumaczeniowego oraz promowania aktywności swoich członków. Pełni również rolę organizacji zawodowej, reprezentując tłumaczy na forum regionalnym, krajowym i międzynarodowym. Do głównych zadań należy ochrona ich praw zawodowych, moralnych oraz materialnych. Stowarzyszenie współpracuje z innymi organizacjami zawodowymi, tworząc i promując najlepsze praktyki standardów usług tłumaczeniowych. Jako instytucja opiniotwórcza i konsultacyjna, angażuje się w kwestie związane z tłumaczeniami oraz prawnym statusem tłumaczy.",
        cel_mini: "Stowarzyszenie tłumaczy promuje integrację środowiska, aktywność członków oraz reprezentuje ich prawa na różnych forach. Dodatkowo współpracuje z innymi organizacjami zawodowymi i tworzy standardy dotyczące świadczenia usług tłumaczeniowych.",
        siedziba_miejscowosc: "GDYNIA",
        tagi: new Set(["tlumacze"])
    },
    {
        id: 4,
        nazwa: "CARITAS DIECEZJI GLIWICKIEJ",
        krs: "247809",
        cel: "Podstawowym celem Caritas jest praktyczna realizacja nauki Jezusa Chrystusa o miłosierdziu, oparta na przykazaniu miłości, które jest interpretowane w kontekście aktualnych potrzeb Kościoła oraz konkretnych sytuacji ludzi. Organizacja ta dąży do osiągnięcia tego celu, zawsze pamiętając o godności każdej osoby.",
        cel_mini: "Podstawowym celem Caritas jest realizacja nauki Jezusa Chrystusa o miłosierdziu, dostosowanej do aktualnych potrzeb ludzkich i sytuacji Kościoła. Organizacja koncentruje się na zachowaniu godności każdej osoby.",
        siedziba_miejscowosc: "GLIWICE",
        tagi: new Set(["religia", "pomoc"])
    },
    {
        id: 5,
        nazwa: "CARITAS ARCHIDIECEZJI GNIEŹNIEŃSKIEJ",
        krs: "195886",
        cel: "Podstawowym celem Caritas A.G jest szerzenie oraz praktyczne realizowanie nauki Jezusa Chrystusa o miłosierdziu chrześcijańskim, z uwzględnieniem doktryny Kościoła katolickiego.",
        cel_mini: "Podstawowym celem Caritas A.G. jest szerzenie i praktyczne wdrażanie nauki Jezusa Chrystusa o miłosierdziu chrześcijańskim, zgodnie z doktryną Kościoła katolickiego.",
        siedziba_miejscowosc: "GNIEZNO",
        tagi: new Set(["charytatywnosc", "religia", "pomoc"])
    },
    {
        id: 6,
        nazwa: "CARITAS DIECEZJI ŁOMŻYŃSKIEJ",
        krs: "905717",
        cel: "Celem Caritas jest prowadzenie działalności charytatywnej i humanitarnej, która ma na celu zaspokajanie duchowych i materialnych potrzeb ludzi. Organizacja opiera się na ewangelicznym przesłaniu miłości, dbając o godność każdej osoby, niezależnie od wyznania, światopoglądu, narodowości, rasy czy przekonań. Działalność Caritas obejmuje zarówno zadania publiczne, jak i projekty o charakterze pożytku publicznego, które są ukierunkowane na wspieranie ogółu społeczności oraz grup osób w szczególnie trudnej sytuacji życiowej lub materialnej w stosunku do reszty społeczeństwa.",
        cel_mini: "Celem Caritas jest działalność charytatywna i humanitarna, która zaspokaja duchowe i materialne potrzeby ludzi, opierając się na ewangelicznym przekazie miłości i godności każdego człowieka, niezależnie od wyznania czy pochodzenia. Organizacja angażuje się w działania na rzecz społeczności oraz grup w trudnej sytuacji życiowej, zapewniając należytą identyfikację organizacyjną i rachunkową.",
        siedziba_miejscowosc: "ŁOMŻA",
        tagi: new Set(["charytatywnosc", "humanitaryzm", "religia", "spoleczenstwo"])
    },
    {
        id: 7,
        nazwa: "CARITAS DIECEZJI SANDOMIERSKIEJ",
        krs: "213751",
        cel: "Celem Caritas D.S. jest szerzenie oraz praktyczne wdrażanie nauki Jezusa Chrystusa o miłosierdziu chrześcijańskim, a także organizowanie, koordynowanie i kierowanie działalnością dobroczynną w diecezji oraz jej reprezentowanie. Organizacja angażuje się w niesienie pomocy ofiarom wypadków komunikacyjnych i współpracuje z innymi organizacjami o profilu charytatywnym.",
        cel_mini: "Celem Caritas D.S. jest szerzenie nauki Jezusa Chrystusa o miłosierdziu, organizowanie działalności dobroczynnej oraz niesienie pomocy ofiarom wypadków komunikacyjnych, a także współpraca z innymi organizacjami charytatywnymi.",
        siedziba_miejscowosc: "SANDOMIERZ",
        tagi: new Set(["religia", "spoleczenstwo"])
    },
    {
        id: 8,
        nazwa: "CARITAS DIECEZJI SIEDLECKIEJ",
        krs: "223111",
        cel: "Organizowanie, koordynowanie i kierowanie działalnością charytatywno-opiekuńczą Kościoła oraz pracą formacyjną stanowi praktyczne wypełnianie nauki Jezusa Chrystusa o miłosierdziu. Działania te wynikają z chrystusowego przykazania miłości, które należy interpretować w kontekście nauki Kościoła oraz wobec aktualnych i konkretnych potrzeb ludzi.",
        cel_mini: "Organizowanie i koordynowanie działalności charytatywno-opiekuńczej w Kościele ma na celu praktyczną realizację nauki Jezusa Chrystusa o miłosierdziu, w kontekście Jego przykazania miłości oraz aktualnych potrzeb ludzkich. Działania te opierają się na nauczaniu Kościoła.",
        siedziba_miejscowosc: "SIEDLCE",
        tagi: new Set(["charytatywnosc", "opieka", "religia"])
    },
    {
        id: 9,
        nazwa: "CARITAS POLSKA",
        krs: "198645",
        cel: "Celem Caritas jest realizacja kościelnej działalności miłosierdzia, która obejmuje zarówno potrzeby duchowe, jak i materialne człowieka. Działalność ta ma na celu pożytek publiczny w obszarze zadań określonych w statucie, w tym charytatywną i humanitarną pomoc, świadczoną z poszanowaniem godności każdej osoby, niezależnie od wyznania, światopoglądu, narodowości, rasy czy przekonań.",
        cel_mini: "Celem Caritas jest prowadzenie działalności miłosierdzia, która obejmuje wsparcie duchowe i materialne dla ludzi, a także działania charytatywne i humanitarne, szanujące godność każdej osoby, niezależnie od wyznania, światopoglądu czy narodowości.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["humanitaryzm", "religia"])
    },
    {
        id: 10,
        nazwa: "CENTRALNY INSTYTUT ANALIZ POLITYCZNO-PRAWNYCH",
        krs: "300443",
        cel: "Zakres działalności obejmuje prowadzenie badań naukowych w dziedzinie nauk politycznych i prawnych, promowanie tych nauk oraz analizowanie ich głównych problemów. Do zadań należy także udzielanie pomocy prawnej podmiotom prywatnym i publicznym oraz działania na rzecz upowszechniania zasad demokratycznego państwa prawa, przejrzystości życia publicznego i społecznej kontroli nad instytucjami zaufania publicznego. Organizacja działa również na rzecz ochrony praw i swobód obywatelskich, równości praw kobiet i mniejszości, a także dostępu do informacji i pomocy prawnej. Obejmuje to również ochronę praw człowieka, zdrowia, konsumentów oraz praw własności przemysłowej. Innymi celami są pomoc społeczna dla rodzin i osób w trudnych sytuacjach życiowych oraz wspieranie tradycji narodowej i świadomości obywatelskiej. Działania są skierowane na rozwój społeczności lokalnych, organizacji pozarządowych oraz stymulowanie rozwoju gospodarczego i przedsiębiorczości. Dodatkowo, organizacja oferuje wsparcie dla ofiar wypadków, klęsk żywiołowych oraz ochronę prawa ofiar przestępstw.",
        cel_mini: "Organizacja zajmuje się badaniami w naukach politycznych i prawnych, promowaniem demokratycznych zasad oraz udzielaniem pomocy prawnej. Działa także na rzecz ochrony praw człowieka, społeczności lokalnych oraz wsparcia różnych grup w trudnej sytuacji życiowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spolecznosc", "prawo", "polityka", "srodowisko", "pomoc"])
    },
    {
        id: 11,
        nazwa: "CENTRUM AKTYWNOŚCI SPOŁECZNEJ PRYZMAT",
        krs: "145638",
        cel: "Celem stowarzyszenia jest wspieranie rozwoju społeczeństwa obywatelskiego poprzez różnorodne działania. Organizacja podejmuje się pomocy społecznej, w tym wsparcia rodzin i osób w trudnych sytuacjach, promując równość szans. Działa na rzecz integracji rodzin, wsparcia systemu pieczy zastępczej oraz zapewnienia dostępu do mieszkań. Stowarzyszenie udziela nieodpłatnej pomocy prawnej, zwiększa świadomość prawną społeczeństwa oraz podejmuje działania na rzecz integracji osób zagrożonych wykluczeniem społecznym. Wspiera także tradycje narodowe, angażuje się w działania prozdrowotne, rehabilitacyjne oraz wspierające osoby z niepełnosprawnościami. Organizacja promuje aktywizację zawodową, równe prawa kobiet i mężczyzn, oraz działania na rzecz dzieci i młodzieży. Ponadto, stowarzyszenie angażuje się w ochronę środowiska, promowanie kultury, turystyki oraz bezpieczeństwa publicznego, zajmując się ponadto pomocą ofiarom katastrof i konfliktów. Wspiera Polonię oraz działalność na rzecz kombatantów i weteranów, a także promuje wolontariat oraz integrację europejską, przyczyniając się do revitalize społecznych i działania na rzecz podmiotów ekonomii społecznej.",
        cel_mini: "Stowarzyszenie ma na celu wsparcie społeczeństwa obywatelskiego poprzez działania na rzecz pomocy społecznej, integracji społecznej, ochrony praw człowieka oraz wsparcia edukacji, kultury i zdrowia. Działalność obejmuje również promowanie przedsiębiorczości, wolontariatu, a także ochronę środowiska i dziedzictwa kulturowego.",
        siedziba_miejscowosc: "SUWAŁKI",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "edukacja", "rodzina"])
    },
    {
        id: 12,
        nazwa: "CENTRUM IM. ADAMA SMITHA - PIERWSZY NIEZALEŻNY INSTYTUT W POLSCE",
        krs: "254595",
        cel: "Celem Centrum jest promowanie i wspieranie wolnego rynku opartego na wartościach takich jak wolność, moralność i odpowiedzialność. Organizacja angażuje się w działania na rzecz rozwoju instytucji oraz przedsięwzięć, które mają na celu umacnianie gospodarki rynkowej, z poszanowaniem własności prywatnej, wolności zawierania umów oraz ograniczonym wpływem władz na procesy gospodarcze.",
        cel_mini: "Celem centrum jest promowanie wolnego rynku opartego na wolności, moralności i odpowiedzialności oraz wspieranie inicjatyw, które rozwijają gospodarkę rynkową z poszanowaniem własności prywatnej i ograniczoną ingerencją władzy.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["moralnosc", "gospodarka"])
    },
    {
        id: 13,
        nazwa: "CENTRUM INICJATYW NA RZECZ POPRAWY BEZPIECZEŃSTWA RUCHU DROGOWEGO",
        krs: "506714",
        cel: "Celem stowarzyszenia jest ograniczenie liczby wypadków drogowych i ich ofiar, a także zwiększenie oraz upowszechnienie wiedzy na temat bezpieczeństwa ruchu drogowego. Organizacja planuje tworzyć własne inicjatywy na rzecz poprawy bezpieczeństwa, wspierać i promować istniejące działania w tej dziedzinie oraz współpracować z instytucjami odpowiedzialnymi za bezpieczeństwo na drogach w realizacji projektów.",
        cel_mini: "Celem stowarzyszenia jest ograniczenie liczby wypadków drogowych i ofiar, a także zwiększenie wiedzy o bezpieczeństwie ruchu drogowego. Organizacja promuje i wspiera inicjatywy dotyczące poprawy bezpieczeństwa, współpracując z odpowiednimi instytucjami.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["bezpieczenstwo"])
    },
    {
        id: 14,
        nazwa: "CENTRUM WSPIERANIA INICJATYW POZARZĄDOWYCH - STOWARZYSZENIE EUROPA NASZ DOM",
        krs: "38263",
        cel: "W ramach integracji kulturalnej Polski z innymi krajami, szczególnie z członkami Unii Europejskiej, podejmowane są różnorodne działania. Obejmują one wspieranie procesów restrukturyzacji gospodarki oraz rozwoju przedsiębiorczości, a także przekształceń gospodarczych na obszarach wiejskich. Ważnym aspektem jest przeciwdziałanie bezrobociu oraz inicjatywy zmierzające do ochrony środowiska naturalnego. Dodatkowo, stawiane są wysiłki na rzecz rozwoju społeczeństwa obywatelskiego w krajach Europy Środkowej oraz zwalczania patologii społecznych. W szczególności wspiera się działania na rzecz osób z niepełnosprawnościami oraz rozwój fizyczny młodzieży.",
        cel_mini: "W działaniach na rzecz integracji kulturowej Polski z innymi krajami, szczególnie w UE, wspiera się także procesy restrukturyzacji gospodarki oraz rozwój przedsiębiorczości i obszarów wiejskich. Dodatkowo, przeciwdziała się bezrobociu, wspiera rozwój społeczeństwa obywatelskiego, inicjatywy na rzecz ochrony środowiska, a także działania na rzecz osób niepełnosprawnych i młodzieży.",
        siedziba_miejscowosc: "TARNÓW",
        tagi: new Set(["spoleczenstwo", "integracja", "gospodarka", "srodowisko", "niepelnosprawnosc"])
    },
    {
        id: 15,
        nazwa: "CZĘSTOCHOWSKIE STOWARZYSZENIE 'ETOH'",
        krs: "266366",
        cel: "Stowarzyszenie prowadzi szeroki wachlarz działań mających na celu wsparcie osób uzależnionych oraz ich rodzin, a także osób bezdomnych i bezrobotnych. Oferuje m.in. terapię podstawową i pogłębioną, psychoterapię indywidualną i grupową oraz rehabilitację. Wspiera osoby w trudnych sytuacjach życiowych, organizuje programy aktywizujące, a także propaguje zdrowie i profilaktykę uzależnień. Działalność obejmuje także pomoc finansową dla dzieci z rodzin dotkniętych problemami społecznymi, wspieranie integracji społecznej oraz działania na rzecz reintegracji zawodowej. Stowarzyszenie współpracuje z różnymi organizacjami i instytucjami oraz prowadzi badania naukowe dotyczące uzależnień i marginalizacji społecznej, dążąc do promowania praw człowieka i integracji europejskiej. Wszelkie dodatkowe cele określone są w statucie.",
        cel_mini: "Organizacja świadczy szereg usług wsparcia, w tym terapie uzależnień, rehabilitację, pomoc psychologiczną oraz edukacyjną dla dzieci, młodzieży i dorosłych, a także działa na rzecz integracji społecznej i przeciwdziałania wykluczeniu. Realizuje również programy wspierające osoby bezdomne, bezrobotne oraz rodziny w trudnych sytuacjach, promując trzeźwość i zdrowie w lokalnych społecznościach.",
        siedziba_miejscowosc: "CZĘSTOCHOWA",
        tagi: new Set(["spoleczenstwo", "wolontariat", "edukacja", "zdrowie", "rehabilitacja", "dzieci"])
    },
    {
        id: 16,
        nazwa: "DIECEZJALNA FUNDACJA OCHRONY ŻYCIA",
        krs: "16304",
        cel: "Celem fundacji jest realizacja działalności pożytku publicznego, obejmującej ochronę poczętego życia oraz kompleksową pomoc samotnym matkom przed i po porodzie. Fundacja wspiera rozwój rodzin poprzez pomoc psychologiczną, pedagogiczną, terapeutyczną, socjalną, prawną, duchową oraz edukacyjną. Działa na rzecz zapobiegania sieroctwu, rozwoju kobiet i równouprawnienia płci, a także oferuje pomoc społeczną osobom w trudnej sytuacji życiowej. Angażuje się w aktywizację oraz reintegrację społeczną osób zagrożonych wykluczeniem, przeciwdziałając patologiom społecznym. W zakresie profilaktyki, fundacja prowadzi działania na rzecz zdrowego stylu życia, a także ochrony praw dzieci oraz wspiera rodziny w opiece nad nimi. Ponadto, oferuje porady prawne, promuje kulturę, sztukę, wolontariat oraz wspiera rozwój społeczeństwa obywatelskiego. Fundacja angażuje się również w pomoc ofiarom katastrof i konfliktów, integrację cudzoziemców, ochronę praw człowieka oraz wspiera podmioty ekonomii społecznej.",
        cel_mini: "Fundacja ma na celu działalność pożytku publicznego, obejmującą m.in. ochronę życia poczętego, pomoc dla samotnych matek oraz wsparcie rodzin w różnych aspektach, w tym psychologicznych i prawnych. Dodatkowo angażuje się w aktywizację społeczną, przeciwdziałanie wykluczeniu, organizację wolontariatu oraz rozwiązywanie problemów społecznych, a także podejmuje działania na rzecz dzieci, młodzieży i integracji cudzoziemców.",
        siedziba_miejscowosc: "OPOLE",
        tagi: new Set(["wsparcie", "spoleczenstwo", "charytatywnosc", "pomoc", "zdrowie"])
    },
    {
        id: 17,
        nazwa: "DOLNOŚLĄSKA FUNDACJA NA RZECZ PIECZY ZASTĘPCZEJ 'PRZYSTANEK RODZINA'",
        krs: "495960",
        cel: "Pomoc społeczna skierowana jest na codzienne wsparcie rodzin funkcjonujących w systemie pieczy zastępczej oraz ich podopiecznych, dzieci znajdujących się w trudnych sytuacjach życiowych lub materialnych. Jej celem jest wyrównywanie szans życiowych dzieci oraz przeciwdziałanie wykluczeniu społecznemu. Dodatkowo, pomoc ta obejmuje wspieranie rodzin w pokonywaniu barier formalno-prawnych oraz administracyjnych. Istotnym aspektem jest również propagowanie idei zakładania i prowadzenia rodzin w systemie pieczy zastępczej, a także poszukiwanie i wdrażanie dobrych wzorców oraz praktyk w tym obszarze, zarówno w kraju, jak i za granicą.",
        cel_mini: "Pomoc społeczna wspiera rodziny w pieczy zastępczej, pomagając dzieciom w trudnych sytuacjach życiowych oraz przeciwdziałając wykluczeniu społecznemu. Dodatkowo, organizacja ta zajmuje się eliminacją barier formalno-prawnych, propagowaniem idei pieczy zastępczej oraz wdrażaniem dobrych praktyk zarówno w kraju, jak i za granicą.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["rownosc", "opieka", "wsparcie", "pomoc"])
    },
    {
        id: 18,
        nazwa: "DOLNOŚLĄSKIE STOWARZYSZENIE KURATORÓW SĄDOWYCH 'FRONTIS'",
        krs: "362117",
        cel: "Celem rozwoju kurateli sądowej jest doskonalenie systemu organizacyjnego oraz współpraca z rządowymi i pozarządowymi organizacjami w zakresie readaptacji osób skazanych, co przyczynia się do poprawy pracy kuratorów sądowych. Kluczowe działania obejmują podnoszenie kwalifikacji zawodowych kuratorów, tworzenie profesjonalnego zaplecza do efektywnej readaptacji, integrację środowiska zawodowego, a także podnoszenie autorytetu zawodu kuratora. Ponadto, istotne jest zapewnienie wysokiego poziomu działalności sądowych kuratorów społecznych oraz prowadzenie działań informacyjno-edukacyjnych dotyczących probacji, profilaktyki społecznej i przeciwdziałania wszelkim formom niedostosowania społecznego.",
        cel_mini: "Współpraca z organizacjami rządowymi i pozarządowymi oraz doskonalenie kuratorów sądowych mają na celu poprawę efektywności systemu kurateli, wspierając readaptację osób skazanych. Kluczowe jest tworzenie profesjonalnego zaplecza oraz podnoszenie autorytetu tej instytucji, a także prowadzenie działań informacyjno-edukacyjnych w zakresie probacji i profilaktyki społecznej.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["prawo"])
    },
    {
        id: 19,
        nazwa: "'DOM WSPÓLNOTY BARKA W DREZDENKU'",
        krs: "249506",
        cel: "Celem Fundacji jest wsparcie osób niepełnosprawnych, bezdomnych, opuszczających zakłady karne oraz psychiatryczne, a także osób samotnie wychowujących dzieci, młodzieży zagrożonej, i osób uzależnionych poprzez rehabilitację i rozwój. Fundacja opiera swoją działalność na społecznej nauce Kościoła rzymskokatolickiego, promując tolerancję wobec innych wyzwań. Kluczowym zadaniem jest reintegracja społeczna osób zagrożonych wykluczeniem, wspieranie ich aktywizacji w życiu społecznym i zawodowym, oraz pobudzanie inicjatyw obywatelskich. Działalność obejmuje szeroki zakres zadań publicznych, takich jak pomoc społeczna, integracja zawodowa, działalność charytatywna, ochrona zdrowia, wsparcie dla osób niepełnosprawnych, promocja zatrudnienia, równość płci, działania na rzecz emerytów, rozwój przedsiębiorczości i wspólnot lokalnych, edukację, wypoczynek dzieci i młodzieży, oraz ochrona praw człowieka i działań na rzecz demokracji.",
        cel_mini: "Celem fundacji jest wspieranie osób niepełnosprawnych, bezdomnych, opuszczających zakłady karne i szpitale psychiatryczne oraz rodzin samotnie wychowujących dzieci poprzez rehabilitację, reintegrację społeczną i aktywizację zawodową. Działalność fundacji obejmuje również pomoc społeczną, charytatywną oraz promowanie równości i ochrony praw człowieka.",
        siedziba_miejscowosc: "DREZDENKO",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "ekonomia", "pomoc", "praca", "niepelnosprawnosc", "rehabilitacja"])
    },
    {
        id: 20,
        nazwa: "ELBLĄSKIE CENTRUM MEDIACJI I AKTYWIZACJI SPOŁECZNEJ",
        krs: "201087",
        cel: "Prowadzenie różnorodnych działań pomocowych i wspierających obejmuje szeroki zakres obszarów, takich jak pomoc społeczna dla osób i rodzin w trudnych sytuacjach życiowych, wspieranie systemu pieczy zastępczej czy udzielanie nieodpłatnej pomocy prawnej oraz zwiększanie świadomości prawnej społeczności, szczególnie na rzecz osób pokrzywdzonych przestępstwem. Dodatkowo, działania te koncentrują się na integracji i reintegracji zawodowej osób zagrożonych wykluczeniem społecznym, działalności charytatywnej oraz pielęgnowaniu tradycji narodowej i kulturowej. Istotna jest również integracja mniejszości etnicznych i narodowych, wsparcie cudzoziemców oraz osób niepełnosprawnych, a także promocja zatrudnienia i równości płci. Wspieranie osób w wieku emerytalnym, rozwój gospodarczy oraz wspólnot lokalnych, a także edukacja i działania na rzecz dzieci i młodzieży, są kluczowymi elementami tych działań, które mają na celu poprawę jakości życia i bezpieczeństwa publicznego w społecznościach lokalnych.",
        cel_mini: "Działania pomocowe obejmują szeroki zakres wsparcia społecznego, edukacyjnego i integracyjnego, mającego na celu pomoc osobom w trudnych sytuacjach życiowych, promowanie równości, wspieranie rodziny oraz ochronę praw różnych grup społecznych. Obejmują również działalność charytatywną, edukację prawną i wsparcie dla osób z mniejszości, osób niepełnosprawnych oraz w każdym innym ważnym obszarze życia społecznego.",
        siedziba_miejscowosc: "ELBLĄG",
        tagi: new Set(["wsparcie", "spoleczenstwo", "charytatywnosc", "prawo", "mniejszosci", "pomoc", "edukacja", "praca"])
    },
    {
        id: 21,
        nazwa: "FEDERACJA KONSUMENTÓW",
        krs: "75284",
        cel: "Cele działania Federacji Konsumentów obejmują szeroki zakres zadań, takich jak upowszechnianie i ochrona praw konsumentów, pomoc społeczną dla rodzin i osób w trudnej sytuacji życiowej, integrację osób zagrożonych wykluczeniem społecznym oraz promocję zdrowia. Ponadto, federacja wspiera osoby niepełnosprawne, promuje aktywizację zawodową bezrobotnych i dba o potrzeby osób w wieku emerytalnym. Działa także na rzecz rozwoju gospodarczego, przedsiębiorczości, innowacji oraz wspólnot lokalnych. W ramach edukacji, ekologii, ochrony praw człowieka i demokracji, federacja koncentruje się na współpracy europejskiej i promowaniu wolontariatu. Dodatkowo, wspiera rodzinę, macierzyństwo oraz zrównoważony rozwój, angażując się także w działania określone dla organizacji pozarządowych. Cele te są związane z ochroną konsumentów, zrównoważoną konsumpcją, edukacją konsumencką oraz poradnictwem obywatelskim.",
        cel_mini: "Celem działania Federacji Konsumentów jest ochrona praw konsumentów oraz promowanie zrównoważonej konsumpcji przez edukację i porady obywatelskie. Zawiera to także wspieranie osób w trudnej sytuacji życiowej oraz działania na rzecz integracji społecznej i zawodowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "pomoc", "praca", "niepelnosprawnosc"])
    },
    {
        id: 22,
        nazwa: "FEDERACJA PRZEDSIĘBIORCÓW POLSKICH",
        krs: "618259",
        cel: "Podstawowym celem Federacji jest ochrona praw oraz reprezentowanie interesów pracodawców zrzeszonych w jej strukturach, szczególnie w kontekście działalności outsourcingowej prowadzanej przez jej członków.",
        cel_mini: "Podstawowym celem Federacji jest ochrona praw i reprezentowanie interesów pracodawców zrzeszonych w niej, zwłaszcza w kontekście działalności outsourcingowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 23,
        nazwa: "FEDERACJA ZWIĄZKÓW ZAWODOWYCH PRACOWNIKÓW OCHRONY ZDROWIA I POMOCY SPOŁECZNEJ",
        krs: "184071",
        cel: "Federacja Związków Zawodowych Pracowników Ochrony Zdrowia i Pomocy Społecznej dąży do zapewnienia godnych warunków pracy i życia swoich członków, chroniąc jednocześnie ich prawa oraz wolności związkowe. Do jej zadań należy obrona interesów zawodowych i materialnych pracowników oraz ich rodzin, a także zapewnienie przestrzegania przepisów prawa pracy i norm dotyczących bezpieczeństwa oraz higieny pracy w zakładach opieki zdrowotnej i pomocy społecznej. Federacja angażuje się w dialog z organami władzy w zakresie istotnych spraw dla pracowników, działa na rzecz kształtowania polityki zdrowotnej państwa zgodnie z ich interesami oraz wpływa na politykę społeczną i gospodarczą kraju. Wspiera też utrwalanie demokratycznych praw oraz swobód obywatelskich i związkowych.",
        cel_mini: "Federacja Związków Zawodowych Pracowników Ochrony Zdrowia i Pomocy Społecznej dąży do zapewnienia godnych warunków pracy, ochrony praw pracowników oraz reprezentowania ich interesów. Jej zadania obejmują obronę praw pracowniczych, kontrolę przestrzegania przepisów prawa pracy oraz wpływanie na politykę zdrowotną i społeczną kraju.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["praca", "prawo", "zdrowie"])
    },
    {
        id: 24,
        nazwa: "FORUM ZWIĄZKÓW ZAWODOWYCH",
        krs: "87470",
        cel: "Podstawowym celem forum jest integracja zrzeszonych organizacji poprzez udzielanie pomocy oraz reprezentowanie ich interesów w kilku kluczowych obszarach. Należą do nich obrona praw i zabezpieczenie interesów społeczno-zawodowych, socjalno-bytowych, kulturalnych oraz ochrona zdrowia i środowiska pracowników, emerytów, rencistów i ich rodzin. Forum dąży także do kształtowania aktywności społecznej i etyki zawodowej, chroniąc godność osób pracujących. Współpracuje również z organizacjami związkowymi zarówno w kraju, jak i za granicą w celu promowania postępu społecznego, praw człowieka oraz swobód demokratycznych, a także działa na rzecz integracji oraz umacniania roli ruchu związkowego.",
        cel_mini: "Forum ma na celu integrację zrzeszonych organizacji oraz reprezentowanie ich interesów w zakresie obrony praw i zabezpieczenia socjalno-zawodowego, kulturowego oraz ochrony zdrowia i środowiska. Dąży do wspierania działalności społecznej, ochrony godności ludzi pracy oraz współpracy z organizacjami związkowymi w kraju i za granicą dla postępu społecznego i praw człowieka.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "integracja", "etyka", "pomoc", "zdrowie"])
    },
    {
        id: 25,
        nazwa: "FUNDACJA DORASTAJ Z NAMI",
        krs: "361265",
        cel: "Celem fundacji jest wspieranie osób niepełnoletnich oraz tych, które uczą się do 25. roku życia, znajdujących się w trudnej sytuacji życiowej lub materialnej na skutek śmierci lub ciężkiego uszczerbku na zdrowiu co najmniej jednego z rodziców, opiekunów prawnych lub osób zobowiązanych do alimentacji, jeśli zdarzenie miało miejsce w czasie pełnienia służby publicznej lub w wyniku klęsk żywiołowych czy katastrof. Fundacja przyznaje również indywidualną pomoc finansową osobom w trudnej sytuacji, których rodzic lub opiekun zginął w katastrofie lotniczej w Smoleńsku 10 kwietnia 2010 roku. Dodatkowo, fundacja zapewnia wsparcie edukacyjne oraz pomoc psychologiczną i psychiatryczną dla małżonków i partnerów osób wymienionych w powyższych punktach.",
        cel_mini: "Celem fundacji jest udzielanie pomocy społecznej oraz finansowej osobom niepełnoletnim i pełnoletnim do 25. roku życia, które znalazły się w trudnej sytuacji życiowej z powodu śmierci lub ciężkiego uszczerbku na zdrowiu rodziców lub opiekunów, szczególnie w kontekście służby publicznej lub katastrof. Fundacja zapewnia także wsparcie edukacyjne oraz pomoc psychologiczną i psychiatryczną dla małżonków i partnerów osób dotkniętych tragediami wymienionymi w statucie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "finanse", "pomoc"])
    },
    {
        id: 26,
        nazwa: "FUNDACJA 'INSTYTUT ŚW. BRATA ALBERTA'",
        krs: "218753",
        cel: "Niesienie pomocy osobom i rodzinom w trudnych sytuacjach życiowych jest kluczowe, zwłaszcza w kontekście ubóstwa, sierotstwa, bezdomności oraz bezrobocia. Osoby dotknięte długotrwałą chorobą, alkoholizmem, narkomanią, czy też mające trudności w przystosowaniu się do życia potrzebują wsparcia, które pomoże im przezwyciężyć kryzysy. Ponadto, resocjalizacja więźniów odbywających kary pozbawienia wolności jest istotnym elementem procesu reintegracji społecznej, umożliwiającym powrót do normalnego życia po odsiedzeniu kary. Pomoc w tych obszarach przyczynia się do poprawy jakości życia jednostek i wzmocnienia społeczeństwa jako całości.",
        cel_mini: "Pomoc osobom i rodzinom dotyczy różnych problemów społecznych, takich jak ubóstwo, sieroctwo, bezdomność, bezrobocie, długotrwała choroba, alkoholizm, narkomania, trudności w przystosowaniu do życia oraz resocjalizacja więźniów. Celem jest wsparcie i reintegracja osób w trudnych sytuacjach życiowych.",
        siedziba_miejscowosc: "ŚWINOUJŚCIE",
        tagi: new Set(["bezdomnosc", "prawo", "spoleczenstwo", "pomoc"])
    },
    {
        id: 27,
        nazwa: "'MEDIACJA I PRAWO'",
        krs: "474246",
        cel: "Cele fundacji obejmują kształcenie i wspieranie inicjatyw społecznych związanych z mediacją i pomocą prawną, propagowanie postępowań mediacyjnych oraz edukację prawną obywateli w zakresie ich praw i możliwości dochodzenia sprawiedliwości. Fundacja angażuje się w inicjowanie oraz opiniowanie kwestii regulacji prawnych dotyczących mediacji, a także w doskonalenie umiejętności mediatorów poprzez szkolenia, z uwzględnieniem etyki zawodowej. Działa na rzecz szerzenia idei mediacji w Polsce i na forum międzynarodowym, a także promuje przestrzeganie praw człowieka. Dodatkowo, oferuje poradnictwo prawne, szczególnie dla osób w trudnej sytuacji życiowej, oraz rozwija współpracę z różnymi instytucjami, w tym z sędziami, prokuratorami i adwokatami. Fundacja wspiera obywateli w optymalizacji działań mających na celu rozwiązanie ich problemów oraz chroni prawa mediatorów i osób związanych z jej działalnością.",
        cel_mini: "Fundacja ma na celu kształcenie oraz wspieranie inicjatyw społecznych w zakresie mediacji i pomocy prawnej, edukację obywateli o ich prawach oraz promowanie idei mediacji w społeczeństwie. Dodatkowo angażuje się w rozwój umiejętności mediatorów, oferując porady prawne i nawiązując współpracę z różnymi instytucjami.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 28,
        nazwa: "FUNDACJA 'POMOC KOBIETOM I DZIECIOM (ROZWÓD, PRZEMOC, GŁÓD)'",
        krs: "25056",
        cel: "Celem Fundacji jest udzielanie wsparcia administracyjnego, finansowego, materialnego i prawnego kobietom, dzieciom oraz innym osobom poszkodowanym w wyniku przestępstw, wykroczeń, rozwodów, przemocy w rodzinie oraz przemocy domowej, a także osobom cierpiącym z powodu głodu i niedożywienia.",
        cel_mini: "Fundacja ma na celu niesienie wsparcia administracyjnego, finansowego, materialnego i prawnego kobietom, dzieciom oraz innym osobom poszkodowanym przez przestępstwa, rozwody, przemoc w rodzinie oraz skutki głodu i niedożywienia.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dzieci", "fundacja", "pomoc"])
    },
    {
        id: 29,
        nazwa: "FUNDACJA 'SPRZYMIERZENI Z GROM'",
        krs: "375883",
        cel: "Celem fundacji jest organizowanie pomocy dla byłych żołnierzy, głównie sił specjalnych, oraz funkcjonariuszy służb mundurowych i ich rodzin, szczególnie wdów i sierot, w trudnych sytuacjach życiowych, takich jak ciężkie choroby, wypadki związane z wykonywaną służbą, problemy materialne, rodzinne, niepełnosprawności oraz potrzeba długotrwałej rehabilitacji i leczenia. Fundacja angażuje się również w udzielanie wsparcia żołnierzom i funkcjonariuszom, którzy obecnie pełnią służbę, oferując pomoc medyczną, psychologiczną, socjalną i prawną, organizując grupy wsparcia oraz integrując środowisko.",
        cel_mini: "Fundacja ma na celu wspieranie byłych żołnierzy, w szczególności sił specjalnych, oraz funkcjonariuszy służb mundurowych i ich rodzin w sytuacjach kryzysowych, takich jak choroby, wypadki czy trudności materialne. Działa również na rzecz obecnie służących żołnierzy poprzez pomoc medyczną, psychologiczną, socjalną i prawną, a także organizację grup wsparcia i integrację środowiska.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["zdrowie", "wojsko", "rehabilitacja"])
    },
    {
        id: 30,
        nazwa: "FUNDACJA 'TERAZ ŻYCIE' W LIKWIDACJI",
        krs: "227264",
        cel: "Organizowanie i wspieranie rozwoju placówek ochrony zdrowia oraz promowanie zdrowego stylu życia, odpowiedniego żywienia, a także aktywności fizycznej i rekreacji to kluczowe zadania, które mają na celu kształtowanie postaw aktywnego uczestnictwa pacjentów w profilaktyce zdrowotnej i leczeniu. Istotne jest także inspirowanie oraz organizowanie ruchu społecznego na rzecz rozwoju służby zdrowia oraz udzielanie pomocy osobom poszkodowanym w wypadkach, zwłaszcza komunikacyjnych, oraz ich rodzinom. Wspieranie rozwoju uniwersytetów trzeciego wieku oraz organizowanie ośrodków i osiedli dla osób w wieku 55+ według standardów Unii Europejskiej są równie ważne. Niezbędna jest też rehabilitacja zawodowa i społeczna osób niepełnosprawnych, co przyczynia się do ich integracji w społeczeństwie.",
        cel_mini: "Organizacja i wsparcie rozwoju placówek ochrony zdrowia oraz promowanie zdrowego stylu życia poprzez żywienie i aktywność fizyczną są kluczowymi działaniami na rzecz zdrowia społeczeństwa. Dodatkowo, angażowanie pacjentów w profilaktykę zdrowotną, pomoc osobom poszkodowanym w wypadkach oraz wspieranie alergicznym seniorów w ramach Uniwersytetów Trzeciego Wieku i rehabilitacji osób niepełnosprawnych stanowią istotne elementy wsparcia dla różnych grup społecznych.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["sport", "zdrowie", "spoleczenstwo", "rehabilitacja"])
    },
    {
        id: 31,
        nazwa: "FUNDACJA 'DIES MEI'",
        krs: "711354",
        cel: "Działania podejmowane w celu wspierania rozwoju indywidualnego oraz podnoszenia jakości życia koncentrują się na różnych aspektach pomocy. Obejmują one wsparcie dla osób uzdolnionych, które z powodu braku środków nie mogą realizować swoich planów, oraz promują społeczną odpowiedzialność biznesu. W planach znajdują się również działania dobroczynne, w tym pomoc społeczna, oraz inicjatywy edukacyjne dotyczące profilaktyki uzależnień. Organizacje udzielają wsparcia placówkom wychowawczym i medycznym oraz osobom pokrzywdzonym przestępstwami. Dodatkowo, wspierane są programy pomocowe dla byłych więźniów i ich rodzin, a także inicjatywy mające na celu edukację w zakresie przestępczości i praw osób pokrzywdzonych. Ważnym elementem jest także promowanie alternatywnych metod rozwiązywania konfliktów, w tym mediacji, oraz wsparcie rodzin zagrożonych dysfunkcyjnością.",
        cel_mini: "Organizacja podejmuje działania wspierające rozwój indywidualny i społeczny, promując edukację, profilaktykę uzależnień oraz pomoc osobom pokrzywdzonym i wykluczonym społecznie. Wspiera również instytucje wychowawcze oraz inicjatywy na rzecz readaptacji osób po odbyciu kary.",
        siedziba_miejscowosc: "PABIANICE",
        tagi: new Set(["edukacja", "zdrowie", "spoleczenstwo", "pomoc"])
    },
    {
        id: 32,
        nazwa: "FUNDACJA 'EDUKACJA Z WARTOŚCIAMI'",
        krs: "518975",
        cel: "Cele fundacji obejmują stworzenie i prowadzenie centrum edukacji, które zapewni wszechstronny rozwój intelektualny, emocjonalno-społeczny, artystyczny, fizyczny i duchowy, oparty na wartościach chrześcijańskich. Fundacja zajmuje się działalnością edukacyjną, opiekuńczo-wychowawczą, artystyczną, kulturową oraz naukową i popularnonaukową. Organizuje również wolontariat oraz wspiera rozwój i popularyzację kultury fizycznej i sportu, organizując wydarzenia sportowe i wychowanie fizyczne. Ponadto fundacja prowadzi działalność poradniczą, terapeutyczną, a także angażuje się w działania na rzecz pomocy społecznej, ochrony zdrowia oraz charytatywne.",
        cel_mini: "Fundacja ma na celu wszechstronny rozwój intelektualny, emocjonalny, artystyczny, fizyczny i duchowy, oparty na wartościach chrześcijańskich, poprzez działalność edukacyjną, opiekuńczo-wychowawczą, artystyczną, kulturalną, naukową oraz wspierającą wolontariat, sport, terapię i pomoc społeczną. W ramach działalności fundacja prowadzi także projekty charytatywne oraz promuje kulturę fizyczną i zdrowie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "kultura", "wolontariat", "sport", "edukacja"])
    },
    {
        id: 33,
        nazwa: "FORUM OBYWATELSKIEGO ROZWOJU",
        krs: "277658",
        cel: "Celem fundacji jest promowanie i ochrona demokracji, rządów prawa oraz praw i wolności człowieka, w tym wolności gospodarczej, a także zasad dobrego rządzenia. Fundacja dąży do szybkiego i stabilnego rozwoju Rzeczypospolitej Polskiej, koncentrując się na wzroście gospodarczym oraz wzmacnianiu społeczeństwa obywatelskiego.",
        cel_mini: "Celem fundacji jest upowszechnianie i ochrona demokracji, praw człowieka oraz zasad dobrego rządzenia, a także wspieranie szybkiego i stabilnego rozwoju Polski oraz umacnianie społeczeństwa obywatelskiego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "demokracja", "gospodarka", "spoleczenstwo"])
    },
    {
        id: 34,
        nazwa: "FUNDACJA INTEGRACJA",
        krs: "144578",
        cel: "Wspieranie integracji społecznej i zawodowej osób niepełnosprawnych w społeczeństwie jest kluczowym elementem działań na rzecz ich wszechstronnego rozwoju. Należy promować różnorodne inicjatywy, które obejmują budownictwo dostępne, realizację programów pomocy materialnej dla osób niepełnosprawnych oraz ich rodzin, a także zwiększenie aktywności tych osób w różnych obszarach życia. Edukacja oparta na zasadach integracji, a także oferowanie szkoleń i rehabilitacji, są istotnymi elementami wspierającymi ich samodzielność. Dodatkowo, promowanie aktywności sportowej wśród osób niepełnosprawnych przyczynia się do ich pozytywnej integracji oraz poprawy jakości życia.",
        cel_mini: "Dokument koncentruje się na integracji społecznej i zawodowej osób niepełnosprawnych, promując działania na ich rzecz oraz rozwój dostępnego budownictwa. Wskazuje również na potrzebę wsparcia materialnego, edukacji, rehabilitacji oraz aktywizacji sportowej tych osób.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["praca", "niepelnosprawnosc", "rehabilitacja", "spoleczenstwo"])
    },
    {
        id: 35,
        nazwa: "FUNDACJA 'LUX VERITATIS'",
        krs: "139773",
        cel: "Celem fundacji jest realizacja społecznie i gospodarczo użytecznych działań zgodnych z zadaniami publicznymi określonymi w ustawie o działalności pożytku publicznego i wolontariacie. Fundacja skupia się na podtrzymywaniu tradycji narodowej oraz rozwoju świadomości obywatelskiej i kulturowej, wspieraniu kultury, sztuki i ochrony dziedzictwa narodowego oraz działalności w zakresie nauki i edukacji. Obejmuje także wsparcie Kościoła rzymskokatolickiego, ochronę zdrowia, rozwój techniki, ochronę środowiska, oraz działania na rzecz rodziny i dzieci. Fundacja angażuje się w pomoc osobom starszym i kombatantom, przeciwdziała uzależnieniom i przestępczości, wspiera kulturę fizyczną i sport, a także niesie pomoc Polakom za granicą. Działa charytatywnie, na rzecz integracji cudzoziemców oraz organizacji pozarządowych, a także promuje i organizuje wolontariat.",
        cel_mini: "Celem fundacji jest realizacja działań społecznie i gospodarczo użytecznych, zgodnych z ustawą o działalności pożytku publicznego, obejmujących m.in. promowanie tradycji narodowej, działalność w kulturze, wsparcie zdrowia oraz pomoc osobom potrzebującym. Fundacja angażuje się również w edukację, ochronę środowiska, wspieranie rodzin, integrację cudzoziemców i rozwój organizacji pozarządowych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "edukacja", "srodowisko", "kultura", "zdrowie"])
    },
    {
        id: 36,
        nazwa: "FUNDACJA 'NADZIEJA'",
        krs: "383952",
        cel: "Pomoc osobom pokrzywdzonym przez różne okoliczności życiowe obejmuje wsparcie dla osób borykających się z trudnościami, takimi jak uzależnienia od alkoholu i innych używek, a także dla osób bezdomnych, starszych i bezrobotnych. Inicjatywy te mają na celu udzielenie niezbędnej pomocy, zapewnienie wsparcia psychologicznego oraz ułatwienie powrotu do samodzielnego życia, przyczyniając się tym samym do poprawy jakości życia najbardziej potrzebujących.",
        cel_mini: "Pomoc skierowana jest do osób pokrzywdzonych różnymi okolicznościami życiowymi, w tym uzależnionych od alkoholu i innych substancji, bezdomnych oraz starszych i bezrobotnych. Programy wsparcia mają na celu poprawę jakości ich życia i reintegrację społeczną.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "fundacja", "pomoc", "zdrowie"])
    },
    {
        id: 37,
        nazwa: "FUNDACJA 'NADZIEJA' OSÓB POSZKODOWANYCH W WYPADKACH DROGOWYCH",
        krs: "198280",
        cel: "Działania na rzecz osób poszkodowanych w wypadkach drogowych oraz ich rodzin obejmują wsparcie w zakresie leczenia, w tym rehabilitacji sanatoryjnej, regeneracji sił oraz wypoczynku. Organizowane są również formy pomocy prawnej, psychologicznej oraz rzeczowej, aby zapewnić kompleksową opiekę osobom dotkniętym takim zdarzeniem.",
        cel_mini: "Działania na rzecz osób poszkodowanych w wypadkach drogowych obejmują wsparcie w leczeniu, regeneracji sił oraz organizację pomocy prawnej, psychologicznej i rzeczowej dla poszkodowanych i ich rodzin.",
        siedziba_miejscowosc: "OSTRÓW WIELKOPOLSKI",
        tagi: new Set(["psychologia", "prawo", "zdrowie", "bezpieczenstwo"])
    },
    {
        id: 38,
        nazwa: "FUNDACJA PO DRUGIE",
        krs: "385460",
        cel: "Celem działalności jest poprawa zdolności adaptacyjnych oraz wsparcie procesu usamodzielnienia i readaptacji społecznej wychowanków i byłych wychowanków placówek resocjalizacyjnych dla nieletnich. Działania obejmują zapobieganie wykluczeniu społecznemu, podnoszenie aktywności zawodowej osób zagrożonych, wyrównywanie szans wychowanków oraz promowanie i organizowanie wolontariatu. Kategorie te skupiają się także na przeciwdziałaniu demoralizacji, ochronie praw dziecka i kobiet, rozwijaniu postaw obywatelskich oraz równych praw między płciami. Dodatkowo, wspierane są postawy ekologiczne, a także organizowana jest pomoc dla uchodźców, obejmująca wsparcie medyczne, humanitarne oraz porady zawodowe, prawne, psychologiczne i terapeutyczne.",
        cel_mini: "Organizacja działań na rzecz wzmacniania zdolności adaptacyjnych i wsparcia dla byłych wychowanków placówek resocjalizacyjnych, zapobiegania wykluczeniu społecznemu oraz promowania równych praw, zdrowia i ekologii. Dodatkowo, zapewnienie pomocy uciekinierom i uchodźcom oraz wsparcie w zakresie poradnictwa zawodowego, prawnego i psychologicznego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "wolontariat", "praca", "dzieci"])
    },
    {
        id: 39,
        nazwa: "FUNDACJA POMOST",
        krs: "531566",
        cel: "Fundacja realizuje szereg celów mających na celu wsparcie osób zagrożonych wykluczeniem społecznym, w tym pomoc byłym więźniom w adaptacji do życia na wolności oraz ograniczanie szkód społecznych związanych z bezdomnością. Działania obejmują organizowanie lokalnych inicjatyw postpenitencjarnych, promocję zdrowia, integrację zawodową i społeczną, a także przeciwdziałanie uzależnieniom i patologii społecznej. Fundacja wspiera również rozwój wspólnot lokalnych, edukację, kulturę oraz aktywizację zawodową osób bezrobotnych, a także prowadzi działalność charytatywną. Kluczowym aspektem jej działalności jest rozwijanie innowacji społecznych i współpracy z instytucjami naukowymi, co ma na celu zwiększenie efektywności działań w zakresie readaptacji społecznej oraz przeciwdziałania wykluczeniu. Fundacja angażuje się w planowanie i realizację polityki społecznej oraz gospodarczej, a także rozwija kwalifikacje pracowników instytucji zajmujących się readaptacją, co ma przyczynić się do lepszej integracji osób znajdujących się w trudnej sytuacji życiowej.",
        cel_mini: "Fundacja ma na celu ograniczanie skutków bezdomności oraz wspieranie osób opuszczających zakłady karne w ich adaptacji do życia na wolności, a także przeciwdziałanie wykluczeniu społecznemu i wspieranie reintegracji zawodowej. Dodatkowo podejmuje działania na rzecz zdrowia, kultury, edukacji, ekologii oraz innowacji społecznych, promując rozwój lokalnych wspólnot i instytucji.",
        siedziba_miejscowosc: "ZABRZE",
        tagi: new Set(["spoleczenstwo", "bezdomnosc", "edukacja", "pomoc", "praca", "readaptacja"])
    },
    {
        id: 40,
        nazwa: "FUNDACJA 'PRO FUTURO THEOLOGIAE'",
        krs: "533493",
        cel: "Fundacja została założona w celu realizacji działań społecznie użytecznych, obejmujących wsparcie i organizację działań promujących Wydział Teologiczny Uniwersytetu Mikołaja Kopernika w Toruniu, w tym zwiększenie liczby studentów oraz budowanie pozycji naukowej wydziału w Polsce i za granicą. Fundacja ma na celu inicjowanie badań w zakresie teologii, filozofii, historii Kościoła i innych dyscyplin pokrewnych, a także wspieranie inicjatyw badawczych, organizacyjnych, informacyjnych, kształceniowych oraz wydawniczych prowadzonych przez profesorów, studentów i koła naukowe. Promuje najlepszych studentów oraz wspiera pobyty badawcze profesorów z innych ośrodków, umożliwiając im korzystanie z zasobów bibliotecznych. Dąży do upowszechniania dorobku naukowego profesorów, międzynarodowej wymiany naukowej, a także wdrażania przedsięwzięć związanych z naukowymi odkryciami w toruńskim środowisku teologicznym. Fundacja propaguje kulturę dialogu w wymiarze naukowym i ekumenicznym, a także wspiera działania na rzecz małżeństwa oraz rodziny w zakresie pomocy psychologicznej, pedagogicznej i psychoterapeutycznej. Organizuje również wydarzenia pielgrzymkowe i turystyczne, promując aktywny tryb życia.",
        cel_mini: "Fundacja ma na celu wspieranie i organizowanie działań promujących Wydział Teologiczny Uniwersytetu Mikołaja Kopernika w Toruniu, w tym inicjowanie badań naukowych oraz wspieranie studentów i profesorów. Dodatkowo, fundacja promuje kulturę dialogu, wspiera małżeństwo i rodzinę oraz organizuje wydarzenia pielgrzymkowe i turystyczne.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["edukacja", "religia"])
    },
    {
        id: 41,
        nazwa: "FUNDACJA 'WARSZAWSKIE SEMINARIUM AKSJOLOGII ADMINISTRACJI'",
        krs: "771354",
        cel: "Celem fundacji jest rozwój nauki prawa oraz integracja środowiska naukowego, wspieranie międzynarodowych kontaktów między naukowcami a praktykami prawa, a także popularyzacja wiedzy o prawie administracyjnym w społeczeństwie. Fundacja dąży do wspierania procesu dydaktycznego oraz edukacji w zakresie prawa, a także oferuje wsparcie dla najlepszych uczniów, studentów, doktorantów i naukowców.",
        cel_mini: "Fundacja ma na celu rozwój nauki prawa, integrację środowiska naukowego, wspieranie międzynarodowych kontaktów prawników oraz popularyzację wiedzy o prawie administracyjnym. Dodatkowo fundacja wspiera dydaktykę i edukację prawniczą oraz najlepszych uczniów, studentów i naukowców.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "nauka"])
    },
    {
        id: 42,
        nazwa: "FUNDACJA AKTYWIZACJI ZAWODOWEJ OSÓB NIEPEŁNOSPRAWNYCH 'FAZON'",
        krs: "218961",
        cel: "Celem fundacji jest wspieranie i promowanie różnych form zatrudnienia osób niepełnosprawnych oraz ich aktywizacja zawodowa i rehabilitacja, zarówno zawodowa, jak i społeczna. Organizacja dąży także do rozwoju edukacji ogólnej i zawodowej osób z niepełnosprawnościami.",
        cel_mini: "Celem fundacji jest wspieranie i promowanie różnych form zatrudnienia oraz aktywizacji zawodowej i społecznej osób niepełnosprawnych, a także rozwój ich edukacji ogólnej i zawodowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["praca", "niepelnosprawnosc", "spoleczenstwo", "rehabilitacja"])
    },
    {
        id: 43,
        nazwa: "FUNDACJA AKTYWNEJ REHABILITACJI 'FAR'",
        krs: "32645",
        cel: "Celem działalności fundacji jest zwiększenie indywidualnej i społecznej niezależności oraz poprawa jakości życia osób z niepełnosprawnością, ze szczególnym uwzględnieniem osób poruszających się na wózkach inwalidzkich, w tym poszkodowanych w wypadkach komunikacyjnych. Fundacja dąży do przygotowania tych osób do pełnienia ról społecznych, koncentrując się na aspektach edukacji, aktywności zawodowej, życia rodzinnego oraz rekreacji i spędzania wolnego czasu.",
        cel_mini: "Celem fundacji jest zwiększenie niezależności oraz poprawa jakości życia osób z niepełnosprawnością, zwłaszcza ruchową. Organizacja dąży do ich przygotowania do pełnienia ról społecznych w edukacji, zawodzie, rodzinie oraz rekreacji.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "sport", "niepelnosprawnosc"])
    },
    {
        id: 44,
        nazwa: "FUNDACJA ALEGORIA",
        krs: "694663",
        cel: "Promowanie dialogu w przestrzeni publicznej obejmuje różnorodne obszary, takie jak nauka, edukacja, kultura, sztuka, ochrona dóbr kultury oraz wspieranie rozwoju wspólnot i społeczności. Kluczowe jest budowanie społeczeństwa obywatelskiego, uzyskiwanie świadomości uczestnictwa w życiu publicznym, zajmowanie się problemami dzieci i młodzieży, a także udzielanie pomocy społecznej osobom w trudnej sytuacji życiowej. Istotne są również działania charytatywne, ochrona zdrowia, integracja osób niepełnosprawnych, promowanie sportu oraz ekologii. Inicjatywy w zakresie kultury regionalnej, wolontariatu, reintegracji zawodowej i społecznej, a także przeciwdziałania uzależnieniom są niezbędne dla rozwoju harmonijnego społeczeństwa. Szczególną uwagę należy poświęcić prawom dzieci, seniorów oraz działalności religijnej, która kształtuje wartości moralne i duchowe w społeczeństwie.",
        cel_mini: "Promowanie dialogu w przestrzeni publicznej obejmuje szeroki zakres działań, takich jak wsparcie społeczności, ochrona zdrowia, integracja osób zagrożonych wykluczeniem oraz rozwój kultury i edukacji. Wskazuje to na istotność aktywności na rzecz dzieci, młodzieży, rodzin oraz osób starszych, a także ochrony dziedzictwa przyrodniczego i kulturowego.",
        siedziba_miejscowosc: "TARNÓW",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "kultura", "wolontariat", "pomoc", "edukacja", "zdrowie", "komunikacja"])
    },
    {
        id: 45,
        nazwa: "FUNDACJA ALTUM",
        krs: "769504",
        cel: "Celem fundacji jest tworzenie i wdrażanie programów wspierających osoby w trudnej sytuacji życiowej oraz prowadzenie działań edukacyjnych, umożliwiających zdobycie lub podwyższenie kwalifikacji zawodowych pracujących osób. Fundacja organizuje pomoc prawną dla osób pokrzywdzonych i wykluczonych społecznie, a także rozwija partnerstwa na rzecz adaptacji pracowników i przedsiębiorstw do zmian w gospodarce. Wspiera rozwój inicjatyw ekonomii społecznej oraz aktywizuje lokalne społeczności, zwłaszcza te z marginesu. Promuje włączenie społeczne osób zagrożonych wykluczeniem, a także dąży do rozwijania kluczowych kompetencji dzieci i młodzieży. Działa na rzecz rodziny i ochrony praw dziecka, a także prowadzi praktyki w zakresie profilaktyki zachowań problemowych. Fundacja angażuje się w podnoszenie kwalifikacji kadr dydaktycznych oraz wspiera innowacje w sektorze MŚP, stawiając na współpracę między nauką a biznesem oraz rozwijając kompetencje cyfrowe społeczeństwa informacyjnego.",
        cel_mini: "Fundacja ma na celu aktywizację osób w trudnej sytuacji życiowej, prowadzenie edukacji zawodowej, organizowanie pomocy prawnej oraz wspieranie integracji społecznej i rozwoju lokalnych społeczności. Dodatkowo, angażuje się w rozwój kompetencji cyfrowych i współpracę pomiędzy sektorem nauki a biznesem.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "kwalifikacje", "ekonomia", "spoleczenstwo"])
    },
    {
        id: 46,
        nazwa: "FUNDACJA ANNY DYMNEJ MIMO WSZYSTKO",
        krs: "174486",
        cel: "Podstawowe obszary działalności obejmują pomoc społeczną skierowaną do rodzin i osób znajdujących się w trudnej sytuacji życiowej, ze szczególnym uwzględnieniem wyrównywania ich szans. W działalności charytatywnej koncentruje się na ochronie i promocji zdrowia, a także na wsparciu osób niepełnosprawnych. Ważnym elementem jest także nauka, edukacja oraz wychowanie, które są wspierane przez organizowanie wolontariatu. Dodatkowo, działania obejmują sfery sportu i kultury fizycznej, a także turystyki, skierowane przede wszystkim do osób z niepełnosprawnościami.",
        cel_mini: "Zakres działań obejmuje pomoc społeczną, działalność charytatywną, ochronę zdrowia, wsparcie dla osób niepełnosprawnych oraz promowanie edukacji, wolontariatu, sportu i turystyki dla tej grupy. Wszelkie te inicjatywy mają na celu wyrównywanie szans i poprawę jakości życia osób w trudnej sytuacji.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["charytatywnosc", "wolontariat", "sport", "pomoc", "edukacja", "niepelnosprawnosc", "zdrowie"])
    },
    {
        id: 47,
        nazwa: "FUNDACJA ARMIA ZBAWIENIA",
        krs: "831279",
        cel: "Celem Fundacji jest realizacja działań charytatywnych zgodnych z międzynarodową zasadą Armii Zbawienia, która głosi: 'Serce do Boga, ręka do człowieka'.",
        cel_mini: "Celem fundacji jest realizacja działań charytatywnych zgodnie z zasadą Armii Zbawienia: 'Serce do Boga, ręka do człowieka'.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["charytatywnosc", "fundacja", "spoleczenstwo", "pomoc"])
    },
    {
        id: 48,
        nazwa: "FUNDACJA 'BIAŁORUSKI DOM'",
        krs: "419553",
        cel: "Celem Fundacji jest prowadzenie działalności informacyjnej, naukowej, kulturalnej i edukacyjnej na Białorusi oraz w Polsce, obejmującej wsparcie dla działań na rzecz demokracji, praw człowieka i rozwoju społeczeństwa obywatelskiego na Białorusi. Fundacja skoncentruje się na upowszechnianiu informacji o sytuacji w Białorusi w Polsce oraz innych krajach UE, USA i Kanadzie, a także na wspieraniu studentów uczestniczących w programie stypendialnym im. Konstanty Kalinowskiego. Dodatkowo, fundacja ma na celu promowanie białoruskiej kultury, języka i tożsamości narodowej, wspieranie niezależnych mediów oraz lokalnych inicjatyw społecznych. Organizacja planuje także podnosić kwalifikacje przedstawicieli obywatelskich środowisk przez szkolenia i seminaria, wspierać międzynarodową współpracę białoruskich organizacji, dążyć do europeizacji białoruskiego społeczeństwa oraz poprawy sytuacji Białorusinów w Polsce. Inicjatywy obejmą również działania na rzecz rozwoju gospodarczego na Białorusi oraz promowanie obecności tematów białoruskich w Internecie, zwłaszcza w mediach społecznościowych. Fundacja zajmie się także wspieraniem zmian demokratycznych na Białorusi oraz prowadzeniem działalności naukowo-badawczej.",
        cel_mini: "Celem fundacji jest działanie na rzecz demokracji, praw człowieka, kultury i społeczeństwa obywatelskiego na Białorusi oraz w Polsce, w tym wsparcie dla niezależnych mediów, lokalnych inicjatyw i studentów. Fundacja promuje europeizację Białorusi, rozwój gospodarczy oraz współpracę między organizacjami pozarządowymi w Polsce, UE, USA i Kanadzie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "wspolpraca", "edukacja", "bialorus", "kultura", "demokracja"])
    },
    {
        id: 49,
        nazwa: "FUNDACJA BIURO SŁUŻBY KRAJOWEJ ANONIMOWYCH ALKOHOLIKÓW W POLSCE",
        krs: "20923",
        cel: "Ochrona zdrowia w obszarze rozwiązywania problemów alkoholowych obejmuje kompleksowe działania mające na celu niesienie pomocy osobom uzależnionym od alkoholu oraz edukowanie społeczeństwa na temat choroby alkoholowej. Wsparcie to często realizowane jest poprzez terapie, programy rehabilitacyjne oraz wsparcie psychologiczne, które mają na celu nie tylko pomoc w przezwyciężeniu uzależnienia, ale również profilaktykę i zwiększenie świadomości dotyczącej skutków nadużywania alkoholu. Kluczowym elementem działań jest również szerzenie wiedzy na temat symptomów i objawów uzależnienia, co sprzyja wczesnej interwencji oraz zmniejsza stygmatyzację osób borykających się z problemem alkoholowym.",
        cel_mini: "Ochrona zdrowia obejmuje rozwiązanie problemów alkoholowych poprzez pomoc osobom uzależnionym oraz edukację na temat choroby alkoholowej. Kluczowe są działania wspierające osoby borykające się z nałogiem oraz zwiększanie społecznej świadomości na temat tego zagrożenia.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["alkoholizm", "zdrowie"])
    },
    {
        id: 50,
        nazwa: "'FUNDACJA CARITAS DIECEZJI BIELSKO-ŻYWIECKIEJ'",
        krs: "541611",
        cel: "Celem statutowym fundacji jest wspieranie działalności fundatora oraz organizowanie i kierowanie kościelną działalnością charytatywno-opiekuńczą, تشمل أيضًا pomoc prawną i zwiększanie świadomości prawnej społeczeństwa, co stanowi praktyczne realizowanie nauki Jezusa Chrystusa o miłosierdziu. Fundacja prowadzi działalność społecznie użyteczną w sferze zadań publicznych, oferując pomoc osobom w trudnej sytuacji życiowej, wspierając rodziny, system pieczy zastępczej oraz integrację zawodową i społeczną osób zagrożonych wykluczeniem. Obejmuje to również działalność charytatywną, ochronę zdrowia, promocję zatrudnienia, wsparcie dla osób starszych oraz działania na rzecz dzieci i młodzieży. Fundacja angażuje się w pomoc ofiarom katastrof, wspiera Polonię, organizuje wolontariat oraz dąży do ochrony praw dziecka i przeciwdziałania uzależnieniom, jednocześnie współpracując z organizacjami pozarządowymi w ramach obowiązujących przepisów.",
        cel_mini: "Fundacja ma na celu wspieranie działalności fundatora oraz organizowanie działań charytatywnych i edukacyjnych, w tym udzielanie pomocy prawnej i zwiększanie świadomości społecznej w duchu chrześcijańskiej nauki o miłości. Prowadzi działalność społecznie użyteczną, obejmującą pomoc dla osób w trudnej sytuacji życiowej, ochronę zdrowia, wsparcie osób niepełnosprawnych oraz szereg innych inicjatyw prospołecznych.",
        siedziba_miejscowosc: "BIELSKO-BIAŁA",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "wolontariat", "pomoc", "edukacja", "zdrowie"])
    },
    {
        id: 51,
        nazwa: "FUNDACJA 'CENTRUM BIAŁORUSKIEJ SOLIDARNOŚCI'",
        krs: "883672",
        cel: "Cele statutowe fundacji obejmują szeroką działalność na rzecz praw człowieka, w tym podejmowanie inicjatyw edukacyjnych i badawczych, rozprzestrzenianie wiedzy, wzmacnianie poszanowania godności oraz ochrony praw człowieka, a także edukację w zakresie demokratycznego państwa prawa i swobód obywatelskich. Fundacja angażuje się w organizowanie pomocy materialnej, prawnej oraz ekonomicznej dla osób dotkniętych represjami, a także wspiera działalność na rzecz mniejszości narodowych, rozwoju społeczeństwa obywatelskiego, wolontariatu, oraz promowania zdrowego stylu życia. Działa na rzecz rozwoju instytucji medialnych i analizuje zjawiska ekonomiczne, polityczne i kulturowe, a także promuje Białoruś za granicą oraz wspiera organizacje pozarządowe. Działalność fundacji ma na celu także zapewnienie wolności słowa, dostępu do informacji oraz edukację medialną.",
        cel_mini: "Cele statutowe fundacji obejmują działania na rzecz praw człowieka, edukacji, pomocy humanitarnej oraz wspierania społeczeństwa obywatelskiego w Białorusi i innych krajach. Fundacja ma na celu wspieranie inicjatyw lokalnych, promowanie zdrowego stylu życia, a także rozwijanie współpracy międzynarodowej oraz ochrony swobód obywatelskich.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "wspolpraca", "bialorus", "edukacja", "humanitaryzm", "demokracja"])
    },
    {
        id: 52,
        nazwa: "'CENTRUM POMOCY POKRZYWDZONYM'",
        krs: "727174",
        cel: "Cele statutowe fundacji obejmują działania na rzecz rodziny, macierzyństwa oraz ochrony praw dziecka, a także pomoc ofiarom przemocy w rodzinie i dzieciom krzywdzonym. Fundacja podejmuje inicjatywy prewencyjne, działa na rzecz przeciwdziałania uzależnieniom i patologiom społecznym oraz wspiera ochronę praw dzieci. Istotne jest również upowszechnianie wiedzy na temat przeciwdziałania przemocy oraz wsparcie osób i rodzin w trudnej sytuacji życiowej. Fundacja zajmuje się również zwalczaniem cyberprzemocy, integracją osób zagrożonych wykluczeniem oraz promocją wolontariatu i edukacji. W jej działalności znajduje się również pozyskiwanie funduszy na szkolenia, działalność charytatywną, wspieranie rozwoju wspólnot lokalnych, zapewnienie bezpieczeństwa publicznego oraz pielęgnowanie tradycji narodowej. Fundacja stawia na ochronę wolności i praw człowieka, wspierając jednocześnie rozwój demokracji oraz współpracę z innymi podmiotami o podobnych celach statutowych.",
        cel_mini: "Cele statutowe fundacji obejmują działania na rzecz rodziny i dzieci, pomoc ofiarom przemocy, inicjatywy prewencyjne oraz przeciwdziałanie uzależnieniom i patologii społecznej. Oprócz tego fundacja angażuje się w edukację, wolontariat, integrację społeczną oraz ochronę praw człowieka i współpracę z innymi organizacjami.",
        siedziba_miejscowosc: "RACIBÓRZ",
        tagi: new Set(["spoleczenstwo", "wolontariat", "pomoc", "edukacja", "dzieci"])
    },
    {
        id: 53,
        nazwa: "FUNDACJA CENTRUM PRAW KOBIET",
        krs: "188668",
        cel: "Dokument koncentruje się na poszanowaniu i przestrzeganiu praw kobiet, podkreślając zasadę równego traktowania kobiet i mężczyzn we wszystkich obszarach życia, w tym w prawie, praktyce społecznej, politycznej, gospodarczej oraz rodzinnej. Wskazuje na konieczność przeciwdziałania przemocy i dyskryminacji, zajmując się szczególnie kwestiami wykluczenia społecznego kobiet w związku z wiekiem, niepełnosprawnością czy orientacją seksualną. Zawiera postulaty dotyczące aktywizacji zawodowej kobiet, promocji równości szans na rynku pracy oraz podziału obowiązków domowych. Zwraca uwagę na przeciwdziałanie patologiom społecznym, jak przemoc domowa czy uzależnienia, oraz na potrzebę dostępu do szerokiego wsparcia, w tym prawnego i psycho społecznego, dla kobiet dotkniętych przemocą. Edukacja, zarówno na temat praw kobiet, jak i w obszarze zdrowia, jest istotnym elementem dokumentu, który promuje również działalność kulturalną kobiet, zwłaszcza z grup marginalizowanych. Ponadto, podkreśla znaczenie budowania społeczeństwa obywatelskiego oraz rozwijania dialogu społecznego w kontekście równości płci i aktywności społecznej kobiet.",
        cel_mini: "W dokumentach omawiane są kluczowe kwestie związane z poszanowaniem praw kobiet, przeciwdziałaniem przemocy i dyskryminacji, promowaniem równości na rynku pracy oraz zapewnieniem dostępu do wsparcia prawnego, psychologicznego i edukacji. Wskazano również na ważność rozwijania kultury, twórczości oraz zwiększania aktywności społecznej i politycznej kobiet.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "kultura", "edukacja", "praca", "przemoc"])
    },
    {
        id: 54,
        nazwa: "FUNDACJA COMPASSIO",
        krs: "758854",
        cel: "Celem Fundacji jest wspieranie społeczeństwa, szczególnie młodzieży, w kształtowaniu postaw prospołecznych, prozdrowotnych i proekologicznych. Działania fundacji obejmują szerzenie wiedzy z zakresu gospodarki, nauki, kultury, sztuki, oświaty, ochrony środowiska oraz opieki społecznej, z naciskiem na młodzież niepełnosprawną. Fundacja promuje rozwój rzemiosła i małej przedsiębiorczości w województwie pomorskim oraz wspiera lokalne inicjatywy kulturalne. Działa również na rzecz wymiany informacji i doświadczeń między osobami i instytucjami zainteresowanymi Pomorzem w Europie. Oferuje kształcenie ustawiczne dla dorosłych oraz angażuje się w działalność społeczną, w tym przeciwdziałanie przestępczości i pomoc osobom wykluczonym lub pokrzywdzonym.",
        cel_mini: "Fundacja wspiera społeczeństwo, szczególnie młodzież, w kształtowaniu postaw prospołecznych, prozdrowotnych i proekologicznych, poprzez działanie w obszarze gospodarki, kultury, ochrony środowiska oraz edukacji. Wspiera lokalne inicjatywy, rozwój rzemiosła oraz oferuje pomoc osobom wykluczonym i pokrzywdzonym.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["srodowisko", "mlodziez", "spoleczenstwo", "pomoc"])
    },
    {
        id: 55,
        nazwa: "CONSENSIUS FUNDACJA EUROPEJSKIE CENTRUM MEDIACJI",
        krs: "422898",
        cel: "Celem działań jest kształcenie oraz wsparcie inicjatyw społecznych poprzez różnorodne formy mediacji, które obejmują przeprowadzanie postępowań mediacyjnych, inicjowanie i opiniowanie spraw dotyczących regulacji prawnych mediacji, a także pogłębianie wiedzy i umiejętności mediatorów, w tym ich rozwój etyczny. Organizowane są działania promujące ideę mediacji na arena krajowej i międzynarodowej, a także edukacja w zakresie sprawiedliwości naprawczej. Istotne jest także rozwijanie postaw i działań związanych z poszanowaniem praw człowieka, wspieranie oraz koordynowanie aktywności mediatorów oraz ochrona ich praw. W ramach tych działań prowadzona jest zarówno odpłatna, jak i nieodpłatna działalność na rzecz publicznego dobra.",
        cel_mini: "Organizacja zajmuje się kształceniem i wsparciem inicjatyw społecznych, mediacją oraz rozwijaniem etyki mediatorów. Ponadto propaguje ideę mediacji, edukuje w zakresie sprawiedliwości naprawczej i chroni prawa mediatorów, prowadząc działalność pożytku publicznego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "prawo"])
    },
    {
        id: 56,
        nazwa: "FUNDACJA COURT WATCH POLSKA",
        krs: "353330",
        cel: "Działalność na rzecz urzeczywistniania zasad demokratycznego państwa prawnego obejmuje edukację i naukę w zakresie prawa, praworządności oraz wymiaru sprawiedliwości. Skupia się na poprawie jakości przepisów prawnych oraz instytucji wymiaru sprawiedliwości, a także na podnoszeniu świadomości prawnej społeczeństwa. Ważnymi elementami są również propagowanie i organizowanie wolontariatu oraz działalność na rzecz praw człowieka i swobód obywatelskich. Inicjatywy te wspierają ideę sprawiedliwości naprawczej i przeciwdziałają wykluczeniu osób mających styczność z wymiarem sprawiedliwości, w tym pomoc w readaptacji skazanych. Ponadto, szczególną uwagę zwraca się na działania na rzecz osób niepełnosprawnych.",
        cel_mini: "Organizacja skupia się na promowaniu zasad demokratycznego państwa prawnego, poprawie jakości prawa oraz edukacji w zakresie praw człowieka i praworządności. Ponadto prowadzi działania na rzecz społeczeństwa, w tym wolontariatu, readaptacji osób skazanych oraz wsparcia dla osób niepełnosprawnych.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["prawo", "demokracja", "wolontariat", "niepelnosprawnosc"])
    },
    {
        id: 57,
        nazwa: "FUNDACJA DOBRE JUTRO",
        krs: "789928",
        cel: "Celem fundacji jest różnorodna i wszechstronna pomoc Polakom zarówno w kraju, jak i za granicą, a także obywatelom Gruzji, Ukrainy, Białorusi, Rosji oraz Litwy znajdującym się w Polsce i poza nią. Fundacja angażuje się w obronę praw człowieka, wspieranie demokracji oraz rządów prawa, a także oferuje wsparcie osobom niepełnosprawnym oraz ich rodzinom, opiekunom i specjalistom. Dodatkowo podejmuje działania na rzecz ochrony zwierząt w potrzebie, zagrożonych bezdomnością bądź niebezpieczeństwem życia spowodowanym działalnością ludzką lub siłami natury. Fundacja zapewnia również wszechstronne wsparcie prawne dla instytucji i obywateli RP oraz cudzoziemców.",
        cel_mini: "Celem fundacji jest wszechstronna pomoc Polakom oraz obywatelom Gruzji, Ukrainy, Białorusi, Rosji i Litwy, a także obrona praw człowieka i wspieranie demokracji. Fundacja angażuje się również w pomoc osobom niepełnosprawnym, ochronę zwierząt oraz udzielanie wsparcia prawnego.",
        siedziba_miejscowosc: "GDAŃSK",
        tagi: new Set(["prawo", "fundacja", "obywatelstwo", "pomoc"])
    },
    {
        id: 58,
        nazwa: "FUNDACJA DAJEMY DZIECIOM SIŁĘ",
        krs: "204426",
        cel: "Celem fundacji jest ochrona dzieci przed krzywdzeniem i wykluczeniem społecznym, a także udzielanie pomocy dzieciom, rodzinom oraz osobom w sytuacjach kryzysowych. Fundacja angażuje się również w działania wspierające inicjatywy na rzecz ochrony praw dziecka oraz zapobiegania wykluczeniu społecznemu.",
        cel_mini: "Fundacja ma na celu ochronę dzieci przed krzywdzeniem oraz wykluczeniem społecznym, a także niesienie wsparcia w sytuacjach kryzysowych. Dodatkowo, wspiera inicjatywy mające na celu ochronę praw dziecka i zapobieganie wykluczeniu społecznemu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "spoleczenstwo", "dzieci"])
    },
    {
        id: 59,
        nazwa: "'DOM WSPÓLNOTY BARKA W DREZDENKU'",
        krs: "249506",
        cel: "Celem Fundacji jest wsparcie osób niepełnosprawnych, bezdomnych, opuszczających zakłady karne oraz psychiatryczne, a także osób samotnie wychowujących dzieci, młodzieży zagrożonej, i osób uzależnionych poprzez rehabilitację i rozwój. Fundacja opiera swoją działalność na społecznej nauce Kościoła rzymskokatolickiego, promując tolerancję wobec innych wyzwań. Kluczowym zadaniem jest reintegracja społeczna osób zagrożonych wykluczeniem, wspieranie ich aktywizacji w życiu społecznym i zawodowym, oraz pobudzanie inicjatyw obywatelskich. Działalność obejmuje szeroki zakres zadań publicznych, takich jak pomoc społeczna, integracja zawodowa, działalność charytatywna, ochrona zdrowia, wsparcie dla osób niepełnosprawnych, promocja zatrudnienia, równość płci, działania na rzecz emerytów, rozwój przedsiębiorczości i wspólnot lokalnych, edukację, wypoczynek dzieci i młodzieży, oraz ochrona praw człowieka i działań na rzecz demokracji.",
        cel_mini: "Celem fundacji jest wspieranie osób niepełnosprawnych, bezdomnych, opuszczających zakłady karne i szpitale psychiatryczne oraz rodzin samotnie wychowujących dzieci poprzez rehabilitację, reintegrację społeczną i aktywizację zawodową. Działalność fundacji obejmuje również pomoc społeczną, charytatywną oraz promowanie równości i ochrony praw człowieka.",
        siedziba_miejscowosc: "DREZDENKO",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "ekonomia", "pomoc", "praca", "niepelnosprawnosc", "rehabilitacja"])
    },
    {
        id: 60,
        nazwa: "FUNDACJA DZIECIOM 'ZDĄŻYĆ Z POMOCĄ'",
        krs: "37904",
        cel: "Pomoc społeczna odgrywa kluczową rolę w umożliwianiu osobom i rodzinom przezwyciężania trudnych sytuacji życiowych, w których nie mogą sobie poradzić samodzielnie, oraz w działaniach na rzecz integracji i reintegracji zawodowej osób zagrożonych wykluczeniem społecznym. Organizacje angażują się w działalność charytatywną, pielęgnują tradycje narodowe i rozwijają świadomość obywatelską, a także wspierają mniejszości narodowe i etniczne oraz regionalny język. Ochrona i promocja zdrowia, w tym działalność lecznicza, jest równie ważna, jak pomoc osobom niepełnosprawnym oraz promowanie zatrudnienia i aktywizacji zawodowej bezrobotnych. Działania na rzecz równości płci, wsparcia dla osób starszych, rozwój gospodarczy oraz innowacyjność techniczna są istotnymi elementami wspierania lokalnych wspólnot. Edukacja i wychowanie młodzieży, rozwój kultury i sztuki, a także ochrona dziedzictwa przyrodniczego to kolejne obszary działalności społecznej. Wspieranie kultury fizycznej, turystyka, zapewnienie porządku i bezpieczeństwa publicznego, obronność oraz ochrona praw człowieka i demokracji, a także ratownictwo, stanowią równie ważne cele statutowe tej działalności.",
        cel_mini: "Cele organizacji obejmują pomoc społeczną, integrację osób zagrożonych wykluczeniem, działalność charytatywną, promowanie zdrowia oraz kultury, a także wsparcie dla różnych grup społecznych i lokalnych. Dodatkowo zajmują się obronnością, prawami człowieka oraz ochroną środowiska i dziedzictwa narodowego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "kultura", "pomoc", "edukacja", "niepelnosprawnosc", "zdrowie"])
    },
    {
        id: 61,
        nazwa: "FUNDACJA 'DZIECKO W CENTRUM'",
        krs: "316833",
        cel: "Celem fundacji jest inicjowanie, prowadzenie oraz promowanie działań na rzecz tworzenia świata przyjaznego dzieciom, w którym każde dziecko ma zapewnione optymalne warunki do zdrowego rozwoju. Fundacja stawia na bezpieczeństwo i dobro dzieci, dążąc do stworzenia środowiska, w którym mogą one rozwijać się w poczuciu pokoju i poszanowania własnej godności.",
        cel_mini: "Fundacja ma na celu inicjowanie i promowanie działań na rzecz stworzenia przyjaznego dzieciom świata, w którym zapewnione są najlepsze warunki do rozwoju oraz bezpieczeństwo i dobro dzieci. Dąży do tego, aby dzieci mogły rozwijać się w zdrowiu, pokoju i poszanowaniu swojej godności.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["spoleczenstwo", "godnosc", "fundacja", "bezpieczenstwo", "zdrowie", "dzieci"])
    },
    {
        id: 62,
        nazwa: "'FUNDACJA EDUKACJI EUROPEJSKIEJ'",
        krs: "117278",
        cel: "Celem Fundacji jest prowadzenie działalności społecznie użytecznej w Polsce oraz współpracy międzynarodowej w kilku kluczowych obszarach. W zakresie oświaty fundacja wspiera rozwój edukacji poprzez projektowanie i wdrażanie innowacyjnych programów oraz zapewnianie pomocy rzeczowej i finansowej dla placówek oświatowych. W dziedzinie służby zdrowia działa na rzecz innowacji w organizacji i zarządzaniu placówkami medycznymi. Fundacja wspiera także rozwój organizacji, które integrują osoby niepełnosprawne z otoczeniem. W kontekście bezrobocia realizuje działania łagodzące jego skutki oraz poprawiające kwalifikacje pracowników i osób bezrobotnych poprzez szkolenia i wymianę doświadczeń. Dodatkowo, w obszarze społeczeństwa obywatelskiego fundacja promuje rozwój samorządności i demokracji, wprowadzając innowacje programowe.",
        cel_mini: "Celem fundacji jest wspieranie rozwoju w obszarach edukacji, służby zdrowia, integracji osób niepełnosprawnych oraz łagodzenia skutków bezrobocia, a także rozwijanie demokracji i społeczeństwa obywatelskiego w Polsce i międzynarodowo. Fundacja realizuje swoje cele poprzez innowacje, pomoc rzeczową, finansową oraz działalność szkoleniową.",
        siedziba_miejscowosc: "WAŁBRZYCH",
        tagi: new Set(["spoleczenstwo", "innowacje", "edukacja", "niepelnosprawnosc", "zdrowie", "finanse"])
    },
    {
        id: 63,
        nazwa: "FUNDACJA EWY BŁASZCZYK AKOGO",
        krs: "125054",
        cel: "Fundacja została powołana w celu niesienia pomocy dzieciom i dorosłym po urazach neurologicznych oraz wspierania ich w trakcie rehabilitacji neurologicznej, a także w celu udzielania wsparcia szpitalom i placówkom medycznym.",
        cel_mini: "Fundacja została powołana w celu niesienia pomocy dzieciom i dorosłym po urazach neurologicznych oraz wspierania rehabilitacji neurologicznej. Działa również na rzecz wsparcia szpitali i placówek medycznych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["zdrowie", "fundacja", "dzieci"])
    },
    {
        id: 64,
        nazwa: "FUNDACJA FEMINOTEKA",
        krs: "242885",
        cel: "Działania mające na celu likwidację dyskryminacji ze względu na płeć koncentrują się na promowaniu równości w literaturze, kulturze, sztuce oraz życiu publicznym. Kluczowe jest wspieranie i upowszechnianie problematyki kobiecej, gender oraz feminizmu, co obejmuje również promocję autorek i autorów, którzy zajmują się tymi tematami. Równouprawnienie kobiet i mężczyzn oraz przeciwdziałanie przemocy wobec kobiet stanowią istotne aspekty tych działań. Wspieranie udziału kobiet w życiu publicznym i kulturalnym, a także likwidowanie barier dotyczących dostępu do wiedzy na temat nowych technologii, pozwalają na zwiększenie ich zaangażowania i podniesienie świadomości o nowoczesnych rozwiązaniach technologicznych wśród kobiet.",
        cel_mini: "Działania mają na celu likwidację dyskryminacji ze względu na płeć oraz wsparcie problematyki kobiecej, promując równość, udział kobiet w życiu publicznym i kulturze, a także edukację w zakresie nowych technologii. Kluczowe są także inicjatywy przeciwdziałające przemocy wobec kobiet oraz promocja publikacji poświęconych szerokim zagadnieniom związanym z kobietami.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dyskryminacja", "kobiety"])
    },
    {
        id: 65,
        nazwa: "FORUM OBYWATELSKIEGO ROZWOJU",
        krs: "277658",
        cel: "Celem fundacji jest promowanie i ochrona demokracji, rządów prawa oraz praw i wolności człowieka, w tym wolności gospodarczej, a także zasad dobrego rządzenia. Fundacja dąży do szybkiego i stabilnego rozwoju Rzeczypospolitej Polskiej, koncentrując się na wzroście gospodarczym oraz wzmacnianiu społeczeństwa obywatelskiego.",
        cel_mini: "Celem fundacji jest upowszechnianie i ochrona demokracji, praw człowieka oraz zasad dobrego rządzenia, a także wspieranie szybkiego i stabilnego rozwoju Polski oraz umacnianie społeczeństwa obywatelskiego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "demokracja", "gospodarka", "spoleczenstwo"])
    },
    {
        id: 66,
        nazwa: "FUNDACJA GENIUS LOCI",
        krs: "445564",
        cel: "Celem fundacji jest prowadzenie szerokiej działalności w obszarze kultury i współpracy kulturalnej zarówno w kraju, jak i za granicą, a także wspieranie działalności w zakresie kultury fizycznej i sportu. Fundacja dąży do rozwoju i promocji innowacyjności oraz wspierania badań stosowanych i rozwoju technologicznego, przedsiębiorczości i transferu technologii. Dąży również do poprawy innowacyjności i konkurencyjności polskiej gospodarki oraz do budowy gospodarki opartej na wiedzy i społeczeństwie informacyjnym. Ważnym aspektem działalności fundacji jest rozwój swobodnego przepływu idei oraz propagowanie ochrony środowiska. Fundacja angażuje się w działalność naukową i oświatową, stymuluje inicjatywy proekologiczne oraz wspiera edukację ekologiczną społeczeństwa, w tym promując wykorzystanie odnawialnych źródeł energii. Fundacja ma także na celu stworzenie odpowiednich warunków dla wdrażania nowych rozwiązań w ochronie środowiska oraz infrastruktury technicznej, a także wspieranie lokalnych społeczności poprzez doradztwo, szczególnie w zakresie pozyskiwania funduszy europejskich.",
        cel_mini: "Fundacja ma na celu wspieranie działalności kulturalnej, promowanie innowacyjności, rozwój technologiczny, ochronę środowiska oraz stymulowanie społecznych inicjatyw proekologicznych. Działa również na rzecz poprawy konkurencyjności polskiej gospodarki oraz edukacji ekologicznej społeczeństwa.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["innowacje", "wspolpraca", "sport", "srodowisko", "gospodarka", "kultura"])
    },
    {
        id: 67,
        nazwa: "GILDIA MEDIACYJNA",
        krs: "506125",
        cel: "Głównym celem działania fundacji są inicjatywy oświatowe i edukacyjne, które koncentrują się na doskonaleniu umiejętności mediatorów, przeprowadzaniu postępowań mediacyjnych oraz popularyzacji wiedzy na temat alternatywnych metod rozwiązywania sporów (ADR) i konfliktów w różnych grupach społecznych. Fundacja angażuje się w edukację dzieci, młodzieży i dorosłych w zakresie rozwiązywania konfliktów oraz świadczy doradztwo i wsparcie dla osób pokrzywdzonych. Realizuje również programy edukacyjne dla kobiet i dzieci z rodzin doświadczających przemocy, dążąc do ochrony równych praw dla obu płci. Dodatkowo, fundacja wspiera osoby starsze i wykluczone społecznie, promując zasady równości i niedyskryminacji w edukacji, oraz zapewniając dostęp do kształcenia w każdym wieku.",
        cel_mini: "Fundacja koncentruje się na działaniach oświatowych i edukacyjnych, których celem jest rozwijanie umiejętności mediatorów, wspieranie osób pokrzywdzonych oraz prowadzenie programów edukacyjnych dla różnych grup społecznych, w tym dzieci i kobiet żyjących w przemocowych rodzinach. Dodatkowo, fundacja promuje równość praw oraz działania na rzecz osób starszych i wykluczonych społecznie.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["edukacja", "prawo", "spoleczenstwo"])
    },
    {
        id: 68,
        nazwa: "FUNDACJA IM. BOLESŁAWA POBOŻNEGO",
        krs: "744783",
        cel: "Celem fundacji jest upowszechnianie wiedzy o Księciu Bolesławie Pobożnym i Księżnej Jolencie oraz ich historycznych dokonaniach, w tym ustanowieniu Statutu Kaliskiego. Fundacja promuje wiedzę z zakresu historii Polski, a także działa na rzecz budowy pomników i miejsc pamięci poświęconych tym postaciom. Angażuje się w szeroką działalność edukacyjną, podtrzymywanie tradycji narodowych oraz rozwijanie aktywnych postaw obywatelskich. Dodatkowo wspiera rozwój lokalnych wspólnot, promuje samorządność, organizuje wolontariat i wspiera inicjatywy dotyczące ochrony praw człowieka oraz rodzin. Fundacja podejmuje działania w obszarze kultury, sztuki, sportu, a także udziela bezpłatnego poradnictwa obywatelskiego. Wspiera instytucje rodzinne i małżeńskie, a także umacnia społeczeństwo obywatelskie, w szczególności poprzez wspieranie lokalnych mediów i think tanków.",
        cel_mini: "Fundacja promuje wiedzę o księciu Bolesławie Poboznym i księżnej Jolencie, a także zajmuje się upowszechnianiem historii Polski oraz podtrzymywaniem tradycji narodowej. Działa na rzecz społeczności lokalnych, wspiera osoby niepełnosprawne oraz organizuje wydarzenia kulturalne i wolontariat.",
        siedziba_miejscowosc: "KALISZ",
        tagi: new Set(["spoleczenstwo", "kultura", "wolontariat", "osoba", "edukacja", "historia"])
    },
    {
        id: 69,
        nazwa: "FUNDACJA IM.HETMANA JANA TARNOWSKIEGO",
        krs: "28639",
        cel: "Cele działania fundacji obejmują pielęgnację pamięci o jej patronie oraz popularyzację wiedzy na jego temat, co ma na celu podtrzymywanie tradycji narodowej i rozwijanie świadomości obywatelskiej, kulturowej i narodowej. Fundacja prowadzi działalność kulturalną, naukową, edukacyjną oraz informacyjną, wspierając rozwój rynku oraz demokracji, a także zbliżenie między narodami. Dąży do pełnego wykorzystania potencjału kapitału ludzkiego, co wiąże się ze wzrostem zatrudnienia, podnoszeniem poziomu wykształcenia społeczeństwa, a także zmniejszeniem wykluczenia społecznego oraz wspieraniem budowy struktur administracyjnych państwa. Fundacja koncentruje się również na działaniach na rzecz grup defaworyzowanych, równoważonego rozwoju, innowacyjnej gospodarki oraz ochrony środowiska i zdrowia. Wspiera integrację europejską i współpracę między społeczeństwami, a także podnosi kwalifikacje dzieci, młodzieży i dorosłych. Angażuje się w ochronę zabytków, szczególnie w Tarnowie, oraz promuje miasto Tarnów i ziemię tarnowską w kraju i za granicą.",
        cel_mini: "Fundacja ma na celu pielęgnację pamięci o swoim patronie oraz promowanie polskości, działa na rzecz rozwoju kultury, edukacji, demokracji, a także wspiera grupy defaworyzowane oraz innowacyjną gospodarkę. Ponadto, fundacja angażuje się w poprawę kwalifikacji osób w różnych grupach wiekowych, ochronę zabytków oraz promocję miasta Tarnowa.",
        siedziba_miejscowosc: "TARNÓW",
        tagi: new Set(["kultura", "historia", "srodowisko"])
    },
    {
        id: 70,
        nazwa: "FUNDACJA IMIENIA STANISŁAWA POMIAN - SRZEDNICKIEGO",
        krs: "598107",
        cel: "Celem Fundacji jest promowanie tożsamości obywatelskiej, bazując na wiedzy zawartej w pamiętnikach Stanisława Pomiana Srzednickiego, które zostały udostępnione przez fundatorkę Agnieszkę Battelli. Fundacja dąży do kształtowania 'tożsamości obywatelskiej' mikro- i makrospołeczności w Polsce poprzez wzajemną integrację społeczności opartą na wiedzy i kulturze, budowanie dobrych wzorców relacji międzyludzkich przy wykorzystaniu wszelkich form współpracy oraz aktywizację społeczną w zakresie zainteresowania własną tożsamością i jej przyszłym kształtowaniem.",
        cel_mini: "Celem Fundacji jest propagowanie tożsamości obywatelskiej na podstawie pamiętników Stanisława Pomiana Szołdrowskiego, z wykorzystaniem wiedzy zawartej w tych dokumentach. Fundacja dąży do integracji społeczności, budowania dobrych relacji międzyludzkich oraz aktywizacji zainteresowań związanych z tożsamością obywatelską.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["fundacja", "spoleczenstwo", "obywatelstwo"])
    },
    {
        id: 71,
        nazwa: "FUNDACJA IM. STEFANA BATOREGO",
        krs: "101194",
        cel: "Wszechstronny rozwój społeczeństwa polskiego, koncentrujący się na działalności społecznej, informacyjnej, kulturalnej, naukowej i oświatowej, ma na celu wspieranie rozwoju rynku oraz demokracji w Polsce. Inicjatywy te dążą do zbliżenia narodów i państw Europy Środkowej i Wschodniej, tworząc przestrzeń do współpracy oraz wymiany doświadczeń między nimi.",
        cel_mini: "Popieranie wszechstronnego rozwoju społeczeństwa polskiego koncentruje się na społecznej, informacyjnej, kulturalnej, naukowej i oświatowej działalności na rzecz rynku i demokracji w Polsce oraz zbliżeniu narodów i państw Europy Środkowej i Wschodniej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "nauka", "edukacja", "kultura", "demokracja"])
    },
    {
        id: 72,
        nazwa: "FUNDACJA IGNATIANUM",
        krs: "236286",
        cel: "Organizacja skupia się na wszechstronnym rozwoju dzieci i młodzieży poprzez wspieranie działań społecznych, informacyjnych, kulturalnych, naukowych, oświatowych i sportowych, co przyczynia się do rozwoju demokracji w Polsce oraz zbliżenia narodów. Działa na rzecz nauki oraz osób niepełnosprawnych, promując także pomoc dla szczególnie uzdolnionych młodych ludzi. Dodatkowo, angażuje się w szerzenie oświaty i wsparcie rozwoju kariery utalentowanej młodzieży, a także przygotowuje młodzież akademicką do podjęcia pracy i intelektualnych wyzwań, promując przedsiębiorczość.",
        cel_mini: "Celem działań jest wszechstronny rozwój dzieci i młodzieży poprzez wspieranie ich aktywności społecznej, kulturalnej, naukowej i sportowej, a także pomoc osobom niepełnosprawnym oraz uzdolnionym. Dodatkowo, istotne jest przygotowanie młodzieży akademickiej do pracy i promocja przedsiębiorczości.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["kultura", "nauka", "sport", "mlodziez", "gospodarka", "edukacja", "niepelnosprawnosc", "dzieci"])
    },
    {
        id: 73,
        nazwa: "FUNDACJA INSTYTUT BADAŃ ADR 'PRAWO I GOSPODARKA'",
        krs: "486989",
        cel: "Celem działalności Centrum Badań ADR Prawo i Gospodarka, działającego przy Wydziale Prawa, Prawa Kanonicznego i Administracji Uniwersytetu Jana Pawła II, jest wsparcie dydaktyczno-naukowe oraz popularyzacja wiedzy z zakresu nauk prawnych i polubownych metod rozwiązywania sporów. Centrum dąży do rozwijania kontaktów z krajowymi i zagranicznymi środowiskami prawniczymi, a także do integracji naukowców, przedsiębiorców, studentów oraz przedstawicieli wymiaru sprawiedliwości. Angażuje się w prowadzenie badań naukowych, prezentowanie ich wyników oraz zarządzanie konfliktami, prowadzenie mediacji, negocjacji i arbitrażu, co sprzyja efektywnemu rozwiązywaniu sporów.",
        cel_mini: "Centrum Badań ADR Prawo i Gospodarka wspiera działalność dydaktyczno-naukową Wydziału Prawa oraz ułatwia upowszechnianie wiedzy na temat prawa i polubownych metod rozwiązywania sporów, poprzez badania naukowe, mediacje, negocjacje i arbitraż. Inicjatywa koncentruje się na współpracy z krajowymi i zagranicznymi środowiskami prawnymi oraz integracji naukowców, przedsiębiorców i przedstawicieli wymiaru sprawiedliwości.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["prawo"])
    },
    {
        id: 74,
        nazwa: "FUNDACJA INSTYTUT EDUKACJI EKONOMICZNEJ IM. LUDWIGA VON MISESA",
        krs: "174572",
        cel: "Celem fundacji jest prowadzenie oraz wspieranie działalności naukowej, edukacyjnej i oświatowej, ze szczególnym uwzględnieniem ekonomii, dorobku austriackiej szkoły ekonomii oraz klasycznego liberalizmu. Fundacja działa na rzecz przestrzegania naturalnych praw człowieka, koncentrując się zwłaszcza na wolności jednostki, własności prywatnej oraz prawie do życia.",
        cel_mini: "Celem fundacji jest wspieranie działalności naukowej i edukacyjnej, ze szczególnym uwzględnieniem ekonomii oraz klasycznego liberalizmu. Fundacja promuje naturalne prawa człowieka, koncentrując się na wolności jednostki, własności prywatnej i prawie do życia.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["edukacja", "prawo", "nauka"])
    },
    {
        id: 75,
        nazwa: "FUNDACJA INSTYTUT NA RZECZ KULTURY PRAWNEJ ORDO IURIS",
        krs: "473488",
        cel: "Celem Fundacji jest prowadzenie badań nad kulturą prawną oraz duchowym dziedzictwem, które są fundamentem polskiej kultury, a także ich promocja w życiu publicznym i systemie prawnym. Fundacja szczególnie koncentruje się na afirmacji przyrodzonej i niezbywalnej godności człowieka, ochronie praw człowieka i obywatela, a także na zapewnieniu prawnej ochrony życia ludzkiego na wszystkich etapach jego rozwoju. Dąży do poszanowania małżeństwa jako związku kobiety i mężczyzny, ochrony rodziny, macierzyństwa oraz prawa rodziców do wychowania dzieci zgodnie z własnym sumieniem i przekonaniami. Fundacja angażuje się również w ochronę dzieci przed demoralizacją, poszanowanie duchowego dziedzictwa narodowego w przestrzeni publicznej oraz przeciwdziałanie wykluczeniu społecznemu i dyskryminacji osób związanych z tymi wartościami. Ponadto, oferuje pomoc prawną osobom i organizacjom działającym na rzecz wymienionych celów.",
        cel_mini: "Celem fundacji są badania nad kulturą prawną i duchowym dziedzictwem Polski oraz ich promocja w życiu publicznym, w tym afirmacja godności człowieka, ochrona życia, rodziny, małżeństwa oraz prawa rodziców do wychowania dzieci. Fundacja działa także na rzecz ochrony praw dzieci, poszanowania dziedzictwa narodowego oraz przeciwdziała wykluczeniu społecznemu, oferując pomoc prawną dla osób i organizacji realizujących te cele.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dyskryminacja", "rodzina", "prawo", "religia"])
    },
    {
        id: 76,
        nazwa: "FUNDACJA - INSTYTUT NA RZECZ PAŃSTWA PRAWA",
        krs: "85688",
        cel: "Celem fundacji jest podejmowanie działań na rzecz państwa prawa, w tym propagowanie jego standardów, podnoszenie świadomości prawnej społeczeństwa oraz kwalifikacji zawodowych prawników. Fundacja promuje prawo europejskie i idee integracji, a także działa na rzecz ochrony praw człowieka. Dodatkowo wspiera polskie doświadczenia w transformacji ustrojowej w krajach postkomunistycznych, reformuje system edukacji prawniczej oraz eliminuje korupcję w życiu publicznym. Angażuje się w inicjatywy na rzecz niezależności sędziowskiej oraz udziela pomocy prawnej jednostkom w dochodzeniu swoich praw przed sądem i organami administracyjnymi. Fundacja przeciwdziała marginalizacji i wykluczeniu społecznemu osób w trudnych sytuacjach, a także chroni prawa konsumentów.",
        cel_mini: "Fundacja dąży do wspierania państwa prawa poprzez działania na rzecz podnoszenia świadomości prawnej, ochrony praw człowieka oraz reformy systemu edukacji prawniczej. Obejmuje to również promocję prawa europejskiego, eliminuje korupcję oraz przeciwdziała marginalizacji społecznej.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["prawo"])
    },
    {
        id: 77,
        nazwa: "FUNDACJA - INSTYTUT PRAWA USTROJOWEGO",
        krs: "487532",
        cel: "Podejmowanie działań urzeczywistniających zasady demokracji w Rzeczypospolitej Polskiej koncentruje się na propagowaniu standardów państwa demokratycznego oraz ochronie praw człowieka i swobód obywatelskich. Kluczowe jest wspieranie instytucji prawnych, które promują dobro wspólne, a także inicjatyw na rzecz rozwijania demokracji bezpośredniej i semibezpośredniej, szczególnie w kontekście aktywizacji społeczności lokalnych. Działania te obejmują zwiększenie odpowiedzialności obywateli za życie publiczne, promowanie cnót demokratycznych oraz wzmacnianie kontroli społecznej nad instytucjami publicznymi. Wsparcie dla rozwoju gospodarczego, przedsiębiorczości oraz podnoszenie kwalifikacji zawodowych osób realizujących zadania publiczne są kluczowe, a także udzielanie pomocy prawnej i eksperckiej oraz współpraca naukowa na arenie międzynarodowej. Dodatkowo, nacisk kładzie się na rozwój szkolnictwa, edukację społeczeństwa, promocję wolontariatu, a także tworzenie sieci wsparcia dla ofiar przestępstw oraz pomoc dla osób pokrzywdzonych i ich bliskich, co wpisuje się w szersze cele statutowe organizacji.",
        cel_mini: "Podejmowanie działań w Polsce ma na celu urzeczywistnianie zasad demokracji poprzez propagowanie praw człowieka, wspieranie instytucji demokratycznych oraz rozwój społeczności lokalnych. Dodatkowo, istotne są: edukacja prawna, współpraca międzynarodowa, pomoc ofiarom przestępstw oraz promowanie inicjatyw obywatelskich.",
        siedziba_miejscowosc: "SULEJÓWEK",
        tagi: new Set(["edukacja", "prawo", "demokracja", "wspolpraca"])
    },
    {
        id: 78,
        nazwa: "FUNDACJA INSTYTUT PRAWORZĄDNOŚCI",
        krs: "822666",
        cel: "Celem fundacji jest stworzenie warunków sprzyjających wszechstronnemu rozwojowi polskiego społeczeństwa, w szczególności poprzez propagowanie praw człowieka, podstawowych wartości obywatelskich oraz wsparcie ofiar przestępstw. Fundacja realizuje swoje cele poprzez działalność edukacyjną w zakresie integracji europejskiej, rozwijanie współpracy między społeczeństwami oraz inicjowanie działań wspierających rozwój przedsiębiorczości. Ponadto, fundacja stawia na aktywizację lokalnych społeczności, promowanie odpowiedzialności za sprawy publiczne oraz wspieranie obywatelskiej aktywności i zaangażowania w działania społeczne. W ramach działań oświatowych fundacja uczestniczy w inicjatywach, które mają na celu kształtowanie demokratycznego społeczeństwa i odpowiedzialności obywatelskiej. Wspiera także inicjatywy gospodarczo-społeczne poprzez finansowanie szkoleń, udzielanie pomocy finansowej oraz oferowanie dostępu do wiedzy ekspertów z różnych organizacji krajowych i międzynarodowych.",
        cel_mini: "Celem fundacji jest wspieranie wszechstronnego rozwoju społeczeństwa polskiego poprzez promocję praw człowieka, wartości obywatelskich oraz edukację prawną. Fundacja angażuje się w działania na rzecz integracji europejskiej, aktywizacji lokalnych społeczności oraz wspierania inicjatyw gospodarczo-społecznych.",
        siedziba_miejscowosc: "OPOCZNO",
        tagi: new Set(["prawo", "gospodarka", "spoleczenstwo"])
    },
    {
        id: 79,
        nazwa: "FUNDACJA INSTYTUT READAPTACJI",
        krs: "906486",
        cel: "W celu wsparcia polityki społecznej oraz polskiego rynku pracy, konieczne jest planowanie i realizacja usług społecznych oraz zdrowotnych, a także skuteczna readaptacja osób po konflikcie z prawem karnym i innych grup zagrożonych wykluczeniem społecznym. Kluczowe działania obejmują rozwijanie innowacji społecznych oraz współpracę z uczelniami i instytucjami badawczymi, aby generować rozwiązania sprzyjające efektywnej readaptacji. Ważne jest również wspieranie osób bezrobotnych oraz rozwój kwalifikacji kadry instytucji readaptacyjnych. Promowanie przedsiębiorczości, edukacji ustawicznej oraz aktywne uczestnictwo w społeczeństwie powinno towarzyszyć działań na rzecz nauki, technologii i biznesu. Inicjatywy te mają na celu zwiększenie możliwości aktywizacji zawodowej oraz przeciwdziałanie skutkom bezrobocia, z szczególnym uwzględnieniem osób z niepełnosprawnościami czy zaburzeniami psychicznymi.",
        cel_mini: "Dokument dotyczy wsparcia polityki społecznej, readaptacji osób po konflikcie z prawem oraz przeciwdziałania wykluczeniu społecznemu poprzez tworzenie innowacyjnych rozwiązań i partnerstw w zakresie usług społecznych i rynku pracy. Podkreśla również znaczenie współpracy z uczelniami oraz rozwijania kwalifikacji w celu efektywnej integracji społecznej i zawodowej.",
        siedziba_miejscowosc: "ZABRZE",
        tagi: new Set(["spoleczenstwo", "readaptacja"])
    },
    {
        id: 80,
        nazwa: "FUNDACJA INSTYTUT STUDIÓW WSCHODNICH",
        krs: "10303",
        cel: "Celem Instytutu Studiów Wschodnich jest promowanie edukacji społecznej i politycznej dla demokratycznej przyszłości Polski oraz krajów sąsiednich, wspieranie międzynarodowej współpracy w dziedzinie gospodarczej, naukowej i kulturalnej, a także budowanie zaufania między narodami. Instytut angażuje się w działania o charakterze społecznym, kulturalnym, edukacyjnym, charytatywnym, zdrowotnym i ekologicznym, które mają na celu lepsze zrozumienie procesów transformacyjnych w krajach z centralnie zarządzaną gospodarką. Dodatkowo, zajmuje się promowaniem kultury fizycznej, wsparciem działań dla młodzieży oraz promocją zdrowia publicznego. Instytut prowadzi również aktywności na rzecz rozwoju turystyki, wspierania przedsiębiorczości, promocji nowych technologii oraz dbałości o zachowanie tradycji i dziedzictwa kulturowego w obszarach wiejskich. Podejmuje działania zwiększające wizerunek Polski w świecie oraz inicjatywy na rzecz ochrony środowiska, realizując cele określone w statucie.",
        cel_mini: "Instytut Studiów Wschodnich ma na celu krzewienie edukacji społecznej i politycznej dla demokratycznej przyszłości Polski, wspieranie międzynarodowej współpracy oraz działania na rzecz młodzieży, zdrowia publicznego i zrównoważonego rozwoju obszarów wiejskich. Instytut promuje również kulturę fizyczną, przedsiębiorczość oraz ochronę środowiska.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["kultura", "wspolpraca", "gospodarka", "srodowisko", "edukacja", "zdrowie"])
    },
    {
        id: 81,
        nazwa: "FUNDACJA ITAKA - CENTRUM POSZUKIWAŃ LUDZI ZAGINIONYCH",
        krs: "126459",
        cel: "Celem fundacji jest udzielanie wsparcia osobom dotkniętym problemem zaginięcia, w tym osobom zaginionym oraz ich rodzinom i bliskim. Fundacja szczególnie koncentruje się na przypadkach zaginięcia, które mogą być związane z porwaniami rodzicielskimi oraz na osobach zagrożonych takim losem.",
        cel_mini: "Celem fundacji jest pomoc osobom dotkniętym problemem zaginięcia, w tym zaginionym, ich rodzinom oraz osobom zagrożonym zaginieniem, w tym w przypadkach porwań rodzicielskich.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "bezpieczenstwo", "fundacja", "pomoc"])
    },
    {
        id: 82,
        nazwa: "FUNDACJA JUBILO",
        krs: "475944",
        cel: "Celem działania fundacji jest rozwój i promocja kultury w Polsce i na świecie, wspieranie różnych dziedzin sztuki oraz szerokiej działalności kulturalnej. Fundacja angażuje się w realizację inicjatyw lokalnych, ponadlokalnych i międzynarodowych z zakresu kultury, edukacji, ekologii, turystyki oraz ochrony dziedzictwa przyrodniczego. Działa na rzecz ochrony zwierząt, promuje aktywność fizyczną i sport, a także zdrowie poprzez turystykę leczniczą. Fundacja prowadzi działalność charytatywną, wspiera rozwój nauki i oświaty oraz integrację środowisk artystycznych i naukowych. Fokusuje się na pomocy osobom niepełnosprawnym oraz grupom dyskryminowanym, a także na wsparciu lokalnych społeczności, szczególnie najmłodszych i osób zagrożonych wykluczeniem społecznym. Reaguje na potrzeby ofiar katastrof oraz konfliktów zbrojnych, przeciwdziała skutkom zjawisk cywilizacyjnych, uzależnieniom i problemom społecznym, dbając jednocześnie o porządek i bezpieczeństwo publiczne.",
        cel_mini: "Celem fundacji jest rozwój i promocja kultury oraz wsparcie różnorodnych inicjatyw kulturalnych, edukacyjnych, ekologicznych i społecznych w Polsce i na świecie. Fundacja angażuje się również w działalność charytatywną, ochronę zdrowia, integrację środowisk artystycznych oraz pomoc osobom w potrzebie.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["sztuka", "edukacja", "sport", "pomoc", "kultura", "zdrowie", "ekologia"])
    },
    {
        id: 83,
        nazwa: "FUNDACJA KLASTER INNOWACJI SPOŁECZNYCH",
        krs: "577540",
        cel: "Cele działalności statutowej obejmują promowanie zatrudnienia i aktywizacji zawodowej osób bez pracy oraz zagrożonych zwolnieniem, wspieranie rozwoju gospodarczego i przedsiębiorczości, a także rozwój młodzieży w zakresie wychowania i kształcenia. Działania obejmują także doskonalenie zawodowe i podnoszenie kwalifikacji kadry pedagogicznej, wspieranie edukacji, kultury oraz badań naukowych, a także promowanie kontaktów międzykulturowych, demokracji oraz poszanowania różnorodności. Organizacja angażuje się w aktywne promowanie dobrego rządzenia i praw człowieka, stwarzanie warunków do rozwoju naukowego w dziedzinie prawa oraz działania na rzecz rozwoju społeczeństwa obywatelskiego, lokalnych wspólnot i grup marginalizowanych. W szczególności kładzie nacisk na wyrównywanie szans i aktywność społeczną, zwłaszcza w kontekście mniejszości etnicznych, narodowych, religijnych oraz innych grup narażonych na dyskryminację.",
        cel_mini: "Dokument przedstawia cele i zadania dotyczące promowania zatrudnienia, wspierania rozwoju przedsiębiorczości, edukacji oraz integracji społecznej osób zagrożonych marginalizacją. W szczególności koncentruje się na aktywizacji zawodowej, doskonaleniu kadr edukacyjnych, wsparciu młodzieży, promowaniu różnorodności kulturowej oraz rozwoju społeczeństwa obywatelskiego.",
        siedziba_miejscowosc: "GLIWICE",
        tagi: new Set(["praca", "edukacja", "mlodziez", "spoleczenstwo"])
    },
    {
        id: 84,
        nazwa: "FUNDACJA KONKRET",
        krs: "953248",
        cel: "Główne cele działalności fundacji obejmują udzielanie nieodpłatnej pomocy prawnej oraz zwiększanie świadomości prawnej społeczeństwa, wsparcie dla osób pokrzywdzonych przestępstwem i ich bliskich, pomoc postpenitencjarną, a także organizację i rozwój pomocy prawnej, w tym pro bono. Fundacja działa na rzecz rodzin i osób w trudnej sytuacji, promując wyrównywanie ich szans, oraz podejmuje działania na rzecz dzieci, rodzicielstwa i ochrony praw dziecka. W ramach aktywności fundacji wyróżnia się przeciwdziałanie uzależnieniom, wykluczeniu prawnemu osób z niepełnosprawnościami, a także zwiększanie świadomości społecznej na temat ich praw. Fundacja angażuje się w rehabilitację społeczną i zawodową osób niepełnosprawnych, wspiera rozwój sektora ekonomii społecznej oraz zapewnia obsługę podmiotów w zakresie rachunkowości. Ponadto, reprezentuje podatników przed organami skarbowymi i sporządza wnioski o dofinansowanie z różnych funduszy. Organizuje również szkolenia w zakresie przepisów podatkowych oraz podejmuje działania integracyjne dla osób ubogich i społecznie wykluczonych.",
        cel_mini: "Fundacja ma na celu udzielanie nieodpłatnej pomocy prawnej, wsparcie dla ofiar przestępstw, działalność na rzecz osób z niepełnosprawnościami oraz przeciwdziałanie wykluczeniu społecznemu. Dodatkowo angażuje się w rehabilitację zawodową, integrację osób zagrożonych ubóstwem oraz edukację prawną.",
        siedziba_miejscowosc: "USTRZYKI DOLNE",
        tagi: new Set(["prawo", "ekonomia", "spoleczenstwo", "niepelnosprawnosc"])
    },
    {
        id: 85,
        nazwa: "FUNDACJA KONSUMENTÓW",
        krs: "471167",
        cel: "Dokument przedstawia szereg działań mających na celu popularyzację i ochronę praw konsumentów oraz kształtowanie pro-konsumenckich postaw wśród przedsiębiorstw i lokalnych społeczności. Podkreśla ważność promocji zdrowia i praw pacjenta, a także wspierania rozwoju przedsiębiorczości społecznej oraz zrównoważonego rozwoju gospodarczego i konsumpcji. Zawiera również zwrócenie uwagi na wspomaganie rozwoju wspólnot lokalnych, edukację oraz budowanie świadomości w zakresie ochrony praw konsumentów, pacjentów, przedsiębiorczości społecznej oraz zrównoważonego rozwoju. Ponadto, dokument postulować innowacyjne rozwiązania problemów społecznych oraz działalność na rzecz organizacji pozarządowych.",
        cel_mini: "Celem wymienionych działań jest wspieranie ochrony praw konsumentów, promocja zdrowia, rozwój przedsiębiorczości społecznej i zrównoważonego rozwoju, oraz edukacja społeczności lokalnych. Działania te obejmują również wspieranie innowacji i organizacji pozarządowych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "zdrowie", "ngo"])
    },
    {
        id: 86,
        nazwa: "FUNDACJA LEGALNA KULTURA",
        krs: "400728",
        cel: "Celem fundacji jest działalność na rzecz dobra publicznego w wielu obszarach, w tym pomoc społeczna, charytatywna oraz pielęgnowanie tradycji narodowej. Fundacja angażuje się w działania na rzecz osób w wieku emerytalnym, wspiera rozwój gospodarczy i przedsiębiorczości oraz promuje innowacje techniczne. Angażuje się również w edukację, kulturę, ochronę dziedzictwa narodowego i bezpieczeństwo publiczne. Kluczowymi obszarami jej działalności są również ochrona praw człowieka, integracja europejska oraz promowanie wolontariatu. Fundacja stawia na poszanowanie prawa, ograniczanie piractwa internetowego oraz wsparcie osób niepełnosprawnych w rozwijaniu kompetencji cyfrowych i umiejętności korzystania z nowych technologii.",
        cel_mini: "Celem fundacji jest wspieranie dobra publicznego poprzez działania w zakresie pomocy społecznej, kultury, ochrony praw człowieka oraz edukacji, a także promowanie polskości i innowacyjności. Fundacja angażuje się także w pomoc osobom starszym, niepełnosprawnym oraz w rozwój przedsiębiorczości i techniki.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["charytatywnosc", "prawo", "kultura", "gospodarka", "pomoc", "edukacja"])
    },
    {
        id: 87,
        nazwa: "FUNDACJA 'LEKARZE BEZ GRANIC'",
        krs: "901812",
        cel: "Cele statutowe fundacji obejmują działalność na rzecz i w zakresie ochrony i promocji zdrowia, wspierania projektów pomocy humanitarnej oraz edukacji w tym obszarze. Fundacja angażuje się w pomoc potrzebującym, w tym ofiarom katastrof naturalnych oraz konfliktów zbrojnych, bez względu na ich pochodzenie etniczne czy przekonania. Działa na rzecz udzielania pomocy humanitarnej i medycznej, wspiera publiczną służbę zdrowia oraz zapewnia opiekę zdrowotną we współpracy z innymi podmiotami. Fundacja oferuje pomoc medyczną i humanitarną również migrantów oraz osób ubiegających się o azyl, promuje wartości humanitarne oraz prowadzi monitoring i rzecznictwo w kwestiach humanitarnych. Dodatkowo wspiera inne organizacje non-profit poprzez dostarczanie wiedzy oraz środków finansowych lub materialnych w ramach działalności zgodnej z celami i wartościami MSF.",
        cel_mini: "Cele statutowe fundacji obejmują działalność na rzecz ochrony zdrowia, promocji pomocy humanitarnej, wsparcia dla ofiar katastrof oraz udzielania pomocy medycznej i humanitarnej niezależnie od pochodzenia beneficjentów. Fundacja stawia także na wspieranie wartości humanitarnych oraz współpracę z innymi organizacjami non-profit.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "humanitaryzm", "zdrowie", "spoleczenstwo"])
    },
    {
        id: 88,
        nazwa: "'FUNDACJA LIGHT HOUSE'",
        krs: "718061",
        cel: "Organizacja koncentruje się na niesieniu pomocy osobom pokrzywdzonym przestępstwami, zwłaszcza w kontekście handlu ludźmi, niewolnictwa oraz pracy przymusowej, zapewniając wsparcie, rehabilitację i rozwój ofiarom przemocy i wykluczenia społecznego. Pomoc świadczona jest każdemu, niezależnie od płci, rasy, narodowości czy wieku, w zgodzie z zasadą równości. Organizacja angażuje się w podnoszenie świadomości społecznej na temat wartości chrześcijańskich oraz problematyki handlu ludźmi. Działa na rzecz obywateli Polski i Unii Europejskiej, którzy zostali pokrzywdzeni w kraju i za granicą, wspierając rodziny i osoby w trudnej sytuacji życiowej. Angażuje się również w integrację i reintegrację osób zagrożonych wykluczeniem, przeciwdziałanie uzależnieniom oraz wspieranie mniejszości narodowych. Dodatkowo, promuje zdrowie, aktywizację zawodową, równość płci, rozwój gospodarczy, ochronę praw dziecka oraz działalność w zakresie edukacji, kultury i sztuki.",
        cel_mini: "Fundacja niesie pomoc osobom pokrzywdzonym przestępstwem, w tym ofiarom handlu ludźmi, zapewniając im wsparcie, rehabilitację oraz ochronę, niezależnie od ich płci, rasy czy wieku. Działa także na rzecz integracji społecznej, promocji zdrowia, równości praw, a także wspiera rozwój lokalnych społeczności oraz edukację.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["wsparcie", "spoleczenstwo", "przestepstwa", "pomoc", "edukacja", "zdrowie", "rehabilitacja"])
    },
    {
        id: 89,
        nazwa: "FUNDACJA 'NADZIEJA' OSÓB POSZKODOWANYCH W WYPADKACH DROGOWYCH",
        krs: "198280",
        cel: "Działania na rzecz osób poszkodowanych w wypadkach drogowych oraz ich rodzin obejmują wsparcie w zakresie leczenia, w tym rehabilitacji sanatoryjnej, regeneracji sił oraz wypoczynku. Organizowane są również formy pomocy prawnej, psychologicznej oraz rzeczowej, aby zapewnić kompleksową opiekę osobom dotkniętym takim zdarzeniem.",
        cel_mini: "Działania na rzecz osób poszkodowanych w wypadkach drogowych obejmują wsparcie w leczeniu, regeneracji sił oraz organizację pomocy prawnej, psychologicznej i rzeczowej dla poszkodowanych i ich rodzin.",
        siedziba_miejscowosc: "OSTRÓW WIELKOPOLSKI",
        tagi: new Set(["psychologia", "prawo", "zdrowie", "bezpieczenstwo"])
    },
    {
        id: 90,
        nazwa: "FUNDACJA NA RZECZ BEZPIECZNEGO OBROTU PRAWNEGO",
        krs: "149452",
        cel: "Celem działalności jest wspieranie i prowadzenie prac naukowo-badawczych w obszarach prawa cywilnego, handlowego, finansowego, administracyjnego, konstytucyjnego oraz problematyki związanej z samorządami. Ponadto istotnym aspektem jest popularyzacja wiedzy prawnej w społeczeństwie oraz promowanie i wdrażanie rozwiązań mających na celu zapewnienie bezpieczeństwa obrotu prawnego.",
        cel_mini: "Celem działalności jest wspieranie badań w dziedzinie różnych gałęzi prawa oraz upowszechnianie wiedzy prawnej w społeczeństwie. Dodatkowo, promowane są rozwiązania mające na celu zapewnienie bezpieczeństwa obrotu prawnego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "nauka"])
    },
    {
        id: 91,
        nazwa: "FUNDACJA NA RZECZ BUDOWY OTWARTEGO SPOŁECZEŃSTWA 'ONI-TO MY'",
        krs: "481028",
        cel: "Organizacja koncentruje się na wspieraniu społecznej aktywności obywateli, w tym osób z niepełnosprawnościami, seniorów, bezdomnych, bezrobotnych, dzieci, młodzieży oraz innych grup potrzebujących wsparcia. Oferuje pomoc osobom zwalnianym z zakładów karnych oraz ich rodzinom, a także promuje aktywne postawy w rozwijaniu społeczeństwa obywatelskiego. Dodatkowo, angażuje się w różnorodne działania edukacyjne, integracyjne oraz terapeutyczne dla grup zagrożonych wykluczeniem społecznym. Organizacja wspiera inicjatywy na rzecz budowy otwartego społeczeństwa i działania mniejszości narodowych, stawiając na zwiększenie aktywności oraz integracji społecznej i zawodowej. Współpracuje z innymi organizacjami pozarządowymi oraz instytucjami krajowymi i zagranicznymi, podejmując także działalność na rzecz integracji europejskiej i współpracy międzynarodowej.",
        cel_mini: "Organizacja wspiera aktywność społeczną różnych grup, takich jak osoby niepełnosprawne, seniorzy, bezdomni i mniejszości, poprzez działania edukacyjne, integracyjne i terapeutyczne. Dodatkowo, promuje współpracę z innymi instytucjami oraz działania na rzecz integracji europejskiej i budowy otwartego społeczeństwa.",
        siedziba_miejscowosc: "HAJNÓWKA",
        tagi: new Set(["edukacja", "niepelnosprawnosc", "wspolpraca", "spoleczenstwo"])
    },
    {
        id: 92,
        nazwa: "FUNDACJA NA RZECZ OFIAR WYPADKÓW KOMUNIKACYJNYCH I BEZPIECZEŃSTWA W RUCHU DROGOWYM 'ZIELONY LIŚĆ'",
        krs: "52038",
        cel: "Fundacja ma na celu działania na rzecz pożytku publicznego, koncentrując się na wsparciu osób poszkodowanych w wypadkach komunikacyjnych oraz ich rodzin, a także na pomocy dla osób niepełnosprawnych. W ramach swoich działań fundacja prowadzi różnorodne inicjatywy charytatywne, edukacyjne i społeczne, obejmujące pomoc dla osób w trudnej sytuacji życiowej, promocję zdrowia oraz aktywizację zawodową. Specjalna uwaga jest zwrócona na niesienie wsparcia seniorom, dzieciom i młodzieży, ofiarom przestępstw oraz osobom zagrożonym wykluczeniem społecznym. Fundacja angażuje się również w działania na rzecz ochrony praw rodziny oraz równouprawnienia płci, organizując wolontariat i różnorodne formy wsparcia społecznego.",
        cel_mini: "Fundacja ma na celu wspieranie osób poszkodowanych w wypadkach komunikacyjnych, osób niepełnosprawnych oraz poprawę bezpieczeństwa w ruchu drogowym, a także prowadzenie działalności charytatywnej i społecznej. Działa na rzecz osób w trudnej sytuacji życiowej, seniorów, dzieci, ofiar przestępstw oraz promuje równouprawnienie i aktywizację zawodową.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["charytatywnosc", "wolontariat", "pomoc", "edukacja", "niepelnosprawnosc"])
    },
    {
        id: 93,
        nazwa: "FUNDACJA OCALENIE",
        krs: "30279",
        cel: "Fundacja ma na celu wspieranie integracji oraz aktywizacji obcokrajowców, Polaków i osób polskiego pochodzenia przebywających lub planujących przyjazd do Polski. Dąży do budowania otwartego społeczeństwa poprzez promowanie wiedzy o różnych kulturach i krajach, wspieranie dialogu międzykulturowego oraz przeciwdziałanie dyskryminacji. Angażuje się w promocję wolontariatu i innych form aktywności społecznej oraz wspiera system integracji społecznej, w tym uchodźców i imigrantów. Dodatkowo, fundacja działa na rzecz przeciwdziałania ubóstwu i nierównościom społecznym poprzez pomoc rozwojową i humanitarną. Adresuje swoje działania do szerokiego grona odbiorców, w tym osób zagrożonych marginalizacją, takich jak uchodźcy, imigranci, powracający Polacy oraz ofiary katastrof i konfliktów. Wspiera także lokalne społeczności, liderów, instytucje oraz ogół społeczeństwa, aby skutecznie realizować swoje cele.",
        cel_mini: "Cele Fundacji obejmują pomoc, integrację oraz aktywizację obcokrajowców i Polaków, budowanie otwartego społeczeństwa przez dialog międzykulturowy, wsparcie wolontariatu, integrację uchodźców i przeciwdziałanie ubóstwu. Fundacja kieruje swoje działania do osób zagrożonych marginalizacją, społeczności lokalnych, instytucji oraz ogółu społeczeństwa.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["integracja", "wolontariat", "dyskryminacja", "pomoc", "praca"])
    },
    {
        id: 94,
        nazwa: "FUNDACJA OPORA",
        krs: "962947",
        cel: "Celem fundacji jest wszechstronne wsparcie osób fizycznych i prawnych poszkodowanych w wyniku konfliktu zbrojnego, zarówno w Ukrainie, jak i w innych krajach. Fundacja oferuje pomoc w odbudowie poczucia bezpieczeństwa, zaopatrzeniu w żywność, ubrania, środki higieny, lekarstwa, sprzęt medyczny oraz potrzebne produkty do codziennego życia. Dodatkowo, wspiera uzyskiwanie kwalifikacji i umiejętności niezbędnych do zmiany zawodu lub miejsca pracy, odbudowy mieszkań oraz zagospodarowania w nowym miejscu. Fundacja również pomaga w zdobywaniu kwalifikacji potrzebnych do prowadzenia działalności gospodarczej oraz w pozyskiwaniu środków na rozpoczęcie, odbudowę lub rozwój takiej działalności.",
        cel_mini: "Fundacja wspiera osoby fizyczne i prawne poszkodowane w wyniku konfliktów zbrojnych, oferując pomoc w zakresie bezpieczeństwa, dostaw niezbędnych produktów oraz uzyskiwania kwalifikacji do zmiany zawodu i prowadzenia działalności gospodarczej. Celem jest także odbudowa mieszkań oraz rozwój działalności gospodarczej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "bezpieczenstwo", "gospodarka", "pomoc", "edukacja"])
    },
    {
        id: 95,
        nazwa: "FUNDACJA OPTIMUM PARETO",
        krs: "510105",
        cel: "Fundacja ma na celu wspieranie cywilizacji dialogu, definiowanej jako społeczeństwo świadome, demokratyczne, odpowiedzialne i wykształcone, które stawia czoła wyzwaniom cywilizacyjnym poprzez racjonalne argumentowanie i współpracę. Jej działalność ma na celu rozwój gospodarki, nauki, oświaty, kultury, sztuki oraz pomocy społecznej, z poszanowaniem wartości wszystkich istot oraz środowiska naturalnego, według zasady efektywności Pareto. Cele szczegółowe fundacji obejmują prowadzenie działalności naukowej i badawczej wspierającej racjonalne podejmowanie decyzji oraz prewencję konfliktów, tworzenie przestrzeni dla racjonalnego dyskursu publicznego, dbanie o bezstronność informacji, projektowanie systemów organizacyjnych i edukacyjnych sprzyjających dialogowi, a także upowszechnianie wiedzy poprzez działania edukacyjne skierowane do różnych grup społecznych, w tym młodzieży i środowisk twórczych.",
        cel_mini: "Fundacja dąży do stworzenia cywilizacji dialogu, bazującej na świadomym, demokratycznym i odpowiedzialnym społeczeństwie, które podejmuje racjonalne decyzje w różnych dziedzinach. Cele szczegółowe obejmują działalność naukową, promowanie dyskursu publicznego, zapewnienie rzetelności informacji oraz edukację społeczną w Polsce i za granicą.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["spoleczenstwo", "kultura", "nauka", "edukacja", "demokracja", "komunikacja"])
    },
    {
        id: 96,
        nazwa: "FUNDACJA PANOPTYKON",
        krs: "327613",
        cel: "Cele fundacji obejmują działania na rzecz ochrony praw człowieka w społeczeństwie nadzorowanym, w tym ochrony danych osobowych i praw konsumentów. Fundacja inicjuje oraz podnosi poziom debaty publicznej w kwestiach dotyczących mechanizmów i technologii nadzoru oraz wykorzystania informacji o jednostkach. Podejmuje także inicjatywy badawcze dotyczące rozwoju społeczeństwa nadzorowanego oraz analizy społecznych konsekwencji tego procesu. Oprócz tego, prowadzi działania edukacyjno-oświatowe, które mają na celu zwiększenie znajomości praw jednostek oraz budowanie społecznej świadomości zagrożeń związanych z rozwojem społeczeństwa nadzorowanego.",
        cel_mini: "Fundacja ma na celu ochronę praw człowieka, w tym danych osobowych i praw konsumentów, oraz inicjowanie debaty publicznej na temat nadzoru w społeczeństwie. Dodatkowo, podejmuje działania badawcze i edukacyjne w zakresie konsekwencji oraz praw przysługujących jednostkom w kontekście rozwoju społeczeństwa nadzorowanego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "spoleczenstwo"])
    },
    {
        id: 97,
        nazwa: "FUNDACJA PCPS - POZNAŃSKIE CENTRUM PROFILAKTYKI SPOŁECZNEJ",
        krs: "430588",
        cel: "Integracja i reintegracja społeczna osób zagrożonych wykluczeniem społecznym oraz pomoc rodzinom i osobom w trudnej sytuacji życiowej są kluczowymi zadaniami, które mają na celu wyrównywanie szans. Działania te obejmują także troskę o porządek i bezpieczeństwo publiczne, a także upowszechnianie i ochronę praw człowieka oraz swobód obywatelskich, wspierając rozwój demokracji. Istotne jest przeciwdziałanie uzależnieniom i patologiom społecznym oraz promowanie równych praw kobiet i mężczyzn, jak również działalność na rzecz osób niepełnosprawnych. W kontekście działalności charytatywnej, istotną rolę odgrywa również promocja i organizacja wolontariatu oraz ochrona i promocja zdrowia, co przyczynia się do budowy zdrowszego i bardziej zrównoważonego społeczeństwa.",
        cel_mini: "Organizacja zajmuje się integracją społeczną osób zagrożonych wykluczeniem, oferując pomoc rodzinom w trudnej sytuacji oraz promując równość praw, zdrowie i działalność charytatywną. Dodatkowo wspiera wolontariat oraz przeciwdziała uzależnieniom i patologiom społecznym.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "niepelnosprawnosc", "bezpieczenstwo", "rodzina"])
    },
    {
        id: 98,
        nazwa: "FUNDACJA 'PEDAGOGIUM'",
        krs: "256593",
        cel: "Celem Fundacji, korzystającej z dorobku Pedagogium - Wyższej Szkoły Pedagogiki Resocjalizacyjnej w Warszawie, jest prowadzenie działalności społecznie użytecznej poprzez wspieranie inicjatyw na rzecz wychowania, rozwoju i edukacji młodzieży, a także wspomaganie instytucji edukacyjnych w zakresie ich rozwoju intelektualnego i materialnego. Fundacja działa na rzecz wyrównywania szans edukacyjnych, społecznych i zawodowych, promuje twórczą resocjalizację, a także wspiera młodzież zagrożoną wykluczeniem społecznym. W ramach swoich działań, organizacja angażuje młodzież w promocję zdrowego stylu życia, poprawę bezpieczeństwa publicznego, obronność państwa oraz idei demokracji i samorządności. Dodatkowo, Fundacja koncentruje się na aktywizacji zawodowej osób bez pracy, promuje ideę samorządności oraz poszukuje skutecznych rozwiązań w edukacji, prowadząc seminaria oraz szkolenia. Uwagę poświęca również upowszechnianiu wyników badań naukowych, szczególnie w środowiskach nauczycielskich i akademickich.",
        cel_mini: "Fundacja, korzystając z dorobku Pedagogium Wyższej Szkoły Pedagogiki Resocjalizacyjnej w Warszawie, prowadzi działalność społeczną, wspierając edukację, rozwój oraz aktywizację zawodową młodzieży, a także promując resocjalizację i wyrównywanie szans społecznych. Dodatkowo organizuje seminaria i warsztaty, aby poprawić jakość edukacji oraz upowszechnia wyniki badań naukowych w środowiskach akademickich.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "mlodziez", "edukacja", "praca", "rownosc"])
    },
    {
        id: 99,
        nazwa: "FUNDACJA POLKI MOGĄ WSZYSTKO",
        krs: "74781",
        cel: "Fundacja angażuje się w działalność na rzecz dzieci i młodzieży, szczególnie tych wychowujących się w pieczy zastępczej lub rodzinach wielodzietnych. Skupia się na rozwijaniu i upowszechnianiu rodzinnej opieki zastępczej oraz wspiera grupy szczególnego ryzyka, w tym młodzież trudną, pochodzącą z rodzin w kryzysie. Ponadto, fundacja oferuje pomoc kobietom samotnie wychowującym dzieci, dzieciom i młodzieży z niepełnosprawnościami, ofiarom klęsk żywiołowych i działań wojennych, a także innym osobom, które znalazły się w trudnej sytuacji życiowej lub materialnej.",
        cel_mini: "Fundacja wspiera dzieci i młodzież, zwłaszcza wychowujących się w pieczy zastępczej oraz z rodzin wielodzietnych, a także grupy szczególnego ryzyka, w tym trudną młodzież i kobiety samotnie wychowujące dzieci. Działa również na rzecz osób niepełnosprawnych, ofiar klęsk żywiołowych oraz tych w trudnej sytuacji życiowej lub materialnej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["opieka", "mlodziez", "dzieci"])
    },
    {
        id: 100,
        nazwa: "FUNDACJA 'POLSKIE CENTRUM POMOCY MIĘDZYNARODOWEJ'",
        krs: "259298",
        cel: "Organizacja ma na celu niesienie pomocy osobom dotkniętym kryzysami humanitarnymi, konfliktami zbrojnymi, katastrofami naturalnymi oraz innymi zagrożeniami dla życia i dobrobytu, zarówno w Polsce, jak i za granicą. Działa poprzez dostarczanie pomocy humanitarnej oraz udzielanie wsparcia w zakresie rozwoju, techniki, edukacji i zdrowia. Wspiera i propaguje idee praw człowieka, a także oferuje pomoc uchodźcom, migrantów oraz uchodźcom wewnętrznym, koncentrując się na ochronie ich praw, potrzebach humanitarnych oraz aktywizacji zawodowej. Organizacja prowadzi działalność społeczną, informacyjną, kulturalną, naukową i oświatową w celu rozwiązania problemów globalnych oraz zwiększenia zaangażowania Polski w międzynarodowe stosunki, a także wspiera wolontariat.",
        cel_mini: "Organizacja zajmuje się niesieniem pomocy osobom dotkniętym kryzysami humanitarnymi oraz wojennymi, zarówno w Polsce, jak i za granicą. Dodatkowo, propaguje prawa człowieka, wspiera uchodźców i migrantów oraz prowadzi działalność społeczno-kulturalną i wolontariacką.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "wolontariat", "pomoc", "humanitaryzm"])
    },
    {
        id: 101,
        nazwa: "FUNDACJA POLSKIE TOWARZYSTWO PRAWNICZE OPUS IURIS",
        krs: "576042",
        cel: "Celem działań na rzecz środowiska prawniczego jest podnoszenie jego solidarności i merytoryczności, promowanie wizerunku prawników jako zaufanych przedstawicieli zawodów oraz wspieranie promocji zawodów prawniczych. Istotne jest także wspomaganie budowy markowych relacji handlowych oraz wymiany doświadczeń i myśli pomiędzy aplikantami, prawnikami i studentami prawa. Organizacje prawnicze powinny wyznaczać kierunki rozwoju prawa, monitorować jego tworzenie oraz ustalać standardy wykonywania zawodów prawniczych. Ważnym aspektem jest zwiększanie społecznej świadomości w dziedzinach prawa, ekonomii, finansów oraz nauk ścisłych, co sprzyja rozwojowi zawodowemu prawników i innych wolnych zawodów. Ponadto, działania powinny koncentrować się na rozwijaniu nauki, prowadzeniu badań oraz wspieraniu działalności gospodarczej oraz przedsiębiorczości w obszarze usług prawnych. Niezbędna jest również integracja środowiska prawniczego, umacnianie sprawiedliwości oraz demokratycznych wartości, a także przeciwdziałanie nietolerancji, szowinizmowi i dyskryminacji, w tym nadużyciom prawnym w sferze publicznej i samorządowej.",
        cel_mini: "Celem działań jest wspieranie i rozwijanie środowiska prawniczego, promowanie zawodów prawniczych oraz wzmocnienie sprawiedliwości, samorządności i integracji społecznej. Dodatkowo, kluczowe są działania na rzecz rozwoju nauki, przedsiębiorczości oraz przeciwdziałanie nadużyciom prawa i nietolerancji.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 102,
        nazwa: "FUNDACJA POMOCY RODZINIE 'OPOKA'",
        krs: "209788",
        cel: "Celem działań podejmowanych w obszarze wsparcia dzieci i ich rodzin jest zapewnienie pomocy zarówno naturalnym, jak i zastępczym rodzinom, w tym adopcyjnym oraz opiekunom prawnym. Kluczowe jest udzielanie specjalistycznej pomocy rodzinom w kryzysie oraz wzmacnianie struktur rodzinnych. Podejmowane inicjatywy mają na celu przeciwdziałanie krzywdzeniu dzieci, zapobieganie jego skutkom oraz ochrona praw dziecka. Istotna jest także ochrona rodziny jako podstawowej komórki społecznej, a także zapobieganie wykluczeniu społecznemu i marginalizacji. Istnieją działania ukierunkowane na przeciwdziałanie przemocy, przestępczości oraz uzależnieniom, a także promocję zdrowia oraz profilaktykę zdrowotną.",
        cel_mini: "Celem działań jest wsparcie dzieci krzywdzonych oraz ich rodzin poprzez specjalistyczną pomoc, ochronę praw dziecka i rodzin, a także promocję zdrowia i zapobieganie przemocy oraz marginalizacji. Inicjatywy te mają na celu wzmacnianie więzi rodzinnych oraz przeciwdziałanie skutkom krzywdzenia dzieci.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["wsparcie", "dzieci"])
    },
    {
        id: 103,
        nazwa: "'POMOC POTRZEBUJĄCYM'",
        krs: "140287",
        cel: "Celem fundacji jest poprawa warunków życia osób starszych, rencistów, emerytów, osób poszkodowanych przez los oraz niepełnosprawnych i samotnych, a także ich rodzin. Fundacja prowadzi i wspiera domy opiekuńcze oraz zakłady zdrowotne, organizuje aktywną rehabilitację i udziela pomocy materialnej. Działa na rzecz charytatywnej działalności, integracji osób niepełnosprawnych w społeczeństwie, zaopatrzenia w artykuły pierwszej potrzeby oraz prowadzenia zbiórek sprzętu specjalistycznego. W ramach działalności fundacja angażuje się w edukację, ochronę przyrody i zwierząt, przeciwdziałanie bezdomności oraz bezrobociu, a także patologii społecznych. Dodatkowo, stawia na ochronę dziedzictwa narodowego, rozwój nowoczesnego rolnictwa, turystyki dla osób niepełnosprawnych oraz udziela porad prawnych. Fundacja pielęgnuje tradycje narodowe, rozwija kulturę i sztukę, a także wspiera organizacje pozarządowe w zakresie zadań publicznych.",
        cel_mini: "Celem fundacji jest poprawa warunków życia osób starszych, niepełnosprawnych oraz ich integracja w społeczeństwie, a także prowadzenie działalności charytatywnej i wsparcie w zakresie zdrowia, edukacji oraz ochrony środowiska. Fundacja angażuje się również w rozwój kultury, tradycji narodowej oraz działania na rzecz organizacji pozarządowych.",
        siedziba_miejscowosc: "KOPYTKOWO",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "opieka", "pomoc", "edukacja", "rehabilitacja"])
    },
    {
        id: 104,
        nazwa: "FUNDACJA PRACOWNIA DIALOGU",
        krs: "377312",
        cel: "Podmioty zajmujące się pomocą społeczną koncentrują swoją działalność na szerokim zakresie wsparcia, obejmującym pomoc osobom i rodzinom w trudnych sytuacjach życiowych oraz wyrównywanie ich szans. Wspierają rodziny i system pieczy zastępczej, oferując nieodpłatną pomoc prawną oraz zwiększając świadomość prawną. Angażują się w integrację oraz reintegrację osób zagrożonych wykluczeniem, w tym mniejszości narodowych i etnicznych oraz cudzoziemców. Działalność obejmuje również ochronę zdrowia, wsparcie osób niepełnosprawnych, promocję zatrudnienia, równość płci, opiekę nad osobami starszymi oraz rozwój gospodarczy i edukacyjny. Organizacje prowadzą działania na rzecz dzieci i młodzieży, wolności i praw człowieka, oraz integracji europejskiej. Promują także wolontariat, rodzicielstwo, przeciwdziałają uzależnieniom oraz angażują się w rewitalizację i wsparcie organizacji pozarządowych.",
        cel_mini: "Wymienione działania koncentrują się na wsparciu osób w trudnej sytuacji życiowej, integracji społecznej oraz ochronie praw człowieka, a także promują aktywizację zawodową i lokalny rozwój. Obejmują również działalność na rzecz rodzin, dzieci, mniejszości oraz osób z niepełnosprawnościami, a także wolontariatu i przeciwdziałania patologiom społecznym.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["wsparcie", "spoleczenstwo", "prawo", "wolontariat", "pomoc", "edukacja", "zdrowie"])
    },
    {
        id: 105,
        nazwa: "FUNDACJA PROFETO.PL - SERCAŃSKI SEKRETARIAT NA RZECZ NOWEJ EWANGELIZACJI",
        krs: "494148",
        cel: "Cele fundacji obejmują wspieranie działalności Zgromadzenia Księży Najświętszego Serca Jezusowego w zakresie kultu religijnego oraz prowadzenie samodzielnej działalności w tej dziedzinie, szczególnie poprzez nowoczesne formy przekazu Ewangelii, takie jak radio, telewizja i internet. Fundacja angażuje się również w naukę, edukację oraz działania prewencyjne przeciwko przestępczości, oferując wsparcie osobom znajdującym się w trudnej sytuacji, w tym osobom zagrożonym wykluczeniem społecznym i pokrzywdzonym przestępstwem. Dodatkowo, fundacja działa na rzecz kultury, sztuki oraz ochrony dóbr kultury, pielęgnując tradycje narodowe, polskość oraz rozwijając świadomość narodową, obywatelską i kulturalną. Wspiera także misjonarzy i misje prowadzone przez zgromadzenie.",
        cel_mini: "Cele fundacji obejmują wspieranie działalności księży Sercanów w zakresie kultu religijnego oraz edukacji, a także promocję wartości narodowych, kulturowych i społecznych poprzez różne formy przekazu ewangelii i działania wspierające osoby w trudnej sytuacji życiowej. Dodatkowo, fundacja angażuje się w działalność kulturalną i ochronę tradycji narodowych oraz wspiera misjonarzy w ich pracy.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "religia", "kultura", "spoleczenstwo"])
    },
    {
        id: 106,
        nazwa: "FUNDACJA RESOCJALIZACJI I READAPTACJI SPOŁECZNEJ 'TULIPAN'",
        krs: "447218",
        cel: "Fundacja angażuje się w różnorodne działania na rzecz niesienia pomocy społecznej, w tym wsparcia rodzin i osób w trudnych sytuacjach życiowych, dążąc do wyrównywania ich szans. Jej celem jest również integracja oraz reintegracja zawodowa i społeczna osób zagrożonych wykluczeniem. Fundacja promuje zatrudnienie oraz aktywizację osób bezrobotnych i zagrożonych utratą pracy, a także przeciwdziała uzależnieniom i patologiom społecznym. Wspiera młodzież i dorosłych opuszczających zakłady karne, a także pomaga ich rodzinom w trudnej sytuacji. Dodatkowo, fundacja oferuje wsparcie dla dzieci i młodzieży z rodzin patologicznych, jak również udziela pomocy prawnej, pedagogicznej, terapeutycznej i psychologicznej. Zajmuje się także wspieraniem w zdobywaniu kwalifikacji zawodowych oraz budowaniem współpracy między organizacjami specjalizującymi się w pomocy penitencjarnej. Jej działania mają na celu przełamywanie barier w powrocie do społeczeństwa oraz przeciwdziałanie wykluczeniu i dyskryminacji osób pozbawionych wolności. Szczegółowe cele działalności fundacji określa §2 ust.1 statutu.",
        cel_mini: "Fundacja zajmuje się niesieniem pomocy społecznej, w tym wsparciem rodzin i osób w trudnej sytuacji, a także integracją oraz reintegracją zawodową i społeczną osób zagrożonych wykluczeniem społecznym. Działania obejmują przeciwdziałanie uzależnieniom, pomoc prawną i terapeutyczną, wsparcie dla byłych więźniów oraz promocję zatrudnienia i aktywizacji zawodowej.",
        siedziba_miejscowosc: "SZCZECIN",
        tagi: new Set(["wsparcie", "spoleczenstwo", "prawo", "pomoc", "praca"])
    },
    {
        id: 107,
        nazwa: "FUNDACJA ROZWOJU DEMOKRACJI LOKALNEJ IM. JERZEGO REGULSKIEGO",
        krs: "52000",
        cel: "Celem fundacji jest krzewienie idei samorządności obywatelskiej jako kluczowego elementu demokracji poprzez różnorodną działalność oświatową, doradczą, naukową i badawczą. Fundacja prowadzi badania dotyczące form i problemów samorządności terytorialnej, upowszechnia wiedzę na temat działania samorządów, oraz wspiera lokalne inicjatywy społeczne. Dąży do wzajemnej współpracy pomiędzy samorządami, gromadzi informacje o lokalnych inicjatywach oraz działa na rzecz rozwoju społeczności lokalnych. Ponadto, fundacja wspiera organizacje o podobnych celach, zajmuje się ochroną środowiska i promuje zrównoważony rozwój, a także działa na rzecz poszanowania praw człowieka oraz wartości Unii Europejskiej.",
        cel_mini: "Fundacja ma na celu promowanie samorządności obywatelskiej jako fundamentu demokracji poprzez działalność edukacyjną, doradczą i badawczą, skupioną na wspieraniu lokalnych inicjatyw oraz współpracy samorządów. Dodatkowo dąży do ochrony środowiska, zrównoważonego rozwoju oraz poszanowania praw człowieka i wartości UE.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["obywatelstwo", "spolecznosc", "srodowisko", "edukacja", "demokracja"])
    },
    {
        id: 108,
        nazwa: "FUNDACJA ROZWOJU KAPITAŁU LUDZKIEGO",
        krs: "237612",
        cel: "Cele fundacji obejmują promocję zatrudnienia oraz aktywizację zawodową osób bez pracy lub zagrożonych zwolnieniem, wspieranie rozwoju gospodarczego i przedsiębiorczości, a także działania w zakresie nauki, edukacji, wychowania oraz krajoznawstwa. Fundacja angażuje się w rozwój kultury, sztuki oraz ochronę dóbr kultury i tradycji, a także w ekologię i ochronę zwierząt oraz dziedzictwa przyrodniczego. Dąży do upowszechniania i ochrony praw kobiet, promując równość płci, oraz działa na rzecz integracji europejskiej, wspierając kontakty między społeczeństwami. Ponadto, fundacja oferuje wsparcie techniczne, szkoleniowe i doradcze dla organizacji pozarządowych, a także prowadzi działania w zakresie profilaktyki zdrowotnej i ochrony zdrowia.",
        cel_mini: "Cele fundacji obejmują promocję zatrudnienia i aktywizację osób bez pracy, wspieranie rozwoju gospodarczego oraz działalność w edukacji, kulturze, ekologii, prawach kobiet i integracji europejskiej. Fundacja angażuje się także w promowanie zdrowia oraz wspieranie organizacji pozarządowych.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["prawo", "kultura", "edukacja", "praca", "ekologia"])
    },
    {
        id: 109,
        nazwa: "FUNDACJA ROZWOJU MEDIACJI W LIKWIDACJI",
        krs: "412742",
        cel: "Celem działań jest rozwijanie mediacji oraz alternatywnych metod rozwiązywania sporów (ADR), poprzez propagowanie i wspieranie idei mediacji jako skutecznej formy rozwiązywania konfliktów sądowych i pozasądowych. Kluczowe jest też upowszechnianie wiedzy o mediacji i jej różnych formach, a także prowadzenie postępowań mediacyjnych. Dodatkowo, istotne jest doskonalenie umiejętności mediatorów oraz wspieranie ich rozwoju etycznego. Organizowane są też konsultacje społeczne i działania na rzecz partycypacji społecznej. Wspierane są także inicjatywy dotyczące rozwiązywania konfliktów międzygrupowych, zwłaszcza sporów zbiorowych. Edukacja jest środkiem do wspierania rozwoju osób, instytucji, organizacji pozarządowych i podmiotów gospodarczych, a jednocześnie propagowana jest idea wolontariatu.",
        cel_mini: "Celem działań jest rozwój mediacji oraz alternatywnych metod rozwiązywania sporów, poprzez ich promocję, konsultacje społeczne, edukację oraz wsparcie mediatorów i organizacji. Dodatkowo, prowadzone są postępowania mediacyjne, rozwiązywanie konfliktów międzygrupowych oraz propagowanie idei wolontariatu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "wolontariat", "spoleczenstwo", "pokoj"])
    },
    {
        id: 110,
        nazwa: "FUNDACJA ROZWOJU 'PATRIA'",
        krs: "288450",
        cel: "Organizowanie i wspieranie inicjatyw oraz przedsięwzięć na rzecz rozwoju obejmuje wiele kluczowych dziedzin, w tym ochronę środowiska, zdrowia i pomocy społecznej, działalność naukowo-techniczną, a także kulturę, oświatę i edukację. Istotne jest również promowanie kultury fizycznej i sportu, oraz ochrona dziedzictwa narodowego, tradycji niepodległościowej i solidarnościowej. Dodatkowo, działania te wspierają procesy decentralizacji państwa oraz rozwój samorządności lokalnej, a także upowszechniają zasady etyczne i moralne w polityce oraz działalności publicznej.",
        cel_mini: "Organizowanie i wspieranie inicjatyw na rzecz rozwoju obejmuje różnorodne dziedziny, takie jak ochrona środowiska, zdrowia, kultura, sport oraz promocja etyki w polityce i działalności publicznej. Działania te wspierają również decentralizację państwa i rozwój samorządności lokalnej.",
        siedziba_miejscowosc: "JAWORZNO",
        tagi: new Set(["edukacja", "sport", "srodowisko", "pomoc", "kultura", "zdrowie"])
    },
    {
        id: 111,
        nazwa: "FUNDACJA SOLIDARNOŚCI MIĘDZYNARODOWEJ",
        krs: "24453",
        cel: "Celem fundacji jest prowadzenie działań na rzecz współpracy rozwojowej z innymi państwami, koncentrując się na wsparciu przekształceń demokratycznych, rozwoju społeczeństwa obywatelskiego oraz promowaniu zasad dobrego rządzenia i przestrzegania praw człowieka. Fundacja angażuje się również w rozwój demokracji lokalnej oraz w przekazywanie doświadczeń związanych z transformacją gospodarczą i ustrojową, szczególnie w ramach projektów zlecanych i finansowanych przez ministra właściwego do spraw zagranicznych.",
        cel_mini: "Celem Fundacji jest prowadzenie działań w zakresie współpracy rozwojowej dla wsparcia przemian demokratycznych oraz rozwoju społeczeństwa obywatelskiego w innych państwach. Działania te obejmują m.in. dobre rządzenie, przestrzeganie praw człowieka oraz przekazywanie doświadczeń transformacji gospodarczej i ustrojowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "demokracja", "wspolpraca", "spoleczenstwo"])
    },
    {
        id: 112,
        nazwa: "MANUFAKTURA SPOŁECZNA",
        krs: "272518",
        cel: "Fundacja prowadzi różnorodne działania z zakresu ekonomii społecznej, obejmujące konfekcjonowanie, produkcję i handel produktami oraz usługami, z przeznaczeniem zysków na cele statutowe. Oferuje również wsparcie osobom zagrożonym wykluczeniem społecznym poprzez poradnictwo zawodowe, społeczne i prawne, a także pomoc prawną i obywatelską. Działalność fundacji obejmuje charytatywną pomoc dla rodzin żyjących w ubóstwie, wspieranie osób z niepełnosprawnościami, oraz działania na rzecz równości płci. Zaangażowana jest także w promowanie demokracji, ochronę praw człowieka, przeciwdziałanie uzależnieniom, organizowanie terapii oraz udzielanie wsparcia więźniom i byłym więźniom. Fundacja dba o rozwój wspólnot lokalnych, promocję kultury, sztuki, ekologii, turystyki, a także aktywność w zakresie edukacji, w tym wsparcie dzieci i młodzieży. Wspiera integrację cudzoziemców oraz promuje wolontariat, a także działalność na rzecz Polaków za granicą i promocję Rzeczypospolitej Polskiej na arenie międzynarodowej.",
        cel_mini: "Fundacja prowadzi działalność z zakresu ekonomii społecznej, poradnictwa, pomocy prawnej oraz charytatywnej, a także wspiera integrację osób zagrożonych społecznym wykluczeniem. Działa także na rzecz praw człowieka, rozwoju lokalnych wspólnot, ochrony środowiska i kultury oraz angażuje się w edukację, wolontariat i pomoc Polonii za granicą.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["charytatywnosc", "prawo", "ekonomia", "pomoc", "zawod"])
    },
    {
        id: 113,
        nazwa: "'FUNDACJA STRAŻNIK PAMIĘCI'",
        krs: "647170",
        cel: "Kształtowanie i propagowanie postaw społecznych, obywatelskich oraz patriotycznych obejmuje działania mające na celu umacnianie wartości demokratycznych w społeczeństwie. Upoowszechnianie wiedzy o historii Polski jest kluczowe dla budowania tożsamości narodowej, zaś ochrona i promocja dziedzictwa narodowego pozwala na zachowanie kulturowych skarbów dla przyszłych pokoleń. Zachowanie oraz popularyzacja pamięci historycznej sprzyjają budowaniu świadomości narodowej, natomiast propagowanie twórczości, która przyczynia się do odnowienia pamięci historycznej, wspiera proces refleksji nad przeszłością i jej wpływem na współczesność.",
        cel_mini: "Celem działalności jest kształtowanie postaw obywatelskich i patriotycznych, upowszechnianie wiedzy o historii Polski oraz ochrona i promocja dziedzictwa narodowego, pamięci historycznej i twórczości związanej z odnową tej pamięci.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["obywatelstwo", "spoleczenstwo"])
    },
    {
        id: 114,
        nazwa: "FUNDACJA UKRAINA",
        krs: "463960",
        cel: "Prowadzenie działalności w zakresie ochrony praw pracowników oraz osób świadczących usługi na podstawie umów cywilnoprawnych koncentruje się na zapewnieniu sprawiedliwych warunków pracy oraz przestrzeganiu przepisów prawa pracy. Z kolei działania w zakresie ochrony praw człowieka koncentrują się na przeciwdziałaniu handlowi ludźmi oraz nielegalnej migracji, skupiając się na ochronie podstawowych wolności i godności każdej osoby. Obie sfery działalności mają na celu wspieranie i promowanie praw obywatelskich oraz przeciwdziałanie naruszeniom w tych obszarach.",
        cel_mini: "Działalność obejmuje ochronę praw pracowników oraz osób świadczących usługi na podstawie umów cywilnoprawnych, a także ochronę praw człowieka, ze szczególnym uwzględnieniem przeciwdziałania handlowi ludźmi i nielegalnej migracji.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["prawo"])
    },
    {
        id: 115,
        nazwa: "FUNDACJA 'UKRAIŃSKI DOM'",
        krs: "342283",
        cel: "Cele fundacji obejmują działalność na rzecz integracji cudzoziemców oraz przeciwdziałanie dyskryminacji obywateli Ukrainy w Polsce. Fundacja działa na rzecz ułatwienia kontaktów między społecznością ukraińską a polską, promując kulturę ukraińską w Unii Europejskiej. Wspiera edukację obywatelską oraz samodzielność obywateli państw trzecich, kreując pozytywny wizerunek tych obywateli w krajach Unii. W ramach celów fundacji znajduje się również rozwój kontaktów między środowiskami działającymi na rzecz imigrantów, promowanie wartości demokratycznych i obywatelskich, ochrona praw człowieka oraz wspieranie społeczeństwa obywatelskiego. Fundacja angażuje się w zbliżenie narodów i społeczeństw regionu Europy Środkowej i Wschodniej, działając na rzecz mniejszości narodowych oraz udzielając pomocy ofiarom katastrof i konfliktów. Realizuje także zadania związane z integracją i reintegracją osób zagrożonych wykluczeniem społecznym, promując zatrudnienie oraz równouprawnienie płci, a także oferując pomoc prawną i zwiększając świadomość prawną społeczeństwa.",
        cel_mini: "Cele fundacji obejmują integrację cudzoziemców, przeciwdziałanie dyskryminacji obywateli Ukrainy, promowanie kultury ukraińskiej oraz wspieranie edukacji obywatelskiej. Dodatkowo, fundacja angażuje się w ochronę praw człowieka, wspieranie mniejszości narodowych i etnicznych, pomoc ofiarom kryzysów oraz działania na rzecz równych praw i aktywizacji zawodowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dyskryminacja", "prawo", "cudzoziemcy", "spoleczenstwo"])
    },
    {
        id: 116,
        nazwa: "FUNDACJA 'UNIA REGIONALNYCH CENTRÓW MEDIACJI'",
        krs: "514283",
        cel: "Cele Unii RCM obejmują rozwój idei zaufania i dialogu społecznego, podmiotowości obywateli, subsydiarności oraz szacunku dla praw człowieka. Ponadto skupiają się na promowaniu pozasądowych, konstruktywnych metod rozwiązywania konfliktów i sporów. Ważnym elementem jest także rozwój rynku mediacji, oparty na solidarnej współpracy, zrównoważonym rozwoju, uczciwej konkurencji i równym traktowaniu.",
        cel_mini: "Cele Unii RCM obejmują promowanie zaufania i dialogu społecznego, podmiotowości obywateli, oraz szacunku dla praw człowieka, a także rozwój pozasądowych metod rozwiązywania konfliktów i mediacji opartej na współpracy i równości.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dialog", "spoleczenstwo", "zaufanie", "prawo", "pokoj"])
    },
    {
        id: 117,
        nazwa: "FUNDACJA UNIWERSYTECKICH PORADNI PRAWNYCH",
        krs: "115603",
        cel: "Wsparcie finansowe dla uniwersyteckich poradni prawnych oraz innych programów praktycznej edukacji prawniczej jest kluczowe dla ich funkcjonowania. Niezbędne jest również opracowanie i wdrożenie standardów działalności tych poradni, które zapewnią wysoką jakość usług. Ponadto, konieczne jest inicjowanie współpracy z organami władz ustawodawczej, sądowniczej oraz samorządami zawodów prawniczych w zakresie opracowywania i propagowania projektów regulacji prawnych dotyczących działalności poradni.",
        cel_mini: "Wsparcie finansowe uniwersyteckich poradni prawnych oraz innych programów edukacji prawniczej, a także opracowywanie standardów ich działalności. Inicjowanie prac nad regulacjami prawnymi w współpracy z organami władzy, które dotyczyć będą funkcjonowania poradni.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "finanse"])
    },
    {
        id: 118,
        nazwa: "FUNDACJA UWOLNIENIE",
        krs: "197380",
        cel: "Celem fundacji jest rozwiązywanie problemów społecznych oraz ich negatywnych konsekwencji, takich jak kryzysy życiowe, bezrobocie, zagrożenie wykluczeniem społecznym oraz niski poziom wiedzy i umiejętności. Fundacja koncentruje się m.in. na pomocy osobom uzależnionym w adaptacji do życia w rodzinie i społeczeństwie, wszechstronnej pomocy rodzinom uzależnionym, stworzeniu bazy materialnej i terapeutycznej oraz prowadzeniu działań oświatowo-profilaktycznych. Ważnym elementem jej działalności jest współpraca z krajowymi i międzynarodowymi ośrodkami zajmującymi się problematyką uzależnień, a także rehabilitacja zawodowa i społeczna osób niepełnosprawnych. Fundacja wdraża programy Unii Europejskiej w obszarze rynku pracy, pomocy społecznej, zdrowia, edukacji i rolnictwa, a także działa na rzecz osób bezdomnych, byłych więźniów oraz tych przebywających w zakładach karnych. Prowadzi diagnozę i terapię psychologiczną i psychiatryczną oraz wspiera reintegrację zawodową i społeczną osób zagrożonych wykluczeniem. Dodatkowo, fundacja propaguje aspekty społeczne kultury.",
        cel_mini: "Celem fundacji jest rozwiązywanie problemów społecznych takich jak uzależnienia, bezrobocie, czy wykluczenie społeczne poprzez wszechstronną pomoc osobom w potrzebie oraz działania edukacyjne i rehabilitacyjne. Fundacja współpracuje z organizacjami krajowymi i międzynarodowymi, aby tworzyć kompleksowe wsparcie dla różnych grup społecznych, w tym osób niepełnosprawnych i bezdomnych.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["wsparcie", "spoleczenstwo", "pomoc", "edukacja", "zdrowie", "rehabilitacja"])
    },
    {
        id: 119,
        nazwa: "FUNDACJA WARSAW ENTERPRISE INSTITUTE",
        krs: "458888",
        cel: "Celem działalności jest wspieranie dobra społeczeństwa polskiego w obszarze aktywności społecznej, naukowej i informacyjnej, a także pogłębianie konkurencyjności gospodarczej, przedsiębiorczości i innowacyjności w Polsce. Organizacja dąży do tworzenia sprzyjających warunków dla rozwoju życia gospodarczego oraz wspiera inicjatywy gospodarcze i społeczne zarówno w kraju, jak i za granicą, promując zasady wolnego rynku i etyki w działalności gospodarczej. Dodatkowo prowadzi działania edukacyjne, zwiększając wiedzę społeczeństwa na kluczowe tematy dotyczące państwa, prawa, bezpieczeństwa, gospodarki i demografii, oraz inicjuje debaty publiczne dotyczące tych obszarów. Organizacja bada i upowszechnia wiedzę o wyzwaniach strategicznych o charakterze politycznym, gospodarczym i militarnym, angażując się w współpracę międzynarodową. Ponadto zajmuje się ratownictwem i ochroną ludności oraz prowadzi działalność w obszarze edukacji, ze szczególnym uwzględnieniem nauki. Dodatkowo prowadzi działalność dobroczynną i charytatywną.",
        cel_mini: "Organizacja dąży do wspierania dobra społecznego w Polsce poprzez działalność naukową, informacyjną i społeczną, a także promuje konkurencyjność gospodarczą oraz inicjatywy mające na celu rozwój. Dodatkowo angażuje się w działania ratunkowe, edukacyjne i charytatywne, dbając o kluczowe obszary takie jak bezpieczeństwo i gospodarka.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "wspolpraca", "innowacje", "gospodarka", "edukacja"])
    },
    {
        id: 120,
        nazwa: "FUNDACJA WIELKA ORKIESTRA ŚWIĄTECZNEJ POMOCY",
        krs: "30897",
        cel: "Fundacja ma na celu działalność w zakresie ochrony zdrowia, w szczególności ratowanie życia chorych, zwłaszcza dzieci, oraz poprawę ich zdrowia poprzez promocję zdrowia i profilaktykę. Dodatkowe cele fundacji obejmują pomoc osobom pokrzywdzonym, chorym oraz niepełnosprawnym, a także ich rodzinom i opiekunom, ułatwianie dostępu do placówek medycznych, zapewnianie profesjonalnego sprzętu leczniczego oraz edukację w zakresie ochrony życia i zdrowia. Fundacja organizuje także wolontariat oraz wydarzenia charytatywne, zwiększa świadomość problemów zdrowotnych, przeciwdziała patologiom społecznym, takim jak uzależnienia, oraz angażuje się w działalność kulturalną, promując postawy prospołeczne i budowanie społeczeństwa obywatelskiego.",
        cel_mini: "Podstawowym celem fundacji jest ratowanie życia i poprawa zdrowia chorych, szczególnie dzieci, poprzez promocję zdrowia i profilaktykę. Fundacja podejmuje dodatkowe działania, takie jak pomoc osobom niepełnosprawnym, edukacja w zakresie ochrony zdrowia, organizowanie wolontariatu oraz przeciwdziałanie patologiom społecznym.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["zdrowie", "wolontariat"])
    },
    {
        id: 121,
        nazwa: "FUNDACJA 'LUX LEGIS - ŚWIATŁO PRAWA'",
        krs: "759621",
        cel: "Działania fundacji koncentrują się na wspieraniu wszechstronnego rozwoju społeczeństwa polskiego poprzez propagowanie praw człowieka, wartości obywatelskich oraz edukacji prawnej. W ramach swoich inicjatyw fundacja angażuje się w ochronę zdrowia, pomoc uzdolnionej młodzieży, edukację oraz wsparcie dzieci z niepełnosprawnościami. Do jej zadań należy również rozwijanie kultury i sztuki, organizowanie zajęć terapeutycznych i socjoterapeutycznych, a także oferowanie poradnictwa psychologicznego i zawodowego. Fundacja koncentruje się na integracji społecznej, wspieraniu rodzin w trudnych sytuacjach życiowych, promowaniu działań artystycznych oraz zdrowego stylu życia. Organizuje różnorodne formy zajęć, takie jak warsztaty, kursy, imprezy charytatywne oraz programy stypendialne dla uzdolnionych dzieci. Zajmuje się także rehabilitacją osób z dysfunkcjami oraz przeciwdziałaniem wykluczeniu społecznemu i bezrobociu, wspierając rodziny dysfunkcyjne i młodzież w zdobywaniu wykształcenia oraz samodzielności, a także współpracując z lokalnymi klubami sportowymi i mediami.",
        cel_mini: "Fundacja zajmuje się wszechstronnym rozwojem społeczeństwa, promując prawa człowieka, edukację prawną oraz zapewniając wsparcie ofiarom przestępstw, a także organizując różnorodne działania w obszarach zdrowia, edukacji, kultury oraz pomocy społecznej. Dodatkowo, fundacja wspiera dzieci i młodzież uzdolnioną oraz prowadzi inicjatywy przeciwdziałające wykluczeniom społecznym i wspierające rodziny w trudnych sytuacjach życiowych.",
        siedziba_miejscowosc: "OPATÓW",
        tagi: new Set(["edukacja", "prawo", "spoleczenstwo", "dzieci"])
    },
    {
        id: 122,
        nazwa: "FUNDACJA WWF POLSKA",
        krs: "160673",
        cel: "Celem fundacji jest ochrona środowiska naturalnego oraz procesów ekologicznych, ze szczególnym uwzględnieniem fauny i flory, krajobrazu, wód, gleby, powietrza i innych zasobów naturalnych. Fundacja koncentruje się na utrzymaniu podstawowych procesów ekologicznych, systemów podtrzymywania życia oraz zachowaniu różnorodności genetycznej i ekosystemowej. Może również prowadzić działalność gospodarczą zgodnie z obowiązującymi przepisami prawa w obszarze związanym z jej celami.",
        cel_mini: "Celem fundacji jest ochrona środowiska naturalnego, obejmująca ochronę fauny, flory oraz podstawowych procesów ekologicznych. Fundacja ma również prawo prowadzić działalność gospodarczą zgodnie z obowiązującymi przepisami prawa.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["srodowisko", "ekologia"])
    },
    {
        id: 123,
        nazwa: "FUNDACJA WZAJEMNEJ POMOCY 'ALTERNATYWA'",
        krs: "104318",
        cel: "Organizacje zajmujące się pomocą społeczną koncentrują się na wsparciu osób bezdomnych oraz tych w trudnych sytuacjach życiowych, a także na rodzinach dotkniętych problemami alkoholowymi. Dąży się do kształtowania umiejętności życia w trzeźwości wśród osób uzależnionych od alkoholu, narkotyków i leków, promując zasady trzeźwego życia w zgodzie z etyką katolicką. Istotnym celem jest również wzmacnianie samodzielności osób potrzebujących pomocy, aby potrafiły radzić sobie w kryzysowych sytuacjach oraz dbały o swój rozwój duchowy. Dodatkowo, organizacje prowadzą działania edukacyjne związane z uzależnieniami, oferując usługi opiekuńcze osobom starszym, chorym i niepełnosprawnym. Udzielają także wsparcia ubogim rodzinom, osobom mającym trudności życiowe oraz tym, którzy opuszczają zakłady karne, a ich działalność obejmuje także ochronę praw dzieci, młodzieży oraz osób najsłabszych społecznie, w tym bezdomnych i bezrobotnych.",
        cel_mini: "Organizacja oferuje wsparcie dla osób bezdomnych, uzależnionych, ubogich oraz starszych, koncentrując się na ich samodzielności, duchowym rozwoju oraz popularyzacji zasad trzeźwego życia zgodnych z etyką katolicką. Dodatkowo, podejmuje działania mające na celu ochronę praw dzieci, młodzieży i osób znajdujących się w trudnej sytuacji życiowej.",
        siedziba_miejscowosc: "KARKOSZKI",
        tagi: new Set(["bezdomnosc", "prawo", "opieka", "rodzina", "zdrowie"])
    },
    {
        id: 124,
        nazwa: "FUNDACJA Z ŁAWKI REZERWOWYCH",
        krs: "732877",
        cel: "Działalność w zakresie kultury fizycznej i sportu obejmuje różnorodne inicjatywy promujące aktywność fizyczną oraz zdrowy styl życia, natomiast działania na rzecz ochrony zdrowia koncentrują się na profilaktyce oraz wsparciu systemu opieki zdrowotnej. Kultura, w tym różne formy sztuki i wydarzenia kulturalne, ma na celu wzbogacenie życia społecznego, natomiast działalność edukacyjna skupia się na podnoszeniu kwalifikacji oraz dostępie do wiedzy. Działalność dobroczynna natomiast angażuje społeczeństwo w pomoc osobom potrzebującym, wspierając różnorodne inicjatywy społeczne i charytatywne.",
        cel_mini: "Działalność obejmuje szeroki wachlarz aktywności, w tym kulturę fizyczną i sport, ochronę zdrowia, kulturę, edukację oraz działania dobroczynne. Te obszary wspólnie przyczyniają się do rozwoju społecznego i poprawy jakości życia.",
        siedziba_miejscowosc: "OTWOCK MAŁY",
        tagi: new Set(["kultura", "sport", "zdrowie", "edukacja"])
    },
    {
        id: 125,
        nazwa: "FUNDACJA ŻYCIE",
        krs: "453710",
        cel: "Celem działalności przedstawionych inicjatyw jest wszechstronny rozwój społeczeństwa polskiego, koncentrując się na sferach społecznej, informacyjnej, kulturalnej, naukowej i oświatowej, a także na wspieraniu rynku i demokracji. Inicjatywy te obejmują tworzenie nowatorskich rozwiązań w ochronie praw człowieka oraz życia rodzinnego, wspomaganie rozwoju lokalnych społeczności i organizacji pozarządowych, a także ochronę praw człowieka i dziecka. Dodatkowo, promują działania kulturowe i oświatowe wspierające świadome rodzicielstwo, mediację rodzinną oraz badania naukowe dotyczące programów prorodzinnych. Wspierają instytucje małżeństwa, inicjatywy zdrowotne, ochronę środowiska oraz rehabilitację osób niepełnosprawnych. Podkreślają również ważność kształtowania postaw patriotycznych i moralnych, propagują nowoczesne technologie w poradnictwie obywatelskim oraz rozwijają aktywne współdziałanie na rzecz społeczeństwa obywatelskiego. Działania te zmierzają do współpracy z organizacjami o zbieżnych celach statutowych.",
        cel_mini: "Cele organizacji obejmują wspieranie wszechstronnego rozwoju społecznego w Polsce, inicjowanie nowatorskich rozwiązań w ochronie praw człowieka, wspomaganie społeczności lokalnych oraz promowanie zdrowia, kultury i aktywnego współdziałania. Dodatkowo, organizacja angażuje się w działalność na rzecz ochrony środowiska, zdrowia oraz kształtowania postaw patriotycznych i moralnych społeczeństwa.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["spoleczenstwo", "prawo", "edukacja", "kultura", "zdrowie"])
    },
    {
        id: 126,
        nazwa: "FUNDACJA ŻYCIE I RODZINA",
        krs: "598904",
        cel: "Celem działania fundacji jest ochrona życia ludzkiego od poczęcia do naturalnej śmierci, promowanie postaw prorodzinnych oraz ochrona instytucji małżeństwa jako związku kobiety i mężczyzny. Fundacja dąży także do promowania zdrowego stylu życia i przeciwdziałania szkodliwym postawom społecznym.",
        cel_mini: "Celem fundacji jest ochrona życia ludzkiego od poczęcia do naturalnej śmierci, promowanie postaw prorodzinnych oraz ochrona małżeństwa jako związku kobiety i mężczyzny, a także propagowanie zdrowego stylu życia i przeciwdziałanie szkodliwym postawom społecznym.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["rodzina", "zdrowie", "wsparcie", "spoleczenstwo"])
    },
    {
        id: 127,
        nazwa: "FUNDACJA LUMUS",
        krs: "841510",
        cel: "Celem działań jest wsparcie różnych grup społecznych oraz osób zagrożonych wykluczeniem, obejmujące osoby pokrzywdzone przestępstwem, opuszczające jednostki penitencjarne, osoby niepełnosprawne, bezrobotne, bezdomne, cudzoziemców, a także tych, których prawa są naruszane. W zakresie ochrony praw konsumentów podkreśla się znaczenie edukacji dotyczącej praw konsumenckich oraz wsparcia dla osób doświadczających niezgodnych praktyk. W trosce o społeczeństwo promuje się edukację prawną, profilaktykę zdrowia psychicznego i fizycznego oraz przeciwdziałanie patologiom społecznym. Kluczowe jest opracowywanie zasad oraz procedur prawnych w obszarze ochrony obywateli, a także wspieranie innowacyjnych rozwiązań w zakresie ochrony praw człowieka, zwłaszcza mniejszości społecznych. Działania obejmują także wdrażanie nowoczesnych technologii cyfrowych w społeczeństwie obywatelskim oraz promowanie postaw obywatelskich w celu aktywnego współdziałania w rozwoju społeczności lokalnych.",
        cel_mini: "Zapewnienie wsparcia szerokim grupom społecznym, w tym osobom zagrożonym wykluczeniem oraz promowanie ochrony praw konsumentów i społeczeństwa, obejmuje również profilaktykę zdrowia i przeciwdziałanie patologiom społecznym. Inicjowanie nowoczesnych technologii i rozwijanie postaw obywatelskich ma na celu aktywne współdziałanie w społeczeństwie i ochronę praw człowieka.",
        siedziba_miejscowosc: "GDAŃSK",
        tagi: new Set(["prawo", "zdrowie", "spoleczenstwo"])
    },
    {
        id: 128,
        nazwa: "GREEN REV INSTITUTE",
        krs: "521182",
        cel: "Dokument przedstawia szereg kluczowych działań mających na celu wspieranie zasad demokratycznego państwa prawnego oraz przeciwdziałanie dyskryminacji i degradacji środowiska. Obejmuje promowanie równości niezależnie od płci, orientacji seksualnej, pochodzenia czy wieku, a także wskazuje na konieczność jawności i efektywności polityki państwowej. Kładzie nacisk na sprawiedliwą transformację w kontekście zmian klimatycznych oraz eliminację wszelkich form przemocy, zarówno wobec kobiet, jak i zwierząt. Opowiada się za zdrowym stylem życia, dostępem do informacji o produktach, oraz partycypacją społeczną, wyznaczając kierunki dla zrównoważonego rozwoju, w tym wspierania roślinnych alternatyw dla produktów odzwierzęcych. Dokument wskazuje również na potrzebę wprowadzenia zielonych zamówień publicznych oraz monitorowania procesów akcesyjnych do Unii Europejskiej, koncentrując się na szerokim zakresie kwestii dotyczących równości, ochrony środowiska i praw konsumentów.",
        cel_mini: "Nadrzędnymi celami są wspieranie zasady demokratycznego państwa prawa oraz działania na rzecz równości i ochrony środowiska, a także promowanie zrównoważonego rozwoju w różnych aspektach życia społecznego i gospodarczego. Dodatkowo, skupia się na eliminacji przemocy wobec kobiet i zwierząt, a także edukacji i legislacji, która zapewnia dostęp do zdrowych, roślinnych produktów.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "prawo", "demokracja", "srodowisko"])
    },
    {
        id: 129,
        nazwa: "GRUDZIĄDZKIE TOWARZYSTWO POMOCY DZIECKU I RODZINIE 'HOMINI'",
        krs: "211087",
        cel: "Towarzystwo jest niezależną organizacją, która ma na celu niesienie pomocy dzieciom i ich rodzinom w trudnych sytuacjach życiowych oraz wspieranie ich wszechstronnego rozwoju w różnych środowiskach, takich jak rodziny, instytucje edukacyjne czy opiekuńcze. Do głównych celów Towarzystwa należy pomoc osobom w trudnych warunkach, profilaktyka zdrowotna, wsparcie dzieci niepełnosprawnych oraz promowanie turystyki i wypoczynku młodzieży. Organizacja angażuje się także w działania edukacyjne związane z kulturą i sztuką, przeciwdziałanie patologiom społecznym, a także w upowszechnianie kultury fizycznej i sportu. Dodatkowo, Towarzystwo wspiera integrację społeczną członków, organizuje szkolenia i wolontariat oraz oferuje pomoc dzieciom i rodzinom będącym ofiarami przestępstw oraz krzywdzonym.",
        cel_mini: "Towarzystwo jest niezależną organizacją mającą na celu wsparcie dzieci i rodzin w trudnej sytuacji życiowej poprzez różnorodne działania, w tym profilaktykę, pomoc oraz edukację. Główne cele obejmują wczesną interwencję, integrację społeczną, a także pomoc w rozwoju dzieci, w tym tych z niepełnosprawnościami.",
        siedziba_miejscowosc: "GRUDZIĄDZ",
        tagi: new Set(["wsparcie", "wolontariat", "spoleczenstwo", "dzieci"])
    },
    {
        id: 130,
        nazwa: "HELSIŃSKA FUNDACJA PRAW CZŁOWIEKA",
        krs: "35831",
        cel: "Podejmowanie inicjatyw edukacyjnych i badawczych w zakresie praw człowieka ma na celu propagowanie tych praw jako fundamentu funkcjonowania państwa i społeczeństwa. Kluczowe znaczenie ma wzmacnianie w społeczeństwie poszanowania dla godności oraz praw człowieka, a także podejmowanie działań na rzecz ich ochrony. Wszystkie te działania są istotne dla budowania świadomości społecznej i zapewnienia respektowania praw jednostki.",
        cel_mini: "Podejmowanie działań edukacyjnych i badawczych w zakresie praw człowieka, ich propagowanie jako fundamentu funkcjonowania państwa i społeczeństwa, oraz wzmacnianie poszanowania godności i praw człowieka są kluczowe dla ochrony tych wartości. Wspieranie inicjatyw w tej dziedzinie przyczynia się do poprawy jakości życia społecznego i budowania sprawiedliwego społeczeństwa.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "prawo", "spoleczenstwo"])
    },
    {
        id: 131,
        nazwa: "ZWIĄZEK HARCERSTWA POLSKIEGO CHORĄGIEW WARMIŃSKO-MAZURSKA",
        krs: "271499",
        cel: "Celem jest stworzenie warunków dla wszechstronnego rozwoju człowieka, obejmującego aspekty intelektualne, społeczne, duchowe, emocjonalne i fizyczne. Dąży się do kształtowania osobowości odpowiedzialnej, z poszanowaniem prawa do wolności, godności oraz wolności od nałogów. Istotne jest również upowszechnianie wartości takich jak wolność, prawda, sprawiedliwość, demokracja, samorządność, równość, tolerancja i przyjaźń w społeczeństwie. Ważnym elementem jest kreowanie warunków do nawiązywania silnych więzi międzyludzkich, które przekraczają podziały rasowe, narodowościowe i wyznaniowe. Dodatkowo, promuje się wiedzę o przyrodzie oraz przeciwdziała jej niszczeniu przez cywilizację, kształtując potrzebę kontaktu z nieskażoną naturą.",
        cel_mini: "Celem działań jest wspieranie wszechstronnego rozwoju człowieka, kształtowanie odpowiedzialnej osobowości oraz promowanie wartości takich jak wolność i tolerancja. Dodatkowo, istotne są silne więzi międzyludzkie oraz ochrona przyrody przed destrukcyjnym wpływem cywilizacji.",
        siedziba_miejscowosc: "OLSZTYN",
        tagi: new Set(["rozwoj"])
    },
    {
        id: 132,
        nazwa: "INSTYTUT ALLERHANDA",
        krs: "364125",
        cel: "Celem Instytutu jest prowadzenie działalności społecznie użytecznej o charakterze publicznym, obejmującej różnorodne aktywności w zakresie: społecznej, naukowej i edukacyjnej pracy na rzecz rozwoju polskiej myśli prawnej oraz świadomości prawnej społeczeństwa; wspierania rozwoju gospodarczego i przedsiębiorczości; wspierania lokalnych wspólnot; umacniania społeczeństwa obywatelskiego oraz praw obywatelskich, w tym wolności słowa i badań naukowych, zgodnie z najwyższymi standardami etycznymi; udzielania pomocy eksperckiej krajom w transformacji ustrojowej i gospodarczej; działań integracyjnych wśród prawników i ekonomistów; upamiętniania osoby patrona Instytutu, prof. Maurycego Allerhanda oraz tradycji polskiej myśli prawniczej; tworzenia warunków dla rozwoju naukowego i osobowego młodych pokoleń w obszarze nauk prawnych; oraz nawiązywania współpracy naukowej z zagranicznymi jednostkami o podobnym profilu i misji.",
        cel_mini: "Instytut prowadzi działalność na rzecz rozwoju polskiej myśli prawnej, wspierania lokalnych społeczności, przedsiębiorczości oraz społeczeństwa obywatelskiego, a także współpracuje z zagranicznymi jednostkami naukowymi. Dodatkowo, instytut dąży do upamiętnienia swojego patrona, prof. Maurycego Allerhanda, oraz wspiera rozwój młodych pokoleń w dziedzinie nauk prawnych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wspolpraca", "prawo", "gospodarka", "spoleczenstwo"])
    },
    {
        id: 133,
        nazwa: "INSTYTUT GOSPODARKI NIERUCHOMOŚCIAMI",
        krs: "237936",
        cel: "Celem fundacji jest współpraca z instytucjami rządowymi, samorządowymi oraz organizacjami społecznymi i finansowymi w obszarach gospodarki nieruchomościami, ochrony środowiska, efektywności energetycznej i edukacji. Fundacja wspiera rozwój przedsiębiorczości oraz lokalnych inicjatyw, tworzy zasady współpracy między członkami rynku oraz dba o ochronę zasad konkurencji. Prowadzi działania edukacyjne, konsultacje oraz doradztwo, korzystając z współpracy z uczelniami wyższymi oraz ośrodkami badawczymi. Fundacja zajmuje się również prowadzeniem badań, przygotowaniem strategii oraz uczestnictwem w pracach nad aktami prawnymi wpływającymi na wymienione obszary. Promuje projektowanie i realizację projektów pomocowych, a także międzynarodową współpracę poprzez działalność edukacyjną i szkoleniową. Dodatkowo wspiera innowacyjne projekty oraz startupy, pozyskuje fundusze z różnych źródeł, a także propaguje działania na rzecz ekologii i efektywności energetycznej. Fundacja realizuje przedsięwzięcia dotyczące odnawialnych źródeł energii, promuje energooszczędne rozwiązania oraz wspiera instytucje i przedsiębiorców w zakresie efektywności energetycznej.",
        cel_mini: "Celem fundacji jest współpraca z instytucjami w zakresie gospodarki nieruchomościami, ochrony środowiska, efektywności energetycznej i edukacji, a także wspieranie rozwoju przedsiębiorczości oraz lokalnych inicjatyw społecznych. Fundacja angażuje się w działania badawcze, doradcze i edukacyjne, promując innowacyjne projekty oraz pozyskując fundusze na swoje cele.",
        siedziba_miejscowosc: "KATOWICE",
        tagi: new Set(["wspolpraca", "innowacje", "gospodarka", "srodowisko", "edukacja"])
    },
    {
        id: 134,
        nazwa: "INSTYTUT PRAWA I SPOŁECZEŃSTWA",
        krs: "328112",
        cel: "Wsparcie rozwoju społeczeństwa w obszarze wzrostu instytucjonalnego i nowoczesnych regulacji prawnych jest kluczowe dla budowania efektywnych struktur społecznych. Skoncentrowanie się na instytucjach pozwala na wprowadzenie innowacyjnych rozwiązań, które odpowiadają na zmieniające się potrzeby obywateli. Dzięki odpowiedniej polityce prawnej, możliwe jest zharmonizowanie funkcjonowania różnych instytucji oraz wprowadzenie przepisów, które zapewniają przejrzystość i efektywność działania. Działania te mają na celu nie tylko poprawę jakości życia obywateli, ale także wzmocnienie zaufania do instytucji publicznych oraz promowanie aktywnego uczestnictwa społeczeństwa w procesach decyzyjnych.",
        cel_mini: "Wsparcie rozwoju społeczeństwa obejmuje wzrost instytucjonalny oraz wprowadzenie nowoczesnych regulacji prawnych, które mają na celu poprawę funkcjonowania społeczności. Kluczowe jest wzmocnienie instytucji oraz dostosowanie prawa do współczesnych wyzwań.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "fundacja", "spoleczenstwo"])
    },
    {
        id: 135,
        nazwa: "INSTYTUT PROFILAKTYKI ZINTEGROWANEJ",
        krs: "433269",
        cel: "Wsparcie rozwoju oraz zapobieganie problemom dzieci i młodzieży powinno opierać się na zintegrowanym podejściu do profilaktyki, które obejmuje współpracę z rodzicami, szkołami, lokalnymi samorządami, organizacjami pozarządowymi oraz innymi instytucjami. Działania te mają na celu poprawę jakości wychowania, promocję zdrowia oraz efektywną profilaktykę problemów młodzieżowych, co przyczynia się do lepszego zrozumienia potrzeb dzieci i młodzieży oraz zapewnienia im wszechstronnej pomocy.",
        cel_mini: "Wspieranie rozwoju dzieci i młodzieży obejmuje zapobieganie problemom poprzez zintegrowane podejście do profilaktyki oraz współpracę z rodzicami, szkołami, samorządami lokalnymi i organizacjami pozarządowymi. Celem jest promocja zdrowia oraz skuteczne wychowanie.",
        siedziba_miejscowosc: "KOBYŁKA",
        tagi: new Set(["zdrowie", "ngo", "dzieci"])
    },
    {
        id: 136,
        nazwa: "INSTYTUT PSYCHOLOGII ZDROWIA POLSKIEGO TOWARZYSTWA PSYCHOLOGICZNEGO",
        krs: "157159",
        cel: "Rozwój i zastosowanie psychologii w rozwiązywaniu problemów zdrowotnych, wychowawczych, społecznych i zawodowych obejmują działalność szkoleniową, badawczą, terapeutyczną, profilaktyczną oraz rehabilitacyjną, a także publikacyjną. Kluczowe są również innowacje w zakresie technologii oddziaływań psychologicznych oraz diagnozy. Organizowanie i prowadzenie placówek psychologicznych, badań naukowych, szkoleń oraz programów kształcenia i doskonalenia zawodowego, w tym studiów podyplomowych i szkół, ma na celu opracowywanie i wprowadzanie nowych metod terapii oraz diagnozowania, a także świadczenie różnorodnych usług psychologicznych, edukacyjnych, terapeutycznych i organizacyjnych.",
        cel_mini: "Rozwój i zastosowanie psychologii w rozwiązywaniu problemów zdrowotnych, społecznych i zawodowych obejmuje działania szkoleniowe, badawcze, terapeutyczne oraz rehabilitacyjne. Organizacja placówek psychologicznych i prowadzenie szkoleń mają na celu wdrażanie innowacyjnych metod terapii oraz diagnostyki.",
        siedziba_miejscowosc: "WARSZAWA-WŁOCHY",
        tagi: new Set(["edukacja", "psychologia", "rehabilitacja", "zdrowie"])
    },
    {
        id: 137,
        nazwa: "INSTYTUT ROZWOJU SPORTU I EDUKACJI",
        krs: "391653",
        cel: "Celem działań jest wspieranie różnych inicjatyw społecznych oraz partnerstw publiczno-prywatnych i publiczno-społecznych w obszarze edukacji, koncentrując się na kulturze fizycznej i sporcie. Wspierane są projekty edukacyjne, zwłaszcza w dziedzinie kultury fizycznej, a także indywidualne oraz grupowe działania, które promują rozwój edukacji sportowej. Istotnym elementem jest inicjowanie oraz realizowanie innowacyjnych projektów edukacyjnych, diagnostycznych i analitycznych, które mają na celu wprowadzenie nowatorskich metod kształcenia kadr sportowych. Dodatkowo propagowane są nowoczesne metody edukacji, a wszelkie inicjatywy mają na celu rozwój społeczny i aktywne wspieranie działań o charakterze społecznie użytecznym.",
        cel_mini: "Celem działań jest wspieranie i inicjowanie różnorodnych projektów oraz partnerstw w obszarze edukacji, ze szczególnym uwzględnieniem kultury fizycznej i sportu. Promowane są nowatorskie metody kształcenia kadr oraz innowacyjne podejścia do edukacji i społecznych inicjatyw w tym zakresie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "sport", "spoleczenstwo"])
    },
    {
        id: 138,
        nazwa: "FUNDACJA INSTYTUT SPRAW PUBLICZNYCH",
        krs: "138239",
        cel: "W kontekście modernizacji i rozwoju państwa, kluczowe aspekty obejmują rozwój wiedzy oraz umiejętności w istotnych dziedzinach, wspieranie reform organizacyjnych, a także tworzenie mechanizmów sprzyjających skutecznej polityce społecznej. Istotne jest także rozwijanie form i instytucji, które umożliwiają obywatelom aktywny wpływ na zarządzanie środkami publicznymi oraz popularyzacja celów reform politycznych i gospodarczych. Reformy w systemie nauki i szkolnictwa wyższego, rozwój współpracy w środowiskach twórczych, wprowadzenie nowoczesnych rozwiązań prawnych, a także integracja i aktywizacja lokalnych wspólnot przyczyniają się do poprawy bezpieczeństwa publicznego. Długofalowa wizja polskiej polityki zagranicznej oraz dążenie do integracji europejskiej stanowią uzupełnienie tych działań.",
        cel_mini: "Dokument koncentruje się na modernizacji państwa poprzez rozwój wiedzy, reformy strukturalne oraz tworzenie instytucji wspierających efektywną politykę społeczną i wpływ obywateli na gospodarkę. Wskazuje również na konieczność poprawy bezpieczeństwa publicznego oraz długofalowej wizji polityki zagranicznej w kontekście integracji europejskiej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["reformy", "bezpieczenstwo", "nauka"])
    },
    {
        id: 139,
        nazwa: "IWO-DORADZTWO OBYWATELSKIE",
        krs: "559783",
        cel: "Streszczenie przedstawia cele i działania mające na celu wspieranie nowatorskich rozwiązań w obszarze ochrony praw człowieka, dostępności porad prawnych dla osób w trudnych sytuacjach materialnych, oraz propagowanie nowoczesnych technologii w poradnictwie obywatelskim. Akcentuje również znaczenie mediacji rodzinnej i społecznej, rozwoju społeczeństwa obywatelskiego oraz działalności naukowej w różnych dziedzinach, takich jak kultura, sport, ochrona środowiska i zdrowia. Podkreśla wsparcie dla samorządności, grup wykluczonych społecznie, mniejszości narodowych, a także działania charytatywne. Działania na rzecz humanitarnego traktowania zwierząt oraz promowanie wartości europejskich i demokracji, szczególnie w kontekście Europy Wschodniej i Środkowej, są także istotnymi elementami. Wreszcie, programy edukacyjne skierowane do dzieci i młodzieży mają na celu ich aktywizację i rozwój.",
        cel_mini: "Organizacja wspiera nowatorskie rozwiązania w ochronie praw człowieka, promuje nowoczesne technologie w poradnictwie obywatelskim oraz rozwija postawy prospołeczne i działania na rzecz grup wykluczonych. Jej działalność obejmuje również wsparcie dla samorządności, promowanie wartości europejskich oraz aktywizację dzieci i młodzieży.",
        siedziba_miejscowosc: "NOWY SĄCZ",
        tagi: new Set(["charytatywnosc", "prawo", "obywatelstwo", "spoleczenstwo"])
    },
    {
        id: 140,
        nazwa: "IZBA GOSPODARKI ELEKTRONICZNEJ",
        krs: "474028",
        cel: "Działalność na rzecz rozwoju polskiego rynku gospodarki elektronicznej oraz popularyzacja usług społeczeństwa informacyjnego koncentruje się na współpracy izby z zewnętrznymi podmiotami oraz reprezentacji interesów jej członków w kontekście działalności gospodarczej opartej na technologiach informatycznych i sieciach teleinformatycznych. Izba angażuje się w dialog z instytucjami administracji rządowej i samorządowej, Unii Europejskiej oraz organizacjami pozarządowymi w kraju i za granicą. Cele i zadania e-Izby obejmują m.in. reprezentowanie interesów członków, aktywność w procesach legislacyjnych związanych z rynkiem e-gospodarki, wspieranie innowacji technologicznych, prowadzenie działalności informacyjnej i badawczej, oraz rozwijanie przedsiębiorczości w sektorze gospodarki elektronicznej. Izba podejmuje również działania mające na celu kształtowanie zasad etyki w działalności gospodarczej, a także zapewnia wsparcie organizacyjne dla funkcjonowania sądu polubownego przy izbie.",
        cel_mini: "Izba działa na rzecz rozwoju polskiego rynku gospodarki elektronicznej, reprezentując interesy swoich członków w kontaktach z instytucjami rządowymi i organizacjami, oraz angażując się w legislację i wsparcie innowacji w sektorze ICT. Cele obejmują działalność informacyjną, badawczą oraz wsparcie przedsiębiorczości, a także promowanie etyki w biznesie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["informacje", "gospodarka", "spoleczenstwo"])
    },
    {
        id: 141,
        nazwa: "IZBA WYDAWCÓW PRASY",
        krs: "167446",
        cel: "Izba ma na celu reprezentowanie interesów gospodarczych swoich członków, przede wszystkim w obszarze ich działalności wydawniczej, w kontaktach z organami państwowymi i samorządowymi. Dąży do kształtowania i upowszechniania etyki w tej dziedzinie, zajmując się opracowaniem norm rzetelnego postępowania w obrocie gospodarczym. Izba wyraża opinie na temat projektów dotyczących rynku wydawniczego, uczestniczy w tworzeniu aktów prawnych oraz ocenia wdrażanie przepisów dotyczących działalności gospodarczej. Dodatkowo, organizuje pomoc dla swoich członków w rozwiązywaniu problemów ekonomicznych i organizacyjnych związanych z działalnością wydawniczą oraz prowadzi działalność promocyjną, wspierając nawiązywanie kontaktów krajowych i zagranicznych.",
        cel_mini: "Izba ma na celu reprezentowanie interesów gospodarczych swoich członków w działalności wydawniczej oraz kształtowanie etyki w tym obszarze. Zajmuje się także organizowaniem wsparcia dla członków w rozwiązywaniu problemów oraz prowadzeniem działalności promocyjnej i nawiązywaniem kontaktów biznesowych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wydawnictwo", "gospodarka"])
    },
    {
        id: 142,
        nazwa: "KATOLICKIE STOWARZYSZENIE POMOCY OSOBOM POTRZEBUJĄCYM 'AGAPE'",
        krs: "202462",
        cel: "Celem działalności stowarzyszenia jest prowadzenie różnorodnych działań wspierających społeczność, takich jak pomoc społeczna oraz przeciwdziałanie wykluczeniu społecznemu. Stowarzyszenie ma na celu wspieranie demokracji, budowanie społeczeństwa obywatelskiego oraz rozwój lokalnych wspólnot. Dodatkowo angażuje się w ochronę i promocję zdrowia, edukację oraz wychowanie. Inne kluczowe obszary działalności obejmują przeciwdziałanie uzależnieniom, propagowanie zasad zrównoważonego rozwoju, wspieranie kultury fizycznej i sportu, a także działania na rzecz ekologii oraz ochrony dziedzictwa przyrodniczego. Ponadto stowarzyszenie promuje kulturę, sztukę oraz ochronę dóbr kultury i dziedzictwa narodowego.",
        cel_mini: "Celem stowarzyszenia jest prowadzenie działalności na rzecz pomocy społecznej, wspieranie demokracji oraz rozwój lokalnych wspólnot. Dodatkowo, stowarzyszenie angażuje się w zdrowie, edukację, przeciwdziałanie uzależnieniom, ochronę środowiska oraz promowanie kultury i sportu.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["spoleczenstwo", "wykluczenie", "pomoc", "edukacja", "zdrowie", "demokracja", "ekologia"])
    },
    {
        id: 143,
        nazwa: "KOMITET OCHRONY PRAW DZIECKA",
        krs: "99511",
        cel: "Celem działań stowarzyszenia jest ochrona praw i interesów dzieci, zapewnienie wsparcia dzieciom i ich rodzinom w trudnych sytuacjach poprzez budowę systemu wsparcia rodziny, zapobieganie krzywdzeniu oraz wykluczeniu społecznemu dzieci, a także wspieranie inicjatyw na rzecz promocji i ochrony praw człowieka, zwłaszcza w zakresie praw dzieci, profilaktyki ich krzywdzenia oraz promocji odpowiedzialnego rodzicielstwa.",
        cel_mini: "Cele Stowarzyszenia obejmują ochronę praw dziecka, zapewnienie wsparcia dzieciom i rodzinom w trudnych sytuacjach oraz zapobieganie krzywdzeniu i wykluczeniu społecznemu. Dodatkowo, stowarzyszenie wspiera inicjatywy promujące prawa człowieka oraz odpowiedzialne rodzicielstwo.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "spoleczenstwo", "dzieci"])
    },
    {
        id: 144,
        nazwa: "KONFEDERACJA BUDOWNICTWA I NIERUCHOMOŚCI",
        krs: "124107",
        cel: "Federacja dąży do ochrony praw oraz reprezentowania interesów pracodawców i przedsiębiorców z branży budowlanej, zrzeszonych w związkach branżowych i regionalnych. Jej cele obejmują: reprezentację interesów społecznych i gospodarczych w relacjach z związkami zawodowymi, organami państwowej administracji oraz na międzynarodowej arenie; ochronę dóbr niematerialnych członków; promowanie spokoju społecznego w miejscu pracy; wpływ na kształtowanie polityki społecznej i legislacji dotyczącej interesów pracodawców; wspieranie właściwej polityki inwestycyjnej i budowlanej; asystowanie organizacjom w prowadzeniu rokowań zbiorowych pracy; składanie wniosków legislacyjnych oraz opinii dotyczących stosunków pracy i polityki gospodarczej, szczególnie w kontekście inwestycji w przemysł budowlany; organizowanie szkoleń dla pracodawców oraz prowadzenie badań rynkowych i doradztwa ekonomicznego dla swoich członków.",
        cel_mini: "Federacja ma na celu ochronę praw oraz reprezentowanie interesów pracodawców i przedsiębiorców w przemyśle budowlanym, zwłaszcza w relacjach z związkami zawodowymi oraz organami władz. Działa na rzecz tworzenia warunków dla społecznego pokoju, wspiera organizacje w negocjacjach zbiorowych i zajmuje się legislacją oraz badaniami rynkowymi.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 145,
        nazwa: "KONGREGACJA PRZEMYSŁOWO-HANDLOWA",
        krs: "129853",
        cel: "Organizacja skupia się na udzielaniu pomocy i doradztwa podmiotom zrzeszonym, a także na tworzeniu warunków sprzyjających ich rozwojowi. Działa na rzecz reprezentowania interesów gospodarczych tych podmiotów, szczególnie w relacjach z organami państwowymi i samorządami terytorialnymi, koncentrując się na ochronie polskiego rynku i kierując się zasadą zrównoważonego rozwoju.",
        cel_mini: "Celem organizacji jest udzielanie pomocy oraz doradztwa zrzeszonym podmiotom, a także tworzenie warunków sprzyjających ich rozwojowi. Organizacja reprezentuje interesy gospodarcze tych podmiotów wobec organów państwowych i samorządów, skupiając się na ochronie polskiego rynku w duchu zrównoważonego rozwoju.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["doradztwo", "gospodarka", "spoleczenstwo", "pomoc"])
    },
    {
        id: 146,
        nazwa: "KRAJOWA IZBA GOSPODARCZA",
        krs: "121136",
        cel: "Organizacja działa na rzecz reprezentowania interesów swoich członków, w tym przedsiębiorców i pracodawców, wobec organów państwowych oraz krajowych i zagranicznych instytucji. Jej zadania obejmują wspieranie rozwoju przedsiębiorczości, tworzenie sprzyjających warunków do działalności gospodarczej, a także udział w procesach legislacyjnych, gdzie prezentuje opinie dotyczące polityki gospodarczej. Organizacja gromadzi i rozpowszechnia informacje o funkcjonowaniu podmiotów gospodarczych oraz wspiera kształcenie zawodowe i doskonalenie pracowników. Promuje zasady społecznej odpowiedzialności przedsiębiorstw oraz etyki w relacjach gospodarczych, dążąc do godzenia interesów pracodawców, pracowników i dobra publicznego. Chroni interesy swoich członków wobec związków zawodowych i organów państwowych, opiniując projekty ustaw i aktów wykonawczych. Współpracuje z samorządem terytorialnym, uczelniami i instytucjami naukowymi, realizując działania na rzecz innowacyjności i wzrostu konkurencyjności polskiej gospodarki, a także promując klastry i nowe technologie. Ponadto, podejmuje inne zadania zlecone przez organy administracji.",
        cel_mini: "Organizacja reprezentuje interesy swoich członków, przedsiębiorców i pracodawców, współdziałając z organami państwowymi oraz instytucjami krajowymi i zagranicznymi na rzecz rozwoju przedsiębiorczości i edukacji zawodowej. Działa także w obszarze promowania odpowiedzialności społecznej, innowacyjności oraz współpracy z samorządem i instytucjami naukowymi.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wspolpraca", "prawo", "gospodarka", "innowacje"])
    },
    {
        id: 147,
        nazwa: "KRAJOWA IZBA GOSPODARKI NIERUCHOMOŚCIAMI",
        krs: "504998",
        cel: "Izba ma na celu podejmowanie różnorodnych działań na rzecz swoich członków w obszarach organizacyjnym, szkoleniowym, technicznym, gospodarczym, ekonomicznym, ustrojowym i prawnym. Działa, aby stworzyć sprzyjające warunki dla rozwoju przedsiębiorczości, ułatwić prowadzenie działalności gospodarczej oraz chronić podstawowe prawa i wolności przedsiębiorców.",
        cel_mini: "Izba ma na celu podejmowanie działań wspierających swoich członków w obszarach organizacyjnym, szkoleniowym i prawnym, aby stworzyć korzystne warunki dla rozwoju przedsiębiorczości. Jej działania mają na celu ułatwienie prowadzenia działalności gospodarczej oraz ochronę praw przedsiębiorców.",
        siedziba_miejscowosc: "KATOWICE",
        tagi: new Set(["edukacja", "prawo", "gospodarka"])
    },
    {
        id: 148,
        nazwa: "KRAJOWE STOWARZYSZENIE MEDIATORÓW",
        krs: "228283",
        cel: "Celem stowarzyszenia jest promowanie i wspieranie rozwoju struktur oraz działań służących pokojowemu rozwiązywaniu konfliktów, z szczególnym uwzględnieniem mediacji, negocjacji, facylitacji, moderacji, dialogu i komunikacji społecznej, a także umacniania praw człowieka.",
        cel_mini: "Celem stowarzyszenia jest promowanie pokojowego rozwiązywania konfliktów poprzez mediację, negocjacje i dialog, a także wspieranie praw człowieka. Organizacja dąży do rozwijania struktur i działań w zakresie tych obszarów.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["prawo", "komunikacja", "pokoj"])
    },
    {
        id: 149,
        nazwa: "KRAJOWE STOWARZYSZENIE ZAWODOWYCH KURATORÓW SĄDOWYCH",
        krs: "343924",
        cel: "Celem działania zawodowych kuratorów sądowych jest dbałość o wysoki prestiż, etykę oraz merytoryczność ich pracy, a także obrona praw jednostek i grup. Inicjują oni zmiany w systemie kurateli sądowej w Polsce, opierając się na osiągnięciach naukowych i praktycznych. Kuratorzy dążą do umocnienia społecznej roli rodziny i ochrony jej funkcji opiekuńczo-wychowawczej, podejmując jednocześnie starania o humanitarne przekształcenie systemu penitencjarnego. Propagują postawy społeczne sprzyjające reformom polityki penitencjarnej oraz adaptacji sprawców przestępstw do życia w społeczeństwie. Ich działania obejmują podnoszenie świadomości i kultury prawnej społeczeństwa, inspirowanie do wymiany doświadczeń z zagranicą w obszarze profilaktyki społecznej i resocjalizacji, a także tworzenie placówek wspierających dzieci, młodzież oraz dorosłych.",
        cel_mini: "Celem jest podniesienie prestiżu etycznego i merytorycznego kuratorów sądowych, obrona ich praw oraz modernizacja systemu kurateli zgodnie z osiągnięciami nauki. Dąży się również do umocnienia roli rodziny, reformy systemu penitencjarnego oraz tworzenia placówek wsparcia dla dzieci, młodzieży i dorosłych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 150,
        nazwa: "KRAJOWY NIEZALEŻNY SAMORZĄDNY ZWIĄZEK ZAWODOWY 'AD REM'",
        krs: "683684",
        cel: "Celem związku zawodowego jest reprezentowanie oraz obrona praw i interesów pracowników, zgodnie z zapisami w statucie. Do głównych zadań należy kształtowanie sprawiedliwej polityki społecznej, poszerzanie współpracy związkowej oraz wpływanie na ustawodawstwo krajowe. Związek dąży do tworzenia równej i godnej polityki płacowej oraz zarządzania kadrami zgodnie z zasadami kontroli zarządczej. Podejmowane są także działania w celu zwalczania dyskryminacji w zatrudnieniu oraz przeciwdziałania mobbingowi. Istotnym elementem działalności związku jest godzenie interesów pracowników, pracodawców oraz dobra publicznego. Związek prowadzi także działalność edukacyjną, by podnieść wiedzę członków w zakresie praw pracowniczych i umiejętności negocjacyjnych, a także promuje etykę zawodową oraz wzajemną pomoc w relacjach międzyludzkich. Działania związku mają również na celu poprawę społecznego postrzegania wymiaru sprawiedliwości.",
        cel_mini: "Celem związku jest reprezentowanie praw i interesów pracowników, w tym dążenie do sprawiedliwej polityki społecznej oraz ochrona przed dyskryminacją. Związek angażuje się również w działania edukacyjne i budowanie etyki zawodowej, kładąc nacisk na dialog między pracownikami a pracodawcami.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["dyskryminacja", "prawo", "etyka"])
    },
    {
        id: 151,
        nazwa: "LA STRADA - FUNDACJA PRZECIWKO HANDLOWI LUDŹMI I NIEWOLNICTWU",
        krs: "148272",
        cel: "Celem fundacji jest promowanie poszanowania praw człowieka oraz zwalczanie handlu ludźmi, niewolnictwa i pracy przymusowej. Działania fundacji koncentrują się na przeciwdziałaniu eksploatacji prostytucji i przestępstwom naruszającym wolność i zdrowie jednostek.",
        cel_mini: "Celem fundacji jest ochrona praw człowieka poprzez zwalczanie handlu ludźmi, niewolnictwa, pracy przymusowej oraz eksploatacji w zakresie prostytucji i przestępstw przeciwko wolności i zdrowiu jednostek.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "fundacja", "przestepstwa"])
    },
    {
        id: 152,
        nazwa: "LUBELSKIE STOWARZYSZENIE TŁUMACZY",
        krs: "540177",
        cel: "Celem stowarzyszenia jest integracja środowisk tłumaczy, promowanie aktywności zawodowej jego członków oraz pełnienie funkcji organizacji zawodowej dla tłumaczy. Stowarzyszenie reprezentuje tłumaczy na forach regionalnych, krajowych i międzynarodowych, chroniąc ich zawodowe, moralne i materialne prawa. Współpracuje z innymi organizacjami zawodowymi, dąży do tworzenia i promowania najlepszych praktyk w zakresie standardów usług tłumaczeniowych oraz świadczy usługi na rzecz urzędów, organizacji krajowych i międzynarodowych, a także instytucji biznesowych. Dodatkowo stowarzyszenie pełni funkcję opiniotwórczą i konsultacyjną w obszarze tłumaczeń oraz statusu prawnego tłumaczy.",
        cel_mini: "Celem stowarzyszenia jest integracja środowiska tłumaczy oraz promowanie ich zawodowej aktywności, reprezentowanie ich praw na różnych forach oraz współpraca z innymi organizacjami. Organizacja również dąży do tworzenia i wdrażania najlepszych praktyk w zakresie usług tłumaczeniowych oraz świadczenia usług doradczych w tym zakresie.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["prawo", "integracja", "spoleczenstwo", "tlumacze"])
    },
    {
        id: 153,
        nazwa: "LUBUSKI RUCH NA RZECZ KOBIET I RODZINY 'ŻAR'",
        krs: "53154",
        cel: "W regionie lubuskim podejmowane są działania mające na celu wsparcie inicjatyw kobiecych, co ma zwiększyć ich aktywność w życiu społecznym, gospodarczym, politycznym i kulturalnym. Istotnym celem jest także zwiększenie obecności kobiet w organach przedstawicielskich oraz innych instytucjach władzy. Organizowane są działania informacyjne i edukacyjne dotyczące prawodawstwa w obszarze problemów kobiet i rodzin, a także wsparcie rodzin w wypełnianiu ich naturalnych funkcji oraz w sytuacjach kryzysowych. Działania obejmują niesienie pomocy osobom i rodzinom w kryzysie społecznym, zawodowym i rodzinnym, ze szczególnym naciskiem na ofiary przemocy domowej, samotne matki oraz osoby bezrobotne. Wsparcie otrzymują także osoby ubogie i bezdomne, a działania są skierowane na rozwój społeczny, emocjonalny i poznawczy dzieci i młodzieży. Organizacje zobowiązują się do integracji i reintegracji zawodowej osób zagrożonych wykluczeniem społecznym oraz prowadzą edukację antydyskryminacyjną. Promowane jest zatrudnienie osób bez pracy, a także ochrona zdrowia osób niepełnosprawnych oraz wsparcie dla seniorów. Działania koncentrują się również na przeciwdziałaniu uzależnieniom i patologiom społecznym, a także rehabilitacji społecznej osób pozbawionych wolności oraz wsparciu ich rodzin. Dodatkowo, stawiane są wyzwania rozwoju gospodarczego, przedsiębiorczości oraz edukacji i oświaty, w tym integracji lokalnych społeczności i wspieraniu rozwoju wspólnot lokalnych.",
        cel_mini: "Inicjatywy skoncentrowane na wspieraniu aktywności kobiet oraz rodzin w Lubuskiem obejmują działania na rzecz integracji społecznej, przeciwdziałania dyskryminacji, rozwoju przedsiębiorczości oraz ochrony zdrowia. Programy te mają na celu wspieranie osób w kryzysie i promowanie ich aktywności zawodowej oraz społecznej.",
        siedziba_miejscowosc: "ŻARY",
        tagi: new Set(["rodzina", "przemoc", "wsparcie", "spoleczenstwo"])
    },
    {
        id: 154,
        nazwa: "LUBUSKIE STOWARZYSZENIE NA RZECZ KOBIET BABA",
        krs: "60904",
        cel: "Inicjatywy kobiet w regionie lubuskim skupiają się na dostarczaniu wiedzy i umiejętności potrzebnych do prowadzenia kreatywnej działalności społecznej, promowaniu praw człowieka oraz propagowaniu edukacji w zakresie krajowego i unijnego prawodawstwa. Celem jest zwiększenie aktywności kobiet w życiu politycznym, gospodarczym i społecznym, w tym poprzez lobby oraz walkę z bezrobociem i promocję przedsiębiorczości, ze szczególnym naciskiem na równość. Stowarzyszenia wspierają również inicjatywy kobiet z grup mniejszościowych, reprezentując ich interesy oraz chroniąc je. Dodatkowo, inspirowane są działania kulturalne i artystyczne, promowane są postawy prozdrowotne, a także podejmowane są działania przeciwdziałające wszelkim formom przemocy, dyskryminacji oraz wykluczenia społecznego, przy jednoczesnym prowadzeniu usług opiekuńczych.",
        cel_mini: "Inicjatywy kobiece w regionie lubuskim mają na celu dostarczenie wiedzy i umiejętności do efektywnej działalności społecznej, promowanie praw człowieka oraz zwiększanie aktywności kobiet w różnych aspektach życia, przy jednoczesnym wsparciu grup mniejszościowych i przeciwdziałaniu dyskryminacji. Organizacje prowadzą także działalność edukacyjną, propaguja równość, inspirują kulturę oraz oferują usługi opiekuńcze.",
        siedziba_miejscowosc: "ZIELONA GÓRA",
        tagi: new Set(["edukacja", "kobiety", "prawo", "przemoc"])
    },
    {
        id: 155,
        nazwa: "LUDOWY KLUB SPORTOWY 'BUK' RUDY Z SIEDZIBĄ W RUDACH",
        krs: "1005",
        cel: "Celem działalności w Rudach jest propagowanie i organizowanie sportu kwalifikowanego oraz rekreacji wśród mieszkańców, a także kształtowanie zdrowych postaw psychofizycznych wśród dzieci, młodzieży i dorosłych. Organizowane są bezpieczne wydarzenia rekreacyjno-sportowe, które nie tylko stanowią wartościową formę wypoczynku, ale także integrują społeczność lokalną. Dodatkowo, prowadzi się działania na rzecz osób niepełnosprawnych, obejmujące organizację zawodów sportowych, rehabilitacji oraz imprez integracyjnych. Istotnym elementem działań jest także realizacja programów profilaktyki uzależnień.",
        cel_mini: "Celem działalności jest propagowanie sportu kwalifikowanego i rekreacji wśród mieszkańców Rud oraz kształtowanie postaw prozdrowotnych. Organizowane są również wydarzenia rekreacyjno-sportowe, działania na rzecz osób niepełnosprawnych oraz programy profilaktyki uzależnień.",
        siedziba_miejscowosc: "RUDY",
        tagi: new Set(["sport", "niepelnosprawnosc", "zdrowie", "spoleczenstwo"])
    },
    {
        id: 156,
        nazwa: "MAŁOPOLSKIE STOWARZYSZENIE PROBACJA",
        krs: "115574",
        cel: "Główne cele programu obejmują ograniczanie szkód społecznych związanych z bezdomnością osób opuszczających zakłady karne oraz realizację orzeczeń karnych i rodzinnych zgodnie z przepisami prawa w Polsce. Kluczowym aspektem jest pomoc osobom skazanym i ich rodzinom, szczególnie dzieciom, a także wsparcie w adaptacji do życia na wolności. Program ma na celu organizowanie lokalnych społeczności do koordynacji działań postpenitencjarnych oraz przeciwdziałanie wykluczeniu społecznemu grup stygmatyzowanych. Dodatkowo, promuje zdrowie poprzez leczenie, terapię, rehabilitację i profilaktykę uzależnień, a także aktywizuje zawodowo osoby bez pracy, wspierając ich integrację społeczną i oferując pomoc osobom pokrzywdzonym przestępstwem oraz ich rodzinom.",
        cel_mini: "Celem działań jest ograniczenie skutków społecznych bezdomności po odbyciu kary, wspieranie osób skazanych oraz ich rodzin, a także zapobieganie wykluczeniu społecznemu, promowanie zdrowia, zatrudnienia i integracji społecznej. Organizowane są również działania postpenitencjarne oraz pomoc dla ofiar przestępstw.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["karani", "spoleczenstwo", "bezdomnosc", "praca", "zdrowie"])
    },
    {
        id: 157,
        nazwa: "NIEZALEŻNE STOWARZYSZENIE PROKURATORÓW 'AD VOCEM'",
        krs: "309406",
        cel: "Celem stowarzyszenia jest reprezentowanie środowiska prokuratorów i asesorów w relacjach z władzami, urzędami oraz innymi organizacjami publicznymi i prywatnymi. Organizacja angażuje się w tworzenie oraz zmiany przepisów prawa, dążąc do wzmocnienia niezależności prokuratorów i promowania praworządności. Współpracuje również z organizacjami sędziowskimi i przedstawicielami doktryny prawa, co sprzyja wymianie doświadczeń zawodowych. Stowarzyszenie koncentruje się na doskonaleniu zawodowym członków, podnoszeniu ich kwalifikacji oraz kształtowaniu moralno-etycznych postaw prokuratorów i asesorów. Dąży także do zapewnienia jawności i przejrzystości funkcjonowania wymiaru sprawiedliwości.",
        cel_mini: "Stowarzyszenie prokuratorów i asesorów działa na rzecz reprezentacji ich interesów oraz zapewnienia niezależności poprzez współpracę z różnymi organizacjami i uczestnictwo w tworzeniu prawa. Dodatkowo skupia się na doskonaleniu zawodowym członków i dążeniu do jawności w wymiarze sprawiedliwości.",
        siedziba_miejscowosc: "JAWORZNO",
        tagi: new Set(["prawo", "asystenci", "spoleczenstwo"])
    },
    {
        id: 158,
        nazwa: "NIEZALEŻNY SAMORZĄDNY ZWIĄZEK ZAWODOWY FUNKCJONARIUSZY I PRACOWNIKÓW WIĘZIENNICTWA",
        krs: "28029",
        cel: "Związek reprezentuje funkcjonariuszy i pracowników więziennictwa, a także inne osoby wymienione w art. 10, broniąc ich godności oraz praw, w tym zarówno interesów zbiorowych, jak i indywidualnych. Działa poprzez obronę interesów zawodowych, materialnych, socjalnych i kulturalnych, zapewniając przestrzeganie praw wynikających z relacji służbowych i pracy, w tym warunków wynagrodzenia, bezpieczeństwa oraz higieny pracy. Współdziała w godzeniu działalności jednostek organizacyjnych więziennictwa z interesami zatrudnionych oraz wpływa na demokratyzację i solidarność w relacjach międzyludzkich. Związek angażuje się w kształtowanie etyki zawodowej, wspiera działania na rzecz podnoszenia kwalifikacji i adaptacji społeczno-zawodowej, a także występuje z inicjatywami oraz opiniuje akty prawne dotyczące sytuacji społeczno-zawodowej i płacowej członków. Promuje zdrowie psychiczne i fizyczne, podejmuje działania mające na celu kształtowanie pozytywnego wizerunku związku zarówno na forum krajowym, jak i międzynarodowym.",
        cel_mini: "Związek chroni godność, prawa oraz interesy funkcjonariuszy i pracowników więziennictwa, skupiając się na obronie ich interesów zawodowych i socjalnych, przestrzeganiu praw pracy, oraz współdziałaniu na rzecz demokratyzacji i etyki zawodowej. Inicjuje również działania wspierające podnoszenie kwalifikacji oraz promuje zdrowie psychiczne i fizyczne swoich członków.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "etyka", "funkcjonariusze", "zdrowie"])
    },
    {
        id: 159,
        nazwa: "NIEZALEŻNY SAMORZĄDNY ZWIĄZEK ZAWODOWY PRACOWNIKÓW WYMIARU SPRAWIEDLIWOŚCI RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "65958",
        cel: "Celem związku jest reprezentowanie oraz obrona godności, praw i interesów materialnych i moralnych zarówno zbiorowych, jak i indywidualnych pracowników sądów, prokuratur oraz emerytów i rencistów zatrudnionych w instytucjach podległych Ministerstwu Sprawiedliwości, Prokuratorowi Generalnemu i Ministrowi Spraw Wewnętrznych i Administracji w Polsce. Główne zadania związku obejmują podejmowanie działań na rzecz korzystnych warunków pracy i płacy, zapewnienie godnych warunków do podnoszenia kwalifikacji zawodowych, ochrona praw pracowniczych w zakresie wynagrodzenia, warunków socjalno-bytowych oraz bezpieczeństwa i higieny pracy. Dodatkowo, związek działa na rzecz ochrony zawodowych i socjalnych interesów pracowników, wpływa na kształt polityki gospodarczej i społecznej, promuje zasady demokracji, wspiera osoby niepełnosprawne, reprezentuje interesy pracownicze na forum międzynarodowym, a także prowadzi dialog społeczny w celu harmonizacji interesów pracodawców i pracowników oraz współpracuje z organizacjami międzynarodowymi w obronie praw człowieka.",
        cel_mini: "Celem związku jest reprezentowanie i obrona praw, godności oraz interesów pracowników sądów, prokuratur, emerytów i rencistów, a także podejmowanie działań na rzecz poprawy warunków pracy, wynagradzania i ochrony praw pracowniczych. Związek działa również na rzecz osób niepełnosprawnych, promuje zasady demokracji i współpracuje z organizacjami międzynarodowymi, aby wspierać interesy pracowników.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["dialog", "prawo", "wspolpraca", "praca", "niepelnosprawnosc", "demokracja"])
    },
    {
        id: 160,
        nazwa: "NIEZALEŻNY ZWIĄZEK ZAWODOWY PRACOWNIKÓW SĄDÓW OKRĘGU PIOTRKOWSKIEGO",
        krs: "15789",
        cel: "Reprezentowanie pracowników, o których mowa w paragrafie 5 ust. 1 i 2, obejmuje obronę ich godności, praw oraz interesów zarówno zbiorowych, jak i indywidualnych. W szczególności dotyczy to obrony interesów materialnych, socjalnych, zdrowotnych i kulturalnych członków oraz ich rodzin, praw pracowniczych dotyczących wykonywania pracy zawodowej, wynagrodzenia, warunków socjalnych, bytowych oraz bezpieczeństwa i higieny pracy, a także współuczestnictwa w tworzeniu korzystnych warunków pracy, życia i wypoczynku.",
        cel_mini: "Reprezentowanie pracowników obejmuje obronę ich godności, praw i interesów, zarówno zbiorowych, jak i indywidualnych, w zakresie materialnym, socjalnym, zdrowotnym i kulturalnym. Ponadto, dotyczy to również przestrzegania praw pracowniczych w kontekście wynagrodzenia, warunków socjalnych oraz bezpieczeństwa pracy.",
        siedziba_miejscowosc: "PIOTRKÓW TRYBUNALSKI",
        tagi: new Set(["godnosc", "prawo"])
    },
    {
        id: 161,
        nazwa: "NIEZALEŻNY ZWIĄZEK ZAWODOWY PRACOWNIKÓW SĄDÓW REJONOWYCH W ŁODZI",
        krs: "46384",
        cel: "Reprezentowanie i obrona praw oraz interesów pracowników obejmuje kwestie warunków pracy, płacy, zdrowia, socjalno-bytowych oraz bezpieczeństwa i higieny pracy. Ważnym aspektem jest kształtowanie aktywności społecznej, etyki zawodowej oraz ochrona godności ludzi pracy, co sprzyja sprawiedliwym relacjom społeczno-ekonomicznym. Dąży się także do podnoszenia rangi ruchu zawodowego oraz kwalifikacji zawodowych, poprzez współdziałanie z krajowymi i zagranicznymi organizacjami związkowymi. Kluczowym celem jest harmonizacja działania zakładów pracy z interesami pracowników, pogłębianie wiedzy członków związku oraz umacnianie koleżeńskiej solidarności w relacjach wzajemnych.",
        cel_mini: "Reprezentowanie i obrona praw pracowników obejmuje kwestie dotyczące warunków pracy, płacy oraz zdrowia, a także wspieranie etyki zawodowej i godności ludzi pracy. Działania te mają na celu tworzenie sprawiedliwych relacji społeczno-ekonomicznych oraz podnoszenie kwalifikacji zawodowych przy współpracy z organizacjami związkowymi.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["praca", "prawo", "etyka"])
    },
    {
        id: 162,
        nazwa: "OGÓLNOPOLSKI ZWIĄZEK ZAWODOWY KURATORÓW SĄDOWYCH",
        krs: "781635",
        cel: "Związek reprezentuje i broni godności, praw oraz interesów kuratorów sądowych, zarówno zbiorowych, jak i indywidualnych, koncentrując się szczególnie na poprawie ich warunków pracy i bytu.",
        cel_mini: "Związek chroni godność, prawa i interesy kuratorów sądowych, zarówno indywidualne, jak i zbiorowe, koncentrując się na poprawie ich warunków pracy i bytu.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["praca", "prawo"])
    },
    {
        id: 163,
        nazwa: "ZWIĄZEK ZAWODOWY PRACOWNIKÓW WYMIARU SPRAWIEDLIWOŚCI RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "121108",
        cel: "Celem Związku jest reprezentowanie pracowników oraz innych osób, o których mowa w § 7, oraz obrona ich godności, praw i interesów zarówno zbiorowych, jak i indywidualnych. W szczególności Związek dąży do ochrony interesów materialnych, socjalnych, zdrowotnych i kulturowych swoich członków oraz ich rodzin, a także praw pracowniczych dotyczących wykonywanej pracy, wynagrodzenia, warunków socjalnych, bytowych oraz bezpieczeństwa i higieny pracy. Związek angażuje się również w tworzenie korzystnych warunków pracy, życia i wypoczynku.",
        cel_mini: "Celem związku jest reprezentowanie i obrona praw oraz interesów pracowników, w tym ich godności, praw materialnych, społecznych, zdrowotnych i kulturalnych, oraz praw pracowniczych związanych z zatrudnieniem. Związek dąży również do tworzenia korzystnych warunków pracy, życia i wypoczynku.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["praca", "prawo"])
    },
    {
        id: 164,
        nazwa: "OGÓLNOPOLSKIE STOWARZYSZENIE REFERENDARZY SĄDOWYCH",
        krs: "4155",
        cel: "Organizacja dąży do integracji zawodowej referendarzy sądowych w Polsce oraz w Europie, promując badania dotyczące warunków ich pracy i możliwości poprawy. Skupia się także na krzewieniu nauki oraz edukacji, wspierając inicjatywy związane z prawem polskim i europejskim, a także propagując racjonalne tworzenie prawa. Angażuje się w działania na rzecz rozwoju gospodarczego i przedsiębiorczości, a także szerzy i chroni wolności oraz prawa człowieka, wspierając rozwój demokracji. Ponadto, podejmuje działania na rzecz integracji europejskiej oraz rozwijania kontaktów i współpracy między społeczeństwami.",
        cel_mini: "Działania na rzecz integracji zawodowej referendarzy sądowych obejmują propagowanie współpracy z innymi krajami europejskimi oraz prowadzenie badań nad warunkami pracy. Organizacja wspiera również rozwój nauki, edukacji oraz działalność na rzecz ochrony praw człowieka i integracji europejskiej, promując demokratyczne wartości i rozwój przedsiębiorczości.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "gospodarka", "zawod", "edukacja", "demokracja"])
    },
    {
        id: 165,
        nazwa: "OGÓLNOPOLSKIE STOWARZYSZENIE SĘDZIÓW SĄDÓW ADMINISTRACYJNYCH",
        krs: "720565",
        cel: "Celem działalności stowarzyszenia jest umacnianie niezależności sądów oraz sędziów, co umożliwia pełną realizację obywatelskiego prawa do sądu. Działania obejmują także ochronę zasad demokracji, praw człowieka i swobód obywatelskich, a także dbałość o porządek i bezpieczeństwo publiczne. Stowarzyszenie wspiera podnoszenie kultury prawnej poprzez inicjatywy społeczne, wyraża opinie sędziów w ważnych kwestiach, a także doskonali wiedzę prawniczą i kwalifikacje swoich członków. Istotna jest współpraca z krajowymi i międzynarodowymi organizacjami prawniczymi, integracja sędziów oraz upowszechnianie wiedzy o roli sądów. Stowarzyszenie współdziała z władzami w pracach legislacyjnych i naukowymi środowiskami, a także reprezentuje sędziów w sprawach dotyczących ich warunków pracy i wynagrodzenia, dbając o ich godność i odpowiedniość do obowiązków.",
        cel_mini: "Celem stowarzyszenia jest umacnianie niezależności sądów i sędziów oraz ochrona praw obywatelskich, a także podnoszenie kultury prawnej i współpraca z innymi organizacjami prawniczymi. Stowarzyszenie dąży także do integracji środowiska sędziowskiego oraz zapewnienia sędziom godnych warunków pracy i wynagrodzenia.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "demokracja", "wspolpraca"])
    },
    {
        id: 166,
        nazwa: "PARLAMENT STUDENTÓW RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "417350",
        cel: "Celem działania Polskiego Stowarzyszenia Rektorów Publicznych (PSRP) jest reprezentowanie i promowanie edukacyjnych, socjalnych, ekonomicznych oraz kulturalnych potrzeb studentów, a także ochrona ich praw i interesów zarówno w kraju, jak i za granicą. PSRP dąży do kreowania postaw współdziałania w społeczności studenckiej, identyfikowania i eliminowania barier w rozwoju młodych ludzi w sferze naukowej, kulturalnej i sportowej oraz wspierania samorządności studenckiej. Organizacja skupia się na podnoszeniu wiedzy, umiejętności i kompetencji społecznych wśród młodzieży przez działalność informacyjną, naukową oraz kulturalną w obszarach edukacji wyższej, oświaty, wychowania i kultury fizycznej, a także promuje mobilność studencką.",
        cel_mini: "Celem działania PSRP jest reprezentowanie i promowanie potrzeb studentów oraz ochrona ich praw i interesów, zarówno w kraju, jak i za granicą. Organizacja wspiera również rozwój społeczeństwa obywatelskiego, samorządność studencką oraz mobilność studentów poprzez działalność informacyjną i edukacyjną.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["studenci", "edukacja", "kultura", "spoleczenstwo"])
    },
    {
        id: 167,
        nazwa: "PODKARPACKIE CENTRUM MEDIACJI",
        krs: "670468",
        cel: "Promowanie, wspieranie i wdrażanie działań mających na celu pokojowe rozwiązywanie konfliktów oraz rozwijanie efektywnej komunikacji społecznej jest kluczowe w budowaniu zaufania do mediacji, negocjacji i dialogu społecznego. Takie inicjatywy sprzyjają tworzeniu harmonijnych relacji i przyczyniają się do stabilności wśród społeczności, umożliwiając skuteczną współpracę oraz zrozumienie różnych perspektyw.",
        cel_mini: "Działania mające na celu pokojowe rozwiązywanie konfliktów obejmują promowanie mediacji, wspieranie dialogu społecznego oraz budowanie zaufania w negocjacjach. Istotna jest efektywna komunikacja społeczna w celu osiągnięcia trwałego pokoju.",
        siedziba_miejscowosc: "RZESZÓW",
        tagi: new Set(["prawo", "dialog", "pokoj"])
    },
    {
        id: 168,
        nazwa: "PODKARPACKI OŚRODEK ROZWOJU SPOŁECZEŃSTWA OBYWATELSKIEGO",
        krs: "229723",
        cel: "Główne cele działalności obejmują udzielanie poradnictwa obywatelskiego osobom o niskiej świadomości prawnej, niskich dochodach oraz w trudnych sytuacjach życiowych, a także podnoszenie społecznej świadomości obywateli na temat ich praw i możliwości ich dochodzenia. Działania skupiają się na upowszechnianiu i ochronie praw człowieka oraz równym traktowaniu wszystkich obywateli, co ma na celu zapobieganie wykluczeniom społecznym i zwiększanie aktywności życiowej poprzez pomoc materialną. Organizowane są również inicjatywy angażujące obywateli w życie publiczne oraz promujące działania prospołeczne, szczególnie wśród młodzieży, na rzecz rozwoju demokratycznego i sprawiedliwego państwa. Wspierane są różnorodne projekty, w tym pozyskiwanie funduszy na działalność statutową, wolontariat oraz działania charytatywne, a także rozwój wiedzy i kwalifikacji zawodowych członków organizacji. Dodatkowo, istotna jest działalność naukowa i wydawnicza.",
        cel_mini: "Organizacja oferuje porady prawne i wsparcie dla osób z niską świadomością prawną oraz dla tych z trudną sytuacją życiową, jednocześnie promując wiedzę o prawach obywatelskich, wolności i aktywnym uczestnictwie w życiu publicznym. Dodatkowo angażuje młodzież w działania prospołeczne, wspiera wolontariat oraz rozwija kwalifikacje członków, prowadząc też działalność naukową.",
        siedziba_miejscowosc: "RZESZÓW",
        tagi: new Set(["spoleczenstwo", "obywatelstwo", "prawo", "wolontariat", "nauka"])
    },
    {
        id: 169,
        nazwa: "POLSKA AKCJA HUMANITARNA",
        krs: "136833",
        cel: "Celem fundacji jest organizowanie oraz niesienie pomocy humanitarnej, rozwojowej, dobroczynnej i charytatywnej, a także działalność społecznie użyteczna i oświatowa oraz przeciwdziałanie wykluczeniu społecznemu.",
        cel_mini: "Celem fundacji jest organizowanie oraz niesienie pomocy humanitarnej, rozwojowej, dobroczynnej i charytatywnej, a także przeciwdziałanie wykluczeniu społecznemu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "fundacja", "pomoc", "edukacja", "humanitaryzm"])
    },
    {
        id: 170,
        nazwa: "POLSKA FEDERACJA PRACODAWCÓW PRYWATNYCH OCHRONY ZDROWIA",
        krs: "414488",
        cel: "Podstawowym celem federacji jest ochrona praw i reprezentowanie interesów zrzeszonych organizacji pracodawców. Do głównych zadań należy reprezentowanie społecznych i gospodarczych interesów pracodawców na szczeblu ogólnokrajowym, jednoczenie ich w działaniach na rzecz rozwoju gospodarczego kraju i systemu ochrony zdrowia oraz wpływanie na kształtowanie korzystnego ustawodawstwa gospodarczego i socjalnego. Federacja wspiera działania zrzeszonych organizacji w realizacji ich statutowych żądań, prowadzeniu rokowań oraz udzielaniu pomocy w sporach zbiorowych pracy. Współdziała z innymi organizacjami pracodawców i biznesu krajowego i zagranicznego. Podejmuje współpracę ze związkami zawodowymi w celu wspierania harmonijnego rozwoju gospodarki i stosunków pracy oraz inicjuje działania podnoszące poziom wykształcenia i kwalifikacji pracodawców. Federacja wspiera integrację gospodarczą Polski z Unią Europejską, ułatwiając współpracę międzynarodową, oraz działa na rzecz tworzenia instytucji polubownego rozwiązywania sporów majątkowych.",
        cel_mini: "Federacja ma na celu ochronę praw i reprezentowanie interesów zrzeszonych organizacji pracodawców, jednocześnie wspierając ich rozwój gospodarczy i wpływając na kształtowanie ustawodawstwa. Współdziała z innymi organizacjami oraz podejmuje inicjatywy mające na celu podnoszenie poziomu kwalifikacji pracodawców i integrację gospodarczą Polski z Unią Europejską.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["prawo", "pracodawcy", "spoleczenstwo", "gospodarka"])
    },
    {
        id: 171,
        nazwa: "POLSKA FUNDACJA IM. ROBERTA SCHUMANA",
        krs: "23615",
        cel: "Celem Fundacji jest rozwój demokracji i społeczeństwa obywatelskiego w Polsce oraz w innych krajach europejskich, wspieranie integracji europejskiej i promowanie jej wartości. Fundacja prowadzi działalność naukową, oświatową, kulturalną i w zakresie ochrony środowiska, a także organizuje szkolenia i promocję związane z niezależnymi ruchami społecznymi, politycznymi i gospodarczymi. Ponadto, fundacja wspiera rozwój oświaty i kultury oraz dzieli się polskimi doświadczeniami w zakresie reform politycznych, społecznych i gospodarczych z instytucjami oraz organizacjami w państwach przechodzących transformację ustrojową.",
        cel_mini: "Cele fundacji obejmują rozwój demokracji i społeczeństwa obywatelskiego w Polsce oraz Europie, wspieranie integracji europejskiej, a także działalność naukową, oświatową i kulturalną. Ponadto fundacja dąży do dzielenia się polskimi doświadczeniami reform z państwami w okresie transformacji ustrojowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["kultura", "demokracja", "srodowisko", "spoleczenstwo"])
    },
    {
        id: 172,
        nazwa: "POLSKA IZBA HANDLU",
        krs: "99228",
        cel: "Izba została powołana w celu integracji i współdziałania swoich członków na rzecz tworzenia optymalnych warunków rozwoju oraz działania, a także dla zapewnienia równoprawnej współpracy wszystkich podmiotów uczestniczących w obrocie i produkcji na rynku wewnętrznym. Ponadto, Izba ma na celu wypracowywanie konkurencyjnych metod działań rynkowych, doskonalenie zasad etyki oraz norm rzetelnego postępowania w działalności gospodarczej, a także zaspokajanie aspiracji swoich członków oraz budowanie ich prestiżu.",
        cel_mini: "Izba ma na celu integrację i współdziałanie swoich członków w celu tworzenia korzystnych warunków rozwoju, promowania równoprawnej współpracy na rynku oraz wypracowania konkurencyjnych i etycznych metod działania w gospodarce. Dąży również do zaspokajania aspiracji członków i podnoszenia ich prestiżu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["integracja", "spoleczenstwo"])
    },
    {
        id: 173,
        nazwa: "POLSKA RADA BIZNESU - POLISH BUSINESS ROUNDTABLE",
        krs: "75374",
        cel: "Celem stowarzyszenia jest rozwijanie i wspieranie postaw przywódczych, które przyczyniają się do wysokiego poziomu gospodarki Polski, oraz zapewnienie członkom forum do dyskusji i wymiany doświadczeń. Organizacja ma na celu angażowanie w debaty z autorytetami oraz przedstawicielami różnych instytucji, wspieranie najwyższych standardów przywództwa w sferze gospodarczej, a także edukację członków i innych osób w zakresie wzorcowego przywództwa. Stowarzyszenie promuje zaangażowanie obywatelskie przedsiębiorców oraz ideę społecznie odpowiedzialnego biznesu. Działa również na rzecz pozytywnych zmian społeczno-gospodarczych poprzez publiczne debaty, wsparcie inicjatyw rozwoju gospodarczego opartych na dialogu społecznym, a także kulturę fizyczną, ochronę zdrowia i pomoc społeczną. Kluczowe są dla niego współpraca, integracja oraz promowanie etyki w prowadzeniu działalności gospodarczej.",
        cel_mini: "Celem stowarzyszenia jest rozwijanie postaw przywódczych w sektorze gospodarczym, a także zapewnienie forum do dyskusji i wymiany doświadczeń między członkami oraz z przedstawicielami różnych organizacji, promując społecznie zaangażowany biznes i etyczne normy prowadzenia działalności. Dodatkowo stowarzyszenie angażuje się w debatę publiczną oraz wspiera inicjatywy sprzyjające rozwojowi gospodarczemu i społecznemu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dialog", "spoleczenstwo", "gospodarka", "przywodztwo", "edukacja"])
    },
    {
        id: 174,
        nazwa: "POLSKI CZERWONY KRZYŻ",
        krs: "225587",
        cel: "Zgodnie z §8 Statutu Polskiego Czerwonego Krzyża, jego celem jest zapobieganie i łagodzenie cierpień ludzkich w każdej sytuacji, z zachowaniem bezstronności i bez jakiejkolwiek dyskryminacji, w tym ze względu na narodowość, przynależność etniczną, pochodzenie społeczne, rasę, płeć, religię, język czy poglądy polityczne. Ponadto, na mocy §2 rozporządzenia Rady Ministrów z dnia 20 września 2011 roku, utraciło moc wcześniejsze rozporządzenie z 25 października 2004 roku dotyczące zatwierdzenia Statutu Polskiego Czerwonego Krzyża.",
        cel_mini: "Polski Czerwony Krzyż ma na celu zapobieganie i łagodzenie cierpień ludzkich bez dyskryminacji ze względu na różne czynniki, jak narodowość czy religia. Rozporządzenie Rady Ministrów z 20 września 2011 roku unieważniło wcześniejsze rozporządzenie dotyczące statutu Polskiego Czerwonego Krzyża z 25 października 2004 roku.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "pomoc"])
    },
    {
        id: 175,
        nazwa: "POLSKI ZWIĄZEK GŁUCHYCH",
        krs: "97726",
        cel: "Celem działalności jest zrzeszanie, rehabilitacja i aktywizacja osób głuchych oraz osób z innymi uszkodzeniami słuchu i niepełnosprawnościami, w tym cudzoziemców i uchodźców. W ramach tych działań kluczowe jest wspieranie integracji tych grup ze środowiskiem osób słyszących, co obejmuje wspólne rozwiązywanie problemów oraz działania na rzecz wyrównywania szans w obszarach rozwoju, edukacji, zatrudnienia i aktywności społecznej.",
        cel_mini: "Program ma na celu zrzeszanie, rehabilitację i aktywizację osób głuchych oraz z innymi niepełnosprawnościami, w tym cudzoziemców i uchodźców, poprzez integrację ze środowiskiem osób słyszących. Działania skupiają się na wspólnym rozwiązywaniu problemów oraz wyrównywaniu szans rozwojowych, edukacyjnych, zawodowych i społecznych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["integracja", "edukacja", "praca", "rehabilitacja", "rownosc"])
    },
    {
        id: 176,
        nazwa: "POLSKI ZWIĄZEK NIEWIDOMYCH",
        krs: "42049",
        cel: "Celem związku jest zrzeszanie osób niewidomych i słabowidzących oraz podejmowanie działań na rzecz ich społecznej integracji, rehabilitacji, ochrony zdrowia i wyrównywania szans w dostępie do informacji, edukacji, zatrudnienia oraz ochrony praw obywatelskich. Związek ma także na celu wspieranie rodzin tych osób.",
        cel_mini: "Celem związku jest zrzeszanie osób niewidomych i słabowidzących oraz podejmowanie działań na rzecz ich społecznej integracji, rehabilitacji i ochrony zdrowia. Organizacja ma na celu również wyrównywanie szans w dostępie do informacji, edukacji, zatrudnienia i ochronę praw obywatelskich tych osób oraz wsparcie ich rodzin.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "edukacja", "niepelnosprawnosc", "zdrowie", "rehabilitacja", "rownosc"])
    },
    {
        id: 177,
        nazwa: "POLSKIE CENTRUM MEDIACJI",
        krs: "29263",
        cel: "Dokument koncentruje się na zwiększaniu dorobku sprawiedliwości naprawczej i mediacji w Polsce, poprzez inicjowanie, opiniowanie i promowanie idei mediacji zarówno w kraju, jak i na arenie międzynarodowej. W szczególności podkreśla znaczenie innowacji w edukacji związanej z mediacją oraz profilaktyką konfliktów, a także wspieranie rozwoju kompetencji rodziców i opiekunów w wychowaniu dzieci i młodzieży. Działania te mają na celu ochronę praw dzieci, a także rozwój różnorodnych grup społecznych, w tym promocję równouprawnienia, integrację osób z niepełnosprawnościami oraz wspieranie lokalnych wspólnot. Wskazuje również na potrzebę współpracy z firmami i organizacjami, a także ochrony praw mediatorów, w tym członków PCM, co ma na celu upowszechnienie świadomości prawnej społeczeństwa w kontekście mediacji.",
        cel_mini: "Celem organizacji jest rozwój sprawiedliwości naprawczej oraz mediacji w Polsce, poprzez promowanie idei mediacji, wsparcie edukacji i ochronę praw dzieci i młodzieży. Działania obejmują także współpracę z różnymi instytucjami, ochronę praw mediatorów oraz inicjowanie działań na rzecz równości, zdrowia i integracji społecznej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "prawo", "innowacje", "edukacja", "zdrowie", "dzieci"])
    },
    {
        id: 178,
        nazwa: "POLSKIE STOWARZYSZENIE MARKETINGU SMB",
        krs: "222550",
        cel: "Celem Stowarzyszenia jest promowanie oraz wspieranie rozwoju marketingu bezpośredniego i interaktywnego, które stanowią kluczowy element usług marketingowych oraz są ważną formą komunikacji w życiu gospodarczym i społecznym. Umożliwiają one osobisty kontakt konsumenta z marką oraz tworzą forum do budowy trwałych relacji między ludźmi oraz pomiędzy marką a konsumentem. Stowarzyszenie oraz jego członkowie angażują się w rozwój tradycyjnych i nowoczesnych kanałów komunikacji bezpośredniej poprzez promowanie marketingu zintegrowanego i wielokanałowego, z wykorzystaniem nowoczesnych narzędzi informatycznych. Dodatkowo, aktywnie uczestniczą w tworzeniu i promowaniu standardów marketingu bezpośredniego i interaktywnego, a także pomagają w kreowaniu odpowiedzialnego dialogu pomiędzy konsumentami, przedsiębiorstwami oraz różnymi organizacjami, co prowadzi do profesjonalnego i etycznego stosowania marketingu w Polsce i na świecie.",
        cel_mini: "Celem stowarzyszenia jest promowanie i wspieranie rozwoju marketingu bezpośredniego i interaktywnego, kluczowych dla komunikacji w gospodarce oraz budowania relacji między konsumentami a markami. Stowarzyszenie angażuje się w tworzenie standardów marketingowych oraz rozwijanie odpowiedzialnego dialogu między różnymi podmiotami w Polsce i na świecie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["marketing"])
    },
    {
        id: 179,
        nazwa: "POLSKIE STOWARZYSZENIE NA RZECZ OSÓB Z NIEPEŁNOSPRAWNOŚCIĄ INTELEKTUALNĄ",
        krs: "162757",
        cel: "Celem stowarzyszenia jest wyrównywanie szans osób z niepełnosprawnością intelektualną poprzez zapewnienie przestrzegania ich praw człowieka, tworzenie warunków do aktywnego uczestnictwa w życiu społecznym, ochronę zdrowia oraz wsparcie dla ich rodzin.",
        cel_mini: "Celem stowarzyszenia jest wyrównywanie szans osób z niepełnosprawnością intelektualną oraz zapewnienie przestrzegania ich praw, aktywnego uczestnictwa w życiu społecznym, ochrony zdrowia i wsparcia dla ich rodzin.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "stowarzyszenie", "prawo", "niepelnosprawnosc", "zdrowie", "rownosc"])
    },
    {
        id: 180,
        nazwa: "POLSKIE STOWARZYSZENIE PEDAGOGÓW I PSYCHOLOGÓW 'MACIERZ'",
        krs: "23391",
        cel: "Stowarzyszenie koncentruje się na kilku kluczowych obszarach, takich jak oświata i wychowanie dzieci oraz młodzieży, ochrona zdrowia, wsparcie dla rodzin w trudnej sytuacji życiowej oraz zapobieganie patologiom społecznym i wykluczeniu. Promuje pełny rozwój osobisty, integrowanie działań różnych środowisk społecznych w celu zdrowego rozwoju rodziny oraz wspiera lokalne społeczności uwzględniając aspekty ekonomiczne i prawne. Dąży do aktywizacji szczególnie zagrożonych grup, takich jak długotrwale bezrobotni czy młodzież do 25 roku życia. Stowarzyszenie promuje wolontariat, wspiera organizacje pozarządowe oraz działa na rzecz praw dzieci, macierzyństwa i rodzicielstwa, a także kształtuje postawy obywatelskie poprzez edukację i lokalne inicjatywy społeczne.",
        cel_mini: "Organizacja ma na celu wspieranie rozwoju dzieci i młodzieży, promocję zdrowia, przeciwdziałanie wykluczeniu społecznemu oraz pomoc rodzinom w trudnych sytuacjach życiowych. Dodatkowo dąży do integracji społecznej, podnoszenia kwalifikacji, i rozwijania postaw obywatelskich poprzez współpracę z podobnymi instytucjami krajowymi i międzynarodowymi.",
        siedziba_miejscowosc: "CZĘSTOCHOWA",
        tagi: new Set(["wsparcie", "spoleczenstwo", "wolontariat", "edukacja", "zdrowie"])
    },
    {
        id: 181,
        nazwa: "POLSKIE TOWARZYSTWO MIESZKANIOWE",
        krs: "80064",
        cel: "Celem działań jest likwidacja barier utrudniających rozwój budownictwa mieszkaniowego oraz wsparcie inicjatyw centralnych i lokalnych, mających na celu poprawę sytuacji mieszkaniowej obywateli. Istotnym elementem tych działań jest integracja osób i organizacji zainteresowanych dobrem polskiego mieszkalnictwa, a także promowanie racjonalnej polityki czynszowej oraz modernizacji istniejących zasobów mieszkalnych. Dodatkowo, kładzie się nacisk na idee zrównoważonego rozwoju środowiska zamieszkania oraz upowszechnianie najlepszych wzorców budowy i użytkowania domów oraz osiedli.",
        cel_mini: "Celem działań jest likwidacja barier w budownictwie mieszkaniowym oraz wsparcie inicjatyw poprawiających sytuację mieszkańców, przy jednoczesnej integracji ludzi i organizacji dla dobra mieszkalnictwa w Polsce. Dążymy do racjonalnej polityki czynszowej, modernizacji zasobów oraz propagowania zrównoważonego rozwoju środowiska zamieszkania.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["gospodarka", "spoleczenstwo", "rownosc"])
    },
    {
        id: 182,
        nazwa: "POLSKIE TOWARZYSTWO PEDAGOGÓW SPECJALNYCH W LIKWIDACJI",
        krs: "623185",
        cel: "Celem towarzystwa jest rozwijanie pedagogiki specjalnej oraz wspieranie inicjatyw na rzecz osób z niepełnosprawnościami. Organizacja dąży do ochrony praw tych osób i przeciwdziałania wszelkim formom ich dyskryminacji.",
        cel_mini: "Celem towarzystwa jest wspieranie rozwoju pedagogiki specjalnej oraz działań na rzecz osób z niepełnosprawnością, w tym walka o ich prawa i przeciwdziałanie dyskryminacji.",
        siedziba_miejscowosc: "GDAŃSK",
        tagi: new Set(["edukacja", "prawo", "niepelnosprawnosc"])
    },
    {
        id: 183,
        nazwa: "POLSKIE TOWARZYSTWO PRAWA ANTYDYSKRYMINACYJNEGO",
        krs: "279645",
        cel: "Celem działania Towarzystwa jest wspieranie rozwoju nauki prawa antydyskryminacyjnego, upowszechnianie wiedzy w tym zakresie oraz aktywne działania na rzecz zwalczania dyskryminacji. Organizacja koncentruje się szczególnie na kwestiach związanych z płcią, pochodzeniem etnicznym i narodowym, rasą, religią, wyznawanymi poglądami, niepełnosprawnością, orientacją seksualną, stanem cywilnym i majątkowym oraz wiekiem.",
        cel_mini: "Celem Towarzystwa jest wspieranie rozwoju prawa antydyskryminacyjnego oraz upowszechnienie wiedzy w tej dziedzinie, a także aktywne przeciwdziałanie dyskryminacji ze względu na płeć, pochodzenie etniczne, rasę, religię, niepełnosprawność, orientację seksualną, stan cywilny i majątkowy oraz wiek.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "nauka", "niepelnosprawnosc"])
    },
    {
        id: 184,
        nazwa: "POLSKIE TOWARZYSTWO PSYCHOLOGICZNE",
        krs: "38316",
        cel: "Celem towarzystwa jest rozwijanie oraz popularyzacja psychologii jako nauki i zawodu, a także dbałość o to, by ta dyscyplina, zgodnie z wartościami humanistycznymi, służyła ludziom w ich życiu oraz w zachowaniu zdrowia.",
        cel_mini: "Celem towarzystwa jest promowanie psychologii jako nauki i zawodu, z naciskiem na humanistyczne wartości, wspierające ludzi w życiu i dążeniu do zdrowia.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["psychologia", "spoleczenstwo", "nauka", "pomoc", "zdrowie"])
    },
    {
        id: 185,
        nazwa: "POLSKIE TOWARZYSTWO RATOWNIKÓW MEDYCZNYCH",
        krs: "705588",
        cel: "Celem Towarzystwa jest konsolidacja środowiska ratowników medycznych oraz prowadzenie działań naukowych w dziedzinie nauk medycznych, zdrowia, humanistycznych, ekonomicznych, zarządzania i prawa. Towarzystwo opiniuje programy kształcenia w zawodzie ratownika medycznego oraz reprezentuje polskich ratowników na arenie krajowej i międzynarodowej. Wspiera nawiązywanie kontaktów z instytucjami związanymi z medycyną ratunkową, a także promuje dorobek w tej dziedzinie. Działania obejmują również zdrowie publiczne, organizację systemu ratownictwa medycznego, opracowywanie aktów prawnych oraz edukację w zakresie pierwszej pomocy. Towarzystwo wspiera i promuje wydarzenia oraz podmioty działające na rzecz zdrowia, a także angażuje się w udzielanie świadczeń medycznych i ratunkowych.",
        cel_mini: "Cele towarzystwa obejmują konsolidację ratowników medycznych, prowadzenie działalności naukowej oraz opiniowanie programów nauczania w zawodzie ratownika medycznego. Dodatkowo, towarzystwo promuje współpracę z instytucjami medycznymi, wspiera działania edukacyjne oraz aktywnie uczestniczy w organizacji systemu ratownictwa medycznego.",
        siedziba_miejscowosc: "TYCHY",
        tagi: new Set(["edukacja", "zdrowie"])
    },
    {
        id: 186,
        nazwa: "POLSKIE TOWARZYSTWO TŁUMACZY PRZYSIĘGŁYCH I SPECJALISTYCZNYCH 'TEPIS'",
        krs: "77499",
        cel: "Działalność Towarzystwa, zarówno odpłatna, jak i nieodpłatna, koncentruje się na szerzeniu wiedzy o sztuce przekładu oraz pielęgnacji języka polskiego, z uwzględnieniem potrzeb tłumaczy przysięgłych i specjalistycznych. Towarzystwo dba o wysoką rangę zawodu tłumacza przysięgłego, współtworzy zasady etyki zawodowej oraz edukuje na temat roli tłumaczy w zapewnieniu rzetelnego procesu sądowego. Angażuje się także w działania na rzecz integracji europejskiej oraz rozwija współpracę z zagranicznymi tłumaczami. Oprócz tego, wspiera finansowe i prawne interesy swoich członków, organizuje pomoc koleżeńską oraz wydaje opinie na temat jakości tłumaczeń specjalistycznych. Działalność Towarzystwa obejmuje również nawiązywanie relacji z krajowymi i międzynarodowymi instytucjami oraz organizacjami.",
        cel_mini: "Działalność towarzystwa obejmuje szerzenie wiedzy o sztuce przekładu, dbanie o etykę zawodu tłumacza przysięgłego, oraz integrację europejską wśród tłumaczy. Dodatkowo, towarzystwo wspiera swoich członków, wydaje opinie na temat jakości tłumaczeń i rozwija współpracę z różnymi instytucjami.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["etyka", "wspolpraca", "tlumacze", "sztuka"])
    },
    {
        id: 187,
        nazwa: "'POROZUMIENIE ZIELONOGÓRSKIE' FEDERACJA ZWIĄZKÓW PRACODAWCÓW OCHRONY ZDROWIA",
        krs: "204998",
        cel: "Federacja dąży do ochrony praw oraz reprezentowania interesów swoich członków w kontaktach z publicznymi i prywatnymi dysponentami środków na finansowanie usług medycznych. Angażuje się w współpracę z związkami zawodowymi, organami władzy i administracji państwowej, samorządu terytorialnego oraz innymi organizacjami. Ponadto, federacja zaspokaja potrzeby organizacyjne, prawne i gospodarcze pracodawców, a także działa na rzecz rozwoju gospodarczego.",
        cel_mini: "Federacja ma na celu ochronę praw i reprezentację interesów swoich członków w relacjach z instytucjami publicznymi oraz prywatnymi, a także wspieranie pracodawców w ich potrzebach organizacyjnych, prawnych i gospodarczych. Działa także na rzecz rozwoju gospodarczego.",
        siedziba_miejscowosc: "ZIELONA GÓRA",
        tagi: new Set(["samorzad", "prawo", "gospodarka"])
    },
    {
        id: 188,
        nazwa: "PRACODAWCY RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "47928",
        cel: "Ochrona praw pracodawców obejmuje reprezentowanie ich interesów gospodarczych i niegospodarczych w relacjach z organami władzy, administracją publiczną oraz innymi organizacjami zbiorowego interesu, w tym związkami zawodowymi. Wspieranie pracodawców zakłada także pomoc w budowaniu pozytywnych relacji między nimi.",
        cel_mini: "Ochrona praw pracodawców obejmuje reprezentowanie ich interesów wobec organów władzy i administracji publicznej oraz innych organizacji, w tym związków zawodowych. Dodatkowo, wspiera się pracodawców w ich wzajemnych relacjach.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "wsparcie", "gospodarka"])
    },
    {
        id: 189,
        nazwa: "RADOMSKIE STOWARZYSZENIE PRAWNIKÓW",
        krs: "253211",
        cel: "Stowarzyszenie koncentruje się na krzewieniu idei wspólnoty prawniczej oraz wzmacnianiu relacji koleżeńskich i towarzyskich między członkami. Jednym z kluczowych celów jest obrona praw, godności i interesów stowarzyszonych, a także inicjowanie działań mających na celu poprawę ich warunków życia. Dąży do kontynuowania i upowszechniania humanistycznych tradycji polskiej myśli prawniczej oraz wyrażania opinii i zajmowania stanowiska w sprawach legislacyjnych i praworządności. Stowarzyszenie współpracuje z krajowymi i zagranicznymi organizacjami prawniczymi, dążąc do realizacji swoich celów. Istotne jest także kształtowanie wzorowej postawy oraz wysokiego poziomu etyki zawodowej wśród prawników, a także doskonalenie ich wiedzy i kwalifikacji. Dodatkowo, stowarzyszenie angażuje się w rozwijanie świadomości oraz kultury prawnej społeczeństwa, a także w promowanie kultury, kultury fizycznej, turystyki i krajoznawstwa wśród swoich członków.",
        cel_mini: "Celem stowarzyszenia jest wspieranie wspólnoty prawniczej, obrona praw i interesów członków, oraz rozwijanie ich wiedzy i etyki zawodowej. Stowarzyszenie dąży do poprawy warunków bytu swoich członków i prowadzi współpracę z krajowymi i zagranicznymi organizacjami prawniczymi.",
        siedziba_miejscowosc: "RADOM",
        tagi: new Set(["prawo"])
    },
    {
        id: 190,
        nazwa: "REGIONALNA IZBA GOSPODARCZA POMORZA",
        krs: "311830",
        cel: "Organizacja ma na celu przede wszystkim reprezentowanie i ochronę interesów gospodarczych swoich członków, zwłaszcza w relacjach z władzami publicznymi. Dąży do promowania etyki w działalności gospodarczej, doskonaląc normy rzetelnego postępowania. Ponadto, wyraża opinie dotyczące projektów aktów prawnych związanych z funkcjonowaniem gospodarki, angażując się w ich opracowywanie. Organizacja dostarcza również informacji o stanie gospodarki oraz uczestniczy w postępowaniach sądowych, związanych z działalnością członków. Wspiera rozwój polubownych metod rozwiązywania sporów, organizując mediacje i arbitraże. Stawia na budowanie więzi kooperacyjnych między członkami oraz wspiera innowacyjność i konkurencyjność. Dąży do tworzenia korzystnych warunków dla rozwoju życiem gospodarczego oraz broni praw pracodawców w relacjach ze związkami zawodowymi.",
        cel_mini: "Izba gospodarcza ma na celu reprezentowanie i ochronę interesów przedsiębiorców, promowanie etyki w działalności gospodarczej oraz uczestniczenie w przygotowywaniu projektów aktów prawnych. Dodatkowo wspiera innowacyjność, rozwój życia gospodarczego, a także mediację i polubowne rozwiązywanie sporów.",
        siedziba_miejscowosc: "GDAŃSK",
        tagi: new Set(["prawo", "etyka"])
    },
    {
        id: 191,
        nazwa: "SIEĆ OBYWATELSKA WATCHDOG POLSKA",
        krs: "181348",
        cel: "Celem stowarzyszenia jest promowanie i ochrona wolności oraz praw człowieka, a także wspieranie rozwoju demokracji. Działania te koncentrują się na edukacji i monitorowaniu, zwłaszcza przez członków stowarzyszenia oraz współpracujących z nimi. Stowarzyszenie dąży do zwiększenia przejrzystości i uczciwości w życiu publicznym poprzez: zapewnienie swobodnego dostępu do informacji publicznej; efektywne, zgodne z prawem zarządzanie majątkiem publicznym oraz politykami publicznymi, otwarte na kontrolę obywatelską; wsparcie merytoryczne i finansowe dla osób i organizacji w zakresie kontroli obywatelskiej; oraz promowanie etyki w życiu publicznym i działań przeciwdziałających korupcji.",
        cel_mini: "Celem stowarzyszenia jest upowszechnianie oraz ochrona praw człowieka i swobód obywatelskich, wspieranie rozwoju demokracji i edukacji w zakresie przejrzystości życia publicznego. Działania obejmują promowanie dostępu do informacji publicznej, efektywne zarządzanie majątkiem publicznym, wspieranie kontroli obywatelskiej oraz propagowanie etyki i przeciwdziałanie korupcji.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "wolnosc", "demokracja"])
    },
    {
        id: 192,
        nazwa: "STOWARZYSZENIE LEKARZY PRAKTYKÓW",
        krs: "412525",
        cel: "Pierwszym kluczowym zadaniem jest zapewnienie godziwych warunków prawnych i ekonomicznych dla lekarzy oraz lekarzy dentystów. Następnie organizacja koncentruje się na udzielaniu wsparcia tym specjalistom w kwestiach zawodowych, co wspiera ich rozwój osobisty i zawodowy oraz umożliwia pełne wykorzystanie potencjału. Realizacja idei wolnego zawodu opiera się na Kodeksie Etyki Lekarskiej, co ma na celu poprawę standardów opieki medycznej. Dodatkowo, organizacja inicjuje i wspiera przedsięwzięcia zmierzające do efektywności systemu ochrony zdrowia, dążąc do poprawy jakości i warunków jej funkcjonowania. Umożliwia również upowszechnianie osiągnięć naukowych oraz ich wdrażanie w praktyce, a także monitoruje i ocenia realizację programów zdrowotnych, standardów i zaleceń klinicznych. Ostatnim istotnym punktem jest promowanie zdrowia i prewencja, a także podejmowanie działań sprzyjających zdrowiu społecznemu.",
        cel_mini: "Cele organizacji obejmują ustalanie i utrzymanie odpowiednich warunków działania dla lekarzy oraz wspieranie ich rozwoju zawodowego, a także poprawę jakości opieki zdrowotnej i promocję zdrowia w społeczeństwie. Działania koncentrują się na etyce zawodowej, efektywności systemu ochrony zdrowia oraz wdrażaniu osiągnięć naukowych w praktyce medycznej.",
        siedziba_miejscowosc: "KATOWICE",
        tagi: new Set(["lekarze", "prawo", "zawod"])
    },
    {
        id: 193,
        nazwa: "'STOWARZYSZENIE POPRAWY SPRAW ALIMENTACYJNYCH - DLA NASZYCH DZIECI'",
        krs: "542509",
        cel: "Działania na rzecz osób wychowujących dzieci obejmują wiele aspektów, takich jak zniesienie niekorzystnych rozwiązań dotyczących świadczeń z funduszu alimentacyjnego oraz zaostrzenie zasad mobilizujących dłużników alimentacyjnych do regulowania zobowiązań. Istotne jest również reprezentowanie rodziców jako grupy społecznej w debacie publicznej oraz wspieranie polityki prorodzinnej. Organizacje dążą do zmiany ustawodawstwa, które jest niekorzystne dla rodziców i dzieci, promując jednocześnie regulacje korzystne dla tych grup. Ochrona praw kobiet, mężczyzn oraz dzieci, w tym promowanie równouprawnienia, jest kluczowa, podobnie jak integracja środowiska rodziców oraz edukacja w zakresie odpowiedzialności za prawa człowieka. Wspieranie międzynarodowej integracji kobiet i mężczyzn, rozwój kontaktów społecznych, a także działania charytatywne, psychospołeczne i zdrowotne, w tym szerzenie edukacji seksualnej, również wchodzą w zakres działań. Inicjatywy kulturalne i artystyczne, przeciwdziałanie patologiom społecznym, promocja zdrowia, a także aktywizacja zawodowa są równie ważne, z naciskiem na nowoczesną świadomość obywateli i organizację wolontariatu.",
        cel_mini: "Działania skupiają się na wsparciu osób wychowujących dzieci oraz na poprawie przepisów dotyczących świadczeń alimentacyjnych, a także na ochronie praw obywatelskich i promowaniu integracji społecznej. Ponadto, obejmują edukację, aktywizację zawodową, działalność charytatywną oraz promocję zdrowia i kultury.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "spoleczenstwo", "charytatywnosc", "prawo", "edukacja", "praca", "dzieci"])
    },
    {
        id: 194,
        nazwa: "STOWARZYSZENIE RANNYCH I POSZKODOWANYCH W MISJACH POZA GRANICAMI KRAJU",
        krs: "304771",
        cel: "Stowarzyszenie koncentruje swoje działania na poprawie życia rannych i poszkodowanych w misjach poza granicami kraju, a także ich rodzin oraz rodzin żołnierzy, funkcjonariuszy i pracowników cywilnych poległych w tych działaniach. Do jego zadań należy reprezentowanie i ochrona interesów członków wobec władz państwowych oraz samorządowych, a także wsparcie socjalno-bytowe dla rodzin poszkodowanych. Stowarzyszenie dąży do integracji środowiska rannych oraz do wyjaśniania społeczeństwu roli, jaką uczestnicy misji mają w zapewnieniu pokoju i bezpieczeństwa na świecie. Wspiera także popularyzację dotychczasowych osiągnięć Polski na arenie międzynarodowej w kontekście misji pokojowych oraz współpracuje z resortami i innymi organami administracji, a także międzynarodowymi organizacjami o podobnych celach.",
        cel_mini: "Stowarzyszenie działa na rzecz poprawy życia rannych i poszkodowanych w działaniach poza granicami państwa, obejmując pomoc socjalno-bytową, reprezentację oraz integrację środowiska. Ponadto promuje działania mające na celu zapewnienie pokoju, bezpieczeństwa oraz współpracy międzynarodowej.",
        siedziba_miejscowosc: "SZCZECIN",
        tagi: new Set(["prawo", "integracja", "wsparcie", "pomoc"])
    },
    {
        id: 195,
        nazwa: "STOWARZYSZENIE 'SOS DLA RODZINY'",
        krs: "35185",
        cel: "Propagowanie rodziny jako fundamentalnej wartości jest kluczowe dla zapewnienia ciągłości biologicznej i kulturowej społeczeństwa. Wspieranie jej członków w realizacji zadań, pomoc w pokonywaniu trudności oraz ochrona zdrowia są istotnymi elementami tego procesu. Dodatkowo, tworzenie korzystnych warunków oraz promowanie profesjonalnej pomocy dla rodzin przyczynia się do ich stabilności i rozwoju.",
        cel_mini: "Propagowanie rodziny jako kluczowej wartości zapewnia ciągłość biologiczną i kulturową społeczeństwa, wspierając jej członków w realizacji zadań oraz pokonywaniu trudności. Ważne jest również zapewnienie ochrony zdrowia i promowanie profesjonalnej pomocy rodzinie.",
        siedziba_miejscowosc: "SZCZECIN",
        tagi: new Set(["wartosci", "spoleczenstwo", "pomoc", "kultura", "rodzina", "zdrowie"])
    },
    {
        id: 196,
        nazwa: "STOWARZYSZENIE 'NOWA KULTURA' W JAROSŁAWIU",
        krs: "296159",
        cel: "Celem stowarzyszenia jest wspieranie misji Kościoła Rzymskokatolickiego w dzisiejszym świecie poprzez współpracę z jego pasterzami i kształtowanie postaw, które promują godność każdego człowieka oraz jedność. Do głównych działań należą udział w ewangelizacji, prowadzenie profilaktyki antyalkoholowej oraz promowanie abstynencji i zdrowego stylu życia. Stowarzyszenie działa również na rzecz przeciwdziałania narkomanii, wspiera rodziny katolickie w zgodnym z nauką Kościoła kształtowaniu życia małżeńskiego i rodzinnego, a także angażuje się w działalność charytatywną, oferując pomoc osobom ubogim i bezdomnym. Ponadto, podejmuje inicjatywy na rzecz kultury chrześcijańskiej, rozwija postawy patriotyczne, wpływa na politykę społeczną i przygotowuje katolików świeckich do aktywnego uczestnictwa w życiu Kościoła i społeczeństwa.",
        cel_mini: "Celem stowarzyszenia jest służba na rzecz Kościoła rzymskokatolickiego poprzez promowanie godności człowieka oraz jedności społecznej, realizowaną m.in. przez ewangelizację, profilaktykę uzależnień, wsparcie rodzin katolickich oraz działalność charytatywną. Stowarzyszenie angażuje się również w rozwój kultury chrześcijańskiej oraz przygotowanie katolików do aktywnego uczestnictwa w życiu społecznym i politycznym.",
        siedziba_miejscowosc: "JAROSŁAW",
        tagi: new Set(["charytatywnosc", "religia"])
    },
    {
        id: 197,
        nazwa: "STOWARZYSZENIE 'TRAMPOLINA DLA POLSKI' ODDZIAŁ W ZDUŃSKIEJ WOLI",
        krs: "704474",
        cel: "Organizacja działa na rzecz edukacji dzieci, młodzieży i dorosłych poprzez pomoc w zakładaniu placówek edukacyjnych oraz działalność w zakresie kształcenia ustawicznego. Wspiera rodziny w zapewnianiu pełnego rozwoju intelektualnego, artystycznego, fizycznego i duchowego ich dzieci, a także zajmuje się integracją osób niepełnosprawnych. Promuje wolontariat i prowadzi działalność charytatywną, aktywizując społecznie osoby starsze. Działa na rzecz rozwoju kultury, wspierając inicjatywy obywatelskie oraz upowszechniając kulturę fizyczną i sport. Wspiera także wartości etyczne, patriotyczne i rodzinne, prowadzi profilaktykę zdrowotną, a także wspiera rozwój wspólnot lokalnych. Działania obejmują reintegrację osób zagrożonych wykluczeniem oraz rozwój osobisty i zawodowy członków stowarzyszenia, a także promowanie wychowania przez sztukę oraz kultury ludowej wśród młodzieży. Wreszcie, organizacja wspiera rodziny dysfunkcyjne w realizacji ich funkcji.",
        cel_mini: "Organizacja zajmuje się wsparciem edukacji oraz rozwojem osobistym różnych grup wiekowych, a także zakładaniem placówek edukacyjnych i opiekuńczych. Wśród jej działań znajdują się m.in. promocja kultury, integracja osób niepełnosprawnych, aktywizacja społeczna seniorów oraz wspieranie rodzin w trudnych sytuacjach.",
        siedziba_miejscowosc: "ZDUŃSKA WOLA",
        tagi: new Set(["edukacja", "wsparcie", "wolontariat"])
    },
    {
        id: 198,
        nazwa: "STOWARZYSZENIE #WARTOMEDIOWAĆ",
        krs: "860933",
        cel: "Celem stowarzyszenia jest promowanie mediacji oraz polubownych metod rozwiązywania konfliktów, wspieranie dialogu i współpracy w relacjach międzyludzkich oraz podnoszenie świadomości społeczeństwa na temat alternatywnych metod rozwiązywania sporów, a także edukacja prawna, ekonomiczna i społeczna. Organizacja dąży do kształtowania postaw sprzyjających pozasądowemu rozwiązywaniu konfliktów, umacniania poszanowania norm prawnych oraz świadomości obywatelskiej. W ramach swoich działań oferuje pomoc prawną, edukację na różnych poziomach, inicjuje programy rozwoju umiejętności mediacyjnych, a także wspiera różne grupy społeczne, w tym osoby z niepełnosprawnościami, osoby starsze, czy rodziny w trudnej sytuacji życiowej. Stowarzyszenie prowadzi działalność charytatywną, promuje wolontariat, dąży do integracji europejskiej oraz angażuje się w ochronę praw człowieka, wolności obywatelskich i równości płci. Wspiera lokalne społeczności i organizacje pozarządowe oraz przeciwdziała wykluczeniu społecznemu i uzależnieniom.",
        cel_mini: "Celem stowarzyszenia jest promowanie mediacji oraz współpracy w rozwiązywaniu konfliktów, a także podnoszenie świadomości społecznej w zakresie prawnych i alternatywnych metod rozwiązywania sporów. Dodatkowo, stowarzyszenie angażuje się w różnorodne działania na rzecz wsparcia społecznego, integracji oraz ochrony praw obywatelskich.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["prawo", "komunikacja", "spoleczenstwo", "pokoj"])
    },
    {
        id: 199,
        nazwa: "BRACTWO WETERANÓW W POLSCE",
        krs: "857867",
        cel: "Celem bractwa jest wspieranie i integrowanie środowiska weteranów oraz promowanie tradycji oręża polskiego wśród młodzieży szkolnej i akademickiej zarówno w kraju, jak i za granicą.",
        cel_mini: "Celem bractwa jest wspieranie i integrowanie środowiska weteranów oraz promowanie tradycji oręża polskiego wśród młodzieży szkolnej i akademickiej w kraju i za granicą.",
        siedziba_miejscowosc: "FELIKSÓW",
        tagi: new Set(["integracja", "wojsko"])
    },
    {
        id: 200,
        nazwa: "'MEDIATORZY POLSCY'",
        krs: "431452",
        cel: "Celem działań podejmowanych w Polsce w obszarze sprawiedliwości naprawczej i mediacji jest powiększanie dorobku w tym zakresie, a także inicjowanie, opiniowanie oraz wypowiadanie się w sprawach dotyczących regulacji prawnych mediacji. W ramach tych działań propagowana jest idea mediacji w społeczeństwie polskim i na forum międzynarodowym, a także prowadzona jest edukacja w zakresie mediacji, profilaktyki konfliktów oraz przeciwdziałania przemocy i agresji. Istotnym elementem jest rozwijanie postaw i działań związanych z przestrzeganiem praw człowieka, nawiązanie kontaktów z firmami, organizacjami i instytucjami związanymi z mediacją, a także ochrona praw mediatorów, w szczególności członków SMP. Działania te obejmują także wsparcie osób niepełnosprawnych i starszych, działania na rzecz społeczności zagrożonych wykluczeniem społecznym oraz współpracę z organizacjami zajmującymi się profilaktyką uzależnień.",
        cel_mini: "Działania obejmują rozwój sprawiedliwości naprawczej oraz propagowanie mediacji w Polsce i na arenie międzynarodowej, a także edukację w zakresie konfliktów, praw człowieka oraz wsparcie dla osób niepełnosprawnych i starszych. Ponadto, podkreślana jest ochrona praw mediatorów oraz współpraca z organizacjami zajmującymi się profilaktyką uzależnień i wykluczeniem społecznym.",
        siedziba_miejscowosc: "RZESZÓW",
        tagi: new Set(["edukacja", "prawo", "spoleczenstwo", "niepelnosprawnosc"])
    },
    {
        id: 201,
        nazwa: "STOWARZYSZENIE 'ALTER EGO'",
        krs: "138731",
        cel: "Celem podejmowanych działań jest wszechstronna pomoc osobom i grupom społecznym w trudnej sytuacji, w tym osobom doświadczającym bezdomności, ubóstwa, bezrobocia, uzależnień oraz innym potrzebującym wsparcia. Programy obejmują kompensację szkód wywołanych przez zjawiska społeczne, wspieranie aktywności osób z niepełnosprawnościami, ułatwianie reintegracji osób opuszczających zakłady karne, a także działania na rzecz rodzin dysfunkcyjnych. Istotnym elementem tych inicjatyw jest rozwijanie postaw prospołecznych, promowanie dostępu do informacji oraz wspieranie działań dobroczynnych i humanitarnych, co ma na celu kreowanie społeczeństwa obywatelskiego i integrację europejską.",
        cel_mini: "Dokument opisuje działania zmierzające do kompensacji szkód społecznych oraz wsparcia różnych grup marginalizowanych, w tym osób niepełnosprawnych, bezdomnych czy uzależnionych. Podkreśla również znaczenie aktywnego uczestnictwa społeczeństwa w niesieniu pomocy potrzebującym oraz promocję dostępu do informacji i działań dobroczynnych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["bezdomnosc", "prawo", "pomoc", "niepelnosprawnosc", "zdrowie"])
    },
    {
        id: 202,
        nazwa: "STOWARZYSZENIE DLA DOBRA DZIECKA",
        krs: "519357",
        cel: "Cele stowarzyszenia zostały szczegółowo określone w §5 statutu i obejmują szereg punktów od 1) do 34), które definiują jego misję, zakres działań oraz obszary zainteresowań.",
        cel_mini: "Cele stowarzyszenia określają zapisy §5 statutu, w punktach od 1) do 34).",
        siedziba_miejscowosc: "KONIN",
        tagi: new Set(["prawo", "stowarzyszenie"])
    },
    {
        id: 203,
        nazwa: "STOWARZYSZENIE POLSKA MISJA MEDYCZNA",
        krs: "162022",
        cel: "Stowarzyszenie jest organizacją pozarządową, non-profit, która realizuje zadania w sferze pożytku publicznego i wolontariatu, koncentrując się na ratowaniu życia oraz łagodzeniu cierpienia poprzez opiekę zdrowotną, pomoc humanitarną, rozwój oraz edukację. Działa w zakresie ratownictwa i ochrony ludności, udzielając pomocy ofiarom katastrof, klęsk żywiołowych, konfliktów zbrojnych oraz wojen zarówno w kraju, jak i za granicą. Dodatkowo, stowarzyszenie angażuje się w ochronę i promocję zdrowia, prowadząc działalność leczniczą zgodnie z obowiązującymi przepisami prawa.",
        cel_mini: "Stowarzyszenie to organizacja non-profit, która angażuje się w działalność na rzecz pożytku publicznego, skupiając się na ratowaniu życia, opiece zdrowotnej oraz pomocy humanitarnej i edukacji. Działa w sferze ratownictwa i ochrony ludności, oferując wsparcie ofiarom katastrof, klęsk żywiołowych i konfliktów zbrojnych, zarówno w kraju, jak i za granicą.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["organizacja", "wolontariat", "edukacja", "humanitaryzm", "zdrowie"])
    },
    {
        id: 204,
        nazwa: "STOWARZYSZENIE 'PO MOC' DLA KOBIET I DZIECI IM. MARII NIEPOKALANEJ",
        krs: "55205",
        cel: "W zaktualizowanym celu działania stowarzyszenia dodano, że obejmuje ono nie tylko prowadzenie żłobka, ale także oddziału przedszkola oraz działalność na rzecz rodziny. Głównym celem stowarzyszenia jest pomoc kobietom i ich dzieciom, które są zagrożone lub doświadczają przemocy seksualnej, fizycznej i psychicznej, a także pomoc ofiarom handlu kobietami i ich rodzinom. Cele szczegółowe obejmują: zapewnienie całodobowego schronienia dla krzywdzonych kobiet i dzieci, udzielanie wsparcia terapeutycznego, psychologicznego oraz porad prawnych i doradztwa zawodowego, rozwijanie pracy metodą streetwork wśród kobiet w sytuacji handlu i przymusowej prostytucji, zwiększanie świadomości młodych ludzi na temat zagrożeń związanych z handlem ludźmi oraz innymi formami wykorzystywania seksualnego, organizowanie szkoleń i warsztatów dla pracowników pomocy społecznej, prowadzenie świetlic dla dzieci oraz działalność na rzecz rodzin.",
        cel_mini: "Wprowadzono zmiany w regulaminie stowarzyszenia, dodając punkt dotyczący oddziału przedszkola oraz działalności na rzecz rodziny. Głównym celem stowarzyszenia jest pomoc kobietom i dzieciom dotkniętym przemocą oraz ofiarom handlu ludźmi poprzez różnorodne formy wsparcia, w tym całodobowe schronienie, terapię, edukację i działalność prewencyjną.",
        siedziba_miejscowosc: "KATOWICE",
        tagi: new Set(["przestepstwa", "kobiety", "edukacja", "przemoc", "dzieci"])
    },
    {
        id: 205,
        nazwa: "STOWARZYSZENIE PRAWNICY DLA POLSKI",
        krs: "794050",
        cel: "Organizacja podejmuje działania na rzecz ochrony i promocji wartości wyrażonych w konstytucyjnych zasadach prawa, szczególnie w zakresie państwa prawnego, sprawiedliwości społecznej oraz zasady demokratycznego trójpodziału władzy. Wśród jej celów znajduje się także umacnianie niezależności sądów i sędziów, umożliwiające pełną realizację europejskich standardów prawnych, w tym prawa do sądu. Organizacja wyraża opinie środowiska prawniczego, podnosi kwalifikacje swoich członków, rozwija współpracę między prawnikami, dąży do integracji środowiska prawniczego w Polsce, a także dba o przestrzeganie etycznych i prawnych zasad wykonywania zawodów prawniczych, zapewniając obywatelom prawo do sprawiedliwego procesu. Dodatkowo, organizacja upowszechnia wiedzę o roli zawodów prawniczych oraz zwiększa świadomość i kulturę prawną społeczeństwa.",
        cel_mini: "Celem działań jest ochrona zasad państwa prawnego, sprawiedliwości społecznej oraz demokratycznych wartości, a także umacnianie niezależności sądów i sędziów. Dodatkowo, stowarzyszenie ma na celu podnoszenie kwalifikacji prawników, integrację środowiska prawniczego oraz edukację społeczeństwa w zakresie prawa.",
        siedziba_miejscowosc: "TARNOWSKIE GÓRY",
        tagi: new Set(["prawo", "kwalifikacje"])
    },
    {
        id: 206,
        nazwa: "STOWARZYSZENIE 'SURSUM CORDA'",
        krs: "280692",
        cel: "Organizacja zajmuje się gromadzeniem środków na dofinansowanie dożywiania dzieci zarówno w Polsce, jak i za granicą, a także prowadzeniem działalności dobroczynnej na rzecz dzieci potrzebujących pomocy. Jej działania obejmują wszechstronną pomoc osobom zagrożonym marginalizacją społeczną oraz ich rodzinom, zarówno w kraju, jak i za granicą. Działalność koncentruje się również na tworzeniu korzystnych warunków do prawidłowego rozwoju dzieci i młodzieży, a także na zapobieganiu krzywdzie dzieci.",
        cel_mini: "Organizacja gromadzi środki na dofinansowanie dożywiania dzieci oraz prowadzi działalność dobroczynną na rzecz najmłodszych w Polsce i za granicą. Działa na rzecz wszechstronnej pomocy osobom zagrożonym marginalizacją i ich rodzinom, a także wspiera prawidłowy rozwój dzieci i młodzieży oraz zapobiega krzywdzie dzieci.",
        siedziba_miejscowosc: "KOŚCIAN",
        tagi: new Set(["dzieci"])
    },
    {
        id: 207,
        nazwa: "STOWARZYSZENIE 'TRAMPOLINA DLA POLSKI'",
        krs: "453485",
        cel: "Organizacja angażuje się w różnorodne działania mające na celu wsparcie edukacji dzieci, młodzieży oraz dorosłych poprzez zakładanie i pomoc w zakładaniu placówek edukacyjnych i opiekuńczych. Prowadzi działalność w zakresie kształcenia ustawicznego oraz opiekuńczo-wychowawczą, a także wspiera rodziny pragnące oferować swoim dzieciom pełnię rozwoju intelektualnego, artystycznego, fizycznego i duchowego. Angażuje się w integrację osób niepełnosprawnych, organizuje wolontariat i działania charytatywne oraz promuje aktywizację społeczną osób starszych. Działa na rzecz kultury, wspierając rozwój polskiej kultury narodowej i inicjatyw obywatelskich, a także promuje zdrowy styl życia, kulturę fizyczną i sport. Organizacja popularyzuje wartości etyczne, postawy obywatelskie oraz rodzinne, a także prowadzi działalność na rzecz wspierania wspólnot lokalnych oraz reintegracji osób zagrożonych wykluczeniem społecznym. Wspomaga rozwój osobisty i zawodowy swoich członków oraz propaguje ideę wychowania przez sztukę, wspierając młode talenty i kulturowe dziedzictwo regionu Kujaw. Oferuje również pomoc rodzinom dysfunkcyjnym w prawidłowym wypełnianiu ich ról.",
        cel_mini: "Organizacja podejmuje działania na rzecz wsparcia edukacji dzieci, młodzieży i dorosłych, a także zakłada placówki edukacyjne oraz organizuje wolontariat i działania charytatywne. Wspiera rozwój osobisty i zawodowy różnych grup społecznych, promując wartości etyczne, rodzinnym oraz kulturowym, a także integrując osoby niepełnosprawne i zagrożone wykluczeniem społecznym.",
        siedziba_miejscowosc: "WŁOCŁAWEK",
        tagi: new Set(["wsparcie", "spoleczenstwo", "charytatywnosc", "kultura", "wolontariat", "edukacja"])
    },
    {
        id: 208,
        nazwa: "STOWARZYSZENIE WIOSNA",
        krs: "50905",
        cel: "Statut stowarzyszenia określa cele działalności, które koncentrują się na wspieraniu osób w trudnych sytuacjach życiowych oraz promowaniu samodzielności. Działania obejmują tworzenie programów pomocowych, organizację zajęć edukacyjnych i rekreacyjnych, a także działania na rzecz integracji zawodowej i społecznej osób zagrożonych wykluczeniem. Stowarzyszenie angażuje się w działalność charytatywną, pielęgnowanie tradycji narodowych i rozwijanie świadomości obywatelskiej. Istotnym celem jest również promocja zatrudnienia oraz aktywizacja osób bez pracy. Działalność stowarzyszenia wspiera rozwój lokalnych społeczności i integrację europejską, przyczyniając się do rozwoju kultury, ochrony dziedzictwa narodowego oraz wolności i praw człowieka. Dodatkowo, stowarzyszenie wspiera rozwój społeczeństwa obywatelskiego oraz kształtowanie liderów w różnych dziedzinach.",
        cel_mini: "Cele stowarzyszenia obejmują wsparcie osób w radzeniu sobie w codziennym życiu, pomoc rodzinom w trudnej sytuacji, organizację zajęć dla dzieci oraz integrację osób zagrożonych wykluczeniem społecznym. Ponadto, stowarzyszenie działa na rzecz rozwoju lokalnych społeczności, promuje wolności i prawa człowieka oraz wspiera demokrację i przedsiębiorczość.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "praca", "rodzina"])
    },
    {
        id: 209,
        nazwa: "'STOWARZYSZENIE ABSOLWENTÓW I PRZYJACIÓŁ WYDZIAŁU PRAWA KATOLICKIEGO UNIWERSYTETU LUBELSKIEGO'",
        krs: "254803",
        cel: "Celem stowarzyszenia jest integrowanie i promowanie absolwentów Wydziału Prawa KUL, a także wszechstronne wspieranie tego wydziału. Ponadto, stowarzyszenie dąży do realizacji celów edukacyjnych, naukowych, informacyjnych i popularyzacyjnych, koncentrując się na rozwoju i upowszechnianiu nauki prawa oraz kultury prawniczej, zgodnie z zasadą 'Deo et Patriae'. Realizacja tych celów odbywa się poprzez organizowanie oraz prowadzenie różnorodnych szkoleń, wykładów, odczytów, konferencji i kursów.",
        cel_mini: "Celem stowarzyszenia jest integrowanie i promowanie absolwentów Wydziału Prawa KUL, wspieranie tego wydziału oraz prowadzenie działalności edukacyjnej, naukowej i informacyjnej w zakresie nauki prawa i kultury prawniczej. Działania te mają być realizowane poprzez organizację szkoleń, wykładów, odczytów, konferencji i kursów, zgodnie z zasadą 'Deo et Patriae'.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["edukacja", "prawo", "nauka", "spoleczenstwo"])
    },
    {
        id: 210,
        nazwa: "STOWARZYSZENIE ABSOLWENTÓW NAUK POLITYCZNYCH UNIWERSYTETU WARSZAWSKIEGO",
        krs: "740051",
        cel: "Celem stowarzyszenia jest integracja środowiska absolwentów wydziału oraz budowanie więzi solidarności koleżeńskiej i zawodowej wśród jego członków. Organizacja koncentruje się na edukacji i promowaniu nauk politycznych jako atrakcyjnej dyscypliny naukowej oraz kierunku studiów, dbając jednocześnie o dobre imię absolwentów. Stowarzyszenie pielęgnuje tradycje i wartości związane z wydziałem, wspiera rozwój zawodowy członków oraz oferuje wzajemną pomoc w życiu osobistym i zawodowym. Działalność obejmuje również promocję wydziału, współpracę z krajowymi i zagranicznymi ośrodkami politologicznymi oraz z Polskim Towarzystwem Nauk Politycznych i innymi podobnymi stowarzyszeniami. Stowarzyszenie dąży do budowania pozytywnego wizerunku wydziału w środowiskach opiniotwórczych, upowszechniając wiedzę politologiczną i popularyzując kulturę tej dziedziny. Organizowane są różnorodne formy życia koleżeńskiego i towarzyskiego, w tym prowadzenie klubu, działalność wydawnicza oraz spotkania, co sprzyja utrzymywaniu więzi z wydziałem.",
        cel_mini: "Celem stowarzyszenia jest integracja absolwentów wydziału, budowanie więzi zawodowych, edukacja w zakresie nauk politycznych oraz wsparcie dla członków w sytuacjach życiowych i zawodowych. Dodatkowo, stowarzyszenie promuje wydział, współpracuje z instytucjami naukowymi oraz organizuje wydarzenia towarzyskie i koleżeńskie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "integracja", "polityka", "wsparcie"])
    },
    {
        id: 211,
        nazwa: "STOWARZYSZENIE AKADEMIA SPORTU ARTURA SIÓDMIAKA",
        krs: "817280",
        cel: "Działalność stowarzyszenia koncentruje się na zapobieganiu wykluczeniu społecznemu i marginalizacji różnych grup społecznych, a także na prowadzeniu edukacji, szczególnie w zakresie praw człowieka i przeciwdziałania dyskryminacji. Cele stowarzyszenia obejmują budowanie otwartego społeczeństwa obywatelskiego, promowanie tolerancji i wielokulturowości, a także tworzenie ofert edukacyjnych odpowiadających współczesnym potrzebom. Istotnym elementem działań jest aktywizacja i integracja lokalnych środowisk, wspieranie sportu i aktywnego trybu życia oraz przeciwdziałanie uzależnieniom. Organizacja dąży również do podnoszenia świadomości społecznej w zakresie przemocy, uzależnień oraz problemów psychicznych, a także do kształtowania wartości cywilizacyjnych, takich jak wolność jednostki, sprawiedliwość oraz poszanowanie prawa. W ramach swoich działań stowarzyszenie organizuje zajęcia sportowe dla młodzieży oraz wspiera osoby uzależnione w procesie readaptacji społecznej.",
        cel_mini: "Stowarzyszenie skupia się na zapobieganiu wykluczeniu społecznemu oraz edukacji w zakresie praw człowieka i przeciwdziałania dyskryminacji. Jego cele obejmują budowanie społeczeństwa obywatelskiego, promowanie tolerancji, wspieranie aktywności fizycznej oraz przeciwdziałanie uzależnieniom.",
        siedziba_miejscowosc: "KIEŁPINO",
        tagi: new Set(["edukacja", "prawo", "spoleczenstwo"])
    },
    {
        id: 212,
        nazwa: "STOWARZYSZENIE ALPHA POLSKA",
        krs: "219444",
        cel: "Krzewienie chrześcijańskich zasad życia, oparte na programie opracowanym przez Alpha International, polega na promowaniu podstawowych wartości chrześcijańskich, takich jak miłość, przebaczenie, wierność i służba dla innych. Program ten ma na celu wsparcie uczestników w ich duchowym rozwoju, oferując przestrzeń do zadawania pytań, dzielenia się doświadczeniami oraz odkrywania sensu życia zgodnie z naukami Jezusa. Uczestnicy są zachęcani do budowania wspólnoty, która sprzyja wzajemnej inspiracji oraz wzrostowi w wierze, co skutkuje bardziej autentycznym i świadomym życiem chrześcijańskim w codziennym działaniu.",
        cel_mini: "Program Alpha International promuje krzewienie chrześcijańskich zasad życia poprzez organizację kursów i spotkań, które zachęcają do odkrywania podstaw wiary i budowania wspólnoty. Celem jest stworzenie przestrzeni do dyskusji, refleksji i dzielenia się duchowymi doświadczeniami.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["kultura", "religia"])
    },
    {
        id: 213,
        nazwa: "STOWARZYSZENIE AMNESTY INTERNATIONAL",
        krs: "110695",
        cel: "Celem stowarzyszenia jest zapewnienie realizacji postanowień Powszechnej Deklaracji Praw Człowieka, uchwalonej 10 grudnia 1948 roku przez Zgromadzenie Ogólne Organizacji Narodów Zjednoczonych.",
        cel_mini: "Celem stowarzyszenia jest zapewnienie realizacji postanowień Powszechnej Deklaracji Praw Człowieka, uchwalonej przez Zgromadzenie Ogólne ONZ 10 grudnia 1948 roku.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "prawo", "stowarzyszenie", "spoleczenstwo"])
    },
    {
        id: 214,
        nazwa: "STOWARZYSZENIE OCHRONY KONSUMENTÓW AQUILA",
        krs: "296781",
        cel: "Głównym celem stowarzyszenia jest upowszechnianie oraz ochrona praw konsumentów. Wśród celów pobocznych znajduje się rekonstrukcja historyczna, działalność prawnicza, ochrona środowiska oraz działania edukacyjne.",
        cel_mini: "Głównym celem stowarzyszenia jest upowszechnianie i ochrona praw konsumentów, a cele poboczne obejmują rekonstrukcję historyczną, działalność prawniczą, ochronę środowiska oraz edukację.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["stowarzyszenie", "spoleczenstwo", "prawo", "srodowisko", "edukacja"])
    },
    {
        id: 215,
        nazwa: "STOWARZYSZENIE ARCHIWISTÓW INSTYTUCJI WYMIARU SPRAWIEDLIWOŚCI",
        krs: "253132",
        cel: "Celem stowarzyszenia jest inspirowanie, rozwijanie i wspieranie inicjatyw zawodowych oraz społecznych jego członków, co przyczynia się do rozwoju archiwistyki. Organizacja dąży do kształtowania polityki państwa w zakresie archiwów w wymiarze sprawiedliwości oraz upowszechniania nowoczesnej wiedzy na temat archiwów, regulacji prawnych dotyczących dokumentacji archiwalnej, a także doskonalenia kwalifikacji zawodowych archiwistów. Stowarzyszenie inicjuje także działania mające na celu poprawę warunków pracy i wyposażenia archiwów sądów, prokuratur oraz służb więziennych, a także zapewnia stałą współpracę z odpowiednimi służbami Ministerstwa Sprawiedliwości odpowiedzialnymi za archiwistykę.",
        cel_mini: "Stowarzyszenie ma na celu inspirowanie i wspieranie inicjatyw zawodowych oraz społecznych w archiwistyce, a także kształtowanie polityki państwa wobec archiwów. Dąży do upowszechniania nowoczesnej wiedzy, doskonalenia kwalifikacji archiwistów i poprawy warunków pracy w archiwach oraz stałej współpracy z Ministerstwem Sprawiedliwości.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["archiwistyka", "zawod"])
    },
    {
        id: 216,
        nazwa: "STOWARZYSZENIE ARTYSTÓW WYKONAWCÓW SAWP",
        krs: "83928",
        cel: "Celem i zadaniami SAWP są ochrona oraz zbiorowe zarządzanie prawami do artystycznych wykonań, zgodnie z zezwoleniem ministra właściwego do spraw kultury i ochrony dziedzictwa narodowego. Organizacja reprezentuje interesy artystów wykonawców i podejmuje działania wspierające rozwój życia muzycznego w Polsce poprzez promowanie wartości kultury i sztuki, w szczególności twórczości etnicznej. Celem jest również promocja polskiej kultury, dbanie o interesy artystyczne, zawodowe i socjalne członków SAWP oraz ich reprezentacja wobec władz państwowych i organizacji społecznych. SAWP propaguje poszanowanie prawa autorskiego i praw pokrewnych, a także współdziała z organami administracji państwowej i samorządowej w celu podniesienia standardów ochrony praw własności intelektualnej, szczególnie w zakresie artystycznych wykonań. Dodatkowo, podejmuje inicjatywy mające na celu ochronę interesów artystów wobec podmiotów korzystających z ich wykonań, a także reprezentuje ich w sprawach dotyczących ochrony praw do artystycznych wykonań.",
        cel_mini: "Celem SAWP jest ochrona i zbiorowe zarządzanie prawami artystów wykonawców oraz reprezentowanie ich interesów, a także wspieranie rozwoju życia muzycznego i promowanie polskiej kultury. Organizacja podejmuje działania na rzecz ochrony praw własności intelektualnej oraz inicjatywy w celu obrony interesów artystów wobec podmiotów korzystających z ich twórczości.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 217,
        nazwa: "STOWARZYSZENIE ASESORÓW I KOMORNIKÓW SĄDOWYCH RES IUDICATA",
        krs: "653274",
        cel: "Stowarzyszenie komorników i asesorów komorniczych koncentruje się na podtrzymywaniu autorytetu zawodu, reprezentacji interesów środowiska oraz przestrzeganiu zasad etyki zawodowej. Dąży do pełnej realizacji zasad postępowania egzekucyjnego oraz promuje skuteczną egzekucję na rzecz wierzycieli, dbając przy tym o poszanowanie praw dłużników. Organizacja współpracuje z krajowymi i międzynarodowymi organizacjami prawniczymi, w tym stowarzyszeniami komorników, a także uczestniczy w pracach legislacyjnych z instytucjami państwowymi. Podkreśla istotną rolę komorników w stabilizacji obrotu gospodarczego oraz edukuje opinię publiczną na temat mechanizmów egzekucji, jej ograniczeń i konsekwencji zarówno dla wierzycieli, jak i dłużników, w tym skutków niewłaściwej egzekucji alimentów oraz nieuczciwych metod windykacji.",
        cel_mini: "Stowarzyszenie komorników i asesorów komorniczych koncentruje się na ochronie ich autorytetu, realizacji zasad etyki zawodowej oraz skutecznej egzekucji, przy poszanowaniu praw dłużników. Działania obejmują współpracę z organizacjami prawniczymi, legislacyjne współdziałanie oraz uświadamianie społeczeństwa o roli komorników i skutkach nieskutecznej egzekucji.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["prawo", "etyka"])
    },
    {
        id: 218,
        nazwa: "STOWARZYSZENIE AUTORÓW I WYDAWCÓW COPYRIGHT POLSKA",
        krs: "139675",
        cel: "Zbiorowe zarządzanie prawami autorskimi, regulowane ustawą z dnia 15 czerwca 2018 r. oraz ustawą z dnia 4 lutego 1994 r., obejmuje działania mające na celu ochronę i realizację praw autorskich dla zbiorowej korzyści członków stowarzyszenia oraz podmiotów, które powierzyły swoje prawa. Główne kompetencje stowarzyszenia obejmują: obejmowanie praw w zbiorowy zarząd, zawieranie umów dotyczących korzystania z utworów, pobór i podział przychodów z praw autorskich, monitorowanie wykorzystania utworów, dochodzenie ochrony praw autorskich oraz wykonywanie innych obowiązków związanych z zarządzaniem prawami, takie jak pobór wynagrodzeń za korzystanie z utworów w bibliotekach i uczelniach. Dodatkowo, stowarzyszenie ma za zadanie reprezentowanie i wspieranie interesów oraz praw swoich członków, w szczególności w zakresie ochrony majątkowych interesów autorów i wydawców.",
        cel_mini: "Zbiorowe zarządzanie prawami autorskimi polega na reprezentowaniu i ochronie praw członków stowarzyszenia poprzez działania takie jak pobór i podział wynagrodzeń, monitorowanie korzystania z utworów oraz dochodzenie ochrony praw. Celem jest wsparcie interesów autorów i wydawców, w tym ochrona ich majątkowych interesów.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "gospodarka"])
    },
    {
        id: 219,
        nazwa: "STOWARZYSZENIE AUTORÓW 'ZAIKS'",
        krs: "37327",
        cel: "Zbiorowe zarządzanie autorskimi prawami majątkowymi obejmuje ochronę praw autorskich oraz reprezentowanie interesów twórców. Wspiera rozwijanie i rozpowszechnianie twórczości oraz kultury polskiej, wzmacniając jej pozycję w kontekście kultury europejskiej i światowej. Działania te koncentrują się na doskonaleniu prawa autorskiego oraz prowadzeniu działalności socjalnej na rzecz twórców. Organizowane są również inicjatywy kulturalne i edukacyjne, które promują etykę oraz solidarność zawodową w środowisku twórczym, a także wspierają integrację artystów i dialog międzypokoleniowy.",
        cel_mini: "Celem działań jest zbiorowe zarządzanie prawami autorskimi, ochrona interesów twórców oraz rozwijanie polskiej kultury w kontekście międzynarodowym. Dodatkowo, skupia się na doskonaleniu prawa autorskiego, działalności socjalnej, kulturalnej i edukacyjnej oraz integrowaniu środowiska twórczego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "etyka", "sztuka", "edukacja", "kultura"])
    },
    {
        id: 220,
        nazwa: "STOWARZYSZENIE BIBLIOTEKARZY POLSKICH",
        krs: "81477",
        cel: "Działania na rzecz rozwoju bibliotekarstwa koncentrują się na umacnianiu pozytywnego wizerunku zawodu oraz integracji środowiska zawodowego. Kluczowe obszary działań obejmują kształtowanie polityki i praktyki bibliotecznej w Polsce, promowanie inicjatyw sprzyjających rozwojowi bibliotek i bibliotekoznawstwa, zapewnianie bibliotekarzom dostępu do różnych form kształcenia i doskonalenia zawodowego oraz budowanie prestiżu i społecznego szacunku dla zawodu bibliotekarza.",
        cel_mini: "Działania na rzecz rozwoju bibliotekarstwa koncentrują się na kształtowaniu polityki bibliotecznej w Polsce, popularyzacji praktyk wspierających rozwój bibliotek oraz zapewnieniu edukacji i integracji środowiska zawodowego, co przyczynia się do budowania prestiżu zawodu bibliotekarza.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "biblioteki", "integracja"])
    },
    {
        id: 221,
        nazwa: "BRACTWO WIĘZIENNE SAMARYTANIA",
        krs: "639032",
        cel: "Celem podejmowanych działań jest szerokie oddziaływanie na różne aspekty życia społecznego, takie jak poznanie przesłania Ewangelii przez więźniów oraz ich rodziny, co może przyczynić się do ich rehabilitacji. Istotnym zamiarem jest także zmniejszenie liczby osadzonych w zakładach karnych oraz zmniejszenie ilości rodzin dysfunkcyjnych, co powinno sprzyjać readaptacji społecznej. Programy te mogą przyczynić się do redukcji agresji i przemocy wśród młodzieży, a także zwiększenia bezpieczeństwa obywateli. Ważnym elementem jest stworzenie modelu wsparcia dla osób zagrożonych wykluczeniem społecznym, co w dłuższej perspektywie mogłoby poprawić jakość życia w społeczności.",
        cel_mini: "Ewangelia ma na celu poznanie przez więźniów i ich rodziny, co może przyczynić się do zmniejszenia liczby osadzonych oraz rodzin dysfunkcyjnych, a także do readaptacji społecznej. Dodatkowo, inicjatywy te mają na celu redukcję agresji wśród młodzieży, zwiększenie bezpieczeństwa obywateli oraz stworzenie modelu wsparcia dla osób zagrożonych wykluczeniem społecznym.",
        siedziba_miejscowosc: "BYDGOSZCZ",
        tagi: new Set(["religia", "spoleczenstwo"])
    },
    {
        id: 222,
        nazwa: "STOWARZYSZENIE CENTRUM WOLONTARIATU",
        krs: "150225",
        cel: "Cele działalności stowarzyszenia obejmują zwiększanie aktywności społecznej obywateli i promowanie wolontariatu, a także edukację w zakresie pracy wolontaryjnej. Dąży ono do kształtowania postawy miłości bliźniego, inspirowanej wartościami ewangelicznymi. Stowarzyszenie wspiera organizacje pozarządowe oraz instytucje publiczne, oferując pomoc świadczoną przez wolontariuszy, a także angażuje się w pomoc społeczną dla rodzin i osób w trudnej sytuacji życiowej. Angażuje się w działalność charytatywną, wspiera mniejszości narodowe, migrantów i uchodźców oraz promuje zdrowie i aktywizację osób z niepełnosprawnościami. Dodatkowo, stowarzyszenie działa na rzecz zatrudnienia i równouprawnienia płci, wspiera rozwój wspólnot lokalnych, a także angażuje się w edukację, kulturę, sport oraz ekologię. Działalność obejmuje również promocję praw człowieka, pomoc ofiarom katastrof oraz działania na rzecz integracji europejskiej. Na koniec, stowarzyszenie promuje wolontariat oraz wspiera organizacje pozarządowe technicznie, szkoleniowo i finansowo, realizując pozostałe cele zgodnie z statutem.",
        cel_mini: "Cele stowarzyszenia obejmują zwiększanie aktywności społecznej obywateli poprzez wolontariat, wsparcie dla instytucji oraz pomoc osobom w trudnej sytuacji życiowej. Dodatkowo, stowarzyszenie działa na rzecz ochrony zdrowia, równości społecznych, ekologii oraz promuje rozwój lokalnych wspólnot i kultury.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "wolontariat", "pomoc", "edukacja", "zdrowie"])
    },
    {
        id: 223,
        nazwa: "STOWARZYSZENIE DORADCÓW PRAWNYCH",
        krs: "262726",
        cel: "W działalności stowarzyszenia dąży się do kompleksowego uregulowania statusu prawnego zawodu doradcy prawnego oraz opiniowania aktów prawnych związanych z tym zawodem. Promuje się działalność zawodową doradców prawnych, integrując środowisko oraz popularyzując rolę doradczej i konsultacyjnej. Członkom stowarzyszenia udzielana jest pomoc w ramach działalności statutowej, organizowane są szkolenia oraz propagowana idea społeczeństwa obywatelskiego, zasady praworządności i sprawiedliwości społecznej. Działania obejmują również zapewnienie powszechnego dostępu do pomocy prawnej, ochronę praw osób wykonujących zawód doradcy prawnego oraz prawa i wolności człowieka, szczególnie w kontekście sprawiedliwości. Wsparcie kierowane jest do ofiar przemocy, w tym nieletnich oraz rodzin, chociaż także do oskarżonych w postępowaniach sądowych. Ponadto, stowarzyszenie zajmuje się ochroną praw osób niepełnosprawnych, rodziców oraz kobiet w ciąży, obroną praw konsumentów, pracowników i ubezpieczonych, a także interesów przedsiębiorców. W kontekście bezpieczeństwa energetycznego wspomaga procesy legislacyjne w zakresie odnawialnych źródeł energii oraz ochrania prawa interesariuszy w obszarze prawa gospodarczego i handlowego.",
        cel_mini: "Organizacja dąży do uregulowania statusu zawodu doradcy prawnego oraz promuje działalność zawodową, integrując środowisko i udzielając wsparcia członkom stowarzyszenia. Dodatkowo chroni prawa osób wykonujących ten zawód oraz różnorodne grupy społeczne, wspierając lokalną społeczność w dostępie do pomocy prawnej i promując zasady sprawiedliwości.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "integracja", "spoleczenstwo"])
    },
    {
        id: 224,
        nazwa: "STOWARZYSZENIE EBIB",
        krs: "367990",
        cel: "Celem stowarzyszenia jest prowadzenie działalności wydawniczej i dydaktycznej, wspieranie rozwoju wiedzy ogólnej oraz kwalifikacji zawodowych bibliotekarzy i specjalistów informacji naukowej, organizowanie kursów i szkoleń, a także aktywizacja środowiska bibliotekarskiego. Stowarzyszenie promuje czytelnictwo oraz działania bibliotek polskich zarówno w kraju, jak i za granicą. Wspiera inicjatywy społeczne na rzecz bibliotek oraz ich pracowników, integrując społeczność bibliotekarzy i specjalistów. Ponadto, zajmuje się opiniowaniem kwestii związanych z bibliotekami, nawiązywaniem współpracy krajowej i zagranicznej, a także inicjowaniem działań sprzyjających budowie otwartego społeczeństwa informacyjnego. Wszystkie działania prowadzone są zgodnie z obowiązującymi przepisami prawa.",
        cel_mini: "Celem stowarzyszenia jest rozwój wiedzy i kwalifikacji bibliotekarzy oraz specjalistów informacji naukowej poprzez działalność wydawniczą, organizację szkoleń i promocję czytelnictwa, a także współpracę krajową i zagraniczną. Stowarzyszenie angażuje się również w inicjatywy społeczne i działania na rzecz budowy otwartego społeczeństwa informacyjnego.",
        siedziba_miejscowosc: "SADURKI",
        tagi: new Set(["edukacja", "wspolpraca", "zawod"])
    },
    {
        id: 225,
        nazwa: "STOWARZYSZENIE 'DRENGOWIE ZNAD GÓRNEJ ODRY'",
        krs: "301827",
        cel: "Organizacja podejmuje działania mające na celu integrację osób oraz instytucji zainteresowanych historią, szczególnie okresem średniowiecza, a także wspieranie rozwoju lokalnych wspólnot. W ramach swoich działań koncentruje się na nauce, edukacji i wychowaniu, promując kulturę i sztukę, oraz chroniąc dobra kulturowe poprzez rekonstrukcje historyczne. Wspiera rodziny i osoby w trudnych sytuacjach życiowych, dążąc do wyrównywania ich szans. Organizacja poświęca uwagę również ochronie środowiska naturalnego i promocji miasta oraz powiatu raciborskiego. Akcentuje znaczenie kultury fizycznej i sportu, zwłaszcza w dziedzinie sportów obronnych oraz strzelectwa, a także rozwija umiejętności zapewniające porządek i bezpieczeństwo publiczne. Dodatkowo propaguje współpracę międzynarodową, w szczególności między Polską a Czechami, oraz dąży do wyrównywania szans w dostępie do kapitału społecznego i edukacyjnego.",
        cel_mini: "Organizacja działa na rzecz integracji społecznej, rozwoju edukacji oraz ochrony kultury i środowiska, wspierając lokalne wspólnoty. Angażuje się również w promowanie sportu, bezpieczeństwa publicznego oraz współpracy międzynarodowej, szczególnie z Czechami.",
        siedziba_miejscowosc: "RACIBÓRZ",
        tagi: new Set(["integracja", "kultura", "wspolpraca", "nauka", "srodowisko", "pomoc", "edukacja"])
    },
    {
        id: 226,
        nazwa: "STOWARZYSZENIE FIDEI DEFENSOR",
        krs: "431006",
        cel: "Zakres działalności stowarzyszenia obejmuje podtrzymywanie tradycji narodowej oraz rozwijanie świadomości narodowej, obywatelskiej i kulturowej. Organizacja działa na rzecz edukacji prawnej obywateli, oferując pomoc prawną pro bono, oraz promuje zatrudnienie i aktywizację zawodową osób bez pracy lub zagrożonych zwolnieniem. Wspiera równość płci, rozwój gospodarczy oraz innowacyjność techniczną. Stowarzyszenie wspomaga lokalne społeczności i zajmuje się wsparciem dla nauki oraz edukacji. Propaguje kulturę, sztukę, ochronę dziedzictwa narodowego oraz aktywności sportowe i turystyczne. Działa na rzecz ekologii, ochrony środowiska, porządku publicznego, a także wspiera obronność państwa. Organizacja promuje prawa człowieka, prawa konsumentów oraz integrację europejską. Angażuje się w wolontariat i pomaga Polaków za granicą, a także wspiera kombatantów i osoby represjonowane. Promuje Polskę za granicą, a szczegółowe cele działania określa statut stowarzyszenia.",
        cel_mini: "Cele działania stowarzyszenia obejmują pielęgnowanie tradycji narodowej, promowanie praw obywatelskich, wspieranie rozwoju gospodarczego, edukacji, kultury oraz ekologii, a także integrację europejską i pomoc Polonii za granicą. Wszelkie dodatkowe cele określają postanowienia zawarte w rozdziale II ust. 1 statutu stowarzyszenia.",
        siedziba_miejscowosc: "SZCZECIN",
        tagi: new Set(["obywatelstwo", "prawo", "gospodarka", "kultura", "praca"])
    },
    {
        id: 227,
        nazwa: "STOWARZYSZENIE FILMOWCÓW POLSKICH",
        krs: "68354",
        cel: "Stowarzyszenie zrzesza osoby związane z przemysłem filmowym, w tym twórców oraz producentów audiowizualnych, a także pracowników pomocniczych, w celu ochrony zawodu twórcy filmowego oraz praw autorskich i pokrewnych. Jego działalność obejmuje zbiorowe zarządzanie tymi prawami, wspieranie rozwoju środowiska filmowego, kształtowanie zasad etyki zawodowej, dążenie do zapewnienia odpowiednich warunków dla rozwoju sztuki i kultury filmowej oraz przestrzegania swobód twórczych. Stowarzyszenie aktywnie promuje także rozwój nauki, edukacji i kultury w obszarze filmu.",
        cel_mini: "Stowarzyszenie zrzesza osoby związane z branżą filmową, w tym twórców i producentów, w celu ochrony praw zawodowych, autorskich oraz wspierania rozwoju kultury i etyki w środowisku filmowym. Działa na rzecz zapewnienia odpowiednich warunków dla sztuki filmowej oraz promowania nauki i edukacji w tej dziedzinie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "kinematografia", "etyka"])
    },
    {
        id: 228,
        nazwa: "STOWARZYSZENIE INSTYTUT NIEZALEŻNEGO ŻYCIA",
        krs: "726136",
        cel: "W Polsce podejmowane są różnorodne działania wspierające i monitorujące wdrażanie Konwencji o Prawach Osób Niepełnosprawnych, szczególnie w kontekście niezależnego życia. Istotnym elementem jest inicjowanie badań dotyczących praw osób z niepełnosprawnościami oraz prowadzenie działalności naukowej w tym obszarze. Uczestnictwo w dyskusjach naukowych i społecznych przyczynia się do zaangażowania osób z niepełnosprawnościami w życie społeczne, zwłaszcza w społecznościach lokalnych. Promowanie uniwersalnego projektowania sprzyja zapewnieniu dostępności środowiska, produktów i usług dla całego społeczeństwa. Wzmacnianie świadomości społecznej na temat wykluczenia oraz promowanie Konwencji i sposobów wsparcia osób z niepełnosprawnościami są kluczowe dla prawidłowego funkcjonowania tych inicjatyw.",
        cel_mini: "W Polsce wspierane jest wdrażanie Konwencji o prawach osób niepełnosprawnych, z akcentem na niezależne życie oraz prowadzenie badań w tym zakresie. Działania obejmują również promowanie dostępności, organizowanie dyskusji naukowych, integrację osób z niepełnosprawnościami w społeczeństwie oraz podnoszenie świadomości społecznej na temat wykluczenia.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["prawo", "spoleczenstwo"])
    },
    {
        id: 229,
        nazwa: "STOWARZYSZENIE INTEGRACJA NA PLUS",
        krs: "345664",
        cel: "Celem stowarzyszenia jest rozwój społeczności lokalnych gminy Skarszewy i Kociewia, ochrona oraz popularyzacja dóbr kultury, sztuki, historii, tradycji i przyrody. Organizacja dąży również do integracji społecznej, zawodowej oraz międzypokoleniowej mieszkańców regionu.",
        cel_mini: "Celem stowarzyszenia jest rozwój lokalnych społeczności gminy Skarszewy i Kociewia oraz ochrona i promocja dóbr kultury, sztuki, historii i tradycji. Stowarzyszenie dąży także do integracji społecznej, zawodowej i międzypokoleniowej mieszkańców.",
        siedziba_miejscowosc: "SKARSZEWY",
        tagi: new Set(["spoleczenstwo", "spolecznosc", "zawod", "kultura", "historia"])
    },
    {
        id: 230,
        nazwa: "STOWARZYSZENIE INTEGRACJI RODZIN 'PRZYSTAŃ'",
        krs: "202456",
        cel: "Celem działalności stowarzyszenia jest zwiększenie skuteczności i dostępności działań terapeutycznych, edukacyjnych oraz opiekuńczo-wychowawczych, w tym profilaktycznych i charytatywnych, skierowanych do osób uzależnionych oraz zagrożonych patologią społeczną, w tym pokrzywdzonych przestępstwem, skazanych, a także osób ubogich, niepełnosprawnych, oraz ich rodzin. Stowarzyszenie oferuje pomoc psychologiczną, prawną i doradczą, wspiera osoby w trudnej sytuacji życiowej, prowadzi działalność na rzecz rodziny oraz promuje prawa dziecka. Działalność obejmuje także kształtowanie postaw abstynenckich, edukację na temat uzależnień oraz współpracę z organami administracji publicznej. Organizacja zajmuje się także readaptacją osób opuszczających zakłady karne, wspiera ofiary przestępstw i ich rodziny, organizuje wolontariat oraz umożliwia dzieciom i młodzieży udział w różnych formach aktywności. W planach stowarzyszenia znajduje się również działalność rehabilitacyjna, promująca zdrowy styl życia, oraz działania na rzecz lokalnych społeczności, pielęgnowanie tradycji narodowej oraz rehabilitacja społeczna i zawodowa osób niepełnosprawnych.",
        cel_mini: "Celem stowarzyszenia jest zwiększenie dostępności i skuteczności terapii, edukacji oraz wsparcia wśród osób uzależnionych, zagrożonych wykluczeniem społecznym, pokrzywdzonych przestępstwami oraz ich rodzin. Działalność obejmuje m.in. pomoc psychologiczną, prawną, finansową, edukacyjną oraz rehabilitacyjną, a także wsparcie w zakresie profilaktyki zdrowotnej i społecznej.",
        siedziba_miejscowosc: "CHEŁM",
        tagi: new Set(["psychologia", "spoleczenstwo", "edukacja", "niepelnosprawnosc", "zdrowie", "rehabilitacja"])
    },
    {
        id: 231,
        nazwa: "STOWARZYSZENIE INTEGRACYJNE WSPÓLNOTY BARKA",
        krs: "173220",
        cel: "Celem nadrzędnym stowarzyszenia jest szeroka działalność na rzecz integracji i reintegracji osób wykluczonych społecznie w kontekście gospodarki rynkowej. W ramach tego celu stowarzyszenie niesie pomoc osobom i rodzinom długotrwale bezrobotnym, bezdomnym, zagrożonym wykluczeniem społecznym oraz skazanym i opuszczającym zakłady karne. Dodatkowo, wspiera aktywizację społeczną i zawodową tych grup, promuje samokształcenie w zakresie norm moralno-etycznych oraz animuje lokalne społeczności do działania przeciwko problemom wykluczenia. Stowarzyszenie dąży do rozwoju kultury i ochrony dóbr kultury, podnoszenia kwalifikacji zawodowych, wprowadzania aktywnych form przeciwdziałania bezrobociu oraz tworzenia nowych form zatrudnienia, w tym spółdzielni socjalnych. Dodatkowe cele obejmują profilaktykę zdrowia, działalność leczniczą, poradnictwo medyczne, rehabilitację, terapię uzależnień, readaptację społeczną i resocjalizację. Stowarzyszenie ma także możliwość tworzenia tymczasowych schronień i prowadzenia ośrodków pomocy postpenitencjarnej dla osób opuszczających zakłady karne.",
        cel_mini: "Celem stowarzyszenia jest integracja i reintegracja osób wykluczonych społecznie poprzez pomoc, aktywizację zawodową i społeczną, a także edukację oraz rozwój kultury. Stowarzyszenie wspiera również tworzenie miejsc schronienia oraz prowadzi ośrodki pomocy postpenitencjarnej dla osób opuszczających zakłady karne.",
        siedziba_miejscowosc: "CHUDOBCZYCE",
        tagi: new Set(["praca", "prawo", "bezdomnosc", "spoleczenstwo"])
    },
    {
        id: 232,
        nazwa: "STOWARZYSZENIE INTERWENCJI PRAWNEJ",
        krs: "240024",
        cel: "Cele stowarzyszenia obejmują przeciwdziałanie wykluczeniu społecznemu oraz dyskryminacji, a także świadczenie bezpłatnej pomocy prawnej, szczególnie dla cudzoziemców, uchodźców, więźniów, małoletnich, kobiet oraz rodzin, w tym zastępczych i adopcyjnych. Działania stowarzyszenia koncentrują się na pomocy osobom zagrożonym marginalizacją i znajdującym się w trudnej sytuacji życiowej, na ochronie praw człowieka, sprawiedliwości naprawczej oraz mediacji. Organizacja dąży również do zapewnienia równego statusu płci, przeciwdziałania przemocy, przestrzegania praw pracowniczych oraz podnoszenia świadomości prawnej w społeczeństwie. Stowarzyszenie promuje procesy partycypacji społecznej i wspiera różne grupy formalne i nieformalne, w tym organizacje społeczne, a także działa na rzecz rozwoju społeczności lokalnych i organizacji pozarządowych.",
        cel_mini: "Celem stowarzyszenia jest przeciwdziałanie wykluczeniu społecznemu poprzez świadczenie bezpłatnej pomocy prawnej oraz wsparcie osób w trudnej sytuacji, przy jednoczesnym promowaniu praw człowieka i sprawiedliwości naprawczej. Organizacja dąży także do równości płci, ochrony praw pracowniczych oraz aktywizacji społecznej w lokalnych społecznościach.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "przemoc", "spoleczenstwo"])
    },
    {
        id: 233,
        nazwa: "'STOWARZYSZENIE INWESTORÓW INDYWIDUALNYCH'",
        krs: "25801",
        cel: "Działalność wspomagająca rozwój gospodarczy, w tym wspieranie przedsiębiorczości oraz ochrona praw inwestorów indywidualnych, koncentruje się na kilku kluczowych obszarach. Do działań tych należy powołanie 'klubów inwestorskich' w Polsce, pomoc w zdobywaniu wiedzy i kwalifikacji przez inwestorów oraz obrona ich interesów. Organizacja propaguje kwestie związane z funkcjonowaniem rynku kapitałowego i działa na rzecz przestrzegania uczciwego obrotu oraz zapewnienia dostępu do rzetelnych informacji. Dodatkowo, inspiruje i koordynuje działania mające na celu efektywne funkcjonowanie rynku oraz ochronę inwestorów, współpracując z organami administracji i uczestnikami rynku w kształtowaniu polityki sprzyjającej ich interesom. Przedstawia również stanowiska w sprawie projektów legislacyjnych i reprezentuje inwestorów indywidualnych w postępowaniach administracyjnych oraz sądowych, a także wobec instytucji finansowych świadczących usługi dla nich.",
        cel_mini: "Działalność wspierająca rozwój gospodarczy w Polsce koncentruje się na tworzeniu 'klubów inwestorskich', edukacji inwestorów oraz ochronie ich praw na rynku kapitałowym. Ponadto, promuje transparentność, uczciwy obrót, oraz współpracuje z instytucjami publicznymi w celu ochrony interesów indywidualnych inwestorów.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["gospodarka"])
    },
    {
        id: 234,
        nazwa: "STOWARZYSZENIE KLON/JAWOR",
        krs: "31549",
        cel: "Celem stowarzyszenia jest wspieranie rozwoju społeczeństwa obywatelskiego, ze szczególnym uwzględnieniem działań na rzecz organizacji pozarządowych, aktywizacji społecznej obywateli, w tym szczególnie osób z grup wrażliwych, takich jak osoby niepełnosprawne, seniorzy, bezdomni, bezrobotni, dzieci i kobiety. Stowarzyszenie dąży do zapewnienia swobodnego dostępu do informacji, co jest kluczowe dla rozwoju społeczeństwa obywatelskiego, oraz wspiera działania dobroczynne i humanitarne. Cele organizacji będą realizowane w obszarach takich jak kultura, oświata, edukacja, ochrona środowiska, prawa człowieka, ochrona zdrowia oraz rozwój regionalny i lokalny.",
        cel_mini: "Celem stowarzyszenia jest wspieranie rozwoju społeczeństwa obywatelskiego poprzez działania na rzecz organizacji pozarządowych oraz pomoc obywatelom, w tym osobom potrzebującym wsparcia. Cele te będą realizowane w obszarach takich jak kultura, edukacja, prawa człowieka, ochrona zdrowia i pomoc społeczna.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "kultura", "ngo", "edukacja", "zdrowie"])
    },
    {
        id: 235,
        nazwa: "STOWARZYSZENIE KOBIETA NA PLUS",
        krs: "309003",
        cel: "Organizacja zajmuje się szerokim zakresem działań mających na celu wsparcie osób i rodzin w trudnych sytuacjach życiowych oraz wyrównywanie ich szans. Wspiera rodziny oraz system pieczy zastępczej, udziela nieodpłatnej pomocy prawnej, a także podejmuje działania na rzecz integracji i reintegracji zawodowej osób zagrożonych wykluczeniem społecznym. Organizuje działalność charytatywną, pielęgnuje tradycje narodowe, promuje zdrowie i zajmuje się osobami niepełnosprawnymi, a także wspiera zatrudnienie i równość płci. Działa na rzecz seniorów, wspiera rozwój lokalnych społeczności i dzieci oraz młodzieży, a także pielęgnuje kulturę, sztukę i dziedzictwo narodowe. W swojej działalności dąży do ochrony ekologii i praw człowieka, organizuje wolontariat oraz udziela pomocy Polonii za granicą, a także zajmuje się promowaniem rodziny, macierzyństwa oraz praw dziecka.",
        cel_mini: "Podstawa działalności obejmuje wsparcie osób w trudnych sytuacjach życiowych, integrację osób zagrożonych wykluczeniem, działalność charytatywną oraz ochronę zdrowia, kultury i praw człowieka. Dodatkowo skupia się na promocji zatrudnienia, równouprawnienia, wsparcia rodzin, polityki związanej z dziećmi i młodzieżą oraz ochrony dziedzictwa narodowego.",
        siedziba_miejscowosc: "RUCIANE-NIDA",
        tagi: new Set(["wsparcie", "spoleczenstwo", "charytatywnosc", "pomoc", "niepelnosprawnosc", "zdrowie"])
    },
    {
        id: 236,
        nazwa: "STOWARZYSZENIE KOLIBER",
        krs: "111237",
        cel: "Stowarzyszenie dąży do wykształcenia elit ideowych o poglądach konserwatywno-liberalnych, które będą aktywnie uczestniczyć w życiu politycznym, społecznym i kulturalnym kraju. Ma na celu urzeczywistnianie idei społeczeństwa obywatelskiego oraz propagowanie wartości chrześcijańskich i konserwatywno-liberalnych. Stowarzyszenie pragnie odbudowy fundamentalnych wartości cywilizacji łacińskiej, takich jak wolność jednostki, własność prywatna, poszanowanie prawa, sprawiedliwość i etyka. Działa na rzecz zdobywania wiedzy i kwalifikacji niezbędnych do pełnienia funkcji publicznych oraz ułatwia kontakt z innymi instytucjami. Promuje przedsiębiorczość, chroni prawa przedsiębiorców i konsumentów, a także dba o prawdę historyczną i dziedzictwo narodowe. Wspiera kulturę, ideę samorządności, ekologię oraz ochronę środowiska, a także propaguje kulturę fizyczną, sport i turystykę. W ramach swoich działań stowarzyszenie wzmacnia obronność kraju oraz promuje międzynarodową współpracę, dążąc do poszerzenia swobód w przepływie osób, usług, towarów i kapitału.",
        cel_mini: "Stowarzyszenie dąży do kształcenia elit ideowych o poglądach konserwatywno-liberalnych, wspierania społeczeństwa obywatelskiego oraz odbudowy fundamentalnych wartości cywilizacji łacińskiej. Promuje również przedsiębiorczość, ochronę dziedzictwa narodowego, kulturę, ekologię, sport i obronność, a także międzynarodową współpracę i wolność przepływu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["polityka", "gospodarka", "spoleczenstwo", "ekologia"])
    },
    {
        id: 237,
        nazwa: "STOWARZYSZENIE KOLEKTYW KOBIETOSTAN",
        krs: "807198",
        cel: "Organizacja angażuje się w szeroki zakres działań na rzecz równości i ochrony praw kobiet, wspierania mniejszości narodowych i grup narażonych na dyskryminację, a także promowania kultury zarówno w Polsce, jak i na świecie. Wspiera różnorodne inicjatywy kulturalne, edukacyjne, naukowe, społeczne i sportowe o charakterze lokalnym oraz międzynarodowym, a także rozwija działania na rzecz rozwoju regionalnego i narodowego. Dąży do wzmocnienia społeczeństwa obywatelskiego oraz zapewnienia wsparcia osobom z niepełnosprawnościami. Ponadto, organizacja udziela pomocy ofiarom katastrof, klęsk żywiołowych i konfliktów zbrojnych, a także działa na rzecz przeciwdziałania negatywnym skutkom rozwoju cywilizacyjnego poprzez różne projekty z dziedziny sztuki, edukacji, nauki, medycyny i sportu, czego kontynuacja znajduje się w dalszej części statutu stowarzyszenia.",
        cel_mini: "Organizacja koncentruje się na promowaniu i ochronie praw kobiet oraz równouprawnieniu, wsparciu mniejszości i grup dyskryminowanych, a także na rozwoju kultury, inicjatyw lokalnych i regionalnych, społeczeństwa obywatelskiego oraz osobach niepełnosprawnych. Dodatkowo, angażuje się w pomoc ofiarom katastrof oraz w przeciwdziałanie negatywnym skutkom rozwoju cywilizacyjnego.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["spoleczenstwo", "prawo", "sztuka", "edukacja", "mniejszosci", "kultura", "niepelnosprawnosc"])
    },
    {
        id: 238,
        nazwa: "STOWARZYSZENIE KOMBATANTÓW MISJI POKOJOWYCH ORGANIZACJI NARODÓW ZJEDNOCZONYCH",
        krs: "158391",
        cel: "Działania mające na celu integrację środowiska weteranów misji zagranicznych obejmują stymulowanie ich aktywności społecznej oraz propagowanie znaczenia ONZ i innych organizacji międzynarodowych w utrzymaniu pokoju i bezpieczeństwa. Ważnym elementem jest również popularizacja osiągnięć Polaków w międzynarodowych misjach oraz reprezentowanie i ochrona interesów weteranów wobec władz państwowych i lokalnych. Stowarzyszenie angażuje się w poprawę warunków życia i opieki medycznej dla weteranów i ich rodzin, a także w nawiązywanie do tradycji oręża polskiego, promując patriotyzm i proobronne postawy wśród młodzieży. Współpraca z organami administracji, parlamentem oraz międzynarodowymi organizacjami o podobnych celach jest kluczowa dla realizacji założonych celów. Oprócz tego stowarzyszenie dąży do umacniania więzi koleżeńskich i szacunku we własnym środowisku oraz z jednostkami wojskowymi, a także organizuje pomoc humanitarną oraz wsparcie dla weteranów w trudnej sytuacji materialnej.",
        cel_mini: "Stowarzyszenie wspiera integrację weteranów misji poza granicami, promując ich aktywność społeczną oraz dbając o poprawę warunków socjalno-bytowych i opieki medycznej. Działania obejmują także edukację na temat roli ONZ, ochronę interesów weteranów oraz współpracę z organizacjami krajowymi i międzynarodowymi w celu wspierania patriotyzmu i tradycji oręża polskiego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wspolpraca", "prawo", "wojsko", "spoleczenstwo"])
    },
    {
        id: 239,
        nazwa: "STOWARZYSZENIE KONSUMENTÓW POLSKICH W LIKWIDACJI",
        krs: "127128",
        cel: "Celem stowarzyszenia jest kształtowanie i rozwijanie świadomości konsumentów w zakresie ich praw, obejmujących bezpieczeństwo i ochronę zdrowia, ochronę interesów ekonomicznych, dostęp do informacji i edukacji, a także prawa do ochrony prawnej i reprezentacji. Stowarzyszenie podejmuje działania mające na celu zabezpieczenie tych praw.",
        cel_mini: "Celem stowarzyszenia jest kształtowanie i rozwijanie świadomości konsumentów w zakresie ich praw do bezpieczeństwa, ochrony zdrowia, interesów ekonomicznych, informacji oraz ochrony prawnej. Organizacja podejmuje działania mające na celu zabezpieczenie tych praw.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "zdrowie", "bezpieczenstwo"])
    },
    {
        id: 240,
        nazwa: "STOWARZYSZENIE KREATYWNA POLSKA",
        krs: "491812",
        cel: "Organizacja koncentruje się na rozwoju i ochronie polskiej kultury oraz nauki, promując twórczość i innowacyjność. Wspiera działalność związaną z tworzeniem prawa i podejmowaniem decyzji, które wpływają na sytuację twórców i naukowców oraz kształt przemysłu kreatywnego. Podkreśla znaczenie indywidualnej kreatywności i talentu, a także ich potencjał do generowania dochodu i zatrudnienia poprzez wykorzystanie praw własności intelektualnej. Promuje kreatywność i innowacyjność jako kluczowe elementy nowoczesnego społeczeństwa i gospodarki opartej na wiedzy. Angażuje się w działania na rzecz zapewnienia równego dostępu do dóbr kultury, ochrony praw twórczych, zwiększenia inwestycji w przemysły kreatywne poza metropoliami, inicjatywy dialogowe oraz edukację kulturalną, naukową i medialną.",
        cel_mini: "Działania mają na celu rozwój i ochronę polskiej kultury oraz promują kreatywność i innowacyjność jako kluczowe elementy nowoczesnego społeczeństwa i gospodarki. Wspierają także równość dostępu do dóbr kultury, ochronę praw twórców, inwestycje w przemysły kreatywne oraz edukację kulturalną i naukową.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["kultura", "prawo", "innowacje"])
    },
    {
        id: 241,
        nazwa: "STOWARZYSZENIE KRZEWIENIA EDUKACJI FINANSOWEJ",
        krs: "53057",
        cel: "Organizacje angażują się w krzewienie edukacji finansowej, ochronę konsumentów oraz promocję zatrudnienia, wspierając osoby bez pracy i zagrożone zwolnieniem. Działania te obejmują również rozwijanie współpracy społecznej, organizację wolontariatu, reintegrację społeczną i zawodową, działalność charytatywną oraz wspieranie kultury polskiej i dziedzictwa narodowego.",
        cel_mini: "Kierunki działań obejmują inicjowanie i wspieranie edukacji finansowej, ochronę konsumentów, promocję zatrudnienia oraz aktywizację osób bez pracy, a także rozwijanie współpracy między społecznościami, wolontariat, reintegrację społeczną, działalność charytatywną oraz wsparcie dla kultury polskiej i dziedzictwa narodowego.",
        siedziba_miejscowosc: "GDYNIA",
        tagi: new Set(["charytatywnosc", "prawo", "wolontariat", "praca", "finanse"])
    },
    {
        id: 242,
        nazwa: "STOWARZYSZENIE KSIĘGOWYCH W POLSCE",
        krs: "101063",
        cel: "Działalność oświatowa obejmuje edukację, szkolenia oraz wydawnictwa przygotowujące do zawodu księgowego oraz stanowisk pokrewnych z zakresu rachunkowości, a także ustawiczne doskonalenie kwalifikacji w celu prawidłowego wykonywania tych zawodów. Ponadto, krzewi się poczucie godności i wspólnoty zawodowej, a także popularyzuje się znaczenie zawodu księgowego, broniąc praw, godności oraz zbiorowych interesów członków stowarzyszenia. Ważnym aspektem jest troska o wysoki poziom etyczny i zawodowy członków oraz tworzenie warunków sprzyjających jego podnoszeniu. Dąży się również do rozwoju teorii i praktyki rachunkowości oraz branż z nią związanych, a także do popularyzacji europejskich i światowych rozwiązań w tej dziedzinie.",
        cel_mini: "Działalność oświatowa obejmuje edukację i szkolenia w zakresie rachunkowości oraz doskonalenia zawodowego księgowych. Ponadto, promuje etykę zawodową, wspólnotę oraz rozwój teorii i praktyki rachunkowości, uwzględniając międzynarodowe standardy.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "ksiegowosc", "etyka"])
    },
    {
        id: 243,
        nazwa: "STOWARZYSZENIE MANKO",
        krs: "225549",
        cel: "Prowadzenie i wspieranie różnorodnych działań publicznych obejmuje szereg kluczowych obszarów, takich jak promowanie wolności słowa, demokracji, etyki biznesu oraz antykorupcji. Istotne jest również rozwijanie świadomych i odpowiedzialnych postaw społecznych, wrażliwości społecznej i ekologicznej, a także ochrony praw człowieka. Działania te koncentrują się na budowaniu społeczeństwa obywatelskiego, integracji międzykulturowej oraz wspieraniu rozwoju kultury wśród studentów. Organizowane są również inicjatywy na rzecz osób z niepełnosprawnościami, seniorów oraz grup zagrożonych wykluczeniem. Wspierane są zadania związane z ochroną zdrowia, promowaniem zatrudnienia oraz rozwoju lokalnych społeczności i przedsiębiorczości. Dodatkowo, podejmowane są działania w obszarze ochrony dziedzictwa kulturowego, ekologii, sportu, turystyki oraz wolontariatu, a także pomoc ofiarom katastrof i konfliktów zbrojnych, w ramach integracji europejskiej i współpracy międzynarodowej.",
        cel_mini: "Działalność obejmuje szeroki zakres zadań publicznych, takich jak promowanie wolności słowa, demokracji, etyki biznesu, praw człowieka, aktywizacji społecznej oraz integracji międzykulturowej. Celem jest również wspieranie lokalnych wspólnot, ochrony zdrowia, kultury i dziedzictwa oraz działalności charytatywnej i proekologicznej.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "demokracja", "spoleczenstwo", "ekologia"])
    },
    {
        id: 244,
        nazwa: "STOWARZYSZENIE MEDIATORÓW RODZINNYCH",
        krs: "210101",
        cel: "Wspieranie rozwoju mediacji rodzinnej w Polsce koncentruje się na kilku kluczowych aspektach. Przede wszystkim promowane jest postrzeganie mediacji jako efektywnej metody pokojowego rozwiązywania konfliktów rodzinnych. Dąży się również do zwiększenia dostępności usług mediacyjnych, co ma na celu dotarcie do szerszej grupy odbiorców. Równocześnie, podejmowane są działania mające na celu dostosowanie krajowych regulacji dotyczących mediacji rodzinnej do standardów obowiązujących w Unii Europejskiej. Istotnym elementem jest zapewnienie wysokiej jakości świadczonych usług mediacyjnych w Polsce oraz rozwijanie środowiska mediatorów rodzinnych, co przyczynia się do poprawy efektywności i profesjonalizmu w obszarze mediacji.",
        cel_mini: "Celem jest rozwój mediacji rodzinnej w Polsce poprzez promowanie jej jako metodę pokojowego rozwiązywania konfliktów, zwiększenie dostępu do tych usług oraz dostosowanie standardów do wymogów Unii Europejskiej. Dodatkowo, dąży się do zapewnienia wysokiej jakości usług mediacyjnych i wsparcia dla rozwoju środowiska mediatorów rodzinnych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["rodzina", "mediacja"])
    },
    {
        id: 245,
        nazwa: "STOWARZYSZENIE MOC WSPARCIA",
        krs: "438667",
        cel: "Cele działalności pomocy społecznej obejmują wspieranie rodzin i osób w trudnych sytuacjach życiowych oraz wyrównywanie ich szans. Kluczowe są programy reintegracji społecznej dla osób i środowisk zagrożonych wykluczeniem, a także przeciwdziałanie marginalizacji społecznej. W zakresie ochrony zdrowia promuje się zatrudnienie i aktywizację zawodową osób bez pracy. Ponadto, istotne jest wspieranie równych praw kobiet i mężczyzn oraz rozwój wspólnot lokalnych. Działania koncentrują się także na zapewnieniu porządku publicznego, organizacji wolontariatu oraz ochronie praw człowieka oraz swobód obywatelskich. Współpraca z organizacjami pozarządowymi i administracją publiczną jest istotnym elementem tych działań, które szczególnie koncentrują się na pomocy dzieciom krzywdzonym i rodzinom w trudnej sytuacji materialnej.",
        cel_mini: "Celem działalności jest wsparcie osób i rodzin w trudnych sytuacjach życiowych, promowanie równości oraz reintegracja społeczna. Działania obejmują także przeciwdziałanie marginalizacji, ochronę zdrowia, aktywizację zawodową, współpracę z organizacjami i udzielanie szczególnej pomocy dzieciom oraz rodzinom w kryzysie.",
        siedziba_miejscowosc: "SOSNOWIEC",
        tagi: new Set(["spoleczenstwo", "prawo", "wolontariat", "pomoc", "praca", "zdrowie"])
    },
    {
        id: 246,
        nazwa: "STOWARZYSZENIE 'MONAR'",
        krs: "139796",
        cel: "Celem Stowarzyszenia MONAR jest działalność społecznie użyteczna, mająca na celu ochronę zdrowia społeczeństwa oraz świadczenie wszechstronnej pomocy dla osób i grup zagrożonych wykluczeniem społecznym. Organizacja podejmuje działania w obszarze ochrony i promocji zdrowia, profilaktyki uzależnień, terapia i rehabilitacji, a także pomocy medycznej oraz wsparcia społecznego. MONAR wspiera reintegrację zawodową i społeczną, udziela pomocy prawnej oraz działa na rzecz wyrównywania szans osób z marginalizowanych środowisk. Organizacja angażuje się również w przeciwdziałanie dyskryminacji, promowanie praw dziecka, przedsiębiorczości oraz rozwój lokalnych społeczności. Dodatkowo, stowarzyszenie prowadzi działalność edukacyjną, badawczą oraz proekologiczną, obejmując swoją pomocą dorosłych i dzieci, w tym osoby uzależnione, bezdomne, chore, niepełnosprawne oraz seniorów.",
        cel_mini: "Celem Stowarzyszenia MONAR jest prowadzenie działalności społecznie użytecznej, ochrona zdrowia oraz wszechstronna pomoc osobom i grupom zagrożonym wykluczeniem społecznym. Organizacja koncentruje się na działaniach z zakresu terapii uzależnień, pomocy medycznej, reintegracji społecznej i zawodowej, a także wsparciu osób doświadczających różnorodnych problemów społecznych i zdrowotnych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["dyskryminacja", "zdrowie", "spoleczenstwo", "pomoc"])
    },
    {
        id: 247,
        nazwa: "STOWARZYSZENIE NA RZECZ OSÓB NIEPEŁNOSPRAWNYCH I ICH OTOCZENIA 'SPEKTRUM'",
        krs: "535635",
        cel: "Celem stowarzyszenia jest głównie prowadzenie działalności w zakresie pomocy społecznej, w tym wspierania rodzin i osób znajdujących się w trudnych sytuacjach życiowych oraz wyrównywania ich szans. Organizacja angażuje się w integrację i reintegrację zawodową oraz społeczną osób zagrożonych wykluczeniem, a także w działalność charytatywną. Dąży do podtrzymywania i popularyzacji tradycji narodowej, pielęgnowania polskości oraz rozwoju świadomości narodowej, obywatelskiej i kulturalnej. Dodatkowo stowarzyszenie promuje zdrowie, wspiera osoby niepełnosprawne, działa na rzecz rozwoju wspólnot lokalnych oraz angażuje się w edukację i wychowanie. Zajmuje się również organizacją wypoczynku dla dzieci i młodzieży, a także wspiera kulturę, sztukę oraz ochronę dziedzictwa narodowego. Ponadto, promuje kulturę fizyczną i sport, oraz angażuje się w ochronę środowiska i zwierząt oraz dziedzictwa przyrodniczego.",
        cel_mini: "Celem stowarzyszenia jest prowadzenie działalności w zakresie pomocy społecznej, integracji zawodowej, działań charytatywnych, ochrony zdrowia oraz promowania kultury, edukacji, ekologii i ochrony dziedzictwa narodowego. Stowarzyszenie angażuje się również w wsparcie osób niepełnosprawnych oraz rozwój lokalnych wspólnot.",
        siedziba_miejscowosc: "RACIBÓRZ",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "edukacja", "pomoc", "kultura", "niepelnosprawnosc", "zdrowie"])
    },
    {
        id: 248,
        nazwa: "STOWARZYSZENIE NA RZECZ POMOCY DZIECKU I RODZINIE 'DLA RODZINY'",
        krs: "456714",
        cel: "Celem Stowarzyszenia 'Dla Rodziny' jest wspieranie rodziny jako kluczowej jednostki społecznej. Organizacja koncentruje się na kilku głównych zadaniach, takich jak tworzenie sprzyjających warunków dla wszechstronnego rozwoju dzieci i ich rodzin w aspektach intelektualnym, społecznym, duchowym, emocjonalnym i fizycznym. Stowarzyszenie dąży do budowania lokalnego społeczeństwa opartego na odpowiedzialności, które szanuje prawo do wolności i godności, w tym wolności od nałogów. Dodatkowo, organizacja promuje wartości takie jak wolność, prawda, sprawiedliwość, demokracja, samorządność, równość, tolerancja i przyjaźń oraz stwarza możliwości do nawiązywania i umacniania silnych więzi międzyludzkich, niezależnie od podziałów rasowych, narodowych i wyznaniowych.",
        cel_mini: "Stowarzyszenie 'Dla Rodziny' ma na celu wspieranie rodzin poprzez zapewnienie wszechstronnego rozwoju dzieci i ich bliskich, promowanie odpowiedzialności społecznej oraz wartości takich jak wolność, prawda i tolerancja. Organizacja dąży również do budowania silnych więzi międzyludzkich niezależnie od różnic rasowych, narodowościowych czy wyznaniowych.",
        siedziba_miejscowosc: "CZĘSTOCHOWA",
        tagi: new Set(["rodzina", "wolnosc", "dzieci"])
    },
    {
        id: 249,
        nazwa: "STOWARZYSZENIE NA RZECZ ROZWOJU GMINY CZOSNÓW",
        krs: "171664",
        cel: "Gmina Czosnów stawia na wszechstronny i zrównoważony rozwój, skupiając się na aspektach społecznych, kulturalnych i gospodarczych. Kluczowe działania obejmują integrację mieszkańców w celu przeciwdziałania bezradności i wykluczeniu społecznemu, co prowadzi do budowania silniejszej społeczności lokalnej. Ponadto, gmina wspiera demokrację i rozwój obywatelskości, tworząc przestrzeń do aktywnego udziału mieszkańców w życiu lokalnym.",
        cel_mini: "Celem jest wspieranie zrównoważonego rozwoju społecznego, kulturalnego i gospodarczego gminy Czosnów oraz integracja jej mieszkańców, co przeciwdziała bezradności i wykluczeniu społecznemu. Dodatkowo, kluczowe jest wspieranie demokracji i budowanie społeczeństwa obywatelskiego na poziomie lokalnym.",
        siedziba_miejscowosc: "CZOSNÓW",
        tagi: new Set(["gospodarka", "spoleczenstwo"])
    },
    {
        id: 250,
        nazwa: "STOWARZYSZENIE NA RZECZ ROZWOJU WSI RACŁAWICE",
        krs: "387661",
        cel: "Celem stowarzyszenia jest działalność publiczna mająca na celu poprawę warunków życia społeczności wsi Racławice oraz wspieranie ich rozwoju. W szczególności, stowarzyszenie koncentruje się na propagowaniu idei społeczeństwa obywatelskiego, aktywizacji lokalnej społeczności oraz kultury, a także inspirowaniu mieszkańców do aktywności w obszarze kultury fizycznej, sportu, pomocy społecznej oraz edukacji. Organizacja prowadzi działania edukacyjno-wychowawcze oraz opiekuńcze w stosunku do dzieci i młodzieży, tworzy i rozwija placówki oświatowe oraz wspiera młodych ludzi w aktywnym uczestnictwie w życiu publicznym. Stowarzyszenie angażuje się w działalność edukacyjną i profilaktyczną, mającą na celu zapobieganie patologiom społecznym oraz promowanie zdrowego stylu życia. Organizacja upowszechnia kulturę fizyczną, sport i turystykę, działa w sferze charytatywnej i opiekuńczej, a także troszczy się o ochronę środowiska i zabytków w okolicy Racławic. Szczególnie ważne jest dla niej pielęgnowanie tradycji narodowej, kultury ludowej oraz rozwój świadomości narodowej i kulturowej w lokalnym środowisku wiejskim.",
        cel_mini: "Celem stowarzyszenia jest poprawa warunków życia społeczności wsi Racławice oraz rozwój lokalny poprzez działania w zakresie aktywizacji społeczności, edukacji, kultury fizycznej, ochrony środowiska oraz promocji zdrowego stylu życia. Stowarzyszenie angażuje się również w działalność charytatywną, ochronę dziedzictwa kulturowego oraz podtrzymywanie tradycji narodowej.",
        siedziba_miejscowosc: "RACŁAWICE",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "kultura", "sport", "srodowisko", "edukacja", "warunki zycia"])
    },
    {
        id: 251,
        nazwa: "STOWARZYSZENIE NOTARIUSZY RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "113857",
        cel: "Celem stowarzyszenia jest jednoczenie polskiego notariatu wokół tradycyjnych wartości budujących publiczne zaufanie do działalności notariuszy. Organizacja ma na celu ochronę prestiżu i dobrego imienia środowiska notarialnego oraz zapewnienie odpowiednich warunków do godnego wykonywania zawodu. Działalność stowarzyszenia obejmuje formułowanie opinii notariuszy w istotnych sprawach, uczestnictwo w tworzeniu prawa oraz opiniowanie projektów aktów prawnych. Stowarzyszenie opiekuje się zarówno czynnych, jak i emerytowanych notariuszy, a także podejmuje działania integrujące środowisko notarialne. Ponadto występuje w obronie praw i interesów notariuszy oraz angażuje się w podnoszenie kwalifikacji i wiedzy prawniczej swoich członków. Stowarzyszenie prowadzi także działania promujące świadomość prawną społeczeństwa oraz utrzymuje kontakty z krajowymi i międzynarodowymi organizacjami prawniczymi, a także działa na rzecz popularyzacji pozasądowych metod rozwiązywania sporów.",
        cel_mini: "Celem stowarzyszenia jest jednoczenie polskiego notariatu, ochrona jego prestiżu oraz wspieranie godnego wykonywania zawodu, a także podnoszenie kwalifikacji jego członków i rozwijanie świadomości prawnej w społeczeństwie. Organizacja aktywnie uczestniczy w tworzeniu prawa oraz promuje pozasądowe metody rozwiązywania sporów.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "zaufanie"])
    },
    {
        id: 252,
        nazwa: "STOWARZYSZENIE OCHRONY WŁASNOŚCI PRZEMYSŁOWEJ",
        krs: "5694",
        cel: "Cele stowarzyszenia obejmują promowanie ochrony własności przemysłowej, w tym patentów, wzorów użytkowych, wzorów przemysłowych oraz znaków towarowych i usługowych, a także zwalczanie nieuczciwej konkurencji. Dąży do upowszechniania europejskich standardów prawnych w tej dziedzinie oraz wspierania harmonizacji polskiego prawa z międzynarodowymi normami. Stowarzyszenie prowadzi badania oraz analizy dotyczące prawa własności przemysłowej oraz studia nad międzynarodowymi porozumieniami związanymi z prawem własności intelektualnej. Ponadto, współpracuje z Międzynarodowym Stowarzyszeniem Ochrony Własności Przemysłowej (AIPPI) w realizacji wspólnych celów.",
        cel_mini: "Cele stowarzyszenia obejmują promowanie ochrony własności przemysłowej, harmonizację prawa w Polsce z międzynarodowymi standardami oraz prowadzenie badań i analiz w tej dziedzinie. Dodatkowo, stowarzyszenie współdziała z międzynarodowymi organizacjami na rzecz ochrony własności przemysłowej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo"])
    },
    {
        id: 253,
        nazwa: "STOWARZYSZENIE PATRIA ET LEX",
        krs: "728258",
        cel: "Celem działalności jest szerzenie wiedzy o historii oraz teraźniejszości lokalnych, regionalnych i ponadregionalnych wspólnot, a także pielęgnowanie chrześcijańskich i patriotycznych tradycji. Organizacja angażuje się w organizowanie wypoczynku dla dzieci i młodzieży, wspierając szczególnie rodziny w trudnej sytuacji, oraz promuje życie rodzinne, przeciwdziałając patologiom. Działania obejmują wspieranie rodzimej przedsiębiorczości i rozwijanie aktywności społecznej, współpracując z różnymi organizacjami. Ponadto, organizacja udziela pomocy rzeczowej, finansowej oraz prawnej osobom potrzebującym, w tym Polakom w kraju i za granicą, a także innym narodowościom, promocję wartości chrześcijańskich oraz działa na rzecz podnoszenia świadomości prawnej społeczeństwa. Zajmuje się także przeciwdziałaniem przestępczości oraz reprezentuje interesy swoich członków wobec władz publicznych.",
        cel_mini: "Podsumowanie obejmuje działania na rzecz upowszechniania wiedzy o historii oraz pielęgnowania tradycji, a także organizowanie form wsparcia dla dzieci, rodzin w trudnych sytuacjach oraz osób pokrzywdzonych. Dodatkowo, inicjatywy te obejmują wspieranie przedsiębiorczości, socjalną aktywność, pomoc finansową, ochronę praw oraz reprezentowanie interesów członków wobec władz publicznych.",
        siedziba_miejscowosc: "KUTNO",
        tagi: new Set(["spoleczenstwo", "gospodarka", "pomoc", "kultura", "rodzina", "historia"])
    },
    {
        id: 254,
        nazwa: "STOWARZYSZENIE PENITENCJARNE 'PATRONAT'",
        krs: "107241",
        cel: "Patronat ma na celu zapewnienie wszechstronnej pomocy osobom pozbawionym wolności, zwłaszcza w zakładach karnych, aresztach śledczych oraz placówkach dla nieletnich, niezależnie od ich wieku i podstawy pozbawienia wolności. Obejmuje on także społeczną readaptację po zwolnieniu oraz wsparcie rodzin osób odsiadujących wyrok. Patronat dąży do humanizacji systemu penitencjarnego, wzmacniania praworządności oraz zapobiegania przestępczości.",
        cel_mini: "Patronat ma na celu wspieranie osób pozbawionych wolności, w tym w zakładach karnych i dla nieletnich, oraz pomoc ich rodzinom. Dąży do humanizacji systemu penitencjarnego, umacniania praworządności i zapobiegania przestępczości.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["karani", "wsparcie", "spoleczenstwo", "prawo", "pomoc"])
    },
    {
        id: 255,
        nazwa: "STOWARZYSZENIE NA RZECZ ROZWOJU INTELEKTUALNEGO, SPOŁECZNEGO I EMOCJONALNEGO DZIECI 'PODARUJ DZIECIOM PROMYK SŁOŃCA'",
        krs: "443815",
        cel: "Celem stowarzyszenia jest wspieranie prawidłowego rozwoju intelektualnego, społecznego i emocjonalnego dzieci, szczególnie tych uzdolnionych z rodzin w trudnej sytuacji materialnej. Działania obejmują przeciwdziałanie osamotnieniu i bezradności poprzez finansowanie udziału dzieci w wycieczkach i wydarzeniach kulturalnych, gromadzenie materiałów edukacyjnych oraz organizację atrakcyjnych zajęć edukacyjnych, takich jak bajoterapia, muzykoterapia, czy warsztaty plastyczne. Stowarzyszenie promuje uzdolnienia artystyczne dzieci poprzez organizację przedstawień, koncertów oraz współpracę z ludźmi kultury. Dodatkowo, przewidziano działania edukacyjne z zakresu prawa i finansów dla młodzieży, prowadzenie warsztatów oraz tworzenie materiałów audiowizualnych. Stowarzyszenie planuje także organizację szkoleń z obrony terytorialnej, pierwszej pomocy w sytuacjach kryzysowych oraz konkursów strzeleckich.",
        cel_mini: "Celem stowarzyszenia jest wspieranie prawidłowego rozwoju intelektualnego, społecznego i emocjonalnego dzieci, szczególnie uzdolnionych oraz z rodzin słabo sytuowanych, poprzez organizację zajęć edukacyjnych, kulturalnych i artystycznych. Dodatkowo, stowarzyszenie planuje prowadzić działania edukacyjne z zakresu prawa, finansów, obrony terytorialnej oraz organizować warsztaty i szkolenia dla nauczycieli i rodziców.",
        siedziba_miejscowosc: "TARNÓW",
        tagi: new Set(["spoleczenstwo", "pomoc", "edukacja", "finanse", "dzieci"])
    },
    {
        id: 256,
        nazwa: "STOWARZYSZENIE POLSKI KOMITET NARODOWY  UNICEF",
        krs: "107957",
        cel: "Komitet Narodowy działa na rzecz UNICEF, wspierając jego mandat i przyczyniając się do promowania ochrony praw dzieci oraz ich dobrobytu zarówno na świecie, jak i w Polsce. Działania te są podejmowane w ścisłej współpracy z UNICEF.",
        cel_mini: "Komitet Narodowy wspiera UNICEF w promowaniu praw dzieci oraz ich dobrobytu w Polsce i na świecie. Działania te są zgodne z mandatem UNICEF i przyczyniają się do ochrony dzieci.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "dzieci"])
    },
    {
        id: 257,
        nazwa: "STOWARZYSZENIE POLSKICH WYNALAZCÓW I RACJONALIZATORÓW",
        krs: "96926",
        cel: "Podjęcie działań na rzecz rozwoju nauki, techniki, innowacji, edukacji, kultury, ekologii i gospodarki, obejmuje inicjowanie, prowadzenie i wspieranie różnych przedsięwzięć. Kluczowe jest również upowszechnianie osiągnięć wynalazczych polskich twórców oraz promowanie ich praw wyłącznych zarówno w kraju, jak i za granicą. W obszarze wiedzy technicznej istotne jest wsparcie i popularyzacja teorii oraz praktyki zarządzania projektami, szczególnie wśród młodzieży. Niezbędne jest również wprowadzanie zmian oraz współdziałanie w doskonaleniu przepisów prawnych, finansowych i podatkowych, które stymulują rozwój innowacji. Istotnym aspektem jest kształtowanie etyki korzystania z zasobów środowiska naturalnego zgodnie z zasadami zrównoważonego rozwoju, a także dbałość o dorobek i tradycje polskiej myśli naukowej i technicznej.",
        cel_mini: "Organizacja wspiera rozwój nauki, techniki, innowacji oraz edukacji, a także promuje osiągnięcia polskich wynalazców krajowo i międzynarodowo. Działania obejmują także kształtowanie etyki w wykorzystaniu zasobów środowiskowych, wspieranie wiedzy technicznej oraz inicjowanie zmian w prawie dla stymulacji innowacji.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "kultura", "innowacje", "nauka", "mlodziez", "edukacja", "ekologia"])
    },
    {
        id: 258,
        nazwa: "STOWARZYSZENIE POMOC OSOBOM POKRZYWDZONYM 'NADZIEJA'",
        krs: "711040",
        cel: "Organizacja zajmuje się szerokim zakresem działań wspierających osoby w trudnej sytuacji życiowej oraz promujących równość i rozwój społeczny. Udziela pomocy psychologicznej i prawnej ofiarom przestępstw, a także wspiera rodziny i osoby potrzebujące, w tym te korzystające z systemu pieczy zastępczej. Oferuje nieodpłatną pomoc prawną, zwiększając świadomość prawną społeczeństwa, prowadzi działalność charytatywną oraz wspiera osoby niepełnosprawne. Organizacja promuje zatrudnienie osób bezrobotnych, równość płci, a także aktywizację seniorów. Angażuje się w rozwój gospodarczy i wspólnot lokalnych, a także w edukację, w tym w działania na rzecz dzieci i młodzieży. Dodatkowo chroni prawa człowieka i swobody obywatelskie, oferując nieodpłatne poradnictwo obywatelskie oraz ochronę praw konsumentów. Wspiera również wolontariat i różnorodne inicjatywy społeczne.",
        cel_mini: "Organizacje podejmują działania na rzecz wsparcia osób pokrzywdzonych, rodzin w trudnej sytuacji życiowej oraz osób niepełnosprawnych, promując równość, aktywizację zawodową i ochronę praw człowieka. Dodatkowo prowadzą edukację, udzielają nieodpłatnej pomocy prawnej i obywatelskiej, a także wspierają rozwój lokalnych społeczności oraz działania wolontariackie.",
        siedziba_miejscowosc: "GORLICE",
        tagi: new Set(["psychologia", "wsparcie", "charytatywnosc", "prawo", "praca", "niepelnosprawnosc"])
    },
    {
        id: 259,
        nazwa: "STOWARZYSZENIE POMOCY 'LUDZIE LUDZIOM'",
        krs: "82040",
        cel: "Głównym celem stowarzyszenia jest wspieranie osób zagubionych we współczesnym świecie oraz inicjowanie pozytywnych zmian u osób wykluczonych społecznie lub zagrożonych wykluczeniem. Szczegółowe cele obejmują adaptację i readaptację społeczną tych osób, ich integrację oraz reintegrację społeczną i zawodową, rozwój alternatywnych metod rozwiązywania konfliktów przez propagowanie idei mediacji i sprawiedliwości naprawczej, przeciwdziałanie powrotom do przestępstwa, rozwijanie świadomości obywatelskiej i kulturowej oraz kształtowanie postaw prospołecznych i proekologicznych.",
        cel_mini: "Celem stowarzyszenia jest wsparcie osób zagubionych w nowoczesnym świecie oraz wprowadzanie pozytywnych zmian w grupach społecznie wykluczonych. Stowarzyszenie dąży do ich adaptacji, integracji, rozwoju metod rozwiązywania konfliktów, zapobiegania przestępczości oraz kształtowania postaw obywatelskich i proekologicznych.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["prawo", "spoleczenstwo", "pomoc"])
    },
    {
        id: 260,
        nazwa: "STOWARZYSZENIE POMOCY OSOBOM WYCHODZĄCYM NA WOLNOŚĆ 'EMAUS'",
        krs: "115110",
        cel: "Program zmierzający do zapobiegania powrotowi do przestępstwa osób uprzednio aresztowanych lub karanych skupia się na eliminowaniu przeszkód, takich jak brak środków do życia, mieszkania czy pracy. Obejmuje pomoc osobom opuszczającym zakłady karne i areszty śledcze w przystosowaniu do nowego życia, w tym wsparcie w znalezieniu zatrudnienia, mieszkania oraz pomoc prawną w kompletowaniu dokumentów, które są niezbędne do normalnego funkcjonowania na wolności. W Polsce prowadzone są domy pomocy Emaus, oferujące wsparcie dla osób bez środków do życia i zameldowania, które pragną oderwać się od kryminogennych warunków. Program kształtuje także pozytywne opinie wśród społeczności wobec osób karanych, które chcą zmienić swoje postępowanie. Realizowane są też działania resocjalizacyjne, rehabilitacyjne i terapeutyczne, które wspierają osoby pragnące zmienić sposób życia. Dodatkowo, program oferuje pomoc w wyżywieniu i odzieniu oraz w naprawie relacji rodzinnych osób opuszczających zakłady karne i areszty.",
        cel_mini: "Program ma na celu zapobieganie recydywie poprzez wsparcie osób opuszczających zakłady karne, oferując pomoc w znalezieniu pracy, mieszkania oraz wsparcie prawne. Dodatkowo, inicjatywy skupiają się na rehabilitacji, resocjalizacji oraz naprawie relacji rodzinnych, promując jednocześnie pozytywne postawy społeczne wobec tych osób.",
        siedziba_miejscowosc: "GDAŃSK",
        tagi: new Set(["karani", "prawo", "rehabilitacja"])
    },
    {
        id: 261,
        nazwa: "STOWARZYSZENIE POMOCY ŚWIADKOM I OFIAROM PRZESTĘPSTW 'CYRIACUS'",
        krs: "714278",
        cel: "Celem stowarzyszenia jest wspieranie osób poszkodowanych przestępstwami, które doznały uszczerbku na zdrowiu, strat materialnych lub naruszenia praw, a które nie otrzymały pomocy od organów wymiaru sprawiedliwości z powodu niewłaściwego działania lub zaniedbania. Stowarzyszenie dąży do promowania aktywności obywatelskiej w zakresie pomocy ofiarom oraz świadkom przestępstw, a także do jednoczenia osób zainteresowanych ochroną praw człowieka. Wspiera działania przeciwdziałające przemocy, broni praw obywatelskich, a także angażuje się w rozwój demokracji. Stowarzyszenie ułatwia ofiarom przestępstw kontakt z organami ochrony porządku prawnego oraz zapewnia pomoc prawną i psychologiczną, aby zapobiec powtórnej wiktymizacji. Oferuje także wsparcie finansowe oraz prawne dla osób pokrzywdzonych i ich rodzin, a jego działania obejmują przeciwdziałanie dodatkowym stratom wynikającym z niewłaściwego traktowania w postępowaniu karnym. Dodatkowo, stowarzyszenie składa wnioski do odpowiednich organów mające na celu zapobieganie przestępczości i wtórnej wiktymizacji.",
        cel_mini: "Celem stowarzyszenia jest wspieranie osób poszkodowanych przestępstwami oraz świadków, którzy nie otrzymali pomocy ze strony organów sprawiedliwości, poprzez różnorodne działania na rzecz ochrony praw obywatelskich i promowania sprawiedliwości. Organizacja dąży do wzmacniania społecznej aktywności oraz przeciwdziałania przemocy, oferując pomoc prawną, psychologiczną i finansową ofiarom oraz ich rodzinom.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "spoleczenstwo", "przestepstwa", "prawo", "przemoc"])
    },
    {
        id: 262,
        nazwa: "STOWARZYSZENIE POSTIS",
        krs: "17092",
        cel: "Celem działania stowarzyszenia jest niesienie pomocy rodzinom i osobom znajdującym się w trudnej sytuacji życiowej, a także wyrównywanie szans tych grup. Dodatkowo stowarzyszenie koncentruje się na przeciwdziałaniu patologiom społecznym.",
        cel_mini: "Celem stowarzyszenia jest udzielanie pomocy rodzinom i osobom znajdującym się w trudnej sytuacji życiowej, a także wyrównywanie ich szans i przeciwdziałanie patologiom społecznym.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["stowarzyszenie", "spoleczenstwo", "pomoc", "rodzina", "zdrowie", "rownosc"])
    },
    {
        id: 263,
        nazwa: "STOWARZYSZENIE PR I PROMOCJI UCZELNI POLSKICH 'PROM'",
        krs: "254654",
        cel: "Celem działań stowarzyszenia jest utrzymywanie i pogłębianie kontaktów zawodowych, a także wspieranie rozwoju członków poprzez podnoszenie kwalifikacji. Organizacja inspiruje i koordynuje współpracę uczelni w obszarze PR, promocji oraz wsparcia rozwoju studentów i absolwentów za granicą. Dąży do stworzenia efektywnego, zintegrowanego systemu promocji edukacji i nauki poza Polską oraz działa na rzecz rozwoju szkolnictwa wyższego we współpracy z KRASP i organami władzy publicznej. Ponadto, stowarzyszenie integruje środowisko akademickie, wzmacniając współpracę i wymianę doświadczeń między swoimi członkami.",
        cel_mini: "Celem działań jest rozwój zawodowy członków oraz promowanie uczelni i jej absolwentów na międzynarodowym rynku edukacyjnym. Współpraca z KRASP i organami władzy ma na celu stworzenie zintegrowanego systemu promocji edukacji oraz integrację środowiska akademickiego.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["edukacja", "integracja", "zawod"])
    },
    {
        id: 264,
        nazwa: "STOWARZYSZENIE PRAKTYKÓW RESTRUKTURYZACJI W POLSCE",
        krs: "391278",
        cel: "Cele stowarzyszenia koncentrują się na profesjonalnym wsparciu w obszarze restrukturyzacji przedsiębiorstw i instytucji oraz problematyce niewypłacalności i upadłości. Działania obejmują stworzenie platformy do dyskusji oraz wymiany doświadczeń wśród specjalistów, którzy zajmują się tymi kwestiami, w tym z zakresu prawa, finansów oraz zarządzania. Stowarzyszenie promuje wysokie standardy etyczne i zawodowe w praktykach zarządzania oraz metodologii procesów restrukturyzacyjnych i upadłościowych. Dodatkowo, organizacja dąży do popularyzacji najlepszych praktyk dotyczących restrukturyzacji wśród uczestników procesów legislacyjnych oraz akcji związanych z tymi tematami.",
        cel_mini: "Celem stowarzyszenia jest wspieranie profesjonalistów zajmujących się restrukturyzacją i niewypłacalnością przedsiębiorstw poprzez tworzenie forum do wymiany wiedzy, promowanie standardów etycznych oraz popularyzację najlepszych praktyk w tej dziedzinie. Organizacja ma na celu również współpracę ze środowiskiem prawniczym, finansowym oraz managementem.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["finanse", "gospodarka"])
    },
    {
        id: 265,
        nazwa: "STOWARZYSZENIE PROKURATORÓW 'LEX SUPER OMNIA'",
        krs: "660370",
        cel: "Celem działań prokuratury jest wspieranie zasad demokratycznego państwa prawnego poprzez zapewnienie jej niezależności, autonomii oraz rzetelności w podejmowaniu decyzji. Dąży się do usytuowania prokuratury jako organu wymiaru sprawiedliwości w Konstytucji Rzeczypospolitej Polskiej oraz do ochrony podmiotowości prokuratorów. Istotne jest tworzenie warunków do wykonywania zadań w sposób obiektywny i bezstronny, z poszanowaniem praw jednostki i interesu publicznego. Wspiera się także etyczne kształtowanie postaw prokuratorów, a także dbałość o ich honor i godność zawodową. Ochrona autorytetu prokuratury i rzetelne przedstawianie jej działalności w mediach są kluczowe, podobnie jak promowanie praworządności i znaczenia niezależności prokuratora w demokratycznym państwie prawnym. Działania te obejmują również popularyzację prawa.",
        cel_mini: "Działania mają na celu wspieranie demokratycznego państwa prawnego poprzez zapewnienie niezależności i autonomii prokuratury oraz promowanie etyki, rzetelności i praworządności w jej funkcjonowaniu. Kluczowe jest także kształtowanie pozytywnego wizerunku prokuratury oraz ochrona jej autorytetu w społeczeństwie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "etyka"])
    },
    {
        id: 266,
        nazwa: "STOWARZYSZENIE PROKURATORÓW RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "128590",
        cel: "Celem działania stowarzyszenia jest reprezentowanie środowiska prokuratorów przed władzami, urzędami oraz innymi stowarzyszeniami, a także aktywny udział w kształtowaniu prawa oraz umacnianiu praworządności. Dąży do wzmocnienia wzajemnych wpływów teorii i praktyki prawa, a także wymiany doświadczeń zawodowych. Organizacja skupia się na doskonaleniu wiedzy prawniczej oraz podnoszeniu kwalifikacji swoich członków, a także promuje właściwą postawę moralno-etyczną i zawodową prokuratorów.",
        cel_mini: "Celem działania stowarzyszenia jest reprezentowanie prokuratorów, wpływanie na kształt prawa oraz umacnianie praworządności poprzez wymianę doświadczeń i podnoszenie kwalifikacji. Dodatkowo dąży do rozwijania etyki zawodowej wśród swoich członków.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["prawo", "etyka"])
    },
    {
        id: 267,
        nazwa: "STOWARZYSZENIE PRZEWORSK - POWIAT BEZPIECZNY",
        krs: "230557",
        cel: "Celem stowarzyszenia jest podejmowanie istotnych działań społeczno-gospodarczych, które mają na celu promocję, rozwój oraz poprawę bezpieczeństwa lokalnej społeczności. Stowarzyszenie skupia osoby prawne i fizyczne, w tym przedstawicieli instytucji, władz samorządowych oraz działaczy z różnych dziedzin, zarówno krajowych, jak i zagranicznych, którzy wspierają jego działania. Organizacja inspiruje i realizuje projekty z zakresu integracji europejskiej, ochrony dóbr kultury, promocji zdrowia oraz aktywności społecznej, a także wspiera inicjatywy dotyczące ochrony środowiska, porządku publicznego i pomocy dla ofiar wypadków drogowych. Stowarzyszenie ma na celu również pomoc w przeciwdziałaniu bezrobociu, alkoholizmowi, narkomanii, przemocy i demoralizacji nieletnich, a jego działania są kontynuowane zgodnie z zapisami statutu.",
        cel_mini: "Celem stowarzyszenia jest promowanie rozwoju i poprawy bezpieczeństwa lokalnej społeczności poprzez angażowanie różnych przedstawicieli instytucji oraz wspieranie inicjatyw w obszarach społecznych, edukacyjnych, kulturowych i infrastrukturalnych. Dodatkowo, stowarzyszenie działa na rzecz ochrony dóbr kultury, wsparcia osób w trudnej sytuacji oraz przeciwdziałania problemom społecznym, takim jak bezrobocie czy przemoc.",
        siedziba_miejscowosc: "PRZEWORSK",
        tagi: new Set(["kultura", "bezpieczenstwo", "srodowisko", "spoleczenstwo"])
    },
    {
        id: 268,
        nazwa: "STOWARZYSZENIE PRZYJACIÓŁ INTEGRACJI",
        krs: "102130",
        cel: "Cele działania stowarzyszenia obejmują wsparcie osób niepełnosprawnych oraz innych osób wykluczonych społecznie poprzez promowanie ich inicjatyw, zwiększenie aktywności oraz integracji społecznej i zawodowej tych osób. Organizacja dąży do tworzenia warunków sprzyjających ich funkcjonowaniu w społeczeństwie oraz wspiera budownictwo dostępne. Udziela również pomocy osobom poszkodowanym w wypadkach, edukując społecznie w zakresie integracji oraz wspierając edukację na wszystkich szczeblach. Stowarzyszenie współpracuje z innymi organizacjami, inicjuje działania poprawiające sytuację osób niepełnosprawnych, promuje aktywność sportową, a także informuje o przysługujących im prawach. Angażuje się w dialog międzynarodowy w kwestiach równego traktowania oraz promuje aktywne obywatelstwo europejskie, koncentrując się na integracji osób niepełnosprawnych w życie społeczne i kulturalne.",
        cel_mini: "Celem stowarzyszenia jest wsparcie osób niepełnosprawnych oraz innych osób wykluczonych społecznie poprzez promowanie ich aktywności, integracji oraz edukacji. Stowarzyszenie dąży do tworzenia warunków sprzyjających pełnemu udziałowi tych osób w życiu społecznym i kulturalnym, wspierając także dostępność oraz równe traktowanie w różnych sferach życia.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "prawo", "edukacja", "niepelnosprawnosc", "praca"])
    },
    {
        id: 269,
        nazwa: "STOWARZYSZENIE PRZYJACIÓŁ MEDIÓW",
        krs: "422794",
        cel: "W ramach prowadzonej działalności organizacja angażuje się w wiele obszarów, takich jak informacja i media, szczególnie w internecie, oraz szerzenie wiedzy obywateli na temat życia publicznego i działań władz. Promuje postawy obywatelskie, społeczne i patriotyczne, a także dba o podtrzymywanie tradycji narodowej i rozwijanie świadomości narodowej oraz kulturowej. Wspiera także poszerzanie wiedzy prawnej obywateli oraz organizuje działalność charytatywną. Ponadto, promuje kulturę fizyczną i sport, działa na rzecz rodziny i ochrony praw dziecka, a także wspiera kulturę, sztukę oraz dziedzictwo narodowe, a działalność jej obejmuje również turystykę i krajoznawstwo.",
        cel_mini: "Organizacja zajmuje się szeroko pojętą działalnością informacyjną oraz upowszechniającą wiedzę obywatelską, promując postawy patriotyczne i społeczne, a także kulturalne tradycje. Dodatkowo wspiera rodzinę, macierzyństwo, działalność charytatywną oraz kulturę fizyczną i turystykę.",
        siedziba_miejscowosc: "SZCZECIN",
        tagi: new Set(["charytatywnosc", "prawo", "kultura", "sport", "informacje", "edukacja", "dzieci"])
    },
    {
        id: 270,
        nazwa: "STOWARZYSZENIE PSYCHOLOGÓW SĄDOWYCH W POLSCE",
        krs: "67196",
        cel: "Reprezentacja i ochrona praw osób z zaburzeniami psychicznymi oraz niepełnosprawnych intelektualnie, a także ofiar i świadków przestępstw, stanowią kluczowe obszary działania, obejmujące również małoletnich oraz osoby z ograniczeniami intelektualnymi. Równocześnie istotne jest podnoszenie poziomu bezpieczeństwa publicznego oraz współpraca z organami wymiaru sprawiedliwości w celu propagowania wiedzy z dziedziny psychologii klinicznej, sądowej i śledczej. Dodatkowo, reprezentacja oraz obrona interesów psychologów, zwłaszcza sądowych, jest niezbędna w kontekście integracji środowiska krajowego i zagranicznego. Kształtowanie właściwych postaw, wysokiego poziomu etyki i rzetelności zawodowej psychologów sądowych, a także doskonalenie ich wiedzy i umiejętności w zakresie zwalczania przestępczości, to kluczowe elementy w zapewnieniu skutecznej pomocy i wsparcia psychologicznego w trudnych sytuacjach życiowych.",
        cel_mini: "Reprezentacja i ochrona praw osób z zaburzeniami psychicznymi oraz niepełnosprawnych intelektualnie, w tym ofiar i świadków przestępstw, jest kluczowa dla ich wsparcia. Współpraca z organami wymiaru sprawiedliwości oraz kształtowanie etycznych postaw wśród psychologów sądowych przyczynia się do podnoszenia bezpieczeństwa publicznego i doskonalenia ich umiejętności zawodowych.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["niepelnosprawnosc", "zdrowie", "bezpieczenstwo", "etyka"])
    },
    {
        id: 271,
        nazwa: "STOWARZYSZENIE RANNYCH I POSZKODOWANYCH W MISJACH POZA GRANICAMI KRAJU",
        krs: "304771",
        cel: "Stowarzyszenie koncentruje swoje działania na poprawie życia rannych i poszkodowanych w misjach poza granicami kraju, a także ich rodzin oraz rodzin żołnierzy, funkcjonariuszy i pracowników cywilnych poległych w tych działaniach. Do jego zadań należy reprezentowanie i ochrona interesów członków wobec władz państwowych oraz samorządowych, a także wsparcie socjalno-bytowe dla rodzin poszkodowanych. Stowarzyszenie dąży do integracji środowiska rannych oraz do wyjaśniania społeczeństwu roli, jaką uczestnicy misji mają w zapewnieniu pokoju i bezpieczeństwa na świecie. Wspiera także popularyzację dotychczasowych osiągnięć Polski na arenie międzynarodowej w kontekście misji pokojowych oraz współpracuje z resortami i innymi organami administracji, a także międzynarodowymi organizacjami o podobnych celach.",
        cel_mini: "Stowarzyszenie działa na rzecz poprawy życia rannych i poszkodowanych w działaniach poza granicami państwa, obejmując pomoc socjalno-bytową, reprezentację oraz integrację środowiska. Ponadto promuje działania mające na celu zapewnienie pokoju, bezpieczeństwa oraz współpracy międzynarodowej.",
        siedziba_miejscowosc: "SZCZECIN",
        tagi: new Set(["prawo", "integracja", "wsparcie", "pomoc"])
    },
    {
        id: 272,
        nazwa: "STOWARZYSZENIE REFERENDARZY SĄDOWYCH LEX IUSTA",
        krs: "711458",
        cel: "Celem działalności na rzecz grupy zawodowej referendarzy sądowych oraz starszych referendarzy sądowych w Polsce jest wzmocnienie ich pozycji ustrojowej, rozwój instytucji referendarza, oraz poszerzanie kompetencji zawodowych. Kluczowe działania obejmują zapewnienie odpowiedniej liczby referendarzy do realizacji zadań państwowych, poprawę możliwości awansu zawodowego przy poszanowaniu obowiązujących przepisów, a także dążenie do powołania samorządu zawodowego. Ważnym aspektem jest integracja środowiska referendarzy, rozwiązywanie ich problemów zawodowych oraz stworzenie platformy do współpracy i wymiany poglądów.",
        cel_mini: "Organizacja działa na rzecz referendarzy sądowych, koncentrując się na wzmocnieniu ich pozycji zawodowej, rozwoju ich kompetencji oraz zapewnieniu odpowiedniej liczby członków korpusu. Dąży również do integracji środowiska referendarzy, powołania samorządu zawodowego oraz stworzenia platformy do współpracy i wymiany poglądów.",
        siedziba_miejscowosc: "KOZIELEC",
        tagi: new Set(["prawo", "integracja", "zawod"])
    },
    {
        id: 273,
        nazwa: "STOWARZYSZENIE REFERENDARZY SĄDOWYCH RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "238175",
        cel: "Celem działań podejmowanych przez członków jest podnoszenie zarówno kwalifikacji zawodowych, jak i ogólnych, co przyczyni się do poprawy wizerunku prawników w oczach społeczeństwa. Istotnym elementem jest wprowadzenie nowoczesnych rozwiązań inspirowanych zagranicznymi systemami prawnymi oraz promowanie innowacji w prawodawstwie, co pozwoli na poprawę jakości uchwał i ich stosowania. Dodatkowo, organizowane są różnorodne formy dokształcania, by zachęcić członków do trwałego współzawodnictwa w podnoszeniu swoich umiejętności. Kluczowe jest także integrowanie członków w celu efektywnej realizacji przyjętych zadań oraz promowanie łatwiejszego dostępu obywateli do wymiaru sprawiedliwości i pomocy prawnej.",
        cel_mini: "Celem działań jest podnoszenie kwalifikacji zawodowych prawników oraz poprawa ich wizerunku społecznego, poprzez promowanie nowoczesnych rozwiązań i indywidualnych form dokształcania. Dodatkowo, działania te mają na celu integrację członków oraz poprawę dostępu obywateli do wymiaru sprawiedliwości.",
        siedziba_miejscowosc: "GDAŃSK",
        tagi: new Set(["prawo", "kwalifikacje"])
    },
    {
        id: 274,
        nazwa: "STOWARZYSZENIE RESTART",
        krs: "820104",
        cel: "Organizacja zajmuje się szerokim zakresem działań mających na celu pomoc społeczną, w tym wsparcie rodzin i osób w trudnych sytuacjach życiowych oraz wyrównywanie ich szans. Wśród jej działań znajduje się wspieranie rodziny i systemu pieczy zastępczej, oferowanie nieodpłatnej pomocy prawnej oraz zwiększanie świadomości prawnej społeczności. Organizacja angażuje się także w działalność na rzecz integracji i reintegracji zawodowej osób zagrożonych wykluczeniem, działalność charytatywną oraz podtrzymywanie tradycji narodowej i rozwój świadomości kulturowej. Zajmuje się również kwestiami mniejszości narodowych, integracją cudzoziemców, promocją zdrowia i ochroną osób niepełnosprawnych. Dodatkowo, organizacja wspiera zatrudnienie osób bez pracy oraz pracujących w wieku emerytalnym, promując równość płci i aktywizację społeczną. Wspiera także rozwój lokalnych społeczności, nauki oraz edukacji, a także propaguje kulturę fizyczną, ekologię oraz turystykę, dbając przy tym o bezpieczeństwo publiczne.",
        cel_mini: "Organizacja zajmuje się wsparciem osób i rodzin w trudnej sytuacji życiowej, integracją społeczną i zawodową, oraz ochroną zdrowia i środowiska. Dodatkowo promuje kulturę, tradycję, równość oraz działalność charytatywną i edukacyjną w społeczności lokalnej.",
        siedziba_miejscowosc: "RACIBÓRZ",
        tagi: new Set(["wsparcie", "spoleczenstwo", "charytatywnosc", "prawo", "pomoc", "niepelnosprawnosc", "zdrowie"])
    },
    {
        id: 275,
        nazwa: "STOWARZYSZENIE RODZIN POLEGŁYCH ŻOŁNIERZY 'PAMIĘĆ I PRZYSZŁOŚĆ'",
        krs: "416717",
        cel: "Celem działalności stowarzyszenia jest wsparcie rodzin poległych żołnierzy poprzez udzielanie pomocy materialnej i niematerialnej, współpracę z odpowiednimi resortami, wspieranie rozwoju dzieci z tych rodzin oraz promowanie integracji i wymiany doświadczeń. Organizacja dąży do uhonorowania pamięci poległych, zachęcania rodzin do aktywnego udziału w działaniach na rzecz wspólnego dobra, a także pozyskiwania funduszy na swoją działalność. Stowarzyszenie angażuje się w poprawę jakości życia rodzin, prowadzi działalność medialną, reprezentuje ich interesy oraz buduje świadomość społeczną na temat ich problemów. Dodatkowo, organizuje pomoc w integracji społecznej, promuje bezpieczeństwo kraju oraz utrzymuje więzi z jednostkami wojskowymi. Zajmuje się również zapewnieniem pomocy medycznej i rehabilitacyjnej, a także propaguje zdrowy styl życia i sportowe współzawodnictwo jako formy terapii.",
        cel_mini: "Stowarzyszenie działa na rzecz rodzin poległych żołnierzy, oferując wsparcie socjalne, organizując pomoc medyczną oraz integrujące wydarzenia, a także promując zdrowy styl życia i aktywność fizyczną. Ponadto współpracuje z różnymi instytucjami, dąży do uhonorowania poległych oraz wymiany doświadczeń w celu poprawy jakości życia tych rodzin.",
        siedziba_miejscowosc: "KOZY",
        tagi: new Set(["dzieci", "wojsko", "spoleczenstwo", "pomoc"])
    },
    {
        id: 276,
        nazwa: "STOWARZYSZENIE RODZIN ŻOŁNIERZY, KTÓRZY ZGINĘLI W KATASTROFACH LOTNICZYCH - 'W CIENIU ORŁA'",
        krs: "327242",
        cel: "Celem stowarzyszenia jest niesienie pomocy rodzinom żołnierzy, którzy zginęli w katastrofach lotniczych podczas wykonywania obowiązków służbowych, oraz integracja tych rodzin. Organizacja prowadzi działalność charytatywną na rzecz ofiar katastrof lotniczych oraz konfliktów zbrojnych, zarówno w kraju, jak i za granicą. Ponadto stowarzyszenie ma na celu przedstawianie władzom wojskowym oraz organom administracji państwowej i samorządowej problemów wdów i dzieci po tragicznie zmarłych żołnierzach, a także proponowanie rozwiązań tych trudności.",
        cel_mini: "Celem stowarzyszenia jest pomoc i integracja rodzin żołnierzy, którzy zginęli w katastrofach lotniczych, oraz działalność charytatywna na rzecz ofiar katastrof i konfliktów zbrojnych. Dodatkowo, stowarzyszenie reprezentuje problemy wdów i dzieci tragicznie zmarłych żołnierzy przed władzami wojskowymi oraz administracją państwową.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["charytatywnosc", "wojsko"])
    },
    {
        id: 277,
        nazwa: "STOWARZYSZENIE ,,ROZWÓJ GMINY BISZCZA''",
        krs: "509003",
        cel: "Celem stowarzyszenia jest wspieranie i promowanie zrównoważonego rozwoju społecznego, kulturalnego i gospodarczego gminy, a także podejmowanie działań na rzecz rozwoju gospodarki i przedsiębiorczości. Stowarzyszenie koncentruje się na promowaniu nowych technologii oraz integracji lokalnej społeczności. Ważnym aspektem działalności jest wspieranie demokracji i budowanie społeczeństwa obywatelskiego, a także działania na rzecz integracji europejskiej oraz międzynarodowej współpracy. Organizacja sprzyja modernizacji wsi i rolnictwa, rozwija kulturę, sport oraz edukację dzieci i młodzieży. Działa na rzecz edukacji, profilaktyki problemów społecznych, przeciwdziała wykluczeniu i dyskryminacji, a także wspiera inicjatywy ograniczające bezrobocie oraz integrację osób niepełnosprawnych. Stowarzyszenie promuje świadomość ekologiczną, prowadzi działania krajoznawcze i turystyczne, organizuje wypoczynek oraz inne formy aktywności, a także angażuje się w ochronę zdrowia oraz kształtowanie postaw patriotycznych i obywatelskich.",
        cel_mini: "Celem stowarzyszenia jest wsparcie zrównoważonego rozwoju gminy poprzez działania na rzecz społeczności, kultury, gospodarki oraz integracji lokalnej, a także promowanie edukacji, zdrowia, ekologii i aktywności obywatelskiej. Dodatkowo, stowarzyszenie angażuje się w działania na rzecz integracji europejskiej oraz ochrony dziedzictwa przyrodniczego.",
        siedziba_miejscowosc: "BISZCZA",
        tagi: new Set(["spoleczenstwo", "edukacja", "sport", "gospodarka", "kultura", "ekologia"])
    },
    {
        id: 278,
        nazwa: "STOWARZYSZENIE RZECZNIKÓW KONSUMENTÓW",
        krs: "326856",
        cel: "Działania na rzecz ochrony interesów konsumentów obejmują propagowanie postaw prokonsumenckich, opiniowanie oraz proponowanie zmian regulacji prawnych dotyczących polityki konsumenckiej w Polsce i UE. Wspierane są powiatowe rzeczniki konsumentów w realizacji ich zadań, a także prowadzi się edukację w zakresie ochrony praw konsumentów. Organizowane są różnorodne wydarzenia, takie jak szkolenia, seminaria czy dyskusje, które mają na celu poszerzenie wiedzy na temat ochrony praw konsumentów. Stowarzyszenie udziela pomocy prawnej, reprezentuje swoich członków w relacjach z władzami oraz organizacjami społecznymi, a także oferuje wsparcie socjalno-bytowe. Prowadzone są działania informacyjne i wydawnicze, a także powoływane zespoły zadaniowe do realizacji celów statutowych. Współpraca z przedsiębiorcami oraz organizacjami ma na celu tworzenie przyjaznego klimatu dla kwestii konsumenckich. Stowarzyszenie wydaje ekspertyzy dotyczące ochrony i bezpieczeństwa konsumentów, dąży do ujednolicenia procedur interwencyjnych, a także wymienia informacje o naruszeniach praw konsumentów, współpracując jednocześnie z Urzędem Ochrony Konkurencji i Konsumentów oraz innymi instytucjami w zakresie realizacji celów statutowych.",
        cel_mini: "Organizacja działa na rzecz ochrony interesów konsumentów, oferując edukację, pomoc prawną oraz współpracując z instytucjami i przedsiębiorcami w celu poprawy polityki konsumenckiej. W ramach działań prowadzi opinie, szkolenia oraz organizuje interwencje, a także podejmuje kroki w celu ujednolicenia procedur ochrony praw konsumentów.",
        siedziba_miejscowosc: "TARNÓW",
        tagi: new Set(["prawo", "konsumenci"])
    },
    {
        id: 279,
        nazwa: "STOWARZYSZENIE SAMOPOMOCOWE 'ABAKUS'",
        krs: "207222",
        cel: "Zadania związane z zapewnieniem porządku i bezpieczeństwa publicznego oraz przeciwdziałaniem patologiom społecznym obejmują pomoc w oderwaniu się od działalności przestępczej, rozwijanie społecznie pożytecznych i satysfakcjonujących zainteresowań, a także profilaktykę poprzez współpracę z zakładami karnymi, aresztami śledczymi oraz innymi instytucjami, takimi jak przychodnie odwykowe dla nieletnich, szkoły i domy poprawcze. Ważnym elementem jest także oferowanie wsparcia w postaci tymczasowego miejsca pobytu w hostelu dla osób poszukujących zatrudnienia lub terapii. Dodatkowo, istotna jest ochrona i promocja zdrowia, w tym kształtowanie trwałych postanowień o całkowitym powstrzymaniu się od spożywania alkoholi i środków odurzających.",
        cel_mini: "Zadania obejmują zapewnienie porządku i bezpieczeństwa publicznego poprzez pomoc w oderwaniu się od działalności przestępczej, rozwijanie społecznych zainteresowań oraz współpracę z instytucjami wychowawczymi i terapeutycznymi. Dodatkowo, promują zdrowie poprzez dążenie do całkowitego powstrzymania się od alkoholu i środków odurzających.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["zdrowie", "bezpieczenstwo", "pomoc"])
    },
    {
        id: 280,
        nazwa: "STOWARZYSZENIE SAMOTNI RODZICE",
        krs: "971853",
        cel: "Cele stowarzyszenia obejmują działania na rzecz zmian legislacyjnych, które przywrócą samotnym rodzicom możliwość rozliczania podatku dochodowego z dzieckiem oraz działania na rzecz aktualizacji przepisów prawnych nie uwzględniających rodzin niepełnych. Stowarzyszenie angażuje się w informowanie o nierównym traktowaniu samotnych rodziców i przeciwdziałaniu dyskryminacji ze względu na stan cywilny, a także promuje równouprawnienie rodzin niepełnych oraz wspiera dzieci z takich rodzin. Działa charytatywnie na rzecz młodzieży i dzieci potrzebujących pomocy, współpracując z władzami lokalnymi, szkołami, organizacjami społecznymi oraz innymi instytucjami dla dobra dzieci i młodzieży. Stowarzyszenie oferuje pomoc rodzicom i dzieciom, organizuje szkolenia, pozyskuje fundusze od sponsorów oraz stara się o dotacje celowe. Ponadto, koncentruje się na pielęgnowaniu tradycji narodowej i rozwoju świadomości obywatelskiej oraz kulturowej, integracji dzieci, młodzieży i lokalnej społeczności, a także na zakupie niezbędnych pomocy naukowych. Dodatkowo, stowarzyszenie poszerza wiedzę z różnych dziedzin i uczestniczy w opracowywaniu projektów finansowanych przez Unię Europejską oraz inne źródła zewnętrzne.",
        cel_mini: "Celem stowarzyszenia jest walka o zmiany legislacyjne na rzecz rodzin niepełnych oraz wsparcie i integracja dzieci i rodziców z takich rodzin poprzez działania informacyjne, edukacyjne i dobroczynne. Stowarzyszenie dąży również do promowania równości oraz współpracy z innymi instytucjami w celu poprawy jakości życia osób potrzebujących.",
        siedziba_miejscowosc: "GÓRKI",
        tagi: new Set(["prawo", "rodzina", "spoleczenstwo", "dzieci"])
    },
    {
        id: 281,
        nazwa: "STOWARZYSZENIE SĘDZIÓW THEMIS",
        krs: "359066",
        cel: "Celem działań przedstawionych w dokumencie jest umacnianie niezależności sądów oraz sędziów, co jest istotne dla pełnej realizacji obywatelskiego prawa do sądu. Podkreślono również konieczność ochrony zasad porządku publicznego, demokracji i praw człowieka, a także promowania kultury prawnej w społeczeństwie poprzez inicjatywy społeczne i obywatelskie. Zawarte są postulaty dotyczące wyrażania stanowisk środowiska sędziowskiego oraz podnoszenia świadomości społecznej w zakresie prawa. Dodatkowo, wskazano na znaczenie doskonalenia wiedzy prawniczej i kwalifikacji członków stowarzyszenia, a także integracji europejskiej, współpracy między organizacjami prawniczymi i dążenia do wspólnych celów w ramach środowiska sędziowskiego. Na zakończenie, ważne jest upowszechnianie wiedzy na temat roli i zadań sądów oraz ich pracowników.",
        cel_mini: "Celem działań jest umacnianie niezależności sądów, ochrona zasad demokracji oraz prawa człowieka, a także podnoszenie kultury prawnej w społeczeństwie. Dodatkowo, stowarzyszenie dąży do integracji środowiska sędziowskiego oraz rozwoju współpracy z organizacjami prawniczymi w Europie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "demokracja", "bezpieczenstwo"])
    },
    {
        id: 282,
        nazwa: "STOWARZYSZENIE SĘDZIÓW POLSKICH 'IUSTITIA'",
        krs: "90038",
        cel: "Podstawowe cele stowarzyszenia obejmują umacnianie niezależności sądów i sędziów, promowanie oraz ochronę wolności i praw obywatelskich, a także podejmowanie działań na rzecz rozwoju demokracji. Działalność edukacyjna i kulturalna, szczególnie w zakresie świadomości prawnej i obywatelskiej, stanowi kluczowy element misji stowarzyszenia. Ponadto, stowarzyszenie aktywnie współdziała w pracach legislacyjnych, reprezentując interesy sędziów oraz ich środowiska. Współpraca z krajowymi i międzynarodowymi organizacjami prawniczymi, a także wsparcie dla członków w podnoszeniu kwalifikacji zawodowych i zdobywaniu niezbędnej wiedzy, są istotnymi aspektami jego działalności. Ostatecznie, jednym z priorytetów jest integracja środowiska sędziowskiego.",
        cel_mini: "Cele stowarzyszenia obejmują umacnianie niezależności sądów i sędziów, ochronę praw obywatelskich oraz rozwój demokracji. Dodatkowo, stowarzyszenie prowadzi działalność edukacyjną, wspiera sędziów w podnoszeniu kwalifikacji i współpracuje z krajowymi oraz międzynarodowymi organizacjami prawniczymi.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "kwalifikacje", "demokracja", "wspolpraca"])
    },
    {
        id: 283,
        nazwa: "STOWARZYSZENIE SĘDZIÓW RODZINNYCH 'PRO FAMILIA'",
        krs: "505991",
        cel: "Celem działalności środowiska sędziowskiego jest reprezentowanie jego interesów zawodowych i społecznych, a także umacnianie niezawisłości sędziów oraz ich autorytetu w społeczeństwie. Organizacje sędziowskie dążą do wdrażania najwyższych standardów etyki zawodowej, a także podnoszenia jakości sądownictwa rodzinnego i poprawy jego wizerunku. W ramach swoich działań zwracają uwagę na realizację praw człowieka oraz wolności obywatelskich, w tym praw dzieci, w praktyce sądowej. Organizacje te analizują obowiązujące prawo, wspierają inicjatywy legislacyjne mające na celu poprawę jakości prawa materialnego i procesowego w obszarze sądownictwa rodzinnego oraz współpracują z krajowymi i międzynarodowymi organizacjami prawniczymi, w szczególności ze stowarzyszeniami sędziów. Dodatkowo, podejmują działania mające na celu upowszechnianie i pogłębianie świadomości prawnej społeczeństwa, ze szczególnym uwzględnieniem kwestii dotyczących rodziny i dzieci.",
        cel_mini: "Zadania dotyczą reprezentowania interesów środowiska sędziowskiego, umacniania niezawisłości sędziów oraz wprowadzania standardów etyki zawodowej. Skupiają się także na poprawie jakości sądownictwa rodzinnego, realizacji praw człowieka, współpracy z organizacjami prawnymi oraz zwiększaniu świadomości prawnej społeczeństwa.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "wspolpraca", "etyka"])
    },
    {
        id: 284,
        nazwa: "STOWARZYSZENIE SĘDZIÓW RODZINNYCH W POLSCE ASSOCIATION OF FAMILY JUDGES IN POLAND",
        krs: "143646",
        cel: "Celem działań w obszarze sądownictwa rodzinnego jest przede wszystkim umacnianie niezależności sądów oraz sędziów, a także ochrona ich autorytetu. Istotnym aspektem jest współpraca z organizacjami rządowymi i pozarządowymi w zakresie zapobiegania demoralizacji i przestępczości nieletnich oraz wspierania rodziny w jej funkcjach opiekuńczo-wychowawczych. Kluczowe jest również doskonalenie kwalifikacji zawodowych sędziów oraz osób współpracujących z sądownictwem. Promowane są wymiany doświadczeń z zagranicą, a także wsparcie uzdolnionej młodzieży z rodzin zagrożonych patologią społeczną. Działania obejmują kształtowanie opinii publicznej oraz reprezentowanie interesów środowiska sędziowskiego, a także współudział w pracach legislacyjnych z organami ustawodawczymi. Istotna jest współpraca z mediami w celach edukacyjnych oraz integracja środowiska sędziów rodzinnych, przy równoczesnym propagowaniu wiedzy z zakresu prawa rodzinnego i opiekuńczego we współpracy z uczelniami krajowymi i zagranicznymi.",
        cel_mini: "Celem działań jest umacnianie niezależności sądów rodzinnych i sędziów, wspieranie rodzin oraz zwalczanie demoralizacji nieletnich przez współpracę z różnymi organizacjami. Dodatkowo, istotne jest doskonalenie kompetencji zawodowych sędziów, propagowanie wiedzy z zakresu prawa rodzinnego oraz współpraca z mediami w celach edukacyjnych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "mlodziez"])
    },
    {
        id: 285,
        nazwa: "STOWARZYSZENIE SĘDZIÓW  UPADŁOŚCIOWYCH I RESTRUKTURYZACYJNYCH",
        krs: "598432",
        cel: "Organizacja ma na celu reprezentowanie środowiska sędziów orzekających w sprawach restrukturyzacyjnych i upadłościowych, ułatwiając wymianę informacji oraz doświadczeń w tych dziedzinach. Dąży do integracji sędziów oraz kształtowania pozytywnej opinii publicznej na temat postępowań restrukturyzacyjnych i upadłościowych. Współpracuje z władzą ustawodawczą oraz innymi organami w cechach legislacyjnych zgodnych z celami stowarzyszenia. Ponadto prowadzi działalność edukacyjną i kształtuje dobry wizerunek sądów zajmujących się tymi sprawami.",
        cel_mini: "Celem działania stowarzyszenia jest reprezentowanie i integracja środowiska sędziów zajmujących się sprawami restrukturyzacyjnymi i upadłościowymi, a także promowanie wiedzy i dobrego wizerunku tych instytucji poprzez współpracę z władzami legislacyjnymi oraz edukację. Stowarzyszenie ma również na celu wymianę informacji i doświadczeń w zakresie praktyki orzeczniczej oraz kształtowanie opinii publicznej na temat postępowań w tej dziedzinie.",
        siedziba_miejscowosc: "KRAKÓW",
        tagi: new Set(["prawo", "integracja", "gospodarka"])
    },
    {
        id: 286,
        nazwa: "STOWARZYSZENIE SOLIDARNOŚCI GLOBALNEJ",
        krs: "287718",
        cel: "Zasadniczym celem stowarzyszenia jest niesienie pomocy osobom w potrzebie poprzez działalność misyjną, rozwojową, edukacyjną oraz humanitarną, a także działania służące ochronie godności życia ludzkiego od poczęcia do naturalnej śmierci. W ramach tego celu stowarzyszenie podejmuje szereg zadań, takich jak promowanie poszanowania godności osoby oraz miłości bliźniego, kształtowanie postaw solidarności z innymi ludźmi bez względu na różnice, ochrona wolności i praw człowieka oraz wspieranie rozwoju demokracji. Stowarzyszenie angażuje się także w pomoc rozwojową i humanitarną, zarówno w kraju, jak i za granicą, wspiera Polonię oraz organizuje wolontariat. Dodatkowo prowadzi akcje informacyjne uświadamiające społeczeństwo o ludzkich problemach, wspomaga rozwój wspólnot lokalnych i integrację europejską, a także zbiera informacje dotyczące potrzeb pomocy. Stowarzyszenie udziela pomocy finansowej i materialnej instytucjom na terenach misyjnych, organizuje pomoc dla ofiar katastrof i uchodźców, oraz promuje Polskę za granicą. Zajmuje się także nauką, edukacją, wspieraniem kultury fizycznej, a także ochroną i promocją zdrowia oraz działalnością na rzecz osób niepełnosprawnych, zgodnie z postanowieniami zawartymi w statucie.",
        cel_mini: "Celem stowarzyszenia jest niesienie pomocy osobom potrzebującym poprzez działalność misyjną, edukacyjną, humanitarną oraz ochronę godności życia. Do jego zadań należy promowanie poszanowania godności człowieka, solidarności, ochrony praw człowieka, oraz wsparcie dla Polonii i rozwój lokalnych wspólnot.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["spoleczenstwo", "prawo", "integracja", "wolontariat", "pomoc", "edukacja", "humanitaryzm"])
    },
    {
        id: 287,
        nazwa: "STOWARZYSZENIE TŁUMACZY POLSKICH",
        krs: "125040",
        cel: "Organizacja tłumaczy ma na celu integrację i wsparcie środowiska tłumaczkiego, reprezentując polskich tłumaczy w kraju i za granicą oraz w organizacjach międzynarodowych. Kluczowym zadaniem jest również podnoszenie prestiżu zawodu, przestrzeganie zasad etyki zawodowej oraz ochrona praw zawodowych, moralnych i materialnych tłumaczy zgodnie z programowymi zapisami uchwalonymi przez Walny Zjazd STP. Współpraca w kształtowaniu i przestrzeganiu polskich oraz międzynarodowych przepisów prawa autorskiego to kolejny istotny element działalności. Organizacja dba o wysoki poziom tłumaczeń realizowanych przez swoich członków, wspierając ich w podnoszeniu kwalifikacji i umiejętności zawodowych. Ponadto, zapewnia opiekę nad adeptami sztuki tłumaczenia oraz prowadzi działalność pożytku publicznego, angażując się w społecznie użyteczne projekty w sferze zadań publicznych.",
        cel_mini: "Celem organizacji jest integracja i wsparcie środowiska tłumaczy, reprezentowanie ich interesów oraz podnoszenie prestiżu zawodu poprzez przestrzeganie zasad etyki, ochrona praw oraz dbałość o jakość tłumaczeń. Organizacja angażuje się również w kształtowanie przepisów prawa autorskiego, opiekę nad adeptami tłumaczenia oraz działalność na rzecz społeczności publicznych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wsparcie", "tlumacze"])
    },
    {
        id: 288,
        nazwa: "STOWARZYSZENIE TWÓRCZEJ RESOCJALIZACJI 'PO-MOST'",
        krs: "560109",
        cel: "Dążenie do doskonalenia systemu organizacyjnego służby kuratorskiej obejmuje tworzenie profesjonalnych procedur wykonawczych oraz efektywne realizowanie orzeczeń sądowych zgodnie z polskim prawem. Kluczowym elementem jest współpraca z rządowymi i pozarządowymi organizacjami, instytucjami oraz fundacjami, mającymi na celu pomoc w readaptacji skazanych oraz wsparcie ich rodzin. Kładzie się także nacisk na rozwój zawodowy kuratorów sądowych, promowanie dobrych praktyk i osiągnięć w dziedzinie pedagogiki i resocjalizacji oraz podnoszenie autorytetu zawodowego tej funkcji. W działaniach uwzględnia się również tworzenie polityki społecznej, która wyrównuje szanse osób i rodzin w trudnej sytuacji życiowej, prowadzenie działalności informacyjno-edukacyjnej z zakresu probacji oraz profilaktyki społecznej, a także integrację osób zagrożonych wykluczeniem społecznym. Dodatkowo, inicjowane są lokalne projekty aktywizujące różne środowiska, z uwzględnieniem zdrowia publicznego i profilaktyki uzależnień. Współpraca z ośrodkami naukowymi oraz przeciwdziałanie przemocy w życiu społecznym stanowią integralne elementy misji kuratorskiej w kontekście resocjalizacji i postpenitencjarnej pomocy dla skazanych oraz ich rodzin.",
        cel_mini: "Dążenie do doskonalenia systemu kuratorskiego obejmuje tworzenie profesjonalnych procedur oraz efektywne wykonywanie orzeczeń sądowych przy współpracy z różnymi organizacjami w celu wspierania readaptacji osób skazanych. Kluczowe działania koncentrują się na integracji kuratorów, podnoszeniu prestiżu zawodu oraz przeciwdziałaniu wykluczeniu społecznemu poprzez edukację i promocję zdrowia.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["prawo", "spoleczenstwo", "pomoc"])
    },
    {
        id: 289,
        nazwa: "STOWARZYSZENIE 'WCZORAJ, DZISIAJ, JUTRO'",
        krs: "221823",
        cel: "Stowarzyszenie angażuje się w szerokie wsparcie, rozwój i promocję sportu oraz kultury fizycznej, a także w organizację współzawodnictwa sportowego. Dąży do rozwoju profilaktyki prozdrowotnej, edukacji oraz aktywizacji społeczeństwa w zakresie sportu i zdrowego stylu życia, uwzględniając zasady fair play zarówno w sporcie, jak i codziennym życiu. Podejmuje działania promujące autorytety sportowe oraz właściwe wzorce społeczne, a także kształtuje zdrowe nawyki żywieniowe. Stowarzyszenie działa na rzecz międzynarodowej reprezentacji Polski oraz promuje kraj w Europie i na świecie, a także chroni zdrowie i wspiera rozwój społeczny we współpracy z administracją rządową. Angażuje się w pomoc społeczną, przeciwdziałanie wykluczeniu społecznemu, uzależnieniom i wspiera osoby z niepełnosprawnościami. Organizacja jest także aktywna w zakresie edukacji, ochrony dziedzictwa przyrodniczego, promocji turystyki oraz bezpieczeństwa publicznego, a także działa na rzecz równości praw, ochrony praw człowieka oraz rodziny, macierzyństwa i praw dziecka.",
        cel_mini: "Organizacja i wsparcie działalności sportowej oraz kulturalnej, w tym aktywizacja zdrowego stylu życia i edukacja prozdrowotna, stanowią kluczowe cele. Dodatkowo, działanie na rzecz społecznej integracji, ochrony praw człowieka oraz rozwoju edukacji i przedsiębiorczości przyczyniają się do poprawy jakości życia w społecznościach lokalnych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["integracja", "sport", "pomoc", "edukacja", "zdrowie"])
    },
    {
        id: 290,
        nazwa: "STOWARZYSZENIE WĘDKARSKIE 'PRZYSZOWSKA BANDERA'",
        krs: "924970",
        cel: "Celem stowarzyszenia jest stworzenie odpowiednich warunków do amatorskiego uprawiania wędkarstwa oraz działania na rzecz poprawy stanu środowiska naturalnego, ze szczególnym uwzględnieniem ochrony i racjonalnego użytkowania wód.",
        cel_mini: "Celem stowarzyszenia jest stworzenie warunków do amatorskiego wędkowania oraz działania na rzecz poprawy stanu środowiska naturalnego, w tym ochrony i racjonalnego użytkowania wód.",
        siedziba_miejscowosc: "PRZYSZÓW",
        tagi: new Set(["srodowisko", "wedkarstwo"])
    },
    {
        id: 291,
        nazwa: "STOWARZYSZENIE WIN - WOLNOŚĆ I NIEZAWISŁOŚĆ ZRZESZENIE OFICERÓW I ŻOŁNIERZY ODDZIAŁÓW PARTYZANCKICH I KONSPIRACYJNYCH KRAJOWA KOMENDA GŁÓWNA WIN LATA 1945-1963 WARSZAWA",
        krs: "719306",
        cel: "Celem organizacji jest troska o dobro kraju oraz obrona godności i dobrego imienia niepodległościowej organizacji WIN, działającej w okresie terroru komunistycznego. Organizatorem działań jest utrzymanie więzi koleżeńskich między żyjącymi w kraju i za granicą oficerami oraz żołnierzami WIN, a jednostkami czynnymi w służbie wojskowej. Podejmowane są także działania mające na celu badanie, dokumentowanie i opracowanie historyczne działalności WIN, jej komend terenowych oraz poszczególnych żołnierzy. Wsparcie dla inicjatyw ustawodawczych ma na celu przywrócenie WIN statusu organizacji niepodległościowej oraz unieważnienie wyroków skazujących wydanych przez sądy wojskowe wobec jej członków. Organizacja współpracuje również z innymi stowarzyszeniami, które zrzeszają członków organizacji niepodległościowych z okresu okupacji oraz terroru komunistycznego.",
        cel_mini: "Celem organizacji jest troska o dobro kraju oraz obrona godności i dobrego imienia działaczy Win, a także utrzymanie więzi między byłymi żołnierzami a czynną służbą wojskową. Działania te obejmują badanie historii Win, wspieranie inicjatyw ustawodawczych oraz współpracę z innymi stowarzyszeniami niepodległościowymi.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["patriotyzm", "historia", "spoleczenstwo", "wino"])
    },
    {
        id: 292,
        nazwa: "STOWARZYSZENIE WSPIERANIA AKTYWNOŚCI 'BONA FIDES'",
        krs: "168509",
        cel: "Podstawowym celem działalności stowarzyszenia jest wspieranie aktywności obywatelskiej oraz budowanie i wzmacnianie społeczeństwa lokalnego. Cele szczegółowe obejmują pomoc dzieciom i młodzieży w trudnej sytuacji życiowej, wspieranie demokracji, aktywizację kobiet, integrację osób niepełnosprawnych, pomoc społeczną dla rodzin w potrzebie, wsparcie systemu pieczy zastępczej oraz udzielanie pomocy prawnej. Stowarzyszenie angażuje się także w integrację zawodową osób zagrożonych wykluczeniem, działalność charytatywną, promowanie tradycji narodowej, zatrudnienia i aktywizacji osób bez pracy, a także wspomaganie osób w wieku emerytalnym. Dodatkowo, stowarzyszenie wspiera rozwój lokalnych społeczności, kulturę, ochronę dziedzictwa narodowego, ekologię oraz wolność i prawa człowieka, a także promuje wolontariat i przeciwdziała uzależnieniom oraz patologiom społecznym.",
        cel_mini: "Celem stowarzyszenia jest wspieranie aktywności obywatelskiej i budowanie społeczności lokalnej, a wśród szczególnych celów znajdują się między innymi pomoc dzieciom z rodzin dysfunkcyjnych, wsparcie demokracji oraz integracja osób zagrożonych wykluczeniem społecznym. Działalność obejmuje także promowanie kultury, ochronę praw człowieka oraz przeciwdziałanie uzależnieniom i patologiom społecznym.",
        siedziba_miejscowosc: "M.LUBLIN",
        tagi: new Set(["spoleczenstwo", "obywatelstwo", "kultura", "wolontariat", "pomoc", "praca", "dzieci"])
    },
    {
        id: 293,
        nazwa: "STOWARZYSZENIE DZIENNIKARZY I WYDAWCÓW REPROPOL",
        krs: "173840",
        cel: "Zbiorowe zarządzanie prawami autorskimi, regulowane przez ustawę z dnia 15 czerwca 2018 roku oraz ustawę z dnia 4 lutego 1994 roku, polega na reprezentowaniu zbiorowej korzyści członków stowarzyszenia przez wykonywanie praw autorskich. Do działań stowarzyszenia należy obejmowanie praw w zbiorowy zarząd, zawieranie umów o korzystanie z utworów i pobór wynagrodzenia, monitorowanie korzystania z utworów, dochodzenie ochrony praw autorskich oraz realizowanie innych obowiązków wynikających z przepisów, w tym poboru wynagrodzeń za wykorzystanie utworów w celach dydaktycznych i naukowych. Stowarzyszenie ma również na celu ochronę praw zagranicznych wydawców prasowych oraz autorów materiałów prasowych, reprezentowanie i wspieranie interesów swoich członków oraz udzielanie im pomocy w działalności.",
        cel_mini: "Zbiorowe zarządzanie prawami autorskimi, według ustawy z 15 czerwca 2018 roku, obejmuje działania na rzecz członków stowarzyszenia, takie jak pobór i podział wynagrodzeń, monitorowanie korzystania z utworów oraz ochrona praw autorskich. Ponadto stowarzyszenie wspiera interesy swoich członków, udzielając im pomocy w działalności.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "stowarzyszenie", "gospodarka"])
    },
    {
        id: 294,
        nazwa: "STOWARZYSZENIE ZASTĘPCZEGO  RODZICIELSTWA",
        krs: "21066",
        cel: "Paragraf 11 Statutu określa cele działalności stowarzyszenia, w tym propagowanie i tworzenie ruchu zastępczego rodzicielstwa dla dzieci i młodzieży osieroconej oraz odrzuconej. Stowarzyszenie ma na celu udzielanie wszechstronnej pomocy rodzicom zastępczym oraz prowadzenie działań profilaktyczno-zapobiegawczych w zakresie trudności rodzinnych i osobistych w interesujących je środowiskach. Dodatkowo, reprezentuje i broni interesów rodzin zastępczych przed organami administracji państwowej i samorządowej oraz innymi instytucjami, a także pozyskuje środki na realizację wymienionych celów statutowych.",
        cel_mini: "Stowarzyszenie działa na rzecz dzieci osieroconych oraz rodziców zastępczych poprzez tworzenie ruchu zastępczego, udzielanie wszechstronnej pomocy, podejmowanie działań profilaktycznych oraz reprezentowanie ich interesów wobec organów administracji. Dodatkowo, stowarzyszenie dąży do pozyskiwania funduszy na realizację swoich celów statutowych.",
        siedziba_miejscowosc: "SIERCZYNEK",
        tagi: new Set(["rodzina", "ngo", "pomoc"])
    },
    {
        id: 295,
        nazwa: "STOWARZYSZENIE ZBIOROWEGO ZARZĄDZANIA PRAWAMI AUTORSKIMI TWÓRCÓW DZIEŁ NAUKOWYCH I TECHNICZNYCH KOPIPOL",
        krs: "11280",
        cel: "Celem stowarzyszenia jest ochrona oraz zbiorowe zarządzanie prawami autorskimi do utworów naukowych i technicznych, zgodnie z umowami i obowiązującymi ustawami. Organizacja wykonuje uprawnienia wynikające z przepisów prawa autorskiego, wspierając polskie środowiska naukowe i techniczne. Dodatkowo, stowarzyszenie inicjuje i wspiera działania mające na celu rozwój prawa autorskiego, a także zapewnia odpowiednie zabezpieczenie interesów twórców. W ramach swoich działań, promuje wiedzę o prawie autorskim wśród twórców i użytkowników, kładąc nacisk na poszanowanie tego prawa.",
        cel_mini: "Celem stowarzyszenia jest ochrona praw autorskich do utworów naukowych i technicznych oraz wsparcie polskich środowisk naukowych poprzez inicjowanie działań na rzecz rozwoju prawa autorskiego i upowszechnianie wiedzy o tym prawie. Organizacja wykonuje uprawnienia wynikające z ustaw o prawie autorskim oraz wspiera twórców w zabezpieczaniu ich interesów.",
        siedziba_miejscowosc: "KIELCE",
        tagi: new Set(["prawo"])
    },
    {
        id: 296,
        nazwa: "STOWARZYSZENIE ŻANDARMERII WOJSKOWEJ 'ŻANDARM'",
        krs: "249787",
        cel: "Stowarzyszenie Żandarmerii Wojskowej podejmuje szereg działań mających na celu popularyzację i umacnianie autorytetu tej formacji, głównie poprzez integrację społeczności byłych i obecnych żołnierzy oraz sympatyków przez udział w różnych uroczystościach i organizację podróży wojskowo-historycznych. Działa na rzecz kultywowania tradycji związanych z walkami i pokojową służbą żandarmów, a także opiekuje się miejscami pamięci. Stowarzyszenie organizuje pomoc dla osób chorych i żyjących w niedostatku oraz prowadzi badania nad historią polskiej i europejskiej policji wojskowej. Współpracuje z instytucjami kultury oraz międzynarodowymi organizacjami, chroni pamięć historyczną żandarmerii, reprezentuje interesy swoich członków oraz działa na rzecz solidarności z aktywnymi żołnierzami. Uczy umiejętności obronnych i dba o kondycję fizyczną, a także realizuje działania edukacyjno-wychowawcze.",
        cel_mini: "Celem działań Żandarmerii Wojskowej jest popularyzacja jej działalności, umacnianie autorytetu oraz integracja środowiska byłych i obecnych żołnierzy poprzez organizowanie różnorodnych wydarzeń. Dodatkowo, stowarzyszenie koncentruje się na ochronie pamięci historycznej, wsparciu dla potrzebujących, współpracy z instytucjami oraz edukacji w zakresie obronności.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wspolpraca", "wojsko"])
    },
    {
        id: 297,
        nazwa: "SUBVENIO, FUNDACJA INTERWENCJI KRYZYSOWEJ I POMOCY PSYCHOLOGICZNEJ",
        krs: "412354",
        cel: "Pomoc psychologiczna dla osób w kryzysie psychologicznym oraz propagowanie wiedzy na ten temat w społeczeństwie są kluczowymi działaniami mającymi na celu poprawę jakości życia i komfortu psychicznego jednostek. Ważne jest także upowszechnianie wiedzy o interwencji kryzysowej wśród psychologów oraz innych profesjonalistów, którzy na co dzień stykają się z ludźmi w kryzysie. Działania te obejmują także promocję zdrowego trybu życia, zapobieganie patologiom społecznym, takich jak dyskryminacja, oraz pomoc osobom dotkniętym tymi zjawiskami. Inicjowanie i wspieranie nowatorskich rozwiązań w obszarze ochrony praw i wolności człowieka oraz prowadzenie mediacji rodzinnych i społecznych również przyczyniają się do lepszego funkcjonowania społeczeństwa. Dodatkowo, istotne jest rozwijanie aktywnych postaw w kierunku współpracy dla dobra społeczeństwa obywatelskiego oraz działalność na rzecz organizacji zajmujących się nauką, edukacją, kulturą, rehabilitacją, zdrowiem i pomocą społeczną. Ważne jest również przeciwdziałanie wykluczeniu cyfrowemu oraz popularyzacja wiedzy prawniczej i udzielanie pomocy prawnej.",
        cel_mini: "Celem działań jest wsparcie ludzi w kryzysie psychicznym poprzez propagowanie wiedzy o interwencji kryzysowej, a także przeciwdziałanie patologiom społecznym oraz promowanie zdrowego stylu życia. Dodatkowo, inicjowane są nowatorskie rozwiązania w obszarach ochrony praw człowieka, mediacji oraz działalności na rzecz różnych organizacji społecznych.",
        siedziba_miejscowosc: "ŁÓDŹ",
        tagi: new Set(["psychologia", "spoleczenstwo", "pomoc", "rodzina", "zdrowie"])
    },
    {
        id: 298,
        nazwa: "ŚLĄSKA FUNDACJA BŁĘKITNY KRZYŻ",
        krs: "118020",
        cel: "Cele działalności obejmują tworzenie i wspieranie inicjatyw oraz programów związanych z profilaktyką i rozwiązywaniem problemów uzależnień oraz zdrowia psychicznego, a także udzielanie pomocy osobom znajdującym się w trudnej sytuacji życiowej. Istotnym elementem jest również gromadzenie środków i zasobów materialnych, które mają na celu finansowanie, tworzenie i utrzymywanie tych działań oraz placówek.",
        cel_mini: "Organizacja zajmuje się tworzeniem i wspieraniem działań oraz programów związanych z profilaktyką uzależnień i zdrowia psychicznego, oferując pomoc osobom w trudnych sytuacjach. Gromadzi również środki i zasoby materialne na finansowanie tych inicjatyw.",
        siedziba_miejscowosc: "BIELSKO-BIAŁA",
        tagi: new Set(["zdrowie", "pomoc"])
    },
    {
        id: 299,
        nazwa: "ŚLĄSKIE STOWARZYSZENIE KURATORÓW SĄDOWYCH AUXILIUM W LIKWIDACJI",
        krs: "624552",
        cel: "Cele działania stowarzyszenia obejmują zapewnienie wysokiego poziomu merytorycznego oraz podniesienie autorytetu kuratorów sądowych, a także doskonalenie organizacji służby kuratorskiej. Stowarzyszenie promuje działalność zawodową kuratorów oraz opiniuje akty prawne związane z kuratelą. Dąży do stworzenia profesjonalnego zaplecza dla readaptacji osób skazanych, wspierając efektywność procesu resocjalizacji i realizację sprawiedliwości naprawczej. Inicjuje zmiany w modelu kurateli w Polsce, opierając się na osiągnięciach nauki i praktyki, oraz wspiera wymianę doświadczeń z zagranicą w zakresie profilaktyki społecznej. Organizuje szkolenia, doradztwo, consultacje oraz broni praw kuratorów. Pomaga członkom stowarzyszenia, integruje środowisko kuratorskie oraz wspiera społeczną readaptację osób karanych, przeciwdziałając powrotom do przestępczości. Działa na rzecz osób zagrożonych wykluczeniem społecznym, oferując wsparcie psychologiczne oraz doradztwo zawodowe. Stowarzyszenie planuje tworzenie placówek dla dzieci, młodzieży oraz dorosłych w trudnej sytuacji życiowej, a także miejsc wychowawczo-resocjalizacyjnych i działań przeciwdziałających uzależnieniom oraz patologiom społecznym.",
        cel_mini: "Celem stowarzyszenia jest podniesienie autorytetu kuratorów sądowych, doskonalenie ich organizacji i promocja ich działalności, a także wspieranie resocjalizacji oraz readaptacji osób skazanych. Działania obejmują również tworzenie placówek wsparcia, przeciwdziałanie uzależnieniom, a także integrację i pomoc w adaptacji społecznej osób zagrożonych wykluczeniem.",
        siedziba_miejscowosc: "TYCHY",
        tagi: new Set(["prawo", "spoleczenstwo"])
    },
    {
        id: 300,
        nazwa: "ŚLĄSKIE STOWARZYSZENIE  OBRONY PRAW OJCA",
        krs: "20233",
        cel: "Celem stowarzyszenia jest promowanie równych praw ojców i matek w rodzinie, z uwzględnieniem dobra dziecka, oraz wpływanie na zmianę negatywnych postaw społecznych, które marginalizują rolę ojca w wychowaniu. Organizacja dąży do modyfikacji norm prawnych i obyczajowych, aby uznać ojca jako pełnoprawnego uczestnika w procesie wychowywania dzieci. Stowarzyszenie także podejmuje działania w celu eliminacji utrudnień, które ograniczają prawa ojców do wychowywania dzieci, oraz przeciwdziała dyskryminacji ze względu na płeć. Dodatkowo oferuje pomoc rodzinom członków w sytuacjach konfliktowych oraz tym, które borykają się z naruszeniem swoich praw, w szczególności w przypadkach rozbicia rodziny. Ponadto, stowarzyszenie wspiera ojców, których prawa do kontaktu z dziećmi są ograniczane, a także angażuje się w sprawy objęte kodeksem rodzinnym i opiekuńczym, gdy sprawiedliwa ocena sytuacji rodziny tego wymaga.",
        cel_mini: "Celem stowarzyszenia jest zapewnienie równych praw ojców i matek w wychowaniu dzieci oraz przeciwdziałanie dyskryminacji ojców w kontekście władzy rodzicielskiej. Stowarzyszenie działa na rzecz zmian w normach społecznych i prawnych, wspierając rodziny w sytuacjach konfliktowych oraz oferując pomoc ojcom w obronie ich praw.",
        siedziba_miejscowosc: "KATOWICE",
        tagi: new Set(["rodzina", "prawo", "dzieci"])
    },
    {
        id: 301,
        nazwa: "TERENOWY KOMITET OCHRONY PRAW DZIECKA",
        krs: "58952",
        cel: "Celem działania stowarzyszenia jest ochrona praw i interesów dzieci oraz zapewnienie wsparcia dzieciom i rodzinom, które przeżywają trudności, poprzez budowanie systemu wsparcia. Organizacja dąży do zapobiegania krzywdzeniu i wykluczeniu społecznemu dzieci, a także wspiera inicjatywy promujące i chroniące prawa człowieka, szczególnie prawa dzieci, profilaktykę krzywdzenia oraz promocję odpowiedzialnego rodzicielstwa.",
        cel_mini: "Celem działania stowarzyszenia jest ochrona praw dziecka oraz zapewnienie wsparcia dzieciom i rodzinom w trudnej sytuacji, poprzez budowanie efektywnego systemu wsparcia. Organizacja dąży także do zapobiegania krzywdzeniu dzieci oraz promowania praw człowieka, w tym praw dziecka i odpowiedzialnego rodzicielstwa.",
        siedziba_miejscowosc: "INOWROCŁAW",
        tagi: new Set(["wsparcie", "spoleczenstwo", "dzieci"])
    },
    {
        id: 302,
        nazwa: "'TOWARZYSTWO AMICUS'",
        krs: "114305",
        cel: "Celem działalności stowarzyszenia jest integracja środowiska akademickiego, młodzieżowego i naukowego, a także pobudzanie aktywności społecznej, kulturalnej i naukowej w tych społecznościach. Stowarzyszenie organizuje i promuje kulturę oraz wyjazdy turystyczne i naukowe, a także oferuje wsparcie studentom i absolwentom szkół średnich w poszukiwaniu zatrudnienia. Działania obejmują również inspirację do ruchu społecznego, pomoc specjalną dla studentów oraz działania na rzecz integracji Polski z Unią Europejską. Stowarzyszenie informuje młodzież oraz różnych przedstawicieli społecznych o funduszach unijnych, organizuje szkolenia oraz doskonalenie w edukacji pozaszkolnej, a także kursy podwyższające kwalifikacje. Ponadto prowadzi edukację przedszkolną, doradztwo w pozyskiwaniu środków unijnych i finansowych oraz analiz działania stowarzyszenia. Dodatkowo organizuje różnego typu wydarzenia, badania oraz analizy mające na celu wzmacnianie i promowanie rozwoju zasobów ludzkich.",
        cel_mini: "Stowarzyszenie zajmuje się integracją akademickiego, młodzieżowego i naukowego środowiska oraz organizowaniem działań wspierających aktywność społeczną i kulturalną, w tym szkolenia i kursy dla różnych grup społecznych. Dodatkowo, prowadzi doradztwo w zakresie funduszy unijnych i organizuje wyjazdy turystyczne oraz naukowe, wspierając rozwój zasobów ludzkich.",
        siedziba_miejscowosc: "BIAŁYSTOK",
        tagi: new Set(["spoleczenstwo", "integracja", "wspolpraca", "edukacja", "kultura"])
    },
    {
        id: 303,
        nazwa: "TOWARZYSTWO INICJATYW OBYWATELSKICH",
        krs: "51072",
        cel: "Cele działalności stowarzyszenia, określone w §7 punkt 1 statut, obejmują szereg różnorodnych zadań i inicjatyw, które mają na celu wspieranie jego misji. W skład tych celów wchodzą zarówno działania na rzecz społeczności lokalnej, promowanie kultury i edukacji, jak i ochrona środowiska oraz pomoc potrzebującym. Statut wymienia szczegółowo każde z zadań, co odzwierciedla szerokie spectrum zaangażowania stowarzyszenia w różne obszary życia społecznego.",
        cel_mini: "Cele działalności stowarzyszenia są określone w §7 pkt 1 statutu, obejmując różnorodne podpunkty od A do Y.",
        siedziba_miejscowosc: "KONIN",
        tagi: new Set(["prawo", "dzialalnosc", "stowarzyszenie", "fundacja"])
    },
    {
        id: 304,
        nazwa: "TOWARZYSTWO PRZYJACIÓŁ UKRAINY",
        krs: "190607",
        cel: "Działania na rzecz pogłębiania przyjaznych stosunków polsko-ukraińskich obejmują współpracę między Polakami a Ukraińcami w różnych dziedzinach, takich jak gospodarka, kultura, nauka, technika, sport i turystyka. Kluczowym elementem jest zaznajamianie polskiego społeczeństwa z życiem ukraińskim, w tym jego historią, sztuką, kulturą oraz problematyką społeczno-gospodarczą. Wspierane są również prace badawcze w obszarze stosunków polsko-ukraińskich, poprzez patronat nad badaczami i upowszechnianie ich osiągnięć. Ponadto, istotna jest współpraca z osobami i instytucjami w zakresie zbierania informacji oraz wymiany doświadczeń. Ostatnim istotnym punktem jest organizowanie, inicjowanie, koordynowanie oraz świadczenie pomocy humanitarnej, materialnej i niematerialnej dla obywateli Ukrainy oraz forów wspierających osoby prawne i instytucje na terytorium Ukrainy.",
        cel_mini: "Celem działań jest pogłębianie przyjaznych stosunków polsko-ukraińskich oraz rozwój współpracy w różnych dziedzinach, takich jak gospodarka, kultura i nauka. Dodatkowo, organizowane są inicjatywy mające na celu wsparcie humanitarne i materialne dla obywateli Ukrainy oraz edukację społeczeństwa polskiego o życiu i problemach Ukrainy.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["ukraina", "spoleczenstwo", "sport", "kultura", "humanitaryzm", "historia"])
    },
    {
        id: 305,
        nazwa: "TOWARZYSTWO UKRAIŃSKIE",
        krs: "30230",
        cel: "Podstawowym celem Towarzystwa jest organizacja życia społecznego i kulturalnego społeczności ukraińskiej w Lublinie i regionie, a także działanie na rzecz zachowania i rozwoju kultury ukraińskiej oraz realizacji praw obywatelskich ukraińskiej mniejszości narodowej w Polsce. Towarzystwo dąży do wdrażania potrzeb społeczności ukraińskiej w kwestiach politycznych, społecznych i kulturalnych w relacjach z władzami, a także do zachowania tradycji narodowych, języka ojczystego oraz ukraińskich tradycji prawosławnych. Dąży do utrzymywania bliskich więzi z Ukrainą i diasporą ukraińską na świecie, a także opiekuje się miejscami ukraińskiej pamięci narodowej, takimi jak groby żołnierzy Armii Ukraińskiej Republiki Ludowej. Towarzystwo stawia również na ochronę zabytków ukraińskiej kultury materialnej oraz na zachowanie i popularyzację wielokulturowego dziedzictwa Lublina, Chełma i województwa lubelskiego. Angażuje się w rozwój aktywności społecznej, wspieranie inicjatyw obywatelskich oraz kształtowanie dobrosąsiedzkich relacji polsko-ukraińskich, a także popularyzację wiedzy o wzajemnych relacjach historycznych i współczesnych tych narodów.",
        cel_mini: "Głównym celem Towarzystwa jest organizacja życia społecznego i kulturalnego społeczności ukraińskiej w Lublinie oraz regionie, a także promowanie jej praw obywatelskich i ochrony kultury. Towarzystwo dąży do wzmocnienia więzi z Ukrainą, zachowania tradycji narodowych oraz rozwijania dobrosąsiedzkich relacji między Polakami a Ukraińcami.",
        siedziba_miejscowosc: "LUBLIN",
        tagi: new Set(["ukraina", "prawo"])
    },
    {
        id: 306,
        nazwa: "TOWARZYSTWO WIEDZY POWSZECHNEJ",
        krs: "81613",
        cel: "Organizacja angażuje się w szeroki zakres działań na rzecz edukacji, kultury, integracji społecznej oraz ochrony praw człowieka. Jej działalność obejmuje upowszechnianie wiedzy ogólnej, zawodowej i specjalistycznej, podnoszenie poziomu wykształcenia oraz wspieranie szkolnictwa publicznego i niepublicznego. Organizacja współpracuje z instytucjami rządowymi, samorządami oraz innymi podmiotami, promując wartości demokratyczne oraz prawa obywatelskie. Działa na rzecz dzieci, młodzieży, osób z niepełnosprawnościami oraz seniorów, oferując wsparcie i pomoc w trudnych sytuacjach życiowych. Wspiera rozwój lokalnych społeczności, promuje zdrowie i ekologię oraz podejmuje działania na rzecz praw kobiet i równości społecznej. Organizacja angażuje się również w działalność charytatywną, wolontariacką oraz wspiera inicjatywy związane z kulturą, sztuką i dziedzictwem narodowym, a także integrację europejską.",
        cel_mini: "Opisane działalności obejmują szerokie wsparcie w zakresie edukacji, ochrony praw człowieka, integracji społecznej i zawodowej, a także promowanie kultury, zdrowia i bezpieczeństwa publicznego, z szczególnym uwzględnieniem dzieci, młodzieży, osób niepełnosprawnych oraz seniorów. Działania te mają na celu poprawę jakości życia obywateli oraz integrację różnych grup społecznych.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["spoleczenstwo", "charytatywnosc", "prawo", "integracja", "kultura", "zawod", "edukacja", "zdrowie"])
    },
    {
        id: 307,
        nazwa: "UNIA METROPOLII POLSKICH IMIENIA PAWŁA ADAMOWICZA",
        krs: "129432",
        cel: "Celem fundacji jest wspieranie rozwoju samorządności terytorialnej i gospodarczej oraz kształtowanie społeczeństwa obywatelskiego. Fundacja promuje inicjatywy i działania związane z tworzeniem oraz funkcjonowaniem struktur regionalnych i lokalnych, a także podejmuje wspólne działania w celu rozwiązywania specyficznych problemów wielkich miast. Dodatkowo, fundacja współpracuje z organami państwa oraz organizacjami ogólnopolskimi, zagranicznymi i międzynarodowymi w celu zwiększenia roli metropolii w kraju oraz w integracji europejskiej.",
        cel_mini: "Celem fundacji jest wspieranie rozwoju samorządności terytorialnej i społeczności obywatelskiej, oraz współpraca z różnymi organami na rzecz tworzenia i funkcjonowania struktur regionalnych i lokalnych. Fundacja promuje także wspólne rozwiązywanie problemów wielkich miast oraz integrację metropolii w kontekście europejskim.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wspolpraca", "spoleczenstwo", "gospodarka"])
    },
    {
        id: 308,
        nazwa: "WARMIŃSKO-MAZURSKIE STOWARZYSZENIE POMOCY POKRZYWDZONYM I POMOCY PRAWNEJ 'SAPERE AUDE'",
        krs: "732703",
        cel: "Pomoc prawna osobom pokrzywdzonym w sprawach karnych obejmuje różnorodne działania wspierające, w tym organizowanie pomocy tłumacza, gdy pokrzywdzeni komunikują się w języku polskim. Działania te obejmują również pomoc w zakresie obdukcji lekarskiej oraz ustalania stopnia uszczerbku na zdrowiu, a także wspieranie dochodzenia roszczeń o naprawienie szkody wyrządzonej przestępstwem. Ponadto, program przewiduje pokrywanie kosztów zdrowotnych, w tym leków i wyrobów medycznych, które nie są w pełni refundowane, a także działania edukacyjne i zawodowe dla ofiar przestępstw. Inicjowane są również przedsięwzięcia dotyczące opieki nad dziećmi pokrzywdzonych oraz wsparcia w zakresie czasowego zakwaterowania, udzielania schronienia i umożliwienia korzystania z komunikacji publicznej. Na koniec, organizowane są alternatywne metody rozwiązywania konfliktów z udziałem pokrzywdzonych, zgodnie z postanowieniami statutu.",
        cel_mini: "Pomoc prawna dla osób pokrzywdzonych przestępstwami obejmuje udzielanie wsparcia w dochodzeniu roszczeń, organizację pomocy tłumaczącej, a także działania związane z edukacją i zakwaterowaniem. Dodatkowo, program zapewnia pokrywanie kosztów leczenia oraz umożliwia korzystanie z komunikacji publicznej, a także alternatywne metody rozwiązywania konfliktów.",
        siedziba_miejscowosc: "SZCZYTNO",
        tagi: new Set(["przestepstwa", "prawo", "pomoc", "edukacja", "zdrowie"])
    },
    {
        id: 309,
        nazwa: "WIELKOPOLSKIE STOWARZYSZENIE KURATORÓW SĄDOWYCH",
        krs: "58881",
        cel: "Celem stowarzyszenia jest doskonalenie systemu organizacyjnego kurateli zawodowej oraz współpraca z rządowymi i pozarządowymi instytucjami i fundacjami w zakresie readaptacji osób skazanych. Stowarzyszenie dąży do stworzenia profesjonalnego zaplecza wykonawczego wspierającego proces resocjalizacji, a także do poprawy kwalifikacji kuratorów i integracji środowiska zawodowego. Dodatkowo, ma na celu podniesienie autorytetu kurateli sądowej oraz zapewnienie kuratorom odpowiednich warunków pracy, adekwatnych do realizowanych obowiązków, a także wspieranie działalności rad terenowych zajmujących się społeczną readaptacją skazanych.",
        cel_mini: "Celem stowarzyszenia jest doskonalenie organizacji kurateli zawodowej oraz współpraca z różnymi instytucjami w zakresie readaptacji osób skazanych. Stowarzyszenie dąży do poprawy zawodowego poziomu kuratorów, integracji środowiska zawodowego oraz podniesienia ich autorytetu i warunków pracy.",
        siedziba_miejscowosc: "POZNAŃ",
        tagi: new Set(["prawo"])
    },
    {
        id: 310,
        nazwa: "WROCŁAWSKIE CENTRUM MEDIACJI",
        krs: "306564",
        cel: "Działania mające na celu zwiększenie dorobku mediacji i sprawiedliwości naprawczej w Polsce obejmują przeprowadzanie postępowań mediacyjnych w różnych formach, a także inicjowanie i opiniowanie kwestii dotyczących mediacji oraz jej uregulowań prawnych. Ważne jest także pogłębianie wiedzy i doskonalenie umiejętności mediatorów, by wspierać ich rozwój etyczny. Działania te obejmują propagowanie idei mediacji jako metody rozwiązywania konfliktów w Polsce i na forum międzynarodowym oraz edukację społeczeństwa w zakresie sprawiedliwości naprawczej. Kluczowym aspektem jest rozwijanie inicjatyw związanych z przestrzeganiem praw człowieka oraz nawiązywanie kontaktów z organizacjami i instytucjami w obszarze mediacji. Ponadto, ochrona praw mediatorów, upowszechnianie dostępu do mediacji, dostosowywanie rozwiązań do standardów Unii Europejskiej oraz zapewnienie wysokiej jakości usług mediacyjnych są priorytetami, które realizowane są poprzez przestrzeganie zasad etyki zawodowej, współpracę z instytucjami naukowymi oraz ciągłe podnoszenie kompetencji mediatorów. Wśród dodatkowych celów znajduje się profilaktyka konfliktów społecznych, promowanie tolerancji oraz aktywizacja społeczna osób starszych.",
        cel_mini: "Celem organizacji jest rozwój mediacji i sprawiedliwości naprawczej w Polsce, poprzez edukację społeczeństwa, poprawę umiejętności mediatorów oraz inicjowanie współpracy z różnymi podmiotami. Działania obejmują także ochronę praw mediatorów, promowanie idei mediacji w rozwiązywaniu konfliktów oraz dążenie do dostosowania krajowych rozwiązań do standardów unijnych.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["edukacja", "prawo"])
    },
    {
        id: 311,
        nazwa: "ZRZESZENIE RZECZNIKÓW PATENTOWYCH PROWADZĄCYCH KANCELARIE",
        krs: "109333",
        cel: "Celem zrzeszenia jest reprezentowanie rzeczników patentowych zarówno w kraju, jak i za granicą, a także kontynuacja tradycji Związku Rzeczników Patentowych z lat 1924-39 oraz Zrzeszenia Rzeczników Patentowych z lat 1958-67. W ramach działalności zrzeszenie dąży do współpracy z Urzędem Patentowym RP w kwestiach dotyczących działalności rzeczników, szczególnie w zakresie prac legislacyjnych. Dodatkowo, istotnym aspektem jest dbałość o zachowanie godności zawodowej oraz przestrzeganie etyki przez wszystkich członków zrzeszenia.",
        cel_mini: "Celem zrzeszenia jest reprezentowanie rzecznika patentowych w kraju i za granicą, kontynuacja tradycji wcześniejszych związków, współpraca z Urzędem Patentowym w sprawach ustawodawczych oraz dbanie o godność i etykę zawodu.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "etyka", "spoleczenstwo"])
    },
    {
        id: 312,
        nazwa: "ZRZESZENIE STUDENTÓW POLSKICH",
        krs: "45705",
        cel: "Działania na rzecz ogółu społeczeństwa koncentrują się na wspólnej ochronie praw i interesów młodzieży, w tym młodzieży akademickiej. Celem tych działań jest wsparcie rozwoju jej zainteresowań oraz osobowości, a także zapewnienie aktywnego uczestnictwa w życiu społecznym.",
        cel_mini: "Działania na rzecz społeczności mają na celu wspólną obronę praw i interesów młodzieży, w tym akademickiej, oraz wsparcie ich rozwoju osobistego i zainteresowań poprzez aktywny udział w życiu społecznym.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["mlodziez", "spoleczenstwo"])
    },
    {
        id: 313,
        nazwa: "ZRZESZENIE WETERANÓW DZIAŁAŃ POZA GRANICAMI PAŃSTWA",
        krs: "603007",
        cel: "Zrzeszenie Weteranów Działań Poza Granicami Państwa angażuje się w integrację środowiska weteranów oraz reprezentowanie ich interesów przed władzami publicznymi. Działa na rzecz poprawy warunków socjalno-bytowych członków oraz ich rodzin, a także propaguje tradycje orężia polskiego w społeczeństwie, szczególnie wśród młodzieży szkolnej, pamiętając o historycznych miejscach i osobach z nimi związanych. Zrzeszenie współpracuje z Resortem Obrony Narodowej oraz międzynarodowymi organizacjami o podobnych celach, dążąc do umacniania koleżeńskich więzi i wzajemnego szacunku. Ochrona czci, honoru i godności weteranów jest kluczowym aspektem działalności, a także organizowanie pomocy dla ludności w obszarach misji oraz wsparcie finansowe i materialne dla weteranów w trudnych sytuacjach materialnych.",
        cel_mini: "Celem zrzeszenia jest wspieranie weteranów poprzez integrację środowiska, reprezentację ich interesów oraz poprawę warunków życia, a także pielęgnowanie tradycji oręża polskiego i współpracę z innymi organizacjami. Organizacja zajmuje się również ochroną honoru weteranów, udzielaniem pomocy finansowej oraz współpracą z resortem obrony i dowódcami misji.",
        siedziba_miejscowosc: "WROCŁAW",
        tagi: new Set(["spoleczenstwo", "prawo", "integracja", "wspolpraca", "wojsko"])
    },
    {
        id: 314,
        nazwa: "ZWIĄZEK ARTYSTÓW WYKONAWCÓW STOART",
        krs: "94940",
        cel: "Celem STOART jest zbiorowe zarządzanie prawami pokrewnymi do artystycznych wykonań utworów muzycznych oraz słowno-muzycznych, z zezwoleniem odpowiedniego ministra kultury. Organizacja skupia się na ochronie tych praw, promowaniu działań artystów wykonawców oraz udzielaniu im pomocy materialnej w razie potrzeby. Ponadto, jej zadaniem jest popularyzacja wiedzy o prawie autorskim, szczególnie dotyczącego praw przysługujących artystom, oraz promowanie skutecznych rozwiązań w zakresie ich ochrony. W ramach tych celów, STOART może reprezentować interesy zbiorowe swoich członków wobec organów władzy publicznej.",
        cel_mini: "Celem STOART jest zbiorowe zarządzanie prawami pokrewnymi do artystycznych wykonań utworów muzycznych oraz popularyzowanie i wspieranie działań artystów wykonawców. Organizacja może także reprezentować interesy swoich członków wobec organów władzy publicznej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "sztuka"])
    },
    {
        id: 315,
        nazwa: "ZWIĄZEK BANKÓW POLSKICH",
        krs: "104695",
        cel: "Celem związku jest reprezentowanie i ochrona wspólnych interesów jego członków oraz podejmowanie działań na rzecz rozwoju polskiej gospodarki w ramach Unii Europejskiej i współpracy międzynarodowej. Związek uczestniczy w dialogu społecznym, dostarczając rzetelną wiedzę na temat działalności banków i ich roli w zrównoważonym rozwoju gospodarczym kraju. Do zadań związku należy tworzenie sprzyjających warunków organizacyjnych i prawnych dla sektora bankowego poprzez współpracę z organami państwa, organizowanie działań na rzecz rozwoju sektora bankowego i infrastruktury międzybankowej, w tym rozliczeń pieniężnych, standaryzacji instrumentów rynków finansowych, a także kształcenia kadr bankowych i przeciwdziałania przestępczości. Związek podejmuje także działania na rzecz tworzenia i rozwoju instytucji obsługujących sektor bankowy, koncentrując się na rozliczeniach pieniężnych, organizacji izb rozliczeniowych i promocji arbitrażu bankowego dla klientów.",
        cel_mini: "Celem związku jest reprezentowanie interesów jego członków oraz wspieranie rozwoju polskiej gospodarki i uczestniczenie w dialogu społecznym na temat działalności banków. Do zadań związku należy m.in. tworzenie korzystnych warunków dla sektora bankowego, organizowanie współpracy międzybankowej oraz podejmowanie działań na rzecz rozwoju instytucji obsługujących ten sektor.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wspolpraca", "dialog", "gospodarka"])
    },
    {
        id: 316,
        nazwa: "ZWIĄZEK POLSKICH ARTYSTÓW FOTOGRAFIKÓW",
        krs: "24984",
        cel: "Wszystkie wymienione punkty dotyczą wszechstronnego rozwoju twórczości fotograficznej, obejmującego innowacyjne formy zapisu i przekazu obrazu, a także współuczestnictwa w kształtowaniu polityki kulturalnej państwa. Istotnym aspektem jest działanie na rzecz ochrony swobody wypowiedzi twórczej oraz kształtowanie zasad etyki zawodowej. Kluczowa jest także ochrona dorobku polskiej fotografii, jej popularyzacja w kraju i za granicą oraz inicjowanie systemowych rozwiązań prawnych, które zapewnią warunki do wykonywania zawodu artysty fotografa na podstawie statusu twórcy. W kontekście rozwoju mecenatu artystycznego oraz zbiorowego zarządzania prawami autorskimi, ważne jest również wspieranie działań na rzecz rozwijania twórczej fotografii oraz promowanie osiągnięć i badań naukowych i technicznych w tej dziedzinie.",
        cel_mini: "Tematyka obejmuje rozwój twórczości fotograficznej oraz jej różnorodne formy, ochronę praw twórczych i promocję dorobku polskiej fotografii, a także kształtowanie polityki kulturalnej i etyki zawodowej. Innym kluczowym aspektem jest wspieranie mecenatu artystycznego i inicjowanie prawnych rozwiązań dla artystów-fotografików, wraz z popularyzowaniem badań w tej dziedzinie.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["kultura", "prawo", "etyka", "sztuka"])
    },
    {
        id: 317,
        nazwa: "ZWIĄZEK POLSKICH ARTYSTÓW PLASTYKÓW",
        krs: "106679",
        cel: "Działalność na rzecz ochrony praw zawodowych, moralnych i materialnych artystów plastyków obejmuje reprezentowanie członków ZPAP w kraju i za granicą oraz inspirowanie i wspieranie rozwiązań prawnych umożliwiających wykonywanie zawodu artysty. Obejmuje również współpracę z organami państwowymi i samorządowymi w zakresie nadzoru estetycznego oraz orzecznictwa artystycznego, a także ochronę praw autorskich w kontekście ustawy o prawie autorskim. Ważnym elementem tych działań są inicjatywy edukacyjne oraz wspieranie sztuk wizualnych, historii sztuki oraz teorii i filozofii sztuki. Organizowane są wystawy, konkursy, warsztaty i sympozja mające na celu wymianę doświadczeń zawodowych, a także ochrona swobody twórczości i kształtowanie etyki zawodowej. Działalność socjalna wspiera artystów plastyków, a współpraca w ochronie środowiska koncentruje się na kształtowaniu krajobrazu kulturowego oraz estetyki przestrzeni publicznej. Ponadto organizowane są programy na rzecz integracji osób niepełnosprawnych oraz działania sprzyjające dialogowi międzykulturowemu i integracji międzypokoleniowej.",
        cel_mini: "Organizacja zajmuje się ochroną praw artystów plastyków, wspierając ich działania oraz promując sztukę poprzez edukację, organizację wystaw, konkursów i warsztatów. Działa również na rzecz integracji osób niepełnosprawnych i budowania dialogu międzykulturowego, dbając o estetykę i funkcjonalność przestrzeni publicznej.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["kultura", "prawo", "spoleczenstwo"])
    },
    {
        id: 318,
        nazwa: "ZWIĄZEK POWIATÓW POLSKICH",
        krs: "94303",
        cel: "Wsparcie idei samorządu terytorialnego obejmuje integrowanie oraz obronę wspólnych interesów powiatów, kształtowanie polityki oraz wspieranie inicjatyw rozwojowych i promocyjnych. Kluczowym elementem jest wymiana doświadczeń i upowszechnianie modelowych rozwiązań dotyczących zarządzania w powiatach. Działalność członków koncentruje się na nauce, technice, edukacji, kulturze, sporcie, ochronie środowiska oraz wspieraniu inicjatyw społecznych, które dotyczą ochrony zdrowia, pomocy społecznej oraz rehabilitacji zawodowej i społecznej osób z niepełnosprawnościami.",
        cel_mini: "Celem działań jest wspieranie samorządu terytorialnego oraz integracja powiatów w zakresie wspólnej polityki rozwoju, promowania inicjatyw oraz wymiany doświadczeń. Dodatkowo, skupia się na wspieraniu działalności naukowej, kulturalnej i społecznej, w tym ochrony zdrowia i rehabilitacji inwalidów.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["samorzad", "integracja", "srodowisko"])
    },
    {
        id: 319,
        nazwa: "ZWIĄZEK PRODUCENTÓW AUDIO VIDEO",
        krs: "13087",
        cel: "Celem stowarzyszenia jest ochrona oraz zbiorowe zarządzanie prawami producentów fonogramów i wideogramów, a także reprezentowanie i wspieranie ich interesów. Stowarzyszenie prowadzi działalność promocyjną, edukacyjną i kulturalną w dziedzinie fonografii.",
        cel_mini: "Celem stowarzyszenia jest ochrona oraz zbiorowe zarządzanie prawami producentów fonogramów i wideogramów, a także reprezentowanie ich interesów. Dodatkowo stowarzyszenie prowadzi działalność promocyjną, edukacyjną i kulturalną w dziedzinie fonografii.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["kultura", "prawo"])
    },
    {
        id: 320,
        nazwa: "ZWIĄZEK WETERANÓW I REZERWISTÓW WOJSKA POLSKIEGO",
        krs: "94406",
        cel: "Cele działalności związku obejmują pogłębianie więzi i solidarności wśród członków, weteranów oraz żołnierzy, a także kultywowanie tradycji historycznych oraz honoru żołnierza polskiego. Związek dąży do promowania aktywnych postaw patriotycznych i współpracy środowisk związanych z obroną ojczyzny. Ważnym celem jest również wychowanie młodzieży w duchu patriotyzmu poprzez przybliżanie historii walk o niepodległość. Dodatkowo, związek reprezentuje swoich członków przed władzami oraz prowadzi działalność gospodarczą, aby zapewnić środki na realizację swoich statutu.",
        cel_mini: "Cele działalności związku obejmują pogłębianie więzi między członkami oraz podtrzymywanie tradycji historycznych i honoru żołnierza polskiego. Dodatkowo, związek dąży do kształtowania patriotycznych postaw, popularyzacji historii walki o niepodległość oraz reprezentowania swoich członków wobec władz.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["wojsko", "historia", "spoleczenstwo"])
    },
    {
        id: 321,
        nazwa: "ZWIĄZEK WOJEWÓDZTW RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "117252",
        cel: "Celem związku jest wspieranie idei samorządu terytorialnego, obrona wspólnych interesów województw oraz dążenie do społeczno-gospodarczego rozwoju polskich województw.",
        cel_mini: "Celem związku jest wspieranie idei samorządu terytorialnego, obrona wspólnych interesów województw oraz dążenie do ich społeczno-gospodarczego rozwoju.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["samorzad", "interesy", "fundacja", "spoleczenstwo"])
    },
    {
        id: 322,
        nazwa: "ZWIĄZEK ZAWODOWY PRACOWNIKÓW WYMIARU SPRAWIEDLIWOŚCI RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "121108",
        cel: "Celem Związku jest reprezentowanie pracowników oraz innych osób, o których mowa w § 7, oraz obrona ich godności, praw i interesów zarówno zbiorowych, jak i indywidualnych. W szczególności Związek dąży do ochrony interesów materialnych, socjalnych, zdrowotnych i kulturowych swoich członków oraz ich rodzin, a także praw pracowniczych dotyczących wykonywanej pracy, wynagrodzenia, warunków socjalnych, bytowych oraz bezpieczeństwa i higieny pracy. Związek angażuje się również w tworzenie korzystnych warunków pracy, życia i wypoczynku.",
        cel_mini: "Celem związku jest reprezentowanie i obrona praw oraz interesów pracowników, w tym ich godności, praw materialnych, społecznych, zdrowotnych i kulturalnych, oraz praw pracowniczych związanych z zatrudnieniem. Związek dąży również do tworzenia korzystnych warunków pracy, życia i wypoczynku.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["praca", "prawo"])
    },
    {
        id: 323,
        nazwa: "ZWIĄZEK ZAWODOWY PROKURATORÓW I PRACOWNIKÓW PROKURATURY RZECZYPOSPOLITEJ POLSKIEJ",
        krs: "71151",
        cel: "Związek ma na celu reprezentowanie oraz obronę godności, praw i interesów materialnych i moralnych zarówno zbiorowych, jak i indywidualnych pracowników powszechnych jednostek organizacyjnych prokuratury, prokuratorów oraz pracowników prokuratury wojskowej, którzy nie są oficerami ani żołnierzami Wojska Polskiego. Zajmuje się także sprawami emerytów, rencistów oraz prokuratorów w stanie spoczynku, koncentrując się na poprawie ich bytu oraz warunków pracy.",
        cel_mini: "Związek chroni godność, prawa oraz interesy materialne i moralne pracowników prokuratury, w tym prokuratorów, emerytów i rencistów, dbając o poprawę ich bytu i warunków pracy. Reprezentuje zarówno zbiorowe, jak i indywidualne interesy tych grup.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["godnosc", "prawo", "zwiazek", "praca"])
    },
    {
        id: 324,
        nazwa: "ZWIĄZEK ZAWODOWY TŁUMACZY PRZYSIĘGŁYCH W POLSCE",
        krs: "699625",
        cel: "Celem związku jest ochrona godności, praw oraz interesów tłumaczy przysięgłych, koncentrując się na kilku kluczowych aspektach. Należy do nich reprezentacja i obrona interesów członków w sferze materialnej, zawodowej, społecznej, obywatelskiej i kulturalnej. Związek dąży do harmonizacji interesów tłumaczy z realizacją przepisów ustawy o zawodzie tłumacza przysięgłego oraz aktywów wykonawczych. Prezentuje także stanowisko wobec administracji państwowej, samorządowej, oraz organizacji politycznych i społecznych. Działalność związku obejmuje także realizację zadań wynikających z przepisów prawa o związkach zawodowych i rozwiązywaniu sporów zbiorowych, a także działania na rzecz poprawy warunków życia członków oraz ich rodzin, w tym poprawy warunków pracy, bezpieczeństwa, ochrony zdrowia i środowiska. Związek prowadzi działalność gospodarczą w celu pozyskania funduszy na realizację swoich zadań, a także działalność szkoleniową i promocyjną. W miarę możliwości zapewnia członkom wsparcie socjalne oraz inicjuje działania związane z wypoczynkiem, kulturą, sportem, rekreacją i turystyką.",
        cel_mini: "Celem związku jest ochrona godności oraz praw tłumaczy przysięgłych, obejmująca m.in. reprezentację interesów członków, harmonizowanie zasad wykonywania zawodu, a także działania na rzecz poprawy jakości życia i warunków pracy. Związek prowadzi również działalność gospodarczą oraz organizuje szkolenia, a także inicjuje aktywności z zakresu kultury, sportu i rekreacji.",
        siedziba_miejscowosc: "WARSZAWA",
        tagi: new Set(["prawo", "gospodarka", "tlumacze"])
    },
    {
        id: 325,
        nazwa: "ZWIĄZEK ZAWODOWY TWÓRCÓW KULTURY",
        krs: "313340",
        cel: "Reprezentowanie oraz obrona indywidualnych i zbiorowych praw oraz interesów zawodowych, społecznych i socjalnych członków związku obejmuje działania na rzecz kształtowania aktywności społecznej, etyki i godności zawodowej. Ponadto ważne jest wspieranie statusu twórców kultury oraz ochrona tych wartości, co przyczynia się do umocnienia ich pozycji w społeczeństwie.",
        cel_mini: "Reprezentowanie i obrona indywidualnych oraz zbiorowych praw członków związku obejmuje aspekty zawodowe, społeczne i socjalne. Działania te kształtują aktywność społeczną, etykę oraz godność zawodową twórców kultury, a także służą ochronie tych wartości.",
        siedziba_miejscowosc: "TORUŃ",
        tagi: new Set(["prawo", "etyka", "spoleczenstwo"])
    },
]