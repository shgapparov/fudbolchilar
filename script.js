const futbolchilar = [
   { id: 1, name: "Cristiano Ronaldo", country: "Portugal", club: "Al Nassr", goals: 960, photo: "https://editorial.uefa.com/resources/027b-16a6e8afa2a8-7441ca4b9ac5-1000/cristiano_ronaldo_of_portugal_celebrates_after_scoring_a.jpeg" },
   { id: 2, name: "Lionel Messi", country: "Argentina", club: "Inter Miami", goals: 896, photo: "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg" },
   { id: 3, name: "Kylian Mbappé", country: "France", club: "Real Madrid", goals: 399, photo: "https://cdn.britannica.com/88/275788-050-32DAB4EB/Kylian-Mbappe-celebrates-goal-for-PSG-against-Real-Sociedad-March-2024.jpg" },
   { id: 4, name: "Erling Haaland", country: "Norway", club: "Manchester City", goals: 301, photo: "https://sports.inquirer.net/files/2025/10/AP25270576559276.jpg" },
   { id: 5, name: "Robert Lewandowski", country: "Poland", club: "Barcelona", goals: 654, photo: "https://platform.barcablaugranes.com/wp-content/uploads/sites/21/2026/01/gettyimages-2257637385.jpg?quality=90&strip=all&crop=0%2C0.0058377116170476%2C100%2C99.988324576766&w=2400" },
   { id: 6, name: "Kevin De Bruyne", country: "Belgium", club: "Manchester City", goals: 151, photo: "https://static.independent.co.uk/2022/10/23/19/1435606233.jpg" },
   { id: 7, name: "Mohamed Salah", country: "Egypt", club: "Liverpool", goals: 401, photo: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2025-04/250411-Mohamed-Salah-mn-0840-d890b7.jpg" },
   { id: 8, name: "Harry Kane", country: "England", club: "Bayern Munich", goals: 405, photo: "https://s.yimg.com/ny/api/res/1.2/dY4irhpVQauYRomNI2GYww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MDtjZj13ZWJw/https://media.zenfs.com/en/goal_uk_815/997f85399df810f67c4ac0b9a38a71c9" },
   { id: 9, name: "Vinícius Júnior", country: "Brazil", club: "Real Madrid", goals: 102, photo: "https://cdn.britannica.com/47/273347-050-A593DB05/Vinicius-Junior-Real-Madrid-football-soccer-player-UEFA-league-champion-trophy-wembly-stadium-london-2024.jpg" },
   { id: 10, name: "Jude Bellingham", country: "England", club: "Real Madrid", goals: 65, photo: "https://assets.bundesliga.com/contender/2024/4/imago1034602594h.jpg?crop=0px,234px,4500px,2531px&fit=1200,675" },
   { id: 11, name: "Lamine Yamal", country: "Spain", club: "Barcelona", goals: 40, photo: "https://www.fcbarcelona.com/photo-resources/2025/01/30/265f7945-c7b3-4420-801c-b38ae0a2431a/_MGA5907.jpg?width=1200&height=750" },
   { id: 12, name: "Phil Foden", country: "England", club: "Manchester City", goals: 87, photo: "https://www.planetsport.com/image-library/land/1200/1347648_phil-foden-manchester-city-apr24.webp" },
   { id: 13, name: "Bukayo Saka", country: "England", club: "Arsenal", goals: 72, photo: "https://i2-prod.football.london/article33340904.ece/ALTERNATES/s615/0_Bukayo-Saka.jpg" },
   { id: 14, name: "Antoine Griezmann", country: "France", club: "Atletico Madrid", goals: 280, photo: "https://platform.intothecalderon.com/wp-content/uploads/sites/95/chorus/uploads/chorus_asset/file/25956868/2207516714.jpg?quality=90&strip=all&crop=0.0047411340792678%2C0%2C99.990517731841%2C100&w=2400" },
   { id: 15, name: "Luka Modrić", country: "Croatia", club: "Real Madrid", goals: 115, photo: "https://tmssl.akamaized.net/images/foto/big/luka-modric-ac-mailand-2025-1757415502-177086.jpg?lm=1757415512" },
   { id: 16, name: "Bruno Fernandes", country: "Portugal", club: "Manchester United", goals: 165, photo: "https://e0.365dm.com/25/08/1600x900/skysports-bruno-fernandes-man-utd_6982279.jpg?20250804005329" },
   { id: 17, name: "Lautaro Martínez", country: "Argentina", club: "Inter Milan", goals: 150, photo: "https://images.copaamerica.com/lautaro_inter_6157b38e7c.jpg" },
   { id: 18, name: "Rodri", country: "Spain", club: "Manchester City", goals: 45, photo: "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/4162/live/6f1ab1d0-361c-11f0-a597-6d65f2e5ecfb.jpg" },
   { id: 19, name: "Bernardo Silva", country: "Portugal", club: "Manchester City", goals: 90, photo: "https://ichef.bbci.co.uk/ace/standard/819/cpsprodpb/f7b6/live/55ed0f60-9e35-11f0-a75f-7dc09391dc30.jpg" },
   { id: 20, name: "Son Heung-min", country: "South Korea", club: "Tottenham", goals: 215, photo: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/4118/production/_119546661_gettyimages-1294130887.jpg" },
   { id: 21, name: "Declan Rice", country: "England", club: "Arsenal", goals: 35, photo: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/68ad/live/2f3e5170-2f14-11f0-90bf-8d5b436191fe.jpg" },
   { id: 22, name: "Martin Ødegaard", country: "Norway", club: "Arsenal", goals: 60, photo: "https://dailycannon.com/static/uploads/1/2025/05/arsenal-fc-v-afc-bournemouth-premier-league-3-1140x760.jpg" },
   { id: 23, name: "Jamal Musiala", country: "Germany", club: "Bayern Munich", goals: 52, photo: "https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-16x9-seo/v1736339073/cms/public/images/fcbayern-com/homepage/Saison-24-25/Spieler/Musiala/241207-musiala-jubel-get.jpg" },
   { id: 24, name: "Florian Wirtz", country: "Germany", club: "Bayer Leverkusen", goals: 48, photo: "https://e0.365dm.com/25/11/2048x1152/skysports-florian-wirtz-liverpool_7094337.jpg?20251128102513" },
   { id: 25, name: "Victor Osimhen", country: "Nigeria", club: "Galatasaray", goals: 125, photo: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/3C71/production/_103137451_917019100.jpg" },
   { id: 26, name: "Rafael Leão", country: "Portugal", club: "AC Milan", goals: 75, photo: "https://platform.bavarianfootballworks.com/wp-content/uploads/sites/24/chorus/uploads/chorus_asset/file/26024667/2219525451.jpg?quality=90&strip=all&crop=0%2C0.0036051625928337%2C100%2C99.992789674814&w=2400" },
   { id: 27, name: "Luis Díaz", country: "Colombia", club: "Liverpool", goals: 80, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJOExWrAffuvFFdoC9Rm7gmlolBIoofgxzQ&s" },
   { id: 28, name: "Alisson Becker", country: "Brazil", club: "Liverpool", goals: 1, photo: "https://www.thisisanfield.com/wp-content/uploads/P2022-11-24-FIFA_WC_Brazil_Serbia-67.jpg" },
   { id: 29, name: "Virgil van Dijk", country: "Netherlands", club: "Liverpool", goals: 55, photo: "https://c.files.bbci.co.uk/3a76/live/5a0cd8c0-8fa2-11ef-a4b3-0d6ca230504f.jpg" },
   { id: 30, name: "Julián Álvarez", country: "Argentina", club: "Atletico Madrid", goals: 85, photo: "https://getfootballnewsspain.com/wp-content/uploads/2025/10/rc-celta-de-vigo-v-atletico-de-madrid-laliga-ea-sports.jpg" },
   { id: 31, name: "Enzo Fernández", country: "Argentina", club: "Chelsea", goals: 25, photo: "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/4082d164-c947-4045-b9a7-8caee753c5a1/Enzo%20Fern%C3%A1ndez.jpg?ver=03-06-2025?w=3840&q=75" },
   { id: 32, name: "Cole Palmer", country: "England", club: "Chelsea", goals: 42, photo: "https://i2-prod.mirror.co.uk/article36637049.ece/ALTERNATES/s1200f/1_GettyImages-2258143097.jpg" },
   { id: 33, name: "Alexis Mac Allister", country: "Argentina", club: "Liverpool", goals: 45, photo: "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/acquiadam/2023-06/alexis-macallister-signing-promo-070623.jpg?itok=dhsk_Iy1" },
   { id: 34, name: "Khvicha Kvaratskhelia", country: "Georgia", club: "Napoli", goals: 45, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIQpefT-pySAxGuRKxT321rQfhb5tVZGiTA&s" },
   { id: 35, name: "Darwin Núñez", country: "Uruguay", club: "Liverpool", goals: 95, photo: "https://www.planetsport.com/image-library/land/1200/d/darwin-nunez-sep21.webp" },
   { id: 36, name: "Joshua Kimmich", country: "Germany", club: "Bayern Munich", goals: 50, photo: "https://www.sportsnet.ca/wp-content/uploads/2024/09/QsAiTPVh1-768x432.jpg" },
   { id: 37, name: "Leroy Sané", country: "Germany", club: "Bayern Munich", goals: 115, photo: "https://i.guim.co.uk/img/media/1d69ab30db5a71e4310bdf8441984cfed56f74fc/0_0_5165_3099/master/5165.jpg?width=465&dpr=1&s=none&crop=none" },
   { id: 38, name: "Alphonso Davies", country: "Canada", club: "Bayern Munich", goals: 18, photo: "https://www.theglobeandmail.com/resizer/AOsdjG4VFRqw2KY8LX29OwHF1JI=/arc-anglerfish-tgam-prod-tgam/public/4LNZJ7NFN5HEBJFHAHDUF63GUE.jpg" },
   { id: 39, name: "Dušan Vlahović", country: "Serbia", club: "Juventus", goals: 110, photo: "https://platform.blackwhitereadallover.com/wp-content/uploads/sites/33/chorus/uploads/chorus_asset/file/24530737/1248933790.jpg?quality=90&strip=all&crop=0.0050000000000026%2C0%2C99.99%2C100&w=2400" },
   { id: 40, name: "Nicolò Barella", country: "Italy", club: "Inter Milan", goals: 30, photo: "https://statics.cedscdn.it/photos/MED_LOW/56/20/8535620_12201511_onecms_1fjbzid39jvthn7dl18.jpg" },
   { id: 41, name: "Federico Valverde", country: "Uruguay", club: "Real Madrid", goals: 40, photo: "https://platform.managingmadrid.com/wp-content/uploads/sites/103/chorus/uploads/chorus_asset/file/25261232/1955840906.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400" },
   { id: 42, name: "Achraf Hakimi", country: "Morocco", club: "PSG", goals: 40, photo: "https://www.leparisien.fr/resizer/MAtDijuODTf1MJP8q6_orIYlfPI=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/GBK73UMHJFCRPEYKAZJF6APKEE.jpg" },
   { id: 43, name: "Theo Hernandez", country: "France", club: "AC Milan", goals: 35, photo: "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/273ff8c0-657e-4f6e-b248-e76f3df50f69/2024.10.06-HBD-Hernandez-WebHP.png" },
   { id: 44, name: "Mike Maignan", country: "France", club: "AC Milan", goals: 0, photo: "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/8dd07329-3121-46fe-bb6e-23575038b0a5/2026.01.31-CU-Rinnovo-Maignan-WebHP.png" },
   { id: 45, name: "Ousmane Dembélé", country: "France", club: "PSG", goals: 70, photo: "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_50,w_2404,h_1352/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/503/01jh2yrxawtrqepb6xcp.jpg" },
   { id: 46, name: "Alexander Isak", country: "Sweden", club: "Newcastle", goals: 90, photo: "https://contentfulproxy.stadion.io/9ec6988xevcz/1Y32vQrJ1OZBw8OuCwAAtc/665f595f2a421d657110ff100186a122/Alexander_Isak_leaves.jpg?fm=webp&fit=fill&f=top&w=2056&h=1542" },
   { id: 47, name: "Ollie Watkins", country: "England", club: "Aston Villa", goals: 110, photo: "https://talksport.com/wp-content/uploads/sites/5/2025/09/ollie-watkins-aston-villa-premier-1023046369.jpg?strip=all&" },
   { id: 48, name: "Emi Martínez", country: "Argentina", club: "Aston Villa", goals: 0, photo: "https://cdn.avillafan.com/wp-content/uploads/2025-09-05T014035Z_1893255088_UP1EL9504NMU1_RTRMADP_3_SOCCER-WORLDCUP-ARG-VEN-1.jpg" },
   { id: 49, name: "Dani Olmo", country: "Spain", club: "Barcelona", goals: 45, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24ED7thOKCn2pxLcC3vCbQ9KCgWq57JhfiA&s" },
   { id: 50, name: "Raphinha", country: "Brazil", club: "Barcelona", goals: 75, photo: "https://c.files.bbci.co.uk/682e/live/ff624760-fc0d-11ef-896e-d7e7fb1719a4.png" },
   { id: 51, name: "Neymar Jr", country: "Brazil", club: "Al Hilal", goals: 436, photo: "https://www.fcbarcelona.com/photo-resources/2019/03/26/d2356afa-3715-43f3-96df-eef1227ca65c/CCQyWVbJ.jpg?width=1200&height=750" },
   { id: 52, name: "Pedri", country: "Spain", club: "Barcelona", goals: 25, photo: "https://assets-cms.thescore.com/uploads/image/file/773379/w640xh480_GettyImages-2191173318.jpg?ts=1741111206" },
   { id: 53, name: "Gavi", country: "Spain", club: "Barcelona", goals: 15, photo: "https://semprebarca.com/wp-content/uploads/2024/10/Gavi-2.jpg" },
   { id: 54, name: "Ederson", country: "Brazil", club: "Manchester City", goals: 0, photo: "https://i.guim.co.uk/img/media/6a5280a3da2126ded5ee7d550a2ec280fce96de2/234_0_4594_3675/master/4594.jpg?width=465&dpr=1&s=none&crop=none" },
   { id: 55, name: "Marcus Rashford", country: "England", club: "Manchester United", goals: 135, photo: "https://i2-prod.manchestereveningnews.co.uk/article33287210.ece/ALTERNATES/s1200f/2_FC-Barcelona-v-Elche-CF-LaLiga-EA-Sports.jpg" },
   { id: 56, name: "James Maddison", country: "England", club: "Tottenham", goals: 75, photo: "https://static.independent.co.uk/2025/01/25/12/ff6076d4bf0d2348a2be700175e78d82Y29udGVudHNlYXJjaGFwaSwxNzM3ODE4NTg3-2.78775910.jpg" },
   { id: 57, name: "Kingsley Coman", country: "France", club: "Bayern Munich", goals: 75, photo: "https://platform.bavarianfootballworks.com/wp-content/uploads/sites/24/chorus/uploads/chorus_asset/file/24484265/1467152254.jpg?quality=90&strip=all&crop=0.0050000000000026%2C0%2C99.99%2C100&w=2400" },
   { id: 58, name: "Jan Oblak", country: "Slovenia", club: "Atletico Madrid", goals: 0, photo: "https://www.football-espana.net/wp-content/uploads/2023/05/JAN_OBLAKK.jpg" },
   { id: 59, name: "Karim Benzema", country: "France", club: "Al Ittihad", goals: 470, photo: "https://zamin.uz/uploads/posts/2026-02/0f578e4196_madurodan-keyingi-venesuela-hokimiyat-kimning-qoliga-otdi-1.webp" },
   { id: 60, name: "Thibaut Courtois", country: "Belgium", club: "Real Madrid", goals: 0, photo: "https://www.football-espana.net/wp-content/uploads/2025/10/Courtois.jpg" }
];

let grid = document.querySelector('.grid')
let fragment = document.createDocumentFragment()
const temp = document.getElementById('template')
function Yaratish(shablon) {
   grid.innerHTML = ''
   shablon.forEach(qator => {
      const nusxa = temp.content.cloneNode(true)
      let nom = nusxa.querySelector('.nom')
      let davlati = nusxa.querySelector('.davlati')
      let jamoasi = nusxa.querySelector('.jamoasi')
      let goal = nusxa.querySelector('.goal')
      let rasm = nusxa.querySelector('.photo')
      nom.innerText = qator.name
      davlati.innerText = qator.country
      jamoasi.innerText = qator.club
      goal.innerText = `Goals:${qator.goals}`
      rasm.src = qator.photo
      fragment.appendChild(nusxa)
   });
   grid.appendChild(fragment)
}
let tartib = document.getElementById('tartib')
let input = document.getElementById('input')
let clubtop = document.getElementById('clubtop')

function qidirish() {
   let qidirilayotgan = input.value.toLowerCase().trim()
   let qiymat = tartib.value
   let topilgan = futbolchilar.filter((harbiri) => {
      let natija = harbiri.name.toLowerCase().includes(qidirilayotgan)
      let clubTopilgan = (clubtop.value === "all" || clubtop.value === harbiri.club)
      return natija && clubTopilgan
   })
   if(qiymat == "kam"){
      topilgan = topilgan.sort((a,b)=>{
         return a.goals - b.goals
      })
   }
   if(qiymat == "kup"){
      topilgan = topilgan.sort((a,b)=>{
         return b.goals - a.goals
      })
   }
   Yaratish(topilgan)
}
Yaratish(futbolchilar)

clubtop.addEventListener('change', qidirish)
input.addEventListener('input', qidirish)
tartib.addEventListener('change', qidirish)