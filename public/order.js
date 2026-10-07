
const CART_KEY="bnb-order-cart-v1";
const money=n=>new Intl.NumberFormat("vi-VN").format(Number(n||0))+" ₫";
const getCart=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY)||"[]")}catch{return[]}};
const setCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));renderCartBadge();renderCart()};
let menu=[],dish=null,qty=1;
const params=new URLSearchParams(location.search);
const dishId=Number(params.get("id"));

async function init(){
 menu=await fetch("/api/premium-menu").then(r=>r.json());
 dish=Number.isInteger(dishId) && dishId>=0 && dishId<menu.length ? menu[dishId] : null;
 if(!dish){
   document.getElementById("orderDishName").textContent="Không tìm thấy món";
   document.getElementById("addToOrder").disabled=true;
   return;
 }
 document.title=dish.name+" · Bếp Nhà Bà";
 orderDishImage.src=dish.image;orderDishImage.alt=dish.name;
 orderDishCategory.textContent=(dish.category||"Bếp Nhà Bà").toUpperCase();
 orderDishName.textContent=dish.name;
 orderDishPrice.textContent=money(dish.price);
 orderDishDescription.textContent=dish.description||"Một món ăn mang phong vị Việt, được chuẩn bị theo tinh thần bữa cơm nhà.";
 orderDishPairing.textContent=dish.pairing||"Rau thơm · Nước chấm nhà làm";
 updateQty();renderCartBadge();renderCart();
}
function updateQty(){qtyValue.textContent=qty;addOrderTotal.textContent=money((dish?.price||0)*qty)}
qtyMinus.onclick=()=>{qty=Math.max(1,qty-1);updateQty()};
qtyPlus.onclick=()=>{qty++;updateQty()};
addToOrder.onclick=()=>{
 const c=getCart(),note=dishNote.value.trim(),key=dish.name+"|"+note;
 const found=c.find(x=>x.key===key);
 if(found)found.qty+=qty;else c.push({key,name:dish.name,image:dish.image,price:dish.price,qty,note});
 setCart(c);openCart();qty=1;dishNote.value="";updateQty();
};
function renderCartBadge(){
 const n=getCart().reduce((s,x)=>s+x.qty,0);
 document.querySelectorAll("#orderCartCount").forEach(x=>x.textContent=n);
}
function renderCart(){
 const box=document.getElementById("cartItems");if(!box)return;
 const c=getCart();
 box.innerHTML=c.length?c.map((x,i)=>`<article class="cart-line">
 <img src="${x.image}" alt=""><div><h3>${x.name}</h3><p>${x.note||"Không có ghi chú"}</p><div class="cart-line-actions"><button type="button" data-dec="${i}">−</button><b>${x.qty}</b><button type="button" data-inc="${i}">+</button><button class="cart-remove" type="button" data-remove="${i}">Bỏ</button></div></div><strong>${money(x.price*x.qty)}</strong>
 </article>`).join(""):`<div class="empty-cart">Chưa có món nào trong đơn.<br><span>Chọn món từ thực đơn để bắt đầu.</span></div>`;
 const total=c.reduce((s,x)=>s+x.price*x.qty,0);
 cartTotal.textContent=checkoutTotal.textContent=money(total);
}
document.addEventListener("click",e=>{
 const c=getCart();
 if(e.target.matches("[data-inc]"))c[+e.target.dataset.inc].qty++;
 if(e.target.matches("[data-dec]"))c[+e.target.dataset.dec].qty=Math.max(1,c[+e.target.dataset.dec].qty-1);
 if(e.target.matches("[data-remove]"))c.splice(+e.target.dataset.remove,1);
 if(e.target.matches("[data-inc],[data-dec],[data-remove]"))setCart(c);
 if(e.target.closest("#orderCartButton"))openCart();
 if(e.target.matches("[data-close-cart]"))closeCart();
});
function openCart(){orderDrawer.classList.add("is-open");orderDrawer.setAttribute("aria-hidden","false")}
function closeCart(){orderDrawer.classList.remove("is-open");orderDrawer.setAttribute("aria-hidden","true")}
document.querySelectorAll('input[name="fulfillment"]').forEach(r=>r.onchange=()=>{
 const v=document.querySelector('input[name="fulfillment"]:checked').value;
 document.querySelector(".table-field").hidden=v!=="dinein";
 document.querySelector(".address-field").hidden=v!=="delivery";
});
checkoutForm.onsubmit=async e=>{
 e.preventDefault();const cart=getCart();if(!cart.length){checkoutStatus.textContent="Vui lòng chọn ít nhất một món.";return}
 const fd=new FormData(checkoutForm),payload=Object.fromEntries(fd.entries());
 payload.items=cart;payload.total=cart.reduce((s,x)=>s+x.price*x.qty,0);
 checkoutStatus.textContent="Đang gửi đơn...";
 try{
  const r=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  if(!r.ok)throw new Error();
  const data=await r.json();localStorage.removeItem(CART_KEY);renderCartBadge();renderCart();
  checkoutStatus.textContent="Đã nhận đơn "+(data.order_code||"")+". Nhà hàng sẽ xác nhận với bạn sớm.";
  checkoutForm.reset();
 }catch{checkoutStatus.textContent="Chưa gửi được đơn. Vui lòng thử lại."}
};
init();
