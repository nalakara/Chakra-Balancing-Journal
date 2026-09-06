import type { ChakraInfo } from './types';
import {
  RootChakraIcon,
  SacralChakraIcon,
  SolarPlexusChakraIcon,
  HeartChakraIcon,
  ThroatChakraIcon,
  ThirdEyeChakraIcon,
  CrownChakraIcon
} from './components/IconComponents';

const CHAKRA_DATA: Omit<ChakraInfo, 'dayRange'>[] = [
  {
    chakraName: "Root Chakra",
    sanskritName: "Muladhara",
    focus: "stabilitas, keamanan, dasar",
    activities: "Jalan tanpa alas kaki, makan sayuran akar, peregangan pinggul.",
    affirmation: "Aku aman; Aku terhubung dengan bumi; Aku kuat.",
    color: "text-red-500",
    gradient: "from-red-50 to-red-200",
    icon: RootChakraIcon,
    description: "Cakra Dasar adalah fondasi sistem energimu. Terletak di dasar tulang belakang, ia mengatur rasa aman, stabilitas, dan kebutuhan dasar untuk bertahan hidup. Ini adalah akar yang menghubungkanmu dengan energi bumi.",
    imbalanceSigns: "Merasa cemas, tidak aman, masalah keuangan, nyeri punggung bawah, kelelahan, dan rasa tidak terhubung dengan tubuh.",
    balanceBenefits: "Merasa aman, stabil, dan membumi. Memiliki energi fisik yang kuat, rasa percaya diri yang mendasar, dan kemampuan untuk mewujudkan kebutuhan.",
  },
  {
    chakraName: "Sacral Chakra",
    sanskritName: "Svadhisthana",
    focus: "kreativitas, emosi, kesenangan",
    activities: "Menari, melukis, minum banyak air.",
    affirmation: "Aku kreatif; Aku merasa dengan bebas; Aku menikmati hidup.",
    color: "text-orange-500",
    gradient: "from-orange-50 to-orange-200",
    icon: SacralChakraIcon,
    description: "Terletak di perut bagian bawah, Cakra Sakral adalah pusat kreativitas, emosi, dan energi seksual. Ia mengatur kemampuanmu untuk merasakan kegembiraan, kesenangan, dan mengalir bersama perubahan hidup.",
    imbalanceSigns: "Kesulitan mengekspresikan emosi, rasa bersalah, kecanduan, kurangnya kreativitas, masalah reproduksi, dan kekakuan emosional.",
    balanceBenefits: "Aliran kreativitas yang sehat, kecerdasan emosional, kemampuan menikmati hidup, hubungan yang sehat, dan gairah hidup yang tinggi.",
  },
  {
    chakraName: "Solar Plexus Chakra",
    sanskritName: "Manipura",
    focus: "kekuatan pribadi, kepercayaan diri",
    activities: "Latihan inti, tertawa, menetapkan niat.",
    affirmation: "Aku kuat; Aku percaya diri; Aku bertindak dari kekuatan batinku.",
    color: "text-yellow-500",
    gradient: "from-yellow-50 to-yellow-200",
    icon: SolarPlexusChakraIcon,
    description: "Cakra Solar Plexus adalah pusat kekuatan pribadi, kemauan, dan harga diri. Terletak di ulu hati, ia seperti matahari internal yang memancarkan kepercayaan diri dan kemampuan untuk mengambil tindakan.",
    imbalanceSigns: "Rendah diri, kesulitan membuat keputusan, masalah pencernaan, perfeksionisme, dan sifat suka mengontrol atau sebaliknya, terlalu pasif.",
    balanceBenefits: "Kepercayaan diri yang tinggi, rasa memiliki tujuan, disiplin diri yang baik, metabolisme yang sehat, dan kemampuan untuk mengubah niat menjadi tindakan.",
  },
  {
    chakraName: "Heart Chakra",
    sanskritName: "Anahata",
    focus: "cinta, penyembuhan",
    activities: "Napas hati, surat maaf, tindakan kebaikan.",
    affirmation: "Aku layak dicintai; Aku membuka hati; Aku mengalirkan cinta.",
    color: "text-green-500",
    gradient: "from-green-50 to-green-200",
    icon: HeartChakraIcon,
    description: "Sebagai jembatan antara cakra bawah dan atas, Cakra Hati adalah pusat cinta, kasih sayang, dan pengampunan. Ia mengatur kemampuan kita untuk memberi dan menerima cinta tanpa syarat, baik untuk diri sendiri maupun orang lain.",
    imbalanceSigns: "Takut akan keintiman, rasa kesepian, dendam, cemburu, masalah pernapasan atau jantung, dan kesulitan mempercayai orang lain.",
    balanceBenefits: "Merasa damai, penuh kasih, dan terhubung. Kemampuan untuk memaafkan, membangun hubungan yang tulus, dan merasakan empati yang mendalam.",
  },
  {
    chakraName: "Throat Chakra",
    sanskritName: "Vishuddha",
    focus: "komunikasi, ekspresi diri",
    activities: "Humming, menulis hal yang ingin diucapkan, postur terbuka.",
    affirmation: "Aku berbicara jelas; Suaraku membawa kebenaran; Aku bebas mengekspresikan diri.",
    color: "text-blue-500",
    gradient: "from-blue-50 to-blue-200",
    icon: ThroatChakraIcon,
    description: "Terletak di tenggorokan, Cakra Tenggorokan adalah pusat komunikasi dan ekspresi diri. Ia mengatur kemampuanmu untuk berbicara jujur, mendengarkan dengan saksama, dan mengekspresikan kebenaran unikmu kepada dunia.",
    imbalanceSigns: "Kesulitan mengungkapkan pikiran, takut berbicara di depan umum, sering berbohong, sakit tenggorokan, dan kecenderungan untuk bergosip.",
    balanceBenefits: "Komunikasi yang jelas dan jujur, kemampuan mendengarkan yang baik, ekspresi kreatif yang lancar, dan integritas antara pikiran, kata, dan tindakan.",
  },
  {
    chakraName: "Third Eye",
    sanskritName: "Ajna",
    focus: "intuisi, kejernihan",
    activities: "Meditasi hening, fokus alis, kurangi stimulasi.",
    affirmation: "Aku melihat jelas; Intuisiku membimbing; Pikiranku jernih.",
    color: "text-indigo-500",
    gradient: "from-indigo-50 to-indigo-200",
    icon: ThirdEyeChakraIcon,
    description: "Cakra Mata Ketiga, yang terletak di antara alis, adalah pusat intuisi, imajinasi, dan kebijaksanaan. Ia adalah 'mata batin' yang memungkinkanmu melihat melampaui dunia fisik dan terhubung dengan bimbingan internal.",
    imbalanceSigns: "Pikiran berkabut, kesulitan fokus, mimpi buruk, sakit kepala, kurang imajinasi, dan sinisme terhadap hal-hal spiritual.",
    balanceBenefits: "Intuisi yang tajam, pikiran yang jernih, imajinasi yang hidup, kemampuan memvisualisasikan masa depan, dan kebijaksanaan batin yang kuat.",
  },
  {
    chakraName: "Crown",
    sanskritName: "Sahasrara",
    focus: "kesadaran, koneksi spiritual",
    activities: "Meditasi keheningan, cahaya putih keemasan, syukur.",
    affirmation: "Aku terhubung; Aku damai; Aku satu dengan kehidupan.",
    color: "text-purple-500",
    gradient: "from-purple-50 to-purple-200",
    icon: CrownChakraIcon,
    description: "Terletak di puncak kepala, Cakra Mahkota adalah gerbang menuju kesadaran yang lebih tinggi dan koneksi spiritual. Ia adalah titik di mana energi individumu bertemu dengan kesadaran universal, membawa rasa damai dan kesatuan.",
    imbalanceSigns: "Merasa terisolasi, depresi, kurangnya tujuan hidup, sinisme, dan keterikatan berlebihan pada hal-hal duniawi.",
    balanceBenefits: "Perasaan terhubung dengan alam semesta, kedamaian batin, kebijaksanaan, kesadaran spiritual, dan pemahaman bahwa segala sesuatu saling terhubung.",
  },
];

const getDayRange = (index: number) => {
    const start = index * 3 + 1;
    const end = start + 2;
    return `Hari ${start}–${end}`;
}

export const CHAKRA_PROGRAM: ChakraInfo[] = Array(21).fill(null).map((_, i) => {
    const chakraIndex = Math.floor(i / 3);
    return {
        ...CHAKRA_DATA[chakraIndex],
        dayRange: getDayRange(chakraIndex),
    };
});
