import albaniaImg from './assets/albania.png';
import albaniaImg_2 from './assets/albania_2.jpg';
import montenegroImg from './assets/montenegro.png';
import montenegroImg_2 from './assets/montenegro_2.png';
import moroccoImg from './assets/morocco.png';
import moroccoImg_2 from './assets/marocco_2.png';
import sloveniaImg from './assets/slovenia.png';
import sloveniaImg_2 from './assets/slobenia_2.png';
import flagMoroccoImg from './assets/morocco-flag.png';
import flagMontenegroImg from './assets/montenegro-flag.png';
import flagAlbaniaImg from './assets/albania-flag.png';
import flagSloveniaImg from './assets/slovenia-flag.png';


export const COUNTRY_CONTENT = [
    {
        image: moroccoImg,
        title: 'Morocco',
        description: 'Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea.'
    },
    {
        image: montenegroImg,
        title: 'Montenegro',
        description: 'Montenegro is a Balkan country with rugged mountains, medieval villages and a narrow strip of beaches along its Adriatic coastline.'
    },
    {
        image: albaniaImg,
        title: 'Albania',
        description: 'Tirana, the Republic of Albania\'s largest city, is blessed with a mild Mediterranean climate, a plethora of beautiful churches and lush parks.'
    },
    {
        image: sloveniaImg,
        title: 'Slovenia',
        description: 'Slovenia, a country in Central Europe, is known for its mountains, ski resorts and lakes.'
    },

];

export const COUNTRY_DESCRIPTION = {
    morocco: {
        title: 'Morocco',
        description: 'Morocco is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks (marketplaces) selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water.',
        image: moroccoImg_2,
        flag: flagMoroccoImg,
        capital: 'Capital City: Rabat',
        currency: 'Currency: Moroccan Dirham',
        officialLanguages: 'Official Languages: Arabic, Standard Moroccan Berber'
    },
    montenegro: {
        title:'Montenegro',
        description:'The Bay of Kotor, resembling a fjord, is dotted with coastal churches and fortified towns such as Kotor and Herceg Novi. Durmitor National Park, home to bears and wolves, encompasses limestone peaks, glacial lakes and 1,300m-deep Tara River Canyon.',
        image: montenegroImg_2,
        flag: flagMontenegroImg,
        capital: 'Capital City: Podgorica',
        currency: 'Currency: Euro',
        officialLanguages: 'Official Languages: Montenegrin'
    },
    albania: {
        title:'Albania',
        description:'Tirana, Founded in 1614, some striking Mussolini-era architecture dots the city center. Walk between sights such as Skanderbeg Square\'s 1789 Et\'hem Bey Mosque, the 1830 Sahat-Kulla (Clock Tower) and the Puppet Theater, once home to King Zog\'s puppet parliament. Visit the Peace Bell, built with old cartridge shells, a reminder of Tirana\'s stormy past.',
        image: albaniaImg_2,
        flag: flagAlbaniaImg,
        capital: 'Capital City: Tirana',
        currency: 'Currency: Albanian Lek',
        officialLanguages: 'Official Languages: Albanian'
    },
    slovenia: {
        title:'Slovenia',
        description:'Lake Bled, a glacial lake fed by hot springs, the town of Bled contains a church-topped islet and a cliffside medieval castle. In Ljubljana, Slovenia’s capital, baroque facades mix with the 20th-century architecture of native Jože Plečnik, whose iconic Tromostovje (Triple Bridge) spans the tightly curving Ljubljanica River.',
        image: sloveniaImg_2,
        flag: flagSloveniaImg,
        capital: 'Capital City: Ljubljana',
        currency: 'Currency: Euro',
        officialLanguages: 'Official Languages: Slovenian'
    }
}