'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "026b6d6336f31c16f0fd94567cbb32b4",
"version.json": "bb7879f53d2442a1bc305ec083d950a6",
"index.html": "70c55940a75245f8a005ed05dc553084",
"/": "70c55940a75245f8a005ed05dc553084",
"main.dart.js": "762a044d806ee89f660c007a630fd24e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "03c21934b20926b9dcb421454318dcc9",
"icons/Icon-192.png": "d3e18658569671f46908d7af1c6cf5bf",
"icons/Icon-maskable-192.png": "d3e18658569671f46908d7af1c6cf5bf",
"icons/Icon-maskable-512.png": "8a72fab828c45d4cec577b6203c6d928",
"icons/Icon-512.png": "8a72fab828c45d4cec577b6203c6d928",
"manifest.json": "4fdf99eadd630deccc5880d7246f31c0",
"assets/AssetManifest.json": "6ddf4f833543f1018e140bab4a523943",
"assets/NOTICES": "dee48c3fdca374d5b79b661c1af9df20",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fe7d84783fad6f65e609795688679225",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/klouds.frag": "1dd3678ceefdcbb8f45db77d7beeaa1b",
"assets/AssetManifest.bin": "71b4646974c73c44bcbcd44533363fa5",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/purple-trapezoid.webp": "b1163121f0047bd7873dfeeb2cd6becc",
"assets/assets/press.mp3": "5f7aed7efd9945fd43b9bb5c103e51c5",
"assets/assets/ZMexit.mp3": "f3df013c3723e0b03a5d33b6acd2da95",
"assets/assets/red-docagon.webp": "69615db1a99995bad402109e1888bfc1",
"assets/assets/Wall_Red_Mid_Back.webp": "a2aa9ba927b908d155598834845fea67",
"assets/assets/hiwr2.webp": "dc059c685ca4159e4ebaf7ace4ddafdc",
"assets/assets/bigmac.webp": "77a122d303e7fe1616d728fced1053ca",
"assets/assets/red-pentagon.webp": "31bb8e2fe47a51fb9b4a9bb16e268d1b",
"assets/assets/orange-pentagon.webp": "7d8bca8331582dbc87c9f1118600f414",
"assets/assets/hmar1.webp": "9c375d36fd123427d1d47e98c18250dc",
"assets/assets/goldstar.webp": "6bd19f63f0891b9303e6db3025787fb6",
"assets/assets/2-4.webp": "6d00823e5df175404649f6e1d6a362e7",
"assets/assets/Baby-Chicken2.webp": "dc316ba7798015a6f98da09f6c3db94a",
"assets/assets/iphone.webp": "c2764599f7c2070b47987b3643b036f0",
"assets/assets/hc1.webp": "0a7c0b2c21bc223c2ea15fccccc124f9",
"assets/assets/dumbells.webp": "cac1eab3d8ad448c2c97d9415b184a46",
"assets/assets/1-1.webp": "cb5419a47885219ab6465610e1542495",
"assets/assets/4-2.webp": "af8c5ec5789a5a5584e0d983aefdf46b",
"assets/assets/muffin.webp": "a33ccae4f5ed0557a61b1130e30910e6",
"assets/assets/orange-docagon.webp": "f80ef8f67d81090d85800d0bacdd929a",
"assets/assets/drink.webp": "caddd3d1c76a92e04142b8dd57b7af9d",
"assets/assets/UofM1.webp": "d55b231743a923b90812c5d7247fd168",
"assets/assets/Spin%2520Background.webp": "07b367bd3a84b8b4bd021387c7768aa6",
"assets/assets/bicycle.webp": "c7305e240e1ad9ba1fd5ac2ad29f6784",
"assets/assets/HeroRunning6.webp": "519bb8bf1ee0bc738f6152b6a46da0ec",
"assets/assets/TargetAreaMarker.webp": "3649b6aba5995a94b040c6096ee2e532",
"assets/assets/ha1.webp": "cd567fd75deaf0f0c68831ea30049bb0",
"assets/assets/shoe3.webp": "e882c71e38e4ba5b71e2578edcee79a1",
"assets/assets/Wall_Red_Left_Back.webp": "39bc3855a869c74d23ca24ffde60673f",
"assets/assets/police-hat.webp": "ad788ec2899cfde3ebc9eeda55fb43f6",
"assets/assets/m3.webp": "71a3c2e9de52cc1cd7db0c988cf1461f",
"assets/assets/aboutus.webp": "c93d86bb687e34245e70e099af60a1e1",
"assets/assets/hv2.webp": "936d6044708fec2a129e0437a4dc7470",
"assets/assets/old-bike.webp": "2fca82c6eb06d6cb2a2c74e63cdbae2b",
"assets/assets/horse.webp": "54c567b1317c54bb459adfb8a25456e9",
"assets/assets/hms5.webp": "3aa3b3a7a6fe1af5986258901e45ce5f",
"assets/assets/squirl.webp": "491c2de5fe2bc9af59919aa477f7e013",
"assets/assets/mirror.webp": "dbc31e587f5b2d3f0112245fcad93bc7",
"assets/assets/hms4.webp": "182732940ee6acfd3d28847e05217b71",
"assets/assets/blue-circle.webp": "986f6f285a6e13709536374abb1b5f3e",
"assets/assets/goose.webp": "13c843388a9435043b3dec961d602ca8",
"assets/assets/beer.webp": "7a55ea0fc74a0d9c92f64c401f0e2b1a",
"assets/assets/hv3.webp": "449ee83f2bf69405d446d2a17d85dd5f",
"assets/assets/matching.webp": "965ccd024096b5bb47a020b967a33ca0",
"assets/assets/red-hexagon.webp": "344ae628af9d95b510596ffcd3d52ce2",
"assets/assets/bird.webp": "101af23c96f48cad8cd550a695982236",
"assets/assets/m2.webp": "64d28d7a05cf069e4330b5797c48208a",
"assets/assets/Foliage.webp": "2fa900211c2e6af4480c8c4dad4fefa7",
"assets/assets/orange-hexagon.webp": "28a2ea121a451e56fe545803939137f2",
"assets/assets/shoe2.webp": "5caa4089988197ded4abd79099b12c7c",
"assets/assets/FloorNoTiles.webp": "bf6d1bcd8cbe11fa6ab300f2597ce7ca",
"assets/assets/boombox.webp": "4a72b0ae1bb76a3b33fdbd4eab500a4d",
"assets/assets/star.webp": "841df0c5cda40ab019126ba628e8696b",
"assets/assets/purple-square.webp": "f5810b66e3258f52c18e4ef0966809fe",
"assets/assets/aqua-square.webp": "757a1c39828301cbfd0de7a56d8f3e6b",
"assets/assets/HeroRunning7.webp": "f0a03a0c424ad2209cbcad063fdc9f39",
"assets/assets/luxury-chair.webp": "7c1d16d31fd0a8a208fdf90493ee9492",
"assets/assets/battery.webp": "2584d672e058337350db04bec8ca3c1d",
"assets/assets/school.webp": "8a427843a47d4da5fd80f00b3045f046",
"assets/assets/4-3.webp": "7489ac9610a22ba1199b53655a25f9f4",
"assets/assets/old-tv.webp": "5ab6413d7d17602a333249e25ab2f780",
"assets/assets/purple-pentagon.webp": "b3b6a17902c111328f24a2fc4d99eee6",
"assets/assets/grey-circle.webp": "d81c5ba50a87c5fdac12b38109d5853a",
"assets/assets/Wall_Red_Right_Back.webp": "717bdab5bc316f2125376dc7ad697aaa",
"assets/assets/grey-trapezoid.webp": "3cd1282221cfef6cfc4865fcb62012e7",
"assets/assets/Baby-Chicken3.webp": "bebe8ad7f2d7196229e4af049ce36016",
"assets/assets/desk.webp": "de564725a61799ad347fbed18bc0330a",
"assets/assets/Baby-Chicken.webp": "fd9d484f596fb0682ec30833ea18987d",
"assets/assets/hotdog.webp": "67e979d11a7c8f5fb188a74d61048ccc",
"assets/assets/hiwr3.webp": "974882f836132850f72d2da114519beb",
"assets/assets/orange-square.webp": "b87c1f2d9da68adc598ee3a3b16fcb1c",
"assets/assets/nintendo.webp": "eb47cfdc8abab8e400a19a6667ac6d98",
"assets/assets/3-1.webp": "16527867e4136fc7a40623bdd06f76db",
"assets/assets/aqua-plus.webp": "606f6543389185025292be191fcae684",
"assets/assets/trapezoid.webp": "e5a1e7c5d54a9e7f579698587cae760a",
"assets/assets/green-rectangle.webp": "5a05fcb9299de39c228a4f6cad5952dd",
"assets/assets/baby.webp": "9a6fa38832650c8e17602bb41831359f",
"assets/assets/HeroRunning0.webp": "ad27dc45919f66e05d5396ffe3db373f",
"assets/assets/work3.webp": "b3a7cdef8062a7a0951b317e39a4dc47",
"assets/assets/MakeSentences.webp": "680ed735d2b12ff3fb41b31409844f7d",
"assets/assets/Table.webp": "92818f2ffa24c00ba6420567d9da1b14",
"assets/assets/aqua-pentagon.webp": "406e03d23e55a55fd4d5f47f603ed07b",
"assets/assets/drink3.webp": "8f42e41c68105b0520a72bddd7a7ae6c",
"assets/assets/books.webp": "69637d3fadb9741dee071e02338346cc",
"assets/assets/drop.mp3": "d1acd467943830cc855c66fef8b59b55",
"assets/assets/Wall_Frame_Front.webp": "6c958b75e3bcddeab98feaa6763484aa",
"assets/assets/grey-square.webp": "22b72355efd0f11d2e0b028d820dcd03",
"assets/assets/hexagon.webp": "ce8f2b8957d55abea3db7655ee39e1cc",
"assets/assets/hv4.webp": "b936d103af9f0ce8b83a9452209af44d",
"assets/assets/orange-circle.webp": "3227f69834a48603d47fa672b66396b1",
"assets/assets/hms3.webp": "663c4934aba3aef201cedeb20dd94cc4",
"assets/assets/Wall_Black_Left_Back.webp": "1c927e74003d73695f64e3964f67d56b",
"assets/assets/Wall_Beige_Mid_Back.webp": "e36196ab535aa693b626a59fa4b9e02c",
"assets/assets/joker.webp": "dd962f999168a2611eb8dbb585d3cb12",
"assets/assets/school3.webp": "02993e0305feeb6079600d9ae9624dbb",
"assets/assets/car2.webp": "b3d319ce47296f454ee7fbf12dee8b30",
"assets/assets/Wall_Black_Right_Back.webp": "9135f80cbe335eaa91ad6d5d7cd2f117",
"assets/assets/Categorization.webp": "d97f18a10b49e398738767342c4b5644",
"assets/assets/statue3.webp": "45c4f93894b44ddcd4a5d90feb578520",
"assets/assets/orange-rectangle.webp": "fd8dd6a51fa97ffc96f6285bce1958ee",
"assets/assets/hiwr4.webp": "4ab903544a4ee98035eb3bbadfdd0b81",
"assets/assets/blue-square.webp": "adb6296d9f7bc0c75345db0f2cd98fe8",
"assets/assets/Wall_Beige_Mid_Front.webp": "f61392ecaee518c226e41b7b005f5187",
"assets/assets/aqua-docagon.webp": "9cd570f9b34fee710716b9b39ca77fd4",
"assets/assets/hmar7.webp": "5cf1fd86d5373e0067a954c4ec4b0e07",
"assets/assets/2-2.webp": "3089e4950c1c4be0f5ad8d3269dd3eb0",
"assets/assets/right.webp": "d0231b8718d85fc79f75392996a4ff07",
"assets/assets/school-bus.webp": "ec48569f1a4b0c8747467a80cdc6d26f",
"assets/assets/Spin%2520Tile.webp": "b42309041ee16c1570f46fa0f2e05bde",
"assets/assets/LampSpatial.webp": "88f5b1aedeec8b39836bfef187b499b2",
"assets/assets/4-4.webp": "4721e42e4d0abf9dc5b11b33160c7c44",
"assets/assets/aqua-circle.webp": "5756ff4e7cf0c3913ab6a07355444329",
"assets/assets/purple-circle.webp": "1c1ce4550eab6788e9dc1c6c8e9ffa3c",
"assets/assets/cokeglass.webp": "afa74d74db4a126b639d69471e4d8ca5",
"assets/assets/docagon.webp": "d081361df79d3f5d41d94f97be0bfd7d",
"assets/assets/4-5.webp": "92492840608d0fc82e80e5e02c1b1168",
"assets/assets/Wall_Beige_Right_Back.webp": "35ea59971d18ad8792e14ae93d4d2e77",
"assets/assets/sheep.webp": "8ca28b3a68ba706e9943530b289a514e",
"assets/assets/shoe.webp": "2d79f5d423b1d0e04fd81e838d6df2f7",
"assets/assets/2-3.webp": "0f53bd866ad36a94d26705276670c4a2",
"assets/assets/levelcomplete.mp3": "5e7173717b86c30f2439210d68adce11",
"assets/assets/hmar6.webp": "3ab292319c71e1db16cb74268de7baed",
"assets/assets/red-trapezoid.webp": "389a3f997057f0632c86191b2bb74bb8",
"assets/assets/hiwr5.webp": "c67bb5203f598cc7221219d3421b5687",
"assets/assets/green-pentagon.webp": "d1164ba7460d7dece600fdc57dfce827",
"assets/assets/success.mp3": "8aa49fc07c6057444e6924c5fb7e750d",
"assets/assets/SpatialMemory.webp": "23fb3eeb36dee29363deedcaee91adfe",
"assets/assets/statue2.webp": "9f9b3c03e58c888297d16efecf3a9533",
"assets/assets/school2.webp": "057253e2f7b75218b5144ee0159bd4b6",
"assets/assets/fantasy.webp": "6e08a693a79cd8b67dc27cea36fa0974",
"assets/assets/car3.webp": "bd7cafb4dc656f267a6f93ebe39c6d53",
"assets/assets/aqua-rectangle.webp": "92cbe3b3cb9c4ed88bc92ac755a9abe2",
"assets/assets/AssociativeMemory.webp": "12ca895469e9a04355da29d76869a2d2",
"assets/assets/hms2.webp": "5285fde445a4b78b8a858eba62abfd05",
"assets/assets/robot.webp": "83dd211d4af9b0b837ca9acb3ef5be49",
"assets/assets/pretzel.webp": "a29aaf7953f0b94f91acb199defbe9a5",
"assets/assets/aqua-hexagon.webp": "e94a38aec3f019af63f66abb8f54f1ff",
"assets/assets/big-ben.webp": "cca21e9cd7a3ab841445c7c87dd7e574",
"assets/assets/hv5.webp": "c91ed996baff7f1b3cf44bcec7d3be96",
"assets/assets/comfy-chair.webp": "8f2df65c3ff71857cd6da74ac7389e10",
"assets/assets/purple-plus.webp": "75abf402d2529e04b83e46ca27656fde",
"assets/assets/fight.webp": "9d71354c4dfe97ea050f992add43e6a4",
"assets/assets/waffles.webp": "65113ad4ef0b59602a55c2e98fb38871",
"assets/assets/locked.webp": "5486ce0e3fd8ef0e60ceab4abce2c12c",
"assets/assets/green-plus.webp": "48848ff9fbe81ee2aaee72b53cdc6d1a",
"assets/assets/work2.webp": "ec916e512933a403b2ab73793064e23a",
"assets/assets/man.webp": "2f77f12259bd775f46ef2e24b0c1a267",
"assets/assets/drink2.webp": "030b82fe2e2908ab99af1d2d383974eb",
"assets/assets/blue-trapezoid.webp": "1d02a69555c727c2903893f6d8d4ab61",
"assets/assets/triangle.webp": "403da3717c1a89e747cca4f0e3b530df",
"assets/assets/HeroRunning1.webp": "8de57b62e8ab1ba5cc42388ce215e3a3",
"assets/assets/rectangle.webp": "e5abed95a7556b56a7cc971de168bda5",
"assets/assets/instructions.webp": "908f38d50d53ce6cc6edda8aed86eea9",
"assets/assets/hms1.webp": "bcc4cc0eb76ea4fb888cc5cbf74e0900",
"assets/assets/purple-docagon.webp": "749fc086f5afa74ddd7f78b871d2cd67",
"assets/assets/hv6.webp": "03796b35381a7a47daf511a3b5061bac",
"assets/assets/grey-plus.webp": "e27c3577f187f3e9ee16bd77505a52f3",
"assets/assets/grey-rectangle.webp": "18de72d1b4e268e048127f79d7a39e70",
"assets/assets/circle.webp": "0e5289c03c4d4124ad6b30adbc67551e",
"assets/assets/Wall_Red_Mid_Front.webp": "18435900c399d213a63e05492674b819",
"assets/assets/ha5.webp": "109a5333a0fec5e9393962485b1d0183",
"assets/assets/grey-hexagon.webp": "a6a02a35725f4735b8938054f328e26f",
"assets/assets/HeroRunning2.webp": "47a3a240109935e7a0b5be75ebde4f0a",
"assets/assets/goose2.webp": "da904e7043cb3ba6ea5c09296d8a03fa",
"assets/assets/sub.webp": "f89ac60380c804d3bea714286b6e54a9",
"assets/assets/coach-bus.webp": "e8b47f5e89fc953a3fe4a4f2b2ee3523",
"assets/assets/lion3.webp": "89ecdae546925544747e9c00b0c2f42b",
"assets/assets/green-docagon.webp": "05e0d04e7f8fda87fcaa6312e8993a76",
"assets/assets/bluecross.webp": "d7e72bb435a2f9e80b6da077947fdd97",
"assets/assets/food.webp": "3d3e21373c5279968b5a9e839d71e142",
"assets/assets/alfa.webp": "1615bd8297b52a4df26c196a2938db64",
"assets/assets/man3.webp": "1af4c07e1cd626a677c2a68ccc7dc7e8",
"assets/assets/wood-desk.webp": "ab886d6e79c00595b6c8d3f9b0604ec4",
"assets/assets/1-5.webp": "6e3c5cdcd2c7720072fb6b929a085e58",
"assets/assets/audi.webp": "08c3cf438f0e39b587be22627dbc4441",
"assets/assets/hc5.webp": "a7d0946fd0675b24d02fe51cee9918bb",
"assets/assets/burj.webp": "dd082f423f5ba863dd94e16188e25465",
"assets/assets/work.webp": "d36339dc52cf6cf94311d20132750b6e",
"assets/assets/hmar5.webp": "e30c2a610208f365a52c3cc6cba2e196",
"assets/assets/HeroIdle0.webp": "b701fd340f2af978cebb1614110ea852",
"assets/assets/hiwr6.webp": "acb105ae13b103d5c963e45893691644",
"assets/assets/Wall_Beige_Left_Front.webp": "cfa9b57592ebbf65ccbf367e862b7eff",
"assets/assets/3-4.webp": "40f288cf4d187cd01daaa4491674afd0",
"assets/assets/blue-plus.webp": "0845ef8b8b9b4e0a65f62b65aa51c9d0",
"assets/assets/cat.webp": "5ad631f85e2437de4a036de1e18c985a",
"assets/assets/Wall_Beige_Right_Front.webp": "8f3d73dfa5606b0435d2c84badfc707d",
"assets/assets/3-5.webp": "24691eef3b7d5441fffd21534295cbfb",
"assets/assets/hiwr7.webp": "2fef825150cddf989bfcfd06d7f6b08e",
"assets/assets/purple-hexagon.webp": "a802c01a4f3e8c54d532bc21e0052fde",
"assets/assets/hmar4.webp": "45890632fe1aff91582ee6035913c81e",
"assets/assets/HeroIdle1.webp": "1d5443f7ae413f657da25b6ab8957e20",
"assets/assets/2-1.webp": "bd7871ae8bdcfebc8307c955ec16f40f",
"assets/assets/macbook.webp": "86288c337527e844383ec07f87fe2806",
"assets/assets/Wall_Black_Left_Front.webp": "749c2d6bb18dc166ab0892a78dd9a8e5",
"assets/assets/silverstar.webp": "c0a04a4b1913b036ab6217832ba3067a",
"assets/assets/hc4.webp": "f00e4e0d606ead6fa00bd0698688547b",
"assets/assets/macdesktop.webp": "5f466e21811c0a328c2e2e81d5cb5241",
"assets/assets/man2.webp": "9d102a5e79436cba48aff54e75a72336",
"assets/assets/grey-docagon.webp": "623f763afa90384116bb2a8118ed4038",
"assets/assets/1-4.webp": "e711fdfa9224000e338b52ecf88d8934",
"assets/assets/lion2.webp": "8e16a3f1cb03026cd8bffbdb79fecef4",
"assets/assets/red-plus.webp": "0f2807b2486bc6ce9c40e4ea269ab126",
"assets/assets/cow.webp": "d7c98d24c0fd610d96e28ceecd2b5adf",
"assets/assets/green-square.webp": "95d68266561215f63d741ea59da9c5a5",
"assets/assets/blue-pentagon.webp": "dd31ea1f5e387272575765b70d97e3ca",
"assets/assets/red-circle.webp": "26ac378669e751bd558ec45eec7a612c",
"assets/assets/HeroRunning3.webp": "71c42d3489e538d86455a94836e55790",
"assets/assets/goose3.webp": "7cb215d9168f503b16e39dd88ef05d1e",
"assets/assets/AppIcon.png": "411bdc8f7dfc47d54af4d6e699c81a80",
"assets/assets/ImageWordAssociation.webp": "7857c8f08627e0f873253e3144de20e7",
"assets/assets/ha4.webp": "6cc2d1e27a2d2d20773e651b8bbe530e",
"assets/assets/pentagon.webp": "76f0d9b744c6854c18ab5df9bff6baa8",
"assets/assets/MemorizeAndRewrite.webp": "08b7508fb7e572d7817ad1ad536c4897",
"assets/assets/green-hexagon.webp": "11b9f80e66f7293702656fdf651e740a",
"assets/assets/Wall_Frame_Back.webp": "3c872f756b39b1cefd63389c82bdec28",
"assets/assets/Wall_Red_Right_Front.webp": "41d69bb56d4f0250021b4a26b5517145",
"assets/assets/coffee.webp": "dfee96ccb320d6e09e3643112c8294e2",
"assets/assets/uofm%2520logo.webp": "62c5e8f7a92f8bb0e621680238932ba7",
"assets/assets/grey-pentagon.webp": "fcc77bfe631d73dcde9118d74047c0e5",
"assets/assets/purple-rectangle.webp": "f14ab1f91664c65d7212d13abec51d35",
"assets/assets/sushi.webp": "7780d6db68146aec7f96e3dfd07bd381",
"assets/assets/camera.webp": "af4a92a6d85fcf1ebf2b923523493bc8",
"assets/assets/green-circle.webp": "eac7545fc78dd6546a838b57b90adc46",
"assets/assets/blue-rectangle.webp": "144ae3764b02d841369fb0111b77a502",
"assets/assets/red-square.webp": "d57ece441c7483af51e3c6d884959d33",
"assets/assets/1-3.webp": "6dd1225d40c1cd7f46d0e378234b6abb",
"assets/assets/Floor.webp": "43cccd8f6e70525e3ce9b1ad87420ebb",
"assets/assets/orange-plus.webp": "721adfdc7b7c40499e18fc8fc71f45c6",
"assets/assets/hc3.webp": "8b67115d74a86db143fb3e4950415044",
"assets/assets/Wall_Beige_Left_Back.webp": "1428b1111f04008dc021868948af5793",
"assets/assets/high-boots.webp": "6c4ba446ab05093532d1d062eec713e9",
"assets/assets/2-6.webp": "71c1e7ad6380c6b2cd45794da9099760",
"assets/assets/hmar3.webp": "3f63b63db92f6fded26c80e79c489b70",
"assets/assets/lion.webp": "00d267129d40b8b16df318a7c5b4fb2b",
"assets/assets/Chair.webp": "5825690619a1743bf6d2d6345f74e469",
"assets/assets/Wall_Red_Left_Front.webp": "ad6e0ccf694eeafff4b1e2c9d2632f9a",
"assets/assets/3-2.webp": "1f042040f73f567ea3eac78c35e27384",
"assets/assets/food2.webp": "0a1c30ce5455cf3abcce40f661dacd8c",
"assets/assets/lamp.webp": "1bf7b65a2826b292ffa24c14cb614b20",
"assets/assets/aqua-trapezoid.webp": "9fd1f6b04e43e5b7f86bbc9713dcfaae",
"assets/assets/UpArrow.webp": "ac2767af3324fa7d79846a17931a8d56",
"assets/assets/server.webp": "2626a57493910c31afd396d857ceb81f",
"assets/assets/Wall_Black_Mid_Back.webp": "14dc67567e939847f6a2d1801ef4995a",
"assets/assets/GarbageCan.webp": "bab88b4f25a6261fd8d9f183c436ce7d",
"assets/assets/Wall_Black_Mid_Front.webp": "212165e8deb0576298dfd698096241b4",
"assets/assets/blue-hexagon.webp": "77395db7be92df711769e1a65de8fb91",
"assets/assets/wrong.mp3": "ef096bbc07b83ad6915634be5a900d42",
"assets/assets/red-rectangle.webp": "0ef2dbf43d7ed23ccdae84f0fa75ba09",
"assets/assets/background.webp": "2e49db1c2b458edffa927b737a8eee1d",
"assets/assets/m1.webp": "b40a3ba54975ec2b835b971b6390a538",
"assets/assets/unlocked.webp": "bea449bef9763b279b7f81df7eac25c2",
"assets/assets/ha3.webp": "7981b3e27a6c20014fa87b4bc86b14dd",
"assets/assets/correct.mp3": "565996f4858813f85e186e4074ad5d3f",
"assets/assets/dog.webp": "c0e6cd315d7cc5c45d2ce130e14c927d",
"assets/assets/HeroRunning4.webp": "4a965e7b03be304898cfbc75d0ffe13c",
"assets/assets/chicken.webp": "f2ba23f308bde216a38594e2038f6d66",
"assets/assets/bicycle3.webp": "cf606680d2919de6a5921855676047b6",
"assets/assets/VisualMemory.webp": "a99719383853708fc7fd17b2b4c8465c",
"assets/assets/HeroRunning5.webp": "71e859926a3d03ab1dd05a607ba51c77",
"assets/assets/bicycle2.webp": "dcbfe298b805ad922f7af50984e984f8",
"assets/assets/aboutus-1.webp": "4e32a11cf5562dcac6cd6e35722702d3",
"assets/assets/ha2.webp": "06f97f958f16555a253b3b21edf62855",
"assets/assets/mute.webp": "44230a59aa1eba84351c43fa5114754e",
"assets/assets/hv1.webp": "879fa9863bc62413935d839a5756c5fe",
"assets/assets/orange-trapezoid.webp": "94b2cc4fb784dc18bbe701fab5c7989e",
"assets/assets/no%2520mute.webp": "50507de0e134c0ee0d2031b1fd4aa265",
"assets/assets/Wall_Black_Right_Front.webp": "de95688e33431f7d720c765699295349",
"assets/assets/pig.webp": "8404e7786d7c0d03e1b140999546564e",
"assets/assets/car.webp": "e64dd0ab65c332013e8f9979f27c1bb8",
"assets/assets/3-3.webp": "89dc1d4db7ea1cfa60b15d44264c1a5c",
"assets/assets/blue-docagon.webp": "f621e6166f0b9fb0e73e15e1b3ef794e",
"assets/assets/food3.webp": "58aca788a08a1dd779e5102ce757afc1",
"assets/assets/hiwr1.webp": "110c6264267235e16781752ba4df79f2",
"assets/assets/hmar2.webp": "e8e5fc77b05c3314b9c7fdcc1e4d8ee4",
"assets/assets/ZMright.mp3": "289cc06114523615dba3d679d7320d54",
"assets/assets/emoji.webp": "de491582ea3987615ee985d90fcd5b09",
"assets/assets/hc2.webp": "9a9e7344cdc664d17292ae622d405cf8",
"assets/assets/square.webp": "daabf9bb625acd34c55e80911d153e55",
"assets/assets/plus.webp": "412a332ad37e187135562489376ed6a7",
"assets/assets/1-2.webp": "d605d97c283d4065f371ea6774d7d209",
"assets/assets/logout.webp": "9512031acfaf279dba00c92c91413768",
"assets/assets/4-1.webp": "e4603c63d43b2364701d6f430469069a",
"assets/assets/lack.webp": "aaa4ded45ad0d4a56d83a48279f09723",
"assets/assets/flying-goose.webp": "da904e7043cb3ba6ea5c09296d8a03fa",
"assets/assets/statue.webp": "32d4d673b139afc866e8c7b33ed81b66",
"assets/assets/green-trapezoid.webp": "a37f6b40d9f3adde36192a0e212efc50",
"assets/assets/la.webp": "cccedbb3a1e69add4d2ae01e12e721a8",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
