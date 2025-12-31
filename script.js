let i1 = 0;
let imgArr1 = [
  "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/605758714_122399572094001624_718387111796539664_n.jpg?_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=LDSppbPfyKsQ7kNvwFuKieD&_nc_oc=AdmS7gGQexEnVMvnEDkxVso2KVOHMP19aEkToAFPv2IZfeHu0roy1yEcrGR4UTQ7xb2Gmm_JYjFnh1pywls8darJ&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=CvVD4T3lJjATlTN6YlpuAQ&oh=00_AflD2S32l95I-2qWObpQQDMwUWfikv_LZefegn74MPQ3jg&oe=695AB242",
  "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/606455569_122399572118001624_4120988532791302641_n.jpg?_nc_cat=105&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nlX75dbUvC4Q7kNvwEeit4B&_nc_oc=Admj1QIK7zdNhQxGByWeaQsC1osJEhKwBAdCxSIXH9BH4YPcl2f_6YETUeaDB13cZebIUS1w9j8a8OSf2n19hQR4&_nc_zt=23&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=dv0P8isSfrq-COqImk0_kQ&oh=00_AfkqcPhmmBV1WRzM-h0Zb3vsSkrwMz1XKj39ITzmkycuKw&oe=695AB9F4",
  "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/603897142_122399571752001624_5676232323781199589_n.jpg?_nc_cat=102&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NZ-tCnXIENcQ7kNvwG6QpUi&_nc_oc=AdmWfIIhM-Me0T7zffQj3WH1_qJEEjdDyU6yiY4eEwJbGktqb2Ir9HGMeuy2wb1-XufDDsDSglFSqKiOcdt9y7cq&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=jpF0VsJtoaykGzaGZFuCwA&oh=00_AfkkNJnyPElxKB1zecM_4RAZNXdV07IJgITQs2NVMq2-dw&oe=695AA9D0",
  "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/607020768_122399572148001624_2007654715525293338_n.jpg?_nc_cat=110&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=jok7heIfmkoQ7kNvwFEFqOk&_nc_oc=AdlEj5tfui2OKHE2LfiHzs7dpAwUXJGqHwmcgPHbPRkH1x2HMK95lwqd8jYN3a83aZPMWLjduTuvopa32iP8c9ac&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=effkt3hbbQiKuwkYFoGpug&oh=00_Aflx7kBsVvo2AhbPoRRfl1aosIrDSwU8ZAVDHQW1bgwadw&oe=695AACBB",
  "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/605819821_122399571758001624_1647594171459558642_n.jpg?_nc_cat=105&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cUHjwjmkDeYQ7kNvwHYuktD&_nc_oc=AdnE5UUycglsEkBSHC-yVs6DEhN0HnxoNxsdfc7d-z6zmAvMtyf577aKm0UO408KCR5HVkT9kKIKsgrs2VTL0wAV&_nc_zt=23&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=0gCy9Qh_lxkd3qrJmiweyQ&oh=00_AfkUHSJ9Ix2MDrIwfji7doc04PSA3jmQND1Kmf9-D3d3hQ&oe=695AC957",
  "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/605327448_122399572088001624_1585254339315813297_n.jpg?_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=3oTRmi6ubV0Q7kNvwG-aZCC&_nc_oc=Adnx9J_XAf_0Xhzqd-cfFJwKQsCadUO1F5EDTrf4RcgO7mtwep_8YeczMGLLK5GHguIl_cYD47ErDWnc4P8KquLV&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=ZfXb8tiMZV8qQXS9dwVaYA&oh=00_AfkOdstid6RkPaC4ftw-PY776ZUEKLI4WL-4ZcGO2pFVEg&oe=695ABCB1",
  "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/605543051_122399572136001624_8899433377077408946_n.jpg?_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=f727a1&_nc_ohc=KibrMX6iz_UQ7kNvwFqkpOO&_nc_oc=AdkHs0APmzq-uFq1KeBpcYylv1xzHfnyO8-u-wo5QEhxPLXujo4hRNqLQi05aL_f4KPU8O6R8McoysUDrZFV0TF3&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=UnGAGYGz69Iu-NqA5sY9Qg&oh=00_AfkG8AS4sMGNe1_J-XZB8EWS178heS3O_QWUBaKNWGmS6Q&oe=695AC024"
];
function showImg1() {
  document.getElementById("ico1").src = imgArr1[i1];
  i1 = (i1 + 1) % imgArr1.length;
}

let i2 = 0;
let imgArr2 = [
  "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/525324460_122363531156001624_4613911025754993035_n.jpg?_nc_cat=105&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mJlwpycXHVQQ7kNvwEDbq9D&_nc_oc=Adl4t7ncp_R2PDHuGBrihFKbS44nUkAbHwxovCVI30LQu2LPwbrKLAvw0r1YJ22A4zqM29sC8uDibcQuXQrjvebf&_nc_zt=23&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=F7vlGKMV4IHOHpZSR_xhsw&oh=00_AfkQRbkLJafZBT0pdePDDZxKH4EAdbBN0priITYjq8S0UA&oe=695AC5D9",
  "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/525795276_122363990690001624_6157043489066294459_n.jpg?_nc_cat=110&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OhOsi3z65o4Q7kNvwF8xWy8&_nc_oc=Adm0TNsPFMi6uhD1JaSb_ffRTIYWIc7Up8ayTy0Zu13-r1XKO-q9-kPn_qf0-wVl_WIR9qGzFrOUUvyAxEj9vUzZ&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=ce_B7xpqe0eBeI58qgBSWQ&oh=00_AfmL6bExMVdY0AK0Nn3SPleDuJN7Vt-q97s01Dopxk8AEw&oe=695AC4C5",
  "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/557459081_122379935270001624_463442713436869169_n.jpg?_nc_cat=103&_nc_cb=99be929b-f3b7c874&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BSdfJ1yfUe8Q7kNvwExls9n&_nc_oc=AdmFQrf6mSHIU1BAHw0TDbPdWa8QXieu4LSRSnLiG2rjWbJecsmWkeSHOx8KL2304Lj9wElL3rYaP0rUz-P8kW2u&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=zefKVnIo_3OFKrqyF2UDNA&oh=00_AfkAgrUGqjQkrUiiwZ5jvyQ_8Ch8O9ZhjeNOXAOmXBAUXw&oe=695ABA96"
];
function showImg2() {
  document.getElementById("ico2").src = imgArr2[i2];
  i2 = (i2 + 1) % imgArr2.length;
}
showImg1();
showImg2();
setInterval(showImg1, 2000);
setInterval(showImg2, 2000);
