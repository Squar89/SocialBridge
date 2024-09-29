type Report = {
    name: string;
    link: string;
    numericSummary: string;
    generalSummary: string;
}

export class ReportsHandler {
    private reports: Report[] = [
        {
            name: "Raport Orange",
            link: "https://fundacja.orange.pl/app/uploads/2021/09/Raport_z_dzialalnosci_Fundacji_Orange_2017.pdf",
            numericSummary: "",
            generalSummary: '1. Fundacja realizuje programy edukacyjne związane z nowymi technologiami i bezpiecznym korzystaniem z internetu, skierowane głównie do dzieci i młodzieży.\n'
+ '2. Kluczowe programy to:\n'
+ '- MegaMisja - edukacja cyfrowa dla najmłodszych\n'
+ '- #SuperKoderzy - nauka programowania\n'
+ '- Pracownie Orange - multimedialne świetlice w małych miejscowościach\n'
+ '- Bezpiecznie Tu i Tam - bezpieczeństwo w sieci\n'
+ '- Wolontariat pracowniczy\n'
+ '- Zaprogramuj przyszłość - nauka programowania dla nauczycieli\n'
+ '3. Fundacja otworzyła także FabLab - pracownię wyposażoną w nowoczesne technologie.\n'
+ '4. W 2017 roku z programów Fundacji skorzystało setki tysięcy osób, głównie dzieci i młodzieży.\n'
+ '5. Łączne koszty realizacji programów w 2017 roku wyniosły prawie 9,7 mln zł.\n'
+ '6. Fundacja współpracuje z wieloma organizacjami pozarządowymi i instytucjami.\n'
+ 'Raport pokazuje szeroki zakres działań edukacyjnych Fundacji Orange w obszarze nowych technologii i kompetencji cyfrowych.'
        },
        {
            name: "Raport Gajusz",
            link: "https://gajusz.org.pl/wp-content/uploads/2024/07/gajusz_raport_2023.pdf",
            numericSummary: "",
            generalSummary: 'Dokument ten to raport roczny Fundacji Gajusz za rok 2023. Główne punkty:\n'
+ '1. Fundacja Gajusz działa od 25 lat, pomagając ciężko chorym i opuszczonym dzieciom.\n'
+ '2. Prowadzi trzy rodzaje hospicjów: domowe, stacjonarne i perinatalne.\n'
+ '3. Zarządza ośrodkiem preadopcyjnym Tuli Luli dla niemowląt oczekujących na adopcję.\n'
+ '4. Prowadzi Centrum Terapii Cukinia, wspierające dzieci i rodziny w trudnych sytuacjach.\n'
+ '5. Pomaga dzieciom z chorobami onkologicznymi i ich rodzinom.\n'
+ '6. W 2023 roku wsparła 828 podopiecznych, wydając na pomoc ponad 15 mln zł.\n'
+ '7. Zatrudnia 170 pracowników i współpracuje z prawie 200 wolontariuszami.\n'
+ '8. Połowa budżetu fundacji pochodzi od darczyńców indywidualnych i firm.\n'
+ '9. Fundacja jest rozpoznawalna przez 38% mieszkańców województwa łódzkiego.\n'
+ '10. W raporcie przedstawiono szczegółowe statystyki, historie podopiecznych oraz informacje o nagrodach i wyróżnieniach otrzymanych przez fundację.',
        },
        {
            name: "Raport Geremek",
            link: "https://geremek.pl/wp-content/uploads/2024/03/FundacjaGeremkaSprawozdanieroczne223.pdf",
            numericSummary: "",
            generalSummary: '1. Misja fundacji: upamiętnianie dorobku prof. Geremka, promowanie wartości europejskich i tworzenie przestrzeni dla zaangażowanych osób.\n'
+ '2. Kluczowe działania:\n'
+ '- Przeciwdziałanie dezinformacji i mowie nienawiści w mediach społecznościowych\n'
+ '- Monitoring polskojęzycznych mediów społecznościowych w kontekście antyukraińskiej dezinformacji\n'
+ '- Prowadzenie szkoleń z kompetencji medialnych i przeciwdziałania dezinformacji\n'
+ '- Organizacja szkoleń dla młodych dziennikarzy we współpracy z Parlamentem Europejskim\n'
+ '- Realizacja projektów edukacyjnych dla młodzieży, m.in. warsztaty historyczne i projekt integracyjny dla młodzieży z Polski i Ukrainy\n'
+ '- Prowadzenie programu stażowego w Parlamencie Europejskim\n'
+ '3. Projekty europejskie:\n'
+ '- Realizacja projektu BORN in EU, mającego na celu zwiększenie frekwencji młodych ludzi w wyborach do Parlamentu Europejskiego\n'
+ '- Organizacja szkoleń z kompetencji cyfrowych we współpracy z Komisją Europejską\n'
+ '4. Inne działania:\n'
+ '- Odsłonięcie muralu prof. Bronisława Geremka w Warszawie\n'
+ '- Udział w debacie \"Jaka Polska po wyborach?\" i akcjach profrekwencyjnych\n'
+ '- Wsparcie opracowania dotyczącego mediów obywatelskich\n'
+ 'Sprawozdanie podkreśla szeroki zakres działań fundacji, koncentrujących się na edukacji, przeciwdziałaniu dezinformacji oraz promowaniu wartości europejskich i demokratycznych.'
        },
        {
            name: "Raport pro-ngo",
            link: "https://pro-ngo.pl/wp-content/uploads/2024/02/Raport-2023.pdf",
            numericSummary: "",
            generalSummary: '1. Organizacja wydarzenia \"CSR i ESG® - od ludzi dla ludzi\", które zgromadziło 800 uczestników, 47 wystawców i 47 prelegentów.\n'
+ '2. Wydanie drugiej edycji Poradnika Kompas NGO, zawierającego aktualne informacje o współpracy NGO z biznesem.\n'
+ '3. Publikacja kwartalnika Magazyn Kompas NGO, który w 2023 roku miał 4980 pobrań.\n'
+ '4. Prowadzenie podcastu Pro NGO, który w 2023 roku miał 23 odcinki i 2308 odsłuchań.\n'
+ '5. Organizacja szkoleń online dla NGO, biznesu i urzędów, w których uczestniczyło 310 osób.\n'
+ '6. Przekazanie mebli biurowych i laptopów dla organizacji pozarządowych.\n'
+ '7. Wsparcie ponad 5000 NGO, przeprowadzenie 143 audytów i konsultacji, przyznanie 65 tytułów NGO Hero.\n'
+ '8. Aktywny udział w 12 wydarzeniach branżowych i konferencjach.\n'
+ '9. Współpraca z mediami w celu promocji działań fundacji.\n'
+ '10. Nawiązanie partnerstw z firmami i organizacjami międzynarodowymi.\n'
+ 'Raport podkreśla zaangażowanie Fundacji Pro NGO w rozwój i profesjonalizację organizacji pozarządowych oraz budowanie mostów między sektorem NGO a biznesem.'
        },
        {
            name: "Raport 2",
            link: "https://fdds.pl/_Resources/Persistent/9/c/3/1/9c315cfa8aa1ade79981e90f5752aae18fe01c67/Raport%20z%20dzialan%20FDDS%202023.pdf",
            numericSummary: '\"1. Pomoc bezpośrednia:\\\n'
                + '-986 dzieci objętych pomocą psychologiczną -\\\n'
                + '7395 konsultacji psychologicznych i sesji terapeutycznych dla dzieci -\\\n'
                + '4138 konsultacji dla rodziców i opiekunów -\\\n'
                + '64 853 odebranych połączeń od dzieci i młodzieży na Telefonie Zaufania 116 111 -\\\n'
                + '1574 odpowiedzi na wiadomości od dzieci -\\\n'
                + '280 interwencji w sytuacjach zagrożenia życia lub zdrowia dzieci\\\n'
                + '2. Sieć Centrów Pomocy Dzieciom:\\\n'
                + '-10 placówek w sieci -\\\n'
                + '3 nowo otwarte Centra Pomocy Dzieciom\\\n'
                + '3. Edukacja i szkolenia:\\\n'
                + '-11 000 + uczestników szkoleń, webinarów, konferencji i warsztatów -\\\n'
                + '15 szkoleń dla profesjonalistów pracujących w Centrach Pomocy Dzieciom -\\\n'
                + '204 uczestników szkoleń dla profesjonalistów z Centrów Pomocy Dzieciom\\\n'
                + '4. Działania online:\\\n'
                + '-2 265 580 wyświetleń strony internetowej fdds.pl -\\\n'
                + '109 730 fanów na Facebooku(wzrost o 5 000) -\\\n'
                + '23 083 obserwujących na Instagramie -\\\n'
                + '1570 obserwujących na LinkedIn\\\n'
                + '5. Fundraising:\\\n'
                + '-28 230 darczyńców stałych -\\\n'
                + '7090 darczyńców jednorazowych -\\\n'
                + '190 firm zaangażowanych w działania fundacji -\\\n'
                + '302 biegaczy charytatywnych w akcji \\\"Biegam Dobrze\\\" -\\\n'
                + '1000 listów w ramach akcji \\\"List od Mikołaja\\\"\\\n'
                + '6. Działania prawne:\\\n'
                + '-298 konsultacji prawnych dla rodziców -\\\n'
                + '120 sporządzonych pism procesowych -\\\n'
                + '23 dzieci / młodych dorosłych objętych pomocą procesową\\\n'
                + '7. Publikacje:\\\n'
                + '-4 numery kwartalnika \\\"Dziecko Krzywdzone\\\"\\\n'
                + '8. Inne:\\\n'
                + '-19 organizacji członkowskich w Krajowej Koalicji na rzecz Ochrony Dzieci\"',
            generalSummary: '1. Pomoc:\n'
                + '- Prowadzenie sieci 10 Centrów Pomocy Dzieciom w Polsce\n'
                + '- Bezpośrednia pomoc psychologiczna, psychiatryczna i prawna dla dzieci-ofiar przestępstw i ich rodzin\n'
                + '- Obsługa Telefonu Zaufania 116 111 dla dzieci i młodzieży\n'
                + '- Pomoc rodzinom z Ukrainy\n'
                + '2. Profilaktyka:\n'
                + '- Wdrażanie standardów ochrony dzieci w placówkach i instytucjach\n'
                + '- Edukacja dotycząca bezpieczeństwa dzieci w internecie\n'
                + '- Wsparcie i edukacja rodziców małych dzieci\n'
                + '3. Rzecznictwo i badania:\n'
                + '- Realizacja badań dotyczących problematyki krzywdzenia dzieci\n'
                + '- Wydawanie kwartalnika naukowego \"Dziecko Krzywdzone\"\n'
                + '- Działania prawne na rzecz ochrony praw dzieci\n'
                + '4. Mobilizacja społeczna:\n'
                + '- Kampanie społeczne i edukacyjne\n'
                + '- Współpraca z mediami i komunikacja w social mediach\n'
                + '- Pozyskiwanie środków od darczyńców indywidualnych i firm\n'
                + '5. Inne działania:\n'
                + '- Organizacja konferencji i szkoleń\n'
                + '- Prowadzenie platformy edukacyjnej\n'
                + '- Koordynacja Krajowej Koalicji na rzecz Ochrony Dzieci\n'
                + 'Fundacja objęła pomocą psychologiczną 986 dzieci, przeprowadziła 7395 konsultacji psychologicznych dla dzieci i 4138 dla rodziców/opiekunów. Telefon Zaufania 116 111 odebrał 64 853 połączeń od dzieci i młodzieży.'
        }
    ];

    getAll() {
        return this.reports;
    }

    getByName(name: string) {
        return this.reports.find(item => item.name === name);
    }
}

const reportsHandler = new ReportsHandler();

export const getAllReports = () => {
    const result = [];
    const sourceArray = reportsHandler.getAll();
    for (let i = 0; i < 3; i++) {
        result.push(sourceArray[Math.floor(Math.random()*sourceArray.length)]);
    }
    return result;
}
export const getReportByName = (name: string) => reportsHandler.getByName(name);
