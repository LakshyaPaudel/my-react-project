export const words = [
"apple","table","chair","mouse","input","value","count","index","array","scope","const","timer","delay","click","event",
"fetch","parse","merge","slice","split","round","floor","clamp","color","theme","width","style","align","block","float",
"fixed","image","video","audio","frame","child","query","match","check","clear","close","reset","print","write","store",
"cache","token","login","route","state","model","table","field","valid","logic","debug","trace","watch","react","babel",
"mocha","coder","smart","start","begin","build","light","sound","point","speed","level","score","lives","power","magic",
"happy","smile","laugh","peace","world","earth","ocean","river","stone","plant","grass","cloud","storm","flame","heart",
"dream","night","sunny","beach","green","white","black","brown","shiny","quick","brave","sweet","fresh"
];
export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}