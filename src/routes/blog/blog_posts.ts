import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

// Import all blog posts
import { blogPost1 } from './1-svycarske-dobrodruzstvi/blog_post';
import { blogPost2 } from './2-retrofest-2024/blog_post';
import { blogPost3 } from './3-novinky-na-pocatku-roku-2024/blog_post';
import { blogPost4 } from './4-nove-zachranene-hry-od-firmy-mael/blog_post';
import { blogPost5 } from './5-matematika-petr-stasiak/blog_post';
import { blogPost6 } from './6-basic/blog_post';
import { blogPost7 } from './7-take2-press/blog_post';
import { blogPost8 } from './8-rozhovor-pavel-suchmann/blog_post';
import { blogPost9 } from './9-playboy2-riskuj/blog_post';
import { blogPost10 } from './10-pokemon-hraj-si-s-nami/blog_post';
import { blogPost11 } from './11-arma-bonusdisk/blog_post';
import { blogPost12 } from './12-rozhovor-vodak-videostop/blog_post';
import { blogPost13 } from './13-zachraneny-videostop/blog_post';
import { blogPost14 } from './14-zaznam-retrofestu-2024/blog_post';
import { blogPost15 } from './15-gta-3-prirucky/blog_post';
import { blogPost16 } from './16-ops2-magazin/blog_post';
import { blogPost17 } from './17-rozhovor-vladimir-bezdek/blog_post';
import { blogPost18 } from './18-projekt-citov/blog_post';
import { blogPost19 } from './19-jrc-letaky/blog_post';
import { blogPost20 } from './20-prislusenstvi-zxspectrum/blog_post';
import { blogPost21 } from './21-mod-chipy/blog_post';
import { blogPost22 } from './22-skeny-scenaru/blog_post';
import { blogPost23 } from './23-prepis-zdenek-vodak/blog_post';
import { blogPost24 } from './24-8-disketovka/blog_post';
import { blogPost25 } from './25-stehovani-strahov/blog_post';
import { blogPost26 } from './26-joysticky/blog_post';
import { blogPost27 } from './27-nabidkovy-katalog/blog_post';
import { blogPost28 } from './28-citov-kazety-spectrum/blog_post';
import { blogPost29 } from './29-citov-kazety-atari/blog_post';
import { blogPost30 } from './30-bytefest-2024/blog_post';
import { blogPost31 } from './31-citov-dat-kazety/blog_post';
import { blogPost32 } from './32-citov-zpravodaj/blog_post';
import { blogPost33 } from './33-citov-kazety-spectrum/blog_post';
import { blogPost34 } from './34-martin-kadlcik/blog_post';
import { blogPost35 } from './35-citov-josef-havelka/blog_post';
import { blogPost36 } from './36-skeny-tipstation/blog_post';
import { blogPost37 } from './37-pocitac-tns-xt/blog_post';
import { blogPost38 } from './38-lubor-kopecky-dodatek/blog_post';
import { blogPost39 } from './39-os2-warp-3-cs/blog_post';
import { blogPost40 } from './40-efgamp/blog_post';
import { blogPost41 } from './41-excalibur-skeny/blog_post';
import { blogPost42 } from './42-ondra-pocitace/blog_post';
import { blogPost43 } from './43-ondra-programy/blog_post';
import { blogPost44 } from './44-bulanci-dotaznik/blog_post';
import { blogPost45 } from './45-avg-ceska-verze/blog_post';
import { blogPost46 } from './46-spoluprace-nfa/blog_post';
import { blogPost47 } from './47-ceske-arkady/blog_post';
import { blogPost48 } from './48-navod-televizni-tenis-tesla/blog_post';
import { blogPost49 } from './49-podcast-modrak/blog_post';
import { blogPost50 } from './50-hifi-zpravodaje/blog_post';
import { blogPost51 } from './51-kybermys-sken/blog_post';
import { blogPost52 } from './52-timewarrior/blog_post';
import { blogPost53 } from './53-honza-oprava/blog_post';
import { blogPost54 } from './54-bulanci-paratexty/blog_post';
import { blogPost55 } from './55-muni-rozhovor/blog_post';
import { blogPost56 } from './56-orna-dopisy/blog_post';
import { blogPost57 } from './57-amiga-diskety/blog_post';
import { blogPost58 } from './58-poke-navod/blog_post';
import { blogPost59 } from './59-orbis-pictus/blog_post';
import { blogPost61 } from './61-oral-history-cost/blog_post';
import { blogPost62 } from './62-oprava-disketovek/blog_post';
import { blogPost63 } from './63-orna-dopisy-2/blog_post';
import { blogPost64 } from './64-commodore-pc-1/blog_post';
import { blogPost65 } from './65-orna-dopisy-3/blog_post';
import { blogPost67 } from './67-pong-xd8001-pod-drobnohledem/blog_post';
import { blogPost68 } from './68-videostop-prednaska/blog_post';
import { blogPost69 } from './69-pixelarchiv-zeny/blog_post';
import { blogPost70 } from './70-pong-mas601-pod-mikroskopem/blog_post';
import { blogPost71 } from './71-rozhovor-retro-hrac/blog_post';
import { blogPost72 } from './72-pong-mas601-pod-lupou/blog_post';
import { blogPost73 } from './73-seznam-her/blog_post';
import { blogPost74 } from './74-oprava-mato-1/blog_post';
import { blogPost75 } from './75-oprava-mato-2/blog_post';
import { blogPost76 } from './76-oprava-jaguar/blog_post';
import { blogPost77 } from './77-oprava-didaktik-gama/blog_post';
import { blogPost78 } from './78-oprava-coleco-vision/blog_post';

// All blog posts sorted by id ascending (oldest first)
export const blogPosts: BlogPost[] = [
	blogPost1, blogPost2, blogPost3, blogPost4, blogPost5, blogPost6, blogPost7,
	blogPost8, blogPost9, blogPost10, blogPost11, blogPost12, blogPost13, blogPost14,
	blogPost15, blogPost16, blogPost17, blogPost18, blogPost19, blogPost20, blogPost21,
	blogPost22, blogPost23, blogPost24, blogPost25, blogPost26, blogPost27, blogPost28,
	blogPost29, blogPost30, blogPost31, blogPost32, blogPost33, blogPost34, blogPost35,
	blogPost36, blogPost37, blogPost38, blogPost39, blogPost40, blogPost41, blogPost42,
	blogPost43, blogPost44, blogPost45, blogPost46, blogPost47, blogPost48, blogPost49,
	blogPost50, blogPost51, blogPost52, blogPost53, blogPost54, blogPost55, blogPost56,
	blogPost57, blogPost58, blogPost59, blogPost61, blogPost62, blogPost63, blogPost64,
	blogPost65, blogPost67, blogPost68, blogPost69, blogPost70, blogPost71, blogPost72,
	blogPost73, blogPost74, blogPost75, blogPost76, blogPost77, blogPost78
];
