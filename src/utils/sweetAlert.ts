import Swal from 'sweetalert2';

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อเพิ่มสินค้าในตะกร้า
export const showAddToCartSuccess = (productName: string) => {
  Swal.fire({
    title: 'เพิ่มในตะกร้าแล้ว!',
    text: `${productName} ถูกเพิ่มในตะกร้าสินค้าแล้ว`,
    icon: 'success',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#3B82F6',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อเพิ่มสินค้าในรายการโปรด
export const showAddToFavoritesSuccess = (productName: string) => {
  Swal.fire({
    title: 'เพิ่มในรายการโปรดแล้ว!',
    text: `${productName} ถูกเพิ่มในรายการโปรดแล้ว`,
    icon: 'success',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#EF4444',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อลบสินค้าออกจากรายการโปรด
export const showRemoveFromFavorites = (productName: string) => {
  Swal.fire({
    title: 'ลบออกจากรายการโปรดแล้ว!',
    text: `${productName} ถูกลบออกจากรายการโปรดแล้ว`,
    icon: 'info',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#6B7280',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อแชร์สินค้า
export const showShareSuccess = (productName: string) => {
  Swal.fire({
    title: 'แชร์แล้ว!',
    text: `ลิงก์ของ ${productName} ถูกคัดลอกไปยังคลิปบอร์ดแล้ว`,
    icon: 'success',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#10B981',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อไม่พบผลการค้นหา
export const showNoResults = () => {
  Swal.fire({
    title: 'ไม่พบผลการค้นหา',
    text: 'ลองค้นหาด้วยคำค้นหาอื่น หรือปรับเปลี่ยนตัวกรอง',
    icon: 'info',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#3B82F6',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อ AR/VR ไม่พร้อมใช้งาน
export const showARVRNotAvailable = () => {
  Swal.fire({
    title: 'AR/VR ยังไม่พร้อมใช้งาน',
    text: 'ฟีเจอร์ AR/VR กำลังอยู่ในระหว่างการพัฒนา กรุณาติดตามข่าวสารล่าสุด',
    icon: 'info',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#8B5CF6',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};

// ฟังก์ชันสำหรับแสดงการแจ้งเตือนเมื่อไม่ได้รับอนุญาตให้ใช้กล้อง
export const showCameraPermissionDenied = () => {
  Swal.fire({
    title: 'ไม่ได้รับอนุญาตให้ใช้กล้อง',
    text: 'กรุณาอนุญาตให้เว็บไซต์ใช้กล้องเพื่อใช้งานฟีเจอร์ AR',
    icon: 'warning',
    confirmButtonText: 'ตกลง',
    confirmButtonColor: '#F59E0B',
    customClass: {
      popup: 'font-sukhumvit',
      title: 'font-sukhumvit',
      confirmButton: 'font-sukhumvit'
    }
  });
};
