
/* V21 — guaranteed translations for the two editorial menu side phrases */
const menuSideCopyV21 = {
  vi:{left:'Vị Việt<br><em>gần gũi</em>',right:'Bữa cơm<br><em>ấm lòng</em>'},
  en:{left:'Vietnamese flavors<br><em>close to home</em>',right:'A warm meal<br><em>from the heart</em>'},
  ko:{left:'베트남의 맛<br><em>정겹게</em>',right:'따뜻한 한 끼<br><em>마음을 담아</em>'},
  ru:{left:'Вкус Вьетнама<br><em>как дома</em>',right:'Тёплый стол<br><em>от сердца</em>'},
  zh:{left:'越南风味<br><em>亲切如家</em>',right:'温暖一餐<br><em>用心呈现</em>'}
};
function applyMenuSideCopyV21(lang){
  const c=menuSideCopyV21[lang]||menuSideCopyV21.vi;
  const l=document.querySelector('[data-i18n="menuScriptLeft"]');
  const r=document.querySelector('[data-i18n="menuScriptRight"]');
  if(l) l.innerHTML=c.left;
  if(r) r.innerHTML=c.right;
}


const fallback = [{"category": "Khai vị", "name": "Gỏi cuốn", "price": 120000, "description": "Spring rolls — thanh nhẹ, tươi mát.", "image": "/dish-images/khai-v-01.jpg", "sort_order": 1}, {"category": "Khai vị", "name": "Chả giò rế con tôm", "price": 150000, "description": "Shrimp spring rolls giòn thơm.", "image": "/dish-images/khai-v-02.jpg", "sort_order": 2}, {"category": "Khai vị", "name": "Chả giò", "price": 120000, "description": "Chả giò chiên vàng theo phong vị Việt.", "image": "/dish-images/khai-v-03.jpg", "sort_order": 3}, {"category": "Khai vị", "name": "Khoai tây chiên", "price": 80000, "description": "Món ăn nhẹ giòn nóng.", "image": "/dish-images/khai-v-04.jpg", "sort_order": 4}, {"category": "Khai vị", "name": "Bún chả Hà Nội", "price": 140000, "description": "Bún, thịt nướng và rau thơm.", "image": "/dish-images/khai-v-05.jpg", "sort_order": 5}, {"category": "Khai vị", "name": "Phở bò", "price": 100000, "description": "Phở bò nóng, hương vị quen thuộc.", "image": "/dish-images/khai-v-06.jpg", "sort_order": 6}, {"category": "Khai vị", "name": "Bánh xèo", "price": 150000, "description": "Vietnamese pancake giòn thơm.", "image": "/dish-images/khai-v-07.jpg", "sort_order": 7}, {"category": "Rau & Trứng", "name": "Rau muống xào tỏi", "price": 100000, "description": "Rau muống xào tỏi thơm.", "image": "/dish-images/rau-tr-ng-01.jpg", "sort_order": 8}, {"category": "Rau & Trứng", "name": "Rau muống xào bò", "price": 130000, "description": "Rau muống xào cùng thịt bò.", "image": "/dish-images/rau-tr-ng-02.jpg", "sort_order": 9}, {"category": "Rau & Trứng", "name": "Cải thìa xào tỏi", "price": 110000, "description": "Cải thìa xào tỏi.", "image": "/dish-images/rau-tr-ng-03.jpg", "sort_order": 10}, {"category": "Rau & Trứng", "name": "Cải thìa xào bò", "price": 140000, "description": "Cải thìa xào cùng thịt bò.", "image": "/dish-images/rau-tr-ng-04.jpg", "sort_order": 11}, {"category": "Rau & Trứng", "name": "Rau củ luộc kho quẹt", "price": 120000, "description": "Rau củ luộc dùng cùng sốt kho quẹt.", "image": "/dish-images/rau-tr-ng-05.jpg", "sort_order": 12}, {"category": "Rau & Trứng", "name": "Salad dầu dấm", "price": 100000, "description": "Salad thanh nhẹ với dầu giấm.", "image": "/dish-images/rau-tr-ng-06.jpg", "sort_order": 13}, {"category": "Rau & Trứng", "name": "Salad bò trứng", "price": 140000, "description": "Salad bò và trứng.", "image": "/dish-images/rau-tr-ng-07.jpg", "sort_order": 14}, {"category": "Rau & Trứng", "name": "Trứng chiên thịt bằm", "price": 120000, "description": "Trứng chiên cùng thịt bằm.", "image": "/dish-images/rau-tr-ng-08.jpg", "sort_order": 15}, {"category": "Rau & Trứng", "name": "Trứng chiên", "price": 80000, "description": "Trứng chiên kiểu nhà.", "image": "/dish-images/rau-tr-ng-09.jpg", "sort_order": 16}, {"category": "Cơm", "name": "Cơm chiên dưa bò", "price": 170000, "description": "Cơm chiên với bò và dưa.", "image": "/dish-images/c-m-01.jpg", "sort_order": 17}, {"category": "Cơm", "name": "Cơm chiên hải sản trái thơm", "price": 220000, "description": "Cơm chiên hải sản và thơm.", "image": "/dish-images/c-m-02.jpg", "sort_order": 18}, {"category": "Cơm", "name": "Cơm chiên ghẹ", "price": 200000, "description": "Cơm chiên thịt ghẹ.", "image": "/dish-images/c-m-03.jpg", "sort_order": 19}, {"category": "Cơm", "name": "Cơm chiên trứng", "price": 90000, "description": "Cơm chiên trứng giản dị.", "image": "/dish-images/c-m-04.jpg", "sort_order": 20}, {"category": "Cơm", "name": "Cơm tấm", "price": 150000, "description": "Cơm tấm với thịt nướng.", "image": "/dish-images/c-m-05.jpg", "sort_order": 21}, {"category": "Mỳ / Miến", "name": "Mỳ xào bò", "price": 150000, "description": "Mỳ xào cùng thịt bò.", "image": "/dish-images/m-mi-n-01.jpg", "sort_order": 22}, {"category": "Mỳ / Miến", "name": "Mỳ xào hải sản", "price": 170000, "description": "Mỳ xào hải sản.", "image": "/dish-images/m-mi-n-02.jpg", "sort_order": 23}, {"category": "Mỳ / Miến", "name": "Miến xào hải sản", "price": 200000, "description": "Miến xào cùng hải sản.", "image": "/dish-images/m-mi-n-03.jpg", "sort_order": 24}, {"category": "Mỳ / Miến", "name": "Miến xào bò", "price": 170000, "description": "Miến xào cùng thịt bò.", "image": "/dish-images/m-mi-n-04.jpg", "sort_order": 25}, {"category": "Thịt", "name": "Ba chỉ rim tôm", "price": 170000, "description": "Ba chỉ rim cùng tôm đậm vị.", "image": "/dish-images/th-t-01.jpg", "sort_order": 26}, {"category": "Thịt", "name": "Ba chỉ cháy cạnh", "price": 120000, "description": "Ba chỉ áp chảo cháy cạnh.", "image": "/dish-images/th-t-02.jpg", "sort_order": 27}, {"category": "Thịt", "name": "Ba chỉ luộc chấm mắm tôm / mắm nêm", "price": 120000, "description": "Ba chỉ luộc ăn cùng mắm.", "image": "/dish-images/th-t-03.jpg", "sort_order": 28}, {"category": "Thịt", "name": "Ba chỉ kho tiêu", "price": 150000, "description": "Ba chỉ kho tiêu đậm đà.", "image": "/dish-images/th-t-04.jpg", "sort_order": 29}, {"category": "Thịt", "name": "Sườn non xào chua ngọt", "price": 200000, "description": "Sườn non sốt chua ngọt.", "image": "/dish-images/th-t-05.jpg", "sort_order": 30}, {"category": "Thịt", "name": "Sườn nướng mật ong", "price": 250000, "description": "Sườn nướng mật ong.", "image": "/dish-images/th-t-06.jpg", "sort_order": 31}, {"category": "Thịt", "name": "Cánh gà chiên nước mắm", "price": 200000, "description": "Cánh gà chiên nước mắm.", "image": "/dish-images/th-t-07.jpg", "sort_order": 32}, {"category": "Thịt", "name": "Gà kho sả ớt", "price": 200000, "description": "Gà kho cùng sả và ớt.", "image": "/dish-images/th-t-08.jpg", "sort_order": 33}, {"category": "Hải sản", "name": "Mực chiên giòn", "price": 250000, "description": "Mực chiên giòn.", "image": "/dish-images/h-i-s-n-01.jpg", "sort_order": 34}, {"category": "Hải sản", "name": "Mực trứng chiên nước mắm", "price": 270000, "description": "Mực trứng chiên nước mắm.", "image": "/dish-images/h-i-s-n-02.jpg", "sort_order": 35}, {"category": "Hải sản", "name": "Mực trứng nướng sa tế", "price": 350000, "description": "Mực trứng nướng sa tế.", "image": "/dish-images/h-i-s-n-03.jpg", "sort_order": 36}, {"category": "Hải sản", "name": "Mực trứng hấp hành gừng", "price": 270000, "description": "Mực trứng hấp hành và gừng.", "image": "/dish-images/h-i-s-n-04.jpg", "sort_order": 37}, {"category": "Hải sản", "name": "Mực xào chua ngọt", "price": 250000, "description": "Mực xào sốt chua ngọt.", "image": "/dish-images/h-i-s-n-05.jpg", "sort_order": 38}, {"category": "Hải sản", "name": "Tôm nướng mọi", "price": 350000, "description": "Tôm nướng giữ vị nguyên bản.", "image": "/dish-images/h-i-s-n-06.jpg", "sort_order": 39}, {"category": "Hải sản", "name": "Tôm hấp", "price": 300000, "description": "Tôm hấp nóng.", "image": "/dish-images/h-i-s-n-07.jpg", "sort_order": 40}, {"category": "Hải sản", "name": "Tôm sốt trứng muối", "price": 300000, "description": "Tôm cùng sốt trứng muối.", "image": "/dish-images/h-i-s-n-08.jpg", "sort_order": 41}, {"category": "Hải sản", "name": "Tôm sú chiên giòn", "price": 300000, "description": "Tôm sú chiên giòn.", "image": "/dish-images/h-i-s-n-09.jpg", "sort_order": 42}, {"category": "Cá", "name": "Cá bớp kho tộ", "price": 170000, "description": "Cá bớp kho tộ.", "image": "/dish-images/c-01.jpg", "sort_order": 43}, {"category": "Cá", "name": "Cá bớp nướng muối ớt", "price": 170000, "description": "Cá bớp nướng muối ớt.", "image": "/dish-images/c-02.jpg", "sort_order": 44}, {"category": "Cá", "name": "Cá lóc kho tộ", "price": 140000, "description": "Cá lóc kho tộ.", "image": "/dish-images/c-03.jpg", "sort_order": 45}, {"category": "Cá", "name": "Cá diêu hồng hấp Hongkong", "price": 350000, "description": "Cá diêu hồng hấp kiểu Hong Kong.", "image": "/dish-images/c-04.jpg", "sort_order": 46}, {"category": "Canh", "name": "Canh cải xanh tôm bằm", "price": 150000, "description": "Canh cải xanh với tôm bằm.", "image": "/dish-images/canh-01.jpg", "sort_order": 47}, {"category": "Canh", "name": "Canh bầu nấu tôm", "price": 150000, "description": "Canh bầu nấu tôm.", "image": "/dish-images/canh-02.jpg", "sort_order": 48}, {"category": "Canh", "name": "Canh cà chua nấu trứng", "price": 120000, "description": "Canh cà chua và trứng.", "image": "/dish-images/canh-03.jpg", "sort_order": 49}, {"category": "Canh", "name": "Canh rau muống tỏi nấu tôm", "price": 150000, "description": "Canh rau muống nấu tôm.", "image": "/dish-images/canh-04.jpg", "sort_order": 50}, {"category": "Canh", "name": "Canh chua cá bớp", "price": 200000, "description": "Canh chua cá bớp.", "image": "/dish-images/canh-05.jpg", "sort_order": 51}, {"category": "Canh", "name": "Canh chua cá lóc", "price": 170000, "description": "Canh chua cá lóc.", "image": "/dish-images/canh-06.jpg", "sort_order": 52}, {"category": "Đặc biệt", "name": "Hải sản sốc", "price": 999999, "description": "Seafood with sauce — món hải sản đặc biệt của nhà.", "image": "/dish-images/c-bi-t-01.jpg", "sort_order": 53}, {"category": "Đặc biệt", "name": "Set 1", "price": 499000, "description": "Phở bò · Cơm chiên trái thơm · Bún chả · Rau muống xào tỏi · 2 bia/coca.", "image": "/dish-images/c-bi-t-02.jpg", "sort_order": 54}, {"category": "Đặc biệt", "name": "Set 2", "price": 499000, "description": "Phở bò · Cơm chiên dưa bò · Bánh xèo · Rau muống xào tỏi · 2 bia/coca.", "image": "/dish-images/c-bi-t-03.jpg", "sort_order": 55}, {"category": "Đồ uống", "name": "Nước ép thơm", "price": 55000, "description": "Pineapple juice.", "image": "/dish-images/u-ng-01.jpg", "sort_order": 56}, {"category": "Đồ uống", "name": "Nước ép dưa hấu", "price": 40000, "description": "Watermelon juice.", "image": "/dish-images/u-ng-02.jpg", "sort_order": 57}, {"category": "Đồ uống", "name": "Nước ép xoài", "price": 55000, "description": "Mango juice.", "image": "/dish-images/u-ng-03.jpg", "sort_order": 58}, {"category": "Đồ uống", "name": "Nước ép cam", "price": 55000, "description": "Orange juice.", "image": "/dish-images/u-ng-04.jpg", "sort_order": 59}, {"category": "Đồ uống", "name": "Nước chanh dây", "price": 55000, "description": "Passion fruit juice.", "image": "/dish-images/u-ng-05.jpg", "sort_order": 60}, {"category": "Đồ uống", "name": "Nước dừa", "price": 35000, "description": "Coconut.", "image": "/dish-images/u-ng-06.jpg", "sort_order": 61}, {"category": "Đồ uống", "name": "Bia Tiger", "price": 30000, "description": "Tiger Beer.", "image": "/dish-images/u-ng-07.jpg", "sort_order": 62}, {"category": "Đồ uống", "name": "Bia Tiger bạc", "price": 30000, "description": "Tiger Crystal Beer.", "image": "/dish-images/u-ng-08.jpg", "sort_order": 63}, {"category": "Đồ uống", "name": "Sochu tuyền thống", "price": 120000, "description": "Soju.", "image": "/dish-images/u-ng-09.jpg", "sort_order": 64}, {"category": "Đồ uống", "name": "Nước suối", "price": 15000, "description": "Water.", "image": "/dish-images/u-ng-10.jpg", "sort_order": 65}, {"category": "Đồ uống", "name": "Coca", "price": 25000, "description": "Coke.", "image": "/dish-images/u-ng-11.jpg", "sort_order": 66}, {"category": "Đồ uống", "name": "7 Up", "price": 25000, "description": "7 Up.", "image": "/dish-images/u-ng-12.jpg", "sort_order": 67}];

