import Image from "next/image";


const languageFamilies = [
  "Afroasiatic", "Algic", "Amto-Musan", "Arauan", "Araucanian", "Arawakan", 
  "Arutani-Sape", "Australian (Pama-Nyungan)", "Austroasiatic", "Austronesian", 
  "Aymaran", "Barbacoan", "Bayono-Awbono", "Boran", "Caddoan", "Cahuapanan", 
  "Cariban", "Chapacuran", "Chibchan", "Chimakuan", "Chocoan", "Chon", 
  "Chukotko-Kamchatkan", "Chumashan", "Cochimi-Yuman", "Dravidian", 
  "East Bird's Head-Sentani", "Eskimo-Aleut", "Guaicuruan", "Harakmbut", 
  "Hmong-Mien", "Indo-European", "Iroquoian", "Japonic", "Jivaroan", 
  "Kartvelian (South Caucasian)", "Katukinan", "Keresan", "Khoe-Kwadi", 
  "Kiowa-Tanoan", "Koreanic", "Kra-Dai", "Kx'a", "Left May", "Lower Mamberamo", 
  "Macro-Ge", "Maku", "Mande", "Mascoian", "Matacoan", "Mayan", "Misumalpan", 
  "Mixe-Zoquean", "Mongolic", "Mura-Pirahã", "Muskogean", "Nambikwaran", 
  "Niger-Congo", "Nilo-Saharan", "Nimboran", "North Caucasian", "Nyulnyulan", 
  "Oto-Manguean", "Pano-Tacanan", "Pauwasi", "Penutian", "Pomoan", "Quechuan", 
  "Ramu-Lower Sepik", "Salishan", "Sepik", "Sino-Tibetan", "Siouan-Catawban", 
  "Skou", "South Bougainville", "Tai-Kadai", "Tequistlatecan", "Tor-Kwerba", 
  "Torricelli", "Totonacan", "Trans-New Guinea", "Tucanoan", "Tungusic", 
  "Tupian", "Turkic", "Tuu", "Uralic", "Uto-Aztecan", "Wakashan", "West New Britain", 
  "Wintuan", "Witotoan", "Yanomaman", "Yeniseian", "Yok-Utian", "Yukaghir", 
  "Yuki-Wappo", "Zamucoan", "Zaparoan"
];




export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
