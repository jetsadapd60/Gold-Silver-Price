export interface Gold {
  bid: number; // รับซื้อ
  ask: number; // ขายออก

  bidKg: number; // รับซื้อทอง99.99/kg
  bidAs: number; // รับซื้อราคาสมาคม
  bidBg: number; // รับซื้อทอง96.50/บาททอง
  
  askKg: number; // ขายออกทอง99.99/kg,
  askBg: number; // ขายออกทอง96.50/บาททอง,
  askAs: number; // ขายออกราคาสมาคม
}

/*
bid=รับซื้อ,
ask=ขายออก,
kg=ทอง99.99/kg,
bg=ทอง96.50/บาททอง,
as=ราคาสมาคม
*/