async function getMenu(){
  try{
    const r=await fetch("/api/menu");
    if(!r.ok) throw new Error();
    return await r.json();
  }catch(e){ return fallback; }
}
function dishCard(d){
  return `<article class="dish"><div class="dish-image"><img src="${d.image}" alt="${d.name}" draggable="false" loading="eager"></div><div class="dish-name">${d.name}</div></article>`;
}
const premiumMenu = [{"name": "Phở Bò", "image": "/premium-menu-images/dish-01.jpg"}, {"name": "Gỏi Cuốn", "image": "/premium-menu-images/dish-02.jpg"}, {"name": "Bánh Mì", "image": "/premium-menu-images/dish-03.jpg"}, {"name": "Thịt Kho Tàu", "image": "/premium-menu-images/dish-04.jpg"}, {"name": "Tôm Rim", "image": "/premium-menu-images/dish-05.jpg"}, {"name": "Bún Thịt Nướng", "image": "/premium-menu-images/dish-06.jpg"}, {"name": "Bún Bò Huế", "image": "/premium-menu-images/dish-07.jpg"}, {"name": "Bánh Xèo", "image": "/premium-menu-images/dish-08.jpg"}, {"name": "Nem Nướng", "image": "/premium-menu-images/dish-09.jpg"}, {"name": "Cơm Gà", "image": "/premium-menu-images/dish-10.jpg"}, {"name": "Cơm Chiên", "image": "/premium-menu-images/dish-11.jpg"}, {"name": "Lẩu Thái", "image": "/premium-menu-images/dish-12.jpg"}, {"name": "Mực Nướng", "image": "/premium-menu-images/dish-13.jpg"}, {"name": "Ếch Xào Sả Ớt", "image": "/premium-menu-images/dish-14.jpg"}, {"name": "Cá Kho Tộ", "image": "/premium-menu-images/dish-15.jpg"}, {"name": "Gỏi Hải Sản", "image": "/premium-menu-images/dish-16.jpg"}, {"name": "Chè Sen", "image": "/premium-menu-images/dish-17.jpg"}, {"name": "Bún Chả", "image": "/premium-menu-images/dish-18.jpg"}, {"name": "Đậu Hũ Chiên", "image": "/premium-menu-images/dish-19.jpg"}, {"name": "Chè Xoài", "image": "/premium-menu-images/dish-20.jpg"}];

async function renderMenu(){
  const half = 10;
  const top = premiumMenu.slice(0,half).map(dishCard).join("");
  const bottom = premiumMenu.slice(half).map(dishCard).join("");
  document.querySelector("#rowA").innerHTML = top + top;
  document.querySelector("#rowB").innerHTML = bottom + bottom;
}
renderMenu();

/* V13 scroll-linked reveal: tied directly to actual page scroll.
   Scroll down = text moves in. Stop = animation stops. Scroll up = text moves back out. */
const scrubs=[...document.querySelectorAll(".scrub")];
scrubs.forEach((el,i)=>el.style.setProperty("--side",i%2 ? "1" : "-1"));

function updateScrub(){
  const vh = window.innerHeight || document.documentElement.clientHeight;
  scrubs.forEach(el=>{
    const r = el.getBoundingClientRect();

    // Start as the element approaches the viewport bottom,
    // finish before it reaches the main reading zone.
    const startLine = vh * 1.02;
    const finishLine = vh * 0.70;
    const raw = (startLine - r.top) / (startLine - finishLine);
    const t = Math.max(0, Math.min(1, raw));
    const p = 1 - Math.pow(1 - t, 2.2);

    el.style.setProperty("--p", p.toFixed(4));
  });
}

let scrubRAF = 0;
function requestScrubUpdate(){
  if (scrubRAF) return;
  scrubRAF = requestAnimationFrame(()=>{
    updateScrub();
    scrubRAF = 0;
  });
}

window.addEventListener("scroll", requestScrubUpdate, {passive:true});
window.addEventListener("wheel", requestScrubUpdate, {passive:true});
window.addEventListener("resize", requestScrubUpdate, {passive:true});
window.addEventListener("load", updateScrub);
updateScrub();

/* Smooth wheel with inertia on desktop. */
if(matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches){
  let target=scrollY,current=scrollY,raf=0;
  function maxY(){return Math.max(0,document.documentElement.scrollHeight-innerHeight)}
  function frame(){
    current+=(target-current)*.105;
    scrollTo(0,current);
    if(Math.abs(target-current)>.35) raf=requestAnimationFrame(frame);
    else{current=target;scrollTo(0,current);raf=0}
  }
  addEventListener("wheel",e=>{
    if(document.querySelector(".modal.open")) return;
    e.preventDefault();
    target=Math.max(0,Math.min(maxY(),target+e.deltaY*.92));
    current=scrollY;
    if(!raf) raf=requestAnimationFrame(frame);
  },{passive:false});
  addEventListener("scroll",()=>{if(!raf){target=scrollY;current=scrollY}},{passive:true});
}

/* Slow cinematic internal navigation. */
function slowTo(el,duration=2900){
  const sy=scrollY,ey=el.getBoundingClientRect().top+scrollY,d=ey-sy,t0=performance.now();
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  function f(now){const p=Math.min(1,(now-t0)/duration);scrollTo(0,sy+d*ease(p));if(p<1)requestAnimationFrame(f)}
  requestAnimationFrame(f);
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const href=a.getAttribute("href");
  const el=document.querySelector(href);if(!el)return;
  e.preventDefault();
  if(href==="#menu"){
    const target=el.querySelector(".menu-head")||el;
    slowToViewport(target,1500,18);
  }else{
    slowToOffset(el,1500,0);
  }
}));
function slowToOffset(el,duration=1500,offset=0){
  const sy=scrollY,ey=el.getBoundingClientRect().top+scrollY+offset,d=ey-sy,t0=performance.now();
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  function f(now){const p=Math.min(1,(now-t0)/duration);scrollTo(0,sy+d*ease(p));if(p<1)requestAnimationFrame(f)}
  requestAnimationFrame(f);
}
function slowToViewport(el,duration=1500,topGap=18){
  const sy=window.scrollY;
  const ey=el.getBoundingClientRect().top+window.scrollY-topGap;
  const d=ey-sy,t0=performance.now();
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  function f(now){
    const p=Math.min(1,(now-t0)/duration);
    window.scrollTo(0,sy+d*ease(p));
    if(p<1)requestAnimationFrame(f);
  }
  requestAnimationFrame(f);
}

/* Booking backed by SQLite API. */
const booking=document.querySelector("#bookingModal");
document.querySelectorAll("[data-book]").forEach(b=>b.onclick=()=>booking.classList.add("open"));
document.querySelector("[data-close]").onclick=()=>booking.classList.remove("open");
booking.onclick=e=>{if(e.target===booking)booking.classList.remove("open")};
document.querySelector("#bookingForm").onsubmit=async e=>{
  e.preventDefault();
  const status=document.querySelector("#bookingStatus");
  const body=Object.fromEntries(new FormData(e.target).entries());
  body.guests=Number(body.guests);
  status.textContent="Đang gửi...";
  try{
    const r=await fetch("/api/reservations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
    const j=await r.json();
    status.textContent=j.ok?"Đã ghi nhận yêu cầu đặt bàn.":"Không thể gửi yêu cầu.";
    if(j.ok)e.target.reset();
  }catch(err){status.textContent="Hãy chạy website bằng npm start để lưu đặt bàn vào database."}
};

/* Explore menu placeholder. */
const mm=document.querySelector("#menuModal");
document.querySelector("#exploreMenu").onclick=()=>mm.classList.add("open");
document.querySelector("[data-menu-close]").onclick=()=>mm.classList.remove("open");
mm.onclick=e=>{if(e.target===mm)mm.classList.remove("open")};

/* V16 language selector */
const translations={"vi": {"navStory": "Câu chuyện", "navMenu": "Thực đơn", "navContact": "Liên hệ", "reserve": "Đặt bàn", "heroEyebrow": "Bếp Việt · Vị nhà", "heroBody": "Một bàn ăn Việt ấm áp giữa Phú Quốc — nơi những món quen được phục vụ với sự chỉn chu, mộc mạc và tinh tế.", "discover": "Khám phá thực đơn", "storyTitle": "Một bữa cơm mang vị nhà.", "storyPlaceholder": "Viết status tại đây...", "storyLead": "Từ gỏi cuốn, bún chả Hà Nội đến cá kho tộ, hải sản và những bát canh nóng — thực đơn đi qua nhiều hương vị quen thuộc của bữa cơm Việt.", "storyBody": "Bếp Nhà Bà gìn giữ cảm giác thân thuộc của bữa cơm nhà trong một không gian chỉn chu và nhẹ nhàng.", "menuTitle": "Thực đơn Bếp Nhà Bà", "menuKicker": "TINH HOA ẨM THỰC VIỆT", "exploreMenuTitle": "KHÁM PHÁ MENU", "viewAll": "XEM TẤT CẢ MÓN ĂN", "ctaEyebrow": "HẸN NHAU BÊN BÀN ĂN", "ctaTitle": "Hẹn nhau bên một bữa cơm ngon.", "addressLabel": "Địa chỉ", "address1": "135 Trần Hưng Đạo, Khu phố 7, Dương Đông, Đặc khu Phú Quốc, tỉnh An Giang, Việt Nam", "address2": "Căn SA-03.58 Grand World, tỉnh An Giang, Việt Nam", "hotline": "Hotline", "location": "Phú Quốc · Việt Nam", "guestName": "Tên khách", "phone": "Số điện thoại", "guests": "Số khách", "submitBooking": "Gửi yêu cầu đặt bàn"}, "en": {"navStory": "Story", "navMenu": "Menu", "navContact": "Contact", "reserve": "Reserve a Table", "heroEyebrow": "Vietnamese Kitchen · Taste of Home", "heroBody": "A warm Vietnamese table in Phú Quốc, where familiar dishes are served with care, simplicity and refinement.", "discover": "Explore the menu", "storyTitle": "A meal that tastes like home.", "storyPlaceholder": "Write a story update here...", "storyLead": "From fresh spring rolls and Hanoi grilled pork noodles to clay-pot fish, seafood and steaming soups, the menu travels through familiar Vietnamese flavors.", "storyBody": "Bếp Nhà Bà preserves the comfort of a home-cooked meal in a thoughtful, gentle setting.", "menuTitle": "Bếp Nhà Bà Menu", "menuKicker": "THE ESSENCE OF VIETNAMESE CUISINE", "exploreMenuTitle": "EXPLORE THE MENU", "viewAll": "VIEW ALL DISHES", "ctaEyebrow": "A SEAT AT OUR TABLE", "ctaTitle": "Meet over a delicious meal.", "addressLabel": "Address", "address1": "135 Trần Hưng Đạo, Quarter 7, Dương Đông, Phú Quốc Special Zone, An Giang, Vietnam", "address2": "SA-03.58 Grand World, An Giang, Vietnam", "hotline": "Hotline", "location": "Phú Quốc · Vietnam", "guestName": "Name", "phone": "Phone", "guests": "Guests", "submitBooking": "Send reservation request"}, "ko": {"navStory": "이야기", "navMenu": "메뉴", "navContact": "문의", "reserve": "예약하기", "heroEyebrow": "베트남의 부엌 · 집의 맛", "heroBody": "푸꾸옥에서 만나는 따뜻한 베트남 식탁. 익숙한 음식에 정성과 담백함, 섬세함을 담았습니다.", "discover": "메뉴 둘러보기", "storyTitle": "집의 맛을 담은 한 끼.", "storyPlaceholder": "여기에 이야기를 작성하세요...", "storyLead": "월남쌈과 하노이 분짜부터 뚝배기 생선조림, 해산물, 따뜻한 국물 요리까지 베트남의 익숙한 맛을 담았습니다.", "storyBody": "Bếp Nhà Bà는 정갈하고 편안한 공간에서 집밥의 따뜻함을 이어갑니다.", "menuTitle": "Bếp Nhà Bà 메뉴", "menuKicker": "베트남 요리의 정수", "exploreMenuTitle": "메뉴 둘러보기", "viewAll": "전체 메뉴 보기", "ctaEyebrow": "우리의 식탁으로", "ctaTitle": "맛있는 한 끼로 만나요.", "addressLabel": "주소", "address1": "베트남 안장성 푸꾸옥 특별구 즈엉동 7구역 쩐흥다오 135", "address2": "베트남 안장성 Grand World SA-03.58", "hotline": "핫라인", "location": "푸꾸옥 · 베트남", "guestName": "이름", "phone": "전화번호", "guests": "인원", "submitBooking": "예약 요청 보내기"}, "ru": {"navStory": "История", "navMenu": "Меню", "navContact": "Контакты", "reserve": "Забронировать", "heroEyebrow": "Вьетнамская кухня · Вкус дома", "heroBody": "Тёплый вьетнамский стол на Фукуоке, где знакомые блюда подаются бережно, просто и изысканно.", "discover": "Открыть меню", "storyTitle": "Обед со вкусом дома.", "storyPlaceholder": "Напишите историю здесь...", "storyLead": "От свежих роллов и ханойского бунча до рыбы в глиняном горшочке, морепродуктов и горячих супов — меню объединяет знакомые вкусы Вьетнама.", "storyBody": "Bếp Nhà Bà сохраняет тепло домашней еды в спокойной и продуманной атмосфере.", "menuTitle": "Меню Bếp Nhà Bà", "menuKicker": "СУТЬ ВЬЕТНАМСКОЙ КУХНИ", "exploreMenuTitle": "ИЗУЧИТЬ МЕНЮ", "viewAll": "СМОТРЕТЬ ВСЕ БЛЮДА", "ctaEyebrow": "МЕСТО ЗА НАШИМ СТОЛОМ", "ctaTitle": "Встретимся за вкусным ужином.", "addressLabel": "Адрес", "address1": "135 Trần Hưng Đạo, квартал 7, Dương Đông, особая зона Фукуок, Анзянг, Вьетнам", "address2": "SA-03.58 Grand World, Анзянг, Вьетнам", "hotline": "Телефон", "location": "Фукуок · Вьетнам", "guestName": "Имя", "phone": "Телефон", "guests": "Гостей", "submitBooking": "Отправить запрос"}, "zh": {"navStory": "故事", "navMenu": "菜单", "navContact": "联系", "reserve": "预订餐桌", "heroEyebrow": "越南厨房 · 家的味道", "heroBody": "在富国岛感受温暖的越南餐桌，以细致、质朴而优雅的方式呈现熟悉的家常味道。", "discover": "探索菜单", "storyTitle": "一顿有家的味道的饭。", "storyPlaceholder": "在这里写故事...", "storyLead": "从越南春卷、河内烤肉米粉，到砂锅鱼、海鲜与热汤，菜单汇集了熟悉的越南风味。", "storyBody": "Bếp Nhà Bà 在精致而温柔的空间里，保留家常饭菜的亲切感。", "menuTitle": "Bếp Nhà Bà 菜单", "menuKicker": "越南美食精髓", "exploreMenuTitle": "探索菜单", "viewAll": "查看全部菜品", "ctaEyebrow": "欢迎入席", "ctaTitle": "相约一顿美味的饭。", "addressLabel": "地址", "address1": "越南安江省富国特别区阳东第7区陈兴道135号", "address2": "越南安江省 Grand World SA-03.58", "hotline": "热线", "location": "富国岛 · 越南", "guestName": "姓名", "phone": "电话", "guests": "人数", "submitBooking": "提交订位请求"}};
const langMeta={vi:["VI"],en:["EN"],ko:["KO"],ru:["RU"],zh:["ZH"]};
const flagSVG={"vi": "<svg viewBox=\"0 0 30 20\"><rect width=\"30\" height=\"20\" fill=\"#DA251D\"/><path fill=\"#FF0\" d=\"M15 4l1.4 4.3H21l-3.7 2.7 1.4 4.4-3.7-2.7-3.7 2.7 1.4-4.4L9 8.3h4.6z\"/></svg>", "en": "<svg viewBox=\"0 0 30 20\"><rect width=\"30\" height=\"20\" fill=\"#21468B\"/><path d=\"M0 0l30 20M30 0L0 20\" stroke=\"#fff\" stroke-width=\"4\"/><path fill=\"#fff\" d=\"M12 0h6v20h-6zM0 7h30v6H0z\"/><path fill=\"#C8102E\" d=\"M13 0h4v20h-4zM0 8h30v4H0z\"/></svg>", "ko": "<svg viewBox=\"0 0 36 24\" aria-hidden=\"true\">\n<rect width=\"36\" height=\"24\" fill=\"#fff\"/>\n<g transform=\"translate(18 12) rotate(-33.69)\">\n  <path d=\"M0-5a5 5 0 1 1 0 10 2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 1 0-5z\" fill=\"#CD2E3A\"/>\n  <path d=\"M0 5a5 5 0 1 1 0-10 2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 1 0 5z\" fill=\"#0047A0\"/>\n</g>\n<g fill=\"#111\">\n  <g transform=\"translate(7 5) rotate(-34)\"><rect x=\"-4\" y=\"-2.7\" width=\"8\" height=\"1\"/><rect x=\"-4\" y=\"-.5\" width=\"8\" height=\"1\"/><rect x=\"-4\" y=\"1.7\" width=\"8\" height=\"1\"/></g>\n  <g transform=\"translate(29 19) rotate(-34)\"><rect x=\"-4\" y=\"-2.7\" width=\"3.4\" height=\"1\"/><rect x=\".6\" y=\"-2.7\" width=\"3.4\" height=\"1\"/><rect x=\"-4\" y=\"-.5\" width=\"8\" height=\"1\"/><rect x=\"-4\" y=\"1.7\" width=\"3.4\" height=\"1\"/><rect x=\".6\" y=\"1.7\" width=\"3.4\" height=\"1\"/></g>\n  <g transform=\"translate(29 5) rotate(34)\"><rect x=\"-4\" y=\"-2.7\" width=\"3.4\" height=\"1\"/><rect x=\".6\" y=\"-2.7\" width=\"3.4\" height=\"1\"/><rect x=\"-4\" y=\"-.5\" width=\"3.4\" height=\"1\"/><rect x=\".6\" y=\"-.5\" width=\"3.4\" height=\"1\"/><rect x=\"-4\" y=\"1.7\" width=\"8\" height=\"1\"/></g>\n  <g transform=\"translate(7 19) rotate(34)\"><rect x=\"-4\" y=\"-2.7\" width=\"8\" height=\"1\"/><rect x=\"-4\" y=\"-.5\" width=\"3.4\" height=\"1\"/><rect x=\".6\" y=\"-.5\" width=\"3.4\" height=\"1\"/><rect x=\"-4\" y=\"1.7\" width=\"8\" height=\"1\"/></g>\n</g></svg>", "ru": "<svg viewBox=\"0 0 30 20\"><rect width=\"30\" height=\"20\" fill=\"#fff\"/><path fill=\"#1C57A5\" d=\"M0 6.67h30v6.66H0z\"/><path fill=\"#D52B1E\" d=\"M0 13.33h30V20H0z\"/></svg>", "zh": "<svg viewBox=\"0 0 30 20\"><rect width=\"30\" height=\"20\" fill=\"#DE2910\"/><path fill=\"#FFDE00\" d=\"M6 3l.9 2.8h3L7.5 7.5l.9 2.8L6 8.6l-2.4 1.7.9-2.8-2.4-1.7h3z\"/></svg>"};
const picker=document.querySelector(".language-picker"), current=document.querySelector("#languageCurrent"), menuLang=document.querySelector("#languageMenu");
function applyLanguage(lang){
 const d=translations[lang]||translations.vi;
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{if(d[el.dataset.i18n]!==undefined)el.innerHTML=d[el.dataset.i18n]});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{if(d[el.dataset.i18nPlaceholder]!==undefined)el.dataset.placeholder=d[el.dataset.i18nPlaceholder]});
 current.querySelector(".flag-icon").innerHTML=flagSVG[lang]; current.querySelector(".lang-code").textContent=langMeta[lang][0];
 localStorage.setItem("bnb-language",lang); picker.classList.remove("open");
}
current.addEventListener("click",e=>{e.stopPropagation();picker.classList.toggle("open")});
menuLang.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLanguage(b.dataset.lang)));
document.addEventListener("click",()=>picker.classList.remove("open"));
applyLanguage(localStorage.getItem("bnb-language")||"vi");

/* V17 — back to top, eased 1.5s scroll */
const backToTop = document.getElementById("backToTop");
const easeInOutCubic = t => t < .5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;

function smoothScrollTop(duration=1500){
  const startY = window.scrollY;
  const start = performance.now();
  function frame(now){
    const p = Math.min((now-start)/duration,1);
    window.scrollTo(0, startY * (1-easeInOutCubic(p)));
    if(p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
window.addEventListener("scroll",()=>{
  backToTop.classList.toggle("is-visible", window.scrollY > Math.max(520, window.innerHeight*.7));
},{passive:true});
backToTop.addEventListener("click",()=>smoothScrollTop(1500));

/* Keep menu side phrases synced with the currently selected language. */
document.addEventListener("click",function(e){
  const b=e.target.closest("[data-lang]");
  if(!b)return;
  const lang=b.getAttribute("data-lang");
  requestAnimationFrame(()=>applyMenuSideCopyV21(lang));
});
document.addEventListener("DOMContentLoaded",()=>{
  const saved=localStorage.getItem("bnb-lang")||localStorage.getItem("lang")||"vi";
  applyMenuSideCopyV21(saved);
});
